# OpenClaw + Claude Code 每日调研 — 2026-07-01

![OpenClaw + Claude Code Daily Brief Infographic](/images/openclaw-daily-0701/infographic.png)


## Part 1: OpenClaw 本体

### 版本状态
- **npm latest:** `2026.6.10`（稳定版）
- **npm beta:** `2026.6.11-beta.1`（预发布）
- 自 6 月 24 日以来包版本未变动，属于观察期

### 2026.6.11 Beta 亮点 🟢
- **Channel 路由升级为控制平面：** Slack relay mode、Mattermost `/oc_queue`、per-DM model overrides、channel identity hook context、per-agent usage-cost reporting
- **文件驱动 + 可唤醒工作流：** `openclaw agent --message-file` 和 RAFT CLI wake bridge，结构化交付无需经过 chat prompt
- **Plugin 分发成熟：** 官方插件外部化、bundled icon metadata 随安装分发
- **Android 设置面板改进：** 远程管理可见性增强
- **Agent turn 可恢复性：** Codex partial deltas、harness activation fix、long-context prompt-cache stability

### 活跃 PRs / Issues
- PR #97075: Gateway runtime doctor 输出改进（redact health targets）
- PR #97312: Telegram long-stream 修复
- PR #97101: `sessions_history` 分页支持
- Issue #97317: Cron context waste
- Issue #97324: Replay-unsafe tool-call

### 运维建议
保持 `2026.6.10` 生产环境。如需 channel-heavy 或 scheduled agent 场景，可测试 `2026.6.11-beta.1`。

---

## Part 2: Claude Code 本体

### 🔥 重磅：Claude Sonnet 5 发布（2026-06-30）
- **昨天刚发布！** Claude Sonnet 5 成为 Claude Code 默认模型
- 原生 1M token context window
- 促销价 $2/$10 per Mtok（至 8 月 31 日）
- 性能接近 Opus 4.8，成本显著更低
- 更强的 reasoning、coding、autonomous operation 能力
- 网络安全能力仍低于 Opus/Mythos 级，默认启用 cyber safeguards

### Claude Code v2.1.197（2026-06-30）🟢
- 引入 Sonnet 5 作为默认模型

### Claude Code v2.1.196（2026-06-29）🟢
- Org default models — 管理员在 org console 设置
- Session 可读命名
- 可点击文件附件（Cmd/Ctrl-click 在 Finder 中显示）
- **安全修复：** `claude mcp list/get` 不再自动启动未批准的 repo .mcp.json servers
- Background session reliability 大幅增强（survive process stop/restart/update）
- Remote session 崩溃自动恢复
- 修复 MCP OAuth scope 问题（GitLab self-hosted 兼容）
- 修复 `/deep-research` verifier failure 误报
- 修复 voice dictation 空格吞字问题

### Claude Code 当前版本线
- Latest release: v2.1.197
- 版本号已从 1.0.x 升级到 2.1.x 系列

### 其他 Anthropic 动态
- **Claude Corps**（6/11）：企业级多 agent 协作
- **Claude Tag**（6/23）：新产品功能
- **Claude Science**（6/30，同日）：科学家 AI workbench
- **Claude Fable 5 & Mythos 5**（6/9）：Mythos-class 超 Opus 级模型

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Servers 热门推荐

| Server | 功能 | 适合 Sam |
|--------|------|----------|
| **Playwright** | 浏览器自动化 | ⭐⭐⭐ 已在用 |
| **Supabase** | 数据库管理 | ⭐⭐ |
| **Sentry** | 错误监控 | ⭐⭐ |
| **Totalum MCP** | 从 prompt 直接部署 app | ⭐ |
| **katzilla** | 300+ 公共数据源统一 API | ⭐⭐ |
| **mcp-eastmoney** | A 股实时行情/资金流向 | ⭐⭐⭐ 中国市场相关 |

### GitHub 热门项目
- **VoltAgent/awesome-openclaw-skills**（⭐ 50.6k）：最全 skill 合集，分 Gaming / Security / Self-Hosted 等分类
- **hesreallyhim/awesome-claude-code**：Claude Code 资源汇总
- **openclaw-cc**：无 Gateway 的独立 agent 框架，600 行 Node.js 替代完整 OpenClaw Gateway

### 安全生态 ⚠️
- **Palo Alto Unit42 报告（6/11）：** ClawHub supply chain 攻击深度分析，发现 "ClawHavoc" payload
- **Bitdefender：** 早期约 17% 的 skills 含恶意载荷
- **Snyk：** 伪装 Google Services 的恶意 skill 通过 SKILL.md 社会工程诱导安装恶意软件
- **Semgrep：** 发布 OpenClaw Security Engineer's Cheat Sheet
- **BetterClaw.io：** 17 个安全审核通过的 top skills 排名，Skill Vetter ~256K 安装量

### 安全建议
Sam 的 skill-vetter 铁规继续有效！生态安全形势严峻，**任何新 skill 必须先审查**。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热帖精选

1. **@PrajwalTomar_（3/30）：** 100+ 小时测试，整理出 60 个真正有效的 Claude Skills/Workflows/Repos 🟢
2. **@omarsar0：** 关于 reusable workflows 的复利效应 — 早期投入建模式，后期 compounding 收益惊人。所有 workflow 可迁移到 Codex 等其他 agent 🟢
3. **@songadaymann：** "Treat every MCP, skill or plugin as toxic until you know 100% it's not" — 安全警示 🟡
4. **@ankurkumarz：** OpenClaw 被营销人员 weaponize 做增长黑客 🟡

### 实用技巧
- **Hannah Stulberg 的 30 Claude Code Tips：** 1500+ 小时使用经验总结，涵盖 parallel sessions、plan mode、status line 等进阶用法
- **Claude Code Skills + MCP 组合：** Skills 是教 agent 如何组合工具的 playbook，MCP 是具体工具连接层，两者互补
- **Background agents survive updates：** v2.1.196 后 background session 可以跨进程重启存活，长任务更可靠
- **Org default model：** 团队管理可统一设定默认模型，个人不选择时自动继承

### Sam 场景匹配度高的发现
- ⭐ **mcp-eastmoney**：A 股数据，免费 API，零配置
- ⭐ **Sonnet 5 作为默认**：今天起 Claude Code 自动用 Sonnet 5，性价比大幅提升
- ⭐ **Background session resilience**：对 OpenClaw cron 任务场景非常有利

---

## 信息可靠度

| 信息 | 来源 | 可靠度 |
|------|------|--------|
| Sonnet 5 发布 | Anthropic 官方 + Mashable | 🟢 确认 |
| OpenClaw 2026.6.11 beta | GitHub releases + releasebot | 🟢 确认 |
| Claude Code v2.1.197 | 官方 changelog | 🟢 确认 |
| ClawHub 安全问题 | Unit42 + Snyk + Bitdefender | 🟢 多源确认 |
| 社区玩法 | Twitter/Blog | 🟡 个人经验 |
| mcp-eastmoney | GitHub | 🟡 未亲测 |

---

*调研完成时间：2026-07-01 12:00 CST*
*搜索轮次：7 轮（Tavily × 6 + web_fetch × 2）*
