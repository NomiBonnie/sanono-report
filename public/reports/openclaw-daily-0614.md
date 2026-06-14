# OpenClaw + Claude Code 每日调研 — 2026-06-14（周六）

> 调研人：NONO 🏠 | 搜索轮次：8 | 来源：Tavily + web_fetch

![Infographic](/images/openclaw-daily-0614/infographic.png)

---

## Part 1: OpenClaw 本体

### 🔄 版本更新：2026.6.6 成为 stable baseline

🟢 **npm latest 已从 2026.6.5 推进到 2026.6.6**（beta 为 2026.6.6-beta.2）。6 月 13 日预发布的安全和交付修复已成为生产安装基线。

**核心变更：**

| 领域 | 变更 | 可靠度 |
|---|---|---|
| **安全：运行时上下文泄漏** | Feishu 频道暴露了 runtime context（记忆、发送者元数据），PR #92593 用显式分隔符包裹了 prompt-preface runtime context | 🟢 |
| **安全：Control UI token** | PR #92584 不再通过 `?token=` query string 接受 Control UI token，防止凭证通过浏览器历史/日志/截图泄漏 | 🟢 |
| **安全：项目上下文边界** | Issue #92561 发现 ancestor context discovery 会向文件系统根目录遍历，PR #92579 将遍历限制在 home 目录内 | 🟢 |
| **Cron 交付状态** | PR #92580 将已解析的 delivery target 持久化到隔离 cron session 的 deliveryContext 中 | 🟢 |
| **Session Memory 去重** | Issue #92563 报告 thinking 剥离后 assistant 消息重复，PR #92571/92577 修复去重路径 | 🟢 |
| **MCP 生命周期清理** | Issue #92569 报告 MCP server 进程跨 session 泄漏并在重连时持有文件锁 | 🟡 |
| **WhatsApp 频道** | PR #92578 建立 WhatsApp 入站准入基础，Issue #92546 报告 WhatsApp 插件更新会擦除 Baileys sessions | 🟡 |
| **Microsoft Teams** | PR #92591 添加关键词响应，不再要求 @mention | 🟢 |
| **Docker/插件目录** | Issue #92551、PR #92590 处理 Docker 镜像中过期的 openclaw 副本，PR #92564/92585 隔离无效插件模型目录 | 🟢 |

### 🆕 Skill Workshop 全面上线

- Control UI 中的完整导航、styled dashboard、proposal today view
- 修订对话框、可搜索文件预览、可复用 session handoff
- `skill_workshop` agent tool 可以 apply/reject/quarantine proposals
- Proposals 可携带已批准的 support files，带 scanner/hash/rollback 保障
- 待审 proposals 可在批准前原地修订（带版本化 frontmatter）

### 🆕 Workboard 编排原语

新增 Workboard orchestration primitives 和 agent coordination 功能。

---

## Part 2: Claude Code 本体

### 🚀 Claude Fable 5 / Mythos 5 发布（6 月 9 日）

🟢 本周最大新闻。**Anthropic 发布了 Claude Fable 5** —— 首个面向公众的 Mythos 级模型。

| 指标 | 数据 |
|---|---|
| SWE-bench Pro | **80.3%**（Opus 4.8 为 69.2%） |
| Stripe 代码迁移 | 5000 万行，1 天完成（原需 2 月） |
| 药物设计加速 | 约 **10 倍** |
| Slay the Spire 表现 | 比 Opus 4.8 提升 **3 倍** |
| 企业采用率 | Anthropic **34.4%** > OpenAI 32.3% |

- Fable 5 和 Mythos 5 底层模型完全相同，区别在于 safeguards
- Mythos 5 仅面向 Project Glasswing 中的网络防御者

### 🚀 Dynamic Workflows 动态工作流

🟢 6 月 2 日 Anthropic 发布 "A harness for every task"。

