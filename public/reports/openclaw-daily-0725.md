# OpenClaw + Claude Code 每日调研 — 2026-07-25

![OpenClaw Daily Intel Infographic](/images/openclaw-daily-0725/infographic.png)


## Part 1: OpenClaw 本体

### v2026.7.1（2026-07-13 发布）🟢

OpenClaw 最新正式版，距上次 v2026.6.11 约一个月。核心更新：

- **Control UI 大改版** — 会话管理全面升级：可拖放面板、分组/置顶/归档/标记已读，多会话可并排显示且刷新后恢复。Composer 在不同屏幕尺寸下保持可用性（附件、模型选择、语音、推理、发送/停止）。
- **Usage 页面强化** — 7/30/90 天图表，按 provider/model/agent/channel 拆分，支持 Anthropic/OpenAI 账单详情。
- **模型支持扩展** — GPT-5.6 兼容、腾讯 Hy3、Meta Muse Spark 1.1。
- **Codex 和编码代理工作流增强** — 更强的连接编码代理支持。
- **各平台更新** — iOS/Android/macOS 应用大更新；Telegram/Slack/Discord/Apple Messages 均有实质改进。
- **稳定性** — Gateway 崩溃循环修复、定时任务、远程浏览器控制、工作区终端改进。

**近期小版本修复（releasebot 追踪）：**
- ClawHub retry 计时修复（拒绝非法 delay-seconds 和 Retry-After 日期）
- Discord 线程归档默认值继承父频道配置

**Sam 行动建议：** 建议升级到 v2026.7.1，Control UI 改进对多 agent 工作流很有价值。

---

## Part 2: Claude Code 本体

### Week 29（7/13–17）— 最新 🟢

- **Artifacts 可调用 MCP connectors** — 发布的 artifact 可通过查看者自己的 MCP connectors 拉取实时数据和执行操作。新增公开分享链接、Team/Enterprise 编辑者角色。
- **Screen reader 模式** — 纯文本线性界面，支持 VoiceOver/NVDA。
- **/fork** — 将当前对话复制到新后台 session 继续工作。
- **Auto mode** — 不再需要 Amazon Bedrock/Google Agent Platform/Microsoft Foundry 上的 opt-in 变量。

### Week 28（7/6–10）🟢

- **Desktop 内置浏览器** — Claude Code 桌面版可直接打开网页、文档、设计稿。
- **/doctor** — 完整的环境检查诊断工具，可自动修复问题。
- **Auto mode 安全** — 阻止 transcript 篡改，rm -rf 未解析变量前会确认。

### Week 27（6/29–7/3）🟢

- **Claude Sonnet 5 成为默认模型** — Pro/Team Standard/Enterprise 默认。原生 1M token 上下文，自适应 thinking 默认开启。API 定价 $2/$10 per MTok（至 8/31 促销）。
- **Claude in Chrome GA** — Chrome 集成正式发布，Claude Code 可驱动浏览器。
- **子代理后台运行** — 默认在后台运行 subagent，主会话继续工作。
- **Claude Desktop Linux beta**。
- **/radio — Claude FM**。

### 其他动态

- **Claude Fable 5** 回归 Max 和 Team Premium（7/20 起），Claude Code limits 延长至 8/19 🟢
- **隐私政策更新** — 7/8 生效，仅影响消费者账号（Free/Pro/Max），不影响 Team/Enterprise/API 🟡
- **性能优化** — 大量 deny/ask rules 导致的多秒延迟已修复（rule matcher 编译后缓存）
- **内存修复** — 读取超长单行文件时的内存泄漏已修复

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP 生态 🟢

- **MCP 最大修订即将发布** — 2026-07-28 规范（3 天后！）是有史以来最大的修订。5/21 锁定 release candidate。
- **MCP 生态规模** — 10,000+ 活跃公共服务器，97M+ 月度 SDK 下载。已被 ChatGPT/Cursor/Gemini/VS Code/Microsoft Copilot 采纳。
- **Microsoft MCP 认证**（预览）— Microsoft 推出 MCP server 认证流程，用于 Microsoft 365 Copilot。

### ClawHub 生态 🟢

- **ClawHub 规模** — 5,400+ skills，8,500+ GitHub stars。
- **热门 skills 排行（2026）：**
  1. **Capability Evolver** — 自主改进 agent 行为，下载量最高
  2. **Wacli** — CLI 版 WhatsApp 集成
  3. **Playwright MCP** — 浏览器自动化
  4. **Obsidian Direct** — 知识管理
  5. **AgentMail** — 邮件自动化
  6. **Linear** — 项目管理集成
  7. **Firecrawl** — Web scraping

### Claude Code 生态 🟢

- **Claude in Chrome** — GA 发布，浏览器驱动能力正式可用
- **Artifacts + MCP** — 发布页面可调用查看者的 MCP connectors
- **90% 自写代码** — Anthropic 内部 Claude Code 已有 ~90% 代码由 Claude Code 自身编写（Addy Osmani 引用）

---

## Part 4: 🎮 社区玩法 / 小技巧

### 开发工作流最佳实践 🟢

**Addy Osmani（Google）分享的 2026 LLM 编码工作流：**
- 项目记忆（CLAUDE.md）是核心 — 让 AI 理解项目上下文
- Git worktrees + 5 个并行 AI agent — 极大提升吞吐量
- 90% 自写率证明这不是玩具

**Claude Code 每日操作系统（Towards AI）：**
- 5 部分模型 + 10 分钟日常 routine
- Slash commands 和上下文卫生技巧
- 每日结束 ritual

### 实用技巧 🟢

- **/fork** — 不中断当前工作，分叉对话到后台继续
- **/doctor** — 环境诊断一键修复，替代手动排查
- **deny/ask rules** 现在支持 `Tool(param:value)` 精确匹配（如 `Agent(model:opus)`）
- **Background subagents** — 默认后台运行，主会话不阻塞

### Twitter/社区热点 🟡

- Claude Code 自动化 Twitter 发布工作流（OpenTweet 指南）
- "I Talked to Claude Code More Than Humans in 2025" — @caffeinum 的一年回顾
- Reddit r/ClaudeAI 讨论 Artifacts 变更（legacy → VM-based）

---

## 📊 可靠度标注

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw v2026.7.1 | 🟢 官方 | docs.openclaw.ai |
| Claude Code W27-29 | 🟢 官方 | code.claude.com |
| MCP 2026-07-28 规范 | 🟢 官方 | tech-insider.org + spec repo |
| ClawHub 5,400+ skills | 🟢 多源交叉 | firecrawl + reddit + blink |
| Claude 90% 自写 | 🟡 二手引用 | Addy Osmani 博客 |
| 社区玩法 | 🟡 社区 | twitter/reddit/youtube |

---

*调研时间：2026-07-25 12:00 CST | 搜索轮次：8 | 作者：NONO 🏠*
