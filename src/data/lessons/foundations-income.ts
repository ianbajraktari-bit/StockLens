import { Layers, TrendingUp, Search, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsIncomeLesson: Lesson = {
  id: 'foundations-income',
  emoji: '📊',
  title: 'Reading the Scoreboard',
  subtitle: 'Gross profit, operating profit, net income — the three layers',
  description:
    "When NVIDIA reports \"73% gross margin\" or Costco reports \"3.7% operating margin,\" they're talking about different layers of the same scoreboard. This lesson teaches you to read an income statement — the financial report that shows how revenue turns into profit, one layer at a time.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'The three layers of profit every investor reads', icon: Layers },
    { label: 'Why gross margin and operating margin tell different stories', icon: Search },
    { label: 'How to spot where a business leaks money', icon: TrendingUp },
    { label: 'Reading a real income statement like an investor', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: sorting costs into the right layer
    //
    // Why a drill: investors must instantly distinguish direct costs
    // (making the product) from operating costs (running the company).
    // This distinction powers every margin comparison.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Two Kinds of Costs',
      topicIcon: Zap,
      intro: 'Every cost falls into one of two buckets. Sort each one.',
      prompts: [
        {
          setup: 'A phone manufacturer pays $220 for the chips, screen, and battery in each phone.',
          left: { label: 'Cost of goods sold', sublabel: 'making the product' },
          right: { label: 'Operating expense', sublabel: 'running the company' },
          correct: 'left',
          flash: 'Each phone needs its own chips and screen — costs rise with every unit sold. These variable, per-unit costs are "cost of goods sold" (COGS).',
        },
        {
          setup: 'The same company spends $5M/year on TV advertising.',
          left: { label: 'Cost of goods sold' },
          right: { label: 'Operating expense', sublabel: 'running the company' },
          correct: 'right',
          flash: 'Advertising doesn\'t make the phone — it sells it. That\'s an operating expense. It exists whether you make 1 phone or 1 million.',
        },
        {
          setup: 'A bakery pays $2 for flour, eggs, and butter per cake.',
          left: { label: 'Cost of goods sold', sublabel: 'making the product' },
          right: { label: 'Operating expense' },
          correct: 'left',
          flash: 'Every cake needs flour — costs scale directly with production. That\'s a variable cost, and variable costs are the heart of COGS.',
        },
        {
          setup: 'A software company pays $40M/year for its 200 engineers.',
          left: { label: 'Cost of goods sold' },
          right: { label: 'Operating expense', sublabel: 'running the company' },
          correct: 'right',
          flash: 'Engineers cost the same whether the app has 100 or 10 million users — that\'s a fixed cost. Ingredients cost more with every loaf — that\'s a variable cost. COGS is mostly variable; operating expenses are mostly fixed.',
        },
        {
          setup: 'A streaming service pays $500M/year in licensing fees to show movies.',
          left: { label: 'Cost of goods sold', sublabel: 'delivering the product' },
          right: { label: 'Operating expense' },
          correct: 'left',
          flash: 'Content is the product. Without it, there\'s nothing to stream. Licensing is a direct cost of delivering the service — COGS.',
        },
        {
          setup: 'A retailer pays $3M/year for the CEO\'s salary and corporate headquarters.',
          left: { label: 'Cost of goods sold' },
          right: { label: 'Operating expense', sublabel: 'running the company' },
          correct: 'right',
          flash: 'The CEO doesn\'t make the products. HQ doesn\'t ship boxes. These are overhead — operating expenses that exist regardless of sales volume.',
        },
      ],
      takeaway:
        'COGS is mostly variable costs that scale with each unit sold. Operating expenses are mostly fixed costs that stay flat as revenue grows. This distinction matters because businesses with mostly fixed costs (software) scale beautifully — revenue grows while costs barely budge. Businesses with mostly variable costs (manufacturing) grow revenue and costs in lockstep.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: calculate gross profit
    //
    // Why an estimate: gross profit is the first layer. User must
    // do the subtraction to internalize Revenue − COGS = Gross Profit.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Layer 1: Gross Profit',
      topicIcon: Calculator,
      context:
        'A sneaker company reports:\n\n• Revenue: $500M (total sales)\n• Cost of goods sold: $200M (materials, factory labor, shipping)\n\nGross Profit = Revenue − COGS. This tells you how much money is left after making the product — before any salaries, marketing, or rent.',
      question: 'What\'s the gross profit?',
      answer: 300,
      tolerance: 25,
      unit: '$M',
      hint: '$500M − $200M',
      reveal:
        '$500M − $200M = $300M gross profit. That\'s a 60% gross margin ($300M ÷ $500M). This number tells you how efficiently the company makes its product. A software company might have 80% gross margin (code costs almost nothing to copy). A grocery store might have 25% (food is expensive to source). When investors compare NVIDIA\'s 73% gross margin to Intel\'s 40%, this is the layer they\'re looking at.',
      takeaway: 'Gross profit = Revenue − Cost of Goods Sold. It measures how efficiently the company makes its product. Higher is better — but it\'s only the first layer.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: calculate operating profit
    //
    // Why an estimate: operating profit is the critical second layer.
    // This is the number Costco's "3.7% operating margin" refers to.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Layer 2: Operating Profit',
      topicIcon: Calculator,
      context:
        'Same sneaker company:\n\n• Gross profit: $300M\n• Marketing & sales: $80M\n• R&D (design, innovation): $40M\n• Corporate overhead (HQ, executives): $30M\n• Total operating expenses: $150M\n\nOperating Profit = Gross Profit − Operating Expenses. This tells you how much the business earns from its actual operations — after every cost of running the company.',
      question: 'What\'s the operating profit?',
      answer: 150,
      tolerance: 15,
      unit: '$M',
      hint: '$300M − $150M',
      reveal:
        '$300M − $150M = $150M operating profit. That\'s a 30% operating margin ($150M ÷ $500M revenue). This is the number that shows whether the company can run profitably — not just make products cheaply. When Costco reports a \"3.7% operating margin,\" they mean only $3.70 of every $100 in revenue survives to this layer. When Apple reports ~30%, it means $30 of every $100 survives. Same layer, wildly different stories.',
      takeaway: 'Operating profit = Gross Profit − Operating Expenses. It measures whether the business itself is profitable. This is the layer investors use to compare companies across industries.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: which layer tells the real story?
    //
    // Why a decide: the user needs to understand that different
    // layers answer different questions. This isn't trivia — it's
    // the judgment call that makes company analysis work.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Which Layer Matters Most',
      topicIcon: Search,
      context:
        'Two companies in the same industry:\n\nCompany A: 70% gross margin, 10% operating margin\nCompany B: 45% gross margin, 25% operating margin\n\nCompany A makes its product cheaply but spends massively on sales, R&D, and overhead. Company B\'s product costs more to make but the company runs lean.',
      question: 'Which company is in a stronger position to generate profit for investors?',
      options: [
        'Company A — 70% gross margin shows a superior product with pricing power',
        'Company B — 25% operating margin means more profit actually reaches investors, regardless of gross margin',
        'They\'re equal — high gross margin and high operating margin are the same thing',
        'Can\'t tell without seeing revenue growth',
      ],
      correctIndex: 1,
      punchline:
        'Gross margin shows product economics. Operating margin shows business economics. A company that makes products cheaply but burns the savings on overhead isn\'t actually more profitable. Operating margin is closer to what investors actually receive.',
      wrongNudges: [
        'A 70% gross margin is impressive — but if 60 of those 70 cents get eaten by operating costs, only 10 cents reaches investors. Product advantage doesn\'t help if the company can\'t run efficiently.',
        '',
        'They measure different things. You can have a great gross margin and terrible operating margin (overspending on overhead) or vice versa. They are not interchangeable.',
        'Revenue growth matters, but a fast-growing company at 10% operating margin will generate less profit than a slower-growing one at 25%. Growth without operating leverage often just creates bigger losses.',
      ],
      takeaway: 'Gross margin measures the product. Operating margin measures the business. Investors care about both, but operating margin is closer to what actually reaches your pocket.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: read a simplified income statement
    //
    // Why a tap: this is the first time the user sees numbers laid
    // out like a real financial report. Tapping the important lines
    // teaches them to extract signal from the format.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading the Real Thing',
      topicIcon: Flag,
      intro: 'Here\'s a simplified income statement. Tap the lines that reveal the most about this business\'s health.',
      passage: [
        { type: 'text', value: 'CloudCo Inc. — Annual Income Statement\n\n' },
        {
          type: 'chip',
          value: 'Revenue: $400M',
          signal: false,
          feedback: 'Revenue is the starting point, but it doesn\'t tell you about profitability. $400M in revenue with $400M in costs = zero profit.',
        },
        { type: 'text', value: '\nCost of goods sold: $80M\n' },
        {
          type: 'chip',
          value: 'Gross profit: $320M (80% margin)',
          signal: true,
          feedback: '80% gross margin is excellent — typical of software companies. It costs very little to deliver the product. This signals strong product economics.',
        },
        { type: 'text', value: '\n\nOperating expenses:\n  Sales & marketing: $160M\n  R&D: $100M\n  General & admin: $40M\n' },
        {
          type: 'chip',
          value: 'Total operating expenses: $300M',
          signal: true,
          feedback: '$300M in operating expenses on $320M gross profit — the company is spending almost everything it makes. Only $20M survives to operating profit. The 80% gross margin is being eaten alive by spending.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Operating profit: $20M (5% margin)',
          signal: true,
          feedback: 'Here\'s the real story: 80% gross margin collapses to 5% operating margin. CloudCo makes its product cheaply but spends aggressively to grow. An investor needs to decide if that spending will pay off or if the company is burning through its gross profit advantage.',
        },
        { type: 'text', value: '\n\nInterest & taxes: $8M\n' },
        {
          type: 'chip',
          value: 'Net income: $12M (3% margin)',
          signal: false,
          feedback: 'Net income is the bottom line — what\'s left after everything including taxes and interest. Important, but operating profit already told you the business story. Net income adds financial structure (debt, tax strategy) which is less about the core business.',
        },
        { type: 'text', value: '' },
      ],
      requiredSignals: 3,
      reveal:
        'The income statement tells a story in layers: CloudCo has excellent product economics (80% gross margin) but spends aggressively ($300M in opex), leaving just 5% operating margin. High operating expenses aren\'t always bad — $100M in R&D might be building next year\'s product, and $160M in sales might be acquiring customers who stick for a decade. The investor question is whether the spending generates returns or just burns cash.',
      takeaway: 'An income statement is a funnel. Revenue goes in the top, costs peel off at each layer, and profit comes out the bottom. Each layer tells you something different about the business.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: diagnosing a real margin profile
    //
    // Why a decide: applies everything to a realistic scenario. Forces
    // the user to use all three layers to form a judgment.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Diagnosis',
      topicIcon: Lightbulb,
      context:
        'You\'re looking at two real businesses:\n\nBusiness X: 25% gross margin, 4% operating margin, growing 7%/year\nBusiness Y: 75% gross margin, 35% operating margin, growing 12%/year\n\nBusiness X sells physical goods. Business Y sells software.',
      question: 'What\'s the most important conclusion from these numbers?',
      options: [
        'Business Y is better because software always beats physical goods',
        'Business X is more stable because physical products have reliable demand',
        'Business Y keeps $35 of every $100 in revenue as operating profit vs $4 for Business X — that margin gap compounds massively over time',
        'They can\'t be compared because they\'re in different industries',
      ],
      correctIndex: 2,
      punchline:
        'At $100M revenue each, Business Y generates $35M in operating profit vs $4M for Business X. Give them both 10 years of growth and the gap is enormous. Margins are the multiplier that turns revenue into wealth — and now you can read them.',
      wrongNudges: [
        'Software doesn\'t automatically win. A poorly run software company at 75% gross margin and -10% operating margin is worse than a well-run retailer. The margins tell the story, not the industry label.',
        'Reliability matters, but 4% operating margin means almost no room for error. One bad quarter and Business X is unprofitable. Business Y at 35% can absorb shocks.',
        '',
        'Different industries have different typical margins, but operating profit is universal. $35 of real profit per $100 of revenue beats $4 in any industry. The comparison is not only valid — it\'s essential.',
      ],
      takeaway: 'The income statement\'s three layers — gross, operating, net — tell you how efficiently a business converts revenue into profit. Now when you see "73% gross margin" or "3.7% operating margin," you know exactly what layer they\'re talking about and why it matters.',
    },
  ],
  takeaways: [
    'Cost of goods sold (COGS) = making the product. Operating expenses = running the company. Different buckets, different profit layers.',
    'Gross profit = Revenue − COGS. It measures product efficiency. Operating profit = Gross Profit − Operating Expenses. It measures business efficiency.',
    'A high gross margin that collapses at the operating level means the company makes products cheaply but spends the savings on overhead.',
    'The income statement is a funnel: revenue in, costs peel off layer by layer, profit out. Each layer answers a different investor question.',
    'You can read a scoreboard. Next: why income that shows up automatically is worth more than income you have to chase.',
  ],
  completionMessages: {
    perfect: 'Flawless. You can now read the scoreboard every public company publishes — and know exactly what each line means.',
    great: 'Strong work. Gross margin, operating margin, net income — you can now read the three layers investors care about most.',
    good: 'Good foundation. These three profit layers will come up in every company analysis. The more you see them, the sharper the pattern gets.',
    low: 'Worth revisiting. The income statement is the most important financial document in investing — this lesson is worth nailing.',
  },
};
