# OpenClaw + Claude Code 每日调研 — 2026-04-23

## Part 1: OpenClaw 本体

### 🆕 当前版本状态
- **本机版本:** 2026.4.15
- **最新版本:** 2026.4.21（发布于 Apr 22）
- ⚠️ **落后 6 个版本，建议更新**

### 2026.4.21 更新亮点 🟢
- **GPT-image-2 默认化:** 图片生成 provider 默认切换至 gpt-image-2，支持 2K/4K 尺寸提示
- **Doctor 修复:** 修复打包安装中插件运行时依赖恢复问题
- **安全加固:** `enforceOwnerForCommands=true` 时，非 owner 无法通过宽松 fallback 执行 owner-only 命令（#69774）
- **Slack 线程修复:** 保留 runtime outbound sends 中的 thread aliases（#62947）
- **Browser 优化:** 无效 ax<N> 无障碍引用立即拒绝，不再等待超时（#69924）
- **NPM 依赖清理:** 解决 node-domexception 弃用警告链

### 2026.4.20 更新亮点 🟢
- **Onboarding 重设计:** 安全声明改为黄色 banner + 分节清单，API key 输入增加 placeholder
- **Agent 提示增强:** 默认系统提示增加完成偏向、弱结果恢复、验证优先指导
- **分级定价支持:** 支持缓存目录中的分级模型定价，含 Kimi K2.6/K2.5 成本估算
- **Session 维护:** 默认启用 entry cap + age prune，加载时裁剪超大 store 防 OOM
- **Cron 状态分离:** 运行时状态迁移到 jobs-state.json，jobs.json 保持 git 可追踪
- **Kimi K2.6 默认:** Moonshot 相关功能默认升级到 kimi-k2.6

### 2026.4.14 🟢
- GPT-5 family 改进、channel provider 修复

---

## Part 2: Claude Code 本体

### 🆕 最新版本 2.1.118（Apr 23, 今天发布！）🟢

**重大新功能：**
- **Vim 可视模式:** 支持 `v` (visual) 和 `V` (visual-line) 模式，含选择、操作符和视觉反馈
- **自定义主题:** `/theme` 命令创建/切换命名主题，手动编辑 `~/.claude/themes/` JSON，插件可附带 themes/ 目录
- **Hooks 调用 MCP 工具:** Hooks 现在可通过 `type: "mcp_tool"` 直接调用 MCP 工具
- **DISABLE_UPDATES 环境变量:** 完全阻止所有更新路径（比 DISABLE_AUTOUPDATER 更严格）
- **WSL 继承 Windows 设置:** `wslInheritsWindowsSettings` 策略键
- **Auto mode 增量规则:** `"$defaults"` 关键字可在 autoMode 配置中追加规则而非替换
- **Plugin tag 命令:** `claude plugin tag` 创建带版本验证的 release git tags
- **`/cost` + `/stats` 合并:** 统一为 `/usage`

**大量 MCP OAuth 修复：**
- 修复 headersHelper 配置的 OAuth 认证动作隐藏
- 修复 OAuth token 刷新竞态条件（macOS keychain、跨进程锁）
- 修复 OAuth token 过期前被撤销导致刷新失败
- 修复 insufficient_scope 403 静默刷新而非提示重新授权

**其他修复：**
- 修复凭据保存崩溃导致 credentials.json 损坏（Linux/Windows）
- 修复 `/fork` 每次 fork 写入完整父对话（改为指针 + 按需加载）
- 修复 Alt+K/X/^/_ 冻结键盘输入

### Claude Code Desktop 重设计（Apr 15 发布）🟢
- **多 Session 侧边栏:** 并行管理多个编码 session
- **拖拽布局:** workspace 面板自由排列
- **内置终端 + 文件编辑器**
- **Routines（研究预览）:** 无需 active session 的自动化任务，运行在 web 基础设施上
  - Pro/Max/Team/Enterprise 用户可用
  - 按 plan 有每日运行上限

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 生态动态

**OpenClaw 即将成为 MCP Server** 🟡
- GitHub Issue #53215 提出将 OpenClaw 自身暴露为 MCP Server
- MCP 生态已累积 80k+ stars
- Peter Steinberger 3月27日宣布：下一版 OpenClaw 将可作为 MCP server 运行

