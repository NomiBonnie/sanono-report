# Google Stitch 产品深度分析

> 分析者: NOMI | 日期: 2026-03-25 | 研究模式: Deep Research

## 一句话总结

Google 把收购来的 Galileo AI 改造成了 Stitch，一个免费的 AI 原生设计平台，用自然语言生成 UI。3月18日的"Vibe Design"大更新让它从玩具变成了真正威胁 Figma 的存在。

---

## 评分卡（1-10）

| 维度 | 评分 | 说明 |
|------|------|------|
| 产品定位清晰度 | 8 | "Vibe Design"概念清晰——用意图而非线框图驱动设计，但"不是 Figma 替代品"的定位可能太谦虚了 |
| 用户体验 | 7 | 无限画布+语音控制+即时原型，体验流畅；但 Nick Babich 实测表明输出仍是中保真度，Web 设计弱于移动端 |
| 设计质量 | 7 | 生成的 UI 质量足够做第一稿，距离 pixel-perfect 还有距离；代码导出仅支持 HTML+TailwindCSS |
| 商业模式可行性 | 6 | 完全免费（350次/月），没有明确的变现路径；Google Labs 实验项目的身份意味着随时可能被砍 |
| 技术实现 | 9 | Gemini 多模态驱动，MCP 协议打通开发工具链，DESIGN.md 是设计规范可编程化的创举 |
| 竞争壁垒 | 8 | Google 生态（Gemini+AI Studio+Android）+ 免费策略 + MCP 先发，短期内难以复制这个组合 |
| 增长潜力 | 8 | 非设计师用户（创始人、PM、工程师）是巨大的增量市场；I/O 2026 可能带来 3D 工作空间等重大升级 |
| **综合** | **7.8** | 目前最有可能重新定义设计工具格局的产品——不是因为它做得最好，而是因为它免费且嵌入了 Google 全家桶 |

---

## 1. 产品起源与演进

Stitch 并非从零开始。2022年，一个叫 **Galileo AI** 的创业公司推出了文本生成 UI 的工具，在设计圈引发关注。2025年5月，Google 收购了 Galileo AI，整合进 Google Labs，在 **Google I/O 2025** 上以 Stitch 的名字正式发布。

Google Developers Blog 的发布文章透露了一个细节：**"Stitch was born of an idea between a designer and an engineer, both looking to build a product that optimized their respective workflows."**（来源：Vincent Nallatamby, Arnaud Benard, Sam El-Husseini, Google Developers Blog, May 20, 2025 🟢）。初版利用 Gemini 2.5 Pro 的多模态能力，支持文本生成 UI、图片/线框图转 UI、多方案迭代、粘贴到 Figma、导出前端代码。

2025年下半年 Stitch 处于平稳迭代期。UX Planet 的设计师 Nick Babich 在12月的实测评价很诚实：**"This tool isn't about designing the final UI design for you. It's about getting you out of the blank-canvas problem faster."**（来源：Nick Babich, UX Planet, Dec 23, 2025 🟡）。生成一个移动端界面约90秒，输出更接近中保真度 mockup 而非高保真终稿。代码导出仅限 HTML+TailwindCSS，不支持 SwiftUI 或 Flutter。移动端效果优于 Web。

转折点是 **2026年3月18日**。Google 发布了名为"Vibe Design"的大型更新，Stitch 从一个简单的 UI 生成器变成了 AI 原生设计平台。

---

## 2. 3月更新：从工具到平台的跃迁

2026年3月18日的更新规模之大，TestingCatalog 在3月14日就通过代码泄露提前曝光了。以下是完整的功能清单，按重要性排序：

### 2.1 无限画布 (Infinite Canvas)

旧版 Stitch 是单屏生成模式——输入 prompt，输出一个界面。新版引入无限画布，用户可以把图片、文本、代码片段直接拖到画布上作为 AI 的上下文。这不只是 UI 变化，是交互范式的转换：**从"对话式生成"变成了"空间式设计"**。

