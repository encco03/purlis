# purlis on iPhone: Phase 0 findings

**Status:** in progress. The spike the spec's §7 row 0 asked for, run from 2026-10-12 on this Mac
(macOS 26.2, Xcode 26.6, Rust 1.99.0) over Wi-Fi. The spike's code is throwaway and lives outside
this repository (`~/purlis-research/spike/`, its own git repository, no remote); nothing of it is
proposed. Its tests: `cargo test --workspace` there, 11 passing. Its raw numbers: `RESULTS.md` there.

What is still to be measured needs a person with the phone: §1's second half, all of §2, and
§3's Codex and opencode rows.

## 1. `session-protocol` + `snow` + tokio on iOS

- Cross-compile for `aarch64-apple-ios`: **pass**, with one finding. `nix` 0.31.3 (pulled in by
  `purlis-same-user`, which `purlis-session-protocol` depends on under `cfg(unix)`) does not build
  for iOS: `KextControl = libc::SYSPROTO_CONTROL` is gated on `apple_targets`, and libc 0.2.190
  defines that constant for macOS only. The spike vendors nix with the cfg narrowed to
  `target_os = "macos"` and patches it in. **purlis's own crates needed no change.** The fix
  belongs upstream in nix; until it lands, an iOS build carries the same one-line patch.
- A Tauri 2 iOS app linked them and listed a host's chats over Wi-Fi through Noise XX: *pending
  the phone run*. The same link works process-to-process on the Mac (the host's five tests and the
  phone library's two).
- nix has a second iOS-broken use behind its `net` feature (`UtunIfname`, `sockopt.rs`, the same
  `SYSPROTO_CONTROL` under `apple_targets`). It is not enabled here; Phase 1 should not enable it.
- A detail Phase 1 inherits: the protocol crate's client side on iOS still links `same-user`
  (`proc_pidinfo`, unix-socket peer checks) that a phone never calls. Whether to cfg that out is a
  question for upstream, not a blocker.

## 2. xterm.js in WKWebView

| Burst | Drawn | Seconds | Longest frame | Input stayed responsive |
|---|---|---|---|---|
| 2 MB (2,114,336 B) | pending | | | |
| 13 MB (13,082,454 B) | pending | | | |

Desktop reference (spec L3): longest frame 42 / 52 ms, no freeze.

**Decision for Phase 1:** pending the numbers. If the webview freezes or iOS kills the app, the
spec's rule applies: the level-2 screen is timeline-only with "View on desktop".

Locking the phone mid-burst and reopening: pending.

Two facts from building it, both about `session-protocol::view` as the gateway will meet it:

- A source must pace on the view's queue (the bench's `SOURCE_PAUSE`, 256 KiB), because
  `Feed::push` drops a view as `FellBehind` past `Limits::most_queued_bytes` (1 MiB). A PTY paces
  a real harness the same way, so the gateway inherits this for free; a synthetic source does not.
- `Feed` gives no signal when the view's writer is gone (only `FellBehind` and `OverAcknowledged`
  close it). A paced source whose client vanished, which is what an iOS suspend looks like, would
  wait for ever; the spike's host gives up after 2 s without the queue draining. The gateway's
  source is a PTY, which keeps writing and so trips `FellBehind`, but a Phase 1 test should pin
  that a suspended phone's view is dropped and re-attached, not held.

How the phone measures, so the numbers can be read: the host's acks are sent only from xterm's
write callback (what the protocol means by "drawn"), the renderer is WebGL with the DOM renderer as
the fallback and the status line says which drew, the longest-frame figure counts from one frame
after the terminal opened until the burst has been quiet for 2 s, and the tap probe records the
worst pointer-to-next-frame latency rather than a count. Only one pane is drawn, so "other panes
responsive" is not measured.

## 3. A prompt pasted mid-turn

The exact bytes purlis's writer sends (`curation::bracketed`: `ESC[200~ … ESC[201~` then `\r`, one
write), sent by tmux into a 120×40 PTY eight seconds into a thirty-second turn.

| Harness | Verdict | Evidence |
|---|---|---|
| Claude Code | **queued** | `midturn/claude.log`: the pasted prompt is visible at t+13s while the count runs; at t+68s the count has reached 25 and the prompt was submitted as the next turn and answered `PINEAPPLE` |
| Codex | pending (not logged in on this Mac) | |
| opencode | pending (not logged in on this Mac) | |

**Consequence for §5.2:** for Claude Code, "a harness that is mid-turn queues it its own way"
holds. Codex and opencode pending.

A detail the phone's Pair/first-run flow does not have but a desktop harness does: Claude Code
asks whether to trust a new folder before anything else, with "No, exit" as the default. The
gateway never starts chats (D2, phase 1), so this does not reach the phone; it is noted because
the spike's script had to answer it.

## 4. What Phase 1's plan must take from this

1. Carry the nix cfg patch (or a nix release with it) in any iOS build until upstream fixes it.
2. The gateway's view feeding must be paced by the PTY, never by a loop (§2's fact).
3. Pending: the WKWebView verdict decides the level-2 screen's shape (spec §7 row 0).
