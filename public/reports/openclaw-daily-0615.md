# OpenClaw + Claude Code 每日调研 — 2026-06-15 (周一)

**调研人：** NONO 🏠
**搜索轮次：** 8 轮（Tavily × 8 + web_fetch × 1）
**数据截止：** 2026-06-15 12:10 CST

![OpenClaw + Claude Code Daily Intelligence Infographic](/images/openclaw-daily-0615/infographic.png)

---

## Part 1: OpenClaw 本体

### 版本状态
- **Stable:** `2026.6.6`（6月12日基线，未变）
- **Beta:** `2026.6.8-beta.1`（持续推进中）
- 🟢 稳定版用户保持在 6.6，预发布通道继续吸收运维修复

### 本周重要变更

**🔴 Auth 迁移风险（Issue #93145）**
- SQLite auth 迁移在 2026.6.6 上会导致默认 agent 的 auth store 为空
- **影响：** 升级后看起来像 provider 故障，实际是 auth 数据丢失
- **建议：** 升级后立即验证 auth 状态，不要直接归因于 model 问题
- 可靠度：🟢（官方 Issue 确认）

**Cron 管理改进（PR #93149, #93147）**
- 新增 cron job 的 dry-run 预览功能（添加和编辑）
- 现在可以在执行前预览 delivery、model 和 timing 配置
- **Sam 相关度：** ⭐⭐⭐ 我们的 cron 任务多，dry-run 能避免配错导致的噪音
- 可靠度：🟢

**安全边界强化**
- PR #93152：限制 ancestor context file walking 到 home directory 为止
- Issue #93068：全局 SSRF 策略配置
- PR #93127：对 sessions_yield 应用 factory denylist
- 可靠度：🟢

**消息通道修复**
- iMessage reply-action 处理修复（PR #93137）
- Telegram sticker media path 保留（PR #93130）
- Feishu full-card content 处理改进（PR #93134）
- client-side split-send coalescing 移除（PR #93143）
- 可靠度：🟢

**诊断遥测升级（Issue #93069-93071）**
- OpenTelemetry 协议对齐
- exporter 健康状态纳入 doctor/status
- 显式 OpenClaw resource identity 标识
- 可靠度：🟢

### 社区关注的问题

**Memory 降级策略（Issue #93150）**
- 请求当 node:sqlite 不可用时提供关键词搜索 fallback
- 核心原则：recall 应该优雅降级，而不是因为一个存储依赖就彻底失忆
- 可靠度：🟢

**MCP 配置动态化（Issue #93144, #93142）**
- 请求 per-request ENV_VAR 替换（MCP transport headers & env）
- 请求 deployment-friendly 的 gateway.controlUi.allowedOrigins 配置
- 企业需求：portable config without hardcoding secrets
- 可靠度：🟢

---

## Part 2: Claude Code 本体

### 版本状态
- **最新版本：** v2.1.177（2026-06-13 发布）
- 近一周发布了 v2.1.167 → v2.1.177，共 10 个版本
- 发布节奏：**几乎每日一更**
- 可靠度：🟢（GitHub Releases 确认）

### Claude Fable 5 发布（6月9日）⭐⭐⭐

**重大事件：Anthropic 发布 Claude Fable 5 — 首个面向公众的 Mythos 级模型**

- **Fable 5：** Mythos 级模型 + 安全护栏，面向所有用户
- **Mythos 5：** 同一底层模型，解除部分安全限制，仅限 Project Glasswing 合作伙伴（网络安全防御者）
- **定价：** $10/$50 per million tokens（输入/输出）
- **Pro/Max/Team 用户：** 到 6月22日前免费使用
- **核心能力提升：** 编码、知识工作、视觉、记忆、长上下文
- **自主性：** 能比之前任何 Claude 模型更长时间地自主工作
- **安全分类器：** 约 5% 的 prompt 会被自动降级到 Opus 4.8
- **适用场景：** agentic coding、long-horizon automation、vision-heavy knowledge work
- **注意：** 生物/化学开放式探索、量化金融建模等场景可能频繁触发安全分类器
- 可靠度：🟢（Anthropic 官方发布 + System Card PDF）

### Claude Code 新功能趋势

**Sub-Agents 并行执行**
- Claude Code 现在支持将任务委派给新会话，使用更便宜的 model，并行运行
- 可靠度：🟢（MindStudio 确认）

**/workflows 命令**
- 新增 workflows 命令，用于创建多 agent 自动化流程
- 可以通过 "ultracode" trigger word 触发 Claude Code 创建 workflow
- 可靠度：🟡（第三方博客报道）

**Dreaming 功能（持久记忆）**
- 定时回顾 agent sessions 和 memory stores，提取模式
- 在会话间 curate memories，使 agent 逐步改进
- 解决了跨会话状态丢失的核心问题
- 可靠度：🟡（MindStudio 教程确认）

**Fable 5 模型名称规范化修复**
- Claude Code 修复了 Fable 5 model name normalization
- Windows sandbox 启动警告移除
- 可靠度：🟢

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP 规范重大更新 — v2025-06-18

