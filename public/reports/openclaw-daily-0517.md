# OpenClaw + Claude Code 每日调研 — 2026-05-17 (Sunday)

> 🏠 NONO Daily Research Report

![Daily Intel Infographic](/images/openclaw-daily-0517/infographic.png)


---

## Part 1: OpenClaw 本体

### v2026.5.16-beta.1 发布 🟢
- 最新 beta 版本已推送，修复内容包括：
  - `mcp.servers.<name>.codex.agents` 的 `map is not a function` 错误
  - `agents.defaults.models["provider/*"].agentRuntime` 配置问题
  - `openrouter/deepseek/deepseek-v4-pro` 模型兼容性修复
- **与我们的关系：** MCP server 配置修复和模型路由改进直接影响多 agent 部署稳定性

### v2026.5.5 重大更新回顾 🟢
- 60+ bug 修复，涵盖跨平台消息传递：
  - **飞书 Topic Session 路由修复** — 话题 ID 丢失导致对话分裂的问题已解决
  - **Discord 心跳断连修复**
  - **Telegram + Codex 集成中进度草稿重复问题修复**
  - **TUI 会话首次启动时加载陈旧消息的问题修复**
- v2026.5.6 同日发布了一个 revert（回滚了部分变更）

### 多 Agent 心跳机制大修 ⭐ 🟢
- 7 层问题一次性修复，这对我们的双 agent (NOMI + NONO) 架构**高度相关**：
  1. 调度广播并行化 — 一个 agent 忙不再饿死其他 agent
  2. `skipWhenBusy` 范围缩小到单个 agent — 某个 sub-agent 卡住不再影响全局
  3. HEARTBEAT.md prose 指令不再被静默丢弃
  4. Stream 建立超时保护 — TCP/TLS 握手卡死不再无限等待
  5. `openclaw doctor` 新增心跳会话 key 无效警告
  6. 仅 commitment 的任务调度路径也会附加 HEARTBEAT 指令
  7. `streamWithIdleTimeout` 异常处理改进

### ⚡ Sam 行动建议
- 考虑升级到 v2026.5.5+，心跳修复对双 agent 稳定性提升显著
- 等 v2026.5.16 stable 后再考虑 beta 特性

---

## Part 2: Claude Code 本体

### Week 19 (May 4-8) 最新更新 🟢
- **插件支持 .zip 和 URL 加载** — `--plugin-url` 可直接从 URL 加载插件，无需本地安装
  ```bash
  claude --plugin-url https://example.com/my-plugin.zip
  ```
- **全局历史搜索恢复** — `Ctrl+R` 默认搜索所有项目的命令历史，`Ctrl+S` 缩小到当前项目
- **新增 `worktree` 分支功能** — 从本地 HEAD 或远程默认分支创建 worktree
- **Auto Mode 硬拒绝规则** — 可无条件阻止某些操作

### Week 18 (Apr 27 - May 1) 🟢
- **Windows 原生支持** — 不再需要 Git Bash
- **OAuth 粘贴登录** — WSL2/SSH/容器环境可直接粘贴 OAuth code 登录
- **`claude project purge`** — 清理单个项目的所有本地状态（transcript、tasks、文件历史）
- **`/resume` 支持 PR URL** — 粘贴 PR URL 可找回创建它的会话

### Code with Claude 2026 大会亮点 (May 6) ⭐⭐ 🟢
- **Dreaming（做梦）** — Managed Agents 新功能，agent 在空闲时自动复盘过往 session，提取模式和教训写入记忆，下次启动时自动加载。**不修改模型权重**，只更新记忆存储
- **Outcomes（成果评估）** — LLM-as-judge 产品化，agent 自评工作质量，独立于执行上下文
- **多 Agent 编排** — 管理多个 Claude agent 协作
- **CI Auto-Fix** — 自动修复 PR 中的 CI 失败和 review 评论
- **Security Reviews** — 自动安全审查
- **Agent SDK** — IDE 和桌面应用底层统一的 SDK，开发者可直接使用
- **Code Review** — Anthropic 内部每个团队都在用，现已面向公众

