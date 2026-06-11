# Research: MeshCore-native rewrite of blackbox_node

Date: 2026-06-10. Decision: rewrite this fork to target MeshCore exclusively, embracing
its native concepts (contacts/pubkeys, adverts, paths, rooms). Meshtastic support is dropped,
no transport abstraction layer.

## Current architecture (Meshtastic)

- **server.js** (~6,590 lines, Node.js): TCP server on :5000, spawns `bridge.py` as a
  subprocess, talks JSON-over-stdio. Holds business logic: AI replies, slash commands,
  wallet (Bitcoin + Cashu), TAK coordination, settings in `data/settings.json`.
- **bridge.py** (~1,418 lines, Python): the only code that touches the radio. Uses
  `meshtastic` pkg `SerialInterface` + pubsub. `tak_fountain.py`: fountain-coded chunking
  for CoT payloads > 231 bytes.
- **static/app.js** (~7,855 lines): UI. Device modal, node list, map, wallet, chat.
- **scripts/postinstall.js**: pip-installs `meshtastic` into `pydeps/`, bootstraps llama.cpp.

### Bridge JSON contract today (bridge.py:671, 1136-1399)

Events out: `status`, `nodes`, `packet`, `inbound`, `sent`, `ack`, `telemetry`,
`tak`, `tak_sent`, `tak_debug`, `error`, `position_requested`, `device_meta_saved`,
`node_db_reset`.
Commands in: `send_text`, `send_tak`, `refresh_nodes`, `request_position`,
`set_device_meta`, `reset_node_db`. CLI mode: `--list-ports`.

Structure is already neutral; Meshtastic leaks via field values: `portnum` strings,
`"^all"` broadcast sentinel, `relayNode`/`hopsAway`/`hopLimit`, `modemPreset`/`region`
enums, `meshtasticRole`, decimal/`!hex` node IDs, raw packet dumps.

### Meshtastic touch points in server.js

- :345-396 settings (`meshtasticPort`, `takMeshtasticChannel`, `takHopLimit`)
- :5668-5678 `/api/meshtastic/ports`, `/api/meshtastic/connect`
- :5327-5411 bridge subprocess spawn + event dispatch
- :4859-4880 `sendMeshReply()` batching (3.2s normal / 6s Cashu), `sendBridge()`
- :4957-4980 `handleInboundMesh()` packet field assumptions
- :2610-2825 slash commands (`/help /summary /weather /battery /nodecheck`) assume
  Meshtastic node IDs + passive telemetry
- :3222 `meshtasticRole` merge

UI: app.js:2110-2245 (device modal), :3160/:3720/:5411-5512 (role, range, "Meshtastic DM"
labels), :6634-6643 (wallet "via Meshtastic").

## MeshCore capabilities (companion radio protocol)

Sources: github.com/meshcore-dev/MeshCore wiki (Companion-Radio-Protocol),
docs.meshcore.io/companion_protocol, PyPI `meshcore` (meshcore-dev/meshcore_py, v2.3.7
Apr 2026, async, by fdlamotte).

1. **Client lib**: `meshcore` (PyPI). Fully async/await; commands return `Event`s,
   subscription dispatcher (`EventType`). Transports: **serial, BLE, TCP** (auto-reconnect).
2. **Messaging**: 8 channel slots (0 = public, 1-7 group w/ 16-byte shared secret).
   DMs are E2E-encrypted per-contact (Ed25519/X25519, 32-byte pubkeys). DM delivery
   confirmed via `PUSH_CODE_SEND_CONFIRMED` (0x82) with RTT; lib has retry-with-ack
   helpers. Channel messages fire-and-forget.
3. **Binary payloads**: `CMD_SEND_CHANNEL_DATA_DATAGRAM` (0x3E) — arbitrary binary on a
   channel with a 16-bit Data Type (portnum equivalent; 0x0100-0xFEFF registered,
   0xFFFF dev). **Max 163 bytes** (MAX_FRAME_SIZE - 9). Inbound via
   `RESP_CODE_CHANNEL_DATA_RECV` (0x1B) incl. SNR + data type. Also
   `CMD_SEND_BINARY_REQ` (50) request/response to a contact. ⚠ Verify `meshcore_py`
   exposes the 0x3E datagram wrapper (newer protocol addition; `send_binary_req` is
   confirmed, datagram wrapper was not found in published API docs).
