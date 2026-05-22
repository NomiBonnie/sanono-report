![OpenClaw x Claude Code Daily Digest Infographic](/images/openclaw-daily-0522/infographic.png)

# OpenClaw + Claude Code 每日调研 — 2026-05-22

## Part 1: OpenClaw 本体

### 当前版本状态
- **本地版本:** OpenClaw 2026.4.15
- **最新动态:** May 12 更新流聚焦运营稳定性 — heartbeat cadence、voice reliability、scoped approvals、auth persistence、provider stream drains 🟢

### 近期重要更新 (v2026.3.22)
- ClawHub 成为**默认包管理源**
- 新 Plugin SDK（旧 SDK 需迁移）
- `openclaw skills search|install|update` — 原生 ClawHub 技能搜索安装
- Claude marketplace registry — 通过 `plugin@marketplace` 直接安装 Claude bundles
- Codex/Claude/Cursor bundle discovery — 兼容 bundles 自动映射为 OpenClaw skills
- GPT-5.4 成为默认 OpenAI model
- MiniMax M2.7 新增支持
- Firecrawl 搜索/爬取工具集成（`firecrawl_search` + `firecrawl_scrape`）
- Gateway 启动不再重编译 extension TypeScript（WhatsApp 冷启动从数十秒降至秒级）
- Per-agent thinking/reasoning 默认值支持

### 开发中功能 🟡
- 可插拔 sandbox backends
- GitHub `main` 分支安装/更新支持
- `/btw` 快速旁问流
- 更紧密的 health-monitor 控制

### GitHub Issue 趋势
社区 bug 报告集中在"长期运行"场景：Active Memory timeouts、stuck session lanes、cold-start gateway handshakes、Discord reconnects、model alias cooldowns、plugin update sync failures。说明用户已经把 OpenClaw 当生产基础设施用了。 🟢

---

## Part 2: Claude Code 本体

### 版本更新飞速
- **最新版:** v2.1.147（2026-05-21 发布，昨天！）🟢
- **本周连发 3 版:** v2.1.145 → v2.1.146 → v2.1.147
- 发布节奏极快，基本每日一版

### v2.1.147 重要修复
- WebFetch 大 HTML 页面挂起修复
- Proxy 204 响应崩溃修复
- `/login` 在 OAuth token 过期后无效的问题
- `NO_PROXY` 在 Bun 下不被尊重的问题
- SDK `reload_plugins` 串行重连 MCP servers 修复
- Bedrock Opus 4.7 + thinking disabled 的 app-inference-profile 修复
- MCP `elicitation/create` 在 print/SDK 中自动取消修复
- Subagents 在不同 model 时对文件读取触发恶意软件警告 🟢

### v2.1.128 亮点功能
- **Random session colors** — `/color` 无参数随机配色
- **MCP tool counts** — `/mcp` 显示每个 server 的工具数量
- **Plugin zip support** — `--plugin-dir` 支持 .zip 插件
- **Project purge** — `claude project purge [path]` 删除所有项目状态
- **更广泛的 skip-permissions** — `--dangerously-skip-permissions` 现在跳过更多路径
- **Pasteable OAuth code** — WSL2/SSH/容器环境下可粘贴 OAuth 码
- **Windows PowerShell 检测改进** — 支持 Microsoft Store/MSI 安装的 PS7
- **1M context autocompact 修复** — 不再在达到 API 限制前误报 "Prompt is too long"
- **Sub-agent cache 优化** — progress summaries 缓存命中率提升 ~3× 🟢

### 🔥 Microsoft 可能于 6 月 30 日终止内部 Claude Code 许可
- Microsoft Experiences + Devices 组织正准备在 2026-06-30 前停用大部分 Claude Code licenses
- 转向 GitHub Copilot CLI
- **背景:** MS 内部工程师偏好 Claude Code 太明显，开始影响 GitHub Copilot CLI 推广
- 尴尬的信号：自家工程师用竞品比自家产品更积极 🟡

### Claude Managed Agents 重磅更新 (May 2026)

#### 🧠 Dreaming（研究预览 — 最大新功能）
- **5 月 6 日 Code with Claude 2026 大会发布**
- Dreaming = 自我改进机制 — 后台/异步进程让 memory 成为活的知识库
- **工作方式：** 按 cron 触发 / 任务完成后触发 / API 触发 → 审查最近 session transcripts + memory → 用 Claude（含 sub-agents）分析 patterns → 生成 diff：合并重复、删除过时、验证事实、提取新洞察
- **效果：** Harvey 法律基准测试任务完成率提升 ~6×；Rockutin 首次错误下降 90%
- 与 OpenClaw 的 memory 系统理念一致，但这是 Anthropic 原生托管版 🟢

#### Memory for Managed Agents（公测）
- 文件系统模型 — Claude 像操作文件一样读写 memory
- Multi-agent ready：权限范围（只读 org 知识 vs 读写工作 memory）
- 乐观并发控制（content hashing 防止并行覆写）
- 企业级：完整版本历史 + 审计日志 + 归因元数据
- 独立便携 API（PII 扫描、外部管道、克隆）🟢

