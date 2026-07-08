# Changelog

All notable changes to Blackbox Node are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Configurable Pretalx schedule refresh interval (`knowledge.pretalx.refreshMinutes`,
  default 10, in AI Settings → Integrations → Pretalx). Lower it near a live event so
  schedule changes propagate quickly; the cache TTL was previously a fixed 10 minutes.

### Fixed

- Pretalx announcements now reflect **rescheduled** sessions. Dedup keyed on the event
  GUID alone meant a talk moved to a new time (e.g. opening 19:15 → 19:45) was never
  re-announced; dedup now tracks GUID + start time, so a corrected announcement goes
  out when a session's start changes.

### Changed

- Pretalx announcer batches all sessions that share a start time into a single
  message — `📅 10:00 · N talks · Room X — … · Room Y — … · +N more` — instead of
  one broadcast per talk. The message is bounded by a byte budget, so a crowded
  slot (many parallel tracks) is summarised as "+N more" rather than flooding the
  channel with dozens of packets.

## [0.2.0] - 2026-07-06

### Added

- **Explicit vs ambient per-channel knowledge commands.** Knowledge commands
  (`/wiki`, `/pretalx`) are bound to channels via `aiSettings.channelCommands` in
  one of two modes: **explicit** — the node answers only the typed `/command`, and
  only on channels where it is enabled; or **ambient** — a channel is dedicated to
  one source and *every* message there is treated as a question (no slash needed),
  e.g. a `#schedule` channel answered by Pretalx. Ambient replies run a relevance
  prefilter and stay silent on off-topic chatter, with airtime guards (one reply in
  flight per channel, a per-sender cooldown). Built-in system commands keep the
  legacy global command-channel gate.
- **Pretalx pre-event announcer.** A configurable number of minutes before each
  `schedule.xml` session starts, the node broadcasts a one-off announcement
  (time, room, title, speakers) to the channel(s) Pretalx is bound to — regardless
  of explicit/ambient mode. Each session fires once, deduped across restarts
  (`data/pretalx-announce.json`), never backfilling past talks. Toggle and lead time
  live in AI Settings → Integrations → Pretalx.
- **`/pretalx` agent command.** Answers from a conference schedule (frab/Pretalx
  `schedule.xml`) and is time-aware ("what's on now?", "next in room X?",
  "talks tomorrow").

### Changed

- **Redesigned AI Settings** as a retro radio-SETUP-style drill-down: a category
  menu (General / Integrations) leading into per-entry detail screens
  (Integrations → Commands · Wiki · Pretalx), each with its own per-channel bindings.

### Fixed

- Pretalx announcements now render as a single line with inline separators; the mesh
  transport collapses newlines to spaces, which previously flattened the multi-line
  format into a run-on string.

[Unreleased]: https://github.com/kalambet/blackbox_node/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/kalambet/blackbox_node/releases/tag/v0.2.0
