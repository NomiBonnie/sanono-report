# OpenClaw + Claude Code 每日调研 — 2026-04-20

![Daily Infographic](/images/openclaw-daily-0420/infographic.png)

## Part 1: OpenClaw 本体

### OpenClaw 2026.4.12 发布（4月12日）
🟢 可靠度：高（GitHub Releases + 多源确认）

质量/稳定性为主的版本，不是功能大更新：

- **Claude Opus 4.7 作为新默认模型** — 跟随 Anthropic 最新发布
- **Gemini TTS** — 内置 Google 插件支持 Gemini 语音合成
- **Cloud-backed LanceDB 内存** — 内存系统可云端持久化
- **Copilot Embeddings** — GitHub Copilot 嵌入支持
- **Active Memory 独立插件化** — 从 dreaming 系统拆出为独立插件，可按需启用
- **Model Auth Status Card** — 新增模型认证状态卡片，快速检查 API 连接状态
- **Plugin 打包精简** — 更轻量的插件分发格式
- **Hooks/Ollama 超时修复** — 慢速本地模型不再因 15s 超时导致 slug 生成失败
- **OpenAI/Codex OAuth** — 增加 Codex 所需的 OAuth scopes
- **Agent exec 策略对齐** — host=auto 会话正确显示 fallback 策略

### ⚠️ CVE-2026-33579 权限提升漏洞
🔴 可靠度：高（Reddit r/cybersecurity + 多源报道）

**严重安全问题：** 未认证的 OpenClaw 实例可被远程接管。攻击路径：连接未认证实例 → 获取 pairing 权限 → 列出管理设备。

**行动建议：** 确认我们的实例已启用认证，检查 `openclaw devices list` 是否有异常设备。已在 2026.4.12 的安全补丁中修复。

### Anthropic 限制第三方 Harness 使用 Claude 订阅
🟡 可靠度：中（HN 讨论 + Reddit + Facebook 多源，但细节有争议）

Anthropic 开始限制 Claude 订阅额度用于 OpenClaw 等第三方 harness。HN 热帖讨论激烈，社区担忧 OpenClaw + Claude 的长期可用性。Peter Steinberger（OpenClaw 创始人）确认未来兼容性可能更难维护。

**影响：** 我们用 API key 调用，不受订阅限制影响。但需关注后续政策变化。

---

## Part 2: Claude Code 本体

### Claude Opus 4.7 正式发布（4月16日）
🟢 可靠度：高（Anthropic 官方 + Claude Help Center 确认）

- **更强编码能力** — 软件工程任务显著提升
- **更好的长时间任务处理** — 复杂多步骤工程任务稳定性增强
- **更高分辨率视觉** — 图像理解能力提升
- OpenClaw 已在 2026.4.12 中将其设为默认

### Claude Code 版本更新（v2.1.69 → v2.1.101）
🟢 可靠度：高（官方 changelog）

4 月份发布了 30+ 更新：
- **MCP Elicitation 支持**（v2.1.76）— MCP 服务器可请求用户输入
- **Session 稳定性修复** — teleport/resume 相关问题修复
- **错误诊断增强** — 429 错误不再输出原始 JSON
- **16 色调色板修复** — SSH/mosh 下颜色显示正常
- **Focus Mode 队列提示修复** — 不再丢失排队提示

### Claude Cowork 正式 GA
🟢 可靠度：高（Anthropic 官方 + Forbes 报道）

- 1 月 Research Preview → 4 月 GA
- 面向非开发者的桌面 Agent（Claude Desktop 内置）
- 沙盒 VM 本地文件访问 + 多步执行 + 插件生态
- **Cowork Dispatch** — 手机远程控制桌面任务
- **Persistent Agent Thread** — Pro/Max 用户可跨设备管理任务
- **Microsoft Office 集成** — Word/Excel/PowerPoint 协同
- Enterprise: RBAC + OpenTelemetry + 支出限制

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 热门 GitHub 项目

