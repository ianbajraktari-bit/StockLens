import { TrendingUp, Target, Zap, Calculator, Flag, Lightbulb } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsGrowthValueLesson: Lesson = {
  id: 'foundations-growth-value',
  emoji: '⚖️',
  title: 'Growth vs. Value',
  subtitle: 'Two ways to find a bargain — and the traps hiding in each',
  description:
    "Every stock is either priced for high growth or priced like a bargain — and both can fool you. A \"growth\" stock growing 40% can still be overpriced. A \"value\" stock at 8x earnings can be a trap. This lesson teaches you the two investing lenses, why each works, and how each fails.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation', 'behavioral_biases', 'risk'],
  keyFacts: [],
  topics: [
    { label: 'Growth investing — paying up for companies that are compounding', icon: TrendingUp },
    { label: 'Value investing — finding companies priced below what they\'re worth', icon: Target },
    { label: 'Growth traps: when fast growth hides a bad business', icon: Zap },
    { label: 'Value traps: when cheap stocks are cheap for a reason', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: the core tradeoff
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Two Philosophies',
      topicIcon: Target,
      context:
        'Two investors look at the same market:\n\nInvestor A buys companies growing 30%+ per year, even at 50x earnings. Thesis: "These companies will grow into their valuations. A great business at a fair price beats a mediocre business at a cheap price."\n\nInvestor B buys companies at 10x earnings or less that the market has given up on. Thesis: "The best returns come from buying $1 of value for $0.50. When expectations are low, even a small improvement creates upside."\n\nBoth strategies have produced legendary investors. Both have also produced spectacular losses.',
      question: 'What\'s the real difference between these two approaches?',
      options: [
        'Growth investing is riskier — value investing is safer',
        'Growth investors are betting that future earnings will justify today\'s high price. Value investors are betting that current assets or earnings already justify a higher price. Both are looking for a gap between price and value — they just look in different places',
        'Growth investing is about technology stocks. Value investing is about old-economy stocks',
        'Growth investing works in bull markets. Value investing works in bear markets',
      ],
      correctIndex: 1,
      punchline:
        'Both growth and value investors are hunting for the same thing: a stock priced below what it\'s actually worth. Growth investors find it in future earnings the market underestimates. Value investors find it in current assets the market ignores. Same goal, different lens.',
      wrongNudges: [
        'Neither is inherently safer. A "safe" value stock that goes bankrupt is riskier than a growth stock that delivers. Risk depends on the specific situation, not the label.',
        '',
        'Amazon at 10x earnings is a value stock. A small-town bank at 40x earnings is a growth stock. The framework applies to any company — it\'s about the relationship between price and value, not the industry.',
        'Both strategies have worked in all market conditions. Value outperformed for decades, then growth dominated from 2010-2021, then value surged again. Neither has a permanent advantage.',
      ],
      takeaway: 'Growth and value are two lenses for the same question: "Is this stock priced below what it\'s worth?" Growth investors look forward to future earnings. Value investors look at current assets and earnings. Both work — and both fail when misapplied.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: growth or value?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Classify the Stock',
      topicIcon: Zap,
      intro: 'Each stock has a profile. Is the market pricing it as a growth stock or a value stock?',
      prompts: [
        {
          setup: '45x P/E, revenue growing 35%/year, no dividend, reinvesting all profits into expansion.',
          left: { label: 'Growth', sublabel: 'priced for future earnings' },
          right: { label: 'Value', sublabel: 'priced below current worth' },
          correct: 'left',
          flash: '45x P/E means investors are paying 45 years of current earnings upfront. They\'re betting that 35% growth will make today\'s price look cheap in hindsight. Classic growth profile.',
        },
        {
          setup: '8x P/E, 4% dividend yield, slow-growing utility company, stock down 20% this year.',
          left: { label: 'Growth' },
          right: { label: 'Value', sublabel: 'out of favor, low expectations' },
          correct: 'right',
          flash: '8x P/E means the market expects almost no growth. The 4% dividend is real cash return. If the business is stable, you\'re getting paid to wait. Classic value profile.',
        },
        {
          setup: '60x P/E, unprofitable but revenue doubling every year. IPO\'d two years ago.',
          left: { label: 'Growth', sublabel: 'priced on potential' },
          right: { label: 'Value' },
          correct: 'left',
          flash: 'Unprofitable at 60x P/E means the market is pricing revenue growth, not current earnings. Investors believe profits will come later. This is aggressive growth pricing — high ceiling, high risk.',
        },
        {
          setup: '12x P/E, market leader in a declining industry. Generating huge cash flow but revenue shrinking 3%/year.',
          left: { label: 'Growth' },
          right: { label: 'Value', sublabel: 'cheap but shrinking' },
          correct: 'right',
          flash: 'Low P/E + declining revenue = the market expects this business to keep shrinking. If cash flow holds up, the stock could be a value play. If the decline accelerates, it\'s a value trap. Context matters.',
        },
        {
          setup: '30x P/E, growing 8%/year. Considered a "quality" blue-chip.',
          left: { label: 'Growth', sublabel: 'premium pricing' },
          right: { label: 'Value' },
          correct: 'left',
          flash: '30x P/E for 8% growth is a premium — the market is paying for quality and predictability, not explosive growth. This is "growth at a reasonable price" (GARP) — a blend, but closer to growth pricing.',
        },
      ],
      takeaway: 'The P/E ratio tells you which lens the market is using. High P/E = priced for growth. Low P/E = priced for value (or decline). The real question is whether the market\'s bet is right.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: growth trap math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Growth Trap',
      topicIcon: Calculator,
      context:
        'A company trades at 60x earnings, growing revenue 40%/year. You buy at $60/share ($1 EPS × 60x).\n\nTwo years later, the company delivered: earnings grew to $1.96/share (40% growth compounded: $1 → $1.40 → $1.96).\n\nBut the market now prices it at 25x — growth decelerated to 15%, and the premium collapsed.\n\nNew stock price = $1.96 × 25 = $49.\n\nYou bought a company that almost doubled its earnings — and lost money.',
      question: 'What\'s your loss per share?',
      answer: 11,
      tolerance: 1,
      unit: '$',
      hint: 'You paid $60. The stock is now $49.',
      reveal:
        '$60 − $49 = $11 loss per share (18% loss). The company nearly doubled earnings — yet you lost money because the P/E multiple compressed from 60x to 25x. This is the growth trap: if you overpay for growth, even excellent results can\'t save you. The multiple you pay matters as much as the growth you get.',
      takeaway: 'Growth traps happen when you pay too much for growth. A company can execute perfectly — double earnings — and you still lose money if the starting P/E was too high and the market reprices expectations downward.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the value trap
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Value Trap',
      topicIcon: Flag,
      intro: 'A stock looks like a steal — low P/E, high dividend, beaten down. Tap the signals that suggest it\'s a value trap, not a bargain.',
      passage: [
        { type: 'text', value: '"RetailCo looks incredibly cheap. ' },
        {
          type: 'chip',
          value: 'It trades at just 6x earnings — half its historical average',
          signal: false,
          feedback: 'A low P/E could be a bargain or a warning. On its own, it\'s neutral — you need to understand WHY it\'s cheap before deciding if it\'s attractive.',
        },
        { type: 'text', value: '. The ' },
        {
          type: 'chip',
          value: 'dividend yield is 7% — three times the market average',
          signal: true,
          feedback: 'Extremely high dividend yields are often a warning sign, not a gift. A 7% yield usually means the stock price crashed (yield = dividend ÷ price). If earnings keep falling, the company will cut the dividend — and the yield goes to zero.',
        },
        { type: 'text', value: '. The company has ' },
        {
          type: 'chip',
          value: 'been in business for 40 years with a strong brand',
          signal: false,
          feedback: 'History and brand have value — but they don\'t prevent decline. Sears, Kodak, and Blockbuster were all iconic brands that went to zero. Brand longevity is not a guarantee of future survival.',
        },
        { type: 'text', value: '. However, ' },
        {
          type: 'chip',
          value: 'same-store sales have declined for 8 consecutive quarters',
          signal: true,
          feedback: 'Eight straight quarters of declining same-store sales is a structural problem, not a blip. This means existing customers are spending less — the core business is eroding. A cheap P/E on declining earnings means the stock might get even cheaper.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'The company\'s biggest competitor is e-commerce, which takes more share every year',
          signal: true,
          feedback: 'Secular decline from e-commerce is structural and unlikely to reverse. When a company\'s core business is being permanently disrupted, a low P/E isn\'t a bargain — it\'s the market correctly pricing in a shrinking future.',
        },
        { type: 'text', value: '. Management says they are ' },
        {
          type: 'chip',
          value: '"investing in digital transformation"',
          signal: false,
          feedback: 'Every declining retailer says this. It could work, but "digital transformation" has a poor track record in brick-and-mortar retail. Judge by results (growing online sales), not announcements.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Classic value trap: a stock that looks cheap by every metric (6x P/E, 7% yield) but is cheap for a reason. Declining same-store sales, structural competition from e-commerce, and an unsustainably high dividend yield all point to a business in permanent decline. The P/E is low because earnings are falling — and a stock at 6x shrinking earnings can fall to 6x even smaller earnings.',
      takeaway: 'A value trap is a stock that\'s cheap AND getting cheaper. The red flags: declining revenue for multiple quarters, structural industry disruption, and unsustainably high dividend yields. Cheap is only a bargain if the business stabilizes.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: which matters more?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Synthesis',
      topicIcon: Lightbulb,
      context:
        'After studying both approaches:\n\n• Growth investing works when you find companies whose future is underpriced. It fails when you overpay for growth that decelerates (growth trap).\n\n• Value investing works when you find companies whose present is underpriced. It fails when you buy declining businesses that keep declining (value trap).\n\nThe best investors don\'t pick a camp — they pick the better opportunity.',
      question: 'What\'s the most important skill for avoiding both traps?',
      options: [
        'Always buy growth stocks — they outperform long-term',
        'Always buy value stocks — cheap prices protect you',
        'Understand what\'s priced in. For growth stocks: is the P/E justified by realistic growth? For value stocks: is the cheapness driven by temporary problems or permanent decline?',
        'Just buy index funds — stock picking doesn\'t work',
      ],
      correctIndex: 2,
      punchline:
        'Both traps come from the same mistake: not understanding what the price already assumes. Growth traps happen when you pay for perfection. Value traps happen when cheapness masks permanent decline. The antidote is the same: reverse-engineer what the price implies, then ask if reality is likely to beat or miss those expectations.',
      wrongNudges: [
        'Growth stocks that overshoot expectations can lose 50-80% of their value in months. "Always buy growth" ignores the biggest risk: overpaying for future earnings that may not arrive.',
        'Cheap stocks that keep getting cheaper can lose everything. Sears was "cheap" for years while going bankrupt. Value without quality is a trap.',
        '',
        'Index funds are a reasonable choice — but understanding growth vs. value helps you evaluate any investment, including understanding what\'s inside your index fund.',
      ],
      takeaway: 'The key skill isn\'t choosing growth or value — it\'s understanding what any stock price already assumes. Growth traps and value traps are both caused by ignoring what\'s priced in. Always ask: "What does this price require to be right?"',
    },
  ],
  takeaways: [
    'Growth and value are two lenses for the same question: "Is this stock priced below what it\'s worth?" Growth looks at future earnings. Value looks at current assets. Both work when applied correctly.',
    'Growth traps: paying 60x for a company that delivers great results — and still losing money because the multiple compresses. Overpaying for growth is as dangerous as buying declining businesses.',
    'Value traps: a stock at 6x P/E that looks cheap but keeps getting cheaper as the business permanently declines. Cheap is only a bargain if the business stabilizes or improves.',
    'The antidote to both traps: understand what the price assumes. Reverse-engineer the implied growth rate or the implied decline, then judge whether reality will beat or miss.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand both sides of the investing debate — and more importantly, the traps hiding in each.',
    great: 'Strong work. Most investors fall into one camp and dismiss the other. Seeing through both lenses is a genuine edge.',
    good: 'Good foundation. Growth traps and value traps will show up in every company you analyze. Watch for them.',
    low: 'Worth revisiting. These two frameworks — and the traps inside them — are central to every investment decision.',
  },
};
