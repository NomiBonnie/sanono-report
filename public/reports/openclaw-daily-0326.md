# OpenClaw 生态调研日报 — 2026-03-26

![OpenClaw Ecosystem Report Infographic](/images/openclaw-daily-0326/infographic.png)

## 📊 摘要

我们当前版本 **2026.3.13**，npm 最新版 **2026.3.24**。落后 11 个版本，包含重大安全修复和新功能。**建议尽快升级。**

---

## 1. 版本更新 🟢

### 最新发布：2026.3.24（3月24日）

从 3.13 到 3.24 的密集发布周期（3.22、3.23-1、3.23-2、3.23、3.24），项目活跃度极高。

### 3.13 关键新功能

- **Chrome DevTools MCP 模式**：直接附加到已登录的 Chrome 浏览器会话，支持 `chrome://inspect/#remote-debugging`
- **Browser profile 系统**：`profile="user"` 用本机浏览器，`profile="chrome-relay"` 用扩展中继
- **浏览器批量操作**：支持 selector 定位、延迟点击、批量 dispatch
- **Dashboard v2 大更新（3.12）**：模块化 overview、chat、config、agent、session 视图，命令面板，移动端底部 tabs

### 3.12 关键新功能

- **GPT-5.4 Fast Mode**：session 级 fast 切换，跨 `/fast`、TUI、Control UI、ACP
- **Claude Fast Mode**：Anthropic API `service_tier` 映射
- **Ollama/vLLM/SGLang 插件化**：provider-plugin 架构，更模块化
- **Slack Block Kit 支持**：agents 可发送 Block Kit 消息
- **Slack 交互式回复**：按钮和选择器（需手动启用 `interactiveReplies`）

### 3.11 关键新功能

- **多模态记忆索引**：图片和音频用 Gemini embedding 索引
- **Gemini embedding-2-preview 支持**：可配置输出维度
- **ACP sessions_spawn resumeSessionId**：可恢复已有 ACP/Codex 对话
- **iOS 推送中继**：App Attest + 收据验证的官方推送
- **Mattermost 回复线程模式**：`replyToMode` 配置

## 2. 安全修复 🔴（重要！）

3.12 包含**大量安全修复**，多个 GHSA 编号：

| 漏洞 | 严重度 | 说明 |
|------|--------|------|
| GHSA-5wcw-8jjv-m286 | 🔴高 | WebSocket 跨站劫持，trusted-proxy 模式可获 admin 权限 |
| GHSA-pcqg-f7rg-xfvv | 🔴高 | exec 审批中不可见 Unicode 可伪造命令 |
| GHSA-99qw-6mr3-36qr | 🔴高 | 工作区插件自动加载可执行恶意代码 |
| GHSA-r7vr-gr74-94p8 | 🟡中 | 非 owner 可访问 /config 和 /debug |
| GHSA-rqpp-rjj8-7wv8 | 🟡中 | 共享 token 可自声明提权 scope |
| GHSA-2rqg-gjgv-84jm | 🟡中 | 外部 agent 调用可覆盖 workspace 边界 |
| GHSA-wcxr-59v9-rxr8 | 🟡中 | 沙箱 subagent 可读取父 session 元数据 |

**这些安全修复是升级的最强理由。**

## 3. ClawHub Skills 生态 🟡

- ClawHub 已从 clawhub.com 迁移到 **clawhub.ai**
- 支持 `npx clawhub@latest install <skill-name>` 一键安装
- 当前状态：**尚无 highlighted 或 popular skills**，生态仍处早期
- 支持版本管理、回滚、向量搜索
- 开源 MIT 协议，部署在 Vercel + Convex

## 4. 配置/性能优化建议 🟢

基于 changelog 的可操作优化：

1. **启用 Slack interactiveReplies**：`channels.slack.capabilities.interactiveReplies: true`
2. **Memory multimodal indexing**：`memorySearch.extraPaths` + Gemini embedding
3. **Compaction 后重索引**：`agents.defaults.compaction.postIndexSync`
4. **Discord 线程归档时间**：`autoArchiveDuration` 可设 1h/1d/3d/1w
5. **Fast Mode**：升级后可用 GPT-5.4 和 Claude fast mode 加速响应

## 5. 社区动态 🟡

- **贡献者活跃**：@vincentkoc、@obviyus、@ngutman、@BunsDev、@Lanfei 等持续贡献
- **安全研究者参与**：@tdjackey、@lintsinghua、@zpbrent 等发现多个安全漏洞
- **K8s 支持**：新增 Kubernetes 部署文档和 Kind setup
- **OpenCode Go provider**：新增 Go 语言 provider

## 6. 行动建议

### ⚡ 立即执行
1. **升级到 2026.3.24** — `npm i -g openclaw@latest && openclaw gateway restart`

### 📋 本周评估
2. 评估 Slack Block Kit / interactiveReplies
3. 测试多模态记忆索引功能
4. 查看 Dashboard v2 新界面

### 🔍 持续关注
5. ClawHub skill 生态发展
6. 3.22-3.24 的具体 changelog

---

**信息来源：** npm registry、本地 CHANGELOG.md、clawhub.ai、GitHub  
**调研时间：** 2026-03-26 12:00 CST  
**调研人：** NONO 🏠