**热门 MCP Servers（2026 Top 10）：** 🟢
1. **GitHub MCP** — 代码管理、PR、Issues
2. **MongoDB MCP** — 数据库操作
3. **Azure MCP** — 云服务集成
4. **Cloudflare MCP** — 边缘部署
5. **JetBrains MCP** — IDE 集成
6. **AWS MCP** — 云服务
7. **Vectara MCP** — 向量搜索
8. **K2view MCP** — 数据管理

**Sam 场景匹配度：** GitHub MCP（已在用 gh skill）、Cloudflare MCP（sanono-report 部署可能有用）

### ClawHub / Skills 动态

- **FrankenClaw:** 社区热门 MCP tool server，内含 12 个工具（Facebook 群高赞）
- **Fastio Skill (dbalve/fast-io):** 封装 Fastio MCP server，19 个文件管理工具一键安装
- **GWS (Google Workspace CLI):** 50+ 常用 workflow，一键安装为 skills，支持 openclaw/claude code/codex（@MisbahSy 推荐）

### Agent Swarm 模式 🟡
- @elvissun 分享 "OpenClaw + Codex/Claude Code Agent Swarm" 设置 — 用 Zoe 作为路由，bug 给 Codex，样式给 Claude Code，设计给 Gemini
- 这本质上是 Sam 当前 NOMI + NONO 双 agent 架构的扩展版

### ACP Channel Binding 技巧 🟡
- @onusoz 分享：Claude 订阅用户可通过 ACP（Claude Agents SDK）在 OpenClaw 中使用 Claude — 不浪费订阅 token

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **Agent Workspace 清理 Prompt** (@gkisokay) 🟢
   - 用 Codex/Claude Code Plan Mode 审计 OpenClaw workspace
   - 安全第一：先备份、Plan Mode 先行、不激进重构
   - **适用场景：** Sam 的 agent workspace 可以用这个做定期清理

2. **GTM Claw** (@VihaarNandigala) 🟡
   - OpenClaw + Claude Code 的 GTM（Go-To-Market）workflow 库
   - 自动在 Reddit/LinkedIn/Twitter 找潜在客户
   - Sam 暂不需要，但概念有趣

3. **Ultimate Setup 评测** (@nichochar) 🟢
   - 对比 openclaw / cowork / codex / claude code
   - 结论：Codex 编码最强（OpenAI 在给 token），各工具有不同最佳场景

4. **Ollama + Kimi K2.6** (@ollama) 🟢
   - `ollama launch openclaw --model kimi-k2.6:cloud` 一键启动
   - Blackwell GPU 扩容中，性能持续提升

### Reddit 精选

5. **OpenClaw vs Claude Code 定位对比** (r/better_claw) 🟢
   - OpenClaw = 万能后台（尤其离线任务）
   - Claude Code = 编码专精
   - 两者互补而非竞争

6. **OpenClaw 500k+ 日下载量** (r/openclaw) 🟢
   - Jason Calacanis: "killing openclaw is big tech's #1 goal in the LLM space"
   - 社区增长迅猛

7. **Claude Code Rust 重写** (r/openclaw) 🟡
   - 有人看了 Claude Code 泄露的源码后用 Rust 重写
   - 更快、开源，但稳定性存疑

---

## ⚠️ Sam 行动建议

1. **🔴 升级 OpenClaw:** 当前 4.15 → 最新 4.21，落后 6 版，含安全修复
2. **🟡 关注 Claude Code 2.1.118:** Hooks 可直接调 MCP 工具 — 可以简化我们的一些 workflow
3. **🟡 关注 Routines:** Claude Code 的无 session 自动化，可能替代部分 cron 任务
4. **🟢 OpenClaw 即将变 MCP Server:** 关注 #53215，可能改变 agent 间通信方式

---

*调研时间: 2026-04-23 12:00 CST*
*搜索轮次: 6 轮 Tavily + 2 轮 web_fetch*
*信息可靠度: 🟢 官方源确认 | 🟡 社区/二手源 | 🔴 未验证*

![Daily Intel Infographic](/images/openclaw-daily-0423/infographic.png)