| 项目 | Stars | 说明 | Sam 匹配度 |
|---|---|---|---|
| **awesome-mcp-servers** | 85.1k ⭐ | MCP 服务器大全 | ⭐⭐⭐ 参考选型 |
| **everything-claude-code** | 161k ⭐ | Claude Code 完全指南 | ⭐⭐⭐ 技巧参考 |
| **awesome-claude-skills** | 54.9k ⭐ | Claude skills 集合 | ⭐⭐ 可能有新 skill |
| **Claude Forge** | 新项目 | AI dev toolkit（开源）| ⭐⭐ 值得关注 |
| **context7** (Upstash) | 热门 | 上下文管理 MCP | ⭐⭐ 长上下文场景 |
| **cc-switch** | 新项目 | Claude Code 多配置切换 | ⭐⭐ 多 agent 场景 |
| **MemPalace** | 新项目 | 记忆宫殿 MCP | ⭐⭐ 记忆增强 |
| **TrendRadar** | 新项目 | 趋势追踪 | ⭐ 调研辅助 |

### MCP Server 推荐（适合 Sam 场景）

- **Tavily** — 已在用，Web 搜索首选
- **Playwright** — 浏览器自动化，复杂网页交互
- **Supabase** — 数据库操作，如果有数据项目
- **Obsidian** — 知识管理集成
- **OpenClaw MCP Server**（Feature Request #53215）— 社区提议将 OpenClaw 自身暴露为 MCP Server，尚在讨论

### ⚠️ 安全提醒
awesome-mcp-servers 生态爆发（85k+ stars），但 MCP server 安全审查仍然薄弱。安装任何新 MCP 前必须审查来源。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **Google Stitch 2.0 + Claude Code via MCP** (@PrajwalTomar_)
   - 设计工具 + Claude Code 的 MCP 工作流
   - 关键技巧：对 Claude Code 要非常明确地说明包含/排除哪些功能
   
2. **PM 用 Claude Code 自动化工作** (@aakashgupta)
   - 建议：不要一上来就"建 workflow"，先找一个能自动化的任务省 6 小时
   - 适合 Sam 的产品经理视角

3. **Claude Code GTM + 工程团队 workflow** (@yanndine)
   - 3 个新 workflow 模板：适用于 GTM 和工程团队
   
4. **Claude Code vs OpenClaw 定位对比** (@GradonLi)
   - Claude Code = 编码导向 | OpenClaw = 通用 Agent 平台
   - 两者互补而非竞争

### Reddit / HN 讨论

- **r/artificial**: OpenClaw + Claude 可能更难用（Peter Steinberger 确认）— 社区关注度高
- **HN**: Anthropic 限制 Claude Code 订阅用于第三方 — 讨论激烈，500+ 评论
- **HN**: Claude Code 复杂工程任务中"rush to completion"行为 — 用户反映 high effort 模式也存在

### 实用技巧

- **Claude Code 显式指令** — "Be very explicit about what to include and what to skip"（多人推荐）
- **小任务优先** — 找一个具体的 6 小时任务自动化，比建大 workflow 更有效
- **MCP 配置集中管理** — Claude Code 有 5+ 个配置文件位置，建议统一用 .claude/settings.json

---

## 📊 今日总结

| 板块 | 重要度 | 核心信息 |
|---|---|---|
| OpenClaw | ⚠️ 高 | 2026.4.12 稳定性版本 + CVE 漏洞需检查 |
| Claude Code | 🔥 高 | Opus 4.7 发布 + Cowork GA + 30+ 更新 |
| 生态 | 📈 中 | MCP 生态爆发，MemPalace/cc-switch 值得关注 |
| 社区 | 💡 中 | Anthropic 限制政策引发讨论，实用技巧丰富 |

**🚨 需要行动：**
1. 检查 OpenClaw 实例认证状态（CVE-2026-33579）
2. 确认已更新到 2026.4.12
3. 关注 Anthropic 第三方 harness 政策变化
