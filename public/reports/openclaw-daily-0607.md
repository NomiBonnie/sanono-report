# OpenClaw + Claude Code 每日调研 — 2026-06-07 (Sunday)

> NONO 调研 · 搜索 8 轮 · Tavily + web_fetch

![OpenClaw + Claude Code Weekly Digest Infographic](/images/openclaw-daily-0607/infographic.png)

---

## Part 1: OpenClaw 本体

### 版本状态

| 版本 | 渠道 | 状态 |
|------|------|------|
| **2026.6.1** | npm `latest` | 🟢 当前稳定版 |
| **2026.6.2-beta.1** | npm `beta` | 🟢 Beta 渠道 |
| **2026.6.5-beta.1** | GitHub releases | 🟡 预发布 |
| **2026.6.6-alpha.1** | GitHub releases | 🟡 Alpha 前沿 |

### 本周重点更新 (June 5-7)

**GitHub-backed ClawHub Skills 已合并** 🟢
- 支持从 GitHub 远程安装 skills，扩展了之前仅限本地路径/归档/源码的安装方式
- 这意味着 skill 分发更便捷，但同时需要更关注来源审查、owner 元数据、激活状态和审计证明

**状态正确性修复**（June 6 合并）：
- 修复 memory adapter 身份检查
- 阻止 macOS node 模式在健康 gateway session 期间静默自重连
- compaction 后刷新 prompt fences
- 将非 text/image 的 MCP tool-result blocks 强制转为 text
- 延迟 Anthropic stream events 直到 provider 真正就绪
- 保留 Vertex ADC catalog auth
- 追踪 Twilio voice streams

**活跃 PR 方向**：
- 软删除 memory corpus 清理
- 退役 Skill Workshop 配置警告
- 更安静的 Telegram 群工具警告
- cron 回复不再自述
- Matrix 入站守卫
- 侧边栏 session 重命名
- 重连时显示进行中的 assistant 响应

### ⚠️ 社区热点问题

**Memory 仍是最尖锐的边缘**：
- 升级后 dirty memory 状态
- memorySearch provider 重置为 openai
- 全量重发 transport 上的 prompt-cache 失效
- 软删除 transcript 路径泄漏回 dreaming corpus

**Channel 投递可靠性**：
- Discord 响应未到达 channel
- Claude CLI Telegram turns 在合成 placeholder 后沉默
- Feishu 媒体发送失败或重复
- BlueBubbles private API calls 在禁用时仍触发

**Sam 需留意** 🔴：Memory 状态在升级时可能漂移。建议在 `2026.6.1` 稳定版观察，暂不升到 beta/alpha 线。

---

## Part 2: Claude Code 本体

### Claude Opus 4.8 发布 (May 28) 🟢

**核心变化**：
- 现为 Max、Team Premium、Enterprise pay-as-you-go 和 Anthropic API 的默认模型
- 默认 effort = `high`；困难任务用 `/effort xhigh`
- 需要 Claude Code v2.1.154+
- 价格：$5/$25 per MTok（标准）；Fast mode $10/$50 per MTok（约 2.5x 速度）
- Opus 4.6 fast mode 已废弃

**Dynamic Workflows (Research Preview)** ⭐
- `/workflows` 命令：Claude 为任务编写编排脚本，跨多个 subagent 后台运行
- 适用场景：全代码库审计、大规模迁移、需要交叉验证的研究问题
- 示例：`create a workflow that migrates every internal fetch() call to the new HttpClient wrapper`

**Security Guidance Plugin** 🟢
- 新官方插件：自动审查代码变更中的漏洞并在同一 session 修复
- 三层检查：每次编辑快速模式扫描 → 每轮模型审查 → commit/push 时深度 agent 审查
- 安装：`/plugin install security-guidance@claude-plugins-official`

### ⚠️ Agent SDK 计费拆分 (June 15 生效) 🔴

**重大变更**：Anthropic 将订阅计费拆为两个池子
- **Pool 1 — 交互使用池**：手动与 Claude 交互的所有场景
- **Pool 2 — Agent SDK Credit 池**：所有编程调用场景（Agent SDK、`claude -p`、GitHub Actions、第三方应用含 OpenClaw、Zed 等）
- Pro 计划获 $20 API credit，Max 5x 获 $100
- 影响：通过 ACP 使用 Claude 的用量不再从 Pro/Max 订阅额度扣除
- **建议**：如果想保持订阅额度不变，在终端内运行官方 `claude` CLI 而非通过 ACP

### Claude API 新功能

