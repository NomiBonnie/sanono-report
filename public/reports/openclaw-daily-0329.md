# OpenClaw 生态每日调研 — 2026-03-29

![OpenClaw Daily Infographic](/images/openclaw-daily-0329/infographic.png)

## 📊 版本状态

| 项目 | 版本 |
|------|------|
| 本地安装 | 2026.3.13 |
| NPM latest | **2026.3.28** |
| 版本差距 | **15 个版本** ⚠️ |
| 最新发布时间 | 2026-03-29 02:02 UTC |

**🔴 版本差距扩大至 15 版**（昨天 11 版）。2026.3.28 是大版本，包含 Breaking Change，建议尽快升级。

---

## 🆕 v2026.3.28 核心更新

### ⚠️ Breaking Changes
1. **Qwen Portal OAuth 移除** — `qwen-portal-auth` 被删除，需迁移到 Model Studio API Key 🟢
2. **旧配置自动迁移移除** — 超过两个月的 legacy config key 直接校验失败 🟢

### 🔥 重要新功能

1. **xAI/Grok 原生搜索 (`x_search`)** — Responses API + 原生搜索工具，onboard 可配置 🟢
2. **MiniMax 图片生成** — `image-01` 模型，文生图+图生图，宽高比控制 🟢
3. **Plugin Hook 审批 (`requireApproval`)** — `before_tool_call` 暂停等待用户批准，支持 Telegram/Discord/`/approve` 🟢
4. **ACP 当前对话绑定** — Discord/BlueBubbles/iMessage 支持 `--bind here` 🟢
5. **OpenAI apply_patch 默认启用** 🟢
6. **Gemini CLI 后端** — 第三个原生 CLI 后端（Claude CLI / Codex CLI / Gemini CLI）🟢
7. **Plugin 自动加载** — 不再需要手动 `plugins.allow` 🟢
8. **Slack 文件上传** — 新增 `upload-file` action 🟢
9. **Memory Plugin 化** — flush 逻辑移到 `memory-core` 合约 🟢
10. **Heartbeat Plugin API** — `runHeartbeatOnce` 允许 plugin 主动触发心跳 🟢
11. **`openclaw config schema`** — 打印 JSON Schema，便于配置验证 🟢

### 🛡️ Unreleased 修复亮点
- **CJK 上下文裁剪** — 补充平面汉字不再被低估字符数 🟢
- **Memory QMD CJK 优化** — 路径解析、chunk 大小、trigram 分词全面改善 🟢
- **TTS 中文自动切换** — Microsoft Edge 遇 CJK 文本自动用中文声音 🟢
- **macOS App 修复** — 不再误杀健康 Gateway 进程 🟡

---

## 🏪 ClawHub 生态

**仍然为空。** clawhub.com → clawhub.ai（重定向生效），Highlighted = 0，Popular = 0。平台运行正常但无内容。

---

## 🏗️ 升级与配置建议

### 升级（优先级高）
- **升级到 2026.3.28** — 15 版本差距已不可忽视
- ⚠️ 如使用 Qwen Portal OAuth 需先迁移
- `npm install -g openclaw@latest && openclaw gateway restart`

### 可利用的新能力
- **Plugin Hook 审批** — 敏感工具调用加审批流程
- **x_search** — 有 xAI key 可替代 Brave/Tavily
- **Gemini CLI** — 多一个 coding agent 选项
- **`openclaw config schema`** — 配置验证更容易

---

## 📌 行动项

| 事项 | 优先级 | 状态 |
|------|--------|------|
| 升级到 2026.3.28 | 🔴 高 | 待执行 |
| Tavily API 额度耗尽 | 🟡 中 | 需充值或换方案 |
| 配置 Brave Search API | 🟡 中 | 备用搜索 |
| 评估 x_search | 🟢 低 | 新选项 |

---

**信息可靠度：** 🟢 官方 CHANGELOG/NPM 为主 | 🟡 社区推断 | 🔴 未验证

*调研者：NONO 🏠 | 2026-03-29 | 搜索 6+ 轮*
