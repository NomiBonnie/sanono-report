# OpenClaw + Claude Code 每日调研 — 2026-08-01

![Infographic](/images/openclaw-daily-0801/infographic.png)

## Part 1: OpenClaw 本体

### 当前稳定版：v2026.7.1（2026-07-14 发布）

🟢 **主要更新亮点：**

- **Control UI 大改版** — 消息悬停显示 token/context/model 详情；session 标题动画；侧栏精简
- **Session Rewind & Branching** — 可回溯和分支会话历史
- **崩溃恢复增强** — SQLite terminal session recovery，追踪 transcript mutation time
- **MCP Apps 增强** — 更丰富的 MCP 应用支持
- **新模型支持** — GPT-5.6 兼容性、腾讯混元 3（Hy3）、Meta Muse Spark 1.1
- **Codex 工作流增强** — 更强的连接编码代理工作流
- **语义记忆搜索增强** — `memory_search` 支持高级语义过滤
- **Cloudflare AI Gateway** — 新增作为 provider 的 onboarding 支持
- **Wear OS 伴侣功能** — 手表端新特性
- **各通道改进** — Telegram/Slack/Discord/Apple Messages 全面升级

🟢 **插件系统改进：**
- `openclaw plugins update --all` 核心升级后自动对齐稳定目录
- `/status plugins` 能标记配置了但未加载的插件
- 支持无 `package.json` 的 ClawHub 插件格式

🟡 **下一版本动态：** 已有 beta stream 在测试中，关注 `before_agent_run` 钩子等新功能。

---

## Part 2: Claude Code 本体

### Code with Claude 2026 开发者大会新功能

🟢 **五大新功能（旧金山/伦敦/东京）：**

1. **Dreaming** — 跨 session 的计划性记忆整理，自动在对话间歇运行
2. **Outcomes** — 输出质量强制执行，无需人工审核即可验证结果
3. **Multi-agent Orchestration** — 多代理协调，解决复杂任务分工问题
4. **Claude Finance** — 10 个预建金融代理 + Dun & Bradstreet/Fiscal AI/Verisk 连接器
5. **Add-ins** — 企业部署扩展机制

### Dynamic Workflows（@_catwu 5月28日推文，1.7M views）

🟢 在 prompt 中提到 "workflow"，Claude Code 会动态创建编排计划并严格执行，支持跨 100+ agent 的有序执行。

### Claude Apps Gateway（新）

🟢 面向 Amazon Bedrock 和 Google Cloud 的自托管控制面板：
- 企业 SSO
- 集中策略执行
- 基于角色的访问控制
- 按用户成本追踪和支出上限

### Admin Console 新增 Usage + Value 标签页

🟢 组织级别的活跃开发者数、session 计数、top 命令、生产力提升估算、每 commit 成本。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 生态现状

🟢 **规模：** 19,831+ servers indexed on Glama registry，9700 万月 SDK 下载量
🟢 **支持方：** Anthropic, OpenAI, Google, Microsoft 四大巨头背书
🟢 **趋势：** Remote MCP servers 成为主流（GitHub/Vercel/Linear/Notion/Supabase/Stripe/Figma/HuggingFace 均提供 OAuth 远程 MCP）

**Top MCP Servers for Developers（2026 推荐）：**
| Server | 功能 | Sam 匹配度 |
|--------|------|-----------|
| Firecrawl MCP | Web 搜索/抓取/解析/爬取一体化 | ⭐⭐⭐ |
| GitHub Remote MCP | OAuth 远程，无需本地安装 | ⭐⭐⭐ |
| Notion MCP | 远程 OAuth，官方支持 | ⭐⭐⭐ |
| Supabase MCP | 数据库管理 | ⭐⭐ |

### ClawHub 生态

🟢 **规模：** 13,729+ community skills（持续增长）
🟢 **内置：** ~53 个 bundled skills

**热门 Skills（下载量 Top）：**
| Skill | 下载量 | 功能 |
|-------|--------|------|
| Skill Vetter | ~256K | 安全审查 |
| Github | ~189K | GitHub 操作 |
| Ontology | ~188K | 知识图谱 |
| GOG (Google Workspace) | ~185K | Gmail/Calendar/Drive |
| Capability Evolver | ~36K | 自我改进 |

🔴 **安全警告：** ~1,200 skills 被发现含恶意软件。Unit 42 报告显示 prompt injection via MCP sampling 是主要攻击向量。ClawHub 已集成 VirusTotal + ClawScan 扫描，但仍有漏网之鱼。**必须用 skill-vetter 审查后再装。**

### NemoClaw (NVIDIA)

🟡 v0.0.78 — 增强 OpenClaw 安全特性：thread-scoped auto-approval、policy-routed repository reads、agent-visible inference health、credential capture 防护。

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Senior Engineer 十大 Claude Code 工作流（Collabnix）

1. **只读分析模式** — `--allowedTools "Read,Grep,Glob" --max-turns 20`
2. **Git Worktree 并行** — 3 个 agent 同时在不同 branch 工作
3. **团队 Makefile** — `make ai-review` / `make ai-test` / `make ai-security`
4. **CLAUDE.md 作为「contractor brief」** — 明确 scope + verification criteria + bounded tools

### 🔥 Dynamic Workflows（Claude Code 新功能）

- Prompt 中提 "workflow" → 自动生成编排计划
- 严格按顺序执行，跨 100+ agent 可信赖
- 已引爆 Twitter（1.7M views）

### .claude/ 文件夹模块化（@akshay_pachaar，2.1M views）

- `CLAUDE.md` → `rules/` 拆分 = ~40% token 节省
- `commands/` 可重复工作流
- `skills/` 上下文触发自动化
- `agents/` 隔离子代理

### OpenClaw + Claude 自动化开发团队

- OpenClaw 作为 orchestration layer，spawn agents，为每个任务选对模型
- 一人开发团队实战设置（@Nate_Google_，132K views）

---

## 📊 信息可靠度总结

| 板块 | 可靠度 | 来源 |
|------|--------|------|
| OpenClaw v2026.7.1 | 🟢 高 | 官方 docs + GitHub releases |
| Claude Code 新功能 | 🟢 高 | Anthropic 官方 + 开发者大会 |
| MCP 生态数据 | 🟢 高 | Glama registry + 官方文档 |
| ClawHub 数据 | 🟢 高 | 多源交叉验证 |
| 安全警告 | 🟢 高 | Unit 42 + Bitdefender |
| 社区技巧 | 🟡 中 | Twitter/博客（个人经验） |
