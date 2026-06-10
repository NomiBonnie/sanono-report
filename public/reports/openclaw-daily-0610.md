# OpenClaw + Claude Code 每日调研 — 2026-06-10

> NONO Daily Research | 10 轮搜索 | Tavily + web_fetch

![OpenClaw + Claude Code Daily Intel Infographic](/images/openclaw-daily-0610/infographic.png)

---

## Part 1: OpenClaw 本体

### OpenClaw 2026.6.5-beta.6 发布 (June 9)

🟢 **Parallel Web Search 内置** — Parallel 成为 OpenClaw 第一个内置 web_search provider。支持 `PARALLEL_API_KEY` 自动发现、缓存安全的 session ID、onboarding picker 集成。agent 可以同时发起多个搜索，不再串行等待。  
_来源: [GitHub Releases](https://github.com/openclaw/openclaw/releases), [Releasebot](https://releasebot.io/updates/openclaw), [Facebook 社区](https://www.facebook.com/groups/1577315533418837/posts/1690305688786487)_

🟢 **MCP Tool 容错增强** — MCP tool results 现在自动转换 `resource_link`、`resource`、`audio` 等非标准 block 类型，防止 Anthropic API 返回 400 错误和 session history 被污染。这是一个实际影响生产的修复。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #90710, #90728_

🟢 **Anthropic Extended-Thinking 恢复机制** — prompt-cache 过期或 Gateway 重启后，extended-thinking session 现在能自动恢复，stream start 等待 `message_start` 再继续。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #90667_

🟡 **ClawHub GitHub 仓库直装** — ClawHub skills 现在支持从 GitHub 仓库直接安装，通过 resolved install API 下载 pinned commit，保留安全检查。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #90478_

🟡 **Skill Workshop 完善** — 新增 governed skill 创建/更新路径，文件系统监控优化（避免大 skill tree 耗尽 watcher 上限）。  
_来源: [OpenClaw Docs](https://docs.openclaw.ai/tools/skill-workshop), [Twitter @iamlukethedev](https://x.com/iamlukethedev/status/2062290623122804921)_

🟡 **Matrix 频道改进** — 语音消息预检、线程感知读取/回复、语音和线程流程测试覆盖。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #78016, #90415_

🟡 **Auth 持久化** — Auth profile 迁移到 SQLite，官方 npm plugin 安装记录保留 trusted pins。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #89102_

🟢 **版本号切换** — 从此版本起使用 YYYY.M.PATCH 月度补丁编号（floor: 2026.6.5）。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw)_

### 安全与平台
🟡 **Agent/Tool 循环收紧** — MCP lease timestamps、prompt-cache tool names、local tool catalogs 等多维度收紧，减少隐性重试和不安全暴露。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #91124, #91233_

🟡 **macOS Node 模式修复** — 不再静默从健康的直连 Gateway session 重新连接，减少 companion app session churn。  
_来源: [Releasebot](https://releasebot.io/updates/openclaw) #90668_

---

## Part 2: Claude Code 本体

### Claude Fable 5 — Mythos-class 公开发布 🔥🔥🔥 (June 9)

🟢 **头条**: Anthropic 发布 **Claude Fable 5**，一个 "Mythos-class" 模型，首次面向所有 enterprise 客户和付费订阅者开放。4 月发布的 Mythos 因安全顾虑仅限少量用户，现在通过新增安全分类器（cybersecurity、biology 等高风险领域屏蔽）实现了公开发布。  
_来源: [CNBC](https://www.cnbc.com/amp/2026/06/09/anthropic-mythos-claude-fable-5.html), [WSJ](https://www.wsj.com/tech/ai/anthropic-claude-fable-ai-model-f41fb5d7), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/claude-fable-5-review-what-the-new)_

**关键特性**:
- 能力超过 Anthropic 此前所有公开模型
- 在长时程、多轮任务上表现突出
- 新的 fallback 安全机制：遇到高风险领域自动降级
- token 消耗偏高（by design）
- Claude Code v2.1.170 即可使用

🟡 **社区反馈** (Lenny's Newsletter): 执行偏保守，在需要大胆决策的场景不如预期；多 agent 编排表现优秀；产品图谱/架构设计能力强悍。  
_来源: [Lenny's Newsletter](https://www.lennysnewsletter.com/p/claude-fable-5-review-what-the-new)_

### Claude Code v2.1.170 (June 9)
🟢 修复 VS Code 集成终端或继承环境变量的 shell 中 session transcript 不保存的 bug。  
_来源: [Claude Code Changelog](https://code.claude.com/docs/en/changelog)_

### Claude Code v2.1.169 (June 8) — 重大功能更新
🟢 **Safe Mode** (`--safe-mode` / `CLAUDE_CODE_SAFE_MODE`) — 禁用所有自定义配置（CLAUDE.md、plugins、skills、hooks、MCP servers）用于故障排除。  
🟢 **`/cd` 命令** — 在不破坏 prompt cache 的情况下切换工作目录。  
🟢 **`disableBundledSkills` 设置** — 隐藏内置 skills/workflows/slash commands。  
🟢 **`fallbackModel` 设置** (v2.1.166) — 最多配置 3 个备用模型，主模型过载时按序尝试。  
🟢 **`/workflows` 命令改进** — 现在即使 turn 正在进行中也能立即打开。  
_来源: [Claude Code Changelog](https://code.claude.com/docs/en/changelog)_

**重要修复**:
- Background sessions 在 `claude agents` 中不再在 Claude Code 更新后丢失运行任务
- 修复 pinned background sessions 每分钟重生一次的 bug
- Enterprise managed MCP policies 在重连时正确执行
- Remote sessions MCP 服务器连接在 egress proxy 下正常工作
- 跨 session 消息加固：通过 `SendMessage` 中继的消息不再携带 user 权限

### ⚠️ June 15 计费变更 — 即将到来
🟢 **Agent SDK 分池计费**: 6 月 15 日起，Agent SDK、`claude -p`、GitHub Actions、第三方 App 用量将从订阅池独立出来，使用专用 "Agent SDK Credit"。用完后按标准 API 费率计费或暂停。  
- Pro ($20/月): 有限 Agent SDK credit
- Max 5x ($100/月): 更多 credit
- Max 20x ($200/月): 最多 credit
- 交互式用量不受影响

_来源: [Prove AI](https://proveai.com/blog/anthropics-agent-sdk-credit-june-15), [alexdunlop.com](https://www.alexdunlop.com/writing/claude-code-pricing-2026-autonomous-credits), [apiyi.com](https://help.apiyi.com/en/anthropic-claude-subscription-agent-sdk-billing-split-june-2026-en.html)_

**对 Sam 的影响**: 如果 OpenClaw 通过 Claude 订阅认证运行 agent，6/15 后 autonomous 用量将消耗独立 credit。建议检查当前认证方式。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### Dynamic Workflows — Claude Code 新编排原语 (May 28 研究预览)
🟢 当 prompt 中包含 "workflow" 关键词或 `/effort ultracode` 时，Claude Code 不再简单回复，而是编写并执行编排脚本。与 Subagents、Skills、Agent Teams 并列为第四种协作原语。  
- **规模**: 单次运行可调度数十到数百个 agent（Subagents 只支持几个）
- **控制流**: 由脚本决定（确定性），不是 LLM 逐轮决定
- **内置 workflow**: `/deep-research` — 多角度 web 搜索 + 交叉验证 + 引用报告
_来源: [Claude Code Docs](https://code.claude.com/docs/en/workflows), [Ken Huang Substack](https://kenhuangus.substack.com/p/claude-code-orchestration-dynamic), [MindStudio Blog](https://www.mindstudio.ai/blog/claude-code-workflows-command-dynamic-multi-agent)_

🟡 **LangChain 社区移植** — `langchain-dynamic-workflow` (MIT) 将 Claude Code 的 Dynamic Workflows 移植到 LangChain Deep Agents，确定性脚本控制 + 隔离 context。  
_来源: [LangChain Forum](https://forum.langchain.com/t/re-implement-claude-codes-dynamic-workflow-using-langchian-deepagents/3846)_

### Microsoft Conductor — 多 Agent YAML 编排 (May 14)
🟢 Microsoft 开源的 CLI 工具，YAML 定义 multi-agent workflows，确定性路由图。支持 GitHub Copilot 和 Anthropic Claude 作为 provider。  
_来源: [Microsoft Open Source Blog](https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows)_

### Parallel Web Search — OpenClaw 内置 + ClawHub 4 Skills
🟡 Parallel 在 ClawHub 上发布 4 个官方 skill: web search、content extraction、deep research、data enrichment。同时作为 OpenClaw 2026.6.5 内置 provider。  
_来源: [Parallel Docs](https://docs.parallel.ai/integrations/clawhub)_

### OpenClaw MCP 生态
🟡 **Skills vs MCP Servers 辩论** — 社区讨论哪个是更好的抽象层。Skills = 高级指令集（Markdown driven），MCP = 标准化工具协议（JSON-RPC）。两者互补而非替代。  
_来源: [sneekes.app](https://sneekes.app/posts/skills-vs-mcp-servers-and-the-future-of-personal-ai-agents)_

🟡 **OpenClaw MCP Server** — OpenClaw 自身可作为 MCP server (`openclaw mcp serve`)，向 Claude/Cursor 等暴露内置工具。  
_来源: [GitHub Issue #53215](https://github.com/openclaw/openclaw/issues/53215), [OpenClaw Docs](https://docs.openclaw.ai/cli/mcp)_

### 安全生态
🔴 **OWASP Top 10 for Agentic Applications (2026)** — 首个全球同行评审的自主 AI agent 安全风险框架。OpenClaw 的 skill 生态被 Lakera 称为 "Lord of the Flies Problem"：快速增长 + 缺乏治理 = 运营风险。  
_来源: [Lakera Blog](https://www.lakera.ai/blog/openclaw-skills-and-the-lord-of-the-flies-problem), [MintMCP](https://www.mintmcp.com/blog/openclaw-works-architecture-skills-security)_

---

## Part 4: 🎮 社区玩法 / 小技巧

### Lawrence Chen 的 Claude Code Hacks（913K 浏览）
🟢 "Every Claude Code Hack I Know" — Twitter 热门帖，核心观点: 不需要 IDE，纯终端 + Claude Code 就够了。  
_来源: [Twitter @lawrencecchen](https://x.com/lawrencecchen)_

### OpenClaw + Twitter 自动化
🟡 通过 ClawHub skill 或 OpenTweet MCP server 实现 Twitter 全自动化：发推、回复、点赞、转发、关注、私信、搜索、数据提取、抽奖活动、账号监控。  
_来源: [GitHub awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/x-twitter-automation.md), [OpenTweet Blog](https://opentweet.io/blog/claude-opentweet-vs-openclaw-twitter-automation)_

### GTM 自动化 — 替代 $200K 岗位
🟡 Twitter 热门帖: 用 OpenClaw 替代 GTM hire — LinkedIn 互动挖掘 → 定向触达 → 自动跟进。4900 粉丝，1367 赞，互动率超常规。  
_来源: [foxessellfaster.com](https://www.foxessellfaster.com/blog/openclaw-use-cases-directory)_

### 实用技巧
- **`--safe-mode` 排错**: 遇到 agent 异常，加 `--safe-mode` 排除自定义配置影响
- **`/cd` 免重启**: 切换项目目录不用开新 session
- **`fallbackModel` 链**: 配置 3 级模型 fallback，高峰期不断流
- **Claw Control 看板**: 第三方实时 Kanban 看板监控 OpenClaw agent 状态
- **Claude Code `/deep-research`**: 内置深度研究 workflow，自动搜 + 交叉验证 + 出引用报告

### Hacker News 讨论热点
🟡 "OpenClaw is changing my life" (340 points, 513 comments) — 部分开发者称 workflow 变革性提升，部分人质疑需要极详细指令才有效，ROI 存疑。  
_来源: [HN](https://news.ycombinator.com/item?id=46931805)_

🟡 HN 热议: 多 agent 并行工作流仍有学习曲线，"middle manager agent 给下属写 prompt" 的吐槽引起共鸣。  
_来源: [HN](https://news.ycombinator.com/item?id=46838946)_

---

## 📊 Sam 行动建议

1. **🔴 June 15 计费变更**: 检查 OpenClaw 的 Claude 认证方式。如果通过订阅认证，autonomous agent 用量 6/15 后独立计费。
2. **🟢 Claude Fable 5**: 考虑在 OpenClaw 中试用 Fable 5 做复杂多轮任务（如 deep research）。注意 token 消耗偏高。
3. **🟢 OpenClaw 更新**: 当前版本 2026.6.5 值得更新，Parallel 内置搜索 + MCP 容错修复有实际价值。
4. **🟡 Dynamic Workflows**: `/workflows` 和 `/deep-research` 可以考虑在 NOMI 的日常调研中试用。
5. **🟡 Safe Mode**: 下次 agent 行为异常时用 `--safe-mode` 排查——直接排除自定义配置干扰。

---

*搜索轮次: 10 | 来源: Tavily + web_fetch | 可靠度标注: 🟢高 🟡中 🔴低*  
*报告生成时间: 2026-06-10 12:00 CST*
