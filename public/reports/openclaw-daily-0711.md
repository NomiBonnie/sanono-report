# OpenClaw + Claude Code 每日调研 — 2026-07-11

![OpenClaw + Claude Code Weekly Pulse Infographic](/images/openclaw-daily-0711/infographic.png)


## Part 1: OpenClaw 本体

### 当前稳定版：v2026.6.11 | 最新 beta：2026.6.11-beta.1

**本周重要更新：**

- 🟢 **iOS/Android 正式上线**（6月30日 TechCrunch 报道）— OpenClaw 终于有原生手机 App，可与 Gateway 配对
- 🟢 **v2026.6.11 亮点：**
  - Channel delivery reliability（Telegram/WhatsApp/Slack/Discord 全线加固）
  - Provider and model recovery（provider 挂了自动恢复）
  - Session, memory, and trust continuity（session 身份注入 runtime prompt）
  - Slack router relay mode（新）
  - Raft External Agent wake bridge（新）
  - Official plugin installation and repair

**近期 fix（July PRs）：**
- `#98304` 修复 iOS 聊天换行丢失
- `#98376` iOS Talk 使用 Gateway speech providers
- `#97174` Telegram plugin callback routing 修复
- `#98755` cron detach session-targeted runs
- `#99143` Telegram group history always on
- `#99446` agents preserve fd find failures
- `#99570` Android reject IPv6 zone IDs

**升级建议：** 生产环境保持 `2026.6.10`，测试环境可升 `2026.6.11`。我们当前应该在 6.10 或更早，可以考虑升级。

---

## Part 2: Claude Code 本体

### 最新版本：v2.120.5（Jul 8, 2026 更新 CHANGELOG）

**近期重要更新：**

- 🟢 **Manual default permission mode** — 新的默认权限模式，更安全
- 🟢 **Login-expiry warnings** — 登录快过期会提醒
- 🟢 **Agent status + manual mode badges** — 更清晰的状态显示
- 🟢 **Background session improvements** — daemon 更稳定，不再静默丢失 subagent
- 🟢 **Fullscreen mouse click controls** — 全屏模式支持鼠标操作
- 🟢 **Sandbox credential blocking** — 安全增强，sandbox 不泄露凭据
- 🟢 **Org model restrictions** — 企业管理员可限制模型使用

**Bug fixes（密集）：**
- 修复 `claude agents` 发 slash commands 到 background session 的问题
- 修复从 `claude agents` 打开 chat 时 "currently running as a background agent" 崩溃循环
- 修复 WebFetch 大 HTML 挂起、proxy 204 crash
- 修复 CJK history boundary drops（中文用户相关！）
- 修复 potential >1GiB Edit OOM
- 修复 MCP multi-block error truncation

**Anthropic 平台动态：**
- 🟢 **Admin analytics + model-level entitlements** — Enterprise 管理员可设置默认模型、查看使用趋势
- 🟢 **Claude Cowork 扩展到 mobile/web** — session 跨设备同步
- 🟢 **API key expiration settings**（Jul 8）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP & Skills 热门

| 项目 | 说明 | 评估 |
|---|---|---|
| **awesome-openclaw-skills** (VoltAgent) | 4.9k forks，35+ 分类，最全的 skill 目录 | ⭐ 值得关注新增 |
| **Claw Control** (@_clawcontrol) | 实时 Kanban dashboard，per-agent tracking | 🟡 新项目，待验证 |
| **X/Twitter Automation Skill** | 33 commands，完整 OAuth 1.0a 集成 | 🟢 成熟 |
| **OpenTweet MCP Server** | Claude Code 直接从 terminal 发推 | 🟢 开发者友好 |
| **Wonda** | Twitter/X research + drafting via Claude Code | 🟡 偏研究用途 |

### 社区趋势

- **Hyperagent** 云端方案出现 — Reddit 热议 "还需要 Mac Mini 跑 OpenClaw 吗？"（285 votes）
- **AgentSkills 开放标准** — Anthropic 推 Skills 跨平台互通（Claude Code ↔ OpenClaw ↔ Codex）
- **Enterprise managed auth for MCP** — MCP providers 支持企业 OAuth 管理

### Sam 场景匹配度

| 推荐 | 匹配度 | 理由 |
|---|---|---|
| Claw Control (Kanban) | ⭐⭐⭐ | 可视化 NOMI/NONO agent 状态 |
| awesome-openclaw-skills 目录 | ⭐⭐ | 发现新 skill 的索引 |
| Claude Code CJK fix | ⭐⭐⭐ | 中文用户直接受益 |

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 热门帖子 & 玩法

1. **"I replaced a $200K GTM hire with @openclaw"** — Twitter 最高互动帖
   - 玩法：LinkedIn engagement mining → targeted outreach → autonomous follow-up
   - 🟡 夸张但思路有参考价值

2. **AI Developer Workflow 2026**（developersdigest.tech）
   - Claude Code = primary coding agent（Max plan）
   - Cursor = review layer, not authoring tool
   - 核心：vault 作为 single source of truth

3. **Claude Code Auto Mode + /goal + Routines**（MindStudio）
   - 组合使用实现无人值守 workflow
   - 适合定时任务、研究自动化

4. **STORM Research Method in AI Workflows**
   - Stanford 方法：5 expert perspectives → 25% more organized research
   - 可以优化我们的调研流程

5. **Claude Code Dispatch**（手机远程触发桌面 session）
   - iPhone 上批准任务、监控 agent
   - 配合 OpenClaw 手机 App 形成完整移动工作流

### 💡 小技巧

- `claude agents` 现在不会静默丢失 subagent — 切回时工作保留
- `--channels` permission relay → 审批通知转发到手机
- `--bare` flag → 脚本化调用更干净
- Manual mode 是新默认 → 更安全但需要更多手动确认

---

*调研时间：2026-07-11 12:06 CST | 搜索轮次：6 | 来源：Tavily API*
*可靠度标注：🟢 = 官方/高可信 | 🟡 = 社区/待验证 | 🔴 = 传闻*
