# OpenClaw + Claude Code 每日调研 — 2026-06-18


![OpenClaw + Claude Code Daily Intel Infographic](/images/openclaw-daily-0618/infographic.png)

## Part 1: OpenClaw 本体

### 🟢 OpenClaw 2026.6.6 发布
- **版本：** 2026.6.6（当前最新稳定版）
- **核心亮点：** 安全边界大幅收紧
  - Transcript、sandbox binds、host 环境继承、MCP stdio、Codex 路径全部 fail-closed
  - Browser、channel、exec-approval 路径安全加固
- **前一版 2026.6.5：** 216 个 PR 合并，新增免费并行搜索功能
- **Providers & Model Replay 改进：**
  - 保持 storeless OpenAI Responses replay 兼容性
  - 修复 invalid OpenAI reasoning signatures
  - 修复 Anthropic thinking-signature replay 错误
  - Claude 4.5 在 Copilot 中避免过早 tool streaming
  - 支持 LM Studio binary-thinking models 的 thinking-off 请求
  - Strip provider prefixes（runtimes 需要 bare IDs）
- **可靠度：** 🟢 来源 GitHub Releases + Releasebot + PatchBot 交叉验证

---

## Part 2: Claude Code 本体

### 🟢 Claude Opus 4.8 发布
- **模型：** `claude-opus-4-8`
- **亮点：** 代码质量审查能力提升 4 倍——比前代减少 4x 代码缺陷遗漏
- **System Card：** 已发布，详细评测范围大幅扩展
- **Project Glasswing：** 少量组织正在使用 Claude Mythos Preview 进行网络安全工作
- **可靠度：** 🟢 Anthropic 官方博客

### 🟢 Claude Platform 重大更新（June 2026）
- **Advisor Tool** 进入公开 Beta
- **max_tokens 上限提升至 300k**（Message Batches API，Opus 4.6 & Sonnet 4.6）
- **Fine-grained tool streaming** GA（所有模型，无需 beta header）
- **Programmatic tool calling** 公开 Beta：Claude 可在代码执行中调用工具，减少延迟和 token 消耗
- **1M token context window** Beta：Claude Sonnet 4（API + Amazon Bedrock）
- **Files API** 公开 Beta：上传文件并在 Messages API 中引用
- **MCP Connector** 公开 Beta：直接从 Messages API 连接远程 MCP servers
- **Claude Managed Agents** 新增：
  - 可按计划运行（scheduled）
  - 安全访问 CLI tools 和认证服务
  - Self-hosted sandboxes + MCP tunnels
  - Cloudflare 深度集成（sandbox + Browser Run + Agent Inboxes）
  - Vercel Sandbox 支持
- **可靠度：** 🟢 官方 Docs + Releasebot

### 🟢 Claude Code 社区热门功能
- **Plan Mode：** 用 Opus 规划，Sonnet 执行
- **Subagents/Tasks：** 可并行启动 40+ sub-agents，每个轻量执行
- **自定义 Subagents：** 定义 5 种 agent 类型（general-purpose, Explore, Plan, claude-code-guide, statusline-setup）
- **Background tasks：** Ctrl+B 在后台运行 dev server
- **Sonnet 4 1M context：** 5x 上下文提升
- **可靠度：** 🟢 @claude_code 官方 Twitter + Reddit

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 🟢 ClawHub 生态现状
- **Skills 总数：** 10,700+
- **安全警告：** 820+ skills（7.6%）被标记恶意；早期约 1/5 为恶意（2026 初大清理后改善）
- **最热门 Skills：**
  - `browser-control` — 35,000+ 安装，最多下载
  - `Felo Search` — 145,000+ 安装（AI 合成答案 + 来源引用）
  - `Agent Browser` — 11,000+ 安装，web 自动化
  - `file-manager` — 必装基础 skill
- **推荐来源：** awesome-openclaw-skills 仓库列出 1,184 个 Coding Agents & IDEs 类 skill
- **Sam 适配评估：** Felo Search（搜索增强）、browser-control（自动化）高度匹配

