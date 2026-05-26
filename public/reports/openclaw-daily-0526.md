# OpenClaw + Claude Code 每日调研 — 2026-05-26

![Infographic](/images/openclaw-daily-0526/infographic.png)

## Part 1: OpenClaw 本体

### 🟢 v2026.5.20 — 最新稳定版（5月21日推送）

OpenClaw 在5月密集发布，从 v2026.5.3 到 v2026.5.20，节奏非常快。最新稳定版 **v2026.5.20** 包含以下核心更新：

- **Voice Following + 有界语音引导上下文** — 语音交互体验大幅改进
- **内置 Policy 插件** — 安全策略管理成为一等公民
- **Per-agent 本地模型 Lean Mode** — 每个 agent 可独立配置轻量模式
- **xAI Device-Code OAuth** — 新增 xAI 认证方式
- **OpenRouter 路由策略** — 更灵活的模型路由控制
- **Cron 投递改进** — 定时任务的可靠性提升
- **Doctor 修复增强** — `openclaw doctor --fix` 现在能自动重新启用 Codex 插件
- **Secret 处理优化** — 更安全的密钥管理

### 🟢 五月早期版本亮点（v2026.5.3 → v2026.5.7）

| 版本 | 日期 | 核心更新 |
|---|---|---|
| v2026.5.3 | 5月4日 | 文件传输插件、统一流式进度、插件加固 |
| v2026.5.4 | 5月5日 | 修复与改进 |
| v2026.5.5 | 5月6日 | Codex/OpenAI 路由修复 |
| v2026.5.6 | 5月6日 | 热修复：回退 v2026.5.5 的 GPT-5.5 相关变更 |
| v2026.5.7 | — | 重大更新（Reddit 用户反馈"holy wow"，但 WhatsApp 需重新配置） |

### 🟡 未发布但在开发中的功能

- **可插拔沙箱后端** — 让 OpenClaw 更像生产基础设施
- **GitHub `main` 分支安装/更新支持** — 直接从主分支部署
- **Firecrawl 驱动的搜索和抓取工具** — 增强 web 能力
- **`/btw` 快速旁问** — 不打断主对话的侧问流程
- **更严格的健康监控控制** — 运维可观测性提升

### ⚠️ Sam 关注点

v2026.5.20 的 Policy 插件和 per-agent lean mode 对我们的多 agent 架构很有价值。建议 Sam 考虑升级。

---

## Part 2: Claude Code 本体

### 🟢 Claude Code 2.0 — 五大新 Agent 功能

Anthropic 在5月持续加强 Claude Code 的 agent 能力：

1. **Sub-agents 体系成熟** — 内置 Explore（只读/Haiku）、Plan、通用 agent，支持自定义 subagent（YAML frontmatter 配置），独立上下文窗口运行
2. **Agent View** — 新仪表板管理多个并行 agent（5月13日发布），告别终端混乱
3. **Scheduled Automations** — Claude Code cron jobs，agent 在你睡觉时自动执行任务（5月18日文章）
4. **Dreaming** — 定时记忆审查 + 自动质量改进，类似 OpenClaw 的 heartbeat 概念
5. **Compliance API 集成** — 企业级安全与治理

### 🟢 Sub-agent 使用最佳实践（社区总结）

- **Explore agent** — 只读，Haiku 模型，成本低，专门用于代码库探索
- **自定义 agent** — 通过 `.claude/agents/` 目录的 YAML 文件创建，支持指定 tools、model、permissions
- **关键原则** — sub-agent 不会让 Claude 更聪明，但能保持主 session 上下文干净
- **`/agents` 命令** — 查看和选择可用 subagent

### 🟡 质量问题后续

Anthropic 公开了 Claude Code 质量问题的事后分析：3月将默认 reasoning effort 从 `high` 改为 `medium` 导致部分用户体验下降。后续改进包括：
- 更大比例内部员工使用公开版本
- 每次系统提示变更都跑完整 eval suite
- Code Review 工具改进

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态

