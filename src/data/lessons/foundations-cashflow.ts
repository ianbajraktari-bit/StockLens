import { Banknote, AlertTriangle, TrendingUp, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsCashflowLesson: Lesson = {
  id: 'foundations-cashflow',
  emoji: '💸',
  title: 'Cash vs. Profit',
  subtitle: 'Why profitable companies can still go broke',
  description:
    "A company reports $10M in profit — and runs out of cash three months later. How? Profit is an accounting number. Cash is what\'s actually in the bank. They\'re often very different, and the gap between them has killed more businesses than bad products ever did.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['margins', 'risk'],
  keyFacts: [],
  topics: [
    { label: 'Why profit and cash are not the same thing', icon: Banknote },
    { label: 'How profitable companies run out of money', icon: AlertTriangle },
    { label: 'Free cash flow — the number investors trust most', icon: TrendingUp },
    { label: 'Spotting the gap between paper profit and real cash', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: the paradox
    //
    // Why a decide first: the core insight is counterintuitive — a
    // profitable company going bankrupt. Starting with the paradox
    // makes the explanation stick.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Paradox',
      topicIcon: AlertTriangle,
      context:
        'A construction company reports $5M in profit this year. But it\'s about to go bankrupt. Its bank account has $200K. Suppliers are demanding payment. Payroll is due in two weeks.\n\nThe profit is real — the company IS earning more than it spends over time. But the cash isn\'t there right now.',
      question: 'How can a profitable company run out of cash?',
      options: [
        'It can\'t — if a company is profitable, it has enough cash by definition',
        'Profit is recorded when a sale is made, but cash arrives when the customer actually pays. If customers pay late and bills come due now, the company is profitable on paper but broke in reality',
        'The company is lying about its profits',
        'This only happens to badly managed companies and is extremely rare',
      ],
      correctIndex: 1,
      punchline:
        'Profit says "you earned more than you spent." Cash says "you have money in the bank right now." A company can be profitable for the year and still run out of cash this month if the timing doesn\'t line up. This gap has killed more businesses than bad products.',
      wrongNudges: [
        'Profit and cash are measured differently. Profit is accrual-based — it counts revenue when earned, not when collected. A $10M contract signed in December counts as 2024 profit even if the cash arrives in March 2025.',
        '',
        'The profits are real — the accounting is honest. The problem is timing: money owed to the company (by customers) arrives slower than money the company owes (to suppliers and employees).',
        'It happens to well-managed companies constantly. Any business that invoices customers (construction, consulting, manufacturing) deals with this. It\'s structural, not a sign of bad management.',
      ],
      takeaway: 'Profit is an accounting measure. Cash is what\'s in the bank. They diverge because of timing — when revenue is recorded vs. when money actually changes hands.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: profit or cash?
    //
    // Why a drill: the user needs to build instant recognition of
    // what shows up on the income statement vs. what actually moves
    // cash. This distinction is foundational.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Paper vs. Bank Account',
      topicIcon: Zap,
      intro: 'Each event affects profit, cash, or both differently. Which one does it hit first?',
      prompts: [
        {
          setup: 'A consulting firm signs a $500K contract. Work starts next month. No payment yet.',
          left: { label: 'Profit goes up', sublabel: 'sale is recorded' },
          right: { label: 'Cash goes up', sublabel: 'money received' },
          correct: 'left',
          flash: 'Revenue is recognized when earned, not when collected — this is called accrual accounting, recording revenue when it\'s earned, not when cash arrives. Profit increases immediately. Cash? Still zero from this deal.',
        },
        {
          setup: 'A customer pays a $50K invoice that was 60 days overdue.',
          left: { label: 'Profit goes up' },
          right: { label: 'Cash goes up', sublabel: 'money actually arrives' },
          correct: 'right',
          flash: 'The profit was already recorded when the invoice was sent. The cash arrives now — 60 days later. This is the timing gap.',
        },
        {
          setup: 'A company buys a $2M machine that will last 10 years.',
          left: { label: 'Profit drops $2M', sublabel: 'full cost hits immediately' },
          right: { label: 'Cash drops $2M', sublabel: 'paid upfront' },
          correct: 'right',
          flash: 'Cash leaves immediately — $2M gone. But profit only takes a $200K hit per year (the cost is spread over 10 years as "depreciation"). Cash and profit diverge massively.',
        },
        {
          setup: 'A SaaS company collects $12M in annual subscriptions upfront on January 1.',
          left: { label: 'Profit goes up $12M' },
          right: { label: 'Cash goes up $12M', sublabel: 'money in the bank' },
          correct: 'right',
          flash: 'Cash arrives all at once — $12M in the bank. But profit is recognized monthly ($1M/month) over the year. In January: $12M cash but only $1M profit. Cash leads profit by 11 months.',
        },
        {
          setup: 'A retailer reports $3M in "depreciation expense" this quarter.',
          left: { label: 'Cash decreased', sublabel: 'money left the business' },
          right: { label: 'No cash moved', sublabel: 'paper expense only' },
          correct: 'right',
          flash: 'Depreciation reduces profit but zero cash moves. Companies record depreciation because assets lose value over time — spreading the cost across years rather than hitting it all at once. The cash left when the asset was originally purchased. This is the biggest reason profit ≠ cash.',
        },
      ],
      takeaway:
        'Revenue recognition, large purchases, upfront payments, and depreciation all create gaps between profit and cash. Neither number is "wrong" — they measure different things.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: the cash gap
    //
    // Why an estimate: forces the user to calculate how much cash a
    // profitable company actually generates. Makes the divergence
    // concrete.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Real Cash Number',
      topicIcon: Calculator,
      context:
        'A manufacturing company reports:\n\n• Net income (profit): $20M\n• Depreciation (paper cost, no cash): $8M → add back\n• Bought new equipment: −$15M → cash left\n• Customers owe $5M more than last year: −$5M → cash not yet collected\n\nFree Cash Flow = Net Income + Depreciation − Equipment − Change in Receivables',
      question: 'What\'s the actual free cash flow?',
      answer: 8,
      tolerance: 2,
      unit: '$M',
      hint: '$20M + $8M − $15M − $5M',
      reveal:
        '$20M + $8M − $15M − $5M = $8M in free cash flow. The company reported $20M in profit but only generated $8M in real cash. We add back depreciation (a paper cost that reduced profit but didn\'t touch cash), subtract equipment purchases (real cash out that didn\'t hit profit), and subtract growing receivables (profit recorded but cash not yet collected). Free cash flow — not profit — is what investors trust most.',
      takeaway: 'Free cash flow = the actual cash a business generates after everything. It\'s often very different from reported profit. $20M profit → $8M real cash is a common pattern.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the cash flow red flags
    //
    // Why a tap: teaches the user to read a business description and
    // instantly flag cash flow concerns. This is a real analyst skill.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Red Flags',
      topicIcon: Flag,
      intro: 'A fast-growing company is pitching investors. Tap the details that signal cash flow problems.',
      passage: [
        { type: 'text', value: '"RapidBuild Inc. is growing fast. ' },
        {
          type: 'chip',
          value: 'Revenue grew 40% to $100M',
          signal: false,
          feedback: 'Revenue growth is positive. But revenue isn\'t cash — you need to know whether the cash is actually being collected.',
        },
        { type: 'text', value: ' this year. ' },
        {
          type: 'chip',
          value: 'Net income was $15M',
          signal: false,
          feedback: 'Profitable on paper. But you now know profit and cash can be very different. Keep reading.',
        },
        { type: 'text', value: ' However, ' },
        {
          type: 'chip',
          value: 'accounts receivable grew from $10M to $30M',
          signal: true,
          feedback: 'Red flag. $20M more in unpaid invoices means $20M of that revenue hasn\'t been collected as cash. The company is "profitable" but the money hasn\'t arrived.',
        },
        { type: 'text', value: ' as the company extended payment terms to win larger contracts. The company ' },
        {
          type: 'chip',
          value: 'spent $25M on new facilities and equipment',
          signal: true,
          feedback: 'Major cash outflow. $25M in real cash left the business for capital expenditures (capex) — money spent on long-term assets like equipment, buildings, or technology. Combined with the receivables problem, cash flow is deeply negative despite $15M in profit.',
        },
        { type: 'text', value: ' to support growth. Management notes that ' },
        {
          type: 'chip',
          value: 'operating cash flow was negative $5M',
          signal: true,
          feedback: 'Confirmation: $15M in profit but negative $5M in operating cash flow — the cash a business generates from its actual operations, before investments or financing. The company is burning cash while reporting profits. This is how profitable companies go broke.',
        },
        { type: 'text', value: ' this year due to timing. The ' },
        {
          type: 'chip',
          value: 'CEO is optimistic about next year',
          signal: false,
          feedback: 'CEO optimism is not a financial metric. Whether next year improves depends on whether customers actually pay and whether spending slows — not on optimism.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        '$15M profit, negative $5M operating cash flow. The company is profitable on paper but burning cash in reality: $20M stuck in unpaid invoices + $25M spent on expansion. If this continues, it\'ll need to borrow money or raise capital just to survive — while reporting "profit" the whole time.',
      takeaway: 'Growing receivables, heavy capital spending, and negative operating cash flow are the classic warning signs. A company can report profit every quarter and still run out of cash.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: which number do you trust?
    //
    // Why a decide: the final synthesis forces the user to choose
    // between profit and cash flow when they disagree. This is the
    // core judgment skill.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Number That Matters',
      topicIcon: Lightbulb,
      context:
        'Two companies, same industry, same revenue:\n\nCompany A: $30M net income, $10M free cash flow\nCompany B: $18M net income, $25M free cash flow\n\nCompany A reports higher profits. Company B generates more actual cash.',
      question: 'Which company is in a stronger financial position?',
      options: [
        'Company A — higher profits mean a healthier business',
        'Company B — $25M in real cash beats $30M in paper profit because cash pays bills, funds growth, and rewards shareholders',
        'They\'re equal — profit and cash flow are just different ways of measuring the same thing',
        'Need more data — can\'t judge from these numbers alone',
      ],
      correctIndex: 1,
      punchline:
        'Company A\'s $30M profit includes $20M that isn\'t cash yet — tied up in receivables, depreciation timing, or accounting adjustments. Company B\'s $25M is real money it can use to invest, pay dividends, buy back shares, or survive a downturn. Cash is what you can actually spend.',
      wrongNudges: [
        'Higher reported profit doesn\'t mean more money in the bank. If $20M of that profit is uncollected invoices or accounting adjustments, the company is cash-poor despite high earnings.',
        '',
        'You\'ve spent this entire lesson learning they\'re different. Profit includes non-cash items (depreciation), timing differences (receivables), and accounting choices. Cash flow strips all of that away.',
        'These two numbers together tell you a lot. When profit is high but cash flow is low, something is eating the cash — and that\'s a signal worth investigating, not ignoring.',
      ],
      takeaway: 'When profit and cash flow disagree, trust cash flow. Profit can be shaped by accounting choices. Cash flow is what\'s actually in the bank — and what ultimately pays for everything.',
    },
  ],
  takeaways: [
    'Profit is an accounting measure (when revenue is earned). Cash is what\'s in the bank (when money actually moves). They often diverge significantly.',
    'Three things create the gap: timing differences (invoices vs. payment), large purchases (cash leaves now, cost spreads over years), and paper expenses like depreciation (reduce profit but no cash moves).',
    'Free cash flow = the real cash a business generates after everything. It\'s often very different from reported profit.',
    'When profit and cash flow disagree, trust cash flow. Cash pays bills, funds growth, and rewards investors. Profit is just a number on a page.',
    'You know cash beats paper profit. Next: the difference between a stock going down temporarily and losing money permanently.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand the difference that trips up most investors: the gap between reported profit and real cash.',
    great: 'Strong work. Profit vs. cash flow is one of the most important distinctions in investing — and now you get it.',
    good: 'Good foundation. The profit-cash gap shows up in every company analysis. Watch for it in the deep dives.',
    low: 'Worth revisiting. Many investors have lost money trusting profit without checking cash flow. This lesson matters.',
  },
};
