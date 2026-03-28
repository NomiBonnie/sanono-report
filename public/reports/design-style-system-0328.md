# AI 设计风格系统架构研究报告

> 2026-03-28 | NOMI Research

## 摘要

Sam 想做一个通用的"设计品味 skill"——一份平台无关的风格描述文件，注入任何 AI agent 后就能影响其设计输出。本报告调研了 Google Stitch、Figma Make、v0.dev、Cursor/Windsurf、Lovable、bolt.new、Canva 等工具的风格系统实现方式，然后对比"主题式"和"卡片式"两种架构，给出混合方案推荐。

---

## 第一部分：现有 AI 设计风格系统调研

### 1. Google Stitch — DESIGN.md

Google Stitch 在 2026 年 3 月更新中引入了 `DESIGN.md`，这是目前最接近 Sam 想做的东西的工业实现。

**工作原理：** 每次用户向 Stitch 提交 prompt，系统会把 `DESIGN.md` 的全部内容作为 context 一起传给 Gemini。模型将其视为必须遵循的约束条件，而非建议。

**文件格式：** 纯 Markdown，人类可读也可机器解析。结构清晰，按设计维度分节：

```markdown
## Colors
- Primary: #1A73E8
- Primary Dark: #1557B0
- Secondary: #34A853
- Background: #FFFFFF
- Surface: #F8F9FA
- Error: #EA4335
- Text Primary: #202124
- Text Secondary: #5F6368

## Typography
- Font Family: Inter, sans-serif
- Heading 1: 32px, 700 weight
- Heading 2: 24px, 600 weight
- Body: 16px, 400 weight
- Caption: 12px, 400 weight

## Spacing
- Base unit: 8px
- Values in use: 4, 8, 16, 24, 32, 48px

## Components
- Button border radius: 8px
- Card border radius: 12px
- Card shadow: 0 1px 3px rgba(0,0,0,0.12)
- Input border: 1px solid #DADCE0
```

**关键特征：**
- **粒度：** 原子级 token（颜色、字号、间距），但组织为整体风格文件
- **可组合性：** 低。一个项目一个 DESIGN.md，不支持组合多个文件
- **AI 友好度：** 极高。Markdown 对 LLM 来说是最自然的格式
- **维护方式：** 可手动编辑，可 Git 版本控制，也可让 AI 从描述性 prompt 自动生成初始版本
- **局限：** 它不是设计系统（没有使用规范、没有交互模式说明），只是设计 token 的清单

**对我们的启发：** DESIGN.md 证明了一个关键假设——纯 Markdown 文本足以让 LLM 生成风格一致的 UI。不需要 JSON schema，不需要特殊格式。

### 2. Figma Make（原 Figma AI）

Figma 的 AI 设计系统方案走的是完全不同的路。

**工作原理：** Figma Make 不依赖文本描述文件，而是直接读取 Figma 的 style libraries 和 code components。用户把现有的 Figma 设计系统（变量、样式、组件库）作为 AI 生成的基础。

**核心概念：**
- **Style Libraries 作为约束**：用户的 Figma 文件中已有的颜色变量、文字样式、组件变体，AI 在生成时直接引用
- **Brand Kit**：品牌色、字体、logo 等组合成 Kit，AI 自动应用
- **AI Design Systems Generator**：可以从零生成设计系统，也可基于现有系统扩展
- **可视化验证**：先在 Make 中原型验证，确认可行再正式化

**粒度：** 组件级。Figma 天然支持原子设计（atoms → molecules → organisms），AI 在此基础上工作。

**风格表达：** 不是文本，而是 Figma 文件本身（二进制/专有格式 + API 抽象层）。

**对我们的启发：** Figma 的方案绑定平台太深，不可移植。但"用现有设计产物约束 AI"这个思路值得借鉴——我们的 skill 可以引用外部设计系统的 token 文件，而不是重新发明一套。

### 3. v0.dev / Vercel — Theme System

v0 的风格系统分两层：系统级的 system prompt 和用户级的 themes。

**System Prompt 中的设计规范（从泄露的 prompt 中提取）：**

v0 的 system prompt 内置了对 shadcn/ui 组件库的深度理解。它规定：
- 使用 Tailwind CSS 的 variable-based theme system
- 支持 Custom Theming（扩展色板和 design tokens）
- 使用 CSS Variables 做主题切换

