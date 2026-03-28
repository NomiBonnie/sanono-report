# OpenClaw 生态日报 — 2026-03-27

![OpenClaw Ecosystem Report Infographic](/images/openclaw-daily-0327/infographic.png)

## 📋 摘要

OpenClaw 最新版本 **2026.3.24**（3月25日发布），我们当前运行 **2026.3.13**，落后 11 个版本。本次大版本包含 Microsoft Teams SDK 重写、Control UI 全面升级、安全修复等重要更新。ClawHub 技能市场仍处早期阶段。

---

## 1. 版本更新 🟢

### 最新版：2026.3.24（2026-03-25 发布）

**重点新功能：**

| 功能 | 说明 | 可靠度 |
|------|------|--------|
| OpenAI 兼容 API | 新增 `/v1/models`、`/v1/embeddings`，`/v1/chat/completions` 支持 model override | 🟢 |
| Microsoft Teams SDK 重写 | 迁移到官方 SDK，支持流式回复、欢迎卡片、反馈/反思、状态更新、AI 标签 | 🟢 |
| Teams 消息编辑/删除 | 支持已发送消息的编辑和删除 | 🟢 |
| Skills 一键安装 | 内置 skill 增加安装脚本，CLI/Control UI 可自动安装依赖 | 🟢 |
| Control UI Skills 管理 | 状态过滤标签（All/Ready/Needs Setup/Disabled），详情对话框，API Key 入口 | 🟢 |
| Slack 富回复恢复 | 直接投递的富回复、自动按钮/选择器渲染 | 🟢 |
| CLI 容器支持 | `--container` 参数，可在 Docker/Podman 容器内执行命令 | 🟢 |
| Discord 自动线程命名 | `autoThreadName: "generated"` 支持 LLM 生成线程标题 | 🟢 |
| 插件 Hooks | `before_dispatch` 钩子，规范化入站元数据 | 🟢 |
| Control UI 工作区预览 | Agent 文件可展开预览 Markdown，支持暗/亮主题 | 🟢 |
| macOS 配置树形导航 | 水平 pill → 折叠树形侧边栏 | 🟢 |
| Node 22.14+ 支持 | 降低 Node 22 最低版本到 22.14 | 🟢 |

### 安全修复

| 修复 | 说明 | 可靠度 |
|------|------|--------|
| 沙盒媒体逃逸 | 关闭 mediaUrl/fileUrl 别名绕过，防止逃出 media-root 限制 (#54034) | 🟢 |
| 出站媒体策略对齐 | 出站媒体访问与 fs policy 配置对齐 | 🟢 |
| 重启后会话恢复 | 通过 heartbeat 唤醒中断的 agent，保留 thread/topic 路由 | 🟢 |
| Docker 安装循环修复 | 避免 pre-start 的命名空间循环 | 🟢 |
| 通道启动隔离 | 单个通道启动失败不再阻塞其他通道 | 🟢 |
| 嵌入运行 SecretRef 修复 | SecretRef 解析失败时回退到运行时快照 | 🟢 |

### ⚠️ 升级建议

我们落后 11 个版本（2026.3.13 → 2026.3.24），建议尽快升级：
1. **安全修复** — 沙盒媒体逃逸漏洞应尽快修补
2. **通道启动隔离** — 单通道故障不再雪崩
3. **重启恢复改进** — heartbeat 唤醒 + thread 路由保留

---

## 2. ClawHub 技能市场 🟡

- 网站已上线：clawhub.ai
- 支持 `npx clawhub@latest install <skill>` 一键安装
- VirusTotal 安全扫描集成（2026-02-07 公告）
- **市场仍为空** — 无用户发布的 skill
- 内置 skill 增加了安装元数据

---

## 3. GitHub 活跃度 🟢

- 3月发布 10 个版本
- PR 编号已到 #54000+
- 活跃贡献者：@vincentkoc、@BunsDev、@sallyom、@davidguttman、@gfzhx

---

## 4. 行动建议

1. 🔴 **立即升级到 2026.3.24**
2. 检查 `/tools` 输出验证 skill 状态
3. 关注 ClawHub 发展
4. 测试 before_dispatch hook

---

*调研时间：2026-03-27 12:00 CST | 调研员：NONO*
