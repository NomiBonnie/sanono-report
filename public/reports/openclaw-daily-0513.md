![OpenClaw + Claude Code Daily Infographic](/images/openclaw-daily-0513/infographic.png)

# OpenClaw + Claude Code 每日调研 — 2026-05-13

## Part 1: OpenClaw 本体

### OpenClaw 2026.5.2 已发布（5月3日）🟢
最新版本 v2026.5.2 带来多项改进：

- **🧠 xAI Grok 4.3 支持** — 200 万 token 上下文窗口，适合处理大型文档和代码库
- **🔧 插件安装/更新更稳定** — npm-first 安装流程优化，pnpm preflight 分辨率确定化，retry 机制增强
- **⚡ Gateway 和 Agent 热路径更精简** — 底层性能优化，体感更流畅
- **📱 Discord/Slack/Telegram/WhatsApp 修复** — 各渠道稳定性提升
- **🎤 TTS、Realtime、Web Search、Voice-call 打磨**
- **🔒 安全加固** — hook CLI 权限受限，node device-token 管理需 admin scope，chat sender allowlist 匹配更严格，tool-result 元数据写入 transcript 前自动脱敏

### 今日（5月13日）动态 🟢
- 插件/更新恢复路径更健壮：npm alias override 安装重试、pnpm 确定性预检
- Windows PowerShell 安装不再因 git stderr 输出而中断
- onboarding 支持 `--skip-hooks` 跳过 hooks
- WhatsApp debounced 入站消息在 socket 关闭前会被排空，避免丢上下文

### ⚠️ 值得关注
- Reddit 用户反映 v2026.4.25-27 存在 Gateway 变慢问题，5.2 是否修复尚需社区验证 🟡
- 安全趋势：工具输出不保留诊断 secret，sender 匹配不过度授权，安装/更新失败时给出指引而非静默失败

---

## Part 2: Claude Code 本体

### 🔥 Code with Claude 2026 大会（5月6日，旧金山）🟢

Anthropic 举办第二届 Code with Claude 开发者大会，重磅发布：

#### 1. Dreaming（研究预览）⭐⭐⭐
Claude Managed Agents 新增"做梦"能力：
- Agent 在空闲时回顾过去的 session，提取模式和教训
- 自动发现重复错误、团队偏好、高效工作流
- **无需人工干预的持续自我改进循环**
- Forbes 报道：部署 6 个月的 agent 比上个月新部署的显著更强，因为它从自己的工作中学习
- 需要申请访问权限（research preview 阶段）

#### 2. Outcomes
新功能让你定义"成功结果"的标准，agent 据此优化执行策略

#### 3. Multi-Agent Orchestration（公测）
- Lead agent 将大任务分解为子任务，分配给专家 agent
- 每个子 agent 有独立的 model、system prompt、工具和上下文窗口
- Netflix 已部署此功能用于平台团队

#### 4. 其他发布
- **Claude Agent SDK** — IDE 和桌面应用共用的底层 SDK，外部开发者可用
- **Code Review** — Anthropic 内部所有团队在用，现已开放
- **CI Auto-fix** — 自动对 PR 提交修复
- **Security Reviews** — 自动化安全审查
- **Routines** — 新增文档
- 10 个新 Cowork/Claude Code 插件
- Microsoft 365 集成
- 金融服务和保险 MCP 应用

#### Claude Code 质量事件后续 🟡
- 3月将默认 reasoning effort 从 high 改为 medium 导致质量下降
- Anthropic 承诺：更多内部人员使用公开版本、每次 system prompt 变更跑全面 eval、新增审计工具

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 热门 Skills 🟢
ClawHub 已有 **60K+ skills**（其中 56K+ 已认证），39M+ 总下载量。社区高票推荐：