Josh Woodward（VP Google Labs）在官方博客中说：**"AI can be a creativity multiplier, helping people explore many ideas quickly."**（来源：Google Blog, Mar 18, 2026 🟢）

TestingCatalog 的独家泄露还显示，Google 正在将画布推向 **3D 工作空间**——一种空间化的设计环境，AI agent 以可折叠的浮动组件形态存在，在设计模式和原型模式之间切换时会改变位置。（来源：Alexey Shabanov, TestingCatalog, Mar 14, 2026 🟡）

### 2.2 AI 设计 Agent + Agent Manager

这是最核心的架构变化。旧版 Stitch 的 AI 只看到你最近一条 prompt；新版的 agent 能**跨整个项目历史推理**，理解设计的演进脉络。

Agent Manager 则允许同时开启多个探索方向，并行生成不同的设计方案。官方描述：**"It tracks your progress and helps you to work on multiple ideas in parallel, all while staying organized."**（来源：Rustin Banks, Google Blog, Mar 18, 2026 🟢）

这个设计明显受到了 Anthropic Claude 的 multi-agent 思路影响——不是一个全能的 AI，而是一组可协调的 agent 集群。

### 2.3 DESIGN.md

DESIGN.md 可能是这次更新中对行业影响最深远的功能。它允许用户把设计规则（色彩系统、组件规范、品牌语言）写成 Markdown 文件，导入 Stitch 后 agent 会遵守这些规则。

更重要的是，DESIGN.md 是**双向的**——你可以从 Stitch 导出，也可以从其他工具导入。这意味着设计规范不再锁死在某一个平台（Figma 的 Design Tokens、Sketch 的 Libraries），而是变成了一种**可编程、可迁移、agent 可读**的通用格式。

这个思路跟 Claude Code 的 CLAUDE.md、Cursor 的 .cursorrules 是同一套逻辑：**规则即文档，配置即代码**。当所有 AI 工具都开始读同一种格式的规则文件，设计系统的管理方式会发生根本变化。

### 2.4 语音控制

用户可以直接对着画布说话，agent 实时响应。TestingCatalog 泄露的细节包括：8种可选语音、响应时 prompt 栏周围出现发光光环、agent 不只执行操作还能口头给出设计批评和建议。

官方博客的措辞值得注意：**"By acting as a sounding board, AI helps you uncover your top ideas through dynamic critique and dialogue."**（来源：Google Blog, Mar 18, 2026 🟢）——Google 把语音定位为"创意对话伙伴"，而不只是语音输入。

### 2.5 即时原型

静态设计稿一键变成可交互的 prototype。更关键的是 **"imagine more screens"** 功能——Stitch 能根据上下文自动推断缺失的页面，补全用户旅程。你设计了一个登录页，它可以自动生成注册页、忘记密码页、首页。

从生成量来看，旧版一次生成 1 屏，新版 **5 屏并行**（来源：The AI Corner 🟡）。

### 2.6 MCP 集成与代码导出

Stitch 的 MCP server 已有 2.4k GitHub stars（来源：Google Blog 🟢）。通过 MCP，设计稿可以直接流入 Claude Code、Cursor、Gemini CLI 等开发工具——设计和代码之间不再需要手动交接。

TestingCatalog 还发现了一个正在测试的功能：**从选中的屏幕直接生成完整可运行的 React 应用**——不是 prototype，是真正的代码。如果这个功能正式上线，Stitch 将成为从概念到生产代码的一站式管线。

---

## 3. 竞品格局

### 3.1 核心竞品对照

**Figma**（传统设计工具之王）

Figma 在同一天（3月25日）也宣布了自己的 AI agent MCP 工具——时间点不是巧合。但两者的出发点完全不同：Figma 是在已有的设计平台上"加 AI"，Stitch 是从 AI 出发"做设计平台"。Figma 的优势在于成熟的组件库、变量系统、团队协作、Dev Mode 等企业级功能；Stitch 目前都没有这些。