**Theme 系统：**
- 用户可以从 prompt 创建自定义主题（如 "Windows 95 style"）
- 可以修改单个 design token
- 可以在不同 theme 之间切换
- 底层使用 shadcn UI 的 theme 格式（CSS variables）

**实际 theme 格式（shadcn UI 风格）：**

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --muted: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}
```

**对我们的启发：** 
- Theme = 一组 CSS variable 定义，非常具体、可执行
- 但这个方案和 Tailwind/shadcn 生态强绑定
- 对于通用 skill，我们不能假设所有 agent 都用 Tailwind

### 4. Cursor / Windsurf — Rules 文件

Cursor 使用 `.cursorrules`（后来改为 `.cursor/rules/`），Windsurf 使用 `.windsurfrules`。这些是注入 AI 上下文的 Markdown 指令文件。

**设计相关的 rules 写法（从 awesome-cursorrules 项目总结）：**

```markdown
## UI and Design System Rules
- Use Tailwind CSS for all styling
- Follow 8px spacing grid
- Use Inter font family
- Primary color: blue-600, accent: amber-500
- Card components: rounded-xl, shadow-sm, p-6
- Never use inline styles
- Components must be responsive (mobile-first)
- Dark mode: use `dark:` Tailwind variants
- Animation: use framer-motion, keep transitions under 300ms
```

CLAUDE.md 的设计规则写法类似（从 uxplanet.org 文章总结）：

```markdown
## UI and design system rules
### Visual style
- Minimal, clean interfaces
- High contrast text
- Generous whitespace

### Spacing philosophy
- 8px base grid
- 16px minimum component spacing

### Typography approach
- System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI"
- Body: 16px/1.5
- Headings: tight tracking (-0.02em)
```

**粒度：** 混合。有些规则很原子（具体颜色值），有些很整体（"minimal, clean interfaces"）。

**对我们的启发：**
- Markdown rules 文件已经是 AI 编码工具的标准做法
- Sam 的 skill 本质上就是一个跨平台版本的 `.cursorrules` 设计子集
- 关键区别：.cursorrules 是代码生成指令（告诉 AI 用什么 CSS 类），而我们的 skill 应该更高层——描述设计意图和品味，让不同平台的 AI 自己翻译为具体实现

### 5. Lovable — 内置设计系统

Lovable 的方式最"粗暴"——把设计规范直接硬编码进 system prompt。

**从泄露的 Agent Prompt 中提取的关键设计指令：**

```
## Design guidelines
CRITICAL: The design system is everything. You should never write 
custom styles in components, you should always use the design system...
```

- 强制使用 Tailwind CSS
- 要求生成 "beautiful and responsive designs"
- 使用 toast components 做用户通知
- 没有暴露给用户的风格自定义接口

**粒度：** 整体指令级，无 token 级别的控制。

**对我们的启发：** Lovable 证明了即便只有一句 "always generate beautiful designs" 也能产生效果，但这种方式缺乏可控性和个性化。

### 6. bolt.new — Prompt 工程

bolt.new 没有独立的风格系统文件。它的方法是教用户写更好的 prompt。

**核心策略："建立设计语言，然后复用"**

Bolt 官方建议的工作流：
1. 先建一个 hero section，让 AI 在此过程中建立 color palette、typography、button styles、spacing system
2. 后续添加内容时说 "Using the same style and design language, add a pricing section below the hero"
3. 一步步来，不要一次性生成整个页面

**对我们的启发：** "先建立风格基准，然后说 same style" 这个模式可以被 skill 系统化——我们的 skill 就是那个预先建立好的"风格基准"。

### 7. Canva AI — Brand Kit

Canva 的风格系统面向非技术用户，但概念很纯粹。

**Brand Kit 包含：**
- 品牌色板（主色、辅色、强调色）
- 字体组合（标题字体 + 正文字体）
- Logo 及其使用规范
- 品牌语调（tone of voice）

**Magic Design 工作流：**
1. 上传素材或描述需求
2. AI 生成一组设计方案
3. 一键应用 Brand Kit 的颜色和字体

**对我们的启发：** Brand Kit 的抽象层级最适合"品味"描述——不是像素级别的精确指令，而是风格方向的定义。这正是 Sam 想要的粒度。

### 8. 开源项目

**atomic-design-system（LobeHub Skills Market）**

一个 Claude Code skill，用 Brad Frost 的原子设计方法论来构建和审计组件库。提供从 atoms → molecules → organisms → templates → pages 的分类方法、design token 提取、旧组件迁移等功能。

**PatrickJS/awesome-cursorrules（GitHub, 高星项目）**

收集了大量 .cursorrules 文件，其中包含前端设计规范。虽然不是专门的设计风格系统，但展示了社区用 Markdown 规则文件约束 AI 设计输出的实际做法。

**VoltAgent/awesome-agent-skills**

Claude Code Skills 和 1000+ agent skills 的合集。包含前端/设计相关的 skills，展示了 skill 这种格式在 agent 生态中的标准化程度。

---

## 第二部分：风格表达方式对比

从调研中可以归纳出四种风格表达方式：

| 表达方式 | 代表 | AI 理解度 | 精确度 | 可移植性 |
|---------|------|----------|--------|---------|
| **Markdown 描述文件** | Stitch DESIGN.md, .cursorrules | ★★★★★ | ★★★★ | ★★★★★ |
| **CSS Variables / Design Tokens** | v0 themes, shadcn | ★★★★ | ★★★★★ | ★★★ |
| **可视化资产（Figma 文件）** | Figma Make | ★★★ | ★★★★★ | ★ |
| **System Prompt 硬编码** | Lovable | ★★★★ | ★★ | ★★ |

对 Sam 的需求来说，**Markdown 描述文件** 是唯一同时满足"跨平台"和"AI 友好"两个条件的选择。

---

## 第三部分：架构方案对比

### 方案 A：主题式（Theme-based）

```
design-taste/
├── SKILL.md              # 入口，说明如何使用
├── themes/
│   ├── minimal-japanese.md    # 侘寂、留白、自然色调
│   ├── swiss-typography.md    # 网格、无衬线、黑白红
│   ├── brutalist.md           # 粗野、系统字体、无装饰
│   ├── soft-gradient.md       # 柔和渐变、圆角、暖色
│   └── editorial-luxury.md   # 衬线、大留白、黑金
└── references/
    └── how-to-extend.md
