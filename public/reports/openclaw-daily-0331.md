# OpenClaw 每日生态调研 — 2026-03-31

**调研人：** NONO  
**当前版本：** 2026.3.13 → ⚠️ **最新 2026.3.28（落后 5 个版本！）**

![OpenClaw Ecosystem Update Infographic](/images/openclaw-daily-0331/infographic.png)

---

## 1. 版本更新 🔥

### 我们落后了！

| 版本 | 发布日期 | 状态 |
|------|----------|------|
| 2026.3.13 | 03-14 | ✅ 当前运行 |
| 2026.3.22 | 03-23 | ❌ 未升级 |
| 2026.3.23 | 03-23~24 | ❌ 未升级（含 2 个热修复） |
| 2026.3.24 | 03-25 | ❌ 未升级 |
| **2026.3.28** | **03-29** | ❌ **最新稳定版，未升级** |

🟢 **可靠度：高** — 数据来自 npm registry 直接查询。

### Unreleased Changelog 重大变更

**Breaking Changes（升级前必读）：**
1. **`nodes.run` 移除** — shell 执行统一走 `exec host=node`，`nodes invoke` 保留设备专属操作
2. **后台任务存储迁移** — JSON 文件 → SQLite，依赖 `tasks/runs.json` 的脚本需迁移

**重要新功能：**

| 功能 | 影响 | 与我们相关？ |
|------|------|-------------|
| MCP 远程 HTTP/SSE 服务器支持 | 可配置远程 MCP 服务器 URL + auth headers | ⭐ 高 |
| Streamable-HTTP MCP 传输 | 新的 MCP 传输方式 + 连接超时配置 | ⭐ 高 |
| 统一后台任务控制面板 | ACP/subagent/cron/background 统一 SQLite 管理 | ⭐ 高 |
| Flow/Task 编排 | 新增 flow 注册表 + 任务关联 | ⭐ 高 |
| LLM idle-stream 超时 | 模型卡死时自动中断 | ⭐ 高 |
| CJK 上下文裁剪修复 | 中文补充平面字符正确计数 | ⭐ 高 |
| Memory/QMD 多项修复 | 搜索、索引、collection 配置修复 | ⭐ 高 |
| Plugin before_install 安全钩子 | 安装 skill/plugin 前可触发外部审查 | ⭐ 中 |
| ACPX MCP 桥接 | ACP 插件可以桥接 MCP 工具 | ⭐ 中 |
| Slack 状态反应生命周期 | queued→thinking→tool→done 状态 emoji | ⭐ 中 |
| Gateway 安全认证加固 | trusted-proxy 需要 token | ⭐ 中 |
| WhatsApp 表情回应 | 可以用 emoji 回应消息 | 🔵 低 |
| LINE 媒体发送 | LINE 支持图片/视频/音频 | 🔵 低 |
| Android 通知转发控制 | 包过滤、安静时段、频率限制 | 🔵 低 |
| Matrix 代理/历史/线程 | Matrix 多项增强 | 🔵 低 |

---

## 2. ClawHub 技能市场

**现状：** clawhub.ai 已上线，支持 `npx clawhub@latest install <skill>` 安装。

- Highlighted skills: 暂无
- Popular skills: 暂无上架
- **仍处于早期阶段**

🟡 **可靠度：中** — 网站内容为 JS 动态渲染，列表可能加载失败。

---

## 3. 配置/性能优化建议

基于 changelog 的优化项：
1. **MCP 远程服务器** — 新增 `mcp.servers` URL 配置支持
2. **idle-stream 超时** — 新增 LLM 空闲流超时配置
3. **配置缓存** — 配置热加载优化
4. **CJK 字符估算** — 中文补充平面字符正确计数
5. **TTS 中文自动切换** — Microsoft Edge 语音自动识别 CJK

---

## 4. 社区动态

- **用户增长显著** — 大量新用户在 Twitter 分享体验
- **使用场景扩展：** 报税、保险纠纷、空气净化器控制、航班值机、健康追踪
- **多平台部署：** Raspberry Pi、Mac Mini、云服务器
- **社区贡献活跃** — @vincentkoc 多项修复，几乎每个 changelog 条目都有外部贡献者
- **关键评价：** "iPhone moment"、"first time living in the future since ChatGPT"

🟢 **可靠度：高**

---

## 5. 对我们系统的建议

### 🔴 紧急：升级到 2026.3.28
- 落后 5 个版本，涉及安全修复和中文体验改善
- Breaking changes 需注意：后台任务 JSON→SQLite 迁移
- 建议：先在空闲时段测试升级

### ⭐ 值得启用的新功能
1. MCP 远程服务器 — 可以连接更多外部工具
2. 统一任务控制面板 — 改善 sub-agent 和 cron 任务管理
3. Flow 编排 — 为复杂多步任务提供基础设施

### 🔧 配置调优
1. 启用 LLM idle-stream 超时
2. CJK 上下文裁剪修复将改善中文对话质量

---

*调研完成时间：2026-03-31 12:00 CST*
