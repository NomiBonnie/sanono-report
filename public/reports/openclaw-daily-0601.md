# OpenClaw + Claude Code Daily Brief — June 1, 2026

![Infographic](/images/openclaw-daily-0601/infographic.png)

## Part 1: OpenClaw 本体

### v2026.5.31 Pre-release (Today) 🟢

OpenClaw 发布 **v2026.5.31 pre-release**，五月最后一个版本。

- **Agent 运行时恢复增强** — 中断的 tool call、过期 session binding、compaction handoff、media 重试更稳健
- **全渠道稳定性** — Telegram/WhatsApp/iMessage/Slack/Discord/Teams/Google Chat/Meet/iOS Talk
- **Gateway** — Tailscale Serve service-name binding、更安全的 agents add、可靠 progress drafts
- **Provider 超时治理** — OAuth/device-code 生命周期、media 下载等都加了 bound
- **Skill Workshop 完整 UI** — proposal 列表、today actions、revision handoff
- **新模型** — MiniMax M3、Copilot Claude 1M capabilities
- **iMessage 状态迁移 SQLite**

⚠️ 当前版本 v2026.4.15，已落后约 6 个大版本。

### "Claw Chain" 安全研究 (2026-05-18) 🔴

Cyera 安全团队披露 **四个链式 CVE**：沙箱突破 → 凭证窃取 → Gateway 提权 → 宿主机持久后门。影响所有 OpenShell 沙箱部署。

---

## Part 2: Claude Code 本体

### Claude Opus 4.8 + Dynamic Workflows ⭐⭐

- **Opus 4.8 (May 28)** — 自查代码缺陷能力比 4.7 提升 4x，法律全通过标准首次突破 10%
- **Dynamic Workflows (研究预览)** — 自动计划 + 启动数百并行 subagent（上限 1,000）
- **Fast Mode** — ~2.5x 更快推理，价格降低 3x（$10/$50 per MTok）
- **定价不变** — 标准模式 $5/$25 per MTok

### Claude Code v2.1.157 (May 29) 🟢

- `.claude/skills` 目录 plugin 自动加载
- `claude plugin init <name>` 脚手架
- Worktree 会话内切换
- 大量 bug 修复（WSL 图片粘贴、tmux 剪贴板等）

---

## Part 3: 🔥 生态

- **ClawHub** — 约 3,498 Skills（经 ClawHavoc 清理后）
- **MCP** — 200+ 社区 server，标准 agent-tool 协议
- **Claude Skills** — 跨 Chat/Cowork/Claude Code 运行
- **security-guidance plugin** — 同 session 内审查代码安全漏洞
- **本地 plugin 自动发现** — v2.1.157 起 `.claude/skills` 自动加载

---

## Part 4: 🎮 社区玩法

### Twitter/X 热门
- **2026 non-coder cheat sheet** — 用 Claude Desktop app 而非纯 CLI
- **Effort Control** — standard/extra/max 三档按任务复杂度调整
- **HTML is the new Markdown** — Anthropic 工程师分享精确格式控制
- **Spec-driven Development** — Notion 工程师 AI 工程 workflow

### 安全最佳实践
- ClawHavoc 教训：1,184 恶意 Skills 窃取 API keys
- 始终用 `clawhub audit --local` 和 skill-vetter 审查

---

## ⚡ 行动建议

1. 🔴 **升级 OpenClaw** — v2026.4.15 → v2026.5.31
2. 🟡 **试用 Opus 4.8 Dynamic Workflows** — 并行 subagent 大规模代码重构
3. 🟢 **关注本地 plugin 自动加载** — `.claude/skills` 目录自动发现
4. 🟡 **安全审查** — Claw Chain CVE 影响评估
