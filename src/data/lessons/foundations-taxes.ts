import { Receipt, Zap, Calculator, Lightbulb, Flag, Scale, Clock } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsTaxesLesson: Lesson = {
  id: 'foundations-taxes',
  emoji: '🧮',
  title: 'Taxes for Investors',
  subtitle: 'The hidden return driver — what you keep matters more than what you earn',
  description:
    "Two investors earn the same 10% returns for 30 years. One ends up with 40% less money. The difference isn't skill or luck — it's taxes. Short-term gains, long-term gains, dividends, tax-advantaged accounts, tax-loss harvesting — these aren't accounting details, they're 1-3% of annual returns over a lifetime. This lesson teaches the tax mechanics that determine whether your portfolio compounds at 7% or 10% — the difference between comfortable and wealthy.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk'],
  keyFacts: [],
  topics: [
    { label: 'Short-term vs. long-term capital gains', icon: Clock },
    { label: 'Tax-advantaged accounts — 401(k), IRA, Roth', icon: Scale },
    { label: 'Tax-loss harvesting — turning losers into tax savings', icon: Receipt },
    { label: 'Why tax drag compounds', icon: Flag },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: short vs. long-term capital gains
    //
    // Why a decide first: holding period is the single most
    // actionable tax decision. Users need to feel the difference.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Holding Period Rule',
      topicIcon: Clock,
      context:
        'You bought a stock for $10,000. It\'s now worth $20,000 — a $10,000 gain. You\'re in the 32% federal tax bracket.\n\nIf you sell NOW (held 11 months):\n• "Short-term" gain — taxed as ordinary income at your marginal rate (32%)\n• Tax owed: $10,000 × 32% = $3,200\n• You keep: $16,800\n\nIf you wait 1 more month (12+ months held):\n• "Long-term" gain — taxed at long-term capital gains rate (15% for most people at this income)\n• Tax owed: $10,000 × 15% = $1,500\n• You keep: $18,500\n\nOne extra month saves you $1,700.',
      question: 'Why does the IRS treat gains held over 12 months so differently?',
      options: [
        'Bureaucratic random chance — the 12-month cutoff is arbitrary',
        'The government wants to reward long-term investing over short-term trading. Long-term capital gains rates (0%, 15%, or 20% depending on income) are much lower than ordinary income rates (10-37%) — a deliberate policy to encourage holding',
        'Short-term trades are taxed higher because they\'re riskier',
        'There\'s no real difference — you just file different forms',
      ],
      correctIndex: 1,
      punchline:
        'The holding-period rule is the single biggest lever retail investors have over their tax bill. Long-term capital gains rates (0%, 15%, or 20%) are half or less of ordinary income rates (up to 37%). Selling at month 11 vs. month 13 can cut your tax in half on the same gain. Before selling a winner, always check: am I past 12 months? If close, the math of waiting is almost always worth it.',
      wrongNudges: [
        'The 12-month line is deliberate policy, not random. It\'s been in US tax law since 1921 with the explicit goal of encouraging long-term capital formation.',
        '',
        'The IRS doesn\'t tax risk — it taxes behavior. Long holding periods aren\'t necessarily safer trades; they\'re just the behavior tax policy wants to encourage.',
        'The difference is real money. On a $10,000 gain at a 32% bracket, the difference is $1,700. On a $100,000 gain, $17,000.',
      ],
      takeaway: 'Gains held 12+ months are taxed at long-term capital gains rates (0-20%). Gains held under 12 months are taxed as ordinary income (10-37%). Before selling a winner, check the holding period — one extra month can cut your tax in half.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: account types
    //
    // Why a drill: knowing which account to use for which money
    // is one of the highest-ROI literacy skills.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Account Types',
      topicIcon: Zap,
      intro: 'Different accounts have different tax treatment. Match each account to its core tax benefit.',
      prompts: [
        {
          setup: 'Traditional 401(k) — you contribute $20,000 of pre-tax salary.',
          left: { label: 'Deduct now', sublabel: 'pay tax on withdrawal' },
          right: { label: 'Pay tax now', sublabel: 'withdraw tax-free' },
          correct: 'left',
          flash: 'Traditional 401(k) contributions are deducted from your taxable income today. The money grows tax-deferred, and you pay ordinary income tax when you withdraw in retirement. Good if you expect a lower tax rate in retirement than you\'re paying now.',
        },
        {
          setup: 'Roth IRA — you contribute $7,000 of after-tax money.',
          left: { label: 'Deduct now' },
          right: { label: 'Pay tax now', sublabel: 'everything after is tax-free' },
          correct: 'right',
          flash: 'Roth contributions are after-tax. But the money grows tax-free AND withdrawals in retirement are tax-free. No taxes on gains or dividends, ever. Best for young investors in low tax brackets and for anyone expecting higher taxes in retirement.',
        },
        {
          setup: 'Regular taxable brokerage account — you buy stocks with already-taxed money.',
          left: { label: 'No tax benefit on contribution', sublabel: 'normal cap gains / dividend tax' },
          right: { label: 'Tax-free forever' },
          correct: 'left',
          flash: 'Taxable brokerage accounts have no tax advantage on contributions. You pay tax on dividends each year and capital gains when you sell. But: full flexibility — no withdrawal penalties, no contribution limits. Long-term gains here still get the 15-20% preferential rate.',
        },
        {
          setup: 'HSA (Health Savings Account) used for investing — eligible if you have a high-deductible health plan.',
          left: { label: 'One tax benefit', sublabel: 'deduct contribution' },
          right: { label: 'Triple tax benefit', sublabel: 'deduct, grow tax-free, withdraw tax-free for health' },
          correct: 'right',
          flash: 'HSAs are the most tax-advantaged account in the US code: contributions deductible, growth tax-free, withdrawals tax-free for qualified medical expenses. After age 65, withdrawals for any reason are taxed like a Traditional IRA. If you qualify, most experts rank HSA contributions above almost every other tax-advantaged account.',
        },
      ],
      takeaway: 'Traditional = deduct now, tax later. Roth = tax now, grow forever tax-free. Taxable = no deduction but full flexibility. HSA = triple tax benefit if you qualify. The account order matters more than which funds you pick inside each.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: compounded tax drag
    //
    // Why an estimate: tax drag feels small year-to-year but
    // compounds massively over decades. Make the user feel it.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cost of Tax Drag',
      topicIcon: Calculator,
      context:
        'Two investors each put $10,000 into the market for 30 years, earning 10% annual returns.\n\nInvestor A (tax-advantaged account — Roth IRA): 10% return compounds untouched for 30 years.\n• Ending balance: $10,000 × 1.10^30 = ~$174,000\n\nInvestor B (taxable account, actively trading — loses ~2% per year to short-term capital gains taxes): nets 8% after taxes.\n• Ending balance: $10,000 × 1.08^30 = ~$100,600\n\nSame starting money. Same market returns. Same 30 years.',
      question: 'How much extra wealth does the tax-advantaged investor end up with (in dollars)?',
      answer: 73000,
      tolerance: 8000,
      unit: '$',
      hint: '$174,000 − $100,600',
      reveal:
        '$73,400 more — 73% additional wealth on the same $10,000 starting investment. The 2% annual tax drag seems small year-to-year, but over 30 years it costs you nearly double the ending value. This is why tax efficiency compounds: every dollar paid in tax today is a dollar that can\'t compound for 30 years. The fund with the 0.5% lower expense ratio gets all the headlines, but tax drag of 1-2% annually is far more destructive — and entirely avoidable.',
      takeaway: 'Tax drag compounds. Losing 2% a year to taxes for 30 years costs you about half your ending wealth vs. tax-free compounding. Pick accounts and strategies that minimize tax drag — it\'s the highest-return decision most investors can make.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: tax-loss harvesting
    //
    // Why a tap: TLH is the most actionable advanced tactic.
    // Signal-finding cements what qualifies vs. what doesn't.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Tax-Loss Harvesting',
      topicIcon: Receipt,
      intro: 'December 15. You review your taxable account for tax-loss harvesting opportunities. Tap the positions that are good candidates.',
      passage: [
        { type: 'text', value: 'Your taxable account: ' },
        {
          type: 'chip',
          value: 'Stock A — bought 14 months ago at $100, now $60. Down $4,000',
          signal: true,
          feedback: 'Classic tax-loss harvesting candidate. Sell to realize the $4,000 loss. You can deduct up to $3,000 against ordinary income this year; any excess carries forward to future years. Buy a similar-but-not-identical fund to maintain market exposure without triggering the "wash sale rule" (which disallows the loss if you rebuy the same security within 30 days).',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Stock B — bought 11 years ago at $5, now $200. Up $19,500',
          signal: false,
          feedback: 'Not a tax-loss candidate — it\'s a massive gain. Selling realizes a $19,500 long-term capital gain and creates a tax bill. You\'d only sell this for reasons unrelated to tax-loss harvesting (rebalancing, the thesis changed, etc.).',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Stock C — bought 3 months ago at $80, now $55. Down $2,500',
          signal: true,
          feedback: 'Good short-term loss candidate. Short-term losses first offset short-term gains (taxed at higher rates), which is especially valuable. Wash sale rule still applies — wait 31 days before rebuying the same stock, or buy a similar-but-not-identical alternative immediately.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'An index fund in your 401(k) — down $6,000',
          signal: false,
          feedback: 'Tax-loss harvesting doesn\'t apply to retirement accounts. 401(k) and IRA losses can\'t be harvested because gains/losses in these accounts aren\'t taxed in the first place. Only taxable accounts benefit from TLH.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Stock D — bought 5 weeks ago at $50, now $40. Down $1,000. You still believe in the company',
          signal: true,
          feedback: 'Yes, harvest the loss — then buy back 31+ days later. You realize the $1,000 loss for taxes while maintaining your thesis (the 31-day gap is the cost of the tactic). Alternatively, immediately swap into a similar-but-not-identical position (e.g., a competitor or a broad sector ETF) to stay invested.',
        },
        { type: 'text', value: '.' },
      ],
      requiredSignals: 3,
      reveal:
        'Tax-loss harvesting works on three of these: Stock A (long-term loss), Stock C (short-term loss), and Stock D (recent loss, thesis intact). Stock B is a gain, not a loss. The 401(k) position doesn\'t qualify because retirement accounts don\'t tax gains/losses. The key rules: harvest losses to offset gains, deduct up to $3,000 against ordinary income, and avoid the 30-day wash sale window by buying a substitute or waiting.',
      takeaway: 'Tax-loss harvesting turns paper losses into real tax savings. Rules: only in taxable accounts, only on losing positions, and avoid buying the same security within 30 days (wash sale rule). Done annually, this adds ~0.5-1% to after-tax returns.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: account prioritization
    //
    // Why a decide: brings it all together — given limited savings
    // capacity, WHERE should the money go first?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Savings Order',
      topicIcon: Lightbulb,
      context:
        'You\'re 32 and can save $25,000 per year. You have:\n• A 401(k) at work with a 5% employer match (match maxes at your first $5,000 contributed)\n• A high-deductible health plan with an HSA option\n• Access to a Roth IRA ($7,000 annual limit for your income)\n• A regular taxable brokerage account (no limits)\n\nYou can split the $25,000 across any of these.',
      question: 'What\'s the most tax-efficient order to fill these accounts?',
      options: [
        'Max the taxable brokerage first — you get flexibility',
        'Split evenly across all four accounts',
        '401(k) up to the employer match first (free money), then HSA (triple tax advantage), then Roth IRA (tax-free forever), then rest of 401(k), and only then taxable brokerage',
        'Max the 401(k) entirely before touching anything else',
      ],
      correctIndex: 2,
      punchline:
        'The order matters. (1) Employer match is 100% instant return — never leave it on the table. (2) HSA is the only triple-tax-advantaged account if you qualify. (3) Roth IRA is tax-free growth for life. (4) Remaining 401(k) gets the deduction. (5) Taxable brokerage is last — only after every tax-advantaged space is filled. This order is worth tens of thousands of dollars per year of wasted tax savings for most high-earners, and the framework doesn\'t change with markets.',
      wrongNudges: [
        'Flexibility isn\'t worth the tax drag. The "penalties" on early withdrawal from retirement accounts are almost always smaller than decades of tax savings, and most people never actually need early access.',
        'Equal allocation wastes the tax hierarchy. You\'d leave employer match on the table while contributing to a taxable account that has no tax benefit.',
        '',
        'Skipping the employer match to max the 401(k) is still worse than getting the match. Maxing without first capturing match is fine for high earners, but capturing match should always be step one.',
      ],
      takeaway: 'The right savings order: employer match → HSA → Roth IRA → rest of 401(k) → taxable. This is one of the most valuable frameworks in personal finance — it\'s static, it\'s knowable, and most people ignore it.',
    },
  ],
  takeaways: [
    'Hold winners 12+ months to qualify for long-term capital gains rates (0-20%) instead of ordinary income rates (10-37%). This single decision often cuts your tax bill in half.',
    'Account type matters as much as investment choice. Traditional = deduct now. Roth = tax-free forever. HSA = triple tax advantage. Taxable = full flexibility but no tax shelter.',
    'Tax drag compounds. Losing 2% a year to taxes costs you ~50% of your ending wealth over 30 years. Tax efficiency is often the highest-return decision in investing.',
    'Tax-loss harvesting turns losing positions into real tax savings — worth ~0.5-1% per year in after-tax return in taxable accounts. Only in taxable accounts, only on losses, and avoid wash sales.',
    'Priority order: employer match → HSA → Roth IRA → rest of 401(k) → taxable. Static framework, works in every market environment.',
  ],
  completionMessages: {
    perfect: 'Elite. Most financial advisors earn their fee by doing just what you now know — and you can do it yourself.',
    great: 'Strong. Taxes quietly drive more of your lifetime return than stock picking. You\'ve internalized the mechanics that compound for decades.',
    good: 'Solid. The account-order framework alone — if you act on it — will save you tens of thousands over a career.',
    low: 'Worth revisiting. Taxes are the highest-ROI topic in personal finance. Five more minutes here is worth five years of stock research for most investors.',
  },
};
