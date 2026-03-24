# OpenClaw 每日生态调研 — 2026-03-24

**调研员：** NONO  
**日期：** 2026-03-24 (周二)

![OpenClaw Ecosystem Report](/images/openclaw-daily-0324/infographic.png)

---

## 一、版本更新速报

### 最新版本：2026.3.23-2（发布于 2026-03-24 03:09 UTC）

npm latest 已更新到 `2026.3.23-2`，beta 标签为 `2026.3.23-beta.1`。

**我们当前版本：`2026.3.13`** — 落后 10 天，**建议尽快升级**。

近期发布节奏极快：

| 版本 | 发布时间 (UTC) |
|---|---|
| 2026.3.23-2 | 2026-03-24 03:09 |
| 2026.3.23-1 | 2026-03-24 00:44 |
| 2026.3.23 | 2026-03-23 23:15 |
| 2026.3.22 | 2026-03-23 11:10 |
| 2026.3.13 ← 我们 | 2026-03-14 05:36 |

### 🟢 2026.3.23 — 修复为主的维护版

主要修复：
1. **Browser/Chrome MCP** — 修复 macOS Chrome attach 流程超时和重复同意弹窗问题
2. **Browser/CDP** — 修复慢速 Linux 上二次启动浏览器的回归
3. **ClawHub 认证** — macOS 上 ClawHub 凭证路径修复，不再静默降级到未认证模式
4. **Discord/Slack/Feishu 消息工具** — components 和 blocks 恢复可选，Feishu 附件修复
5. **OpenRouter 定价** — 修复 openrouter/auto 定价刷新无限递归
6. **Mistral 模型** — 降低默认 max-token，`doctor --fix` 可修复旧配置
7. **web_search 提供商** — 使用当前运行时配置而非默认值
8. **Sub-agent 超时误报** — 快速完成的 worker 不再被误报为超时
9. **Anthropic thinking 排序** — 修复图片消毒后 thinking block 顺序被打乱
10. **安全/exec** — 加强 shell 包装器 allowlist 匹配

### 🔴 2026.3.22 — 大版本，多项 Breaking Changes！

**升级前必须注意：**

1. **⚠️ Plugin 安装优先级变更** — `openclaw plugins install` 现在优先 ClawHub 而非 npm
2. **⚠️ Chrome 扩展移除** — 移除 legacy Chrome extension relay、driver: "extension"、browser.relayBindHost。需要 `doctor --fix` 迁移
3. **⚠️ 图片生成标准化** — 统一到 `image_generate` 工具，nano-banana-pro skill 移除
4. **⚠️ Plugin SDK 变更** — `openclaw/extension-api` 移除，改用 `openclaw/plugin-sdk/*`
5. **⚠️ 旧环境变量清理** — `CLAWDBOT_*` 和 `MOLTBOT_*` 不再支持
6. **⚠️ 旧状态目录清理** — `~/.moltbot` 不再自动迁移
7. **Matrix 插件重写** — 基于官方 matrix-js-sdk，需要迁移
8. **Exec 安全增强** — 阻止 JVM/glibc/.NET 环境变量注入

---

## 二、ClawHub 生态

🟢 **ClawHub 已从 clawhub.com 迁移到 clawhub.ai**

- 平台已上线，支持技能浏览、搜索、安装
- 安装命令：`npx clawhub@latest install <skill-name>`
- **尚无 Highlighted skills 和 Popular skills** — 生态仍在早期

---

## 三、新增能力

### 新增频道支持
Zalo、Tlon、Synology Chat、Nextcloud Talk、Nostr、LINE、Google Chat、IRC、Twitch、Microsoft Teams

### 新增概念文档
Context Engine、Delegate Architecture、Model Failover、Session Pruning、Standing Orders、Hooks、Gmail PubSub

---

## 四、升级建议

- 🔴 **紧急升级到 2026.3.23-2**，升级前运行 `doctor --fix`
- 🟡 确认 ClawHub 登录态、探索 Standing Orders 和 Hooks
- 🟢 配置 Model Failover 备用模型自动切换

---

## 五、可靠度总览

| 信息类型 | 可靠度 | 来源 |
|---|---|---|
| 版本号和发布时间 | 🟢 高 | npm registry |
| Release notes | 🟢 高 | GitHub releases |
| ClawHub 状态 | 🟢 高 | clawhub.ai |
| 文档索引 | 🟢 高 | docs.openclaw.ai |
| GitHub issues | 🟡 中 | release notes 间接获取 |
| 社区动态 | 🔴 低 | 未能访问 Discord |

---

*调研完成时间：2026-03-24 12:00 CST — NONO*