```

**每个主题文件的结构：**

```markdown
# Minimal Japanese（侘寂风）

## 设计哲学
追求"少即是多"的极致。每一个元素都有存在的理由。
灵感来源：无印良品、枯山水、原研哉的设计。

## 色彩
- 主色：#2C2C2C（墨色）
- 背景：#FAFAF8（和纸白）
- 强调：#8B7355（焙茶色）
- 辅助：#D4CFC4（砂色）
- 语义色极度克制，错误用柔和的 #C75C5C 而非刺眼的红

## 字体
- 中文：Noto Serif CJK SC（正文）/ Noto Sans CJK SC（辅助）
- 西文：Cormorant Garamond（标题）/ Inter（正文）
- 字号比例：1.333（Perfect Fourth）
- 行高：1.75（正文），1.2（标题）

## 间距
- 基础单元：8px
- 组件间距偏大（32-48px），营造呼吸感
- 内容区域最大宽度：680px

## 组件风格
- 圆角：2-4px，几乎不可见
- 阴影：不使用。用极细边线（1px #E8E4DE）代替
- 按钮：极简，无填充或极浅填充，hover 时微妙变化
- 图片：大面积留白包围，无圆角
- 动画：缓慢、轻柔，ease-out 300-500ms

## 布局原则
- 非对称留白
- 单列为主，内容不挤
- 图片和文字比例 ≥ 1:1
```

**优点：**
- 拿来即用，不需要组合
- 每个主题是完整的世界观，AI 容易理解整体感觉
- 对 context window 友好（一个主题文件 1-2KB，完整放进去）
- 维护简单，改一个主题不影响其他

**缺点：**
- 主题之间有大量重复（比如"8px 基础间距"几乎每个主题都有）
- 想要"侘寂风 + 更大胆的色彩"这种混搭很难
- 扩展要写整个新主题，工作量大
- 主题数量一多，选择困难

### 方案 B：卡片式（Card-based / Atomic）

```
design-taste/
├── SKILL.md
├── cards/
│   ├── color/
│   │   ├── muted-earth.md        # 大地色系
│   │   ├── monochrome.md         # 黑白灰
│   │   ├── pastel-soft.md        # 粉彩柔和
│   │   └── high-contrast.md      # 高对比
│   ├── typography/
│   │   ├── serif-editorial.md    # 衬线编辑风
│   │   ├── geometric-sans.md     # 几何无衬线
│   │   ├── tight-tracking.md     # 紧凑字距
│   │   └── large-scale.md        # 超大字号
│   ├── spacing/
│   │   ├── generous-breath.md    # 大留白呼吸感
│   │   ├── compact-dense.md      # 紧凑信息密度
│   │   └── asymmetric-grid.md    # 非对称网格
│   ├── components/
│   │   ├── sharp-edges.md        # 直角无圆角
│   │   ├── soft-rounded.md       # 大圆角
│   │   ├── no-shadow.md          # 无阴影
│   │   └── glass-morphism.md     # 毛玻璃效果
│   └── motion/
│       ├── slow-gentle.md        # 缓慢轻柔
│       ├── snappy-micro.md       # 快速微交互
│       └── no-animation.md       # 无动画
└── presets/
    ├── minimal-japanese.md       # = muted-earth + serif-editorial + generous-breath + no-shadow + slow-gentle
    └── brutalist.md              # = monochrome + geometric-sans + compact-dense + sharp-edges + no-animation