但 Figma 的隐忧是真实的：IPO 价 $85，当前 ~$24，跌幅超 70%。Stitch 3月18日更新后，Figma 股价两天内再跌 8-10%。（来源：The AI Corner, Investing.com 🟡）

Google PM Kathy Korevec 的公开定位是：**Stitch 是"最初的迭代快速创建的地方"，不是全功能设计平台**。但市场的反应说明投资者并不完全买这个说法。

**v0 (Vercel)**

v0 从 prompt 生成 React 代码，面向开发者。跟 Stitch 的区别：v0 不做设计，直接出代码；Stitch 先做设计，再选择是否出代码。v0 适合已经知道自己要什么的工程师，Stitch 适合还在探索阶段的人。

**Bolt.new / Lovable**

全栈代码生成工具，从 prompt 到部署一条龙。比 Stitch 更"重"——它们做的是完整的应用，Stitch 做的是 UI 层。

**Framer AI**

网站建设器 + AI。Framer 的 AI 直接生成可发布的网站，而 Stitch 生成的是设计稿/原型。Framer 更适合营销页面，Stitch 更适合产品 UI。

**Spline Omma**（3月25日刚发布）

3D 设计 + AI 生成。跟 Stitch 的 3D 工作空间方向有交集，但 Spline 专注 3D 场景，Stitch 专注 2D UI。

### 3.2 定位矩阵

可以用两个轴来理解这个格局：

- **X轴**：设计探索（左） ← → 代码生产（右）
- **Y轴**：需要设计技能（下） ← → 不需要设计技能（上）

Stitch 独占了**左上象限**：快速设计探索 + 不需要设计技能。这个象限在3月18日之前是空的。Figma/Sketch/Adobe XD 在右下（强大但慢，需要专业技能）。v0/Bolt 在右上（快速代码生成，不需要设计技能但也不做设计）。

---

## 4. 技术架构分析

### 4.1 Gemini 作为底座

初版使用 Gemini 2.5 Pro。Nick Babich 的建议是用最新的 Gemini 3 Pro（2026年初可用），因为它支持 AI 研究功能——在生成设计前可以先搜索相关的设计模式和最佳实践。

多模态能力是关键差异化：文本、图片、手绘草图、代码片段都能作为输入。这让 Stitch 的输入灵活性远超纯文本驱动的竞品。

### 4.2 MCP 协议层

MCP（Model Context Protocol）让 Stitch 成为工具链中的一个节点而非孤岛。目前已确认的连接：
- AI Studio（Google 自家）
- Claude Code（Anthropic）
- Cursor（AI IDE）
- Gemini CLI
- Antigravity

### 4.3 输出格式

| 格式 | 状态 | 说明 |
|------|------|------|
| Figma 粘贴 | ✅ 已上线 | 复制后可直接粘贴到 Figma |
| HTML + TailwindCSS | ✅ 已上线 | 标准前端代码导出 |
| React 应用 | 🔬 测试中 | 从屏幕直接生成可运行的 React 应用 |
| SwiftUI / Flutter | ❌ 不支持 | 移动端原生代码无方案 |

---

## 5. 用户体验实测

基于 Nick Babich（UX Planet，141K 粉丝，资深产品设计师）的深度实测：

**Prompt 策略**

Babich 总结了一套 **"Zoom-Out-Zoom-In"** 框架，包含8个层级：
1. Context（产品类型和背景）
2. User（目标用户画像）
3. Goal（这个页面要解决什么问题）
4. Screen type（Dashboard/Detail/Settings...）
5. Layout & hierarchy（信息层级和布局结构）
6. Components（需要哪些 UI 组件）
7. Visual direction（视觉风格约束）
8. Constraints（可用性约束，如单手操作、WCAG）

