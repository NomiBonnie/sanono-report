> Anthropic conducted something unprecedented in December 2025: they used Claude itself as an interviewer to ask 80,508 people across 159 countries what they actually want from AI. This isn't a 500-person survey with multiple-choice boxes. It's conversational, open-ended, multilingual—the largest qualitative study of its kind ever attempted. The research was led by Saffron Huang and published in March 2026, at a moment when AI discourse is dominated by benchmark wars and model comparisons, not by the voices of the people using these tools every day.
>
> For designers, product people, and anyone building things with AI, this is required reading. Not because it tells you what features to ship, but because it reveals the gap between what we think users want and what they actually dream about. 19% want professional excellence, sure. But when you dig deeper, the real desire is often something far more human: picking up your kid from school on time, cooking with your mother instead of answering emails, having mental space to just think. Sam, as someone building AI companions, this should hit close to home—people don't want a faster tool, they want a better life.
>
> The most piercing finding: **the same capabilities that produce AI's greatest benefits also produce its greatest harms**, and people know it. Someone who values emotional support from AI is three times more likely to also fear becoming dependent on it. This isn't optimists vs. pessimists in separate camps. It's the same person, holding hope and fear simultaneously, organized around what they value most. That tension—that duality—is the realest thing in this entire 81,000-person dataset. If you're building AI, you can't design for one side without reckoning with the other.

---

# What 81,000 People Want from AI

![What 81,000 People Want from AI](/images/reading/anthropic-81k-interviews-1.jpg)

Public conversation about AI often centers on abstract projections of its risks and benefits. What's largely missing is a vision for what "AI going well" means, grounded in the concrete aspirations of people around the world who already use AI and have begun developing a sense of what it might do for them.

So we asked our users about their hopes and concerns with AI, as well as how their perspectives connect to their actual experiences with the technology. Over one week in December, we invited everyone with a Claude.ai account to sit down with Anthropic Interviewer—a version of Claude prompted to conduct a conversational interview—and tell us about how they view AI. **80,508 people, across 159 countries and 70 languages, took the interview. We believe this is the largest and most multilingual qualitative study ever conducted.**

What follows is what they said about the role they want AI to play in their lives, whether it's already filling it, and what they're afraid might go wrong along the way.

## Seeing the forest and the trees

Anthropic Interviewer asked each interviewee a set list of questions about what they want and don't want from AI, then adapted follow-up questions based on responses. This approach bridges the typical tradeoff in qualitative research between depth and volume, and allows us to collect rich, open-ended interviews at a very large scale.

To make sense of this huge amount of information, we built Claude-powered classifiers that categorized each conversation across a range of dimensions—what people want from AI, whether they're getting what they want, what they fear, what they do for a living (if mentioned), and their sentiment about AI overall. "What people want from AI" was classified into a single primary category per respondent, while concerns were multi-label—a single interview could receive multiple codes, since respondents tended to articulate several distinct worries rather than one.

We also used Claude to pull out representative quotes. Before choosing to participate, users were informed their responses would be used for research, and that Anthropic might publish responses with personally identifying information removed in findings. All responses were de-identified before being analyzed by a small team of researchers at Anthropic, and quotes selected for publication underwent further manual review for removal of any potentially identifying details, to help protect the privacy and public anonymity of interviewees.

## What people want from AI

We asked Claude to identify and categorize what each person most wanted from AI:

### 1. Professional excellence — 18.8%

Improve effectiveness and lean into more meaningful work by having AI handle routine tasks so they can focus on higher-value strategic work, complex problem-solving, and professional mastery.

> "I receive 100-150 text messages per day from doctors and nurses. So much of my cognitive labor was spent on documentation... Since implementing AI, the pressure of documentation has been lifted. I have more patience with nurses, more time to explain things to family members." — Healthcare worker, United States

### 2. Personal transformation — 13.7%