```

**单张卡片的格式：**

```markdown
# generous-breath（大留白呼吸感）

> tags: spacing, minimal, calm, editorial

## 原则
内容之间需要足够的空气。密度 ≠ 价值。

## 具体规则
- 基础间距单元：8px
- section 之间：64-96px
- 组件之间：32-48px
- 内容区最大宽度：680px（正文）/ 1080px（卡片网格）
- 页面顶部留白 ≥ 120px
- 移动端间距按 0.65 比例缩放

## 适用场景
博客、作品集、品牌官网、阅读类产品

## 不适用
后台管理系统、数据密集型仪表盘
```

**优点：**
- 极度灵活，任意组合
- 消除重复，每个设计维度只定义一次
- 扩展容易——加一张新卡片不影响其他
- 可以通过 tag 系统实现智能推荐

**缺点：**
- 组合后 context 可能较大（5-6 张卡片 × 300-500 字 = 2-3KB，还好）
- 卡片之间可能存在冲突（如果选了两张 spacing 卡片）
- AI 需要同时理解多张卡片的协同关系
- 没有整体风格叙事，可能产出"拼接感"

### 方案 C：混合式（推荐）

```
design-taste/
├── SKILL.md                      # 入口 + 调度逻辑
├── cards/                        # 原子卡片
│   ├── color/
│   ├── typography/
│   ├── spacing/
│   ├── components/
│   └── motion/
├── themes/                       # 预设组合 = 卡片引用 + 风格叙事
│   ├── minimal-japanese.md
│   ├── swiss-typography.md
│   └── brutalist.md
└── references/
    ├── how-to-create-theme.md
    └── card-index.md             # 全部卡片索引 + tag
```

**theme 文件不再重复写具体 token，而是引用卡片 + 补充风格叙事：**

```markdown
# Minimal Japanese（侘寂风）

## 设计哲学
追求"少即是多"的极致。灵感：无印良品、枯山水、原研哉。

## 组成卡片
- color/muted-earth
- typography/serif-editorial  
- spacing/generous-breath
- components/no-shadow
- motion/slow-gentle

## 风格补充（仅此主题特有的覆盖）
- 圆角限制在 2-4px
- 图片周围使用非对称留白
- 整体色温偏暖
- 错误色使用柔和的 #C75C5C 而非标准红

## 情绪关键词
宁静、克制、呼吸感、自然、手工感
```

**SKILL.md 的调度逻辑：**

```markdown
# Design Taste Skill

## 使用方式

### 方式 1：选择预设主题
用户说"用侘寂风格"→ 读取 themes/minimal-japanese.md，
该文件引用了 5 张卡片，依次读取，合并为完整风格上下文。

