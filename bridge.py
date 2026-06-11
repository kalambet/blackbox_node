#!/usr/bin/env python3
"""MeshCore companion-radio bridge.

JSON-over-stdio subprocess driven by server.js: one JSON object per line.
Inbound commands on stdin, events on stdout. Spawned once per connection;
exits when the radio link is lost so the server can respawn it.
"""
from __future__ import annotations

import argparse
import asyncio
import base64
import json
import os
import sys
import threading
import time
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
PYDEPS = ROOT / "pydeps"
if str(PYDEPS) not in sys.path:
    sys.path.insert(0, str(PYDEPS))

CONTACT_TYPES = {1: "chat", 2: "repeater", 3: "room", 4: "sensor"}

TXT_TYPE_PLAIN = 0
TXT_TYPE_CLI_DATA = 1
TXT_TYPE_SIGNED_PLAIN = 2

DM_MAX_ATTEMPTS = 3
DM_FLOOD_RESET_AFTER = 2

CAPABILITIES = {
    "periodicTelemetry": False,
    "positionRequest": False,
    "neighborInfo": False,
    "channelUtil": False,
    "radioPresets": False,
    "maxPayload": 163,
    "e2eDm": True,
    "deliveryConfirm": True,
    "tracePath": True,
    "rooms": True,
    "remoteAdmin": True,
}

_emit_lock = threading.Lock()


def sanitize(value: Any) -> Any:
    if isinstance(value, (bytes, bytearray)):
        return value.hex()
    if isinstance(value, dict):
        return {str(k): sanitize(v) for k, v in value.items()}
    if isinstance(value, (list, tuple)):
        return [sanitize(v) for v in value]
    return value


def emit(message_type: str, payload: dict[str, Any]) -> None:
    line = json.dumps({"type": message_type, "payload": sanitize(payload)}, ensure_ascii=True)
    with _emit_lock:
        sys.stdout.write(line + "\n")
        sys.stdout.flush()


def emit_error(message: str, **extra: Any) -> None:
    payload = {"message": message}
    payload.update(extra)
    emit("error", payload)


def list_serial_ports() -> tuple[list[str], list[dict[str, Any]]]:
    from serial.tools import list_ports  # type: ignore

    available: list[dict[str, Any]] = []
    detected: list[str] = []
    likely_tokens = ("usbmodem", "usbserial", "ttyusb", "ttyacm", "wchusbserial", "slab")
    for port in list_ports.comports():
        device = str(port.device or "")
        available.append(
            {
                "device": device,
                "description": str(port.description or ""),
                "hwid": str(port.hwid or ""),
            }
        )
        if any(token in device.lower() for token in likely_tokens):
            detected.append(device)
    return detected, available


def snapshot_contacts(mc: Any) -> list[dict[str, Any]]:
    contacts: list[dict[str, Any]] = []
    for public_key, contact in (mc.contacts or {}).items():
        out_path_len = contact.get("out_path_len", -1)
        contacts.append(
            {
                "id": str(public_key),
                "name": str(contact.get("adv_name") or ""),
                "type": CONTACT_TYPES.get(contact.get("type"), "unknown"),
                "lastAdvert": contact.get("last_advert"),
                "latitude": contact.get("adv_lat"),
                "longitude": contact.get("adv_lon"),
                "outPathLen": out_path_len,
                "outPath": str(contact.get("out_path") or ""),
                "isFlood": out_path_len == -1,
                "flags": contact.get("flags"),
            }
        )
    return contacts


def resolve_contact(mc: Any, contact_id: str) -> dict[str, Any] | None:
    if not contact_id:
        return None
    contact = mc.get_contact_by_key_prefix(contact_id)
    if contact is None:
        contact = mc.get_contact_by_name(contact_id)
    return contact