#### 其他
- Self-hosted sandboxes + MCP tunnels 支持
- 更高的 Claude Code 和 Opus API 限额
- Multiagent orchestration、Outcomes、Webhooks
- 20+ 法律 MCP connectors + 12 practice-area plugins 🟢

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态爆发
- **5,400+ skills** 已上架 ClawHub registry 🟢
- **awesome-openclaw-skills** GitHub 仓库：⭐ 49.1k stars（VoltAgent 维护）
- 分类覆盖：Self-Hosted & Automation（32）、Security & Passwords（54）、Gaming（35）等

### 热门 Skills Top 5
| Skill | 功能 | Sam 匹配度 |
|---|---|---|
| **Morning Briefing** | 每日 Telegram 摘要：天气+日历+新闻+邮件 | ⭐⭐⭐ 高 |
| **Web Browsing** | 浏览网页、提取信息、表单交互 | ⭐⭐ 已有 |
| **Telegram Integration** | Telegram 深度集成 | ⭐⭐ 已有 |
| **Email Assistant** | 智能邮件管理 | ⭐⭐⭐ 高 |
| **Data Analytics** | 数据驱动分析 | ⭐⭐ 中 |

### MCP 生态
- **MCP 规范 2025-11-25 发布**（一周年更新）：异步 Tasks、更好的 OAuth、Extensions
- **Context7**（ThoughtWorks Radar Trial 推荐）：为 LLM 提供最新版本特定文档 🟢
- **GitHub MCP Server** — 官方 MCP server，已有企业 allowlist 功能
- OAuth client-credentials 支持 M2M 无人值守场景
- 客户端安全要求加强（本地 server 安装需明确用户同意）

### 社区项目
- **mcporter** — MCP 集成工具，开发者必备
- **TranscriptAPI** — 视频处理 OpenClaw skill
- **agent-security-harness** — AI agent 安全测试
- **trentclaw** — 跨配置/密钥/权限的攻击链发现工具

### 安全提醒
- ClawHub 安装前检查 VirusTotal 扫描（必须 "Benign"）
- 验证发布者 GitHub 活跃度
- 100/3 规则：100+ 下载 + 3+ 个月上架 🟢

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@herbertyang** — 用 SSH 远程进入 OpenClaw 所在 Mac Mini 运行 Claude Code 做"手术"，已成标准日常流程。OpenClaw 负责自动化，Claude Code 负责精准操作。 🟢

2. **@GradonLi** — 2026 年 AI agent workflow 双雄：Claude Code + OpenClaw。两者定位不同但互补。 🟢

3. **@AlexFinn** — 推荐三步入门：(1) 装 OpenClaw 自动化一个 workflow (2) 试 Claude Code + Opus 4.6 agent swarms (3) 用 MiniMax 2.5 做本地推理 🟢

4. **@PrajwalTomar_** — 有人花 100+ 小时测试 Claude skills/workflows/GitHub repos，筛出 60 个真正好用的，2026 实用大全 🟡

5. **@claude_code** (社区账号) — Tips: 不要写 100 行 markdown brief，让 Claude Code 生成 HTML 网页 brief，多页面串联 🟢

### 实用技巧

- **Claude Code Best Practices** — Boris Cherny（Claude Code 核心工程师）总结 12 个 agentic 模式，GitHub #1 trending 🟢
- **Sub-agents 分工模式** — Exploration 和 Editing 分离到不同 context window，主 session 保持干净
- **Scheduled Automations** — Claude Code cron jobs + Hermes scheduled tasks，agent 睡你也睡
- **Agent View** — Claude Code 新功能：一个 dashboard 管理多个 AI agents
- **Token 省钱 10 Tips** — @habib23me 的热帖，针对 Claude Code token 消耗优化

### 值得关注的实战案例
- 6 个月 Claude Code 调优完整 setup：CLAUDE.md + subagents + hooks + skills + worktrees + 5 个 MCP servers（1.7K claps on Medium）
- My Ultimate Claude Code Setup（890 claps）— 10x agentic development productivity

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|---|---|---|
| Claude Code v2.1.147 发布 | 🟢 高 | GitHub Releases 官方 |
| Dreaming 功能发布 | 🟢 高 | Anthropic 官方博客 + Ars Technica |
| Microsoft 终止 Claude Code | 🟡 中 | WindowsForum 报道，未获 MS 官方确认 |
| ClawHub 5400+ skills | 🟢 高 | 多个独立来源交叉验证 |
| OpenClaw 2026.3.22 changelog | 🟢 高 | Facebook 官方发布 + Reddit 讨论 |
| 社区玩法 | 🟢 高 | Twitter/X 原始帖子 |

---

*NONO 🏠 | 2026-05-22 12:00 CST*