### 方式 2：自由组合
用户说"我要大地色系 + 几何无衬线 + 紧凑布局"→ 
分别读取 color/muted-earth + typography/geometric-sans + spacing/compact-dense。

### 方式 3：基于主题微调
用户说"侘寂风但色彩更大胆"→ 
读取 themes/minimal-japanese.md，但替换 color 卡片为 color/high-contrast。

### 冲突解决
同一维度只能选一张卡片。如果用户选了两张 spacing 卡片，
取后选的覆盖先选的。
```

---

## 第四部分：最终推荐方案

经过深入讨论，最终方案在混合式架构基础上做了三个关键决策：

### 决策 1：描述性 + 参考锚点（而非精确像素值）

Google Stitch 的 DESIGN.md 写法（`Primary: #1A73E8`、`Heading 1: 32px`）适合单个项目，但不适合跨项目的品味内核。原因：`padding: 48px` 在网页合理，在 PPT 不对，在移动端又不同。

正确做法是**描述性原则 + 参考锚点 + 禁区**：

```markdown
## 间距
原则：内容之间需要足够呼吸感，密度不等于价值。
节奏：宽松。组件间距 ≥ 正文行高的 2 倍。
参考：类似 Muji 网站或 Apple 产品页的间距感。

## 色彩
原则：克制、低饱和、自然。
色温：偏暖。
参考：像原研哉的设计——不是纯白，是带一点米色的白。
禁区：不用高饱和荧光色，不用纯黑背景。
```

这样品味层不绑定具体实现，换项目时 AI 根据品味自动推导合适的像素值和颜色。

### 决策 2：Do/Don't + 可选图片（多模态增强）

每张卡片带文字版 do/don't 列表，同时可选附带截图。多模态 AI（Claude、GPT-4o）能直接"看"图片，一张对比截图比 500 字描述更精准；纯文本 AI（Cursor Agent）只读 markdown，文字版保底。

图片不需要自己设计——截取真实网站即可。比如 spacing 卡片：Apple.com 产品页（do）vs 某个信息过载的后台（don't）。

### 决策 3：三层架构（品味底线 + 原子卡片 + 预设主题）

```
design-taste/
├── SKILL.md                          # 入口：使用说明 + 调度逻辑
├── core/
│   └── philosophy.md                 # 审美内核：不变的品味底线
├── cards/
│   ├── color/
│   │   ├── muted-earth.md
│   │   ├── monochrome.md
│   │   └── ...
│   ├── typography/
│   ├── spacing/
│   ├── components/
│   └── motion/
├── themes/                           # 预设组合 = 引用卡片 + 风格叙事
│   ├── wabi-sabi.md
│   ├── swiss-editorial.md
│   └── ...
└── references/
    ├── images/                       # do/don't 截图（多模态增强）
    │   ├── spacing-do-apple.png
    │   ├── spacing-dont-cluttered.png
    │   └── ...
    └── card-index.md                 # 全卡片索引 + 标签
```

**core/philosophy.md（品味底线，所有主题共享）：**

```markdown
# 审美内核

## 不可动摇的原则
- 留白 > 填满
- 克制 > 华丽
- 排版即设计的 80%
- 功能驱动装饰，不是反过来

## 永远不要
- 用渐变彩虹色
- 用 10 种以上颜色
- 让动画持续超过 500ms
- 在一个页面塞超过 3 种字体
```

**每张卡片的完整格式：**

```markdown
# generous-breath（大留白呼吸感）
> tags: spacing, minimal, calm, editorial

## 原则
内容之间需要呼吸。密度不等于价值。
节奏宽松，组件间距 ≥ 正文行高的 2 倍。

## Do
- 大段内容之间留出明显的视觉停顿
- 内容区域有明确的最大宽度
- 参考：Apple 产品页、Muji 官网的间距感

## Don't
- 内容紧贴容器边缘
- 把页面当 Excel 表格填满
- 多个卡片紧密排列无间距

## 视觉参考
![do](references/images/spacing-do-apple.png)
![dont](references/images/spacing-dont-cluttered.png)
```

**theme 文件的完整格式：**