一个模糊的句子只能出6/10的结果，完整的8层 prompt 可以稳定出9/10。（来源：The AI Corner 🟡）

**生成质量**

Babich 的实测结论："output looks more like a mid-fidelity mockup rather than a high-fidelity final design"。这不是批评——他认为这反而是优势，因为中保真度的输出**暗示着"这还需要你来完善"**，避免了用户把 AI 生成物直接当最终稿的陷阱。

**平台偏好**

移动端 UI 效果明显优于 Web 端。可能跟训练数据有关——移动端 UI 模式更标准化，AI 更容易学习。

---

## 6. 对 Figma 的威胁评估

### 6.1 直接冲击面

The AI Corner 的分析提出了一个核心论断：**"AI just made the first 80% of design work free."**（来源：The AI Corner, Mar 2026 🟡）

旧流程：Brief → 线框图 → 中保真 → 高保真 → 标注 → 开发交接（3-5天）
新流程：Brief → Stitch 20分钟 → Figma 精修 → 开发交接（同一天）

问题在于：对很多项目来说，那个"Figma 精修"步骤可能根本不需要。创业公司、黑客马拉松、内部工具、MVP——这些场景的质量要求低于 pixel-perfect，Stitch 直出的质量就够了。

### 6.2 Figma 的护城河

Figma 仍然在以下领域无可替代：
- **设计系统管理**：组件变量、Auto Layout、Tokens——大型设计团队的命脉
- **团队协作**：实时多人编辑、评论、版本管理
- **Dev Mode**：开发者标注和检查功能
- **生态系统**：数千个插件和社区模板
- **品牌信任**：全球设计团队的标准配置

### 6.3 长期预判

短期内（6-12个月），Stitch 和 Figma 会是互补关系——Stitch 做初稿，Figma 做精修。但随着 AI 生成质量持续提升，"需要精修"的比例会逐渐缩小。如果 Stitch 的 React 导出功能成熟，对于不需要设计系统管理的小团队和独立开发者，Figma 可能会变成一个可跳过的环节。

Figma 的应对策略很明确——3月25日发布的 AI agent MCP 工具就是反击。但 Figma 的困境在于：它的 AI 功能是加法（在已有平台上加 AI），Stitch 的 AI 是乘法（从 AI 出发构建整个体验）。

---

## 7. "Vibe Design" 概念辨析

"Vibe Design"是 Google 造的新词，对标 Andrej Karpathy 提出的"Vibe Coding"。核心理念：不描述具体实现（线框图、组件规格），而是描述**意图和感受**（业务目标、用户情绪、品牌氛围）。

这到底是范式转移还是营销话术？

**支持方**：设计的本质确实不是画线框图，而是解决用户问题和创造体验。如果 AI 能从意图直接生成 UI，跳过中间的手工步骤，这是效率的合理进化。Josh Woodward 说的"creativity multiplier"不无道理。

**反对方**：把"描述感觉"等同于"做设计"是在模糊概念。设计中大量的决策（信息架构、交互模式、可访问性、边界情况处理）无法用"我想要用户觉得舒服"来传达。Vibe Design 能处理 happy path，但 edge cases 仍然需要人类设计师的判断。

**我的判断**：Vibe Design 是一个真实的交互范式变化，但不是设计的全部。它解决了设计流程中"从0到1"的问题（blank canvas → first draft），但"从1到100"的问题（edge cases、可访问性、设计系统一致性、跨平台适配）仍然需要传统方法。

---

## 8. 对设计师意味着什么

### 8.1 正在消失的技能

- 基础布局和线框图绘制
- 组件拼装和样式调整
- 标注和切图
- 简单的多方案并排

这些"手工活"会在18个月内被 AI 工具大幅替代。不是 Stitch 一个产品的效果，而是 Stitch + Figma AI + v0 + Framer AI 整个工具链的叠加效应。

