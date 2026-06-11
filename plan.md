# Plan: MeshCore-native rewrite

Status: **implemented 2026-06-11** — all phases complete; hardware verification with
MeshCore-flashed radios pending. See `research.md` for findings.

Goal: this fork targets MeshCore exclusively. No abstraction layer, no Meshtastic
compatibility. Embrace native concepts: contacts (pubkeys), adverts, paths, rooms,
pull telemetry, E2E DMs with delivery confirmation.

## Guiding decisions

- One bridge: rewrite `bridge.py` on `meshcore` (PyPI, async). Keep the
  JSON-over-stdio subprocess model with server.js — it works and isolates Python.
- Transports v1: **serial + TCP**; BLE deferred. (decided 2026-06-10)
- Lifecycle: **spawn per connection** — server.js passes transport+address as args,
  respawns on change, same as today. (decided)
- Contact display: **name first, 8-hex pubkey-prefix fallback** on collision/unnamed;
  slash commands accept either. (decided)
- DM reliability: lib retry-with-ack, **fixed defaults** (3 attempts, backoff),
  no settings knob for now. (decided)
- Keep the event/command names that are already neutral (`status`, `inbound`, `sent`,
  `error`); rename Meshtastic-isms (`nodes` → `contacts`, `ack` → `delivered`).
- Contact identity = pubkey prefix (hex). All persistence (favorites, chat history,
  TAK senders) keys off it. No migration of old node IDs — fresh start.
- **TAK/CoT support is dropped entirely** — not used. Delete `tak_fountain.py`,
  all `send_tak`/`tak*` events, TAK settings, and TAK UI. (decided 2026-06-10)

## Phase 1 — Bridge rewrite (`bridge.py`)

- [x] Replace meshtastic imports with `meshcore` async client; asyncio event loop with
      a stdin reader task (replaces thread at bridge.py:1401)
- [x] Connection: accept `--transport serial|tcp` + address (BLE deferred).
      `--list-ports` equivalent retained for the device modal (pyserial list_ports)
- [x] `status` event: connected, transport, address, localPubkey, deviceInfo,
      battery (from `CMD_GET_BATT_AND_STORAGE`)
- [x] `contacts` event: pubkey, name, type (chat/repeater/room), lat/lon, lastAdvert,
      outPath; emitted on connect, on advert push, and on `refresh_contacts` command
- [x] Inbound: DM + channel messages → `inbound` {sender (pubkey), text, channel,
      isDirectMessage, snr}; adverts → contact updates
- [x] `send_text` command: DM via contact (retry-with-ack helper, emit `sent` then
      `delivered` {rtt} on PUSH_CODE_SEND_CONFIRMED); channel send for broadcast
      ({to: {kind: "broadcast", channel}} replaces "^all")
- [x] `send_advert` command (flood / zero-hop) — replaces position broadcast; also
      `set_advert_latlon` inside `set_device_meta`
- [x] `set_device_meta`: name, advert lat/lon, radio params (freq/BW/SF/CR, txPower)
      via `set_radio()`/`set_tx_power()`; ship a small preset table in the bridge
      (e.g. EU868/US915 sensible defaults) since MeshCore has no named presets
- [x] `request_telemetry` command: `req_telemetry(contact)` → `telemetry` event
      (decode Cayenne LPP to {battery, voltage, temperature, …})
- [x] `trace_path` command: CMD_SEND_TRACE_PATH → `path` event with per-hop SNR
- [x] Settings surface commands (thin pass-throughs to meshcore_py): `get/set_channel`,
      `get_device_info` (DEVICE_INFO + SELF_INFO + battery/storage + stats),
      `set_tuning`, `set_telemetry_modes`, `set_multi_acks`, `set_advert_loc_policy`,
      `set_time`, `reboot`, contact CRUD (`add/remove/share/export/import_contact`),
      `reset_path`, `set_ble_pin`
- [x] Remote admin: `admin_login` {pubkey, password} → `admin_session` event
      (permission flags); `admin_cmd` {pubkey, command} → `admin_reply` event
      (CLI text via TXT_TYPE_CLI_DATA, send_cmd/send_login in meshcore_py)
- [x] Drop: `request_position`, `reset_node_db` (→ reset contacts if lib supports),
      portnum logic, ROUTING_APP ack parsing, protobuf config code

## Phase 2 — server.js adaptation

- [x] Bridge spawn/dispatch (:5327-5411): new event set; remove `packet`-level
      Meshtastic fields; contacts replace nodes (:3222 merge)
- [x] Settings (:345-396): `radioTransport` + `radioAddress` replace `meshtasticPort`;
      drop `takMeshtasticChannel`/`takHopLimit` entirely; env override `MESHCORE_ADDRESS`
- [x] API: `/api/mesh/ports`, `/api/mesh/connect` (replace `/api/meshtastic/*`)
- [x] `handleInboundMesh` (:4957-4980): pubkey senders, channel/DM distinction
- [x] Slash commands (:2610-2825): `/battery` = local node stats, instant;
      `/nodecheck <name>` = targeted request_telemetry to one contact, ~30s timeout
      (decided: local + targeted, no fan-out); drop channel-util output;
      add `/trace <name>` (per-hop SNR) and `/advert`
