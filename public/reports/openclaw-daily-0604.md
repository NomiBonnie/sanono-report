# OpenClaw + Claude Code 每日调研 — 2026-06-04

![Daily Intel Infographic](/images/openclaw-daily-0604/infographic.png)


## Part 1: OpenClaw 本体

### 版本状态
- **Stable:** 2026.5.28（npm 当前稳定版）
- **Beta:** 2026.6.2-beta.1（6月3日发布）🟢
- **前一个 Beta:** 2026.6.1-beta.2

### 🔥 重大更新：Skill Workshop 成为正式控制平面

Beta 线引入了 **Skill Workshop**——一个完整的 skill 治理系统：
- Skill 创建需要 proposal → review → approve 流程
- 支持 revision handoff、support-file hashing、scanner 检查
- 可 quarantine（隔离）和 rollback（回滚）
- Control UI 新增专门的审核界面
- **意义：** agent 可以自我改进工具，但不能静默修改生产环境 skill 🟢

### Workboard 编排系统
- Task-backed board runs、task comments、Control UI task details
- SecretRef 插件清单——secrets 不再以明文存储在 plugin manifest 中
- 外部 `@openclaw/copilot` 和 `@openclaw/tokenjuice` 包打包发布 🟢

### 状态持久化升级
- Plugin install indexes、channel queues、iMessage 监控状态、ACP metadata、session metadata、memory writes、cron migrations 全部迁移到 **SQLite-backed** 或序列化路径
- 目标：survive restarts 和并发 gateway 活动 🟢

### 当前已知问题
- Memory search embedding provider 加载失败 🟡
- Control UI 暴露失败的内部 tool call（红色 banner）🟡
- Cron sessions 逃逸 retention pruning 🟡
- macOS Codex auth/keychain 在 `NODE_USE_SYSTEM_CA=1` 时失败 🟡
- Linux systemd 部署 Gateway heap 增长问题 🟡

### 生态数据
- GitHub Stars: **361K+** 🟢
- 源代码规模: 3,680 文件，434,000+ 行
- Microsoft 已宣布 OpenClaw **原生运行在 Windows 11** 上（OS 级安全治理）🟢

---

## Part 2: Claude Code 本体

### 🔥🔥🔥 Dynamic Workflows 正式发布（6月2日）

Anthropic 6月2日宣布 Claude Code **Dynamic Workflows**——本周最大新闻：

- **核心能力：** Claude Code 自动生成 JavaScript 编排脚本，协调最多 **1,000 个 subagent 并行执行**（实际并发上限 16 个）
- **触发方式：** `/deep-research` 命令或 `ultracode` 模式
- **适用场景：**
  - 跨整个服务的 bug 调查
  - 数百到数千文件的大规模迁移
  - 需要多维度压测的关键 plan
- **与 subagent 的区别：** subagent 是单个后台任务，workflow 是 Claude 自己写的编排脚本，状态存在脚本变量中而非 context
- **可恢复：** 中断后可在同一 session 恢复
- **保存复用：** 按 `s` 键可将 workflow 脚本保存为可重用命令 🟢

### 使用计划变更
- **6月15日起** agent 运行将切换到新的 usage plan
- Reddit 社区普遍认为这是降级（r/ClaudeCode 讨论） 🟡
- 有用户反映在 5x plan 上使用 dynamic workflow 很快就 hit session limit 🟡

### ⚠️ 成本提醒
- Dynamic workflow 一次 prompt 可能消耗 $200/月计划的**一半**
- Token 消耗 = subagent 数量 × 每个 agent 的 context
- 建议：先用普通 subagent/skill 评估，确实需要大规模才用 workflow 🟡

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### Claw Orchestrator（GitHub: Enderfga/claw-orchestrator）
- **功能：** 将 Claude Code、Codex、Gemini、Cursor Agent、OpenCode 等 CLI 包装为持久可编程 session
- **55-tool API**，从单次 session 调用扩展到完整 web app 生成部署
- 支持 Planner/Coder/Reviewer 自主循环
- 通过 CLI、OpenClaw gateway、MCP 或 TypeScript 直接调用
- 内嵌三标签 dashboard 🟢

