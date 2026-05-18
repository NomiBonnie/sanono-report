# OpenClaw + Claude Code 每日调研 — 2026-05-18 (Sunday Recap)

## Part 1: OpenClaw 本体

### 版本动态
- **最新 beta:** `2026.5.16-beta.3` (May 15) 🟢
- **最新 stable:** `2026.5.12` (May 15) 🟢
- 本周 beta 频率高，3 天出了 3 个 beta

### 重要更新 (2026.5.12 ~ 5.16-beta)
1. **xAI Grok OAuth 登录** — SuperGrok 订阅者可直接 OAuth，无需 XAI_API_KEY 🟢
2. **多语言 Setup Wizard** — 英文/简中/繁中本地化完成，对中文用户友好 🟢
3. **Skill 缓存优化** — 热 gateway turn 间复用 resolvedSkills，减少重复 snapshot 构建，性能提升明显 🟢
4. **Cron 增强** — `openclaw cron run --wait` 支持 timeout + poll interval，自动化脚本可阻塞等待 🟢
5. **安全审计抑制** — `security.audit.suppressions` 允许标记已知风险，减少噪音 🟡
6. **Mac 远程配置** — `openclaw-mac configure-remote` 可预配置，跳过 onboarding 🟢
7. **音乐生成** — 新增 fal + OpenRouter 音乐生成 provider（MiniMax/ACE/Stable Audio）🟡
8. **Group Chat 静默观察** — `ambientTurns: "room_event"` 让 always-on bot 默认安静 🟢
9. **Subagent 交接标注** — 子任务完成时标记 "ready for parent review"，提醒父 agent 验证 🟢
10. **Control UI 配额显示** — Overview 卡片和 Chat header 显示 provider 配额用量 🟢

### 对 Sam 的影响
- **中文 Setup Wizard** 对新设备部署有帮助
- **Cron --wait** 对我们的定时任务管理很实用
- **Subagent 交接标注** 与 AGENTS.md 中的验证流程高度一致

---

## Part 2: Claude Code 本体

### Week 19 (May 4-8) 更新 🟢
1. **Plugins from .zip / URL** — `--plugin-url` 直接从 URL 加载插件，无需本地安装。适合临时试用或内部分发
2. **History Search 跨项目** — `Ctrl+R` 恢复全项目搜索（v2.1.124 后曾限制），`Ctrl+S` 缩小到当前项目
3. **Worktree 分支** — 从 local HEAD 或 remote default 新建 worktree
4. **Auto Mode Hard Deny** — 无条件阻止特定 action，比 permission 更强硬

### 版本: v2.1.128 → v2.1.136

### Anthropic 生态大动作 (5月)
1. **Managed Agents 三大新功能** 🟢
   - **Dreaming** — 回顾历史 session 找规律，agent 自我改进
   - **Outcomes** — 定义成功标准，agent 知道"做对了"是什么意思
   - **Multiagent Orchestration** — lead agent 拆任务，分配给专家 agent（独立 model/prompt/tools）
2. **Claude for Small Business** — 云端 workflow 接入 QuickBooks/HubSpot/M365 🟡
3. **Usage Limits 收紧** — Axios 5/14 报道，Anthropic 收紧使用限制应对 OpenAI agent 竞争 🔴

### 对 Sam 的影响
- **Dreaming** 概念值得关注 — 与 NOMI 的经验卡片系统思路类似
- **Multiagent Orchestration** 与 OpenClaw 的 subagent 体系可互补
- **Usage Limits** 需关注是否影响我们的 API 调用

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 热门 Skills
1. **AdaptlyPos** — 智能 POS 系统集成 🟡
2. **Veryfi Skill** — 发票/收据 OCR 自动化，新上架 🟢
3. **GitHub 工具套件** — Issues/PR/CI 管理（我们已在用）🟢
4. **Morning Briefing** — 每日摘要生成，社区最常推荐 🟢
5. **Email Management** — 邮件分类和自动回复 🟡

### Claude Code 生态
1. **Claude Code Routines** — 无代码自动化，非技术用户也能用 🟢
2. **Claude Code Agent Teams** — 3 个并行 sub-agent 协作建站，实测有效 🟢
3. **Hooks 深度解析** — 18+ hook 类型，pre-session + post-compaction hooks 保持 agent 身份 🟢
4. **Persistent Memory 方案** — Reddit 用户分享 hooks 自动加载 briefing + memory 搜索方案 🟢

### MCP 动态
- OpenClaw MCP 指南更新，强调 JSON-RPC 统一接口 🟢
- Firecrawl-backed search/scrape tools 未发布但在开发中 🟡

### 推荐关注
| 项目 | Stars | 安全 | Sam 匹配度 |
|---|---|---|---|
| Claude Code Agent Teams | N/A | ✅ 官方 | ⭐⭐⭐ 多 agent 协作 |
| Veryfi Skill (ClawHub) | 新上架 | ✅ 认证 | ⭐⭐ 发票场景 |
| Persistent Memory hooks | 社区方案 | ⚠️ 自建 | ⭐⭐⭐ 我们已有类似 |

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门
1. **@ttorres** — "Claude Code: Show and Tell" 线上活动预告 5/26，分享 workflow 🟢
2. **@petergyang** — OpenClaw/Hermes/Codex/Claude Code 对比：OpenClaw 在技术抽象层面更灵活 🟢
3. **@ghumare64** — 200K context 实际只有 70K（MCP tools 占用）的实用提醒 🔴
4. **@techNmak** — CLAUDE.md 是构建 AI pipeline 最关键的单一文件 🟢
5. **Karpathy 笔记** (被 @MindBranches 转发) — Claude coding workflow 实战心得 🟢

### Reddit 精选
- r/ClaudeCode: 用 hooks 构建 persistent memory 系统（pre-session 自动加载 briefing）
- r/ClaudeAI: Auto-memory 官方功能上线，跨 session 记忆调试模式和偏好

### 实用技巧
1. **Context 管理** — MCP tools 会大量消耗 context window，只启用需要的 🔴重要
2. **Plugin .zip 分发** — Week 19 新功能，团队内部插件不再需要发布到 marketplace
3. **Ctrl+R 跨项目搜索** — 恢复后非常实用，找上周在别的 repo 跑过的命令
4. **Hard Deny Rules** — auto mode 下无条件阻止危险操作，比 permission 更安全

---

_调研完成时间: 2026-05-18 12:00 CST_
_搜索轮次: 8 轮_
_信息可靠度: 🟢 官方/可靠源 | 🟡 二手/待验证 | 🔴 需注意_

---

## Infographic

![OpenClaw + Claude Code Weekly Digest](/images/openclaw-daily-0518/infographic.png)