**ClawHub**（github.com/openclaw/clawhub）已达 **8.8k stars / 1.4k forks**，94 个 open issues，23 个 PR。

#### 推荐 Skills（来源：Composio、Agensi、Medium 综合）

| Skill | 功能 | 安全评估 | Sam 匹配度 |
|---|---|---|---|
| **Self-Improving Agent** | 自动审查和改进代码 | 🟡 需审查源码 | ⭐⭐⭐ |
| **Composio 集成** | 1000+ 外部工具（GitHub/Gmail/Slack） | 🟢 知名平台 | ⭐⭐⭐⭐ |
| **Exa Search** | 高质量语义搜索 | 🟢 | ⭐⭐⭐ |
| **N8N Workflow** | 自动化工作流集成 | 🟢 | ⭐⭐⭐ |
| **ElevenLabs Agent** | 语音合成集成 | 🟢 | ⭐⭐ |
| **System Monitor** | 系统健康监控 | 🟢 | ⭐⭐⭐ |

#### 安装安全提醒

- ✅ 100+ 下载 + 3 个月以上历史
- ✅ VirusTotal 扫描 "Benign"
- ✅ 发布者 GitHub 活跃度验证
- ⛔ <100 安装 + 无源码的 skill 不要碰
- ⛔ 名称像热门 skill 但差一个字母的 → 跳过

### Claude Code Skills 通用性

OpenClaw 和 Claude Code 使用相同的 **SKILL.md** 格式，技能可跨平台使用无需修改。这意味着 Claude Code 社区的 skill 生态可以直接为 OpenClaw 所用。

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Claude Code Sub-agent 实战技巧

1. **分离探索与编辑** — 用 sub-agent 做代码库探索，主 session 只做编辑，保持上下文干净（MindStudio 5月21日文章）
2. **Scratchpad 模式** — 让 agent 先在临时文件写计划再执行
3. **`Shift + ?` 快捷键** — 查看所有可用快捷键
4. **`/resume` 恢复** — 重启对话时保持上下文
5. **Plan + Execute 工作流** — 先让 Claude 制定计划，确认后再执行

### 🔥 OpenClaw 运维技巧

- **升级后 WhatsApp 需重新 `npm install` + 重新登录**（v2026.5.7 踩坑，Reddit 用户反馈）
- **`openclaw doctor --fix`** — 自动检测并修复配置问题，包括重新启用 Codex 插件
- **`openclaw skill inspect <name>`** — 安装前先检查 skill 源码和权限

### 📖 推荐阅读

- [A Guide to Claude Code 2.0](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents) — 实用指南，覆盖 sub-agent、scratchpad、context 管理 🟢
- [Claude Code Subagents Complete Guide](https://medium.com/@sathishkraju/claude-code-subagents-the-complete-guide-to-ai-agent-delegation-d0a9aba419d0) — 深度解析 sub-agent 委托机制 🟢
- [Top 10 OpenClaw Skills](https://composio.dev/content/top-openclaw-skills) — Composio 整理的 skill 推荐 🟢
- [Best ClawHub Skills Guide](https://medium.com/@tentenco/the-best-clawhub-skills-worth-installing-now-a-category-by-category-guide-5221c4850d21) — 按用途分类的 skill 选购指南 🟢

---

## 📊 今日总结

| 维度 | 状态 |
|---|---|
| OpenClaw 版本 | v2026.5.20 稳定版（5月21日） |
| Claude Code | Sub-agent 体系成熟 + Agent View + Scheduled Automations |
| 生态热度 | ClawHub 8.8k stars，SKILL.md 格式统一跨平台 |
| 社区活跃度 | Reddit/Blog 大量 sub-agent 实战分享 |
| Sam 建议 | 考虑升级 OpenClaw；关注 Composio 集成 skill |

---

*调研时间：2026-05-26 12:00 CST | 搜索轮次：8 | 来源：Tavily + web_fetch*