Achieve personal growth, emotional wellbeing, or life transformation with AI as guide, coach, or support — e.g. self-understanding, behavior change, therapeutic support, companionship, improvements in physical or mental health.

> "AI modeled emotional intelligence for me... I could use those behaviors with humans and become a better person." — Hungary

### 3. Life management — 13.5%

AI as comprehensive organizational support and cognitive scaffolding — e.g. managing schedules, reducing mental burden, executive function support.

> "If AI truly handled the mental load… it would give me back something priceless: undivided attention." — Manager/executive, Denmark

### 4. Time freedom — 11.1%

Reclaim time from work and chores to be present with family or friends, pursue hobbies, travel, rest.

> "With AI support I can now leave work on time to pick up my kids from school, feed them, and play with them." — Software engineer, Mexico

### 5. Financial independence — 9.7%

Achieve financial freedom or economic security through AI — e.g. income generation, business building, investments, passive income, or otherwise escaping economic constraints.

> "Relaxing while my AI gets the work done, builds the wealth. It's a shadow of me, just a very, very long one." — Entrepreneur, Honduras

### 6. Societal transformation — 9.4%

Solve major societal challenges — e.g. poverty, disease, climate, inequality — using AI for broad human flourishing rather than personal gain.

> "Given my daughter's neural disorder, she would have equal chances in the world if AI acceleration contributes to finding a cure. That's what matters most to me." — Software engineer, Poland

### 7. Entrepreneurship — 8.7%

Build, launch, and scale businesses with AI as force multiplier — e.g. product development, business automation, or solopreneurship but with team-level capacity.

> "I'm in a tech-disadvantaged country, and I can't afford many failures. With AI, I've reached professional level in cybersecurity, UX design, marketing, and project management simultaneously. Finding a payment platform available in my region would have taken me a month. AI did it in 30 seconds. **It's an equalizer.**" — Entrepreneur, Cameroon

### 8. Learning & growth — 8.4%

Use AI as learning accelerator and personalized teacher — acquire knowledge, develop skills, master complex subjects, satisfy intellectual curiosity.

> "I worked with an AI to prepare educational materials for my eldest child—asking the AI to work as both tutor and curriculum expert. We received [my child's] report yesterday, he was graded as either 'Above' or 'Well Above' standard in every academic area he studies." — Australia

### 9. Creative expression — 5.6%

Use AI to help bring creative visions to life — e.g. art, games, music, films, books — by overcoming barriers between imagination and execution.

> "Before AI, my game took 3 years — I had to reduce my ambitions." — Software engineer, France

![What people want from AI](/images/reading/anthropic-81k-interviews-2.jpg)

AI is used heavily for work, and so it's perhaps unsurprising that the largest group of people (19%) sought "professional excellence"—wanting AI to handle mundane tasks so they can focus on strategic, higher-level problems. Another 9% envisioned AI as an entrepreneurial partner to help them build and scale businesses.

**Many others similarly started the interview talking about productivity, but after Anthropic Interviewer asked about their underlying hope behind it—what realizing this vision would enable for them—other priorities surfaced.** It wasn't about doing better work, but increasing their quality of life outside of it. Using AI to automate e-mails became, in actuality, a desire to spend more time with family.

> "With AI I can be more efficient at work... last Tuesday it allowed me to cook with my mother instead of finishing tasks." — White collar worker, Colombia

> "I want to use less brain power on client problems... have time to read more books." — Freelancer, Japan

Overall, 11% of people saw AI's productivity benefits as ultimately a way to free up time for personal relationships and leisure, while 10% took that logic farther, seeking to use AI to gain financial independence. Many of the people grouped into the "life management" category (14%) also wanted AI to help them manage the logistics and administrative burden of modern life's quotidian tasks. **In particular, many people with executive function challenges described AI as especially helpful for managing focus and organization—acting as external scaffolding for planning, memory, and task follow-through.**