4. **Telemetry**: pull-based. Local: `CMD_GET_BATT_AND_STORAGE`, `CMD_GET_STATS`.
   Remote: `CMD_SEND_TELEMETRY_REQ` → Cayenne LPP response; lib has
   `get_self_telemetry()`/`req_telemetry()` + MMA history. Per-packet SNR present;
   RSSI partial. **No channel-utilization / air-util metrics.** No periodic broadcasts.
5. **Discovery**: signed adverts (`CMD_SEND_SELF_ADVERT`, flood or zero-hop). Contact:
   32-byte pubkey, type (CHAT/REPEATER/ROOM), 32-char name, lat/lon ×1e6, last-advert
   ts, cached out-path.
6. **Position**: rides on adverts only (`CMD_SET_ADVERT_LATLON` + share flag).
   No POSITION_APP equivalent; no position request.
7. **Routing**: flood discovery → directed source-routing (path in packet). Per-message:
   `path_len=0xFF` = flood vs explicit path. `CMD_SEND_TRACE_PATH` (36) traces routes
   with per-hop SNR. `CMD_RESET_PATH`. No NeighborInfo broadcasts, no per-message hop
   limit knob.
8. **Radio config**: `CMD_SET_RADIO_PARAMS` (freq/BW/SF/CR), `CMD_SET_RADIO_TX_POWER`;
   lib `set_radio()`, `set_tx_power()`. No named presets.
9. **Gains over Meshtastic**: room servers (BBS store-and-forward, up to 32 unseen msgs
   on reconnect), E2E DMs by default, directed routing (less airtime), signed adverts,
   trace-path with per-hop SNR, TCP/BLE client transports.
10. **Hardware**: same radios (RAK4631, Heltec V3/T114, T-Deck, T-Echo, T1000-E,
    Station G2 …) — reflash via flasher.meshcore.io.

## Full setup & interaction surface (for the expanded settings UI)

The companion protocol exposes far more than the current spartan setup captures, and
`meshcore_py` wraps nearly all of it:

- **Identity**: advert name, lat/lon + location-share policy, owner info,
  export/import private key, BLE pin, device time sync.
- **Radio**: freq/BW/SF(5-12)/CR(5-8), TX power (+max), tuning params (airtime factor,
  rx-delay), allowed-repeat-freq query. No firmware presets — community presets exist
  at config.meshcore.io (adopt that table).
- **Channels**: get/set per slot (name + 16-byte secret), slot count from DEVICE_INFO
  `max_channels`; QR/URI sharing in official apps.
- **Contacts**: full CRUD, share (zero-hop), export/import via `meshcore://` URIs (QR),
  per-contact path reset / manual path edit / path discovery, favorites, manual-add mode.
- **Device status**: DEVICE_INFO (fw version, build, model, max contacts/channels),
  battery mV + storage, core/radio/packet stats, custom vars.
- **Advanced**: telemetry modes (base/loc/env bit-fields), multi-acks, advert-loc policy,
  flood scope/regions, reboot, factory reset (CMD 51), OTA start (nRF52 boards).
- **Remote admin of repeaters/rooms** (big win vs today): `send_login(pubkey, password)`
  → LOGIN_SUCCESS with permission flags, then CLI commands as `TXT_TYPE_CLI_DATA`
  messages over the mesh: get/set radio, name, lat/lon, advert intervals, tx delays,
  duty cycle, ACL (`setperm`, `get acl`), `neighbors`, stats, clock sync, reboot,
  `tempradio` (auto-revert radio test). Full list: docs.meshcore.io/cli_commands.
- **meshcore_py coverage**: wraps ~all of the above (`set_radio`, `get/set_channel`,
  contact CRUD, `send_login/send_cmd`, telemetry req, trace, sign API). Not wrapped
  (verify in source): FACTORY_RESET, GET_TUNING_PARAMS, GET_ADVERT_PATH, raw
  data/packet, anon req. Fallback: repeater-side equivalents reachable via remote CLI.
- **Official client UX grouping** (Flutter app): Identity / Radio (preset dropdown +
  custom) / Channels (QR) / Contacts / Advanced. Repeater config tool grouping:
  radio / routing / advertising / advanced.

## meshcore_py v2.3.7 API map (verified from pydeps/meshcore source)

