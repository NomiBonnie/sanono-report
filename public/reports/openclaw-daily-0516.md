![OpenClaw + Claude Code Daily Intel Report](/images/openclaw-daily-0516/infographic.png)

# OpenClaw + Claude Code 每日调研 — 2026-05-16 (Saturday)

## Part 1: OpenClaw 本体

### 🆕 OpenClaw 2026.5.16-beta.1 — 今日发布
🟢 可靠度：高（GitHub 官方 release）

**主要变更：**

1. **多语言 Setup Wizard** — CLI 安装向导和频道配置流程现在支持英文、简体中文、繁体中文 (#80645)。对中文用户是重要的易用性提升。

2. **Skill 缓存优化** — hydrated resolvedSkills 在 warm gateway turns 间缓存，通过 redacted effective config 做 key，避免重复快照构建，同时不跨越 config-gated skill 边界 (#81451)。性能优化。

3. **Telegram 群聊静默模式** — 新增 `messages.groupChat.ambientTurns: "room_event"` 选项，让 always-on 的群聊 agent 默认安静，只通过 message tool 主动发言 (#81317)。对运行 always-on agent 的用户很实用。

4. **MCP Server Scoping for Codex** — 可以通过 `mcp.servers..codex.agents` 指定 MCP server 只对特定 agent id 可见，并支持 `codex.defaultToolsApprovalMode`（auto/prompt/approve）(#82180)。

5. **安全加固** — 拒绝伪造 MIME header 的文件（sniff bytes before trusting MIME）、reject 畸形 plugin metadata、provider error 标准化等。

**修复要点：**
- Cron 隔离运行现在正确使用配置的 subagent model fallback
- 畸形 auth profile/cron state/session store 不再导致崩溃
- Trajectory export 跳过畸形 JSONL 行而非整体崩溃

### 📊 上一个稳定版 2026.5.12 回顾
- WhatsApp、Slack、Amazon Bedrock 等依赖拆分为按需安装
- Telegram polling 隔离 worker + 持久本地 spool
- Codex/ACP 路径加固

---

## Part 2: Claude Code 本体

### 🆕 Claude Code v2.1.143 — May 15 发布
🟢 可靠度：高（官方 changelog）

**重要新功能：**

1. **Plugin 依赖强制执行** — `claude plugin disable` 现在会拒绝禁用有其他 plugin 依赖的 plugin，并给出 disable-chain 提示；`claude plugin enable` 自动启用传递依赖。

2. **Plugin Marketplace 成本预估** — `/plugin` 浏览面板现显示每轮和每次调用的预估 token 成本。

3. **Worktree 灵活模式** — 新增 `worktree.bgIsolation: "none"` 设置，让 background session 直接编辑 working copy 而不创建 worktree。

4. **`claude agents` 增强** — 支持 `--add-dir`、`--settings`、`--mcp-config`、`--plugin-dir`、`--permission-mode`、`--model`、`--effort` 等参数，统一管理 dashboard 和 background sessions。

5. **Background Session 改进** — 唤醒后保持 model 和 effort level 设置、`/bg` 保留 MCP 和 plugin 配置。

**重要修复：**
- Stop hooks 循环 block 8 次后自动终止（可配置 `CLAUDE_CODE_STOP_HOOK_BLOCK_CAP`）
- Worktree cleanup 不再 fallback 到 `rm -rf`，防止丢失 gitignored 文件
- macOS background job 在 ~/Documents 等目录的权限问题修复
- Windows Terminal 粘贴和渲染问题多项修复

### 🔥 Anthropic Dev Day 重大发布 (May 6-7)
🟢 可靠度：高（9to5Mac, Ars Technica, Business Insider 多家确认）

1. **Dreaming** — Claude Managed Agents 新能力，在 session 间"做梦"回顾过去的交互，发现模式和反复出错的地方，提炼出精炼的 memory。一家法律公司使用后任务完成率提升约 6 倍。

2. **Outcomes** — 让你定义什么算"成功"，agent 据此评估自己的工作质量。

3. **Multi-Agent Orchestration** — 多 agent 协同工作的原生支持。Netflix 已经在其平台团队部署了多 agent 编排。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### GitHub 热门项目

1. **VoltAgent/awesome-openclaw-skills** ⭐ 48.7k
   - 最全的 OpenClaw skill 目录，涵盖 self-hosted、security、gaming 等分类
   - 🟢 安全可靠，社区维护

2. **Copilot/Claude Code → OpenClaw 迁移指南** (GitHub Gist)
   - 背景：GitHub Copilot 6月1日起改为 usage-based billing，价格暴涨
   - 对比：Light dev Copilot ~$50/mo vs OpenClaw $0-97/mo flat
   - 🟡 第三方 gist，数据待验证

### MCP 生态动态

3. **GitHub MCP Registry** — GitHub 推出官方 MCP Registry，标准化 MCP server 发现和分发
   - 🟢 官方推动，意义重大

4. **MCP 2026 路线图重点** — 4 大企业级缺口待填：
   - 结构化审计和可观测性（接入 SIEM/APM）
   - 企业管理的 SSO 集成认证
   - Gateway/proxy 模式（auth 传播 + session 亲和）
   - 跨客户端配置可移植性

5. **Claude Code Hooks** — 18+ hook 类型，包括 pre-session injection 和 post-compaction hooks（compaction 后重新注入 agent 身份）。对我们的多 agent 系统很有参考价值。

6. **Claude Code Agent Teams** — 可以设置 manager agent 委派给并行 worker agents。实测：3 个并行 sub-agent 同时构建一个 5 页网站。

### Skills & Tools

7. **skills.sh by Vercel** — 统一的 skill 发现和安装平台
   - 🟡 需要进一步调查安全性

8. **Top 100 OpenClaw Skills (O-mega.ai)** — 完整排名，从 15 个 native tools 到 13,000+ 候选 skills
   - 🟡 第三方排名，参考价值

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 热门讨论

1. **Claude Code 用于配置 OpenClaw** — 社区流行用 Claude Code 来设置和调试 OpenClaw 配置，形成"AI 配置 AI"的 workflow。Claude Code 可以直接读取 OpenClaw 官方文档、编写系统配置、测试部署，出错了自动循环修复。

2. **Post-Compaction Identity Hooks** — 社区分享如何用 pre-session 和 post-compaction hooks 保持 agent 在 context compression 后不丢失身份。对我们的 NOMI/NONO 系统直接可用。

3. **Claude Code Routines** — no-code 方式自动化日常工作的新模式，非技术用户也能上手。

4. **Tokenmaxxing 现象** — Amazon 员工因压力大量使用 AI tools 以刷 token 使用量，引发关于 AI 使用效率的讨论。

### 💡 实用技巧

5. **Agent Snitch (VS Code 插件)** — 可视化显示所有正在运行的 sub-agents，方便管理 agent teams。

6. **`/btw` Side-Question Flow** — Claude Code 新增快速侧问功能，不中断当前 session context。

### 📈 趋势洞察

> "The market is moving from impressive agents to governable agents." — OpenClaw Updates

从 Google AI Agent Trends 2026 报告到 GitHub MCP Registry，行业共识是：agent 需要清晰的工具合约、本地化入门、安静的协作模式、持久的通道恢复、可验证的运行记录。"可治理性"比"炫酷演示"更重要。

---

*调研完成：2026-05-16 12:10 CST | 搜索轮次：7 | 来源：Tavily API + web_fetch*
