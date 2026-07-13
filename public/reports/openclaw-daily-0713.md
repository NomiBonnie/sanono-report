# OpenClaw + Claude Code 每日调研 — 2026-07-13

> NONO 🏠 | 调研时间：2026-07-13 12:00 CST

---

## Part 1: OpenClaw 本体

### 最新版本：2026.7.1-beta.2 / 稳定版 2026.6.11

**本周重要更新（2026.7.x beta 系列）：**

- **GPT-5.6 模型支持** 🟢 — OpenClaw 全面支持 OpenAI GPT-5.6 模型系列，涵盖 catalog、capability、runtime 选择路径 (#98333)
- **`openclaw attach` 命令** 🟢 — 新增外部 harness 附加功能，可对已有 Gateway session 启动外部 harness（如 Codex），方便恢复和检视交互式工作流 (#96454)
- **Telegram Codex 工作流** 🟢 — Telegram 现可通过 `/login` 启动 Codex 配对、操控活跃的 Codex 运行、跨 API 故障恢复最终回复 (#98006, #98126, #98786)
- **事件驱动 cron** 🟡 — 新增 `on-exit` schedule 类型：监听命令退出时唤醒 agent (#92037, #98755)
- **iOS 26 视觉系统** 🟢 — iOS 全面采用 iOS 26 设计语言，导航、设置、Chat、Talk、Onboarding 全面升级
- **iMessage 原生投票** 🟡 — iMessage 支持创建、阅读、投票功能 (#98421)
- **作用域会话能力** 🟡 — 新增 capability profiles，为每个对话设定工具和访问边界 (#98536)
- **Cursor Agent 自动审查** 🟡 — 支持 Cursor Agent 作为 autoreview 引擎 (#97348)

**关键修复：**
- Telegram 稳定性大幅改进：修复停滞入口、重试丢失媒体、正确路由回调等
- Agent 上下文可靠性：修复 runtime 覆盖保持、compaction 预检、Gateway run-cache 增长上限
- Android 拒绝 IPv6 zone ID 端点 URL (#99570)

**⚠️ Sam 行动建议：** 生产环境保持 2026.6.11 稳定版。Beta 中的 `openclaw attach` 和事件驱动 cron 值得关注，可能对我们的工作流有用。

---

## Part 2: Claude Code 本体

### 最新版本：v2.1.204

**近期重要更新：**

- **Manual 默认权限模式** 🟢 — Claude Code 新增 Manual 模式作为默认权限设置，提供更精细的控制
- **登录过期警告** 🟢 — 现在会在登录即将过期时发出提醒
- **Sandbox 凭证阻断** 🟢 — sandbox 环境中会阻止凭证泄露，安全性提升
- **组织级模型限制** 🟡 — 管理员可限制组织内使用的模型
- **全屏鼠标控制** 🟡 — fullscreen 模式下支持鼠标点击操控
- **Background Agent 可靠性** 🟢 — 大量修复后台 agent 的稳定性问题
- **Plugin marketplace** 🟡 — `claude plugin install <name>@<marketplace>` 支持市场安装

**Claude 平台更新（Anthropic 官方）：**
- **Admin Analytics 升级** 🟢 — Claude Enterprise 新增模型级权限、花费提醒、使用趋势分析
- **Claude Apps Gateway** 🟡 — 引入 Apps Gateway 概念
- **Workload Identity Federation** 🟡 — 企业级身份联邦支持
- **Claude Design** 🟡 — 新增品牌一致性设计功能
- **Claude Sonnet 4.6** 🟢 — 最新模型发布

**⚠️ Sam 行动建议：** v2.1.x 系列稳定性明显提升。Manual 权限模式值得在敏感项目中使用。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP 协议重大更新 — 2026-07-28 Release Candidate 🔴重要

MCP 协议迎来自发布以来最大修订：

1. **完全无状态化** — 移除了 `initialize/initialized` 握手和 `Mcp-Session-Id`，每个请求完全独立，可部署在普通 round-robin 负载均衡器后面
2. **MCP Apps** — 服务器可提供交互式 HTML 界面，在宿主的 sandboxed iframe 中渲染
3. **Tasks 扩展** — 服务器可返回 task handle 用于长时间运行工作，客户端通过 `tasks/get`、`tasks/update`、`tasks/cancel` 驱动
4. **扩展机制** — 反向 DNS ID 标识，独立版本管理
5. **OAuth/OIDC 对齐** — 客户端在动态注册时声明 `application_type`，避免 redirect URI 问题
6. **正式弃用策略** — 三个核心功能进入弃用生命周期

**⚠️ 这是 BREAKING CHANGE！最终规范 7 月 28 日发布。Sam 关注：所有 MCP server 可能需要适配。**

### GitHub 热门项目

| 项目 | 说明 | 相关度 |
|------|------|--------|
| **awesome-claude-skills** | Claude Code 扩展技能合集 | ⭐⭐⭐ |
| **Claude-AI-skills-collection-2026** | 125+ 科学技能（生物信息学、化学、临床研究、ML） | ⭐⭐ |
| **Claude-Code-Solo-Studio** | 轻量级 Claude Code 独立开发模板，减少 token 消耗 | ⭐⭐ |
| **Firecrawl** | Web 上下文 API，与 Claude Code 深度集成 | ⭐⭐⭐ |
| **Bumblebee (Perplexity)** | 供应链安全扫描 | ⭐ |

### 社区生态趋势

- **"2026 是 Claude Code Wrapper 之年"** — Twitter 热议：大量产品和业务建立在 Claude Code 之上，类似 2023 GPT wrapper 浪潮
- **Agent Skills 2.0** — 自改进评估循环，Skills 可自动优化自身表现
- **Google Workspace 集成** — Claude Code 全面支持 Google Workspace CLI
- **BrowserStack/Kobiton MCP** — 真机云测试 MCP server，测试自动化场景

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@mvanhorn — "Every Claude Code Hack I Know"** 🟢
   - 截图 → Cmd+Shift+4 → 直接 Ctrl+V 粘贴到 Claude Code → `/ce:plan fix this`
   - Claude Code 原生支持图片输入，比描述 bug 快 10 倍

2. **@rileybrown — "2026 is the year of Agents"** 🟡
   - OpenClaw、Claude Code、Codex、Cursor 四大 agent 工具对比分析

3. **Claude Code Auto Mode + /goal + Routines** 🟢
   - 结合 auto mode、/goal、routines 构建无人值守 AI 工作流
   - 实战技巧：设置 goal → 定义 routine → auto mode 自动执行

4. **STORM 研究方法 + AI Agent** 🟡
   - 斯坦福 STORM 方法：5 个专家视角，产出更有组织的研究结果
   - 已有人在 Claude Code 中实现完整 STORM workflow

### Reddit 精选

- **r/openclaw** — v2026.6.11 发布讨论，社区关注点：Slack relay mode、Mattermost 集成、channel 可靠性
- **r/openclaw** — "3 weeks into OpenClaw and my main project IS OpenClaw" — 高赞帖（51 upvotes），反映社区深度投入

### 实用技巧

- **Brand Context Folder** — 创建品牌上下文文件夹（voice profile + visual identity + positioning），让每个 Claude session 保持品牌一致性
- **`claude agents --plugin-dir <dir>`** — 指定插件目录，便于管理多套插件配置
- **`/model claude-opus-4-6[1m]`** — 在 Claude Code 中切换模型+上下文窗口的快速命令

---

## 📊 今日总结

| 板块 | 状态 | 重要度 |
|------|------|--------|
| OpenClaw 本体 | 7.1-beta.2 活跃开发中，GPT-5.6 支持 | ⭐⭐⭐ |
| Claude Code | v2.1.204，Manual 权限模式+安全强化 | ⭐⭐⭐ |
| MCP 协议 | **7/28 发布重大 breaking change** | 🔴🔴🔴 |
| 社区 | Claude Code wrapper 浪潮 + agent 自动化趋势 | ⭐⭐ |

**🔴 最重要：MCP 2026-07-28 规范即将发布，协议层面完全无状态化。所有 MCP server 需要适配。建议提前关注。**

---

*调研完成：2026-07-13 | 搜索轮数：8 | 来源：Tavily + web_fetch*

---

## 📊 信息图

![OpenClaw + Claude Code Daily Research Infographic](/images/openclaw-daily-0713/infographic.png)
