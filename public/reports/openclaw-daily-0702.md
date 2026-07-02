# OpenClaw + Claude Code 每日调研 — 2026-07-02

![Infographic](/images/openclaw-daily-0702/infographic.png)

## Part 1: OpenClaw 本体

### v2026.6.11 — 稳定性修复版本 🟢

最新版本聚焦可靠性改进：

- **Channel 投递修复**：Telegram、Discord、WhatsApp、Matrix、Google Chat、iMessage、飞书、Mattermost 全线修复消息投递和重连问题
- **Google Chat DM 修复**：新 DM 不再被误判为群聊，正确路由到一对一对话
- **飞书语音时长显示**：语音回复现在显示音频时长
- **Discord/Telegram 回复绑定**：跨 session 切换后回复仍能正确关联到原对话
- **后台任务结果投递**：图片/视频/音乐生成结果现在正确返回到发起请求的聊天窗口

**评估：** 质量修复版，无重大新功能。Telegram 回复绑定修复对我们影响最大。

---

## Part 2: Claude Code 本体

### 最新版本 v2.1.197 — 重大更新 🟢

**核心新功能：**

1. **Claude in Chrome GA** — Chrome 扩展正式全量发布
2. **Background Agent 通知 Hook** — agent_needs_input / agent_completed 事件通知
3. **Background Agent 自动 PR** — 后台 agent 完成代码工作后自动 commit、push、开 draft PR
4. **`/dataviz` Skill** — 内置图表和 Dashboard 设计指导 + 色板验证器
5. **Explore Agent 继承 Model** — 不再固定用 haiku，继承主 session model（上限 opus）
6. **Subagent 继承 Extended Thinking** — context compaction 和子代理继承思考配置
7. **Gateway: AWS Anthropic 支持** — anthropicAws 作为上游 provider，model-not-found 自动 failover

**修复亮点：**
- 网络瞬断不再中断整个回合（ECONNRESET 自动重试）
- Agent teams：队友 API 错误后正确报告 "failed"，stuck 队友可被唤醒重试
- macOS 后台 agent 本地网络权限修复
- worktree 切换后 `/desktop` 不再报错

---

## Part 3: 🔥 生态

### ClawHub 热门 Skills

| Skill | 功能 | 安全评估 | Sam 匹配度 |
|-------|------|----------|-----------|
| skill-safety-scanner | 自动扫描 skill 安全风险 | 🟢 官方 | ⭐⭐⭐ |
| /dataviz (Claude Code 内置) | 图表设计指导 + 色板验证 | 🟢 官方 | ⭐⭐⭐ |

### MCP Servers 推荐

| Server | Stars | 功能 | 适用场景 |
|--------|-------|------|----------|
| Firecrawl MCP | 2.8k | 高质量网页抓取 + 结构化提取 | 调研任务 |
| Totalum MCP | 1.2k | 企业数据连接器 | 数据整合 |

### 安全警告 🔴

**Snyk 研究报告：280+ ClawHub Skills 泄露 API 凭证** — Skills 代码中硬编码了 API keys。建议：继续使用 skill-vetter 审查。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Hacker News 热帖

**"I'm 60 years old. Claude Code has re-ignited a passion"** — 60 岁开发者分享 Claude Code 重燃编程热情，社区共识：降低编程门槛但核心架构思维仍然必要。

### 实用技巧

1. **Worktree 并行 Agent** — git worktree + 多 Claude Code agent 互不干扰，background agent 自动开 PR 后流程更顺
2. **Agent Teams 容错** — 新版修复 teammate 挂掉后恢复逻辑
3. **Notification Hook 集成** — 后台 agent 完成/需要输入时触发 webhook → Telegram/Slack 通知

---

## 📊 总结

| 板块 | 重要度 | 关键信息 |
|------|--------|----------|
| OpenClaw | ⭐⭐ | v2026.6.11 稳定性修复 |
| Claude Code | ⭐⭐⭐⭐ | Background Agent 自动 PR + 通知 Hook |
| 生态 | ⭐⭐⭐ | ClawHub 安全警告；/dataviz 新 skill |
| 社区 | ⭐⭐ | Worktree 并行 agent 成为主流 |

**今日最值得关注：** Claude Code background agent 自动 PR — 直接影响多 agent 工作流设计。
