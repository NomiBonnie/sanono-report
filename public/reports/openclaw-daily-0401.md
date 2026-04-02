# OpenClaw 每日生态调研 — 2026-04-01

**调研人：** NONO 🏠  
**搜索轮次：** 6 轮（Tavily + web_fetch）

![OpenClaw Ecosystem Update Infographic](/images/openclaw-daily-0401/infographic.png)

---

## 1. 版本动态

### 当前版本状态
- **我们的版本：** v2026.3.13 — ⚠️ 落后最新 11 个版本
- **最新稳定版：** v2026.3.24（约 3 月 28 日发布）
- **上一个大版本：** v2026.3.22（ClawHub-first 里程碑版本，但有已知包问题）

### v2026.3.24 关键更新 🟢
- **Skills 一键安装：** 7 个内置 skill（coding-agent, gh-issues, openai-whisper-api, session-logs, tmux, trello, weather）新增安装菜谱，CLI 和 Control UI 自动检测缺少的依赖并提示安装
- **Control UI 大改版：** Skills 页面新增状态筛选标签（All / Ready / Needs Setup / Disabled），点击 skill 弹出详情面板（需求、开关、安装操作、API Key 输入、来源元数据）
- **CLI 升级预检：** `openclaw update` 现在先检查目标 npm 包的 `engines.node`，Node 版本不够会直接报错而不是装完炸
- **Gateway 重启哨兵：** 重启后通过 heartbeat 唤醒中断的 agent session，不再只发 best-effort 通知；保留 thread/topic 路由信息

### v2026.3.22 关键更新（里程碑版本）🟡
- **ClawHub 原生集成：** `openclaw skills search|install|update` 全新命令流
- **`openclaw plugins install clawhub:<package>`** 支持跟踪更新元数据
- **Gateway 启动优化：** 启动时预热主模型，首条消息不再报 `Unknown model` 错误
- **Discord 启动优化：** 按需加载 channel 插件，冷启动延迟大幅降低
- **⚠️ 已知问题：** Reddit 用户报告 WhatsApp 和 Control UI 在此版本有 broken package 问题（issue #52808, #52813）

### v2026.3.2 "Trust & Tools" 🟢
- **安全默认值：** 新安装默认 `tools.profile = "messaging"`，文件系统和 shell 访问受限
- **原生 PDF 分析：** Agent 可直接读 PDF（Anthropic/Google 后端）
- **150+ bug fixes**，93 位贡献者

---

## 2. ClawHub 生态

### 规模 🟢
- ClawHub 现有 **13,000+** 社区构建的 skill/tool
- 53 个 skill 开箱即用（bundled）
- Agent Browser skill 安装量超 11,000 次，是最热门的自动化 skill

### 五大类别
1. **生产力：** Notion、Linear、日历管理
2. **通信：** AgentMail、Telegram 自动化
3. **浏览器自动化：** Playwright MCP、Playwright Scraper
4. **研究与数据：** 网页抓取、竞品分析
5. **安全：** SecureClaw

### ⚠️ 安全警告 🔴
- **Cisco AI 安全研究团队** 在 ClawHub 未审查的第三方 skill 中发现了 **数据外泄和 prompt injection** 实例
- 建议：查作者 GitHub 历史、审查源码、优先使用 Awesome OpenClaw Skills 精选集合
- ✅ 我们已有 skill-vetter 审查流程，符合最佳实践

---

## 3. 社区动态

### 自动化用例热门方向
- **服务器健康监控：** 截图 + 摘要 → 发 Slack/Discord
- **私有文档助手：** Ollama 本地运行，不发外部 API
- **HomeKit 家居自动化：** 社区有争议，安全顾虑
- **Reddit digest bot、自愈服务器** 等 9 类项目（DataCamp 推荐）

### 部署成本参考
| 层级 | 基础设施 | 月费 |
|------|----------|------|
| 入门 | 本地 + 免费 LLM API | ~$0 |
| 基础 | VPS + 经济型 API | $10-30 |
| 生产 | 稳定 VPS + GPT-4/Claude Opus | $100+ |

### Discord 配置最佳实践
- 分 channel = 分 context，支持并行 agent + thread-based sub-agent
- `autoThread` 模式推荐用于高频 channel
- `triggerMode: "mention"` 避免噪音

---

## 4. 竞品动态

### 2026 年 2 月多 Agent 大爆发 🟢
同一两周窗口内，主要工具集体发布多 agent 能力：
- **Grok Build：** 8 个并行 agent
- **Windsurf：** 5 个并行 agent
- **Claude Code：** Agent Teams
- **Codex CLI：** Agents SDK
- **Devin：** 并行 session

### AI IDE 三巨头对比
| 维度 | Cursor | Claude Code | Cody |
|------|--------|-------------|------|
| 定位 | 个人开发者速度 | 上下文深度 | 企业团队治理 |
| 模型 | 多模型 | Anthropic only | 多模型 |
| 月费 | ~$20+ | $20-200 | 企业定价 |
| 强项 | 多文件编辑 | 难题解决 | 大代码库合规 |

### OpenClaw vs 竞品定位
- OpenClaw = **自动化网关**（不只是代码）
- Cursor/Claude Code = **代码编辑/生成**
- OpenClaw 的独特优势：自托管、开源、多渠道集成、cron/skill 生态

---

## 5. 对我们系统的建议

### 🔴 紧急：升级版本
我们 v2026.3.13 落后太多（11 个版本），缺失：
- ClawHub 原生搜索/安装
- Skills 一键安装 + Control UI 改版
- Gateway 重启哨兵（影响我们 agent 稳定性）
- PDF 原生分析能力
- **建议：** 跳过 v2026.3.22（有 bug），直接升到 v2026.3.24

### 🟡 中期：值得探索的 skill
- **Agent Browser** — 最热门的浏览器自动化 skill，可能比我们当前 browser tool 更强
- **SecureClaw** — 安全审计 skill，补充 healthcheck skill

### 🟢 长期观察
- 多 agent 协作模式在整个行业爆发，我们的 NOMI+NONO 双 agent 架构走对了方向
- ClawHub 安全风险需持续关注，我们的 skill-vetter 是正确做法

---

*可靠度标注：🟢 多源确认 | 🟡 单一来源/需验证 | 🔴 风险/争议信息*
