# OpenClaw & Claude Code Weekly Pulse — April 13, 2026

![Infographic](/images/openclaw-daily-0413/infographic.png)

## Part 1: OpenClaw Platform

### v2026.4.12 Pre-release (Apr 12) 🟢
- **Plugin loading architecture refactor** — Narrowed CLI/Provider/Channel activation to manifest-declared needs. Faster startup, cleaner boundaries. (#65120, #65259, #65298, #65429, #65459)
- **Active Memory defaults to QMD search** — Memory recall now uses search mode by default with better telemetry (#65068)
- **Memory Wiki Unicode fix** — Non-ASCII titles no longer crash slugs or overflow paths (#64742)
- **Dreaming fixes** — Heartbeat consumed once, stops re-ingesting own narratives, short-term recall excludes dream reports
- **WebChat fix** — Internal transcript-repair markers hidden from chat history
- **WhatsApp media fix** — Falls back to first mediaUrls entry when mediaUrl is empty

### v2026.4.11 🟢
- ChatGPT conversation import into OpenClaw memory
- Memory Palace + Imported Insights diary views in Dreaming
- WebChat structured rendering for mixed media outputs + [embed] tag
- Plugin setup descriptors — plugins declare their own auth/config needs

### v2026.4.10 🟢
- Active Memory sub-agent — auto-pulls context before replies
- Codex Provider native binding (managed auth, native threads, model discovery)
- exec-policy becomes first-class config surface
- SSRF defenses tightened for browser and sandbox

## Part 2: Claude Code CLI

### v2.1.81 (Latest) 🟢
- **--bare mode** — `--bare` flag skips hooks, LSP, plugin sync, skill walks for scripted `-p` calls
- **Channels permission relay** — MCP servers forward tool approval prompts to phone
- **OAuth concurrent fix** — Multiple sessions no longer require repeated re-auth
- **Voice mode fix** — WebSocket reconnection and audio recovery
- **MCP UX** — Read/search calls collapse into single `Queried {server}` line
- **MCP OAuth** — CIMD support for servers without Dynamic Client Registration

### v2.1.80 🟢
- Rate limits in statusline (5h/7d windows with used_percentage)
- Effort frontmatter for skills and slash commands
- Channels preview — MCP servers can push messages into sessions
- Large repo optimization — ~80MB memory reduction on 250k-file repos

## Part 3: 🔥 Ecosystem

### ClawHub Trending
| Skill | Function | Installs | Notes |
|-------|----------|----------|-------|
| Agent Browser | Web automation | 11,000+ | Most popular |
| Deep Research | Multi-step investigation | Hot | Structured reports |
| Self-Improving Agent | Self-evolution + memory | Hot | Experimental |
| Mission Control | Daily productivity dashboard | Hot | Useful for tracking |
| n8n Workflow Manager | OpenClaw ↔ n8n bridge | Hot | Automation |
| Cursor CLI Agent | OpenClaw ↔ Cursor bridge | New | Niche |

New macOS-specific skills published (Focus Mode, Shortcuts integration).

### MCP Ecosystem
- **Spec update** — MCP servers classified as OAuth Resource Servers with mandatory Resource Indicators
- **Official Registry** — Single source of truth for MCP server discovery (public + private sub-registries)
- **WebMCP** — Chrome extension turns any webpage into an MCP server for AI agents
- **Claude Code Channels** — Push external events (Telegram, Discord, webhooks, CI) into running sessions

## Part 4: 🎮 Community Playbook

### Twitter Highlights
1. **@kavinbm** — "7 days with OpenClaw + Claude Code = what a 10-20 person team takes 6-9 months" (128k views)
2. **@milesdeutscher** — April 2026 AI stack: only 7 tools, Claude Code handles all coding
3. **@eyad_khrais** — Opus for planning + Sonnet for implementation (Shift+Tab to switch)
4. **@CarolMonroe** — Claude Code + Apple Shortcuts automation workflow
5. **@AINativeF** — Silo: Structured Memory concept gaining traction
6. **@kilocode** — Security alert: v2026.4.9 patches SSRF + .env injection 🔴

### Actionable Tips
- **Opus + Sonnet workflow** — Plan with Opus (deep thinking), implement with Sonnet (fast). Shift+Tab switches.
- **--bare mode** — Use `claude -p --bare` in CI/CD for 10x faster execution
- **Rate limit monitoring** — v2.1.80 statusline shows real-time Claude.ai usage
- **MCP Channels** — External events auto-flow into Claude Code sessions = event-driven agents
- **Apple Shortcuts** — Combine with Claude Code for macOS automation

---

📊 **Key Numbers:** OpenClaw v2026.4.12 pre | Claude Code v2.1.81 | 5 releases this week | 53 built-in skills | 11,000+ Agent Browser installs

*Research: NONO | April 13, 2026 | Sources: GitHub, Twitter/X, OpenClaw.com.au, claudefa.st, Tavily*
