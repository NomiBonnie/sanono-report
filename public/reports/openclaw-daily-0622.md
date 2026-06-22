# OpenClaw + Claude Code 每日调研 — 2026-06-22

![Infographic](/images/openclaw-daily-0622/infographic.png)

## Part 1: OpenClaw 本体

### 🟢 v2026.6.9 正式成为 stable（6月9日发布）

OpenClaw 2026.6.9 已替代 2026.6.8 成为 npm latest 生产线。此版本合并了 **422 个 PR**，是一个全面大更新：

**核心改进：**
- **Telegram 富文本投递大升级：** rich HTML delivery、markdown 保留、贴纸路径、命令输出渲染、进度草稿、表格规范化、ingress 恢复
- **Agent 恢复与 compaction 修复：** thinking-only/空回合重试、终端结果处理、compaction 后 usage 保留、partial history 修复、回复对账
- **Codex 集成提升：** 自动插件审批、GPT-5.3 Spark OAuth 路由、远程节点 exec 动态工具、StepFun 发布、Codex Hosted Search、ClawHub skill 来源追踪
- **安全与存储：** provider 插件外部化、release 验证强化

**社区反馈（post-release）：**
- WhatsApp 引用保留、任务路由跨崩溃恢复租约、飞书卡片脚注、Windows 无窗口定时任务、sub-agent model 转发、session 身份保持
- 痛点：Telegram 生命周期上下文重置、Slack payload 渲染为纯文本

### 🟢 v2026.6.5 已发布（6月5日）
- 免费内置 Parallel Search（并行搜索）
- 减少 agent 脆弱性

---

## Part 2: Claude Code 本体

### 🟢 Code with Claude 2026 大会新功能（5月6日发布，6月持续落地）

**五大新功能：**

1. **Pages（可分享实时页面）** — 工作进展时生成可分享的可视化页面（PR 解读、dashboard）
2. **Ultra Code（并行 sub-agents）** — fan-out + 对抗验证 + 锦标赛模式进行深度研究
3. **Dreaming（自学习）** — cron 触发后台 session 回顾，自动优化 memory（Harvey 法律基准任务完成率 6x 提升）
4. **Memory（正式 beta）** — 文件系统模型、多 agent 权限隔离、乐观并发控制、企业审计日志
5. **Skill Chaining（技能管道）** — 多 skill 串联，输出自动成为下一个 skill 的输入

### 🟢 /ultrareview（4月16日发布，现已成为标准工具）
- 云端多 agent 并行代码审查，$5-20/次
- 独立验证每个发现，只报告确认的 bug
- Pro/Max 账户可用

### 🟡 6月15日计费变更
- Claude Agent SDK、headless Claude Code、GitHub Actions、第三方 agent 从订阅配额中剥离，改为按 API 费率的独立月度额度

### 🟢 Week 21 更新（5月底）
- Auto mode 上线 Pro 账户（Sonnet 4.6 + Opus，替代权限弹窗为后台安全检查）
- `/usage` 命令按 skill/subagent/plugin/MCP server 分解用量
- `/code-review` 命令报告正确性 bug
- Background sessions 支持 `/resume` 和 pin

---

## Part 3: 🔥 生态（合并板块）

### MCP 生态

- **OpenClaw MCP Server 提案（GitHub #53215）** — 将 OpenClaw 工具暴露为 MCP 标准工具供 Claude/Cursor 调用，社区呼声高
- **200+ 社区 MCP servers** 可直接接入 OpenClaw（Playwright 浏览器自动化、GitHub、Notion、Postgres、Slack 等）
- **Skills Over MCP Interest Group** — Google MCP Toolbox 团队与社区讨论 skill 在 MCP 上的执行生命周期

### Claude Code 生态

- **OpenTweet MCP Server** — 在终端内管理 Twitter/X（发推、分析、定时，不需浏览器）
- **Wonda** — Claude Code + X/Twitter 研究与回复自动化平台
- **Skill System 管道化** — 多 skill 串联成自治管道（mindstudio.ai 教程）
- **Claude Fable 5** — 长时间自治任务表现优异

### Sam 场景匹配推荐

| 项目 | 功能 | 匹配度 |
|------|------|--------|
| OpenClaw MCP Server 提案 | 让 Claude Code 直接调用 OpenClaw 工具 | ⭐⭐⭐ 高度相关 |
| Dreaming | 自动 memory 优化 | ⭐⭐⭐ NOMI/NONO 可用 |
| Skill Chaining | 多 skill 串联执行 | ⭐⭐ 适合复杂任务流 |

---

## Part 4: 🎮 社区玩法 / 小技巧

### Hacker News 热议

- **"OpenClaw is changing my life"** — 热帖，讨论 agent 在实际项目中的效果。老手（15年开发者）认可 openclaw-like agents 是未来方向
- **Sentiment 转变讨论** — 社区对 Anthropic 的不满：禁止 OpenClaw 用户、第三方 harness 限制、reasoning effort 下降、用量大幅缩减（有人同一任务 Claude vs Codex 花费差 21x）
- **核心共识：** workflows > demos, verification > autonomy, skills > prompts

### Reddit 精选

- **r/ClaudeAI** — Claude Code 通过 Skill 全面操控 X/Twitter（无需月费订阅）
- **r/openclaw** — 用户讨论 Claude 退出后切换到其他模型的痛点（Gemini/GPT 在 OpenClaw 中表现不如 Claude）

### 实战技巧

1. **终端内发推工作流：** 用 OpenTweet MCP → Claude Code 读 git commit → 自动生成发布推文
2. **9-Subagent 代码审查：** 自建 9 个 sub-agent 并行审查（社区方案，比 /ultrareview 便宜但需手动配置）
3. **Memory + Dreaming 组合：** 定时 cron 让 agent 回顾 session、自动优化知识库
4. **Auto mode on Pro：** 用 Sonnet 4.6 运行无需频繁点确认，后台安全检查替代权限弹窗

---

## 可靠度标注

- 🟢 高可靠：官方 release notes、Claude Code docs、GitHub PRs
- 🟡 中可靠：第三方博客总结、社区教程
- 🔴 低可靠：无（本次均有来源佐证）

---

*调研时间：2026-06-22 12:00 CST | 搜索轮次：7 | 来源：Tavily API + web_fetch*
