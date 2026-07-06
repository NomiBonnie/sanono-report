# OpenClaw + Claude Code Weekly — July 6, 2026

![Infographic](/images/openclaw-daily-0706/infographic.png)

## Part 1: OpenClaw 本体

### 🟢 Pre-Release 2026.7.1-beta.2 (Jul 5)

OpenClaw 发布了一个重量级 beta，亮点：

1. **GPT-5.6 支持** — 社区贡献 PR，首日落地。覆盖 catalog/capability/runtime 全链路。
2. **`openclaw attach`** — 外部 harness 附加到已有 Gateway session，方便恢复/检查 Codex 式工作流。
3. **Telegram Codex 工作流** — `/login` 启动 Codex pairing，可 steer 活跃 run，跨瞬时 API 故障恢复最终回复。
4. **Event-driven cron (`on-exit`)** — 监听进程退出触发 agent turn，告别轮询猜时间。
5. **iOS 26 视觉大改** — Chat/Talk/Onboarding/Reconnect 全面刷新，本地化扩展。
6. **iMessage 原生投票** — 创建/阅读/投票 poll。
7. **Scoped conversations** — 每对话工具/访问边界的 capability profiles。
8. **Mac 本地 Gateway 自动安装** — macOS app 一键启动本地 Gateway。
9. **Nemotron Super 1M 上下文窗口** — 本地推理长上下文首次一等支持。

---

## Part 2: Claude Code 本体

### 🟢 v2.1.201 (Jul 4) & v2.1.200 (Jul 3)

**v2.1.201:**
- Claude Sonnet 5 sessions 不再在对话中途用 system role 发 harness reminders

**v2.1.200（大版本）:**
- **Manual 权限模式成为默认** — CLI、VS Code、JetBrains 统一
- AskUserQuestion 不再自动 continue，需手动 opt-in idle timeout
- 多项后台 agent 修复：sleep/wake 后停止、stale daemon.lock 死锁、daemon handover 竞争
- 子 agent rate limit 空结果 → 现在 clean fail
- Background agent roster 腐败恢复

### 🟢 近期功能回顾 (Week 25-26)

- `claude mcp login/logout` — Shell 中认证 MCP server
- Shell mode 响应命令输出 — `! npm test` 自动解释
- `/rewind` 跨 `/clear` — 恢复被清空的对话
- 后台子 agent 权限提示 — 主 session 弹出而非 auto-deny
- Artifacts (beta) — 会话输出变为实时可分享页面
- deny/ask 规则匹配工具参数 — `Tool(param:value)` 粒度
- `/cd` — 中途切换工作目录，不重建 prompt cache
- 子 agent 嵌套（5 层上限）
- `--safe-mode` — 禁用所有自定义排障

---

## Part 3: 🔥 生态

### MCP Servers 热门推荐

| 名称 | 功能 | 适合 Sam |
|------|------|----------|
| **GitHub MCP** (官方 public preview) | Repo/PR/Issue 操作 | ⭐⭐⭐ |
| **Context7** | 文档上下文增强 | ⭐⭐⭐ |
| **Playwright MCP** | 浏览器自动化 | ⭐⭐ |
| **mcp-github-trending** | GitHub trending 数据 | ⭐⭐ |

### ClawHub 安全警告 🔴

- **341 个恶意 skills 被发现窃取用户数据**（TheHackerNews 2026-02 报道）
- 提醒：skill-vetter 审查流程必须执行！

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Twitter 热门

1. **Karpathy 描述 2026 招聘新标准** — "用 Claude Code 独立构建 Twitter clone 级项目" = 一人顶一个开发团队
2. **Claude Code Community (@claude_code)** — 活跃分享 tips 和 workflow

### 实用技巧

- Shell mode (`!` 前缀) — 运行命令后自动获得解释
- `/rewind` 跨 clear — 误清对话可恢复
- `--safe-mode` 排障 — 插件问题一键排除
- `openclaw attach` — 长时间任务中途检查进度
- Event-driven cron — 部署完成自动触发验证
- velvet-shark 的 50 天 OpenClaw 实战 — 20 个真实用例完整 prompt 集合

---

## 📊 本日总结

| 板块 | 更新量 | 重要度 |
|------|--------|--------|
| OpenClaw | ⭐⭐⭐ 大版本 beta | 高 |
| Claude Code | ⭐⭐⭐ 重要修复 | 高 |
| 生态 | ⭐⭐ 安全警告 | 中 |
| 社区 | ⭐⭐ 实用技巧 | 中 |

**对 Sam 最相关：** `openclaw attach`、Event-driven cron、Manual 权限默认、Background agent 修复