```markdown
# Wabi-Sabi（侘寂风）

## 风格叙事
追求"少即是多"的极致。每个元素都有存在的理由。
灵感：无印良品、枯山水、原研哉。
情绪：宁静、克制、呼吸感、自然、手工感。

## 组成卡片
- color/muted-earth
- typography/serif-editorial
- spacing/generous-breath
- components/no-shadow
- motion/slow-gentle

## 本主题特有覆盖
- 圆角限制在 2-4px
- 色温偏暖
- 错误色用柔和的暗红而非标准红
```

### 架构对比总结

| 评估维度 | Stitch 单文件 | 主题式 | 卡片式 | 我们的方案 |
|---------|-------------|--------|--------|----------|
| 上手门槛 | ★★★★★ | ★★★★★ | ★★★ | ★★★★ |
| 灵活性 | ★ | ★★ | ★★★★★ | ★★★★★ |
| AI 理解度 | ★★★★★ | ★★★★★ | ★★★★ | ★★★★★ |
| 跨项目复用 | ★ | ★★ | ★★★★★ | ★★★★★ |
| 多模态支持 | ★ | ★ | ★★★ | ★★★★★ |
| 风格一致性 | ★★★★★ | ★★★★★ | ★★★ | ★★★★ |

**核心优势：** Cursor 的多文件架构 + Stitch 的 Markdown 格式 + 描述性品味表达 + 多模态图片增强。三种使用方式——直接用主题 / 自由组合卡片 / 基于主题微调——覆盖从新手到专家的所有场景。

**跨平台适配：**

这个 skill 的输出是 Markdown 文本，任何支持 context file 的 AI 工具都能使用：
- **OpenClaw** → 作为 skill 文件
- **Cursor/Windsurf** → 复制到 .cursor/rules/design.md
- **Claude Code** → 放入 CLAUDE.md
- **GitHub Copilot** → 放入 .github/copilot-instructions.md
- **v0.dev** → 粘贴到 system prompt
- **通用 LLM** → 直接作为对话 context

---

## 第五部分：实施建议

### Phase 1：MVP（1-2 天）
1. 写 `core/philosophy.md`（Sam 的审美底线）
2. 创建 3 张核心卡片（color × 1, spacing × 1, typography × 1），含 do/don't 文字 + 截图
3. 创建 1 个预设主题（wabi-sabi，最符合 Sam 的审美）
4. 写 SKILL.md 入口文件
5. 在 OpenClaw 中测试生成效果

### Phase 2：扩展（1 周）
1. 补全卡片到每个维度 3-4 张（共 15-20 张）
2. 补全主题到 4-5 个
3. 创建 card-index.md（含 tag 索引）
4. 测试跨平台使用（Cursor、Claude Code）
5. 收集 do/don't 截图库

### Phase 3：社区化
1. 主题和卡片可分享（每个就是一个 .md 文件）
2. 社区贡献卡片
3. 从 Figma token file / Tailwind config 自动生成项目级配置的工具

### 命名建议

Skill 名称：`design-taste`（不叫 design-system——这不是传统设计系统，是"品味"的编码）

---

## 附录：关键发现汇总

1. **Markdown 是最佳格式**。Stitch 的 DESIGN.md、Cursor 的 rules、Claude 的 CLAUDE.md 全部用 Markdown。JSON token 文件（如 W3C Design Tokens Format）虽然更精确，但 LLM 理解 Markdown 的效率远高于结构化数据。

2. **"约束"比"建议"有效**。Stitch 的成功在于 AI 把 DESIGN.md 视为 constraint 而非 suggestion。我们的 skill 措辞应该是 "always use" 而非 "consider using"。

3. **风格叙事很重要**。纯 token 列表（颜色值、字号）能保证表面一致，但没有"灵魂"。Bolt 团队发现让 AI 先建立 "design vibe" 再复用的效果远好于零散指令。主题文件中的"设计哲学"段落承担了这个功能。

4. **粒度适中**。太粗（"make it look clean"）没用，太细（每个像素都规定）太脆。最佳粒度是 design token + 设计原则 + 情绪方向的组合。

5. **一个文件 < 3KB 是甜蜜区**。根据 Stitch 和 Cursor 的实践，风格描述在 1-3KB 时 AI 遵循度最高。超过这个范围，信息会被稀释。混合式架构中，一个主题最终展开约 2-3KB，正好。