- **Advisor Tool** — 公开 Beta：新增顾问工具
- **Programmatic Tool Calling** — 公开 Beta：Claude 可在代码执行中调用工具，减少延迟和 token 消耗
- **Files API** — 公开 Beta：上传文件并在 Messages API 和代码执行中引用
- **MCP Connector** — 公开 Beta：直接从 Messages API 连接远程 MCP 服务器
- **1M Token Context Window** — Sonnet 4 Beta：Claude API 和 Amazon Bedrock
- **Fine-grained Tool Streaming** — GA：所有模型和平台可用
- **Sonnet 4.6 max_tokens 上限提升到 300k**（Message Batches API）

### Dreaming (Research Preview)

- 在 agent sessions 之间运行的计划进程
- 审查上次作业中的所有操作，提取模式，写入新的 memory 条目供下次 session 使用
- Harvey（法律 AI 初创公司）已在公开发布前使用
- 配套功能：Outcomes（自评分循环）+ Multi-agent Orchestration（分发给并行子 agent）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub / Skills 生态

**OpenClaw Master Skills** (github.com/LeoYeAI/openclaw-master-skills)
- 每周更新的精选 skill 合集
- 包含：`agent-browser`（Rust 实现无头浏览器 CLI）、`agent-browser-clawdbot`、`browser-use`、`perplexity`
- Sam 场景匹配度：⭐⭐⭐（browser 自动化和搜索都直接有用）
- 安全评估：🟡 需 vetter 审查

**Twitter/X Skills 井喷**
- ClawSkills.sh 上已有 12+ 个 X/Twitter 相关 skills
- 涵盖：OAuth 发帖、OpenTweet 集成、Cookie 自动化、多平台调度
- 注意：Cookie-based 工具有安全风险 🔴

### MCP Server 新动态

**MCP Connector (Claude API)** 🟢
- Anthropic 官方 MCP connector 进入公开 Beta
- 允许从 Messages API 直接连接远程 MCP 服务器
- 意义：不再需要本地中间件就能用 MCP

### Claude Code 生态工具

**Claw Control — 实时看板**
- OpenClaw agent 运行状态的 Kanban 仪表盘
- 社区项目，Twitter 上 @\_clawcontrol 31 likes
- 适合多 agent 管理场景

**Zed + Claude ACP 适配**
- Zed 编辑器已发布针对 June 15 计费变更的用户指南
- 建议用终端内 `claude` CLI 而非 ACP 以保持订阅额度

---

## Part 4: 🎮 社区玩法 / 小技巧

### HN 热帖

**"OpenClaw is changing my life"** (340 points, 513 comments) 🟢
- 社区反馈两极：有人认为 LLM 工具带来了转型性变化，有人认为需要投入大量精力去"驾驶 bot"
- 关键洞察：详细指令 + 监控 thinking output + 及时纠正 = 最佳实践

**"Ask HN: Who is using OpenClaw?"** (342 points, 383 comments)
- 最受欢迎用法：通过 WhatsApp 访问的日常 LLM，记忆存在版本控制中

**"OpenClaw is a security nightmare"** (397 points, 297 comments) 🔴
- 社区担忧：agent 无人值守时的安全问题
- 启示：信任边界、权限控制、安装源审查是刚需

### Twitter/X 玩法

**GTM 自动化** — @TheMattBerman (1,367 likes)
- "我用 @openclaw 替代了一个 $200K 的 GTM 岗位"
- 流程：挖掘 LinkedIn 活跃用户 → 触发定向外联 → agent 处理全流程跟进

**Sales Transcript → Content Pipeline**
- OpenClaw 处理销售通话转录 → 提取痛点 → 自动评分 → 生成本周内容 brief

### 实用技巧

**Multi-agent 2026 工作流**
- Claude Code Sessions-scoped Tasks 替代 Todos
- 复杂依赖管理 + 并行 sub-agent 协调
- `claude agents` 中用 `!` 前缀运行后台 shell 命令，可 attach/detach

**动态 Workflow 使用建议**
- 最适合：代码库级别操作、大规模迁移、多角度验证研究
- 避免用于：简单问答、单文件修改（token 消耗高）

---

## 📌 Sam 行动建议

1. **⚠️ June 15 计费变更**：检查我们的 Claude 使用方式，通过 ACP 的调用将走 Agent SDK Credit 池
2. **Security Guidance Plugin**：建议启用，代码安全审查自动化
3. **暂缓升级**：保持 `2026.6.1` 稳定版，beta/alpha 线目前在修复 memory 漂移问题
4. **Dynamic Workflows**：等 Research Preview 稳定后评估，当前 token 消耗较高

---

*信息来源：OpenClaw 官方更新页、Claude Code 官方文档、GitHub releases、Hacker News、Twitter/X 社区、Tavily 聚合搜索*
*可靠度标注：🟢 官方确认 | 🟡 社区报告/待验证 | 🔴 风险/需关注*
