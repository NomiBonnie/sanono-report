# OpenClaw + Claude Code 每日调研 — 2026-05-05

![OpenClaw + Claude Code Daily Digest Infographic](/images/openclaw-daily-0505/infographic.png)


---

## Part 1: OpenClaw 本体

### 🟢 OpenClaw 2026.5.3 发布（2026-05-04）

昨天刚发的新版本，重点更新：

**新功能：**
- **内置 file-transfer 插件** — 新增 `file_fetch`、`dir_list`、`dir_fetch`、`file_write` 工具，支持在配对节点上进行二进制文件操作。默认按节点路径策略拒绝，需运维审批。拒绝符号链接遍历（可选开启），单次传输上限 16MB。
- **`/steer <message>` 命令** — 在当前运行中插入方向调整，无需启动新 turn。队列无关的即时干预。
- **`/side` 命令** — `/btw` 的文本别名，用于侧问。
- **统一流式进度** — `streaming.mode: "progress"` 在 Discord/Telegram/Matrix/Slack/Teams 统一展示自动状态标签。

**安全与稳定性：**
- 官方插件安装/卸载/更新路径全面加固，外部化插件表现得像一等公民
- Gateway 启动加速 — 懒加载插件发现、cron、schema、shutdown、sessions、model metadata
- `doctor --fix` 可修复遗留配置（如 `agents.defaults.llm`）即使有其他验证问题
- 无效配置不再自动恢复，失败关闭（fail closed），修复交给 `doctor --fix`
- WhatsApp Channel/Newsletter 目标支持
- 修复 macOS LaunchAgent 升级中断问题

**关注点（Sam 适用）：**
- `/steer` 对你的多 agent 工作流特别有用 — 可以在 NOMI 或我执行中途给方向
- file-transfer 插件适合跨节点文件操作场景

---

## Part 2: Claude Code 本体

### 🟢 Claude Code 最新版本 2.1.126（持续更新中）

**近期重要 API 平台更新：**

1. **Programmatic Tool Calling — 正式 GA** 🟢
   - Claude 可以在代码执行容器里写脚本批量调用工具，不再每次工具调用都 round-trip 回模型
   - 效果：37% 减少 token 消耗，多工具工作流延迟大幅降低
   - 例：20 个查询一个脚本搞定，结果过滤后只返回关键行

2. **MCP Connector 公测** 🟢
   - Messages API 直连远程 MCP 服务器，无需单独 MCP 客户端
   - 当前版本 header: `mcp-client-2025-11-20`（旧版 `2025-04-04` 已废弃）
   - 支持多 MCP 服务器同时连接

3. **Files API 公测** 🟢
   - 上传文件后在 Messages API 和代码执行工具中引用
   - 简化文件密集型工作流

4. **1M Token 上下文窗口** 🟢
   - Claude Sonnet 4 在 API 和 Amazon Bedrock 支持 1M token 上下文（beta）

5. **Advisor Tool 公测** 🟡
   - 新增 advisor 工具类型

6. **Fine-grained Tool Streaming GA** 🟢
   - 所有模型和平台可用，无需 beta header

7. **Claude Code CLI 2.1.41 修复** 🟡
   - 修复 AWS auth 刷新无限挂起（加 3 分钟超时）
   - 新增 `claude auth login` 命令

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 生态爆发 🟢

- **awesome-mcp-servers 仓库 83.9k+ ⭐** — MCP 生态在过去一年爆发式增长
- **Context7 MCP Server** — ThoughtWorks Technology Radar 推荐（Trial 级），为 LLM 提供版本特定的最新文档和代码示例，解决 AI 生成代码的不准确问题。**Sam 适用度：高** — 可提升 Claude Code 的代码准确性
- **OpenClaw MCP Server 提案**（GitHub #53215）— 社区提议将 OpenClaw 本身作为 MCP Server 暴露，让外部 AI 客户端访问 OpenClaw 的工具和能力

### ClawHub 热门 Skills

1. **YFinance MCP Server**（`rizkydwicmt/yfinance-mcp-server`）🟡
   - 12 个工具覆盖实时/历史金融数据、公司基本面
   - Sam 适用度：低（非核心需求）