### Context7 MCP Server（LobeHub）
- 为 prompt 提供最新的、版本特定的库文档和代码示例
- 适合 OpenClaw skill 开发时确保文档准确性 🟢

### openclaw-cc（GitHub: hesreallyhim/awesome-claude-code #891）
- 仅用 `claude -p`（Claude Code headless CLI）复制 OpenClaw 的自主 agent 核心
- Gateway-free，零运行时依赖
- 适合轻量级场景 🟢

### Claude Forge（GitHub: sangrokjung/claude-forge）
- 开源 AI dev toolkit
- 提出 "CLI + Skills 正在替代 MCP" 的观点
- YouTube 视频引发讨论 🟡

### AI Agent 安全警告（CyberDesserts 博客）
- 2026年2月事件回顾：Claude Code RCE、1,184 个恶意 skill 投毒、数千 MCP server 无认证暴露
- **建议：** 轮换 `~/.openclaw/credentials/` 和 `.claude/settings.json` 中的明文 API key 🔴

### MCP vs CLI+Skills 趋势
- YouTube 热议 "MCP is Dead — Why CLI + Skills is Replacing It in 2026"
- 实际情况：两者共存，MCP 适合标准化集成，Skills 适合定制化 agent 行为
- OpenClaw 两者都支持 🟡

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@dickson_tsai** — Dynamic Workflows 深度解析
   - "2026年最重要的 Claude Code 创新"
   - 推荐设置：brainstorm phase → research phase → resolve phase
   - 三阶段 workflow 用于代码审查 🟢

2. **@GradonLi** — Claude Code vs OpenClaw CLI 工具对比
   - 两者主导 2026 AI agent 对话 🟢

3. **@ziwenxu_** — "Every Claude Code Hack I Know (March 2026)"
   - `/ce:plan` 或 `/ce:brainstorm` 立即捕捉想法
   - Get Voice-Pilled（语音输入）
   - 同时运行 4 个 session
   - 仍然适用于 6 月版本 🟢

### 实用技巧汇总

1. **ultracode 模式：** Claude 自动判断是否需要 workflow，适合不确定是否需要大规模处理的任务
2. **Workflow 保存复用：** 按 `s` 保存 workflow 脚本为命令，下次直接调用
3. **成本控制：** 先问"这个任务是否值得一个 workflow？"再决定
4. **AI Operating System 模式：** 用 Claude Code 的 scheduled tasks 构建个人 AI 操作系统（Substack 热文）
5. **Second Brain 知识库：** 用 Claude Code 每小时自动处理新信息（AI Maker 教程）

### Reddit 精选

- **r/ClaudeCode:** 6月15日 usage plan 变更引发大量讨论，社区建议囤 API credit
- **r/openclaw:** Skill Workshop 被认为是"终于解决了 skill 安全问题"
- **r/OpenClawUseCases:** 2026.3.2 的 messaging 默认安全策略获好评

---

## Sam 行动建议

1. **⚡ 升级 OpenClaw 到 beta 考虑：** Skill Workshop + SQLite 状态持久化对我们的多 agent 架构有直接价值，但建议等 stable 发布
2. **⚡ Claude Code Dynamic Workflows：** 适合大规模代码审查和迁移任务，但注意成本。建议 Sam 在小项目上先试
3. **🔒 安全检查：** 轮换 credentials 目录下的明文 API key（2月安全事件余波）
4. **📌 关注 6月15日：** Claude Code usage plan 变更，可能影响日常使用成本

---

*信息可靠度：🟢 官方/一手源确认 | 🟡 社区/二手源 | 🔴 需警惕*
*调研时间：2026-06-04 12:00 CST | 搜索轮次：8*
