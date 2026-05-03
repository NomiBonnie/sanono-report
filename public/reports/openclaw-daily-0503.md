![OpenClaw + Claude Code Daily Intelligence](/images/openclaw-daily-0503/infographic.png)

# OpenClaw + Claude Code 每日调研 — 2026-05-03 (Sunday)

---

## Part 1: OpenClaw 本体 🔧

### ⚠️ 版本落后提醒
- **本地版本:** 2026.4.15
- **最新版本:** 2026.5.2 (发布于 ~May 2)
- **落后版本数:** 约 10+ 个版本，建议尽快升级

### 2026.5.2 版本亮点 🟢
- **外部插件安装与更新改进** — 插件分发更可验证：ClawHub digest metadata、版本化 ClawPack artifact、下载字节验证
- **Doctor 修复工具增强** — 依赖修复更完善
- **Plugin 管理** — Crestodian plugin search/list/install/uninstall 操作，支持审批和审计

### 近期重要更新（2026.4.25 - 2026.5.2）🟢
- **TTS 大升级 (4.25):** `/tts latest`、聊天级 auto-TTS 控制、角色 persona、per-agent/per-account 覆写
- **Channel 可靠性提升:** Telegram 长 markdown 安全拆分、Slack 主动 DM 支持、Discord 跳过禁用 reaction、WhatsApp socket 清理改善
- **搜索/Provider 增强:** Gemini 搜索时间过滤、DuckDuckGo 免密钥路径、Grok 4.3 作为 xAI 默认模型
- **安全性:** 插件注册延迟优化、subagent model-priority 文档修正、compaction fallback 行为改善

### 社区动态 🟡
- 开放 Issues/PRs 主要围绕**信任边界**：subagent 模型优先级、compaction fallback、plugin registry 延迟、SSH GUI 检测、图片附件卫生检查
- HN 热帖 "Who is using OpenClaw?" (383 comments) — 社区对 OpenClaw 的真实使用场景有大量讨论，主要用途：WhatsApp/Telegram 日常 LLM 接入 + 本地记忆控制

---

## Part 2: Claude Code 本体 🤖

### 最新版本 v2.1.126 (May 1, 2026) 🟢
核心更新：
1. **`/model` picker 支持自定义 gateway** — 当 `ANTHROPIC_BASE_URL` 指向兼容 gateway 时，自动列出 `/v1/models` 端点的模型
2. **`claude project purge`** — 新命令，删除项目所有 Claude Code 状态（transcripts、tasks、file history、config），支持 `--dry-run`、`-y`、`-i`、`--all`
3. **`--dangerously-skip-permissions` 增强** — 现在跳过 `.claude/`、`.git/`、`.vscode/` 等保护路径的写入提示（毁灭性删除仍会提示）
4. **OAuth 改进** — 当浏览器回调无法到达 localhost 时（WSL2/SSH/容器），可直接在终端粘贴 OAuth code
5. **OpenTelemetry** — `claude_code.skill_activated` 事件新增 `invocation_trigger` 属性
6. **安全修复:** `allowManagedDomainsOnly`/`allowManagedReadPathsOnly` 在高优先级 managed-settings 缺少 sandbox block 时被忽略的 bug

### 重要 Bug 修复 🟢
- Mac 休眠唤醒后 "Stream idle timeout" 错误修复
- 日文/韩文/中文在 Windows no-flicker 模式乱码修复
- 超大图片粘贴破坏 session 的问题修复（自动缩放）
- MCP connector 被手动 server 卡在 needs-auth 状态抑制的问题修复

### Week 17 功能回顾 (Apr 20-24) 🟢
- **`/ultrareview`** — 公开研究预览：云端 bug 搜索代理队列，自动回传发现到 CLI/Desktop
- **Session recap** — 切回终端时自动显示离开期间发生了什么
- **自定义主题** — `/theme` 创建和切换色彩主题，插件可打包主题
- **Claude Code on the Web 重新设计** — 新 sessions sidebar + 拖拽布局

### Effort Level 变更 🟡
- Pro/Max 用户在 Opus 4.6 和 Sonnet 4.6 上的默认 effort level 从 `medium` 改为 `high`

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Server 热门推荐