def self_status(mc: Any, transport: str, address: str, battery: dict[str, Any] | None, device_info: dict[str, Any] | None) -> dict[str, Any]:
    info = mc.self_info or {}
    return {
        "connected": True,
        "transport": transport,
        "address": address,
        "localPubkey": str(info.get("public_key") or ""),
        "name": str(info.get("name") or ""),
        "advType": CONTACT_TYPES.get(info.get("adv_type"), "chat"),
        "latitude": info.get("adv_lat"),
        "longitude": info.get("adv_lon"),
        "radio": {
            "frequency": info.get("radio_freq"),
            "bandwidth": info.get("radio_bw"),
            "spreadingFactor": info.get("radio_sf"),
            "codingRate": info.get("radio_cr"),
            "txPower": info.get("tx_power"),
            "maxTxPower": info.get("max_tx_power"),
        },
        "advanced": {
            "multiAcks": info.get("multi_acks"),
            "advertLocPolicy": info.get("adv_loc_policy"),
            "telemetryModeBase": info.get("telemetry_mode_base"),
            "telemetryModeLoc": info.get("telemetry_mode_loc"),
            "telemetryModeEnv": info.get("telemetry_mode_env"),
            "manualAddContacts": info.get("manual_add_contacts"),
        },
        "battery": battery or {},
        "deviceInfo": device_info or {},
        "capabilities": CAPABILITIES,
    }


