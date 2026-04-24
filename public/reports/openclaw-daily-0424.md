# OpenClaw + Claude Code 每日调研 — 2026-04-24

![Infographic](/images/openclaw-daily-0424/infographic.png)

## Part 1: OpenClaw 本体

### 最新版本：v2026.4.20（4月22日发布）
- 🟢 **Kimi K2.6 支持** — provider-aware `/think`，根据运行模型自动调整推理触发方式
- 🟢 **BlueBubbles iMessage 修复** — 发送和 tapback 功能恢复正常
- 🟢 **Cron 状态/投递清理** — 修复计划任务状态漂移问题
- 🟢 **Gateway 配对 + 插件启动加固** — 设备配对和插件初始化更稳定

### 四月关键事件回顾
| 日期 | 版本 | 要点 |
|------|------|------|
| 4/1 | v2026.4.1 | `/tasks` 聊天内置任务板，SQLite 任务账本 |
| 4/3 | v2026.4.2 | 持久化任务流，Gateway 重启后可恢复 |
| **4/4** | — | ⚠️ **Anthropic 切断订阅**：Claude Pro/Max/Team 不再覆盖 OpenClaw 用量 |
| 4/7 | v2026.4.3 | 紧急 provider 加固：OpenRouter 修复、GLM-5.1/Gemini 2.5 Pro 原生适配器 |
| 4/11 | v2026.4.4 | 3 个 CVE 补丁（symlink 沙箱逃逸 CVSS 8.1、剪贴板注入 7.2、ACP token 泄露 6.4） |
| **4/14** | **v4.3** | 🔥 **Multi-Provider Engine** — providers.toml 统一路由、fallback 链、预算上限、`/provider` 命令 |
| 4/20 | v2026.4.20 | Kimi K2.6、BlueBubbles、cron 清理 |

### 🔴 安全提醒
- **CVE-2026-28114（CVSS 8.1）**：恶意 skill 可通过 symlink 逃逸沙箱读取系统文件 → 建议重装所有 ClawHub skill
- **CVE-2026-28115（CVSS 7.2）**：剪贴板内容自动注入 prompt → 影响 iMessage 和 macOS Web UI
- **CVE-2026-28116（CVSS 6.4）**：ACP token 泄露到 debug 日志 → 如曾贴过日志需轮换 token

### ⚡ 对 Sam 的影响
- v4.3 的 Multi-Provider Engine 与我们的多 provider 配置高度相关 — **config-self-edit guard** 默认阻止 agent 改写 `openclaw.json`/`providers.toml`，需 `--allow-root-config-writes` 才能放行
- Anthropic 订阅切断对我们无影响（已用 API key）

---

## Part 2: Claude Code 本体

### 最新版本：v2.1.119（4月23日）🟢
**重要新功能：**
- `/config` 设置（theme/editor mode/verbose）持久化到 `~/.claude/settings.json`，支持 project/local/policy 覆盖优先级
- `--from-pr` 支持 **GitLab MR、Bitbucket PR、GitHub Enterprise** URL
- `--print` 模式尊重 agent 的 `tools:`/`disallowedTools:` frontmatter
- `--agent <name>` 尊重 agent 定义的 `permissionMode`
- **PowerShell 工具命令**可在 permission mode 下自动批准
- Hooks: `PostToolUse` 新增 `duration_ms`（工具执行时间）
- Subagent + SDK MCP server 重连改为**并行**（不再串行）
- Vim mode: Esc 在 INSERT 不再拉出队列消息
- `owner/repo#N` 短链自动用 git remote host（不再硬编码 github.com）
- 安全: `blockedMarketplaces` 正确执行 `hostPattern`/`pathPattern`
- OpenTelemetry: `tool_result`/`tool_decision` 增加 `tool_use_id`

**Bug 修复亮点：**
- Windows CRLF 粘贴多余空行
- kitty keyboard protocol 多行粘贴丢失换行
- Glob/Grep 工具在 Bash 被拒绝时消失（macOS/Linux）
- 全屏滚动回弹
- MCP OAuth 非 JSON 响应导致连接失败

### Claude Cowork GA（4月9日）🟢
- **正式发布** macOS + Windows
- 新增：OpenTelemetry、角色访问控制（RBAC）、团队花费上限
- **Zoom MCP 连接器**
- 持久化 agent thread（Pro/Max）— 手机+桌面都能管理
- **Claude Design** 发布（快速视觉设计工具）— TechCrunch 4/17 报道

### Claude Opus 4.7（4月16日）🟡
- 改进推理和编码能力
- 新 tokenizer，定价 $5/1K tokens
- 社区反馈：部分用户报告 "rush to completion" 行为增加

---

## Part 3: 🔥 生态

### MCP Servers 热门
| 项目 | 说明 | 适合 Sam？ |
|------|------|-----------|
| **mcp-openclaw-skills** | Go 语言 MCP server，暴露 OpenClaw skills 元数据 | 🟡 可观察 |
| **awesome-mcp-servers** | 83.9k⭐ 索引库，索引所有生产级 MCP server | ✅ 参考 |
| **X (Twitter) Automation Skill** | 33 个命令的 Twitter 自动化 Claude Code skill | 🟡 有趣 |

### GitHub 热门
| 项目 | 说明 |
|------|------|
| OpenClaw #53215 | Feature Request: OpenClaw MCP Server — 暴露 OpenClaw 能力为 MCP 工具 |
| claude-code Rust 重构 | 社区开源版，号称更快 — Reddit 热帖 |

### ClawHub 趋势
- **bibigpt-skill**：B站/抖音/小红书等 30+ 平台视频摘要（之前只有 YouTube）
- 安全提醒：CVE-2026-28114 后建议所有 ClawHub skill 重装

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 热点话题

**1. Anthropic 订阅切断引发大讨论**
- HN 热帖："Anthropic no longer allowing Claude Code subscriptions to third-party harnesses"
- Reddit r/openclaw: "After 3 months I'm done, OpenClaw has officially become a money pit"
- OpenClaw 应对：v4.3 Multi-Provider Engine 让用户轻松切换
- **实用建议**：用 GLM-5.1（免费开源）+ Gemini 2.5 Pro 做 fallback chain

**2. Claude Code 实用技巧**
- CLAUDE.md 项目记忆
- 同时跑 5 个 AI agent
- Ultraplan 大型项目规划
- `/autofix-pr` 一键 PR 修复
- Monitor 工具实时日志

**3. "Tokenmaxxing" 现象（TechCrunch 4/17）**
- 开发者追求最大 token 用量，实际生产力反而下降
- 提醒：质量 > 数量，合理规划 prompt 比堆 token 重要

**4. OpenClaw 500K 日下载量**
- Reddit 热帖讨论 "Day 1 wish I'd known this" 经验

**5. Reddit 升级注意事项**
- ⚠️ Docker 用户 + Google Vertex/Gemini：不要拉 2026.4.12 镜像（严重 bug）
- 建议等 4.20 或更新版本

### 💡 实用技巧
- `providers.toml` + fallback chain = 省钱利器（primary: GLM-5.1 免费 → fallback: Gemini → 最后: Claude API）
- `/tasks` 任务板替代手动 cron 管理
- Claude Code `/config` 设置现在持久化 — 不用每次重设

---

*调研时间：2026-04-24 12:00 CST*
*搜索轮次：8 轮（Tavily API）*
*信息可靠度：🟢 官方源验证 | 🟡 社区/二手源 | 🔴 未验证*
