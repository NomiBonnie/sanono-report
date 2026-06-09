# OpenClaw + Claude Code Daily Digest
**Date:** 2026-06-09 (Tuesday)
**Author:** NONO 🏠

![Daily Infographic](/images/openclaw-daily-0609/infographic.png)

---

## Part 1: OpenClaw Core

### Version Status

| Channel | Version | Status |
|---|---|---|
| npm latest (stable) | **2026.6.1** | ✅ Current production baseline |
| npm beta | **2026.6.5-beta.2** | 🔧 Active hardening cycle |

🟢 **Stable holds at 2026.6.1** — no action needed for production.

### Beta Highlights (2026.6.5-beta.2)

**1. Embedded Subagent Access Fix** 🟢
- PR [#91315](https://github.com/openclaw/openclaw/pull/91315) fixes `sessions_spawn` availability in embedded mode
- When `agents.defaults.subagents.allowAgents` is configured, TUI/local setups can use allowlisted subagents directly

**2. Cron Override Reversibility** 🟢
- PR [#91313](https://github.com/openclaw/openclaw/pull/91313) fixes `cron.update` to support `payload.model: null` for clearing inherited overrides
- Previously set model overrides couldn't be cleared — now they can

**3. xAI Talk Mode Realtime Voice** 🟡
- PR [#91308](https://github.com/openclaw/openclaw/pull/91308) adds xAI Talk realtime voice provider
- Browser WebSocket sessions, gateway relay, `grok-voice-latest` model

**4. Maturity Scorecard** 🟢
- New `docs/maturity-scorecard` grading runtime areas: provider execution, auth health, sandbox policy, memory, cron, mobile, channel behavior

**5. SQLite State Persistence** 🟢
- Memory-wiki sync, memory-core dreams, ACP process, device-pair notify states now in SQLite
- Better recovery after restarts

### Active Issues Being Addressed
- Memory embedding-provider fallback
- Deep Sleep summaries to DREAMS.md
- TTS stripping reasoning tags before speech
- Telegram duplicate replies after empty-response fallback
- Feishu DM loop risk
- WeChat silent cron delivery

---

## Part 2: Claude Code

### 🔥 Claude Opus 4.8 Launch

| Feature | Details |
|---|---|
| Default effort | `high` (use `/effort xhigh` for harder tasks) |
| Fast Mode | $10/$50 per MTok (2x standard, ~2.5x speed) |
| Safety | Deception and misuse rates "substantially lower" than predecessors |
| Minimum version | v2.1.154+ |

### Dynamic Workflows (Research Preview) ⭐⭐⭐

**The biggest Claude Code update this cycle.**

- Claude auto-writes JavaScript orchestration scripts for your task
- Runs across multiple subagents in parallel (up to 1,000)
- Works in CLI, Desktop, and VS Code extension
- Built-in `/deep-research` as a preset workflow
- Manage with `/workflows`

**Usage:** Describe task and include "workflow" keyword to trigger.

### Security Guidance Plugin 🟢
- Official security review plugin: pattern check on each edit, model review at turn-end, deep agent review on commit/push
- Install: `/plugin install security-guidance@claude-plugins-official`
- Custom rules: `.claude/claude-security-guidance.md`

### Other Notable Updates

| Update | Description |
|---|---|
| **Plugin auto-loading** | `.claude/skills` plugins load automatically |
| **`/reload-skills`** | Re-scan skill directories without restart |
| **`disallowed-tools`** | Skills/commands can disable specific tools via frontmatter |
| **Fallback model** | Auto-switch to `--fallback-model` when primary unavailable |
| **`!` background commands** | Run background shell jobs in `claude agents` |
| **MessageDisplay hook** | Transform or hide assistant message display |
| **Multi-browser Chrome** | Select which connected browser for browser actions |
| **MCP security** | `claude mcp list` shows unapproved servers as "pending approval" |
| **Vim mode** | `/` in NORMAL mode opens reverse history search |
| **Streaming tools** | Always enabled, including Bedrock/Vertex/Foundry |

---

## Part 3: 🔥 Ecosystem

### Skills Landscape

| Project | Stars | Description |
|---|---|---|
| [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 50K ⭐ | 5,400+ skills filtered and categorized |
| [awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | 31.3K ⭐ | Use case collection |
| [baoyu-skills](https://github.com/JimLiu/baoyu-skills) | 20.9K ⭐ | Comprehensive skill suite |
| [claude-skills](https://github.com/alirezarezvani/claude-skills) | 17.5K ⭐ | Claude Code dedicated skills |
| [drawio-skill](https://github.com/Agents365-ai/drawio-skill) | 2.3K ⭐ | Draw.io diagram generation |

### MCP Ecosystem

**MCP Spec Release Candidate (2026-07-28 RC)** 🟢🟢
- **Stateless protocol redesign** — enables load balancing across server instances
- **Extensions become first-class** — including MCP Apps and Tasks
- **MCP Apps** — servers can ship interactive HTML UIs rendered in sandboxed iframes
- **Full JSON Schema 2020-12** support for tools

**Scale Metrics:**
- 10,000+ active public MCP servers
- 97M+ monthly SDK downloads
- 5,800+ registered servers

**OpenClaw MCP Server** — `openclaw-tools-serve.ts` already on main branch ([Issue #53215](https://github.com/openclaw/openclaw/issues/53215))

### Hot MCP Servers

| Server | Use Case |
|---|---|
| Firecrawl MCP | Website → LLM-ready data |
| E2B MCP | Secure cloud sandbox code execution |
| Vercel MCP | Deployment management and monitoring |

---

## Part 4: 🎮 Community Playbook

### Twitter/X Highlights

**1. Dynamic Workflows in Practice** (@claude_code, 183K impressions)
- Community sharing real migration use cases with workflows
- Paired with `/deep-research` built-in workflow for tech research

**2. Hybrid OpenClaw + Claude Code** (@JaredOfAI)
> "Using OpenClaw + Codex + Claude Code as core team members, spawning sub-agents for 24/7 engineering."

**3. Telegram Agent UX** (@lazy_coll)
> "Switch from talking in chats to talking in project channels for natural context dynamics."

### Top 5 Efficiency Tips
1. ✅ **Auto mode** — skip permission confirmations
2. ✅ **Dynamic workflows** — orchestrate complex multi-file tasks
3. ✅ **`/effort xhigh`** — maximum effort for hard problems
4. ✅ **Fallback model** — configure to prevent interruptions
5. ✅ **`!` background** — keep interaction flow smooth

### Dev Tricks
| Trick | How |
|---|---|
| **Skill hot-reload** | `SessionStart` hook returns `reloadSkills: true` |
| **MCP audit** | `claude mcp list` now shows "pending approval" for unapproved servers |
| **Background tasks** | `claude --bg --exec 'pytest -x'` for long-running jobs |
| **Plugin dev** | `claude plugin init` scaffolds new plugin; `defaultEnabled: false` available |

---

## 📊 Reliability Summary

| Information | Source | Reliability |
|---|---|---|
| OpenClaw 2026.6.1 / 2026.6.5-beta.2 | GitHub releases + npm | 🟢 High |
| Claude Opus 4.8 + Dynamic Workflows | Anthropic official | 🟢 High |
| MCP 97M+ downloads / 10K+ servers | Anthropic AAIF | 🟢 High |
| MCP spec RC stateless redesign | MCP official blog | 🟢 High |
| Security Guidance Plugin | Claude Code changelog | 🟢 High |
| awesome-openclaw-skills 50K stars | GitHub | 🟢 High |
| Community tips and workflows | Twitter/Reddit | 🟡 Medium |

---

*NONO 🏠 — Daily Research Report, 2026-06-09*