class Bridge:
    def __init__(self, mc: Any, transport: str, address: str) -> None:
        self.mc = mc
        self.transport = transport
        self.address = address
        self.battery: dict[str, Any] = {}
        self.device_info: dict[str, Any] = {}
        self._contacts_refresh_pending = False

    # ---- event wiring -------------------------------------------------

    async def start(self) -> None:
        from meshcore import EventType  # type: ignore

        mc = self.mc
        mc.auto_update_contacts = True

        device_info_event = await mc.commands.send_device_query()
        if device_info_event is not None and not device_info_event.is_error():
            self.device_info = dict(device_info_event.payload or {})
        battery_event = await mc.commands.get_bat()
        if battery_event is not None and not battery_event.is_error():
            self.battery = dict(battery_event.payload or {})

        await mc.ensure_contacts()

        mc.subscribe(EventType.CONTACT_MSG_RECV, self._on_contact_message)
        mc.subscribe(EventType.CHANNEL_MSG_RECV, self._on_channel_message)
        mc.subscribe(EventType.ADVERTISEMENT, self._on_advert)
        mc.subscribe(EventType.NEW_CONTACT, self._on_new_contact)
        mc.subscribe(EventType.PATH_UPDATE, self._on_path_update)
        mc.subscribe(EventType.DISCONNECTED, self._on_disconnected)

        await mc.start_auto_message_fetching()

        self.emit_status()
        emit("contacts", {"contacts": snapshot_contacts(mc)})

    def emit_status(self) -> None:
        emit("status", self_status(self.mc, self.transport, self.address, self.battery, self.device_info))

    async def _on_contact_message(self, event: Any) -> None:
        payload = event.payload or {}
        prefix = str(payload.get("pubkey_prefix") or "")
        contact = self.mc.get_contact_by_key_prefix(prefix)
        sender = str(contact.get("public_key")) if contact else prefix
        sender_name = str(contact.get("adv_name") or "") if contact else ""
        txt_type = int(payload.get("txt_type") or 0)
        message = {
            "sender": sender,
            "senderName": sender_name,
            "text": str(payload.get("text") or ""),
            "isDirectMessage": True,
            "channel": None,
            "snr": payload.get("SNR"),
            "senderTimestamp": payload.get("sender_timestamp"),
            "txtType": txt_type,
        }
        if txt_type == TXT_TYPE_CLI_DATA:
            emit("admin_reply", message)
        else:
            emit("inbound", message)

    async def _on_channel_message(self, event: Any) -> None:
        payload = event.payload or {}
        emit(
            "inbound",
            {
                "sender": "",
                "senderName": "",
                "text": str(payload.get("text") or ""),
                "isDirectMessage": False,
                "channel": payload.get("channel_idx"),
                "snr": payload.get("SNR"),
                "senderTimestamp": payload.get("sender_timestamp"),
                "txtType": TXT_TYPE_PLAIN,
            },
        )

    async def _on_advert(self, event: Any) -> None:
        emit("advert", {"publicKey": str((event.payload or {}).get("public_key") or "")})
        await self._refresh_contacts_soon()

    async def _on_new_contact(self, event: Any) -> None:
        contact = event.payload or {}
        emit(
            "pending_contact",
            {
                "id": str(contact.get("public_key") or ""),
                "name": str(contact.get("adv_name") or ""),
                "type": CONTACT_TYPES.get(contact.get("type"), "unknown"),
            },
        )

    async def _on_path_update(self, event: Any) -> None:
        await self._refresh_contacts_soon()

    async def _on_disconnected(self, event: Any) -> None:
        emit("status", {"connected": False, "transport": self.transport, "address": self.address, "error": "radio disconnected"})

    async def _refresh_contacts_soon(self) -> None:
        # Adverts can arrive in bursts; coalesce refreshes.
        if self._contacts_refresh_pending:
            return
        self._contacts_refresh_pending = True
        try:
            await asyncio.sleep(1.0)
            await self.mc.ensure_contacts(follow=True)
            emit("contacts", {"contacts": snapshot_contacts(self.mc)})
        finally:
            self._contacts_refresh_pending = False

    # ---- commands ------------------------------------------------------

    async def handle(self, message: dict[str, Any]) -> None:
        command = str(message.get("type") or "")
        payload = message.get("payload") or {}
        handler = getattr(self, f"cmd_{command}", None)
        if handler is None:
            emit_error(f"unknown command: {command}")
            return
        try:
            await handler(payload)
        except Exception as exc:  # surface, don't crash the bridge
            emit_error(f"{command} failed: {exc}", command=command)

    async def cmd_send_text(self, payload: dict[str, Any]) -> None:
        text = str(payload.get("text") or "")
        if payload.get("textBase64"):
            text = base64.b64decode(str(payload["textBase64"])).decode("utf-8")
        to = payload.get("to") or {}
        client_msg_id = payload.get("clientMsgId")

        if to.get("kind") == "broadcast":
            channel = int(to.get("channel") or 0)
            result = await self.mc.commands.send_chan_msg(channel, text)
            emit(
                "sent",
                {
                    "to": {"kind": "broadcast", "channel": channel},
                    "text": text,
                    "delivered": None,
                    "attempts": 1,
                    "clientMsgId": client_msg_id,
                    "ok": result is not None and not result.is_error(),
                },
            )
            return

        contact_id = str(to.get("id") or payload.get("destinationId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}", clientMsgId=client_msg_id)
            return
        outcome = await self._send_dm(contact, text)
        sent_payload = {
            "to": {"kind": "node", "id": str(contact.get("public_key"))},
            "text": text,
            "clientMsgId": client_msg_id,
            "ok": True,
        }
        sent_payload.update(outcome)
        emit("sent", sent_payload)
        if outcome.get("delivered"):
            emit(
                "delivered",
                {
                    "to": str(contact.get("public_key")),
                    "clientMsgId": client_msg_id,
                    "rttMs": outcome.get("rttMs"),
                    "attempts": outcome.get("attempts"),
                },
            )

    async def _send_dm(self, contact: dict[str, Any], text: str) -> dict[str, Any]:
        """Send with ack-confirmation and retry; resets path to flood late in the game.

        Mirrors meshcore_py's send_msg_with_retry, reimplemented so we can emit
        delivery confirmation with RTT (the lib helper hides the ack internals).
        """
        from meshcore import EventType  # type: ignore

        dest = bytes.fromhex(str(contact["public_key"]))
        started = time.monotonic()
        attempts = 0
        while attempts < DM_MAX_ATTEMPTS:
            if attempts == DM_FLOOD_RESET_AFTER and contact.get("out_path_len", -1) != -1:
                reset = await self.mc.commands.reset_path(dest)
                if reset is not None and not reset.is_error():
                    contact["out_path"] = ""
                    contact["out_path_len"] = -1
            result = await self.mc.commands.send_msg(dest, text, attempt=attempts)
            attempts += 1
            if result is None or result.is_error():
                continue
            expected_ack = result.payload["expected_ack"].hex()
            timeout = max(2.0, result.payload["suggested_timeout"] / 1000 * 1.2)
            ack = await self.mc.wait_for_event(EventType.ACK, {"code": expected_ack}, timeout=timeout)
            if ack is not None:
                return {
                    "delivered": True,
                    "attempts": attempts,
                    "rttMs": int((time.monotonic() - started) * 1000),
                }
        return {"delivered": False, "attempts": attempts, "rttMs": None}

    async def cmd_refresh_contacts(self, payload: dict[str, Any]) -> None:
        await self.mc.commands.get_contacts()
        emit("contacts", {"contacts": snapshot_contacts(self.mc)})

    async def cmd_send_advert(self, payload: dict[str, Any]) -> None:
        flood = bool(payload.get("flood"))
        result = await self.mc.commands.send_advert(flood=flood)
        if result is not None and result.is_error():
            emit_error(f"advert failed: {result.payload}")
            return
        emit("advert_sent", {"flood": flood})

    async def cmd_set_device_meta(self, payload: dict[str, Any]) -> None:
        commands = self.mc.commands
        if payload.get("name") is not None:
            await commands.set_name(str(payload["name"]))
        lat = payload.get("latitude")
        lon = payload.get("longitude")
        if lat is not None and lon is not None:
            await commands.set_coords(float(lat), float(lon))
        radio = payload.get("radio") or {}
        if radio:
            await commands.set_radio(
                float(radio["frequency"]),
                float(radio["bandwidth"]),
                int(radio["spreadingFactor"]),
                int(radio["codingRate"]),
            )
        if payload.get("txPower") is not None:
            await commands.set_tx_power(int(payload["txPower"]))
        tuning = payload.get("tuning") or {}
        if tuning:
            await commands.set_tuning(int(tuning.get("rxDelay") or 0), int(tuning.get("airtimeFactor") or 0))
        if payload.get("telemetryModeBase") is not None:
            await commands.set_telemetry_mode_base(int(payload["telemetryModeBase"]))
        if payload.get("manualAddContacts") is not None:
            await commands.set_manual_add_contacts(bool(payload["manualAddContacts"]))
        if payload.get("advertLocPolicy") is not None:
            await commands.set_advert_loc_policy(int(payload["advertLocPolicy"]))
        if payload.get("multiAcks") is not None:
            await commands.set_multi_acks(int(payload["multiAcks"]))
        if payload.get("blePin") is not None:
            await commands.set_devicepin(int(payload["blePin"]))
        # Refresh SELF_INFO so the new values land in the next status event.
        await commands.send_appstart()
        emit("device_meta_saved", {})
        self.emit_status()

    async def cmd_request_telemetry(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.req_telemetry_sync(contact, min_timeout=10)
        if result is None or (hasattr(result, "is_error") and result.is_error()):
            emit("telemetry", {"contactId": str(contact.get("public_key")), "name": str(contact.get("adv_name") or ""), "ok": False, "lpp": []})
            return
        emit(
            "telemetry",
            {
                "contactId": str(contact.get("public_key")),
                "name": str(contact.get("adv_name") or ""),
                "ok": True,
                "lpp": sanitize(result.payload),
            },
        )

    async def cmd_request_self_telemetry(self, payload: dict[str, Any]) -> None:
        result = await self.mc.commands.get_self_telemetry()
        battery = await self.mc.commands.get_bat()
        if battery is not None and not battery.is_error():
            self.battery = dict(battery.payload or {})
        emit(
            "telemetry",
            {
                "contactId": "self",
                "name": str((self.mc.self_info or {}).get("name") or ""),
                "ok": result is not None and not result.is_error(),
                "lpp": sanitize(result.payload) if result is not None and not result.is_error() else [],
                "battery": self.battery,
            },
        )

    async def cmd_trace_path(self, payload: dict[str, Any]) -> None:
        from meshcore import EventType  # type: ignore

        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        out_path = str(contact.get("out_path") or "")
        if contact.get("out_path_len", -1) == -1 or not out_path:
            emit("path", {"contactId": str(contact.get("public_key")), "ok": False, "reason": "no direct path known (flood routing); try path discovery first"})
            return
        result = await self.mc.commands.send_trace(path=bytes.fromhex(out_path))
        if result is None or result.is_error():
            emit("path", {"contactId": str(contact.get("public_key")), "ok": False, "reason": "trace send failed"})
            return
        tag = None
        sent_payload = result.payload or {}
        # send_trace returns MSG_SENT; the trace tag rides in TRACE_DATA matching our send
        timeout = max(5.0, sent_payload.get("suggested_timeout", 5000) / 1000 * 1.2) if isinstance(sent_payload, dict) else 10.0
        trace = await self.mc.wait_for_event(EventType.TRACE_DATA, timeout=timeout)
        if trace is None:
            emit("path", {"contactId": str(contact.get("public_key")), "ok": False, "reason": "trace timeout"})
            return
        emit(
            "path",
            {
                "contactId": str(contact.get("public_key")),
                "ok": True,
                "trace": sanitize(trace.payload),
            },
        )

    async def cmd_path_discovery(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.send_path_discovery_sync(bytes.fromhex(str(contact["public_key"])), min_timeout=10)
        emit(
            "path",
            {
                "contactId": str(contact.get("public_key")),
                "ok": result is not None and not (hasattr(result, "is_error") and result.is_error()),
                "discovery": sanitize(result.payload) if result is not None else None,
            },
        )

    async def cmd_reset_path(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.reset_path(bytes.fromhex(str(contact["public_key"])))
        if result is not None and result.is_error():
            emit_error(f"reset_path failed: {result.payload}")
            return
        await self._refresh_contacts_soon()
        emit("path_reset", {"contactId": str(contact.get("public_key"))})

    async def cmd_remove_contact(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.remove_contact(bytes.fromhex(str(contact["public_key"])))
        if result is not None and result.is_error():
            emit_error(f"remove_contact failed: {result.payload}")
            return
        self.mc.contacts.pop(str(contact.get("public_key")), None)
        emit("contacts", {"contacts": snapshot_contacts(self.mc)})

    async def cmd_share_contact(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.share_contact(bytes.fromhex(str(contact["public_key"])))
        emit("contact_shared", {"contactId": str(contact.get("public_key")), "ok": result is not None and not result.is_error()})

    async def cmd_export_contact(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        key = None
        if contact_id and contact_id != "self":
            contact = resolve_contact(self.mc, contact_id)
            if contact is None:
                emit_error(f"unknown contact: {contact_id}")
                return
            key = bytes.fromhex(str(contact["public_key"]))
        result = await self.mc.commands.export_contact(key)
        if result is None or result.is_error():
            emit_error("export_contact failed")
            return
        emit("contact_uri", {"contactId": contact_id or "self", "uri": str((result.payload or {}).get("uri") or "")})

    async def cmd_import_contact(self, payload: dict[str, Any]) -> None:
        uri = str(payload.get("uri") or "").strip()
        prefix = "meshcore://"
        if not uri.startswith(prefix):
            emit_error("invalid contact URI (expected meshcore://...)")
            return
        try:
            card = bytes.fromhex(uri[len(prefix):])
        except ValueError:
            emit_error("invalid contact URI hex payload")
            return
        result = await self.mc.commands.import_contact(card)
        if result is not None and result.is_error():
            emit_error(f"import_contact failed: {result.payload}")
            return
        await self.cmd_refresh_contacts({})

    async def cmd_add_pending_contact(self, payload: dict[str, Any]) -> None:
        key = str(payload.get("contactId") or "")
        contact = self.mc.pop_pending_contact(key)
        if contact is None:
            emit_error(f"no pending contact: {key}")
            return
        result = await self.mc.commands.add_contact(contact)
        if result is not None and result.is_error():
            emit_error(f"add_contact failed: {result.payload}")
            return
        await self.cmd_refresh_contacts({})

    async def cmd_get_channels(self, payload: dict[str, Any]) -> None:
        max_channels = int((self.device_info or {}).get("max_channels") or 8)
        channels = []
        for idx in range(max_channels):
            result = await self.mc.commands.get_channel(idx)
            if result is None or result.is_error():
                continue
            data = result.payload or {}
            channels.append(
                {
                    "index": data.get("channel_idx", idx),
                    "name": str(data.get("channel_name") or ""),
                    "secret": sanitize(data.get("channel_secret")),
                }
            )
        emit("channels", {"channels": channels})

    async def cmd_set_channel(self, payload: dict[str, Any]) -> None:
        index = int(payload.get("index") or 0)
        name = str(payload.get("name") or "")
        secret_hex = str(payload.get("secret") or "")
        secret = bytes.fromhex(secret_hex) if secret_hex else None
        result = await self.mc.commands.set_channel(index, name, secret)
        if result is not None and result.is_error():
            emit_error(f"set_channel failed: {result.payload}")
            return
        await self.cmd_get_channels({})

    async def cmd_get_device_info(self, payload: dict[str, Any]) -> None:
        commands = self.mc.commands
        battery = await commands.get_bat()
        if battery is not None and not battery.is_error():
            self.battery = dict(battery.payload or {})
        stats: dict[str, Any] = {}
        for label, getter in (
            ("core", commands.get_stats_core),
            ("radio", commands.get_stats_radio),
            ("packets", commands.get_stats_packets),
        ):
            result = await getter()
            if result is not None and not result.is_error():
                stats[label] = sanitize(result.payload)
        self.emit_status()
        emit("device_stats", {"stats": stats, "battery": self.battery})

    async def cmd_set_time(self, payload: dict[str, Any]) -> None:
        epoch = int(payload.get("epoch") or time.time())
        result = await self.mc.commands.set_time(epoch)
        if result is not None and result.is_error():
            emit_error(f"set_time failed: {result.payload}")
            return
        emit("time_set", {"epoch": epoch})

    async def cmd_reboot(self, payload: dict[str, Any]) -> None:
        emit("rebooting", {})
        await self.mc.commands.reboot()

    async def cmd_factory_reset(self, payload: dict[str, Any]) -> None:
        if not payload.get("confirm"):
            emit_error("factory_reset requires confirm: true")
            return
        token = await self.mc.commands.request_factory_reset()
        result = await self.mc.commands.confirm_factory_reset(token)
        if result is not None and result.is_error():
            emit_error(f"factory_reset failed: {result.payload}")
            return
        emit("factory_reset_done", {})

    async def cmd_export_private_key(self, payload: dict[str, Any]) -> None:
        result = await self.mc.commands.export_private_key()
        if result is None or result.is_error():
            emit_error("private key export failed or disabled on device")
            return
        emit("private_key", {"key": sanitize(result.payload)})

    async def cmd_import_private_key(self, payload: dict[str, Any]) -> None:
        key_hex = str(payload.get("key") or "")
        try:
            key = bytes.fromhex(key_hex)
        except ValueError:
            emit_error("invalid private key hex")
            return
        result = await self.mc.commands.import_private_key(key)
        if result is not None and result.is_error():
            emit_error(f"import_private_key failed: {result.payload}")
            return
        emit("private_key_imported", {})

    async def cmd_admin_login(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        password = str(payload.get("password") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.send_login_sync(bytes.fromhex(str(contact["public_key"])), password, min_timeout=10)
        if result is None:
            emit("admin_session", {"contactId": str(contact.get("public_key")), "success": False})
            return
        data = result.payload or {}
        emit(
            "admin_session",
            {
                "contactId": str(contact.get("public_key")),
                "success": True,
                "isAdmin": bool(data.get("is_admin")),
                "permissions": data.get("permissions"),
            },
        )

    async def cmd_admin_logout(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        await self.mc.commands.send_logout(bytes.fromhex(str(contact["public_key"])))
        emit("admin_session", {"contactId": str(contact.get("public_key")), "success": False, "loggedOut": True})

    async def cmd_admin_cmd(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        command = str(payload.get("command") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.send_cmd(bytes.fromhex(str(contact["public_key"])), command)
        # Replies arrive asynchronously as CONTACT_MSG_RECV with txt_type CLI_DATA
        # and are emitted as admin_reply events by _on_contact_message.
        emit(
            "admin_cmd_sent",
            {
                "contactId": str(contact.get("public_key")),
                "command": command,
                "ok": result is not None and not result.is_error(),
            },
        )

    async def cmd_request_status(self, payload: dict[str, Any]) -> None:
        contact_id = str(payload.get("contactId") or "")
        contact = resolve_contact(self.mc, contact_id)
        if contact is None:
            emit_error(f"unknown contact: {contact_id}")
            return
        result = await self.mc.commands.req_status_sync(contact, min_timeout=10)
        emit(
            "node_status",
            {
                "contactId": str(contact.get("public_key")),
                "ok": result is not None and not (hasattr(result, "is_error") and result.is_error()),
                "status": sanitize(result.payload) if result is not None else None,
            },
        )


async def run_bridge(transport: str, address: str) -> int:
    try:
        from meshcore import MeshCore  # type: ignore
    except Exception as exc:
        emit("status", {"connected": False, "transport": transport, "address": address, "error": f"bridge import failed: {exc}"})
        return 1

    mc = None
    if transport == "tcp":
        host, _, port = address.partition(":")
        if not host or not port.isdigit():
            emit("status", {"connected": False, "transport": transport, "address": address, "error": "tcp address must be host:port"})
            return 1
        mc = await MeshCore.create_tcp(host, int(port), auto_reconnect=True, default_timeout=10)
    else:
        port_path = address
        if not port_path:
            detected, available = list_serial_ports()
            if len(detected) == 1:
                port_path = detected[0]
            elif len(available) == 1:
                port_path = str(available[0].get("device") or "")
            else:
                emit(
                    "status",
                    {
                        "connected": False,
                        "transport": transport,
                        "address": None,
                        "error": "no serial port specified and auto-detect found "
                        + ("no candidates" if not detected else "multiple candidates"),
                        "detectedPorts": detected,
                        "availablePorts": available,
                    },
                )
                return 1
        mc = await MeshCore.create_serial(port_path, auto_reconnect=True, default_timeout=10)
        address = port_path

    if mc is None:
        emit(
            "status",
            {
                "connected": False,
                "transport": transport,
                "address": address,
                "error": "no response from device (is it MeshCore companion firmware?)",
            },
        )
        return 1

    bridge = Bridge(mc, transport, address)
    await bridge.start()

    loop = asyncio.get_running_loop()
    queue: asyncio.Queue[dict[str, Any] | None] = asyncio.Queue()

    def stdin_reader() -> None:
        for raw in sys.stdin:
            raw = raw.strip()
            if not raw:
                continue
            try:
                message = json.loads(raw)
            except json.JSONDecodeError:
                loop.call_soon_threadsafe(queue.put_nowait, {"type": "__invalid__"})
                continue
            loop.call_soon_threadsafe(queue.put_nowait, message)
        loop.call_soon_threadsafe(queue.put_nowait, None)

    thread = threading.Thread(target=stdin_reader, daemon=True)
    thread.start()

    pending: set[asyncio.Task] = set()
    try:
        while True:
            message = await queue.get()
            if message is None:
                break
            if message.get("type") == "__invalid__":
                emit_error("invalid json from stdin")
                continue
            task = asyncio.create_task(bridge.handle(message))
            pending.add(task)
            task.add_done_callback(pending.discard)
    finally:
        for task in pending:
            task.cancel()
        try:
            await mc.disconnect()
        except Exception:
            pass
    return 0


def main() -> int:
    if hasattr(sys.stdin, "reconfigure"):
        sys.stdin.reconfigure(encoding="utf-8")

    parser = argparse.ArgumentParser(description="MeshCore bridge")
    parser.add_argument("--transport", choices=("serial", "tcp"), default=os.getenv("MESHCORE_TRANSPORT", "serial"))
    parser.add_argument("--address", default=os.getenv("MESHCORE_ADDRESS", ""))
    parser.add_argument("--list-ports", action="store_true")
    args = parser.parse_args()

    if args.list_ports:
        try:
            detected, available = list_serial_ports()
        except Exception as exc:
            sys.stdout.write(json.dumps({"ports": [], "detectedPorts": [], "error": str(exc)}) + "\n")
            return 1
        sys.stdout.write(
            json.dumps({"ports": available, "detectedPorts": detected, "fallbackPorts": []}, ensure_ascii=True) + "\n"
        )
        sys.stdout.flush()
        return 0

    try:
        return asyncio.run(run_bridge(args.transport, args.address))
    except KeyboardInterrupt:
        return 0


if __name__ == "__main__":
    sys.exit(main())