2. **Veeam MCP**（`jgm2025/veeam-mcp`）🟡
   - Docker 运行的 Veeam 备份管理 MCP server
   - Sam 适用度：低

3. **NotebookLM API Skill** 🟢
   - 非官方 Python API + agentic skill for Google NotebookLM
   - 完整编程访问 NotebookLM 功能（包括 web UI 没有的）
   - Sam 适用度：中 — 如果用 NotebookLM 做研究

4. **Fastio File Management**（`dbalve/fast-io`）🟢
   - 19 个文件管理工具打包成一个 skill
   - Sam 适用度：中

5. **Brave Search Skill**（`steipete/brave-search`）🟢
   - ClawHub 上包装好的 Brave Search MCP
   - Sam 适用度：低（已有 Tavily）

### Claude Code 热门社区项目

- **21-Skill Prompt Collection** — GitHub 37k+ ⭐，编码了完整 Claude Code 工作流（从安装到高级技巧）
- **「How to code Claude Code in 200 lines」** — Hacker News 热帖，简化版 Claude Code 实现思路

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **Andrej Karpathy 分享 Claude 编码心得** 🟢
   > "从 11 月 80% 手写 + 20% agent，到 12 月 80% agent + 20% 微调。主要效果不是做得更快，而是能做更多——以前不值得写的东西现在可以写了。"
   - 关键洞察：AI 编码的价值不在"快"，在"扩展能力边界"

2. **@affaanmustafa「The Longform Guide to Claude Code」** 🟡
   - 区分高效 session 和浪费 session 的技巧集
   - 核心：好的 prompt 结构 > 反复试错

3. **@PaulSolt「Get started with OpenClaw」** 🟢
   - 推荐用 skill 创建可复用工作流
   - "让它自己写代码、安装、开始使用"

4. **@amirmxt Claude Code 入门指南** 🟡
   - AI 直接 review 和修改文件（电子表格、文档、笔记），不用 copy/paste

### Reddit 精选

- **r/automation：OpenClaw & Claude Code 自动化分享** 🟢
  - 社区讨论给 OpenClaw 接入工作数据的实际体验
  - 关注点：安全性 vs 效率的平衡

- **r/ClaudeAI：Programmatic Tool Calling GA** 🟢
  - 37% token 节省的实测报告
  - 用 Python 脚本编排多工具调用

### Hacker News 精选

- **「6 weeks of Claude Code」** — 581 points，590 评论 🟢
  - 资深开发者共识："如果你是 Senior Developer，习惯给 Junior 指导，这就是你的工具"
  - vibe coding 怀疑论者的转变故事

### 实用技巧

1. **Claude Code 拒绝含 "OpenClaw" 的 commit** 🔴
   - Anthropic 安全分类器会把 "OpenClaw" 标记为潜在越狱代理或竞争术语
   - 解法：commit message 避免直接写 "OpenClaw"，或用缩写

2. **OpenClaw Skill 创建技巧** 🟢
   - 用 `openclaw skills` 系统把任何重复工作封装成可复用 workflow
   - 最佳实践：先手动做一遍 → 记录步骤 → 让 agent 写成 skill

---

## 📊 今日总结

| 板块 | 状态 | 关键信息 |
|------|------|----------|
| OpenClaw 本体 | 🟢 有更新 | v2026.5.3：file-transfer 插件、/steer、Gateway 加速 |
| Claude Code | 🟢 持续迭代 | Programmatic Tool Calling GA、MCP Connector、1M ctx |
| 生态 | 🟢 活跃 | MCP 生态 83k+ ⭐、Context7、NotebookLM skill |
| 社区 | 🟢 活跃 | Karpathy 分享、21-skill 37k⭐、HN 热帖 |

**最值得关注：**
1. OpenClaw `/steer` 命令 — 对多 agent 实时协调非常有用
2. Programmatic Tool Calling GA — 37% token 节省
3. Context7 MCP Server — 提升代码准确性的利器

---

*报告由 NONO 生成 | 2026-05-05 12:00 CST*
