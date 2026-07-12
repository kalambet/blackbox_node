# Plan: Pretalx pre-event announcer (cron-style)

## Goal

X minutes before each `schedule.xml` event starts, the node broadcasts a one-off
**announcement** to the schedule channel: start time, room (location), title, and
presenter(s). Pretalx-specific; independent of whether Pretalx is bound to the
channel in ambient or command mode.

## Current building blocks (confirmed)

- Schedule events (`parseFrabSchedule`, server.js:2909) carry: `guid`, `title`,
  `room`, `startMs` (UTC epoch), `endMs`, `startLabel` (local HH:MM), `dayDate`,
  `tzOffsetMin`, `persons[]`.
- `ensureSchedule()` (server.js:2949) fetches + caches (10-min TTL); returns `[]`
  when Pretalx is disabled or no URL.
- Settings: `appSettings.knowledge.pretalx = { enabled, url }` via
  `getKnowledgeSettings` / `updateKnowledgeSettings` (server.js:2727/2745);
  `invalidateScheduleCache()` fires on URL change.
- Channel bindings: `aiSettings.channelCommands = [{channel, command, mode}]`;
  helpers `getChannelCommands()` / `getAmbientCommandForChannel()`.
- Broadcast: `sendMeshReply("^all", text, "local-ai", {channelIndex, isDirectMessage:false})`.
  Throws if the bridge is down → natural "radio connected?" guard.
- Interval pattern: `startSwapPolling()` (server.js:2292) — `setInterval`, started
  from the `server.listen` callback (server.js:~7165).

## Decisions (confirmed)

1. **Target channel** = the channel(s) Pretalx is bound to in `channelCommands`
   (mode-agnostic). No separate channel picker. If Pretalx is bound to 0 channels,
   the announcer is inert and the UI shows a hint.
2. **Dedup persistence**: persist announced event guids to `data/pretalx-announce.json`
   so a restart near an event doesn't re-announce.
3. **Simultaneous talks**: one message per event.

## Settings additions

Extend the Pretalx integration settings:

```js
appSettings.knowledge.pretalx = {
  enabled, url,
  announce: { enabled: false, leadMinutes: 5 },   // NEW
}
```

- `updateKnowledgeSettings`: validate `announce.enabled` (bool) and
  `announce.leadMinutes` (int, clamp 1–120, default 5).
- `getKnowledgeSettings`: surface `announce` (default `{enabled:false, leadMinutes:5}`).
- Back-compat: absent `announce` → defaults; unchanged for existing settings.

## Announcer engine (Pretalx-specific, not a generic hook)

New module-level state + functions in the Pretalx area of server.js:

- `let pretalxAnnounceState = { url: "", announced: {} }` — `announced` maps
  `guid -> startMs`. Persisted to `data/pretalx-announce.json` (mirrors
  persistNodes/persistLogs). Loaded at startup; reset when the schedule URL changes
  (hook into `invalidateScheduleCache` / URL-change path).

- `getChannelsForCommand("pretalx")` — reverse lookup over `getChannelCommands()`
  returning the channel indexes Pretalx is bound to.

- `formatEventAnnouncement(ev)` — builds the mesh string (see format below).

- `async function runPretalxAnnouncerTick()`:
  1. Read `getKnowledgeSettings().pretalx`; return unless `enabled && url &&
     announce.enabled`.
  2. `channels = getChannelsForCommand("pretalx")`; return if empty.
  3. `events = await ensureSchedule()` (cached); `now = Date.now()`,
     `lead = announce.leadMinutes * 60000`.
  4. For each event with `startMs != null`, **fire condition**:
     `now >= startMs - lead && now < startMs && !announced[guid]`.
     - Build the message; for each target channel `await sendMeshReply("^all",
       msg, "local-ai", {channelIndex, isDirectMessage:false})` inside try/catch.
     - Mark `announced[guid] = startMs` **only after a successful send** (so a
       bridge-down tick retries next time while still in-window), then persist.
     - Also `addMessage({direction:"system", sender:"agent", ...})` for the log.
  5. Prune `announced` entries with `startMs < now - 12h`.

- `startPretalxAnnouncer()` — `setInterval(runPretalxAnnouncerTick, 30_000)` wrapped
  in try/catch so a throw never kills the interval; store the handle and clear it in
  `shutdown()`. Called from the `server.listen` callback.

### Why this fire condition is safe

- Only fires inside `[startMs - lead, startMs)` → never announces started/past events.
- Enabling mid-window announces once immediately (desirable).
- Dedup set (persisted) prevents repeats within a window and across restarts.
- First enable does **not** backfill the whole schedule — only events currently in
  their lead window.
- 30s tick → announcement lands within ~30s of the target lead moment.

## Message format

Concise, mesh-length-aware (`trimResponse` / `sanitizeMeshReply`), e.g.:

```
📅 14:30 · Main Hall
Deconstructing the LoRa PHY
— Jane Doe, John Smith
```

- Time = `startLabel` (conference-local HH:MM). Prefix `dayDate` (e.g. "Tue 14:30")
  only if the event is not "today" in conference tz (multi-day safety).
- Room = location; omit the ` · <room>` segment if empty.
- Speakers: join `persons`, cap at 2 + " +N" overflow; omit the `— …` line if none.
- Title trimmed to keep the whole packet within the mesh budget.

## UI (Integrations → Pretalx detail page)

Add below the schedule URL, above the channel bindings:

- **Announcements** toggle (`aria-pressed`, reuse `setAiSettingsToggle`).
- **Lead time (min)** number input (1–120).
- Helper text: "Announces each session to the channels where Pretalx is enabled,
  <n> minutes before it starts. Bind Pretalx to a channel below to choose where."

Wire into `renderAiSettings` (load) and `collectIntegrationsForm` (save →
`integrations.pretalx.announce`). No server route changes (round-trips via
`/api/ai-settings`).

## Files touched

- `server.js`: settings schema (`getKnowledgeSettings`/`updateKnowledgeSettings`),
  `data/pretalx-announce.json` persistence (load + `persistPretalxAnnounce`),
  `getChannelsForCommand`, `formatEventAnnouncement`, `runPretalxAnnouncerTick`,
  `startPretalxAnnouncer` + `listen` wiring + `shutdown` clear, URL-change reset.
- `static/index.html`: announce toggle + lead-time input in the Pretalx screen.
- `static/app.js`: DOM refs, render + collect wiring.
- `static/styles.css`: none expected (reuse existing field/toggle styles).
- `data/pretalx-announce.json`: new runtime state file (git-ignored like other data).

## Out of scope / follow-ups

- Digest/batched "starting soon" summaries, per-track filters, reminders at multiple
  lead times.
- Announcing only for specific rooms/tracks.
- End-of-talk or "now starting" (0-min) messages.