| MCP Server | 功能 | 适合 Sam | 安全评估 |
|---|---|---|---|
| **Google Workspace MCP** | Gmail/Drive/Calendar/Docs/Sheets 完整集成 | ⭐⭐⭐ 高 | 🟢 Google 官方 |
| **Atlassian Rovo MCP (Jira)** | Jira 工单查询/创建/评论/状态转换 | ⭐⭐ 中 | 🟢 Atlassian 官方 |
| **Context7 MCP** | 文档和知识库搜索，上下文注入 | ⭐⭐ 中 | 🟢 社区验证 |
| **Figma MCP** | 设计稿读取，UI 组件提取 | ⭐⭐⭐ 高（设计背景） | 🟢 官方 |
| **Sentry MCP** | 错误监控/诊断集成 | ⭐ 低 | 🟢 Sentry 官方 |
| **MemPalace** | 本地持久记忆 + 语义搜索 | ⭐⭐ 中 | 🟡 第三方，需审查 |

### ClawHub 热门 Skills (May 2026) 🟢

| Skill | 安装量 | 功能 |
|---|---|---|
| **Capability Evolver** | 35K | AI 自改进能力 |
| **Wacli** | 16K | CLI 工具集 |
| **ByteRover** | 16K | 数据处理 |
| **Self-Improving Agent** | 15K | 自我优化 agent |
| **Agent Browser** | 11K | 浏览器自动化 |
| **Summarize** | 10K | 内容总结 |
| **GitHub** | 10K | GitHub 工作流 |

**生态规模：** ClawHub 已有 3,286-5,400+ skills（不同来源统计有差异），总下载量 150 万+

### 关键趋势 🟡
- **MCP token 成本问题被社区关注** — 基准测试显示 MCP 调用比 CLI 多消耗 10-32x tokens。优化策略：Dynamic Toolsets（减少 91-97% input tokens）、Hierarchical Router（省 99.5% context）、TSV 替代 JSON（省 30-40%）
- **PIV Loop 工作流** — Plan → Implement → Validate，成为 Claude Code agentic coding 的主流方法论

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 热门讨论

1. **HN: "Who is using OpenClaw?"** (383 comments, 342 points) 🟢
   - 真实用户分享：主要作为 WhatsApp/Telegram 日常 LLM 接入，记忆存 git 可读可编辑
   - 争议点：是否需要完整记忆管理 vs 即用即丢

2. **Reddit: "OpenClaw vs Claude Code"** 🟡
   - 核心结论：两者不是竞品，OpenClaw 是 agent runtime/router，Claude Code 是 coding agent
   - 最佳搭配：OpenClaw 作为基础设施，Claude Code 作为 ACP harness 接入

3. **从 Copilot/Claude Code 迁移到 OpenClaw** (GitHub Gist) 🟢
   - 核心优势：直接用你的 API key，无加价无 credit multiplier

### 💡 实用技巧

1. **Claude Code `/ultrareview`** — 合并 PR 前跑一次，云端 bug 猎手团队自动扫描，特别适合 auth/data migration 类关键变更
2. **Session Recap** — 多 session 工作时，切回来自动看到离开期间的进展摘要
3. **MCP 成本优化** — 用 Dynamic Toolsets (Speakeasy 开源) 从静态加载切换到按需加载，减少 91-97% input tokens
4. **`claude project purge`** — 项目做完后清理所有 Claude Code 状态，保持环境干净

### 📊 社区情绪
- Agent 平台正从 "酷炫 demo" 阶段进入**供应链基础设施**阶段
- 核心关注从 "agent 能不能做任务" 转向 "agent 能不能被治理、调试、在故障下被信任"
- OpenClaw 的 May 更新直接对准了这些 "无聊但关键" 的接缝

---

## 🎯 Sam 行动建议

1. **🔴 升级 OpenClaw** — 当前 2026.4.15 → 最新 2026.5.2，落后约 10 个版本，包含安全修复
2. **🟡 考虑 Google Workspace MCP** — 直接在 agent 中操作 Gmail/Drive/Calendar，适合你的工作流
3. **🟡 试用 `/ultrareview`** — Claude Code 新功能，PR review 自动化
4. **🟢 了解 MCP token 优化** — 如果 MCP 使用频繁，Dynamic Toolsets 可大幅降低成本

---

*调研时间: 2026-05-03 12:00 CST | 搜索轮次: 7 | 来源: Tavily + Web Fetch*
*可靠度标注: 🟢 = 官方/可验证 | 🟡 = 社区/间接来源 | 🔴 = 未验证*