### 8.2 正在升值的技能

- **品味判断**：能看出 AI 生成物哪里好、哪里差——这需要审美积累，不是 prompt 能替代的
- **业务翻译**：把模糊的业务需求转化为精准的设计意图——DESIGN.md 的写作能力
- **系统思维**：设计系统架构、跨平台一致性、组件规范——这些仍然是人类的工作
- **用户研究**：AI 不访谈用户、不做可用性测试、不理解情境

### 8.3 新出现的技能

- **Prompt 工程（设计版）**：Babich 的 Zoom-Out-Zoom-In 框架就是早期的"设计 prompt 工程"
- **DESIGN.md 编写**：把隐性的设计规则变成 agent 可读的显性文档
- **AI 产出审核**：快速评估 AI 生成的 UI 是否满足可访问性、品牌一致性、交互合理性

---

## 9. 批评与局限

### 9.1 产品层面

- **输出保真度**：仍是中保真，不能直接用于生产环境的精细设计
- **Web 端弱势**：移动端生成质量明显优于 Web 端
- **代码限制**：仅 HTML+TailwindCSS，不支持原生移动框架
- **设计系统深度不足**：DESIGN.md 是好开始，但远不如 Figma 的组件变量系统

### 9.2 商业层面

- **Google Labs 身份**：实验项目随时可能被砍（参考 Google 的产品墓地）
- **无变现路径**：完全免费意味着要靠其他方式回收投资，如果不能转化为 Google Cloud 或 Workspace 的付费用户，可持续性存疑
- **企业级功能缺失**：没有团队协作、权限管理、版本控制等企业需要的功能

### 9.3 行业层面

- **可访问性盲区**：AI 生成的 UI 在 a11y（无障碍）方面的表现未经系统验证
- **设计同质化风险**：当所有人用同一个 AI 生成 UI，视觉同质化是否会加剧？
- **原住民争议**：Stitch 的训练数据是否包含未经授权的设计作品？版权问题尚不明确

---

## 10. 结论与预判

Google Stitch 3月18日的更新是 2026 年设计工具领域最重要的事件之一。它做对了三件事：

**第一，免费。** 350次/月的免费额度消除了一切尝试成本。Figma $15-75/月的定价在 Stitch 面前显得尴尬。

**第二，DESIGN.md 定义了设计规范的新标准格式。** 把设计规则变成 agent 可读的 Markdown，而不是锁在某个平台的私有格式里。这个思路跟整个 AI agent 生态的发展方向完全一致。

**第三，MCP 让设计不再是孤岛。** 设计稿可以直接流入开发工具，不再需要"标注-切图-实现"这条手工管线。

接下来值得关注的节点：
- **Google I/O 2026（5月19-20日）**：3D 工作空间、React 完整导出、更多 agent 能力
- **Figma 的反击**：今天发布的 MCP 工具只是开始，预计会有更激进的 AI 策略
- **React 导出成熟度**：如果从设计稿直接生成可运行的 React 应用成为可靠功能，整个前端开发流程都会被改写

---

## 信息来源

| 来源 | 可靠度 | 日期 |
|------|--------|------|
| Google Blog (官方) - Rustin Banks | 🟢 高 | 2026-03-18 |
| Google Developers Blog (官方) - Nallatamby, Benard, El-Husseini | 🟢 高 | 2025-05-20 |
| TestingCatalog (独家泄露) - Alexey Shabanov | 🟡 中 | 2026-03-14 |
| UX Planet (实测评价) - Nick Babich | 🟡 中 | 2025-12-23 |
| The AI Corner (市场分析) | 🟡 中 | 2026-03 |
| The Decoder - Matthias Bastian | 🟡 中 | 2026-03-18 |
| tech-noisy.com (JP 综合) | 🟡 中 | 2026-03-19 |
| Investing.com (Figma 股价) | 🟡 中 | 2026-03 |
