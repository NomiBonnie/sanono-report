# OpenClaw + Claude Code 每日调研 — 2026-04-21

![Infographic](/images/openclaw-daily-0421/infographic.png)

## Part 1: OpenClaw 本体

### v2026.4.10（4月12日发布）🟢
- **Active Memory Plugin** — 智能记忆管理，自动提升/降级记忆优先级
- **Local MLX Talk Mode** — Apple Silicon 本地语音对话，无需云端
- **Codex App-Server Harness Plugin** — 集成 Codex 作为 ACP harness
- **Microsoft Teams Pins/Reactions/Read Actions** — Teams 频道深度集成
- **SSRF Hardening + Launchd Fixes** — 安全加固

### v2026.4.7（4月7日发布）🟢
- Claude Opus 4.7 设为默认模型
- Gemini TTS 支持
- Model Auth 状态卡片
- Cloud-backed memory（跨设备记忆同步）
- Copilot embeddings 支持

### GitHub 动态（4月20日）🟢
- **PR #16273**: Podman 支持 — rootless 容器化部署（感谢 @DarwinsBuddy）
- 主仓库 361k stars, 73.7k forks

### ⚠️ 重要政策变化 🟡
- **Anthropic 4月4日宣布**：Claude Code 订阅用户使用 OpenClaw 等第三方 harness 需额外付费（pay-as-you-go）

---

## Part 2: Claude Code 本体

### April 2026 重大更新 🟢
- **Opus 4.7 xhigh effort level** — 更深度推理模式
- **Auto Mode**（Max tier 专属）— 全自动执行
- **Agent Teams 正式 GA** — 多 agent 协作生产可用
- **Skills + Plugins 统一** — 两套扩展系统合并
- **Security Hardening**
- **30+ versions in 17 days**

### Claude Cowork GA 🟢
- macOS + Windows 正式可用
- OpenTelemetry 支持
- Enterprise RBAC

### Claude Design（4月17日）🟢
- Anthropic Labs 新品，Opus 4.7 驱动
- 设计稿、原型、幻灯片、one-pagers

---

## Part 3: 🔥 生态

### MCP Servers 热门 🟢
| 名称 | 功能 | Sam 匹配度 |
|------|------|----------|
| Fastio (dbalve/fast-io) | 19 个文件管理工具 | ⭐⭐⭐ |
| Playwright MCP | 浏览器自动化 | ⭐⭐⭐ |
| Mercury Banking | 银行 API | ⭐ |

### GitHub 热门项目 🟢
- **openclaw-browser-plugin** — Chrome 扩展，网页内 AI 聊天/总结
- **awesome-openclaw-plugins** — 精选插件列表
- **MCP-to-Skill 转换器** — 一条命令转换
- **MCP 自动发现工具** — 检测未配置 MCP + Docker 支持

---

## Part 4: 🎮 社区玩法

### 高效 Workflow（Inverted Passion）🟢
1. `/prd` → `/dev` → `/walkthrough` 三段式
2. Docker + bypass = 夜间无人值守
3. Playwright 截图测试
4. Codex skill in Claude 做 code review

### Advent of Claude Tips 🟢
- `&` 前缀 offload 到 Web
- CI/CD 脚本化
- Agent SDK 10 行代码

### Lazy Bird 自动化 🟡
- Claude Code CLI 上班时自主开发

---

*调研时间：2026-04-21 | 搜索：8轮 Tavily | 可靠度：🟢确认 🟡待验证*
