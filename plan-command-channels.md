# Plan: Command channels — explicit vs ambient knowledge commands

## Goal

Two categories of agent/knowledge command behavior, bound per channel:

- **Explicit** (category A, e.g. `/wiki`): the command answers on a channel **only** when
  its slash prefix is typed, and **only** on channels where that command is enabled.
- **Ambient** (category B, e.g. `/pretalx` on `#schedule`): the command is bound to a channel
  as a listener; **every** free-text message on that channel is treated as a question and
  routed to the bound source — no slash needed.

DMs are unchanged (all slash commands always work; free-form gated by `meshAiReply`).

## Decisions (from user)

1. **Ambient miss → prefilter first.** Before running the full agent on an ambient message,
   run a cheap relevance gate. If it fails, stay silent (no fallback spam on the radio).
2. **Ambient scope → per-channel choice.** Any `ambientCapable` command can be bound ambient
   to any channel (`#schedule`→pretalx, `#wiki`→wiki, …). Not hard-coded per command.
3. **Explicit slash on a channel is honored only if that command is enabled on that channel.**
   ⇒ association is per-(command, channel). Typing `/wiki` on a channel where only pretalx is
   enabled does nothing.

## Assumption to confirm

Built-in **system** commands (`/help`, `/summary`, `/weather`, `/battery`, `/nodecheck`,
`/trace`, `/advert`) keep the existing global `aiSettings.commandChannels` gate, unchanged.
The new per-(command,channel) binding governs **only** knowledge/agent commands (wiki, pretalx,
future sources). This avoids an 8×9 toggle matrix and matches the user's knowledge-command framing.

## Current architecture (confirmed)

- Registry `agentCommands[]` (server.js:3193) — `{name, helpText, sources[], synthesisPrompt, fallback}`,
  lookup `getAgentCommand()` (3240).
- Sources `knowledgeSources{}` (server.js:3116) — `available()`, `search/fetch`, optional
  `buildTools/runTool/pipeline` (pretalx is tool-native + time-aware).
- Trigger is uniform today — everything is slash-gated via `parseLocalSlashCommand` (3541).
  `agent:true` flag distinguishes agent commands from built-ins.
- Channel gate today: `aiSettings.commandChannels: number[]` (2326) — global, any command on any
  listed channel. `getCommandChannels()` (2335).
- Dispatch sites:
  - inbound mesh broadcast — server.js:5499–5516
  - local-UI send self-trigger — server.js:6470–6481
  - DM inbound (unchanged) — 5543
- UI: Integrations tab, per-channel ON/OFF toggle table `renderAiCommandChannels` (app.js:1946),
  persisted as `commandChannels`.

## Data model

New per-(command, channel) binding table in `aiSettings`:

```js
aiSettings.channelCommands = [
  { channel: 2, command: "wiki",    mode: "explicit" },
  { channel: 5, command: "pretalx", mode: "ambient"  },
]
```

Rules (enforced in `normalizeAiSettings` + UI):
- `(channel, command)` unique; `channel` 0–7; `command` must be a registered agent command.
- `mode ∈ {"explicit","ambient"}`; `mode:"ambient"` allowed only if the command is `ambientCapable`.
- **At most one ambient command per channel** (free text must route unambiguously).
- Legacy migration: if `channelCommands` absent but `commandChannels` present, keep `commandChannels`
  for system commands as-is (no auto-conversion — agent commands start unbound; operator re-binds).
  Current settings have `commandChannels: []`, so this is a no-op in practice.

Helpers:
- `getChannelCommandBinding(channelIdx, commandName)` → binding | null
- `getAmbientCommandForChannel(channelIdx)` → commandName | null
- keep `getCommandChannels()` for system commands.

## Command metadata

Add `ambientCapable: true` to `wiki` and `pretalx` entries in `agentCommands`. System/deterministic
commands are never ambient. The UI ambient option only appears for `ambientCapable` commands.

