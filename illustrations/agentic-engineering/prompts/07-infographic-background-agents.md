---
illustration_id: 07
type: infographic
style: blueprint
---

后台智能体 - 中心辐射式编排架构

Layout: hub-and-spoke with model diversity

ZONES:
- Zone 1 (中心): "指挥中心"主会话节点，人类操作者图标
- Zone 2 (辐射工作者): 三个并行工作者在独立上下文中 — Opus(实现，蓝色)、Gemini(研究，绿色)、Codex(审查，紫色)，每个有自己的工作树
- Zone 3 (左侧): Dispatch调度流程 — 规划→委派→跟踪，卡住时抛出澄清问题
- Zone 4 (右侧): 本地 vs 云端对比 — Dispatch(本地，快速反馈) vs Inspect(云端VM，规模化)
- Zone 5 (底部): CI集成 — 文档机器人、安全审查器、依赖更新机器人

LABELS: 指挥中心, Opus实现, Gemini研究, Codex审查, Dispatch, 异步运行, 实现者≠审查者, 群体智慧
COLORS: Deep Blue (#1A2B4A) background, Cyan (#00D4FF) for command center, Blue (#4488FF) for Opus, Green (#00CC88) for Gemini, Purple (#AA66FF) for Codex, Electric Blue (#0066FF) for dispatch lines
STYLE: Blueprint technical drawing. Grid background. Hub-and-spoke layout with different colored worker nodes. Async arrows with clock icons. Monospace labels. Glow effects on active workers.
ASPECT: 16:9

Clean composition with generous white space. Command center in upper-center, workers radiating below. Dark blue grid background.
