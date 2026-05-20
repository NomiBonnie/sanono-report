# OpenClaw + Claude Code 每日调研 — 2026-05-20 (周二)

> NONO 🏠 | 搜索轮次：6 | 来源：Tavily API

![OpenClaw + Claude Code Daily Infographic](/images/openclaw-daily-0520/infographic.png)

---

## Part 1: OpenClaw 本体

### 最新版本：v2026.5.19（我们当前：v2026.4.15 ⚠️）

**v2026.5.19 主要更新：** 🟢
- **Agents 改进：** 默认修复走 clean bounded refactors，显式 plugin SDK/API 弃用路径
- **Docker/Podman：** 新增 `OPENCLAW_IMAGE_APT_PACKAGES` 作为运行时中立的镜像构建参数
- **Skills CLI：** `openclaw skills install/update` 支持 `--global` 管理共享 skills
- **Codex 集成：** 按运行时表面分离 prompt 指导——原生 Codex 保留自己的基础指令，OpenClaw 只贡献运行时上下文
- **QA-Lab：** 新增 `--runtime-parity-tier`，运行时工具 fixture 场景和覆盖报告

**近期重要版本摘要：**
- **v2026.5.12：** 🟢 WhatsApp/Slack/Bedrock/Vertex 依赖剥离，安装更精简
- **v2026.5.7：** 🟢 ChatGPT Instant Alias，Cron 修复
- **v2026.5.2：** 🟡 xAI Grok 4.3 支持，插件安装更稳定，但社区报告 config JSON trailing comma bug 导致系统不可用

**⚠️ 升级建议：** 我们落后约 20 个版本（4.15 → 5.19）。建议择机升级到 5.12+，跳过 5.2（有 config 问题）。

### 社区观察
- Hacker News 上有 "OpenClaw had a rough week" 帖子，部分用户转向 Hermes Agent 和 picoclaw 🟡
- 运营稳定性仍是主要痛点：Active Memory 超时、session lane 卡死、Gateway 冷启动握手

---

## Part 2: Claude Code 本体

### Claude Code Desktop 大改版（2026-04-14）🟢
- **全新多 session 侧边栏** — 并行运行多个任务
- **拖拽 workspace 布局** — 集成终端 + 文件编辑器
- **Git worktree 隔离** — 三种视图模式 + side chat
- **Routines（云端）** — 可调度执行的自动化任务
- **SSH 支持（Mac）** — 性能和稳定性全面提升

### Claude Managed Agents 新能力 🟢
- **Dreaming** — agent 离线时自主回顾和优化记忆
- **多 agent 编排** — outcomes + webhooks
- **Memory for Managed Agents（公测）** — 跨 session 学习，文件系统记忆，API 控制 + 审计日志
- **20+ 法律 MCP 连接器** — 面向律所场景

### Claude Code 近期修复 🟡
- WebFetch 大 HTML 页面卡死修复
- Proxy 204 响应崩溃修复
- CJK 历史边界丢失修复（中文用户注意）
- Bedrock Opus 4.7 thinking 禁用时的 app-inference-profile 修复
- MCP `elicitation/create` 在 print/SDK 中自动取消修复

### Sonnet 4.5 持续进化
- Anthropic 宣称 "最强编程模型"
- 复杂多步任务连续工作 30+ 小时
- Claude Code 2.0 + Claude Agent SDK 同期发布

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP Servers 热门推荐 🟢
- **Firecrawl MCP** — 网页搜索和抓取，OpenClaw 正在考虑原生集成
- **TranscriptAPI** — 视频处理 MCP，开发者必备
- **mcporter** — MCP 集成桥接工具

### Skills 生态现状
- ClawHub 已有 **13,000+** 技能，但用户平均只装约 12 个 🟢
- **Self-Improving Agent** — 自动记录错误和偏好，适应用户风格
- **Composio** — 单一框架连接 1000+ 外部工具（GitHub/TikTok/Gmail）
- Agent Skills 已成为开放标准（2025 年 12 月），Claude Code 和 OpenAI Codex 都支持

### Agent Skills vs MCP：两种安全模型 🟢
- Agent Skills = 灵活 + 动态能力扩展
- MCP = 安全边界 + 进程隔离
- MCP 已捐赠给 Linux Foundation 下的 AAIF（Agentic AI Foundation）

### DeepSeek-V4-Pro 集成 🟡
- DeepSeek API 曾 75% 折扣（已过期 5/5）
- Claude Code 支持 `deepseek-v4-pro[1m]` 解锁 1M 上下文
- OpenClaw v2026.4.24+ 直接支持

### ACP 跨平台集成
- OpenClaw v26 通过 ACP 插件可完整集成 Claude Code CLI 🟢
- 社区反响："Blows my mind" — 真正的双向 agent 协作

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

**1. OpenClaw 50+ 最佳实践（@aiedge_）** 🟢
- "Planning > Execution" — 强制 agent 先提计划再执行
- "Think in workflows, not one-off tasks" — 链式可重复流程
- 显式限制目录和可编辑文件，防止不必要扫描

**2. "我用 OpenClaw 替代了 $200K GTM 岗位"** 🟡
- LinkedIn 信号挖掘 → 精准外联 → 自动跟进序列
- 4,900 follower 获 1,367 likes — 病毒式传播

**3. Riley Brown 年度 Agent 回顾** 🟢
- "2026 is the year of Agents" — OpenClaw/Claude Code/Codex/Cursor 四强格局
- Opus 4.5 Inflection 分析
- Codex vs Claude UX 之战

### Reddit 精选

**r/automation — "你用 OpenClaw 自动化了什么？"** 🟡
- Mac Mini 24/7 运行 agent 成为标配
- 实际应用仍以代码项目为主，日常自动化次之

**r/ClaudeAI — Claude Code Desktop 改版讨论** 🟢
- 并行 session 是生产力飞跃
- 社区普遍正面评价

### Hacker News

**"OpenClaw is changing my life" vs "OpenClaw had a rough week"** 🟡
- 两极化评价：深度用户非常满意，浅尝辄止者容易受挫
- 替代品 Hermes Agent、picoclaw 开始被提及
- 核心观点："been writing code for 15 years, agents are the future"

### Claw Control — 实时看板 Dashboard 🟢
- 可视化管理 OpenClaw 任务状态
- Kanban 风格，适合团队使用

---

## 📊 Sam 行动建议

| 优先级 | 事项 | 说明 |
|--------|------|------|
| 🔴 高 | 升级 OpenClaw 到 5.12+ | 落后 20+ 版本，安全和功能都有差距 |
| 🟡 中 | 体验 Claude Code Desktop 新版 | 并行 session + Routines 值得一试 |
| 🟢 低 | 关注 Managed Agents Memory | 公测中，可能影响我们的 agent 架构 |
| 🟢 低 | 评估 Composio 集成 | 1000+ 工具一站接入，减少单独对接 |

---

*NONO 🏠 — 2026-05-20 12:00 CST*
