import { Layers, TrendingUp, Search, Lightbulb, Zap } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsIncomeLesson: Lesson = {
  id: 'foundations-income',
  emoji: '📊',
  title: 'Reading the Scoreboard',
  subtitle: 'How an 80% margin company can barely make money',
  description:
    'An income statement has three layers of profit — and each tells a completely different story. A company can look amazing at layer one and terrible at layer three. This lesson teaches you to read all three layers so you never get fooled by a headline number.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'The three layers of an income statement', icon: Layers },
    { label: 'Gross profit — what the product earns', icon: TrendingUp },
    { label: 'Operating profit — what the business earns', icon: Search },
    { label: 'Why each layer answers a different question', icon: Lightbulb },
  ],
  steps: [
    // Hook: counterintuitive estimate
    {
      kind: 'estimate',
      topic: 'The Headline Trap',
      topicIcon: Layers,
      context:
        'CloudCo is a SaaS company. Their product costs almost nothing to deliver — it\'s software running on servers. Their "gross margin" (revenue minus the direct cost of delivering the product) is an incredible 82%.\n\nBut CloudCo spends aggressively on sales teams, marketing, R&D, and executive compensation. After ALL expenses, not just product costs:',
      question: 'If CloudCo has 82% gross margin, what do you think its net profit margin actually is after all expenses?',
      answer: 5,
      tolerance: 8,
      unit: '%',
      hint: 'Think about how much SaaS companies spend on sales, marketing, and engineering',
      reveal:
        'About 3-8% for most SaaS companies CloudCo\'s size. That 82% gross margin means the PRODUCT is profitable. But the BUSINESS spends almost everything on sales reps, marketing campaigns, and engineering teams. The gap between 82% gross and 5% net is where investors get fooled — and where the real story lives.',
      takeaway: 'A headline margin number can be incredibly misleading. The gap between gross margin and net margin tells you how efficiently a company converts its product advantage into actual profit.',
    },

    // Drill: classify costs into layers
    {
      kind: 'drill',
      topic: 'Where the Money Goes',
      topicIcon: Zap,
      intro: 'An income statement splits costs into two categories: "cost of goods sold" (COGS — the direct cost of making/delivering the product) and "operating expenses" (everything else — salaries, marketing, rent, R&D). Sort each cost.',
      prompts: [
        {
          setup: 'A sneaker company pays $22 per pair for materials and factory labor.',
          left: { label: 'COGS', sublabel: 'direct product cost' },
          right: { label: 'Operating expense', sublabel: 'running the business' },
          correct: 'left',
          flash: 'Materials and manufacturing are directly tied to each unit sold. No sneakers made = no cost. This is COGS — it scales with volume.',
        },
        {
          setup: 'The same company spends $200M/year on TV ads and Instagram campaigns.',
          left: { label: 'COGS' },
          right: { label: 'Operating expense', sublabel: 'running the business' },
          correct: 'right',
          flash: 'Marketing isn\'t tied to producing the product — it\'s about selling it. Whether they make 1 million pairs or 10 million, the ad budget is a business decision, not a production cost.',
        },
        {
          setup: 'Netflix pays $17B/year for content (movies, shows, licensing).',
          left: { label: 'COGS', sublabel: 'cost of delivering the service' },
          right: { label: 'Operating expense' },
          correct: 'left',
          flash: 'Content IS Netflix\'s product. Without shows, there\'s nothing to stream. Content costs are COGS — this is why Netflix\'s gross margin (65%) is much lower than a typical software company (80%+).',
        },
        {
          setup: 'A pharmaceutical company spends $4B/year on R&D to develop new drugs.',
          left: { label: 'COGS' },
          right: { label: 'Operating expense', sublabel: 'future investment' },
          correct: 'right',
          flash: 'R&D develops FUTURE products, not current ones. The drugs being sold today were developed years ago. R&D is an operating expense — it\'s an investment in the pipeline, not a cost of today\'s production.',
        },
        {
          setup: 'AWS (Amazon\'s cloud service) pays billions for servers, data centers, and electricity to run customer workloads.',
          left: { label: 'COGS', sublabel: 'direct delivery cost' },
          right: { label: 'Operating expense' },
          correct: 'left',
          flash: 'The servers and electricity directly power the service customers pay for. More customers = more servers needed. This is COGS for cloud computing — and it\'s why cloud margins (~30%) are lower than pure software margins (~70%).',
        },
      ],
      takeaway: 'COGS = what it costs to make/deliver the product. Operating expenses = what it costs to run the business (sales, marketing, R&D, admin). The gap between them reveals where money disappears.',
    },

    // Walk through the three layers with one company
    {
      kind: 'decide',
      topic: 'Layer by Layer',
      topicIcon: Layers,
      context:
        'Here\'s CloudCo\'s simplified income statement:\n\nRevenue: $200M\n— COGS: $36M (servers, infrastructure)\n= Gross Profit: $164M (82% gross margin) ← Layer 1\n\n— Sales & Marketing: $80M\n— R&D (engineering): $55M\n— Admin & overhead: $20M\n= Operating Profit: $9M (4.5% operating margin) ← Layer 2\n\nThe product is amazing (82% gross margin). But the business is barely profitable (4.5% operating margin).',
      question: 'CloudCo\'s gross margin is 82% but operating margin is only 4.5%. What does this 77.5-point gap tell an investor?',
      options: [
        'CloudCo is a bad business — 4.5% operating margin is terrible',
        'CloudCo has a great product but is spending almost all its profit on sales, marketing, and R&D to grow',
        'CloudCo\'s costs are out of control and the company is failing',
        'The 82% number is misleading and shouldn\'t be trusted',
      ],
      correctIndex: 1,
      punchline:
        'The 82% gross margin proves the PRODUCT is excellent — it costs very little to deliver. The 4.5% operating margin shows the COMPANY is choosing to spend aggressively on growth. This is a strategy, not a failure — but it\'s the investor\'s job to decide whether that spending will eventually produce profits or is just burning cash.',
      wrongNudges: [
        'A 4.5% operating margin at a young SaaS company isn\'t necessarily bad — it might be because they\'re investing heavily to grow. The question is whether that spending pays off later. Many great companies had thin operating margins in their growth phase.',
        '',
        'Spending a lot doesn\'t mean costs are "out of control." If the $80M in sales is acquiring customers who stay for years and pay $200M in revenue, the spending might be brilliant. You need to understand WHAT the money buys.',
        'The 82% IS real — it accurately measures the product economics. But it\'s only one layer. Investors who stop at gross margin miss the full picture.',
      ],
      takeaway: 'Gross margin tells you about the PRODUCT. Operating margin tells you about the BUSINESS. A huge gap between them means the company is spending aggressively — which is either growth investing or waste.',
    },

    // Tap: read a real income statement and find what matters
    {
      kind: 'tap',
      topic: 'Reading Between the Lines',
      topicIcon: Search,
      intro: 'Here\'s a simplified annual report for a company called MedTech Inc. Tap the numbers that tell the REAL story about this business\'s health.',
      passage: [
        { type: 'text', value: 'MedTech Inc Annual Results: ' },
        { type: 'chip', value: 'Revenue $1.2B, up 8% YoY', signal: false, feedback: 'Revenue growth is decent but not the story here. 8% for a medical device company is average. Keep digging.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Gross margin improved from 71% to 74%', signal: true, feedback: 'Gross margin EXPANDING 3 points means MedTech is either raising prices or reducing production costs. This is real business improvement — the product is becoming more profitable.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Company won "Most Innovative Medical Device" award', signal: false, feedback: 'Awards don\'t show up on income statements. Innovation matters only when it shows up in revenue or margins.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Sales & marketing spending jumped 35% to $280M', signal: true, feedback: 'Sales spending growing 4x faster than revenue (35% vs 8%) is a red flag. They\'re spending dramatically more to grow only slightly. This is getting more expensive — not more efficient.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Operating margin fell from 18% to 12%', signal: true, feedback: 'HERE is the real story. Gross margins improved (good) but operating margins FELL (bad). The gap grew because spending on sales outpaced revenue growth. The product is better but the business is less efficient.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Headcount grew 22% to 8,500 employees', signal: false, feedback: 'Hiring alone is neutral — it depends on what those people produce. The operating margin decline suggests these hires haven\'t yet generated proportional revenue.' },
      ],
      requiredSignals: 3,
      reveal:
        'The real story: MedTech\'s product economics improved (gross margin up 3 points) but was MORE than offset by aggressive spending (sales costs up 35%). The result: operating margin collapsed from 18% to 12%. Gross margin improving while operating margin declines = a company spending faster than it\'s earning. This is the exact pattern you need to spot.',
      takeaway: 'When gross margins expand but operating margins contract, the company is spending its product advantage away. Watch the gap between the two layers — it tells you whether growth investment is working.',
    },

    // Thinking step
    {
      kind: 'thinking',
      prompt: 'You\'re comparing two companies. Company A: 80% gross margin, 8% operating margin. Company B: 45% gross margin, 25% operating margin. Which would you rather invest in, and why? Consider what each company\'s numbers tell you about their product, their spending discipline, and their future.',
      placeholder: 'Think about what the gap between gross and operating margin reveals about each company\'s strategy and efficiency...',
      modelAnswer:
        'I\'d lean toward Company B. While A has a better product (80% gross margin means it costs almost nothing to deliver), the company is spending 72 cents of every dollar on sales, marketing, R&D, and overhead — leaving shareholders only 8 cents. That massive gap suggests either the product is hard to sell (needs expensive sales teams), the company is in an intense growth phase (spending to acquire customers), or management is undisciplined with expenses. Company B has a less impressive product margin (45%), but it runs a tight ship — converting 25% to operating profit. That spending discipline suggests the business is mature, efficient, and generating real cash for shareholders. The risk: if Company A\'s spending eventually pays off and it reaches 30% operating margins, its stock could 5x. But that\'s a bet on the future, not today\'s reality.',
      strongReasoningIncludes: [
        'Analyzes what the gap between gross and operating margin reveals about each company',
        'Considers the trade-off between growth investing (A) and profitability discipline (B)',
        'Acknowledges uncertainty — neither answer is obviously "right"',
      ],
    },
  ],
  takeaways: [
    'An income statement has three profit layers: gross profit (product economics), operating profit (business economics), and net profit (after taxes and interest).',
    'A company can have 80% gross margins and still barely make money. The gap between gross and operating margin is where the real story lives.',
    'Gross margin expanding + operating margin contracting = the company is spending its product advantage away. This is the most common trap in SaaS investing.',
    'Each layer answers a different question: Gross → "Is the product profitable?" Operating → "Is the business profitable?" Net → "What do shareholders actually get?"',
  ],
  completionMessages: {
    perfect: 'Perfect. You can now read an income statement and see what most people miss — the story between the layers.',
    great: 'Strong work. Understanding the gap between gross and operating margin puts you ahead of most retail investors.',
    good: 'Good foundation. Remember: don\'t stop at gross margin. The operating margin tells you whether the business is actually making money.',
    low: 'Worth revisiting. The three layers of profit are fundamental to analyzing any company — they show up in every earnings report.',
  },
};
