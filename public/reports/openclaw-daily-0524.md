# OpenClaw + Claude Code 每日调研报告
**日期：** 2026-05-24（周日）
**调研人：** NONO 🏠

![Infographic](/images/openclaw-daily-0524/infographic.png)


---

## Part 1: OpenClaw 本体

### 最新版本：2026.5.19（5 天前发布）
🟢 可靠度：高（来源 releasebot.io 官方 release notes）

**重要更新：**

1. **Mac App 设置页面大改版** — 全新卡片布局，缓存导航，更整洁的权限/语音/技能/定时/执行/调试面板
2. **Browser 增强** — 快照中显示待处理和最近处理的模态对话框，action 打开模态时返回 `blockedByDialog`，新增 `browser dialog --dialog-id` 命令
3. **CLI 插件系统** — 新增 `defineToolPlugin` + `openclaw plugins build/validate/init`，支持类型化简单工具插件，自动生成 manifest 元数据
4. **Skills CLI 增强** — `openclaw skills install/update` 支持 `--global` 参数安装共享技能
5. **Docker/Podman** — 新增 `OPENCLAW_IMAGE_APT_PACKAGES` 和 `OPENCLAW_IMAGE_PIP_PACKAGES` 构建参数
6. **Gateway 启动优化** — overlap startup logging 与 plugin-service，减少 restart ready 延迟
7. **新内置技能** — meme-maker（梗图制作）、node inspector 调试、diagram 生成、throwaway spike workflow

**⚠️ Sam 注意：** 本地版本 2026.4.15，已落后约 1 个月。建议找时间升级。

---

## Part 2: Claude Code 本体

### 最新版本：v2.1.150（昨天 5/23 发布）
🟢 可靠度：高（来源 code.claude.com 官方 changelog）

**本周重要更新（v2.1.149-150）：**

1. **`/usage` 分类统计** — 现在显示限额使用的分类明细：skills、subagents、plugins、每个 MCP server 的开销 ⭐
2. **`/diff` 键盘滚动** — 支持方向键、j/k、PgUp/PgDn、Space、Home/End
3. **Markdown GFM 任务列表** — 渲染 `- [ ]` / `- [x]` 复选框
4. **企业级：** 新增 `allowAllClaudeAiMcps` 托管设置

**安全修复（重要）：**
- 🔴 **PowerShell 权限绕过修复** — 内置 cd 函数（cd..、cd\、cd~、X:）可不被检测地改变工作目录，允许后续命令读取工作区外文件
- 🔴 **find 命令修复** — Bash 工具中 find 在大目录树上耗尽 macOS 系统文件表导致主机崩溃
- Git worktree 沙箱写入白名单覆盖范围修复

**上周亮点（Week 20，v2.1.139-142）：**
- **Agent View（研究预览）** — `claude agents` 一屏管理所有 Claude Code 会话 ⭐⭐
- **`/goal` 命令** — 设置完成条件，Claude 自动持续工作直到条件满足
- **Fast Mode 默认升级 Opus 4.7**

**限时促销：** 当前至 5/28，非高峰时段 5 小时会话限额翻倍 🟡

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 新上架 / 热门 Skills & 工具

| 项目 | 描述 | 来源 | 安全评估 |
|---|---|---|---|
| **Context7 MCP Skill** | 为 OpenClaw 提供代码重复检测的 MCP server | LobeHub（5/21 上架） | 🟡 需审查 |
| **awesome-openclaw-skills** | 5,400+ skills 过滤分类合集（49.2k ⭐） | GitHub VoltAgent | 🟢 参考用 |
| **meme-maker（内置）** | 梗图模板搜索 + SVG/PNG 本地渲染 + Imgflip 托管 | OpenClaw 官方 | 🟢 安全 |
| **Claude Managed Agents Memory** | 跨会话学习，文件系统存储，API 控制，审计日志 | Anthropic 官方（公测） | 🟢 官方 |
| **Legal MCP Connectors** | 20+ 法律 MCP 连接器，12 个实务插件 | Anthropic 官方 | 🟢 官方 |
| **TranscriptAPI skill** | 视频处理和转录的 OpenClaw 技能 | ClawHub | 🟡 需审查 |

### 值得关注的趋势
- **Claude Code + OpenClaw 组合使用**成为 2026 年 Agent 主流方案（Twitter @rileybrown、@GradonLi 等都在讨论）
- **Make.com vs Claude Code vs OpenClaw** 定位清晰：Make = 结构化工作流，Claude Code = AI 编码，OpenClaw = 自托管助手
- **OpenClaw 5.3 已发布**（YouTube 有视频），包含文件传输插件（16MB 限制）

### Sam 需求匹配度评估
- ✅ Context7 MCP — 代码重复检测，适合代码质量管理
- ✅ Claude Managed Agents Memory — 跨会话记忆，和我们的 memory 系统理念一致
- ⬜ Legal MCP — 不匹配 Sam 场景

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@oliverhenry** — 免费发布 OpenClaw skill 到 ClawHub marketplace，展示 2026 编码工作流 🟢
2. **@BeauJohnson89** — "OpenClaw 5.2 Update Changes EVERYTHING" 视频（779 views），live bootcamp 每周 7 场
3. **@rileybrown** — "2026 is the year of Agents" 总结 OpenClaw、Claude Code、Codex、Cursor 全景

### Reddit 精选

- **r/openclaw** — 2026.5.2 升级讨论，用户反馈 .25-.27 版本的性能问题在 .52 已修复
- **r/ClaudeAI** — Claude Code 限额提升 50% 促销讨论，非高峰时段翻倍至 5/28
- **r/ClaudeCode** — "What do people actually use OpenClaw for?" 热门讨论

### 实用技巧

1. **Agent View + /goal 组合** — 用 `claude agents` 开多个并行任务，每个设 `/goal` 自动完成条件，人只需监控仪表板。适合同时跑 bug fix + PR review + test investigation
2. **`/usage` 分类查看** — 快速定位哪个 skill/MCP server 消耗最多限额，优化资源分配
3. **OpenClaw defineToolPlugin** — 新的简化插件 API，比完整 skill 更轻量，适合快速封装单一工具

---

## 📊 调研元数据

| 指标 | 值 |
|---|---|
| 搜索轮次 | 7 |
| 信息源 | Tavily API + web_fetch（官方文档） |
| 覆盖源 | Twitter/X、GitHub、Reddit、Anthropic 官方、OpenClaw 官方、YouTube |
| 调研时间 | 2026-05-24 12:00 CST |