- [x] Send pacing (replaces :4859-4865 fixed 3.2s/6s timers): **ack-paced DMs** —
      next chunk sent on delivery confirmation + small gap, timeout fallback;
      fixed delay retained for channel broadcasts only (decided)
- [x] Cashu/wallet sends: recalc chunk sizes for MeshCore text frame limit; ride the
      ack-paced DM path; surface delivery confirmation in wallet send status
- [x] First MeshCore run: wipe chat history + favorites keyed by old node IDs
      (decided: no migration, fresh start)

## Phase 3 — UI: full settings console + contact list (static/app.js, index.html, styles.css)

**Hard design constraint: preserve the BlackBox retro-gaming aesthetic.** All new UI
must be built from the existing design system in styles.css — "Press Start Local"
pixel font for headings/labels/buttons, monospace body, raised/sunken 2px bevel
borders (`--edge-light` top/left, `--edge-dark` bottom/right), `--panel`/`--bg`
token palette. New controls (sliders, dropdowns, QR panels, terminal) get the same
old-school console treatment — chunky beveled widgets, no modern flat/rounded
styling, no new fonts, no external UI libs. Think cartridge-era settings screen:
the radio preset picker is a beveled select, the TX power slider is a stepped
notch bar, the admin console is a green-on-dark terminal panel with pixel header.

**Shape (decided 2026-06-10): full-screen SETUP options menu**, game title-screen
style — cursor-driven list of groups, each drilling into a beveled sub-screen;
arrow-key/enter navigation plus mouse; "[A] ENTER [B] BACK" footer hints. Replaces
the device modal entirely. Groups:

- [x] **Connection**: transport picker (serial/TCP; BLE later), port list, connect state
- [x] **Identity**: node name, advert lat/lon + location-share policy, time sync,
      BLE pin, export/import identity (private key) with confirm guards
- [x] **Radio**: preset dropdown seeded from config.meshcore.io community presets +
      custom freq/BW/SF/CR, TX power slider (1 to max from SELF_INFO), tuning params
      behind an "advanced" fold
- [x] **Channels**: editor for all slots (count from DEVICE_INFO), name + secret,
      share via `meshcore://` URI + chunky pixel QR (tiny dependency-free generator,
      canvas-rendered; import = paste URI — decided, no camera scanning in v1)
- [x] **Contacts**: type badges (chat/repeater/room), last-advert age, favorites
      (existing feature, rekeyed to pubkey), export as URI + pixel QR / import by
      pasted URI, per-contact actions: telemetry request, trace path, reset path,
      remove, share
- [x] **Device**: firmware version/build/model, battery + storage, core/radio/packet
      stats, reboot; factory reset behind double-confirm
- [x] **Advanced**: telemetry modes, multi-acks, manual-add-contacts, advert interval
- [x] Remove neighbors/relayNode topology display; trace-path action + per-hop SNR
      rendering on the map; position markers show advert age
- [x] Labels: "MeshCore DM", delivery-confirmed ticks with RTT; wallet "via MeshCore"

## Phase 4 — Native gains (after parity)

- [x] Room servers: join/login to room contacts, fetch unseen messages on reconnect,
      render as a channel-like thread (this is the store-and-forward win)
- [x] **Remote node admin console**: login to repeater/room contacts (admin or guest
      password), terminal-style panel sending CLI commands over the mesh (get/set
      radio, name, advert intervals, ACL, neighbors, stats, clock sync, reboot,
      `tempradio` for safe radio tests) — user plans repeater/room infra nodes,
      so this stays in scope
- [x] Path management UI: show cached out-paths, reset-path action

## Phase 5 — Cleanup

- [x] postinstall.js: `pip install meshcore` (drop `meshtastic` from pydeps)
- [x] Remove dead code: protobuf imports, port-detection meshtastic helpers, and ALL
      TAK code — `tak_fountain.py`, TAK handlers in bridge/server, TAK settings + UI,
      `data/` TAK dumps (all files deleted 2026-06-11; syntax + boot smoke test passed)
- [x] README/PRD update — **name stays blackbox_node** (decided 2026-06-10;
      deaddrop_node noted as future candidate)
- [x] Wipe `data/` node caches keyed by old IDs

## Testing

- Requires two MeshCore-flashed radios (reflash existing hardware via
  flasher.meshcore.io). Phase 1-2 testable with one radio + meshcore-cli on a laptop.
- Golden path per phase: connect → contacts appear → DM with delivery tick →
  channel msg → AI reply over mesh → wallet send.

## Open questions — all resolved 2026-06-10

1. ~~BLE in scope?~~ → serial+TCP for v1, BLE deferred
2. ~~TAK?~~ → dropped entirely, not used
3. ~~Rooms in v1?~~ → after parity (Phase 4), confirmed
4. ~~Rename?~~ → keep blackbox_node for now
5. ~~Chat history migration?~~ → wipe, fresh start

Additional decisions from plan review: full-screen SETUP options menu (game
title-screen style) instead of tabbed modal; pixel QR sharing in v1 (paste-URI
import, no camera); /battery local + /nodecheck targeted; ack-paced DM chunking;
admin console stays (repeater/room infra nodes planned).