### 🟢 MCP 协议重大更新 — 2026-07-28 RC 预告
- **协议转向 Stateless：** 同一客户端可路由到任意 MCP server 实例，无需 session store
- **Extensions 成为一等公民：**
  - MCP Apps：server-rendered HTML UI（sandboxed iframe）
  - Tasks extension：长时间运行任务
- **Full JSON Schema 2020-12 for Tools**
- **三个核心特性被标记 deprecated**（新 feature lifecycle policy）
- **David Soria Parra（Anthropic）AI Engineer 演讲：** 2026 connectivity stack = Skills + MCP + CLI/Computer use
- **可靠度：** 🟢 官方 MCP Blog + AI Engineer Conference

### 🟡 Claude Agent SDK
- **新增：** `@anthropic-ai/claude-agent-sdk`（npm）/ `claude-agent-sdk`（pip）
- 与 Claude Code 和 Managed Agents 形成三层架构：
  - Claude Code = 交互式终端
  - Agent SDK = 嵌入式库
  - Managed Agents = 托管运行
- **可靠度：** 🟡 社区博客 + 官方 Docs

### 🟢 Cloudflare + Claude Managed Agents 集成
- Workers 控制面板为每个 agent session 提供 sandboxed 环境
- Browser Run 赋予 agents 可编程浏览器
- Agent Inboxes 支持异步任务
- Containers 支持（重计算场景）
- **可靠度：** 🟢 Cloudflare 官方博客

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **"No IDE. Just plan.md files and voice."** — @ziwenxu_ 分享的 Claude Code hacks 大合集
   - 核心理念：不用 IDE，只用 plan.md 文件 + 语音输入
   - 帖子获得 7.2K views（2026-03-23）

2. **@claude_code 官方 Tips 汇总：**
   - `ccusage` 追踪 usage（daily/monthly/repo 级别）
   - Plan mode 先厘清 feature spec 和预期行为
   - 用 Claude Code 创建精美 demos 和视频
   - 自定义 subagents
   - Opus 4.1 planning + Sonnet 4 workhorse via `/models`

3. **Wonda + Claude Code 自动化 X/Twitter：**
   - 用于 research、account monitoring、thread reading、first-pass drafting
   - 强调：自动化是为了改善判断，不是替代判断

### Reddit 精选

4. **r/ClaudeAI: "Sub-agents Are Insane"**
   - 用户在单个 context window 启动 40 个 sub-agents
   - 每个 sub-agent 轻量 token 消耗
   - 最佳实践：给每个 sub-agent 明确小任务

5. **Claude Code 长时间 session 使用案例：**
   - iOS 健康 App + AWS serverless 全栈开发
   - IDL → Python pipeline 迁移
   - Obsidian 知识管理「第二大脑」
   - Remotion 视频创作

6. **24 Claude Code Tips（Advent Calendar）：**
   - Statusline 配置
   - `&` 发送 tasks 到 Web
   - Hooks 过滤敏感数据 + 代码格式化
   - GIF 创建

### 效率提升建议

- **Context Engineering：** CLAUDE.md + scratchpad + sub-agents 是三板斧
- **Sub-agents 最佳实践：** 不是「大量启动 + 期望奇迹」，而是项目特定 + 明确小任务
- **Opus planning + Sonnet execution** 是当前社区共识最优配置

---

## 总结

| 板块 | 热度 | 关键信号 |
|---|---|---|
| OpenClaw | 🔥 | 2026.6.6 安全大更新，fail-closed 策略 |
| Claude Code | 🔥🔥 | Opus 4.8 + 1M context + Managed Agents |
| 生态 | 🔥🔥 | MCP 走向 stateless + ClawHub 万级 skills |
| 社区 | 🔥 | Sub-agents 用法成熟，Context Engineering 成主流话题 |

---

*调研时间：2026-06-18 12:00 CST | 搜索轮次：8 | 来源：Tavily API*
