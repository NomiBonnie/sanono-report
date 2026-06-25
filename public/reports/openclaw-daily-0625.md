# OpenClaw + Claude Code 每日调研 — 2026-06-25

## Part 1: OpenClaw 本体

### OpenClaw v2026.6.5 发布 🟢
- **内置并行搜索**：Agent 可以同时发起多个搜索请求，速度显著提升
- **更安全的 channel 回复**：修复了多个 channel session 恢复和 cron delivery 的问题
- **xAI 实时语音 PR (#91308)**：支持 xAI 的 realtime voice provider
- **sessions_spawn 嵌入式改进 (#91315)**：子 agent 生成更稳定
- **CLI 新增 `openclaw sessions compact`**：支持从命令行触发 compaction (#91378)
- **Model catalog 隔离**：修复了 opencode-go 的 context window 检测 (#92913)
- **Agent session identity**：运行时 prompt 现在包含 session identity (#92468)

### 关键 PR 动态 🟢
| PR | 内容 |
|---|---|
| #93580 | fix: 保留 cron delivery awareness |
| #94337 | fix(tui): 显示 0 而非 ? |
| #92746 | fix(gateway): plugin finalization 期间保留 active runs |
| #90861 | fix(cli): 通过 MCP 保留 sessions_yield |

### 平台方向
OpenClaw 正从"agent 能不能做事"转向"能不能证明哪个 agent、用哪段 memory、通过哪个 channel、在什么状态下做了什么"。重点：durable session chains, bounded memory search, safer tool surfaces, call-ready voice providers。

---

## Part 2: Claude Code 本体

### Claude Code v2.1.191 (Jun 24) 🟢
最新版本，Jun 24 发布。近期重要更新：

#### Week 24 (Jun 8-12, v2.1.166–v2.1.176)
- **`/cd` 命令**：会话中途切换工作目录，无需重建 prompt cache
- **Sub-agent 可以 spawn sub-agent**：最多 5 层深度的 background chains
- **`--safe-mode`**：禁用所有自定义配置，用于故障排查
- **`fallbackModel`**：配置最多 3 个按顺序尝试的 fallback 模型

#### Week 23 (Jun 1-5, v2.1.158–v2.1.165)
- **Auto mode 支持 Bedrock/Vertex/Foundry**：Opus 4.7/4.8 可用
- **更安全的自动编辑**：`acceptEdits` 模式下写入可执行文件前会提示
- **`/plugin list`**：内联显示已安装插件
- **版本要求**：管理员可限制 Claude Code 版本范围

#### Week 22 (May 25-29, v2.1.150–v2.1.157)
- **Claude Opus 4.8**：Max/Team/Enterprise 默认模型，默认 high effort
- **Dynamic Workflows**：编排数十到数百个 subagent 的脚本
- **Security-guidance plugin**：实时审查代码变更中的安全漏洞
- **Fast mode**：Opus 4.8 下 $10/$50 per MTok

### Anthropic 重大政策：OAuth 禁令 🔴
- **4 月 4 日**：Anthropic 禁止 OpenClaw 等第三方 harness 使用 Claude 订阅的 OAuth token
- **影响**：原本 $20/月 Pro 订阅 → 改为 API 按量计费 ($3/$15 per MTok for Sonnet)
- **6 月 15 日**：原计划进一步限制，但 Anthropic **临时回滚**
- **当前状态**：OAuth 可用于官方 harness (claude -p)，但仍禁止第三方工具直接使用订阅
- **替代方案**：CLI subprocess orchestration（spawn `claude` CLI 进程而非 OAuth 调用）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 协议重大更新 🟢
- **Release Candidate 规范发布 (2026-07-28 预告)**：
  - **无状态协议**：同一 client 可路由到任意 server 实例，无需 session store
  - **Extensions 成为一等公民**：MCP Apps（server 端渲染 HTML UI）、Tasks extension
  - **完整 JSON Schema 2020-12 支持**
  - **三项功能废弃**：按新生命周期政策管理
- **规模数据**：97M+ 月 SDK 下载量，10K+ 活跃公开 server，5800+ servers
- **企业路线图**：审计追踪、SSO 集成、gateway/proxy 模式、配置可移植性

### 热门社区工具
- **CLI Subprocess Orchestration**：绕过 OAuth 禁令的架构方案，spawn 官方 `claude` CLI 进程 🟡
- **Agent Swarm 模式**：OpenClaw 作为编排层，spawn Codex/Claude Code agents，一个人当一个开发团队
- **Security-guidance plugin**：Claude Code 官方安全审查插件

### MCP Servers 动态
- **Playwright MCP Server**：浏览器自动化测试
- **Selenium MCP Server**：Web 自动化
- **Cypress MCP Server**：前端测试
- **MCP Apps**：Server 端渲染交互式 HTML UI（sandbox iframe）

---

## Part 4: 🎮 社区玩法 / 小技巧

### "不要 prompt，要写 loops" 🟢
Boris（Claude Code 创始人）的核心理念在 Twitter 爆火：
> "I don't prompt Claude anymore. I write loops — and the loops do the work."
Peter Steinberger（OpenClaw 创始人，现就职 OpenAI）也发文：
> "You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents."

**实操建议**：设计 loop 脚本而非单次 prompt → 用 dynamic workflows 自动拆解大任务

### OpenClaw 50+ Best Practices 热帖 🟢
@aiedge_ 在 Twitter 发布，388K+ views，涵盖三个月 100+ 内容来源的精华提炼

### Agent Swarm 实战案例 🟡
@elvissun 的帖子 5.4M views：OpenClaw 作为编排层 + Codex/Claude Code Agent Swarm = 一个人的开发团队

### 2026 Agent 年终盘点 🟡
Riley Brown + Rasmic 对谈，覆盖：
- Q1 属于 Anthropic（Opus 4.5）
- Codex vs Claude UX 战争
- SpaceX 收购 Cursor 的传闻
- OpenClaw = Agentic Personal Computer
- Memory Layer 决定胜负
- Agent Commerce 新赛道

### HN 社区情绪 🔴
Hacker News 上对 Anthropic 信任度下降：
- OAuth 禁令引发用户不满
- 降低 reasoning effort 的传闻
- 相同任务 Claude vs Codex 花费差 21 倍
- 部分用户转向 GPT 5.5 Codex 或 DeepSeek

---

**调研完成时间**：2026-06-25 12:00 CST
**搜索轮次**：8 轮（Tavily × 7 + web_fetch × 1）
**可靠度标注**：🟢 官方/一手源 | 🟡 社区/二手源 | 🔴 传闻/待验证


![OpenClaw & Claude Code Daily Infographic](/images/openclaw-daily-0625/infographic.png)
