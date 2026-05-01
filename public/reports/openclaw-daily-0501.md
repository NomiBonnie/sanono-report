# OpenClaw + Claude Code 每日调研 — 2026-05-01

![Daily Intel Infographic](/images/openclaw-daily-0501/infographic.png)

## Part 1: OpenClaw 本体

### 🔥 v2026.4.29-beta.1（Apr 30 发布）
最新版本，昨天刚发布。关键更新：

1. **Active-Run Steering 默认开启** — 长时间自动化任务可更好地干预和控制，运行中的 agent 更易纠偏 🟢
2. **People-Aware Memory** — Memory Wiki 新增人物感知能力，per-conversation Active Memory 过滤器，超时容错的 partial recall，recall 质量更高 🟢
3. **Provider/Model 路径加固** — NVIDIA 模型接入支持，Bedrock thinking-path 对齐改进，混合 provider 环境更稳定 🟢
4. **Gateway 可靠性** — 冷启动优化、session 恢复、channel transport 韧性增强 🟢

### v2026.4.26（Apr 26 发布）
- **QQ Bot 完整群聊支持** — 历史追踪、@提及、激活模式、per-group config
- **Google Live Talk** — 浏览器端 Google Meet 支持，WebSocket 传输
- **Ollama/本地模型可靠性提升** — Gemma 4、Qwen、Kimi 本地运行更稳
- **Claude/Hermes 迁移工具** — 一键导入 Claude Code/Hermes 工作流
- **Matrix E2EE 一键加密**（标注不稳定，需 Claude Code 修复）
- **安全加固** — workspace .env 不再注入 OPENCLAW_* 运行时 key，WebSocket 广播权限收紧

> ⚠️ 部分用户报告 Discord 集成和 Gateway 崩溃（Facebook 社区反馈）🟡

### 平台趋势
- Plugin manifest 重构：pre-runtime model-id 归一化、provider endpoint 元数据移入 plugin manifest
- 即将到来：pluggable sandbox backends、GitHub main 安装、Firecrawl 搜索、/btw side-question flow

---

## Part 2: Claude Code 本体

### 🔥 v2.1.126（May 1 — 今天！）
今天刚发布的新版本：

1. **`/model` 支持 gateway models** — 当 ANTHROPIC_BASE_URL 指向兼容 gateway 时自动列出可用模型 🟢
2. **`claude project purge`** — 新命令，一键清除项目所有 Claude Code 状态（transcripts、tasks、file history、config），支持 --dry-run 🟢
3. **`--dangerously-skip-permissions` 扩展** — 现在跳过 .claude/、.git/、.vscode/ 等保护路径的写入提示（毁灭性命令仍会提示）🟡
4. **OAuth 终端粘贴** — WSL2/SSH/容器场景下可直接粘贴 OAuth code 🟢
5. **Skill OpenTelemetry 事件** — `claude_code.skill_activated` 新增 `invocation_trigger` 属性 🟢
6. **Windows 改进** — PowerShell 7 检测增强，PowerShell 作为主 shell
7. **安全修复** — `allowManagedDomainsOnly` / `allowManagedReadPathsOnly` 权限绕过修复 🔴

### Week 17 功能回顾（Apr 20-24, v2.1.114-119）

1. **`/ultrareview` 公开研究预览** — 云端 bug 猎人 agent 群，自动在 CLI/Desktop 反馈发现。合并关键变更前使用 🟢
2. **Session Recap** — 切回终端时自动显示离开期间发生了什么。多 session 工作流必备 🟢
3. **Custom Themes** — `/theme` 创建和切换颜色主题，插件可打包主题 🟢
4. **Claude Code Web 重设计** — 新 sessions sidebar、拖拽布局、刷新的 routines 视图 🟢

### Claude Code 整体版本节奏
当前最新 v2.1.126，从 changelog 看保持每 1-2 天一个小版本的节奏。Week 13 引入的权限模式中间层（不再只有全允许/全拒绝）持续完善中。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP Servers 热门趋势
| 名称 | 功能 | 适合 Sam | 备注 |
|------|------|----------|------|
| **Firecrawl MCP** | 网页抓取 + 搜索 + Markdown 转换 | ⭐⭐⭐ | OpenClaw 即将原生集成 |
| **Vercel MCP** | 部署管理、日志查看 | ⭐⭐ | 适合前端项目 |
| **Docker MCP** | 容器管理 | ⭐⭐ | 本地开发好帮手 |
| **GitHub MCP** | PR/Issue 管理 | ⭐⭐⭐ | 已有 gh skill，互补 |

### ClawHub Skills 趋势
根据 Firecrawl 和 Blink 的 2026 排行榜：
- **Browser Automation Skills** — 浏览器自动化持续热门
- **Research & Summarization** — 调研类 skill 需求旺盛
- **Security/Vetting Skills** — 安全审查类 skill 受重视
- **Communication Skills** — Slack/Discord/Telegram 集成

### 值得关注项目
- **WUPHF** — 开源 AI agent 协作办公平台，支持 OpenClaw + Claude Code + Codex + 本地 LLM（Reddit r/Openclaw_HQ 提及）🟡
- **OpenTweet** — OpenClaw 驱动的 Twitter 增长工具 🟡

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门
- **@iamlukethedev** 分享 v2026.4.29 解读，重点推荐 people-aware memory 和 active-run steering
- **Claude Code shipped everything** — Alex Followell 的视频全面梳理 2026 Claude Code 所有新功能（YouTube 9.2K 订阅）

### Reddit 精选
- **r/automation** — 用户讨论 OpenClaw + Claude Code 自动化组合，隐私顾虑是热点话题
- **r/AISEOInsider** — "Claude Code vs OpenClaw" 对比讨论，结论：OpenClaw 更灵活但需要更多配置
- **DataCamp 推荐 9 个 OpenClaw 项目** — 从 Reddit Bot 到自托管 AI agent，适合学习

### 实用技巧
1. **`/ultrareview` 最佳实践** — 在合并 auth/数据迁移等关键 PR 前使用，云端 agent 群会找到你遗漏的 bug
2. **Session Recap + 多 session 工作流** — 同时开多个 Claude Code session，切回时自动知道进展
3. **`claude project purge`** — 项目状态混乱时一键重置，配合 --dry-run 先看影响
4. **OpenClaw People-Aware Memory** — 升级到 v2026.4.29 后 Memory Wiki 自动识别对话中涉及的人物，recall 更精准

### 安全提醒 🔴
- Claude Code v2.1.126 修复了 `allowManagedDomainsOnly` 权限绕过漏洞 — **建议立即更新**
- OpenClaw v2026.4.26 有 Discord 集成问题报告，如遇到考虑等 v2026.4.29 稳定版

---

_调研时间：2026-05-01 12:00 CST | 搜索轮次：7 | 来源：Tavily + web_fetch_
_信息可靠度：🟢 官方确认 | 🟡 社区来源/未完全验证 | 🔴 安全相关/需要关注_
