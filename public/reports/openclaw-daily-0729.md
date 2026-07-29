# OpenClaw + Claude Code 每日调研 — 2026-07-29

## Part 1: OpenClaw 本体

### OpenClaw 2026.7.2 正式版 🟢
- **远程编码会话**：可在云端 worker 运行 Control UI session，在终端打开 Codex/Claude catalog session，恢复 OpenCode 和 Pi session
- **原生自动化和节点**：移动端 Automations 对等、Android 前台语音唤醒、headless Linux 节点暴露摄像头/位置/通知能力
- **更安全的 Channel 操作**：修复 Telegram durable-ingress 重启后丢失、Signal 审批控制响应性、channel allowlist 不再授予 owner 权限
- **引导式 Control UI 设置**：设置页配置模型提供商、引导式 channel 接入、创建 session 时选择图像和模型
- **Gateway 和 Session 恢复**：防止 restart admission 阻塞 Gateway、finalization 停滞后恢复 reply session、one-shot cron 生命周期竞争修复
- **安装和打包**：新增 Linux deb 和 AppImage，Windows winget 安装后立即继续
- **新增**：`OPENCLAW_SUPERVISOR_MODE=external`（给 OCM 等外部生命周期管理器用）
- **新增**：ClickClack 引导式设置和命令菜单

### 与 Sam 的相关性
- 远程编码会话 + 节点能力扩展 → 对多设备工作流有价值
- Gateway 恢复修复 → 提升 cron job 稳定性

---

## Part 2: Claude Code 本体

### Claude Code 最新更新（2026 年 7 月下旬）🟢
- **Artifacts 调用 MCP Connectors**：发布的 artifact 可实时调用 MCP connector 获取数据（如 GitHub PR dashboard），不再是快照
- **Screen Reader Mode**：`claude --ax-screen-reader`，替代视觉终端为纯文本线性输出，支持 VoiceOver/NVDA
- **`/fork` 改为后台 session**：对话复制到新的后台 session（有 `claude agents` 行），原来的 in-session fork 现改为 `/subtask`
- **Auto Mode 不再需要 opt-in**：Amazon Bedrock、Google Agent Platform、Microsoft Foundry 上默认可用
- **MCP 调用 >2 分钟自动后台化**：`CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 可配置阈值
- **`claude auto-mode reset`**：恢复默认 auto-mode 配置
- **Corporate Launcher**：`CLAUDE_CODE_PROCESS_WRAPPER` / `processWrapper` 设置
- **Claude Opus 5 成为默认 Opus 模型**

### 与 Sam 的相关性
- Artifacts + MCP = 可构建实时数据 dashboard，适合项目监控
- `/fork` → 后台 session 更适合多任务并行
- Auto Mode 全平台默认 → 降低配置门槛

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 热门项目和 Skills

| 项目/Skill | 功能 | 来源 | 评估 |
|---|---|---|---|
| **Context7 MCP** | 为 AI 提供最新库文档和代码示例 | LobeHub/ClawHub | 🟢 实用，减少幻觉 |
| **mcporter** | MCP 通用连接器，让 OpenClaw 接入各类 MCP server | ClawHub | 🟢 必备基础设施 |
| **MintMCP** | OAuth 2.0 安全 MCP 连接 | mintmcp.com | 🟢 安全加固 |
| **VoltAgent/awesome-openclaw-skills** | 精选 skill 合集（AI Hunter Pro, AgResource 等） | GitHub | 🟡 需逐个审查 |

### MCP 生态动态
- Artifacts + MCP Connectors 让 Claude Code 的 MCP 生态价值暴增：发布的页面可以实时拉取数据
- OpenClaw 2026.7.2 的远程编码 + 节点能力为 MCP server 部署提供更多场景

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code 实战技巧

1. **Spec-based 开发法**（来源：sankalp.bearblog.dev）🟢
   - 不直接让 Claude 写代码，先写 minimal spec → 让 Claude 用 AskUserQuestionTool 采访你 → 生成完整 spec → 再执行
   - 适合大型 feature 开发

2. **非工程师也能用 Claude Code**（来源：Anthropic 官方 PDF + 多个博客）🟢
   - 营销团队用 Claude Code 自动化：晨间简报（省 75-80h/月）、多平台广告监控、竞品分析
   - Google Ads 批量创意生成（CSV → 分析 → 生成新变体）

3. **"我 2025 年和 Claude Code 说的话比和人多"**（来源：HackerNoon）🟡
   - 用 Claude Code 浏览网页、回复邮件、编辑生产数据库（Supabase MCP）、用 Remotion 编辑视频
   - 极端用法，注意安全边界

4. **Claude Cowork 17 人实测**（来源：buildtolaunch.substack）🟢
   - 15/17 的创作者认为有效
   - Routines 用自然语言写，不需要代码
   - 适合 Sam 的内容创作 + 自动化场景

### OpenClaw 社区
- OpenClaw 已超 310,000+ GitHub stars，1,200+ contributors
- ClawTank.dev 提供云端一键部署 MCP server（不影响本机）
- `openclaw onboard` 新增引导式设置，降低新手门槛

---

## 📊 信息可靠度总结
- 🟢 高可靠（官方源/可验证）：8 条
- 🟡 中可靠（社区/博客）：3 条
- 🔴 低可靠：0 条

---

*调研时间：2026-07-29 12:00 CST | 搜索轮次：8 | 工具：Tavily API + web_fetch*

![OpenClaw + Claude Code Weekly Pulse Infographic](/images/openclaw-daily-0729/infographic.png)
