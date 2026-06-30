# OpenClaw + Claude Code 每日调研 — 2026-06-30

![Infographic](/images/openclaw-daily-0630/infographic.png)

## Part 1: OpenClaw 本体

### 当前版本：2026.6.10（稳定）/ 2026.6.11-beta.1（测试）

**近期重要修复与改进：** 🟢
- `fix(ollama)`: 远程/云 base URL 跳过自动发现（PR #93956）
- `fix`: `/status` 对 pinned model session 不再过于冗长（PR #95797）
- `fix`: npm 插件更新不再中断运行中 gateway imports（PR #95589）
- `feat(cli)`: 新增 `openclaw sessions compact` 命令（PR #91378）
- `fix(gateway)`: plugin finalization 期间保留活跃 runs（PR #92746）
- `fix(agent)`: source message tool replies 后正确 continue（PR #92343）
- Session identity 注入 runtime prompt（PR #92468）

**升级建议：** 生产环境保持 2026.6.10。升级前重点烟雾测试：provider auth、cron failure alerts、channel delivery、media handling。

---

## Part 2: Claude Code 本体

### 🔥 本周重点：Dynamic Workflows + Artifacts（Week 25, Jun 15-19）

**Dynamic Workflows（研究预览）** 🟢
- 可用于 CLI、Desktop、VS Code 扩展
- 支持 Max、Team、Enterprise 计划
- 也可通过 API、Amazon Bedrock、Vertex AI、Microsoft Foundry 使用
- 核心能力：自动编排多 agent 并行工作，无需手写 orchestration loop
- 实测案例：50+ agents 并行处理 70+ 文档 data room，30 分钟完成尽职调查报告

**Artifacts（Beta）** 🟢
- 从 session 输出发布为 claude.ai 上的实时可分享页面
- 适合：PR walkthrough + diff 标注、session 数据构建的 dashboard
- 支持 Team 和 Enterprise 计划

**其他 Week 25 更新：**
- Deny/ask 规则支持工具参数匹配：`Tool(param:value)` 语法
- `/config key=value` 可直接从 prompt 设置任何配置
- Auto mode 阻止 destructive git 命令（未主动要求 discard 时）

**模型更新：**
- Opus 4.8 + Haiku 4.5 已在 Messages API 可用
- Claude Code Safe Mode、`/cd` 命令、Opus 4.8 默认、`/usage` 细分、2x rate limits

**Billing 变更（已暂停）** 🟡
- 原计划 6/15 将 Agent SDK / `claude -p` / GitHub Actions 用量分离计费
- 当天被暂停，目前仍用订阅额度

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 热门 Skills

| Skill | 安装量 | 功能 | Sam 匹配度 |
|-------|--------|------|------------|
| **Skill Vetter** | ~256K | 安装前安全扫描 | ⭐⭐⭐ 已装 |
| **Telegram Notify** | #1 最多下载 | 格式化消息推送 | ⭐⭐⭐ 已装 |
| **Web Search** | 35K+ | 搜索增强 | ⭐⭐⭐ 已有 |
| **Agent Browser** | 11K+ | 网页自动化 | ⭐⭐ 已有 |
| **mcporter** | 高 | MCP 协议桥接（USB-C for agents） | ⭐⭐⭐ 值得关注 |
| **TranscriptAPI** | 中 | YouTube 转录 + 摘要 | ⭐⭐ 已有类似 |

**安全提醒：** 独立安全研究发现 2026 初 ClawHub 约 1/5 插件存在恶意行为，已大规模清理但仍需警惕。Skill Vetter 必装。🔴

### MCP Servers 推荐（2026 热门）

| Server | 用途 | 适合 Sam |
|--------|------|----------|
| **Firecrawl MCP** | 搜索 + 抓取一步完成 | ⭐⭐ 已有 web_fetch |
| **GitHub MCP** | Repo/Issue/PR/CI 上下文 | ⭐⭐⭐ |
| **Context7** | 实时文档查询 | ⭐⭐ |
| **Playwright MCP** | 浏览器自动化 | ⭐⭐ 已有 browser |
| **Notion MCP** | 数据库/页面操作 | ⭐⭐ 已有 skill |
| **Taskade MCP** | 工作区集成 | ⭐ 不需要 |

### Claude Code Skills 生态

- `inference-sh/twitter-automation` — CLI Twitter 自动化，含 AI 图片/视频发布
- OpenTweet MCP Server — Claude Code 内直接发推/查分析
- Claude Code Skills Generator（Firecrawl 构建）— 自动生成 skill

---

## Part 4: 🎮 社区玩法 / 小技巧

### Dynamic Workflows 实战技巧 🔥

1. **Data Room Due Diligence** — 50+ agents 并行审查 70 份文档，自动交叉验证，30 分钟出报告（Mark Kashef 实测）
2. **Rust Lifetimes 自动推理** — workflow 自动为每个 struct field 标注正确生命周期
3. **并行 Code Review** — 每文件双独立 reviewer，spawn 数百 agents

**触发方式：** `workflow` 关键词 / `/workflows` 命令 / `ultracode` 模式

### 开发者 Workflow 分享

- **AI Developer Workflow 2026**（developersdigest.tech）：Claude Code 为主力编码 agent + Cursor 做 review 层 + vault 做知识库
- **Twitter 自动化实战**：OpenTweet MCP + Claude Code，commit 后自动发推

### Week 21 回顾

- Auto mode 登陆 Pro 计划（支持 Sonnet 4.6）
- `/usage` 按 skill/subagent/plugin/MCP server 细分用量
- `/code-review` 新命令：报告正确性 bug
- Background sessions 可在 `/resume` 中查看

---

## 信息可靠度

- 🟢 OpenClaw 版本信息（来自官方 changelog + releasebot.io）
- 🟢 Claude Code Week 25 更新（来自 code.claude.com 官方文档）
- 🟢 Dynamic Workflows（Anthropic 官方博客 + InfoQ 报道）
- 🟡 ClawHub 安装量数据（第三方博客汇总，可能有时效差异）
- 🟡 Billing 暂停（BuildThisNow 报道，非官方一手源）

---

*报告生成时间：2026-06-30 12:00 CST*