**新版 MCP 规范已正式发布，三大核心变化：**

1. **OAuth 2.0 授权体系**
   - MCP servers 正式分类为 OAuth 2.0 Resource Servers
   - 客户端必须包含 `resource` 参数（RFC 8707），将每个 access token 绑定到特定 MCP server
   - 实现了通用 provider 兼容性（Google、Microsoft、Auth0 等统一发现）
   - 可靠度：🟢

2. **结构化 JSON 输出（structuredContent）**
   - Tools 现在支持返回结构化 JSON 输出
   - 可靠度：🟢

3. **用户 Elicitation**
   - Servers 可以在会话中途向用户请求输入
   - 发送 `elicitation/create` 请求，附带 message 和 JSON schema
   - 可靠度：🟢

4. **必须 MCP-Protocol-Version header**
   - 所有 HTTP 请求必须包含此 header
   - 缺失时服务器应默认回退到 2025-03-26 版本
   - 可靠度：🟢

### ClawHub 生态现状

- **13,000+ skills** 可用
- **7.6%（820+）被标记为恶意**
- Felo Search：145,000+ 安装量，第二大热门 skill
- **Top Skills（2026）：** browser-control, file-manager, voice-to-task (Whisper), agent-browser, self-improving, sub-agents, GitHub, GOG (Google Ops), ontology, summarize
- 可靠度：🟢

### Hermes Agent — 值得关注的竞品

- Nous Research 出品的 "grows with you" agent
- **核心特色：** closed learning loop（从经验创建 skills → 使用中改进 → 跨会话用户建模）
- 8 种 pluggable memory providers
- 687 skills across 18 categories
- 支持 fully isolated agent profiles（独立 config、memory、skills、sessions、SOUL.md）
- **与 OpenClaw 的关系：** 互补。OpenClaw 强在 messaging，Hermes 强在 memory，Claude Code 强在 coding
- **SwarmClaw** 项目试图将三者整合
- 可靠度：🟡（社区项目）

### GitHub Trending 相关项目

- **claude-mem：** Claude Code 的持久化上下文管理
- **awesome-openclaw-skills：** 1,184 个 coding agents & IDEs 类 skill 列表
- **agent-browser-clawdbot：** real browser automation for OpenClaw
- 可靠度：🟢

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Twitter 热帖

**1. Hermes Agent 30分钟设置教程（@PrajwalTomar_，6月14日）**
- "Most builders open a fresh Claude Code session every morning and re-explain everything"
- 持久化 agent 活在服务器上，记住一切，能 overnight 运行
- 1.9K views
- 可靠度：🟢

**2. "Every Agentic Engineering Hack I Know"（@lawrencecchen，6月2026）**
- 三个月前的 "Every Claude Code Hack I Know" 获 913K views
- 现在的升级版聚焦 agentic engineering patterns
- 可靠度：🟢

**3. Fable 5 作为 Second Brain（@nateherk）**
- 将 Fable 5 连接 Codex, OpenClaw, Hermes Agent
- Agentic Workflows loops + Context Windows 组合
- 可靠度：🟡

**4. Loop Engineering 概念（@dashboardlim）**
- "Design loops that prompt your agents" — 不再是你 prompt AI，而是设计系统来 prompt AI
- 核心理念：找到你重复输入 3 次以上的指令 → 那就是你的 loop candidate
- 可靠度：🟢

**5. Claude Code 7天成果展示（@kavinbm）**
- "7 天用 OpenClaw 构建的东西，2025年需要 10-20人团队花 6-9 个月"
- Claude Code + OpenClaw 本地运行 → git 部署，10x 效率
- 可靠度：🟡（个人案例）

### 实用技巧

**Claude Code Blog 写作技巧（@iHarnoorSingh）**
- 将 claude-code 放入 blog 工具链
- Claude Code 保留 ~33K buffer（从之前的 45K 缩小）
- compaction 在用完其余空间后触发
- 可靠度：🟢

**Hybrid AI Memory System（MindStudio，6月11日）**
- 结合 MemSearch 和 Hermes 构建混合记忆系统
- 存储一切 → 智能注入 → 按语义召回（带来源引用）
- 可靠度：🟡

---

## 📊 Sam 行动建议

| 优先级 | 建议 | 原因 |
|-------|------|------|
| ⭐⭐⭐ | 升级前检查 auth 状态 | SQLite auth 迁移可能导致 auth store 为空 |
| ⭐⭐⭐ | 关注 Fable 5 在 Claude Code 中的表现 | 免费试用到 6/22，适合 agentic coding |
| ⭐⭐ | 关注 cron dry-run 功能 | 我们 cron 任务多，新的预览功能可减少配错 |
| ⭐⭐ | 评估 MCP v2025-06-18 影响 | OAuth 2.0 + Elicitation 是重大架构变化 |
| ⭐ | 观望 Hermes Agent | 有趣的记忆系统，但目前 OpenClaw 已满足需求 |
| ⭐ | 了解 Loop Engineering 概念 | 新的 agent workflow 设计思路 |

---

*报告结束。NONO 🏠 签发。*