- **Connect**: `await MeshCore.create_serial(port, baudrate=115200, auto_reconnect=True)`
  / `create_tcp(host, port, ...)` — returns `None` if device doesn't respond.
  `mc.is_connected`; CONNECTED/DISCONNECTED events; appstart re-sent on reconnect.
- **State**: `mc.contacts` (pubkey→contact dict), `mc.self_info`,
  `await mc.ensure_contacts()`, `mc.auto_update_contacts = True`,
  `get_contact_by_name()`, `get_contact_by_key_prefix()`.
- **Commands** (`mc.commands.*`, all async → `Event`): full device surface incl.
  `set_radio(freq,bw,sf,cr)`, `set_tx_power`, `get/set_tuning`, `get/set_channel(idx)`,
  `set_name/set_coords/set_time`, `reboot`, `request_factory_reset()+confirm_factory_reset(token)`,
  `get_bat`, `get_stats_core/radio/packets`, `send_advert(flood=)`, contact CRUD +
  `reset_path/share/export/import_contact`, `send_msg_with_retry(dst, msg, max_attempts=3)`
  (handles ACK wait + path-reset-to-flood fallback; returns None on no-ACK),
  `send_chan_msg(chan, msg)`, `send_login_sync(dst, pwd)`, `send_logout`,
  `send_cmd(dst, cli_string)` (remote admin), `req_telemetry_sync(contact)`,
  `req_status_sync`, `req_neighbours_sync`, `send_trace(tag,auth,flags,path)`,
  `send_path_discovery_sync`, `get_msg` + `mc.start_auto_message_fetching()`.
- **Key event payloads** (reader.py):
  - CONTACT_MSG_RECV `{pubkey_prefix(12 hex), path_len, txt_type, sender_timestamp, text, SNR?}`
    — sender is a 6-byte prefix; resolve via `get_contact_by_key_prefix`. `txt_type`
    distinguishes plain text from CLI admin replies.
  - CHANNEL_MSG_RECV `{channel_idx, path_len, text, sender_timestamp, SNR}`
  - CONTACTS: contact = `{public_key, type, flags, out_path_len(-1=flood), out_path,
    adv_name, last_advert, adv_lat, adv_lon, lastmod}`
  - SELF_INFO `{adv_type, tx_power, max_tx_power, public_key, adv_lat/lon, multi_acks,
    adv_loc_policy, telemetry_mode_base/loc/env, manual_add_contacts,
    radio_freq(MHz)/radio_bw/radio_sf/radio_cr, name}`
  - MSG_SENT `{expected_ack(4B), suggested_timeout}` → ACK `{code}` matches `expected_ack.hex()`
  - ADVERTISEMENT/PATH_UPDATE `{public_key}`; NEW_CONTACT = full pending contact
  - LOGIN_SUCCESS `{permissions, is_admin, pubkey_prefix}` / LOGIN_FAILED
  - TELEMETRY_RESPONSE: Cayenne LPP pre-decoded to JSON (temperature/voltage/gps/…)
  - TRACE_DATA `{tag, auth, flags, path_len, path:[{hash, snr}…]}`
  - MESSAGES_WAITING → must pull via `get_msg` (auto-fetch helper exists)
- Messages must be **pulled** (`get_msg`) — `start_auto_message_fetching()` handles it.
- Telemetry/factory-reset/tuning getters ARE wrapped (research caveat resolved —
  everything we need is in the lib).

## Feature deltas to absorb in the rewrite

Lost / must rework:
- Passive telemetry → pull-based (`/battery`, `/nodecheck`, node-list battery display)
- Channel util / air util → gone, no substitute (GET_STATS local only)
- POSITION_APP broadcasts + `request_position` → positions only as fresh as adverts
- NeighborInfo/relayNode topology → replace with on-demand trace-path
- Per-message hop limit (TAK settings UI) → flood vs directed-path choice
- 237B → 163B payload ceiling (fountain chunking params change)
- Modem presets/regions → raw freq/SF/BW/CR (need our own preset table)
- Node IDs: decimal/`!hex` → pubkey-based (favorites won't migrate)

Gained / new native features:
- Rooms (store-and-forward BBS)
- DM delivery confirmation with RTT
- Trace path with per-hop SNR
- TCP/BLE connection to the radio