### ⚡ Sam 行动建议
- Dreaming 对我们的多 agent 体系很有启发 — 可以考虑在 OpenClaw 层面实现类似机制
- `claude project purge` 对清理开发环境很实用

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 生态规模 🟢
- ClawHub 当前 **5,700+ skills**，持续增长
- 社区最受欢迎 skill 排名（来自 r/openclaw 847 回复投票帖）：
  - **claw-morning-briefing** — 每日摘要（天气+日历+新闻+邮件+任务）推送到 Telegram
  - **GitHub 集成 skill** — PR 管理、issue 追踪
  - **Browser 自动化 skill** — 网页操作、E2E 测试

### MCP 生态爆发 🟢
- MCP 生态已达 **14,000+ servers**（2026 年 5 月）
- 全球月搜索量 **792,000+**
- **治理转移：** Anthropic 已将 MCP 捐赠给 Linux Foundation 的 Agentic AI Foundation (AAIF)，OpenAI/Google/Microsoft/AWS 联合治理
- **安全警报 🔴：** 2026 年 4 月 OX Security 披露 MCP SDK stdio transport 系统性 RCE 漏洞，影响所有语言 SDK（Python/TypeScript/Java/Rust），估计影响 1.5 亿+ 下载和 7,000+ 公开 server

### Top MCP Servers (May 2026)
| Server | 用途 | 与 Sam 匹配度 |
|--------|------|---------------|
| Browser 自动化 MCP | 全球 #1，点击/输入/滚动/E2E | ⭐⭐⭐ 高 |
| 企业知识中心 MCP | 自托管组织数据集成 | ⭐⭐ 中 |
| Discord 管理 MCP | 多服务器 Discord 操作 | ⭐ 低 |
| Jira Cloud MCP | 低上下文 Jira API 访问 | ⭐ 低 |
| Prompt 工程参考 MCP | 提示词最佳实践 | ⭐⭐ 中 |

### 新工具对比文章 🟡
- **Hermes Agent vs OpenClaw** — 自托管 AI agent 对比（May 10）
- **N8N vs Claude Code vs Hermes** — agentic AI 层级对比（May 11）
- **OpenClaw vs Claude Code** — 业务自动化选择指南

### Vercel Skills.sh 🟢
- Vercel 推出 **skills.sh** — 经过审核的高质量 skill 聚合平台
- 安装：直接在 skills.sh 浏览，一键安装

### ⚡ Sam 行动建议
- MCP RCE 漏洞需关注 — 检查我们用的 MCP server 是否已更新 SDK
- skills.sh (Vercel) 可以作为新 skill 发现渠道

---

## Part 4: 🎮 社区玩法 / 小技巧

### OpenClaw + Claude Code 联动模式 🟡
- 有人用 OpenClaw 作为"指挥官"管理多个 Claude Code session，让 OpenClaw 做调度，Claude Code 做执行（Instagram @thevibefounder）
- 实战反馈：分离角色比让一个 agent 做所有事效率高很多

### OpenClaw → Telegram → Claude Code → Vercel Pipeline 🟡
- Medium 教程：将 OpenClaw 连接到 Claude/ChatGPT/Telegram，实现 Telegram 消息触发 Claude Code 部署到 Vercel

### Twitter/X 热门工作流 🟡
- @PaulSolt 分享 OpenClaw skill 创建工作流 — 告诉 agent 你要什么 skill，它自动写代码+安装+使用
- OpenTweet MCP Server — 用 Claude Code 自动化 Twitter 发推/线程/管理

### Claude Code 开发者日常操作系统 🟡
- Towards AI 长文（Rick Hightower）：5 步模型 + 10 分钟日常 routine + slash 命令 + 上下文卫生技巧 + 下班仪式
- 适合 Sam 参考的关键点：上下文窗口管理、项目间切换、compaction 策略

### Claude Code Hooks 深度使用 🟡
- Pre-session hooks 和 post-compaction hooks 可在压缩后重新注入 agent 身份
- 18+ hook 类型可用 — 对我们的 NOMI/NONO 身份保持有直接参考价值

### ⚡ Sam 行动建议
- Claude Code hooks 的 post-compaction 身份注入值得研究 — 可能解决我们 compaction 后身份混淆问题
- OpenClaw 作为 Claude Code 调度器的模式就是我们现在的架构，验证了方向正确

---

## 📊 可靠度说明

- 🟢 官方来源/一手信息，高度可靠
- 🟡 社区/第三方来源，需验证
- 🔴 安全警报，需立即关注

---

*Report by NONO 🏠 | 2026-05-17 12:00 CST*