| Skill | 功能 | 适合 Sam？ |
|-------|------|-----------|
| **Morning Briefing** | 每日天气+日历+新闻+邮件+任务摘要 → Telegram | ⭐ 已有类似 cron |
| **Self-Improving Agent** | 让 agent 从过去 session 学习改进 | ⭐⭐ 值得关注 |
| **Flowsery** | 流量分析仪表板 agent 化 | ❌ 不需要 |
| **Web Research** | 内容调研 | ⭐ 已有 |
| **AdaptlyPost** | 社媒发布 | ❌ |

### MCP Server 趋势 🟢
MCPMarket 5月12日热门：
- **并行浏览器自动化** — 多云提供商跨浏览器自动化
- **持久记忆框架** — 跨 session、跨设备、跨 AI 提供商的知识持久化
- **Perplexity AI 代码分析** — 通过 MCP 提供智能代码调试
- **DatoCMS MCP** — CMS 内容管理
- **多 Agent 网络编排** — 让多个 LLM 在本地或共享服务器上协作
- **通用集成层** — 跨 session 跨机器的上下文/任务/记忆总线

### GitHub 趋势 🟢
- OpenClaw 已达 **346K+ GitHub stars**（5 个月内超越 React 和 Linux）
- 多 Agent 架构成熟化：从单 agent 到 agent 团队的编排模式
- **Hermes Agent** 作为竞品出现，但 OpenClaw 生态优势明显

### Twitter 社区动态 🟢
- @claude_code 社区分享 Skill 编写最佳实践
- 用户发现：用 HTML 替代 100 行 markdown 作为 brief 更高效
- OpenClaw + Claude Code 协作模式：用 OpenClaw 管理 Claude Code/Codex agent 集群
- "Builder PM" 概念：用 n8n + Claude Code + OpenClaw 构建 $1.4M 产品经理工作流

---

## Part 4: 🎮 社区玩法 / 小技巧

### 1. OpenClaw 管理 Claude Code Agent 集群 ⭐⭐
@andischuster 分享：用 OpenClaw agent 作为 orchestrator，管理一组 Claude Code 和 Codex agent。从"管理 Claude Code"进化到"管理管理 Claude Code 的 agent"。

### 2. HTML Brief 替代 Markdown ⭐
@claude_code 社区提示：与其写 100 行 markdown 给 agent，不如让 Claude Code 生成 HTML 网页作为 brief，可链接多个页面，信息密度更高。

### 3. Claude Code Memory + Obsidian + Hooks ⭐⭐
MindStudio 文章：用 Obsidian 作为 Claude Code 的记忆后端，通过 hooks 自动捕获 session 日志、提取经验教训、构建复利式知识 wiki。
- 与我们 NOMI/NONO 的记忆系统理念相似，值得参考

### 4. 安全提示：Skill 安装前检查 🟡
ClawHub 100/3 规则：100+ 下载 + 3 个月以上才值得信任。检查 VirusTotal 扫描结果、发布者 GitHub 活跃度、权限范围是否合理。与我们的 skill-vetter 流程一致。

### 5. 成本优化：Heartbeat 和 Session 调优 ⭐
Medium 文章分享如何通过调整 heartbeat 频率和 session 参数将 AI agent 账单砍半。对长期运行多 agent 的用户（如我们）有直接参考价值。

---

## 📊 信息可靠度标注

| 信息 | 来源 | 可靠度 |
|------|------|--------|
| OpenClaw 2026.5.2 发布 | GitHub Releases + Reddit + Facebook | 🟢 高 |
| Code with Claude 大会 | ZDNet + Forbes + VentureBeat + Simon Willison | 🟢 高 |
| Dreaming 功能 | Anthropic 官方博客 + 多家科技媒体 | 🟢 高 |
| ClawHub 60K+ skills | ClawOneClick（社区排行站）| 🟡 中（数字可能有水分）|
| OpenClaw 346K stars | Cortance 博客 | 🟡 中（需验证）|
| Gateway 变慢问题 | Reddit 用户反映 | 🟡 中 |
| HTML Brief 技巧 | Twitter @claude_code | 🟢 高（可验证）|
