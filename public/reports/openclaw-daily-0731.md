# OpenClaw + Claude Code 每日调研 — 2026-07-31

![Infographic](/images/openclaw-daily-0731/infographic.png)


## Part 1: OpenClaw 本体

### v2026.7.1 正式发布（7月14日 stable）
🟢 可靠度：高（GitHub releases 确认）

- **Beta stream 已转 stable**：从 2026.7.1-beta.6 经过验证后升级为 latest
- **Control UI 改进**：
  - 消息时间戳 hover 显示 token/context/model 详情（取代独立 Context 按钮）
  - Session 标题截断时支持 hover 动画展示完整名称
  - Sidebar 移除 provider usage quota 行，保留 composer 和 Usage 页面访问
- **Telegram 可靠性**：强化消息编辑的重试覆盖率
- **External gateway supervision**：新增 `OPENCLAW_SUPERVISOR_MODE=external`，用于 OCM 等生命周期管理器
- **Doctor state isolation**：防止自动修复跨 state 导入 approvals
- **Proxy bypass**：`no_proxy` 优先级与 Undici 对齐
- **Tokenjuice exec compaction**：避免大型命令输出撑爆 compaction

### v2026.7.2-beta.5 已在测试（7月28日）
🟡 可靠度：中（pre-release）

- Beta 通道持续推进，预计近期 stable

### OpenClaw Attach 功能（v2026.7.1-beta.1 起）
🟢 可靠度：高

- 支持对现有 Gateway session 发起 Claude Code 编码会话
- 临时 MCP grant，作用域严格限定
- 适合中断后恢复编码场景

---

## Part 2: Claude Code 本体

### v2.1.217（7月21日发布）
🟢 可靠度：高（DevelopersIO 详细测评）

**新功能：**
- **Emoji shortcode completion**：输入 prompt 时自动补全 emoji
- **Maximum concurrent subagent limit**：限制并发 sub-agent 数量，防止资源耗尽

**改进：**
- Sub-agent 执行控制全面加强
- Windows/安全/企业设置/无障碍多项 bugfix

### v2.1.216（7月15日发布）
🟢 可靠度：高

- **Filesystem isolation controls**：新增文件系统隔离，防止 subagent 越权
- **Session resume 加强**：恢复 background agent 时还原原始 prompt + tool restrictions
- **Worktree boundary**：阻止 `--git-dir`/`GIT_DIR` 等将 subagent 引导到共享 checkout
- **`--forward-subagent-text` flag**：stream-json 输出中包含 subagent text/thinking
- **Permission preview 安全加固**：中和双向覆盖/零宽字符，防止审批消息被视觉篡改
- **Corporate launcher**：`CLAUDE_CODE_PROCESS_WRAPPER` 支持强制包装器
- **Vim insert mode remaps**：`jj` → Escape
- **鼠标支持**

### MCP Connectors for Artifacts
🟢 可靠度：高

- Published artifacts 可通过 MCP connectors 拉取实时数据
- Screen reader mode 上线

---

## Part 3: 🔥 生态

### Agent Knock Knock — OpenClaw 编码代理编排器
🟢 可靠度：高（GitHub 项目，OpenClaw 社区 X 推荐 7/25）

- 将 OpenClaw 变成 coding-agent 编排器
- 可委托给 Codex、Claude Code，处理 handoff
- 支持自动 approve 信任操作 + tmux terminal 随时接管
- 无需 hooks 或 agent-side plugins
- GitHub: `scotthuang/agent-knock-knock`

### Skills.sh — Agent Skills Directory
🟡 可靠度：中（社区推荐）

- Agent Skills 目录站，集中浏览/发现 skills
- 社区热推 "/grill-me" skill（让 agent 先提问再编码）
- OpenClaw/Claude Code 通用（SKILL.md 格式互通）

### mcporter skill — MCP 生态桥接
🟢 可靠度：高

- 一个 skill 解锁整个 MCP 生态
- Stripe/Notion/Linear 等 MCP server 即插即用
- 被评为 2026 最重要的 OpenClaw skill 之一

### OpenClaw MCP Server 提案（Issue #53215）
🟡 可靠度：中（feature request 阶段）

- 提议将 OpenClaw 工具能力以 MCP server 暴露
- 对标 playwright-mcp（29.5k⭐）、github-mcp-server（28.2k⭐）
- 目标：让外部 AI 客户端（Cursor 等）调用 OpenClaw 能力

### ClawHub 安全态势
🟢 可靠度：高（Palo Alto Unit42 报告）

- 2月-5月发现 5 个未拦截恶意 skill，已全部下架
- ClawHub 已集成 VirusTotal + ClawScan 主动扫描
- **提醒：安装 skill 前用 skill-vetter 审查仍然必要**

### 热门 MCP Servers（star 数级）
| Server | Stars | 用途 |
|--------|-------|------|
| awesome-mcp-servers | 83.9k | 资源聚合 |
| playwright-mcp | 29.5k | 浏览器自动化 |
| github-mcp-server | 28.2k | GitHub API |
| fastmcp (Python) | 23.9k | MCP 框架 |
| serena | 22.0k | Coding agent toolkit |

---

## Part 4: 🎮 社区玩法 / 小技巧

### Spec-based 开发流程（Twitter 热帖）
🟢 来源：@trq212

> 用 Claude Code 做大功能的最佳方式：从 minimal spec 开始 → 让 Claude 用 AskUserQuestionTool 采访你 → 新 session 执行 spec

### Skill Coding > Vibe Coding（OpenClaw 社区 X 7/25 热帖 1.8K likes）
- Vibe coding：demo 可以，production 不行
- Spec coding：给 agent spec 文档
- **Skill coding**：最高级 — 用 /grill-me 等 skill 让 agent 先理解需求再动手

### 30+ Tips After 1500+ Hours（Hannah Stulberg）
🟢 长文精选要点：
- Clean markdown = Claude 解析可靠
- 不要追新技巧，用经过检验的方法
- 投资自己的 workflow（自定义 voice transcription、status line）

### Claude Code 创始人的 Claude 配置（HN 568 points）
- 多 agent 并行出 50-100 PRs/周
- 社区争议：是否过度消耗 tokens
- 核心洞察：Ripgrep + 好的 context engineering = 效率本质

### OpenClaw 中国热潮（Forbes 报道）
🟡 来源：Forbes

- 中国草根 OpenClaw 社区已成国家级现象
- 智谱 GLM-5-Turbo（华为芯片训练）针对 OpenClaw workflow 优化
- 数据飞轮效应

---

## 今日关键总结

| 项目 | 状态 | 行动建议 |
|------|------|----------|
| OpenClaw 2026.7.1 | ✅ stable | 可升级，UI 改进明显 |
| Claude Code 2.1.217 | ✅ 已发 | subagent limit 有用，建议关注 |
| Agent Knock Knock | 🆕 新项目 | 值得试用，编排多 coding agent |
| ClawHub 安全 | ⚠️ 持续关注 | 继续用 skill-vetter |
| MCP 生态 | 🔥 爆发中 | mcporter 值得安装 |
