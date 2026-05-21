# OpenClaw + Claude Code 每日调研 — 2026-05-21

## Part 1: OpenClaw 本体

### 最新更新亮点 🟢

OpenClaw 近期推出一系列平台级更新：

- **安全审计抑制** — 新增 `security.audit.suppressions` 配置，可将已确认的审计发现从活跃摘要中隐藏，同时保留在 JSON 输出中。(#76949)
- **Subagent 交接改进** — 委派任务和子代理完成时标记为"待父级审核"，要求发起者验证结果后才能标记完成。(#78985)
- **音乐生成 Provider** — 新增 fal 和 OpenRouter 音乐生成 provider，支持 MiniMax/ACE/Stable Audio 端点和 OpenRouter Lyria 音频输出。
- **Control UI 改进** — Overview 卡片和 Chat 头部显示 provider quota 使用情况，修复 stale 进度状态。(#82647)
- **Mac 远程配置** — `openclaw-mac configure-remote` 支持预配置，跳过已完成的 onboarding，支持 LAN/Tailnet 直连 URL。
- **xAI Grok OAuth** — SuperGrok 订阅者可通过 OAuth 登录使用 xai/* 模型，无需 XAI_API_KEY。
- **Cron 增强** — `openclaw cron run --wait` 支持超时和轮询间隔控制，`cron.runs --run-id` 精确过滤。(#81929)
- **多语言 Onboarding** — 设置向导支持英文、简体中文、繁体中文。(#80645)
- **Skills 缓存优化** — 热 gateway 轮次中缓存 resolvedSkills，减少冗余 skill snapshot 重建。(#81451)

### 平台趋势 🟢

- OpenClaw 重心正从"炫酷 demo"转向**运维可靠性**：心跳节奏、语音稳定性、scoped 审批、auth 持久化、provider stream drain
- 未发布但值得关注的平台工作：**可插拔沙箱后端**、GitHub `main` 安装/更新支持、**Firecrawl 驱动的搜索和抓取工具**、`/btw` 快速侧问流程、更严格的健康监控
- 中文本地化持续推进，对 Sam 的使用场景直接利好

---

## Part 2: Claude Code 本体

### Week 20 (May 11-15) 重磅更新 🟢

**1. Agent View（Research Preview）** ⭐
- `claude agents` 命令打开统一面板，一屏展示所有 Claude Code session
- 可见哪些在运行、哪些等待输入、哪些已完成
- 支持 attach 到任意 session 查看完整对话，`←` 返回列表
- 后台 session 无需终端也能持续运行
- **Sam 价值：** 多任务并行管理，类似 OpenClaw 的多 agent 面板

**2. /goal 命令** ⭐
- 设定完成条件后，Claude 自动持续工作直到条件满足
- 每轮结束后 fast model 检查条件是否达成，未达成则自动开始下一轮
- **"Run until done" 模式**，无需逐步 prompt

**3. Fast Mode 默认 Opus 4.7**
- Fast mode 默认模型升级到 Opus 4.7
- Opus 4.7 特点：相比前代更 verbose（Anthropic 官方确认的行为特征）

### "Code with Claude" 大会亮点 🟢

- **Dreaming 功能** — Managed Agents 可在 session 间"做梦"，自动审查历史 session 寻找模式
  - 可自动更新 agent 记忆，或由用户审批变更
  - 发现单个 agent 看不到的模式：重复错误、收敛 workflow、团队共享偏好
- **Claude Design** — Anthropic Labs 新产品线
- **Claude Managed Agents 更新** — 企业级 agent 管理平台持续演进

### 质量事件回顾 🟡

- Anthropic 发布 4/23 事后分析，承认 Claude Code 质量报告问题
- 改进措施：更多内部人员使用公开版本（非内测版），改进 Code Review 工具
- 说明 Anthropic 对质量问题采取透明态度

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Server 热门推荐 🟢

| 项目 | 说明 | 适合 Sam? |
|---|---|---|
| **Firecrawl MCP** | 网页抓取+搜索，OpenClaw 即将原生集成 | ⭐⭐⭐ 替代 Tavily 候选 |
| **Composio Twitter MCP** | Twitter 集成，auth 管理自动化 | ⭐⭐ 社交自动化场景 |
| **X Twitter Automation Skill** | 33 个 Twitter 命令，Claude Code 专用 | ⭐⭐ |
| **awesome-openclaw** | 精选资源清单，含 MCP、skills、教程 | ⭐⭐⭐ 参考价值高 |
| **mcp-openclaw-skills** | Go 写的 MCP server，提供 OpenClaw skills 文档和元数据 | ⭐⭐ |

### ClawHub / Skills 动态 🟢

- ClawHub 注册 skill 数量持续增长（"thousands" 级别）
- **Firecrawl 官方推荐 19 个 OpenClaw Skills**：涵盖 SEO、数据抓取、内容生成等
- ClawHub 插件支持**一键安装新 agent 能力**，无需手动配置
- OpenClaw 2026.3 支持 Claude/Codex/Cursor bundle，生态互通性增强

### Claude Code 生态 🟢

- **Codex vs Claude Code 对比**（Morph 发布）：Subagents、Benchmarks、Limits 全面对比
- Claude Code **remote control** 能力增强 — 可远程控制 session
- Plugin SDK 持续迭代，hooks 和 plugin 选项更丰富

---

## Part 4: 🎮 社区玩法 / 小技巧

### 热门讨论 🟢

**"OpenClaw is changing my life"** — HN 热帖
- 用户分享 OpenClaw 改变工作流的真实案例
- 评论区有大量实战配置技巧

**Claude Code "run until done" 模式** — Reddit r/ClaudeAI 热帖
- `/goal` 命令让 Claude Code 自动执行到完成
- 社区反馈：适合长时间编码任务、测试修复循环

### ⚠️ 安全警告 🔴

**"If you're running OpenClaw, you probably got hacked"** — r/cybersecurity 帖子
- 提醒 OpenClaw 用户检查安全配置
- **Sam 行动建议：** 确认我们的 OpenClaw 实例安全配置是否最新，考虑运行 `healthcheck` skill

### 争议话题 🟡

**"Claude Code refuses requests if commits mention OpenClaw"** — HN 4/30 热帖
- 声称 Claude Code 对 OpenClaw 相关 commit 有策略限制
- 后续讨论（5/1）持续发酵
- **可信度存疑**，可能是误解或临时 bug，但值得关注

### 实用技巧

- **Agent View + /goal 组合**：开 3 个后台任务（bug fix、PR review、flaky test），只在需要时介入
- **OpenClaw cron + wait**：自动化任务可用 `--wait` 阻塞等待结果，适合 CI/CD 集成
- **xAI Grok OAuth**：SuperGrok 用户可免 API key 使用 Grok，降低入门门槛

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw 平台更新 | 🟢 高 | 官方 changelog、releasebot.io |
| Claude Code W20 更新 | 🟢 高 | 官方文档 code.claude.com |
| Dreaming 功能 | 🟢 高 | Ars Technica、InfoQ、ZDNet |
| 安全警告 | 🟡 中 | Reddit r/cybersecurity（需核实） |
| Claude Code 拒绝 OpenClaw | 🟡 中 | HN 讨论（可能是误解） |
| MCP/Skills 生态 | 🟢 高 | 官方页面、GitHub |

---

*调研时间：2026-05-21 12:00 CST | 搜索轮数：8 | 来源：Tavily API + web_fetch*

---

## 📊 信息图

![OpenClaw + Claude Code Daily Intel Infographic](/images/openclaw-daily-0521/infographic.png)