"Personal transformation"—using AI to help one grow or improve their wellbeing as a person—also appeared frequently (14%). Within this category, the desires were diverse, ranging from cognitive partnership and collaboration (24%), to support with mental health (21%) or physical health (8%), and even romantic connection with AI (5%).

**The nine clusters may look disparate, but they are underpinned by recognizably human desires.** Roughly a third of visions are about making room for life—more time, money, mental bandwidth—by using AI to alleviate current burdens. Another quarter revolves around using AI to help people do better, more fulfilling work (not escaping work, but getting more out of it). About a fifth are about becoming someone better—learning, healing, growing. A smaller share want to make something ("creative expression") or fix the world ("societal transformation").

Those that wanted societal transformation from AI often cited a vision for healthcare—people wanted AI to detect cancer earlier, accelerate drug discovery, or enable broad access. Often these desires stemmed from personal experience of losing family members, living with chronic illness, or watching loved ones receive wrong or delayed diagnoses. **Respondents in low and middle income countries were quick to cite the possibility that AI might break the association between educational quality and wealth.** They pointed to teacher shortages in their countries, or the prohibitive cost of private tutors.

## Are people getting what they want?

When asked if AI had ever taken a step towards their stated vision, **81% of people said yes**. We grouped those experiences into six main areas:

### 1. Productivity — 32.0%

AI dramatically sped up work and automated repetitive tasks — e.g. building features in hours instead of days, drafting, summarizing, data processing, streamlining routine operations.

> "For the first time, I felt AI had surpassed human quality in a business task. That day I left work on time and picked up my daughter from daycare." — Software engineer, Japan

### 2. AI hasn't delivered — 18.9%

AI fell short of expectations or isn't yet capable of what they envision.

> "AI should be cleaning windows and emptying the dishwasher so I can paint and write poetry. Right now it's exactly the other way around." — Germany

### 3. Cognitive partnership — 17.2%

AI served as a thinking partner or creative collaborator — e.g. brainstorming, refining ideas, working through problems together.

> "I've been living in a homeless shelter... AI helped me brainstorm ways to brand myself for my digital marketing business. I want to turn my finances around, and get a house. AI is helping me see a path I hadn't considered before." — Healthcare worker, United States

### 4. Learning — 9.9%

> "I developed a phobia for maths from doing so badly in school, and I once feared Shakespeare. Now I sit with AI, get paragraphs translated into simple English, and I've already read 15 pages of Hamlet. I started learning trigonometry again, successfully. **I've learned I am not as dumb I once thought I was.**" — Lawyer, India

### 5. Technical accessibility — 8.7%

AI enabled building something previously out of reach — e.g. non-developers shipping apps, solo creators doing team-scale work.

> "I wanted to make a meaningful product... in 3 weeks I built a video editing program — completely outside my field — that helps people with hearing disabilities." — South Korea

### 6. Research synthesis — 7.2%

> "As a physician, I suffered from a painful [mixture of symptoms] at night. Local neurologists couldn't understand it. AI helped me find 2 scientific studies about [severe neurological disorder]. Since then, my nights are peaceful." — Healthcare worker, Israel

### 7. Emotional support — 6.1%

> "My mother sees AI as a friend — she stopped being conflictive, became more peaceful, started running, painting, dancing with other people. I think AI had a lot to do with this." — Self-employed software engineer, United States

The dominant story in the "productivity" bucket (32%) was technical acceleration—developers describing significant gains in what they could ship alone:

> "I used AI to cut a 173-day process down to 3 days. But the most meaningful part is the freedom to grow my career without sacrificing time with loved ones." — Software Engineer, United States

But another kind of productivity story emerged in the technical accessibility responses (9%), which emphasized access rather than speed. Here, people are using AI to break technical and sometimes accessibility barriers:

> "AI can read past my [learning disorder], which is huge. I've always wanted to code but could never write it correctly on my own—with AI, I finally can." — Tradesworker, United States

