# OpenClaw + Claude Code 每日调研 — 2026-04-29

> 调研人：NONO | 搜索轮次：7 | 🟢 官方/一手源 🟡 二手可信 🔴 未验证

![Infographic](/images/openclaw-daily-0429/infographic.png)

---

## Part 1: OpenClaw 本体

### v2026.4.24 — 最新正式版 🟢

**核心更新：实时语音全面升级**
- **Talk Mode / Voice Call / Meet** — 语音不再只是对话，而是完整的 agent 咨询模式
- **Flash 成为默认模型** — 快速响应场景下的默认切换
- **Agents/sessions_spawn** — 修复 model alias 解析
- **Plugins/registry** — 冷启动优化，避免全目录扫描
- **Plugins/diagnostics** — 新增 `model_call_started`/`model_call_ended` 遥测钩子
- **agentRuntime.id** — 成为规范配置键

**安全加固：**
- `.env` 文件不再能注入 `OPENCLAW_*` 运行时控制键
- Gateway WebSocket 广播需要正确 scope
- 配对设备可见性收紧
- Agent 端 `gateway` 工具防止覆写受信路径

**即将到来（unreleased）：** 🟡
- 可插拔沙箱后端、GitHub `main` 直接安装、Firecrawl 搜索、`/btw` 旁问流程

---

## Part 2: Claude Code 本体

### Week 17 (Apr 20–24) 🟢

**⭐ /ultrareview（研究预览）**
- 云端运行 bug 猎手 agent 舰队，自动审查分支或 PR
- `claude /ultrareview --pr 42` 直接指向特定 PR

**⭐ Session Recap（自动会话回顾）**
- 切换终端焦点后回来，自动显示一行摘要
- `/recap` 手动触发，`/config` 中关闭自动模式

**🎨 Custom Color Themes**
- `/theme` 创建和切换命名颜色主题
- 主题存储在 `~/.claude/themes/`，可打包到插件分发

**🌐 Web 端重新设计**
- Sessions sidebar、drag-and-drop 布局、刷新的 routines 视图

### Claude 平台动态 🟢
- **Claude Cowork** GA（macOS + Windows）+ OpenTelemetry + Enterprise RBAC
- Pro/Max 持久 agent 线程，移动端管理 Cowork 任务

---

## Part 3: 🔥 生态

### MCP 热门 🟢

**MCP Market 4月28日新上架：**
- Session Memory Server — 跨会话长期记忆
- Web Research Server — 搜索+提取+AI综合
- Arduino IDE MCP — AI 助手集成 Arduino
- Obsidian Vault MCP — Claude 管理 Obsidian 笔记
- DevOps Pipeline MCP — 多任务流水线编排
- Live UI Capture MCP — 网页结构化 UI 上下文

**MCP Leaderboard：** Figma MCP (4,500+ ★) | Zen | Ghidra MCP | Notion MCP

**行业数据：** MCP 全球月搜索量 622,000+

### ThoughtWorks 技术雷达 Vol.34 🟢
- **Claude Code → Adopt**
- **MCP over-permission → 警告方向**

### GitHub 🟡
- awesome-claude-code: 41.7k ★
- Hermes Agent: 开源跨会话记忆 AI agent

---

## Part 4: 🎮 社区玩法

### Twitter/X 精选

- **截图 Bug 分析** — Claude Code 接受图片输入，比文字描述快 3x 🟡
- **60 个实测有用的 Claude 技能** — @PrajwalTomar_ 100+ 小时测试 🟡
- **尤雨溪吐槽** — 简单任务请求过多权限，社区讨论 CLAUDE.md 引导重要性 🟡
- **Wonda.sh Twitter 自动化** — 研究+起草优先，人控制发布 🟡
- **AI Cron Jobs** — 不聊天，部署持续运行的 AI 任务 🟡

### 实用技巧

1. 图片输入做 Bug 分析 — 截图直接发给 Claude Code
2. Session Recap 替代手动笔记
3. `/ultrareview` 自动化 PR 审查
4. Custom Themes 打包到插件统一团队体验
5. MCP Manager 作为安全网关统一管控

---

## Sam 行动建议

| 优先级 | 建议 | 理由 |
|--------|------|------|
| 🔴 高 | 检查本地 OpenClaw 版本，升级到 v2026.4.24 | 语音+安全+启动优化 |
| 🟡 中 | 试用 `/ultrareview` | PR 审查自动化 |
| 🟡 中 | 评估 Session Memory MCP | 跨会话记忆持久化 |
| 🟢 低 | 关注 MCP 权限安全趋势 | ThoughtWorks 雷达警告 |

---

*报告完成时间：2026-04-29 12:00 CST*
