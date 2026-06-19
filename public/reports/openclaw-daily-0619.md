# OpenClaw + Claude Code 每日调研 — 2026-06-19

![OpenClaw + Claude Code Daily Research Infographic](/images/openclaw-daily-0619/infographic.png)


## Part 1: OpenClaw 本体

### 🟢 v2026.6.8 稳定性更新（最新正式版）

- **Telegram & WhatsApp 投递增强**：结构化文本（表格、列表）渲染更稳定
- **更安全的模型路由**：修复了 provider prefix 问题、OAuth image defaults 通过 Codex 路由
- **Agent 运行可靠性提升**：storeless OpenAI Responses replay 兼容性保留
- **Anthropic thinking-signature replay 错误修复**
- **Claude 4.5 Copilot 中避免 eager tool streaming**
- **模型浏览绑定（bound model browsing）**
- 来源：[GitHub Releases](https://github.com/openclaw/openclaw/releases) / [Releasebot](https://releasebot.io/updates/openclaw)

### 🟢 发布策略更新

- 2026 年 6 月起，release train 必须使用 patch 5 或更高版本号
- 来源：[OpenClaw Docs - Release Policy](https://docs.openclaw.ai/reference/RELEASING)

---

## Part 2: Claude Code 本体

### 🟢 Week 24（June 8–12）— v2.1.166–v2.1.176

- **`/cd` 命令**：会话中途切换工作目录，无需重建 prompt cache
- **Sub-agent 可以 spawn sub-agent**：后台链最多 5 层深
- **`--safe-mode`**：禁用所有自定义配置启动，方便排查问题
- **`fallbackModel`**：最多配置 3 个后备模型按序尝试
- 来源：[Claude Code What's New](https://code.claude.com/docs/en/whats-new)

### 🟢 Week 23（June 1–5）— v2.1.158–v2.1.165

- **Auto mode 扩展到 Bedrock、Vertex、Foundry**：支持 Opus 4.7/4.8
- **更安全的自动编辑**：`acceptEdits` 模式下写入可执行文件前会提示确认
- **`/plugin list`** 内联打印已安装插件
- **版本要求（version requirements）**：托管部署可强制要求特定 Claude Code 版本范围

### 🟢 Week 22（May 25–29）— v2.1.150–v2.1.157

- **Claude Opus 4.8 成为默认模型**（Max、Team Premium、Enterprise、API）
- **Dynamic Workflows**：协调数十到数百个 subagent，由 Claude 编写的脚本驱动，协调代码不消耗 model token
- **Security Guidance Plugin**：工作时实时审查代码变更的安全漏洞
- **Fast Mode** 运行在 Opus 4.8 上

### 🟢 Managed Agents 重大更新（June 2026）

- 支持**按计划运行**（schedule）
- 支持**CLI 工具和认证服务**安全访问
- **自托管 sandbox + MCP tunnel**：agent 执行和私有网络访问在企业边界内
- 来源：[Releasebot - Claude Updates](https://releasebot.io/updates/anthropic/claude)

### 🟢 API 平台新功能

- **Advisor Tool** 公开 Beta
- **Files API** 公开 Beta：上传文件并在 Messages API 和代码执行中引用
- **MCP Connector** 公开 Beta：直接从 Messages API 连接远程 MCP 服务器
- **Programmatic Tool Calling** 公开 Beta：代码执行中调用工具减少延迟
- **1M token 上下文窗口**：Claude Sonnet 4 在 API 和 Bedrock 上支持
- **Fine-grained Tool Streaming** GA（无需 beta header）
- 来源：[Claude API Docs](https://platform.claude.com/docs/en/release-notes/overview)

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### 🟢 VoltAgent/awesome-openclaw-skills — 社区精选 Skill 目录

- ⭐ 50.3k stars / 4.9k forks
- 分类：Self-Hosted & Automation（32 skills）、Security & Passwords（54 skills）、Gaming（35 skills）等
- 支持 ClawHub CLI 和手动安装
- 安全评估：MIT 许可，开源社区维护，低风险
- Sam 匹配度：⭐⭐⭐⭐ 作为 skill 发现入口非常实用
- 来源：[GitHub](https://github.com/VoltAgent/awesome-openclaw-skills)

### 🟢 MCP OpenClaw Skills Plugin（Go 实现）

- MCP server 提供 OpenClaw skills 文档和元数据访问
- AI 助手可通过 MCP 协议发现、读取、搜索 SKILL.md 文件
- 安全评估：工具类，只读访问，低风险
- Sam 匹配度：⭐⭐⭐ 可用于让 Claude Code 直接访问 OpenClaw skill 文档
- 来源：[pkg.go.dev](https://pkg.go.dev/github.com/soyeahso/hunter3/cmd/mcp-openclaw-skills)

### 🟢 Dynamic Workflows 6 大模式（Claude Code 生态核心）

社区已总结出 6 种核心 workflow 模式：
1. **Classify and Act** — 分类后分派
2. **Fan Out and Synthesize** — 扇出并综合
3. **Adversarial Verification** — 对抗验证
4. **Generate and Filter** — 生成后筛选
5. **Tournament** — 锦标赛式淘汰
6. **Loop Until Done** — 循环到完成

- 可打包为 skill 分享给团队
- ⚠️ 社区反馈：token 消耗巨大（"token black hole"），建议选择性使用
- Sam 匹配度：⭐⭐⭐⭐⭐ 多 agent 协作场景强相关
- 来源：[YouTube - Mark Kashef](https://www.youtube.com/watch?v=g9b9G8dcS8Y) / [Reddit](https://www.reddit.com/r/ClaudeAI/comments/1tq9ofy/)

### 🟡 LeoYeAI/openclaw-master-skills — 每周更新精选

- MyClaw.ai 平台的策展 skill 集合
- 包含：agent-browser（Rust 无头浏览器）、perplexity（AI 搜索）、browser-use 等
- 安全评估：第三方策展，需逐个审查
- Sam 匹配度：⭐⭐⭐ 可作为 skill 发现补充
- 来源：[GitHub](https://github.com/LeoYeAI/openclaw-master-skills)

### 🟢 Legal MCP Connectors（20+ 连接器 + 12 插件）

- Anthropic 官方发布，面向法律行业
- 覆盖：研究、合同、发现、案件管理、法律援助
- Sam 匹配度：⭐ 不直接相关但展示 MCP 生态扩展方向

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 OpenClaw + Claude Code Workflow 集成玩法

Twitter 用户 @jakeh2792 分享的模式：
1. 在 Claude Code（通过 OpenClaw）中构建 workflow
2. 通过 WhatsApp/Telegram 向 OpenClaw 发请求
3. OpenClaw 路由到对应 workflow 自动执行

→ 把 Claude Code 当 workflow 引擎，OpenClaw 当触发入口

### 🔥 OpenClaw 实用案例总结（社区热帖）

Reddit r/ClaudeCode 热门讨论 "What do people actually use openclaw for?"：
- 收到短信关于预约 → Discord 确认 → 自动加日历
- 收到客户消息 → 自动起草回复 → 嵌入"发送"按钮打开 iMessage
- 每日早报自动生成
- Cron job 跑每周趋势分析
- 来源：[Reddit](https://www.reddit.com/r/ClaudeCode/comments/1rcx9di/)

### 🔥 `/cd` 命令实战技巧（Week 24 新功能）

不用退出会话就能切换项目目录，保留上下文。适合多项目切换场景。配合 `fallbackModel` 可以在主模型限流时自动切换。

### 🔥 `--safe-mode` 排查技巧

遇到 OpenClaw 配置冲突或插件问题时，`claude --safe-mode` 启动排除所有自定义配置，快速定位问题是来自配置还是 Claude Code 本身。

### ⚠️ Dynamic Workflows 成本警告

社区共识：非常强大但 token 消耗惊人。建议：
- 简单任务不要开 dynamic workflow
- 复杂任务（代码迁移、全局重构）才值得
- 设置 token budget 上限

---

*调研完成时间：2026-06-19 12:00 CST*
*搜索轮次：6 轮（Tavily API）*
*可靠度标注：🟢 官方/一手源 | 🟡 可信社区 | 🔴 未验证*
