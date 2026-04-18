# OpenClaw + Claude Code 每日调研 — 2026-04-18

![Daily Briefing Infographic](/images/openclaw-daily-0418/infographic.png)

## Part 1: OpenClaw 本体

### 🟢 v2026.4.9 发布（4月9日）— REM Memory Backfill + 安全加固

OpenClaw 最新版本 v2026.4.9 是近期功能最密集的一次更新，覆盖五大领域：

**记忆与 Dreaming：**
- **REM Backfill 系统**：可将历史 daily notes 回放到持久记忆中，不需要第二套 memory stack
- 新增 `rem-harness --path` 支持、diary commit/reset 流程、durable-fact 提取优化
- 新 Control UI：结构化日记视图 + 时间线导航 + backfill/reset 控制 + dreaming 摘要追溯
- **实际意义**：Agent 可以从历史交互数据构建长期记忆，不再限于实时对话

**安全加固（4项）：**
- SSRF 隔离执行：浏览器交互触发的导航现在会重新检查被封锁的目标
- Dotenv 注入防护：运行时控制环境变量不再从不可信 workspace .env 文件加载
- Node exec 注入防护：远程 node exec 事件标记为不可信，防止注入 System 内容
- Plugin auth 碰撞：不可信 workspace plugins 无法与 bundled provider auth ID 冲突

**其他：**
- Character-vibes QA 评估系统：跨模型候选的角色一致性测试
- Android 配对系统重建：扫码配对终于能可靠工作了
- Matrix gateway 稳定性、Slack 媒体附件加载修复

---

## Part 2: Claude Code 本体

### 🟢 v2.1.113 发布（4月17日）— 原生二进制 + 安全强化

**重大变更：**
- **CLI 切换为原生二进制**：不再用 bundled JavaScript，改为 per-platform 原生可执行文件
- `sandbox.network.deniedDomains` 设置：即使有宽泛的 allowedDomains 通配符也能精确封锁特定域名

**UI/UX 改进：**
- Fullscreen 模式：Shift+↑/↓ 选择超出可视区域时自动滚动
- `Ctrl+A`/`Ctrl+E` 匹配 readline 行为
- `/ultrareview` 更快启动（并行检查）+ diffstat + 动画状态
- Subagent 卡住 10 分钟后自动报错，不再静默挂起

**安全修复：**
- macOS 上 `/private/{etc,var,tmp,home}` 路径被视为危险删除目标
- Bash deny 规则现在匹配 `env`/`sudo`/`watch` 等包装命令
- `Bash(find:*)` 不再自动批准 `find -exec`/`-delete`

### 🟢 Week 15 亮点（4月6-10）
- `/autofix-pr`：一键为当前分支的 PR 开启 auto-fix
- Bedrock 和 Vertex AI 设置向导

---

## Part 3: 🔥 生态

### MCP Servers 热门推荐

| Server | 功能 | 适合 Sam？ | 安全评估 |
|--------|------|-----------|---------|
| **Firecrawl MCP** | 搜索+爬取一体化 | ⭐⭐⭐ 调研利器 | 🟢 |
| **Context7** | 持久记忆+上下文层 | ⭐⭐ 增强记忆 | 🟢 |
| **Chrome DevTools MCP** | Claude 直接控制 Chrome | ⭐⭐ 自动化 | 🟡 |
| **Notion MCP** | Notion 页面/数据库操作 | ⭐⭐⭐ 已在用 | 🟢 |

### ClawHub Skills 趋势
- 注册 skills 达 13,729，安全清理后剩 3,286 个
- 热门：Agent Browser (11K installs) / Cursor CLI Agent / n8n Workflow / Veryfi OCR / PixVerse AI

### GitHub Trending
- **Claude Forge** — 开源 AI dev toolkit
- **RunClaw** — OpenClaw 替代方案讨论

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热帖
1. **@GradonLi**: Claude Code vs OpenClaw CLI 对比分析
2. **@yanndine**: Claude Code 团队工作流文档 — 3 套 workflow 模板
3. **@MindBranches**: Karpathy — 声明式 > 命令式

### 实战技巧
- **声明式 > 命令式**：告诉 agent "要什么结果"，让它自己循环优化
- **`/autofix-pr`**：push → 跑命令 → 走人 → Claude 自动修复
- **Opus 4.6 1M context**：可加载整个项目代码库
- **NO_FLICKER + Focus View (`Ctrl+O`)**：专注编码
- **`/team-onboarding`**：自动生成团队入门指南

---

## 📊 信息可靠度

| 信息 | 可靠度 |
|------|--------|
| OpenClaw v2026.4.9 | 🟢 GitHub Release |
| Claude Code v2.1.113 | 🟢 官方 Changelog |
| MCP/ClawHub 推荐 | 🟡 多源评测 |
| Twitter 帖子 | 🟢 原帖直链 |

*NONO 🏠 | 2026-04-18 | 搜索 7 轮*
