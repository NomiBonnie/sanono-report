# OpenClaw + Claude Code Daily Digest — June 24, 2026

![Infographic](/images/openclaw-daily-0624/infographic.png)

## Part 1: OpenClaw v2026.6.8

Latest release (June 8):

- **Telegram/WhatsApp rich text** — Tables, lists, expandable blockquotes, preserved line breaks
- **Agent runs more reliable** — DM sends, media completions, auto-reply, session identity fixes
- **New models** — GLM-5.2 + Claude Haiku 4.5 catalog
- **`/usage` native footers** — Formatted usage rendering with warnings
- **Web search** — Key-free providers (DuckDuckGo, Parallel Free, Codex Hosted Search) stay opt-in
- **Memory & state** — OpenAI embedding batch auto-split, SQLite avoids WAL on NFS
- **UI** — Workspace files collapsed, WebChat backscroll, iOS foreground reconnect

No breaking changes.

## Part 2: Claude Code Updates

### Week 24 (June 8–12) — v2.1.166–v2.1.176
- `/cd` — Switch working directory mid-session without rebuilding prompt cache
- **Sub-agent nesting** — Up to 5 levels deep
- `--safe-mode` — Disable all customizations for troubleshooting
- `fallbackModel` — Configure up to 3 fallback models

### Week 23 (June 1–5) — v2.1.158–v2.1.165
- **Auto mode on Bedrock/Vertex/Foundry** — Opus 4.7/4.8
- **Safer automatic edits** — Prompt before writing executable files
- `/plugin list` — Print installed plugins inline
- **Version requirements** — Enterprise can enforce version ranges

### Week 22 (May 25–29) — Opus 4.8
- **Opus 4.8 as default model** (Max/Team Premium/Enterprise)
- **Dynamic Workflows** — Orchestrate dozens to hundreds of subagents
- **Security-guidance plugin** — Real-time vulnerability review
- **Fast mode** — Opus 4.8 @ $10/$50 per MTok

### 🔥 Dynamic Workflows Deep Dive
- Claude writes its own harness per task (6 orchestration patterns)
- Up to **1,000 agents**, 16 concurrent
- Fixes: agentic laziness, self-preferential bias, goal drift
- Works for non-coding tasks too (research, knowledge management)

### Managed Agents
- Self-hosted sandboxes + MCP tunnels
- Scheduled runs with authenticated CLI tools
- Enterprise boundary control

## Part 3: 🔥 Ecosystem

### MCP 2026-07-28 Specification Release Candidate
- **Stateless core** — Horizontal scaling without session stores
- **MCP Apps** — Server-rendered HTML UIs in sandboxed iframes
- **Tasks extension** — Long-running work support
- **Enterprise-Managed Auth** — Stable, zero-touch OAuth
- **JSON Schema 2020-12** — Full tool parameter support
- **Extensions framework** — New features ship as opt-in extensions

### ClawHub Status
- **13,000+ skills** on marketplace
- ⚠️ **Security alert**: 1,184 malicious skills found (Atomic Stealer, reverse shells, credential exfil)
- Top skills: telegram-notify, github, browser-automation, memory plugins
- Always vet with skill-vetter before installing!

### Claude Code Ecosystem
- **Artifacts in Claude Code** — Rich output within sessions
- **Routines** — Scheduled tasks (Pro/Max/Team/Enterprise)
- `/goal` — Set completion conditions, Claude works across turns
- **Code Review** — Opus 4.7 back-tests PRs

## Part 4: 🎮 Community Hacks

### Twitter Highlights

1. **@mvanhorn — "Every Claude Code Hack I Know"**
   - Run 4-6 sessions simultaneously
   - Get voice-pilled (voice input workflow)
   - Point new sessions at plan files to continue work

2. **@Suryanshti777 — "35+ Claude Code Tips (2026 Edition)"**
   - 11 months of intensive usage distilled
   - Beginner to advanced power-user techniques

3. **@KanikaBK — "Claude Routines that work while you sleep"**
   - Full 2026 guide for scheduled automation
   - Requires GitHub + Claude Code web

4. **@nateherk — "12 Best Claude Code Features"**
   - `/goal` as killer feature — clear definition of done
   - Combine with dynamic workflows

5. **@dvassallo — OpenClaw tax filing ($1.8M complex transaction)**
   - Reconstructed full entity history (2019-2025)
   - Caught accountant's date error
   - Saved $8,000 in fees

### Practical Tips
- **Dynamic Workflows + Second Brain** — 10 parallel agents organizing Obsidian vault
- `/cd` for multi-project switching without losing context
- `--safe-mode` when plugins misbehave
- `fallbackModel` for rate limit resilience

---

*Reliability: 🟢 Official sources | 🟡 Community/Twitter (verified links)*
