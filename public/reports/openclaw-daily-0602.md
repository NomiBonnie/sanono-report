# OpenClaw + Claude Code 每日调研 — 2026-06-02

![Infographic](/images/openclaw-daily-0602/infographic.png)

---

## Part 1: OpenClaw 本体

### 🆕 OpenClaw 2026.6.1 发布（Pre-release）🟢

昨天（6月1日）发布了 **2026.6.1** pre-release，主要是稳定性和可靠性更新：

- **Agent 恢复增强**：中断的 tool call、过期 session binding、compaction handoff、media delivery 重试等场景恢复更干净
- **Channel 稳定性**：Telegram、WhatsApp、iMessage、Slack、Discord、Teams、Google Chat/Meet、iOS realtime Talk 全面加固
- **Provider/Plugin 超时控制**：timer、retry、OAuth 生命周期、media 下载、本地服务探测等路径全部加了上限，防止 hang
- **Skill/Plugin 加载优化**：处理 stale disabled snapshot 和 loader 失败更清晰，channel turns 避免 disabled SecretRefs
- **新功能**：Workboard、SecretRef plugin manifests、hosted iOS push relay、Copilot/Tokenjuice 集成

**上一个 stable：2026.5.20**

> 💡 **Sam 关注点**：2026.6.1 的 agent recovery 和 compaction handoff 改进直接关系到我们日常使用的稳定性。建议等 stable 后升级。

---

## Part 2: Claude Code 本体

### 🔥 Claude Code 2.1.154 + Opus 4.8 发布 🟢

上周（5月28日）的重磅更新，**44项变更**，三大核心：

#### 1. Claude Opus 4.8 模型
- 新的顶级模型，默认 effort=`high`
- **Adaptive Thinking**：Claude 自主判断是否需要推理，替代手动 thinking 模式
- 支持 mid-conversation system messages
- Refusal stop details（拒绝时给出详细原因）
- 更低的 prompt cache 最小值
- GitHub Copilot 已同步上线（15X premium 倍率至 6/1）

#### 2. Dynamic Workflows（动态工作流）🔥🔥
- Claude 自动编写 JS 编排脚本，协调数十到数百个 sub-agent
- 中间结果存在脚本变量中，实现真正的多 agent 协作
- Twitter 热议：被称为"2026 年 Claude Code 最重要的创新"（@dickson_tsai）
- **注意**：有 Reddit 用户反映 4.8 不配合 dynamic workflows 时体验反而下降

#### 3. 安全修复
- 危险路径阻断 gap 修复
- 数据外泄检测增强
- `CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE` 于 6/1 废弃

> 💡 **Sam 关注点**：Dynamic Workflows 对我们的 sub-agent 使用模式有直接影响。Opus 4.8 adaptive thinking 可能减少 token 消耗。

---

### Claude Managed Agents 新功能（5月初发布）🟢

- **Dreaming**：Agent 在 session 间自动回顾历史，发现模式并自我改进（research preview）
- **Outcomes**：定义成功标准，让 agent 知道什么算"做完了"
- **Multiagent Orchestration**：lead agent 分解任务，委派给有独立 model/prompt/tools 的 specialist agents
- Harvey（法律 AI 公司）已在生产环境使用 dreaming

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP & Skills 生态

| 项目 | 说明 | 匹配度 |
|---|---|---|
| **Fastio MCP Skill** (dbalve/fast-io) | 19 个文件管理工具，一键安装 | ⭐⭐ |
| **Brave Search Skill** (steipete/brave-search) | 搜索能力封装 | ⭐⭐ |
| **GitHub Skill** (steipete/github) | GitHub 操作封装 | ⭐⭐⭐ |
| **Slack Skill** (steipete/slack) | Slack 集成 | ⭐⭐⭐ |
| **Playwright MCP** | 浏览器自动化 | ⭐⭐ |

### 安全警报 🔴

**AI Agent 供应链安全事件回顾**（cyberdesserts.com 总结）：
- 2月事件：Claude Code RCE（通过仓库 config 文件）、1,184 个恶意 skill 污染 marketplace、数千 MCP server 无认证暴露
- **行动建议**：轮换 `~/.openclaw/credentials/` 中的 API key，检查已安装 skill 来源

### 社区热门工具

- **TaskFlow**：OpenClaw 内置的持久化工作流引擎，@calvinnwq 分享已集成到编码 pipeline
- **Claude Code + Whisper + Tailscale + iOS SSH**：@stevegraham 的移动编码 workflow，随时随地 ship code

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter 热帖精选

1. **@dickson_tsai**：Dynamic Workflows 是 2026 最重要的 Claude Code 创新 — Claude 自动写编排脚本，决定阶段、sub-agent 和 prompt
2. **@stevegraham**：Claude Code + Whisper + Tailscale + iOS SSH = 随时随地 ship code
3. **@caelanhuntress**：6/19 举办 OpenClaw 自动化 webinar（NZ/AU 时区）
4. **@BrandonGleklen**：试用 OpenClaw 浏览器自动化填 TurboTax 表单 — 多步骤 wizard 太慢，但概念验证有趣
5. **@alex_prompter**：分享 OpenClaw blueprints 和 Claude workflow prompts 模板

### Reddit 精选

- r/ClaudeCode：[为什么 4.8 不搭配 dynamic workflows 感觉反而变差了](https://www.reddit.com/r/ClaudeCode/comments/1tt8mxx/) — 4.8 的高 effort 默认值在简单任务上过度消耗 token
- r/openclaw：Windows 用户抱怨 2026.4.23 以来稳定性下降

### 实用技巧

- **Opus 4.8 省 token**：对简单任务手动设 effort=`low`，adaptive thinking 在复杂任务才有价值
- **Dynamic Workflows 最佳实践**：让 Claude 自己决定分几个阶段，不要硬编码 agent 数量
- **OpenClaw Skill 安全**：安装前必须审查来源，2月供应链事件证明这不是多余的

---

*调研时间：2026-06-02 12:00 CST | 搜索轮次：7 | 来源：Tavily + GitHub + Twitter + Reddit + Anthropic Docs*