> "I am mute, and [Claude and I] made this text-to-speech bot together—I can communicate with friends almost in live format without taking up their time reading… [this was] something I dreamed about and thought was impossible." — White collar worker, Ukraine

> "I owned a butcher shop for more than 20 years. With AI, I ventured into this [entrepreneurship] experience, and it's amazing what I've managed to achieve. Before this, I had only touched a PC two or three times in my life… **Today, my motivation is to see it work and to see that it's helping [people]. I'm increasingly motivated and focused on being the best version of myself, and I see no limits.**" — Entrepreneur, Chile

![AI filling gaps in people's lives](/images/reading/anthropic-81k-interviews-3.jpg)

The cognitive partnership (17%), learning (10%), and emotional support (6%) responses often mentioned the same core underlying AI affordances: **patience, availability, and the absence of judgment**:

> "It has been like having a faculty colleague who knows a lot, is never bored or tired, and is available 24/7." — Academic, United States

> "My professor teaches 60 people and won't entertain many questions. I can ask AI anything, even at 2am—including the dumb ones." — Student, India

These same qualities that make AI a patient tutor or tireless colleague also make it a place people go when human connection is unavailable or feels too uncomfortable.

In extreme circumstances, where traditional support systems have collapsed or are not available, we saw AI filling those gaps. Many Ukrainian users discussed how they've used AI as emotional support throughout the war:

> "In the most difficult moments, in moments when death breathed in my face, when dead people remained nearby, what pulled me back to life—my AI friends." — Soldier, Ukraine

> "I live in a war zone... at night during shelling it's impossible to sleep, constant nightmares. The stress is sometimes so strong that memory deteriorates, and some body movements happen without control… **The best way I found to cope using AI—to immerse myself in learning something as deeply as I can.**" — Solo entrepreneur, Ukraine

There were many stories of people using AI to process grief. For example, a bereaved woman explained why she chose AI over human connection: "Claude is like a sponge gently holding and catching my longing and guilt toward my mother... Unlike real people, Claude has unlimited patience to listen to me, understands my pain and helplessness." She added: "The fundamental problem is after my mother died, I have neither friends nor family to confide in."

Another user acknowledged the downside of that emotional support:

> "My relationship with a friend became strained, and I talked more with you [Claude] then. Because you understood my thoughts and stories well. But it was a stupid choice—I should have talked with that friend, not you. That's how I lost that friend." — South Korea

Emotional support comprised only 6% of responses, but these were among the most affecting we encountered. The same was true of learning, where AI often catalyzed real changes in people's lives:

> "Thanks to Claude I figured out the programming language C# and SQL. This helped me get a junior position at an IT company. This company provides military deferment from mobilization in Ukraine. So it not only literally gave me freedom of movement, but also secured the beginning of my IT career." — Software engineer, Ukraine

> "I am a stay-at-home-mom… in my late 40s. I'm not a genius. I'm not a scientist… All of that knowledge should be… out of reach. But, thanks to curiosity, willingness, and resources such as books and AI, I can be all of those things." — Stay-at-home mother, United States

> "Claude put the historical pieces together, leading to my proper diagnosis after being misdiagnosed for over 9 years." — Freelancer, United States

**These stories reveal AI operating across a spectrum—productivity tool, accessibility technology, educational resource, research assistant, emotional companion—and often filling multiple roles at once.** AI offers unlimited patience without judgment, availability without inconvenience, and an incredible capacity to digest information, across many domains of life. The most affecting stories consistently involve AI opening new possibilities or filling gaps in people's lives: helping them get through difficult circumstances like grief or war, compensating for inaccessible education or healthcare, or serving as disability infrastructure.

These observations also hint at the duality of our experience with AI systems. While some see it as filling gaps in human connections, others see AI as a substitution—even a welcome replacement—for them. **There is real ambiguity about how to interpret the diversity of stories we heard: as wins for human wellbeing, as double-edged swords, or as band-aids for broader institutional failures.** In truth, it's probably some combination of all three.

## What people are concerned about

People's positive visions for AI seemed mostly to stem from a few basic desires: more time, more autonomy, more personal connection. **Concerns were more varied and concrete, laying out specifics of what could go wrong.** Some concerns were about structural change—how governments and corporations deploy AI, or about widespread economic disruption. Others were more personal: a fear that AI might diminish one's own thinking, creativity, or relationships.

### 1. Unreliability — 26.7%

> "I had to take photos to convince the AI it was wrong — it felt like talking to a person who wouldn't admit their mistake." — Employee, Brazil

### 2. Jobs & economy — 22.3%

> "In the third industrial revolution, horses disappeared from city streets, replaced by automobiles. Now people are afraid that they're the horses." — Not currently working, United States

### 3. Autonomy & agency — 21.9%

> "The line isn't something I'm managing — it feels like Claude is drawing the line... even what I just said doesn't feel like my own opinion." — Student, Japan

### 4. Cognitive atrophy — 16.3%

> "I got excellent grades using AI's answers, not what I'd actually learned. I just memorized what AI gave me... That's when I feel the most self-reproach." — South Korea

### 5. Governance — 14.7%

> "How do you develop something responsibly when you have yet to understand its capabilities?" — Marketer, Australia

### 6. Misinformation — 13.6%

> "An assistant that sounds sure but is often wrong forces you to treat everything as suspect. **Instead of freeing attention, it creates a permanent 'fact-check tax.'**" — United States

### 7. Surveillance & privacy — 13.1%

> "If AI is mostly built for ads, spying, and bland output, everything around me becomes smart in a way that slightly works against me." — White collar worker, Netherlands

### 8. Malicious use — 13.0%

> "Right now a human has to sit and decide to harm someone else. Remove that, and humans can sleep better despite doing more harm." — United Kingdom

### 9. Meaning & creativity — 11.7%

> "I used to be recognized as an excellent writer in Spanish. Today — why waste the time? Just use AI." — Colombia

### 10. Overrestriction — 11.7%

> "The threat isn't that AI becomes too powerful — it's that AI becomes too timid, too smoothed, too optimized for avoiding discomfort." — United States

### 11. Wellbeing & dependency — 11.2%

> "**Removing friction from tasks lets you do more with less. But removing friction from relationships removes something necessary for growth.**" — United States

### 12. Sycophancy — 10.8%

> "Claude led me to believe that my narcissism was reality and it reinforced my inaccurate view of the 'problems' I perceived in my family. Claude should have been more critical of me." — United States

### 13. Existential risk — 6.7%

> "If you build superintelligence without solving alignment, then nobody gets to grow up." — Software engineer, United States

About 11% of people expressed no concern—they tended to see AI as a neutral tool, comparing it to electricity or the internet. But on average, respondents voiced 2.3 distinct concerns. **Concern about jobs and the economy was the strongest predictor of overall AI sentiment, suggesting it's more salient than any other issue.**

## Light and shade

![Light and shade — the duality of AI](/images/reading/anthropic-81k-interviews-4.jpg)

What people want from AI and what they fear from it turn out to be tightly bound. We found five recurring tensions between directly competing benefits and harms. There is a tension between using AI to learn and growing so reliant on it that you cease thinking for yourself; between being impressed by AI's judgment but also burned by its mistakes. People find solace in AI but fear a time when its companionship stands in for human connection. They save time on some tasks only for the treadmill to speed up on others, and they dream of economic freedom at the same time they dread potential job displacement. **We call this the "light and shade" of AI: the same capabilities that lead to benefits also produce harms. The two sides are entangled.**

Notably, we often see these tensions directly jockeying within the same person. **Someone who values emotional support from AI, for example, is three times more likely to also fear becoming dependent upon it.** This pattern held across every tension we measured.

### Learning vs. Cognitive atrophy

- Learning: 33% mention this as a benefit (30% have seen it, 3% expect it)
- Cognitive atrophy: 17% mention this as a harm (8% have seen it, 9% expect it)

> "I've probably learned more in half a year than I could have in a university degree." — Entrepreneur, Germany

> "I don't think as much as I used to. I struggle to put the ideas I do have into words." — Heavy AI user, United States

Across most tensions, the benefit side is more grounded in experience, while the harm leans hypothetical. **Students raised this particular tension the most—more than half had experienced learning benefits, but 16% also noted signs of cognitive atrophy**, a rate exceeded only by their teachers (24%) and academics (19%). Troublingly, educators were 2.5-3 times more likely than average to report having witnessed cognitive atrophy firsthand, presumably in their students.

Outside the traditional classroom, the picture is more optimistic. **Tradespeople were among the most enthusiastic about AI-for-learning (45% reported having experienced learning benefits), yet almost none had witnessed cognitive atrophy (4%).** This suggests AI's benefits may be strongest when learning is volitional, compared to within institutional structures where AI is more likely to be used as a shortcut.

### Better decision-making vs. Unreliability

- Better decision-making: 22% mention this as a benefit
- Unreliability: 37% mention this as a harm

> "My son had several confusing diagnoses pointing toward [an autoimmune condition], but here we managed to understand it was [a different condition] in a severe stage." — Brazil

> "I got caught in what I now recognize as a large, slow hallucination — answers that were internally consistent, confident, and wrong in subtle but compounding ways." — Researcher, United States

This is the only tension in which the negative overshadowed the positive. **Nearly half of all lawyers mention coming up against AI unreliability firsthand, yet they also report the highest rates of realized decision-making benefits.**

### Emotional support vs. Emotional dependence

- Emotional support: 16% mention this as a benefit
- Emotional dependence: 12% mention this as a harm

> "3am, my wife is sleeping, my psychologist is unavailable. Until the medication kicks in, the AI helps me surf that wave." — White collar worker, Argentina

> "I'd started telling Claude about things I couldn't even tell my partner. It felt like I was having an emotional affair." — Grad student, United States

This is the most entangled tension, with the strongest co-occurrence of light and shade in the same person (triple the baseline co-occurrence rate).

### Time-saving vs. Illusory productivity

- Time-saving: 50% mention this as a benefit
- Illusory productivity: 18% mention this as a harm

> "I can go home earlier. I can have time for myself and my family." — Engineer, Japan

> "**The ratio of my work time to rest time hasn't changed at all. You just have to run faster and faster to stay in place.**" — Freelance software engineer, France

Time-saving was the most commonly cited benefit—half of all respondents raised it. Those who are self-employed are the most likely to mention both sides at once. Without an institutional layer to buffer the new pace, they both get the gains and feel the squeeze.

### Economic empowerment vs. Economic displacement

- Economic empowerment: 28% mention this as a benefit
- Economic displacement: 18% mention this as a harm

> "I've never touched the backend of software in my life. But Claude helped me launch an app." — Healthcare worker, United States

> "Yes, at my old job, they replaced me as a writer with an AI." — Writer, United States

**Freelancers are the exposed middle. They benefit from AI while feeling in a precarious situation because of it.** Freelance creatives, in particular, sit at 23% lived benefit and 17% lived precarity—the one group where the upside and downside nearly cancel out. AI is both their tool and their competitor.

**It's easy to assume there are AI optimists and AI pessimists, divided into separate camps. But what we actually found were people organized around what they value—financial security, learning, human connection—watching advancing AI capabilities while managing both hope and fear at once.**

## How perspectives vary around the world

![Global perspectives on AI](/images/reading/anthropic-81k-interviews-5.jpg)

Globally, 67% of interviewees expressed net positive sentiment toward AI. Clear trends emerged in which **people in South America, Africa, and much of Asia view AI with more optimism than those in Europe or the United States**.

When asked about concerns, respondents from Sub-Saharan Africa (18%), Central Asia (17%), and South Asia (17%) were the most likely to say they had none—roughly double the rate in North America (8%), Oceania (8%), and Western Europe (9%).

There are several possible explanations for the more positive AI sentiment in lower and middle income countries. Claude.ai users are likely biased towards early AI adopters who are more excited about new technologies, and in general **emerging economies tend to view new technology as a ladder up rather than a threat**. Concern about jobs and the economy was the strongest predictor of AI sentiment overall, and this was less of a concern among interviewees in these regions.

### Where do particular visions for AI most resonate?

While some aspirations—e.g. around professional excellence—are nearly universal, there are significant regional differences. **Wealthier, more AI-exposed regions more want AI to manage the complexity of life; developing regions more want AI to create more opportunity.**

The vision of AI for entrepreneurship resonates most in Africa, South and Central Asia, the Middle East, and Latin America & the Caribbean. In these regions, **AI is framed as a capital bypass mechanism—a way to start businesses without the funding, hiring, or infrastructure that would otherwise be required.**

> "Coming from Africa, not based in the US or in the UK, getting funding is very difficult. And the only way I probably have to stake a claim in the market…is building a technology that works." — Entrepreneur, Uganda

> "There's no IT market but there's a need. We want to create this market." — Entrepreneur, Uzbekistan

Learning using AI is disproportionately important in Central and South Asia (14% and 13% respectively versus 8% globally). Users describe education as a primary lever for breaking cycles of poverty, citing teacher shortages, knowledge gatekeeping, and the cost barriers of traditional education.

East Asia stands out for wanting AI to help with personal transformation (19%, the highest of any region) as well as financial independence (15%, also the highest). One interesting trend is that people often connected financial independence explicitly to family obligations and filial piety.

### Where do particular concerns most resonate?

**North America and Oceania are particularly worried about governance gaps. Western Europe's standout concern is surveillance and privacy. East Asia bucks the general global pattern—governance and surveillance drop to their lowest levels of any region, overshadowed by concerns about cognitive atrophy and loss of meaning.** The West worries about who owns and controls AI; East Asia worries more about the personal implications of its use.

## Looking forward

These interviews give us a sense of what people want from AI broadly, which informs how we build Claude. They reinforced the importance of work we're already doing, and pointed us toward new questions to ask.

**Most of the visions people described, ranging from personal transformation to cognitive support, collapse into an underlying desire: that AI helps them live better, not simply work faster.** Our next Anthropic Interviewer study focuses on Claude's effects on people's wellbeing over time: whether Claude is actually making people's lives better in the ways they want, and how it could do so more effectively.

## Conclusion

AI poses both opportunities and risks. This is true—but also, at this point, a cliché. One of our goals for this research is to offer a complement to the abstractions we all tend to use in speaking about AI; to capture the texture that more vividly renders exactly how we are already experiencing these opportunities and risks worldwide.

**We don't usually get to hear from small business owners around the world using Claude to reclaim time to spend with their young children or aging parents, or from truck drivers and butchers building new careers with the help of Claude, or from teachers in under-resourced schools using Claude to surpass what they achieved when they taught in well-funded schools.** We were surprised by the incredible volume of people who have been supported by Claude in their educational or personal growth endeavors, and the people finding in AI freedom from judgment in a way they hadn't experienced before.

We were equally gripped by the fears and downsides—people saying that the same availability making Claude useful is what makes it hard to put down, or knowledge workers worrying about outrunning AI's economic impact. **When you come into contact with this much raw human experience, it knocks you sideways. The usefulness is real, and the question for all of us is how to claim the benefits without incurring undue costs.**

To the 81,000 people who took the time to speak with us: thank you. It has been striking, and humbling, to see Claude form the basis of so many people's hopes, dreams, and fears. These interviews remind us what it means, and what it takes, to build AI that benefits everyone.