- Claude Code 为每个任务即时编写定制 harness
- 支持最多 **16 个并发 sub-agent**，单次运行最多 **1,000 个 agent**
- 6 种编排模式：fan-out/fan-in、pipeline、adversarial、review、research、migration
- 通过 `ultracode` 设置或 auto mode 触发

### 🔄 Claude Code v2.1.174（6 月 11 日）

近期密集发版：v2.1.172（6/10）→ v2.1.173（6/11）→ v2.1.174（6/11）

**重要变更：**
- 1M context autocompact 修复 — 不再被 "Prompt is too long" 误拦
- Sub-agent 进度摘要缓存 — ~3× cache_creation 降低
- MCP 工具计数 — `/mcp` 显示工具数量
- Gateway model picker — `/model` 列出 gateway 模型
- `claude project purge` — 清理项目所有 Claude Code 状态
- Windows clipboard CVE 修复
- Image paste downscale — 超 2000px 自动缩放

---

## Part 3: 🔥 生态

### ClawHub 生态现状

| 指标 | 数据 | 可靠度 |
|---|---|---|
| ClawHub 总 skill 数 | **3,200+** | 🟡 |
| 热门 skill — Felo Search | 145,000+ 安装 | 🟢 |
| 恶意 skill 事件（2 月） | 1,184 个恶意 skill | 🟢 |

### 值得关注的新工具/集成

| 工具 | 描述 | Sam 匹配度 |
|---|---|---|
| **@openclaw/copilot 插件** | GitHub Copilot agent runtime 官方插件化 | ⭐⭐⭐ |
| **@openclaw/tokenjuice 插件** | Token 使用追踪/优化 | ⭐⭐⭐ |
| **Fastio MCP Skill** | 19 个文件管理工具 MCP server 封装 | ⭐⭐ |
| **Agent Skills 开放标准** | agentskills.io，skill 跨平台 | ⭐⭐⭐ |

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 "Every Agentic Engineering Hack I Know"（June 2026）

1. **Ghostty 终端直开 Claude Code** — 每个新 tab 自动进入 Claude Code
2. **Auto mode 全权限** — 避免反复确认
3. **Dynamic workflows 编排** — 让 Claude 编排数百个任务
4. **Voice-pilled** — 语音辅助编码
5. **/ce:plan 和 /ce:brainstorm** — 有想法第一时间用

### 💡 社区讨论热点

| 话题 | 平台 | 要点 |
|---|---|---|
| OpenClaw vs Claude Code | Reddit | cron jobs 和后台 agent 是 OpenClaw 独特优势 |
| 60 岁老程序员复兴 | HN | Claude Code 是"终极作弊码" |
| Who is using OpenClaw? | HN (383 评论) | 主流：WhatsApp 日常 LLM + 版本控制记忆 |
| Dynamic Workflows | InfoQ | 被认为是 agent 编程"范式转变" |

### 🛠️ 实用技巧

- `claude project purge` — 清理项目状态
- `/mcp` — 工具计数，排查零工具 server
- Image paste — 超 2000px 自动 downscale
- DeepSeek prompt cache key — 降低调用成本

---

## 📊 本日总结

| 板块 | 重要度 | 一句话 |
|---|---|---|
| OpenClaw 本体 | ⭐⭐⭐ | 2026.6.6 stable，安全边界收紧，Skill Workshop 全面上线 |
| Claude Code 本体 | ⭐⭐⭐⭐⭐ | Fable 5 发布（Mythos 级），Dynamic Workflows，v2.1.174 |
| 生态 | ⭐⭐⭐ | Copilot/Tokenjuice 官方插件化，Agent Skills 开放标准 |
| 社区 | ⭐⭐⭐⭐ | Agentic engineering hacks 合集，动态工作流范式讨论 |

**🔑 本周最重要：** Claude Fable 5 + Dynamic Workflows = 更聪明的模型 + 更聪明的编排。

---

_调研：NONO 🏠 | 2026-06-14_
