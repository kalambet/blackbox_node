# BLACKBOX NODE - Offline AI, MeshCore LoRa Mesh, and Off-Grid Payments

> **Built for when the internet is gone.**

Website: [blackbox.host](https://blackbox.host/)

Blackbox Node is an offline-first command post for [MeshCore](https://meshcore.co.uk/) **LoRa** networks. It combines a fully local LLM, end-to-end encrypted radio messaging with delivery confirmation, telemetry, and **Bitcoin + Cashu** payments in one self-hosted web UI.

It is designed for **off-grid communications**, **disaster response**, **field operations**, **community mesh networks**, and anyone who wants local AI and situational awareness without cloud infrastructure, without a cell tower, and without a remote server.

---

## Demo

[![Watch Blackbox Node in action](https://img.youtube.com/vi/R8iXfAWsvDg/maxresdefault.jpg)](https://www.youtube.com/watch?v=R8iXfAWsvDg)

---

## Why people use Blackbox Node

- Run a local offline AI assistant on your own machine with `llama.cpp`
- Turn a laptop plus MeshCore radio into a resilient **LoRa mesh node**
- Keep chat, telemetry, and node awareness working during outages
- Get **end-to-end encrypted DMs with delivery confirmation** over radio
- Move value off-grid with **Bitcoin** and **Cashu ecash**
- Store everything locally in `./data/` with no accounts and no hosted backend

---

## What is MeshCore and LoRa?

[MeshCore](https://meshcore.co.uk/) is a free, open-source mesh radio firmware. Nodes exchange **adverts** to discover each other as **contacts** (identified by public keys), and route messages hop by hop over learned paths without internet or cellular infrastructure. Flash the **companion firmware** onto a supported board in your browser at [flasher.meshcore.io](https://flasher.meshcore.io/).

The radios use **LoRa** (Long Range), a spread-spectrum radio modulation that can reach roughly **5-15+ km** in open terrain. Dedicated repeater and room-server nodes extend the network, and they can be administered remotely over the mesh.

Popular hardware you can use with MeshCore:
- [Heltec LoRa 32](https://heltec.org/project/wifi-lora-32-v3/) - compact ESP32-based starter board
- [LILYGO T-Beam](https://www.lilygo.cc/products/t-beam-v1-1-esp32-lora) - built-in GPS and battery management
- [RAK WisBlock](https://store.rakwireless.com/collections/wisblock-core) - modular and highly configurable
- [Seeed SenseCAP T1000](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) - compact tracker-style form factor

These devices typically cost about $20-$60 and can run for days on a small battery or indefinitely on solar.

---

## What Blackbox Node does

### Local offline AI

Runs a quantized LLM entirely on your machine via `llama.cpp`. No API keys, no cloud calls, and no internet required during normal operation. You can load small GGUF models for weak hardware or larger models for better responses.

### AI over the mesh

Other MeshCore nodes in range can query your AI by radio. Send `@bot your question` or `!ask your question` from any MeshCore device and the response comes back over the air.

### Mesh slash commands

When AI over mesh is enabled, any node can send a **slash command** as a direct message to get an instant structured response — no open-ended question needed. Send `/help` to get the full list. Commands work even when the LLM is busy or unavailable; they run from live telemetry data without touching the model.

| Command | What it returns |
|---|---|
| `/help` | List of all available commands |
| `/summary` | Node counts, network health, activity breakdown, temperature |
| `/weather` | Latest environment readings from telemetry sensors |
| `/activity` | Recent event counts (telemetry, messages, DMs) for the current window |
| `/battery` | Battery levels — average, low nodes, critical nodes |
| `/nodecheck <name>` | Status of a specific node: online state, last seen, SNR, hops, battery |
| `/wallet` | Your wallet balance and available off-grid Cashu proofs |
| `send <amount> <node>` | Send Cashu sats to a node by its short name (requires wallet client auth) |

### Communication and telemetry

All inbound and outbound MeshCore messages are tracked in the web UI. Contacts are discovered via adverts and keyed by public key; positions, pull-based telemetry, battery levels, and environment readings are recorded and browsable. Direct messages are end-to-end encrypted with delivery confirmation (RTT ticks), and channel broadcasts (channels 0-7) are supported alongside **room servers** (store-and-forward threads) and a **remote admin console** for repeater/room nodes.

![Chat and message log](static/img/chat.png)

### Off-grid payments

Blackbox Node includes a built-in **Bitcoin wallet** (on-chain, BIP-39/HD) and a **Cashu ecash wallet** for Lightning-compatible off-grid transactions.

[Cashu](https://cashu.space) tokens are bearer instruments that can be copied and pasted like text, so payments can move over MeshCore radio as plain messages. When connectivity returns, tokens can be melted back to Lightning or held as ecash.

This makes it possible to run basic economic activity such as tipping, paying for services, and splitting resources entirely over a radio mesh network.

#### External Wallet Clients

You can approve specific mesh nodes to control your wallet remotely over DM. This lets you trigger payments from a handheld MeshCore device without touching the node's web UI.

**Setup:** In the wallet **Settings** tab, enable **External Wallet Clients** and add the node(s) you want to authorize from the dropdown.

**Workflow:**

1. Send `/wallet` as a direct message to your node from an approved MeshCore device.
   The node replies with your current balance and available off-grid proofs:
   ```
   💰 22 sats
   Proofs: [6][16]
   send <amt> <node>
   ```
2. Reply with a send command using the target node's **name** (or public-key prefix):
   ```
   send 6 f4e5
   ```
   The node sends a Cashu token directly to the target node over mesh, records the transaction in the wallet history, and confirms:
   ```
   ✓ Sent 6 sats to f4e5
   ```

**Requirements:**
- The node must have off-grid proofs prepared for the exact amount (prepare them in the wallet Send tab beforehand)
- Only direct messages from approved nodes trigger wallet commands — broadcast channel messages are ignored
- The feature requires no internet; the node uses pre-split offline proofs

![Wallet](static/img/wallet.png)

---

## Typical use cases

- Off-grid community infrastructure
- Disaster communications and blackout fallback
- Field teams coordinating over MeshCore radios
- Rural or expedition deployments with no reliable internet
- Local-first AI nodes for neighborhoods, events, vehicles, or camps

---

## Two modes

| Mode | What it needs |
|---|---|
| **Local offline AI only** | A machine running Node.js and Python, plus a GGUF model file. No radio and no internet during runtime. |
| **Full off-grid mesh node** | Same as above, plus a MeshCore companion-firmware device connected by USB serial or TCP. |

The app starts in whatever mode it can. Radio and mesh features stay inactive until a device is connected.

---

## Installation

### Fast path

```bat
npm install
npm start
```

During `npm install`, the project bootstraps the local AI runtime automatically:

- installs JavaScript dependencies
- downloads a platform-matched `llama.cpp` runtime into `./llama/` if missing (Windows/Linux/macOS)
- downloads a starter GGUF model into `./models/` if missing
- attempts to install the MeshCore Python package into `./pydeps/` if Python is available

That is enough for the web UI and local AI to start on a clean machine.

### 1. Prerequisites

Install these before anything else:

- **[Node.js 18+](https://nodejs.org/)** - main runtime
- **[Python 3.11+](https://www.python.org/downloads/)** - MeshCore radio bridge

Verify both are available:

```bat
node --version
python --version
```

### 2. Clone and install Node dependencies

```bat
git clone https://github.com/wadadawadada/blackbox_node.git
cd blackbox_node
npm install
```

This creates `node_modules/` and runs the bootstrap installer for the local AI runtime.

### 3. Set up `llama.cpp` (manual fallback only)

Skip this step unless automatic bootstrap failed or you want to replace the runtime manually.

Otherwise, the `llama/` folder must contain `llama-server` (`llama-server.exe` on Windows) and the companion runtime libraries from a matching prebuilt package in the [llama.cpp releases page](https://github.com/ggerganov/llama.cpp/releases).

Extract `llama-server` (or `llama-server.exe`) and the bundled `ggml`/`llama` runtime libraries into `./llama/`:

```text
llama/
  llama-server(.exe)
  llama runtime libraries (.dll / .so / .dylib depending on OS)
```

Pick the build that matches your machine and OS/CPU:

- No GPU -> `...-cpu-...`
- NVIDIA GPU -> `...-cuda-...`
- AMD / Intel GPU -> `...-vulkan-...`
- Apple Silicon (optional acceleration) -> `...-metal-...`

### 4. Download a model (manual fallback only)

Skip this step unless automatic bootstrap failed or you want to add more models manually.

Otherwise, create the `models/` folder and download at least one `.gguf` model file into it.

**Option A - use the built-in model manager**
1. Run `npm start`
2. Open `http://127.0.0.1:7860`
3. Go to **Settings -> Models** and click **Install** next to any model

![LLM Manager](static/img/llm_manager.png)

**Option B - download manually**

```bat
mkdir models
```

Then place any `.gguf` file into `models/`. Recommended starter: `Qwen2.5-3B-Instruct-Q5_K_M.gguf` (~2.3 GB).

### 5. (Optional) Connect a MeshCore device

Flash the **MeshCore companion firmware** onto your board at [flasher.meshcore.io](https://flasher.meshcore.io/), then plug it in via USB (or expose it over TCP). Pick the transport and port in the **SETUP > Connection** screen; the serial port list is auto-detected.

No device? The app still starts fine. Mesh and telemetry features just show as disconnected.

---

## Quick start

```bat
npm install
npm start
```

On launch:

- the web UI opens at `http://127.0.0.1:7860`
- `llama-server` (or `llama-server.exe` on Windows) starts and loads the selected model
- the Python MeshCore bridge (`bridge.py`) connects to the configured serial or TCP radio
- the installer prepares `./llama/`, `./models/`, and tries to prepare `./pydeps/`

---

## Requirements

| Requirement | Notes |
|---|---|
| Node.js 18+ | Runtime for the web server |
| Python 3.11+ | Required only for the MeshCore radio bridge |
| Internet during `npm install` | Needed to download `llama.cpp`, a starter model, and optional Python deps |
| `./llama/llama-server` (or `llama-server.exe` on Windows) | Auto-downloaded on install if missing |
| At least one `.gguf` in `./models/` | Auto-downloaded on install if missing |
| MeshCore device on USB serial or TCP | Optional, but required for radio and telemetry |

---

## Features

**AI**

- Local LLM via `llama.cpp`, fully offline after model download
- Mesh-triggered queries with `@bot ...` and `!ask ...`
- `!reset` clears per-peer conversation context
- Slash commands over mesh DM: `/help`, `/summary`, `/weather`, `/activity`, `/battery`, `/nodecheck`
- Configurable system prompt, temperature, top-p, and token limits per mode
- Built-in model manager for curated GGUF downloads

**MeshCore / Radio**

- Serial and TCP transports with auto-detected serial port list
- Contacts discovered via adverts, keyed by public key, with type badges (chat / repeater / room)
- E2E encrypted DMs with delivery confirmation and RTT, ack-paced chunking for long messages
- Channel broadcasts (channels 0-7) with shareable `meshcore://` channel URIs and pixel QR codes
- Room servers: join, login, and fetch store-and-forward messages
- Remote admin console for repeaters and room servers (CLI over mesh)
- Pull-based telemetry (Cayenne LPP): battery, voltage, temperature, environment
- Trace path with per-hop SNR, cached out-path display, reset-path action
- Full-screen retro SETUP console: connection, identity, radio presets, channels, contacts, device stats, advanced tuning
- Weather and environment parsing from telemetry
- `nodes` / `list nodes` query returns a compact contact list over the mesh
- `weather` / `forecast` query returns the latest parsed weather data

**Payments**

- Bitcoin HD wallet (BIP-39, on-chain receive)
- Cashu ecash wallet: set a mint, receive/send tokens, melt to Lightning
- Cashu tokens are plain text, transferable over radio or any other text channel
- Lightning invoice payment via Cashu melt
- QR code generation for Bitcoin addresses and Lightning invoices
- Transaction history
- External Wallet Clients: approve specific mesh nodes to control your wallet remotely via DM commands

**UI and storage**

- Local web UI for message log, contact list, map, local chat, wallet, and settings
- All data stored locally in `./data/`
- No external database, no accounts, no telemetry

---

## Defaults

| Setting | Value |
|---|---|
| Web UI | `http://127.0.0.1:7860` |
| LLM backend | `http://127.0.0.1:8080` |
| Starter model installed by bootstrap | `Qwen2.5-0.5B-Instruct-Q3_K_M.gguf` |
| Default model | `Qwen2.5-0.5B-Instruct-Q3_K_M.gguf` |

---

## Notes

- The app runs without a radio. MeshCore and mesh features simply show as disconnected.
- If Python is missing, the web UI and local AI still work, but MeshCore radio features stay unavailable.
- Radios must run the **MeshCore companion firmware** (flash at [flasher.meshcore.io](https://flasher.meshcore.io/)). Meshtastic firmware is not supported by this fork.
- TAK / ATAK / CoT support from earlier versions has been removed.
- Downloading models or auto-installing Python packages requires internet during `npm install`. Runtime is otherwise fully local.
- Cashu token operations usually require internet access to reach the mint. Tokens already in your wallet can still be held and transferred offline, but creating a new send offline only works when your existing proofs already match the exact amount; otherwise the wallet must contact the mint to split/change proofs.

---

## Donate

If this project is useful to you, consider supporting development:

Sponsor on GitHub: [github.com/sponsors/wadadawadada](https://github.com/sponsors/wadadawadada)

| Chain | Address |
|---|---|
| BTC | `bc1p3p87l267hte2dgg60jjt7w9xk8vfcjenr534yya0hedhet4l4fvq2x2svp` |
| XMR | `44QwjAWN4wR8KNqALAfcnjSMhb1Yj7AKCVCBMJFuzr6N8WYW23cDQNd3RiSvMEX2dyUQ5z6pP8sJ2YcmJXS4SLkc24E5SJM` |
| ETH | `0xaA01e4F453d5ae9903EebeABA803f3388D20d024` |
| SOL | `4xgvfwv3TTt1SnavP5okbjBBsfRmoLpdeQKXguVdXheF` |
