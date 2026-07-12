# Plan: strip the sender-name prefix before channel inference

## Goal

MeshCore group-channel messages arrive as `"<Node Name>: <message>"` (the client
prepends its name because group broadcasts carry no per-sender field). For an
**ambient** channel, that whole string — including `"<Node Name>: "` — currently
flows into every inference decision: the relevance keyword match, the yes/no
classifier, the Wikipedia/schedule search, and the answer synthesis.

The username is noise. It skews relevance decisions and can leak into answers.
Strip the leading `"<Name>: "` prefix from a channel message **before any
decision or inference** (respond-or-not, classify, search, synthesize).

## Current behaviour (confirmed)

- `stripChannelSenderPrefix(text)` (server.js:3948) only strips the prefix **when
  the remainder begins with `/`** (the command case):

  ```js
  function stripChannelSenderPrefix(text) {
    const s = String(text || "").trim();
    if (s.startsWith("/")) return s;
    const match = s.match(/^[^\n:]{1,40}:\s+(\/.*)$/s); // note the \/  — command only
    return match ? match[1] : s;
  }
  ```

- `computeChannelBroadcastReply(sender, rawText, channelIndex)` (server.js:3907) is
  the single funnel for channel messages:
  `channelPrompt = stripChannelSenderPrefix(rawText)` → slash path **or** ambient
  (`runAmbientChannelReply(..., channelPrompt, ...)`).
- So for ambient free-text (`"Alice: when is the keynote?"`) the prefix is retained
  and `"Alice:"` reaches `matchesAmbient`, `ambientRelevanceClassifier`,
  `runAgentQuestion`, and the wiki/schedule search.

## Change

Generalise `stripChannelSenderPrefix` to strip a leading `"<name>: "` prefix
**unconditionally** (not just before a `/`), keeping the command path working:

```js
function stripChannelSenderPrefix(text) {
  const s = String(text || "").trim();
  // "<name>: <rest>" — name has no colon/newline, ≤40 chars; require whitespace
  // after the colon so "12:30", "http://…", "note:no-space" are NOT stripped.
  const match = s.match(/^[^\n:]{1,40}:\s+(\S.*)$/s);
  return match ? match[1].trim() : s;
}
```

Because `computeChannelBroadcastReply` is the one funnel, this sanitises the input
for **all** downstream steps at once — slash detection, `matchesAmbient`, the
classifier, `runAgentQuestion`, and the wiki/schedule search.

### Why unconditional is safe here

- Group-channel messages reliably carry the `"<Name>: "` prefix, so stripping the
  first one is correct.
- The `:\s+` guard (colon **followed by whitespace**) protects the common
  false-positives: clock times (`12:30`), URLs (`https://…`), and `key:value`
  tokens without a space.
- Only the **first** prefix is removed; the rest of the message (including any
  later colons) is preserved.
- The stored log/history message keeps the raw `"<Name>: …"` text (see
  `handleInboundMesh` `addMessage`, which uses `repairedText`) — we only sanitise
  the **inference input**, so the channel history still shows who asked.

### Open refinement (optional)

If `payload.senderName` is reliably populated for group messages, prefer an **exact**
strip of `"<senderName>: "` and fall back to the heuristic only when it is empty.
That eliminates the (small) risk of stripping a real `"word: "` in a prefix-less
message. Requires threading `senderName` into `computeChannelBroadcastReply`.
Needs confirmation that the bridge sets `senderName` on channel broadcasts — see
decision below.

## Scope / files

- `server.js`: rewrite `stripChannelSenderPrefix` + its comment. (Optionally thread
  `senderName` from `handleInboundMesh` → `computeChannelBroadcastReply` for the
  exact-strip refinement.)
- No UI changes. No settings changes.

## Testing

- **Unit** (`stripChannelSenderPrefix`):
  - `"Alice: when is the keynote?"` → `"when is the keynote?"`
  - `"Bob Smith: /wiki lora"` → `"/wiki lora"`
  - `"what's on at 12:30?"` → unchanged (no space after `:` in `12:30`)
  - `"see https://x.co/y"` → unchanged
  - `"just chatting, no prefix"` → unchanged
  - `"Node-7: talk about bitcoin: part 2"` → `"talk about bitcoin: part 2"` (only first stripped)
  - `"Name:"` (no content) → unchanged
- **E2E**: inject an ambient channel message `"Alice: when is the keynote?"`; assert
  the agent's logged query is `"when is the keynote?"` (no `Alice:`), i.e. the
  username never reaches inference.

## Out of scope

- DMs (they carry a real sender field; this funnel is channel-only).
- Changing what is stored in message history (kept verbatim).

## Decision (confirmed)

**Strip strategy = unconditional heuristic.** Strip a leading `"<name>: "` prefix
(name = ≤40 non-colon chars, colon + whitespace) regardless of `senderName`
availability. The `:\s+` guard limits false strips; the `senderName` exact-match
refinement is left as a possible future hardening, not part of this change.
