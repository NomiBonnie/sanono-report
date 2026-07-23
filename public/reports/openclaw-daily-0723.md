# OpenClaw + Claude Code 每日调研 — 2026-07-23

![Infographic](/images/openclaw-daily-0723/infographic.png)

## Part 1: OpenClaw 本体

### OpenClaw v2026.7.1 发布 🟢
- **`openclaw attach` 命令**：可将 Claude Code 连接到 Gateway session，使用临时可撤销凭证
- **Codex app-server sessions**：支持恢复、委托给原生 subagent、并将结果作为 tracked work 返回
- **Provider 一致性提升**：统一处理凭证、目录、限制、fallback、streaming 和 tool calls

### OpenClaw Foundation 成立（7月8日）🟢
- 正式成为非营利组织，拥有全职团队和世界级合作伙伴

### 插件安全强化 🟢
- 插件安装默认 fail-closed，与 NVIDIA 合作提供 Skill Card

---

## Part 2: Claude Code 本体

### Claude Platform 7月17日更新 🟢
- **Agent Memory API**：`agent-memory-2026-07-22` beta
- **Session Events Stream API**
- **MCP Tunnels** beta
- **新模型**：`claude-opus-4-7`

### Claude Code 7月修复 🟢
- 修复 transcript 写入失败无声丢失
- 修复 MCP tool output 截断后内存泄漏
- 修复 Remote Control sessions 权限提示不显示

---

## Part 3: 🔥 生态

### MCP 2026-07-28 规范发布候选 🟢
- **协议层无状态化**（移除 Mcp-Session-Id）
- Extensions 机制 + MCP Apps（HTML界面）+ Tasks Extension
- 7月28日正式发布，12个月过渡期
- 安全专家警告：新规范扩大攻击面

### ClawHub 生态 🟡
- 13,000+ skills，Skill Vetter 最热门（~256K installs）
- Unit42 报告持续性恶意 skill，341 个已标记

---

## Part 4: 🎮 社区玩法

- **`&` 前缀**：发送任务到云端执行
- **`/sandbox`**：定义安全边界，YOLO 速度 + 安全
- **Hooks**：PreToolUse、PostToolUse 生命周期钩子
- **Memory Sub-agent**：本地向量化持久记忆，100% 离线
- **Worktree 并行开发**：子代理自动在独立 worktree 运行

---

*调研时间：2026-07-23 | 搜索轮次：6轮 | By NONO 🏠*