## Dispatch changes (both channel sites: 5499 & 6470)

Replace the flat `getCommandChannels().includes(idx)` gate with:

```
stripped = stripChannelSenderPrefix(text)
slash = parseLocalSlashCommand(stripped)
if slash && slash.agent:                      // explicit agent command
    if getChannelCommandBinding(idx, slash.name): run it
    else: ignore
elif slash:                                    // built-in system command
    if getCommandChannels().includes(idx): run it (unchanged)
else:                                           // free text → ambient?
    cmd = getAmbientCommandForChannel(idx)
    if cmd && await passesAmbientPrefilter(stripped, cmd, ctx):
        run agent command `cmd` with question = stripped
```

Refactor `runAgentCommand` (3485) to accept `{command, question}` (currently derives the question by
slicing `slashCommand.raw`). Add a thin `runAgentQuestion(command, question, opts)` used by ambient;
the existing slash path keeps working by passing the sliced question.

## Ambient prefilter (relevance gate)

Cheap, silent-on-miss gate before the full agent loop:

1. Fast rejects (no LLM): empty/very short, greeting-only, `!reset`, or a slash for a command
   **not** enabled on this channel.
2. Optional per-source hook `KnowledgeSource.matchesAmbient(question, ctx)` → bool|null.
   - pretalx: reuse the temporal/keyword heuristics already in `pretalxPipeline` (has `now/next/today/
     tomorrow/HH:MM/room/text` signal, or matches a session) → cheap and local.
   - wiki: null (defer to default classifier).
3. Default classifier when hook returns null: one tiny local LLM yes/no call
   ("Can this be answered from <source label>? yes/no", ~2 tokens). Silent if "no".

Only on pass do we run the full `runAgentQuestion`. In ambient mode, also **suppress the fallback**:
if the agent yields no confident answer, stay silent instead of sending "No matching sessions".

## Ambient safety (airtime / loops)

- Keep existing room/repeater sender skip.
- One in-flight ambient reply per channel (drop/queue overlapping).
- Short per-sender cooldown (e.g. 20–30s) to avoid runaway on the same asker.
- Never react to our own `local-ai` output (already: only bridge-inbound is ingested; verify no echo
  path on multi-node channels — if two blackbox nodes share a channel, cooldown + prefilter limit loops;
  flag for field testing).

## UI (Integrations tab)

Replace the ON/OFF `commandChannels` table with a compact binding matrix (retro pixel/bevel style kept):

- Rows = configured channels (`CH<n> <name>`).
- Columns = knowledge commands (wiki, pretalx). Each cell = tri-state cycle button:
  `Off → Cmd → Ambient` (Ambient shown only for `ambientCapable`, and disabled if another command
  is already ambient on that row).
- Keep the separate small system-command channel toggles (existing behavior) OR relabel clearly.

JS: rewrite `renderAiCommandChannels`/`getAiCommandChannelSelection` → build/collect `channelCommands`;
update `collectAiSettingsForm` (2068) and `loadAiSettings` (2005). Server payload already round-trips
via `/api/ai-settings`.

## Files touched

- `server.js`: `normalizeAiSettings` + migration (~2312); binding helpers (~2335);
  `agentCommands` metadata + `ambientCapable` (~3193); `matchesAmbient` hooks on sources (~3116);
  `runAgentCommand`→`runAgentQuestion` refactor (~3485); prefilter fn; dispatch 5499 & 6470.
- `static/app.js`: binding matrix render/collect (~1946), form wiring (~2005/2068).
- `static/index.html` + css: matrix markup, retro styling.
- `data/settings.json`: no manual edit; migration is a no-op on current empty `commandChannels`.

## Out of scope / follow-ups

- Per-channel system-command associations (kept on the old global gate for now).
- Scheduled/cron announcements (e.g. "next session starting") — not requested.
- Multi-node ambient loop hardening beyond cooldown — revisit after field test.
