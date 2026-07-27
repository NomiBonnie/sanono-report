# OpenClaw + Claude Code 每日调研 — 2026-07-27

![Infographic](/images/openclaw-daily-0727/infographic.png)


## Part 1: OpenClaw 本体

### 🟢 OpenClaw 2026.7.1 正式发布 (July 14)
- 从 beta.6 升级为 stable，现在是默认安装路径
- **主要新功能：**
  - 新 Session 重连：自动恢复 agents、nodes、repo branches、folder-browser 状态
  - 外部 Gateway Supervisor 模式 (`OPENCLAW_SUPERVISOR_MODE=external`) — 给 OCM 等生命周期管理器用
  - Doctor 状态隔离 — 防止自动更新误导入其他 state 目录的 approvals
  - Markdown frontmatter 修复：YAML 节点强制转换时保留 fallback 值
- **新模型支持：** GPT-5.6 (Sol/Terra/Luna), Muse Spark 1.1, Tencent Hy3
- **Apps 更新：** iOS/Android/macOS — 离线队列、多 Gateway profiles、语音笔记
- **编码 agent 改进：** Codex child tasks、WebChat preamble、OAuth 免 SSH 续期

### 🟡 Beta 进展：2026.7.2-beta.3 (July 18)
- 新增 `openclaw channels add clickclack` 命令
- 继续打磨 Supervisor Mode
- `openclaw onboard` 改进

### 🟡 社区声音
- HN "OpenClaw had a rough week" — npm 供应链安全担忧、v2026.7.1 部分安装出问题
- Reddit "Is OpenClaw Dead?" 讨论 — 结论：没死，7.1 后稳定性回升
- 有用户报 cron breaks + autoupdate failures — **建议升级前先备份**

---

## Part 2: Claude Code 本体

### 🟢 Claude Opus 4.8 发布 (May 28) — 当前最强 GA 模型
- Anthropic 诚实描述为 "modest but tangible improvement"
- **新能力：**
  - Dynamic Workflows — Claude Code 可编排数百个并行 subagent，完成代码库级别迁移
  - 长时间 agent 运行改善
  - 多模态推理增强
  - 金融分析、网络安全能力提升
- **Claude Code 配套更新 (Week 22)：**
  - `security-guidance` 插件 — 自动审查代码变更的安全漏洞
  - Fast mode on Opus 4.8（更低价格）
  - `/workflows` 命令管理多 agent 流程

### 🟢 Claude Opus 5 已发布
- 1M token context window，128K max output
- Thinking 默认开启
- 比 Opus 4.8 是 "step-change improvement"（非增量）
- 价格不变：$5/M input, $25/M output
- 新功能：full effort ladder (含 `max`)、server-side fallback `"default"` 模式、更低 prompt cache minimum

### 🟡 Claude Fable 5 & Mythos 5 (June 2026)
- Fable 5：首个公开的 Mythos 级模型
- Mythos：高安全限制，仅限部分美国公司使用（NSA 争议）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### 🟢 MCP 2026-07-28 重大规范更新（明天发布！）
- **破坏性变更：** 移除 session 模型！不再需要 initialize 握手和 Mcp-Session-Id
  - client capabilities 改为每个请求的 `_meta` 携带
  - 新增 `server/discover` 方法获取 server capabilities
  - 意味着：不需要 sticky sessions，普通 round-robin 负载均衡即可
- **废弃功能：** Roots → tool parameters 替代 | Sampling → 直接 LLM API | Logging → stderr/OpenTelemetry
- **Extensions 正式化：** reverse-DNS ID、独立版本、Extensions Track
- 12 个月废弃窗口，不急着迁移

### 🟢 热门 MCP Servers
| Server | Stars | 用途 |
|--------|-------|------|
| Context7 (Upstash) | 54K+ | 动态获取最新版本文档注入 context |
| Playwright MCP (Microsoft) | 30K+ | 浏览器自动化，accessibility snapshot |
| Cloudflare MCP | - | 基础设施管理 |

### 🟢 ClawHub 生态现状
- 60K+ skills，39M+ 总下载，56K+ certified
- **推荐 Skills：**
  - `github` — PR/Issue/Code 管理（⭐ 必装）
  - `agentmail` — 给 agent 独立邮箱地址（创意用法）
  - `linear` — 项目管理集成
  - `playwright-mcp` — 完整浏览器自动化
  - `obsidian-direct` — Obsidian 笔记模糊搜索
  - `self-improving-agent` — agent 自我改进

### 🔴 安全警告：Snyk 发现 ClawHub Skills 泄露凭证
- `moltyverse-email`、`youtube-data` 等 skills 指导 agent 以明文保存 API keys
- SKILL.md 中让 agent 把密钥存入 memory/config — 会暴露给 model provider
- **建议：** 安装任何 skill 前必须用 skill-vetter 审查（我们已有此规则 ✅）

### 🟢 Claude Code Multi-Agent 生态
- **Dynamic Workflows** 已经成为主流用法 — 需要 v2.1.154+
- Boris Cherny（Claude Code 创建者）分享：并行跑 5 个本地 + 5-10 个 web Claude
- `iloom` 工具：自动检测 issue 复杂度，调整 workflow，支持断点续传
- 成本参考：Solo dev ~$260/mo，3 parallel agents ~$600-800/mo

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🟢 Boris Cherny 的 Claude Code 使用方式（创建者本人）
- 5 个本地终端 Claude 并行
- 5-10 个 claude.ai/code web session 同时跑
- 本地 → web 用 `&` 交接，或 `--teleport` 来回切
- Code review 时 @.claude 在同事 PR 上加 CLAUDE.md 规则

### 🟢 omarsar0 的 Context Engineering 实践
- 构建可复用 workflows（跨 agent 可迁移到 Codex）
- Sandbox 是下一波功能的关键 enabler
- Context engineering + agent 编排 = 更长无中断 session

### 🟢 40+ Claude Code Tips 仓库 (ykdojo/claude-code-tips)
- 自定义 status line script
- Container 中运行 Claude Code
- Multi-Claude workflow + 语音输入 demo
- 用量监控：Tab + Shift+Tab 刷新

### 🟡 社区讨论热点
- "OpenClaw vs Claude Code" 选择困难 — 结论：互补不矛盾
- OpenClaw 24/7 Telegram 接入 vs 刻意断开（有人发现影响休息）
- 10 个 Claude Code agents 过夜跑，醒来收 PRs — 真实案例
- `iloom` 工具：spin/finish 断点续传工作流

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|------|--------|------|
| OpenClaw 2026.7.1 发布 | 🟢 | 官方 release notes |
| MCP 2026-07-28 规范更新 | 🟢 | 官方 blog + spec |
| Opus 4.8 / Opus 5 | 🟢 | Anthropic 官方 |
| ClawHub 安全漏洞 | 🟢 | Snyk 安全研究 |
| 社区使用方式 | 🟡 | Twitter/Reddit 个人分享 |
| Boris Cherny 设置 | 🟢 | 本人 Twitter |
| 升级风险警告 | 🟡 | 社区报告 |

---

*调研完成时间：2026-07-27 12:00 CST*
*下次调研：2026-07-28（重点关注 MCP 新规范正式发布）*
