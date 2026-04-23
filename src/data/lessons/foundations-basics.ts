import { DollarSign, TrendingUp, PieChart, Lightbulb, Zap, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBasicsLesson: Lesson = {
  id: 'foundations-basics',
  emoji: '💰',
  title: 'Follow the Money',
  subtitle: 'Why a $650 billion company can be worth less than a $390 billion one',
  description:
    'Two companies report their numbers on the same day. One has $650 billion in revenue. The other has $390 billion. Yet investors value the smaller one at 10x more. This lesson explains why — and teaches you the one number that matters more than anything else.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'Revenue — the money that flows in', icon: DollarSign },
    { label: 'Costs — the money that flows out', icon: PieChart },
    { label: 'Profit — what the business actually keeps', icon: TrendingUp },
    { label: 'Why revenue can be misleading', icon: Lightbulb },
  ],
  steps: [
    // Hook: test intuition about real companies
    {
      kind: 'estimate',
      topic: 'Gut Check',
      topicIcon: DollarSign,
      context:
        'Walmart is the largest company in the world by revenue — over $650 billion per year. That\'s more than the GDP of Sweden. For every dollar that passes through an American cash register, about 10 cents goes to Walmart.\n\nBut here\'s the question investors actually care about:',
      question: 'Out of every dollar Walmart collects in revenue, how many cents do you think it keeps as profit?',
      answer: 3,
      tolerance: 3,
      unit: '¢',
      hint: 'Think about how thin grocery and retail margins are',
      reveal:
        'About 2-3 cents. Walmart\'s net profit margin is roughly 2.4%. On $650 billion in revenue, they keep about $15.5 billion. That sounds huge — until you realize Apple keeps $97 billion on just $390 billion in revenue (25 cents per dollar). Revenue is vanity. Profit is sanity.',
      takeaway: 'The amount of revenue a business generates tells you almost nothing about how good the business is. What matters is how much it KEEPS.',
    },

    // Decide: the core insight with real data
    {
      kind: 'decide',
      topic: 'The $650B Trap',
      topicIcon: TrendingUp,
      context:
        'Here are real numbers (simplified):\n\nWalmart: $650B revenue → $15.5B profit (keeps 2.4¢ per dollar)\nApple: $390B revenue → $97B profit (keeps 25¢ per dollar)\n\nWalmart has 67% MORE revenue than Apple. Apple has 6x MORE profit than Walmart.\n\nInvestors value Apple at $3.4 trillion. They value Walmart at $680 billion — roughly 5x less.',
      question: 'Why do investors value Apple at 5x more than Walmart despite Walmart having far more revenue?',
      options: [
        'Apple is a tech company and tech always gets higher valuations',
        'Apple keeps 25¢ of every dollar vs Walmart\'s 2.4¢ — investors buy profit, not revenue',
        'Apple has better marketing and a cooler brand',
        'Walmart is declining while Apple is growing',
      ],
      correctIndex: 1,
      punchline:
        'Investors don\'t buy revenue. They buy profit. Apple generates $97B of profit that belongs to shareholders. Walmart generates $15.5B. If you own 0.001% of each, your Apple stake earns you $970,000/year. Your Walmart stake earns $155,000. The market values each dollar of profit, not each dollar of revenue.',
      wrongNudges: [
        'Being "tech" doesn\'t automatically mean higher valuations. Plenty of tech companies are valued lower than retailers. The difference is profitability — Apple keeps 25x more per revenue dollar.',
        '',
        'Brand matters, but not because of "cool factor." Apple\'s brand lets them charge premium prices, which creates higher margins, which creates more profit. The brand serves the profit — it\'s not separate from it.',
        'Walmart isn\'t declining — it grew 6% last year. Both companies are growing. The difference is that Apple\'s growth is far more profitable per dollar.',
      ],
      takeaway: 'Revenue tells you how big a business is. Profit tells you how good it is. Investors pay for profit — that\'s why a $390B revenue company can be worth 5x more than a $650B one.',
    },

    // Drill: escalating from obvious to genuinely tricky
    {
      kind: 'drill',
      topic: 'Revenue vs. Profit Traps',
      topicIcon: Zap,
      intro: 'Test your instincts. Which business would you rather own a piece of? These get harder.',
      prompts: [
        {
          setup: 'Business A: $1M revenue, $500K profit. Business B: $5M revenue, $100K profit.',
          left: { label: 'A', sublabel: '$500K profit on $1M' },
          right: { label: 'B', sublabel: '$100K profit on $5M' },
          correct: 'left',
          flash: 'A keeps 50 cents per dollar. B keeps 2 cents. You own the profit, not the revenue. A\'s owners take home 5x more.',
        },
        {
          setup: 'Business A: $200M revenue, $40M profit, growing 5%/year. Business B: $50M revenue, $20M profit, growing 25%/year.',
          left: { label: 'A', sublabel: 'bigger and profitable' },
          right: { label: 'B', sublabel: 'smaller but growing fast' },
          correct: 'right',
          flash: 'B is half the profit today but growing 5x faster. In 3 years, B\'s profit catches A. In 5 years, B surpasses it. Growth rate matters as much as current size.',
        },
        {
          setup: 'Business A: $100M revenue, $30M profit. Business B: $100M revenue, -$10M loss, but revenue doubled this year.',
          left: { label: 'A', sublabel: 'profitable and stable' },
          right: { label: 'B', sublabel: 'losing money but exploding growth' },
          correct: 'left',
          flash: 'Tricky. Doubling revenue is exciting — but B is LOSING $10M. Growth without a path to profit is just burning cash faster. Amazon was an exception, not the rule.',
        },
        {
          setup: 'Business A: $500M revenue, $150M profit, but profit has declined 3 years in a row. Business B: $200M revenue, $30M profit, but profit has grown 40%/year for 3 years.',
          left: { label: 'A', sublabel: 'much more profitable today' },
          right: { label: 'B', sublabel: 'less profitable but accelerating' },
          correct: 'right',
          flash: 'A has more profit but the trend is down — something is going wrong. B is smaller but accelerating. Investors value the direction of profit as much as the level. A declining business with high profit is often a trap.',
        },
        {
          setup: 'Business A: $1B revenue, $200M profit, in a stable boring industry. Business B: $1B revenue, $200M profit, in a hyped industry with lots of competition entering.',
          left: { label: 'A', sublabel: 'boring but defensible' },
          right: { label: 'B', sublabel: 'exciting but competitive' },
          correct: 'left',
          flash: 'Same profit, different futures. B\'s profit is under threat — new competitors will pressure prices and margins. A\'s boring stability means that $200M is more likely to still be there in 5 years. Durability of profit matters.',
        },
      ],
      takeaway: 'Profit level, profit growth, and profit durability all matter. A business with less profit today but better trajectory and less competition is often worth more than a bigger, declining one.',
    },

    // Tap: find which numbers actually matter (NOT "find red flags")
    {
      kind: 'tap',
      topic: 'What Investors Actually Read',
      topicIcon: Search,
      intro: 'A company just released its quarterly results. Some numbers tell the real story. Others are distractions. Tap the numbers that actually matter to an investor.',
      passage: [
        { type: 'text', value: 'TechFlow Q3 Results: ' },
        { type: 'chip', value: 'Revenue: $480M, up 22% year-over-year', signal: true, feedback: 'Revenue growth rate matters — it tells you if the business is expanding. 22% is strong for a company this size.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Company featured in 3 major tech publications', signal: false, feedback: 'Media coverage is PR, not financial performance. A business can be in every magazine and still lose money.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Operating profit: $96M (20% margin), up from $72M (18% margin) last year', signal: true, feedback: 'This is gold — profit is growing FASTER than revenue (33% vs 22%), which means margins are expanding. The business is becoming more efficient as it grows.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'CEO named to Fortune\'s "40 Under 40" list', signal: false, feedback: 'CEO awards tell you nothing about the business. Some of the worst-performing companies had award-winning CEOs.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Hired 500 new employees this quarter', signal: false, feedback: 'Hiring more people isn\'t inherently good or bad. What matters is whether those hires generate more profit than they cost. Headcount alone is noise.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Earnings per share: $1.92, beating analyst expectations of $1.78', signal: true, feedback: 'EPS beating expectations is one of the strongest signals. It means the company is doing BETTER than the market already assumed — which is what makes stock prices move up.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Opened a new office in downtown Manhattan', signal: false, feedback: 'An office address is image, not substance. Some of the most profitable companies in the world operate from unremarkable buildings.' },
      ],
      requiredSignals: 3,
      reveal:
        'Three numbers told the real story: revenue growth (22%), profit margin expansion (18% → 20%), and EPS beating expectations ($1.92 vs $1.78). The media features, CEO awards, hiring, and office moves? Pure noise. Train yourself to scan for revenue, profit, and EPS — and ignore everything else.',
      takeaway: 'Revenue growth, profit margins, and earnings per share are signal. Media coverage, headcount, and office locations are noise. Real investors read the numbers, not the press releases.',
    },

    // Thinking step: force synthesis
    {
      kind: 'thinking',
      prompt: 'You discover two companies in the same industry. Company A has 3x more revenue but Company B has 2x more profit. A friend says "A is clearly the bigger, better company." In 2-3 sentences, explain why they might be wrong.',
      placeholder: 'Think about what revenue tells you vs what profit tells you, and which one you actually own as a shareholder...',
      modelAnswer:
        'Revenue measures how much money flows THROUGH a business, but profit measures how much STAYS. If Company A has 3x the revenue but half the profit, it means A is spending almost everything it earns — either on costs, operations, or inefficiency. As a shareholder, you own a share of the profit, not the revenue. Company B\'s owners take home twice as much per share despite the smaller topline. It\'s like comparing two restaurants: one serves 3x more customers but barely breaks even, while the other serves fewer customers but keeps a healthy margin on each meal. Size isn\'t strength — profitability is.',
      strongReasoningIncludes: [
        'Explains that shareholders own profit, not revenue',
        'Identifies that high revenue with low profit means high costs or inefficiency',
        'Uses a concrete comparison or example to illustrate the point',
      ],
    },
  ],
  takeaways: [
    'Revenue is money flowing in. Profit is what stays after all costs. Investors buy profit, not revenue.',
    'Walmart has $650B in revenue but keeps 2.4¢ per dollar. Apple has $390B but keeps 25¢. That\'s why Apple is worth 5x more.',
    'Profit growth and profit durability matter as much as profit level. A shrinking $200M profit is worth less than a growing $50M one.',
    'When reading about any company, scan for three things: revenue growth, profit margins, and earnings per share. Ignore everything else.',
  ],
  completionMessages: {
    perfect: 'Perfect. You now see what most people miss — revenue is vanity, profit is sanity.',
    great: 'Strong foundation. You understand the difference between how big a business looks and how good it actually is.',
    good: 'Good start. The core concept — profit matters more than revenue — will show up in every lesson from here.',
    low: 'Worth revisiting. This is THE foundational concept: investors care about profit, not revenue. Everything else builds on this.',
  },
};
