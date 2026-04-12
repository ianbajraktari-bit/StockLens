import { Landmark, AlertTriangle, TrendingUp, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsDebtLesson: Lesson = {
  id: 'foundations-debt',
  emoji: '🏦',
  title: 'Debt: Fuel or Fire?',
  subtitle: 'When borrowing makes a business stronger — and when it kills one',
  description:
    "Debt isn't inherently good or bad. Apple borrows billions despite having $60B in cash. A restaurant chain borrows to expand and goes bankrupt. The difference isn't the debt — it's whether the business can earn more from the borrowed money than it costs. This lesson teaches you to read a balance sheet and judge whether a company's debt is fuel for growth or a ticking time bomb.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk', 'margins'],
  keyFacts: [],
  topics: [
    { label: 'How debt works for businesses — and when it backfires', icon: Landmark },
    { label: 'The balance sheet: what a company owns vs. owes', icon: AlertTriangle },
    { label: 'Debt-to-equity and interest coverage — the two ratios that matter', icon: TrendingUp },
    { label: 'Spotting dangerous debt before it becomes a crisis', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: when is debt smart?
    //
    // Why a decide first: reframes debt from "always bad" to
    // "depends on context." The core insight.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Debt Paradox',
      topicIcon: Landmark,
      context:
        'Two restaurant owners each borrow $500K:\n\nOwner A borrows at 5% interest ($25K/year) to open a second location. The new restaurant generates $150K/year in profit. Return on borrowed money: 30%. Cost of debt: 5%.\n\nOwner B borrows at 8% interest ($40K/year) to renovate a struggling location. Revenue doesn\'t improve. The $40K interest payment eats into already thin margins.\n\nSame amount borrowed. Completely different outcomes.',
      question: 'What determines whether debt helps or hurts a business?',
      options: [
        'The interest rate — lower is always better',
        'The amount — less debt is always safer',
        'Whether the business earns a higher return on the borrowed money than the interest it pays. Owner A earns 30% on money that costs 5% — debt creates value. Owner B earns 0% on money that costs 8% — debt destroys value',
        'Debt is always risky — businesses should avoid borrowing entirely',
      ],
      correctIndex: 2,
      punchline:
        'Debt is a tool that amplifies outcomes. If the business earns more than the interest rate, debt creates value (Owner A: 30% return vs. 5% cost). If it doesn\'t, debt destroys value (Owner B: 0% return vs. 8% cost). The question is never "should a company borrow?" — it\'s "can it earn more than the cost of borrowing?"',
      wrongNudges: [
        'A low interest rate on unproductive debt is still bad. Owner B at 3% interest would still be borrowing for zero return. The rate matters, but only relative to what the money earns.',
        'Apple has $100B+ in debt and is one of the safest companies in the world. The amount of debt matters far less than whether the business can service it and earn a return above the cost.',
        '',
        'Many of the world\'s most successful companies use debt strategically. Apple borrows billions despite having cash because the interest cost is below its return on capital. Avoiding all debt means leaving value on the table.',
      ],
      takeaway: 'Debt creates value when the return exceeds the cost, and destroys value when it doesn\'t. Smart investors ask: "What return is this debt generating?" not "How much debt does the company have?"',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: balance sheet basics
    //
    // Why a drill: the user needs to quickly classify items as
    // assets, liabilities, or equity. Foundational vocabulary.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Balance Sheet',
      topicIcon: Zap,
      intro: 'A balance sheet shows what a company owns (assets) vs. what it owes (liabilities). Classify each item.',
      prompts: [
        {
          setup: '$50M cash in the bank',
          left: { label: 'Asset', sublabel: 'company owns it' },
          right: { label: 'Liability', sublabel: 'company owes it' },
          correct: 'left',
          flash: 'Cash is the most liquid asset. It\'s money the company owns and can use immediately. The more cash relative to debt, the safer the company.',
        },
        {
          setup: '$200M in long-term bank loans due in 5 years',
          left: { label: 'Asset' },
          right: { label: 'Liability', sublabel: 'must be repaid' },
          correct: 'right',
          flash: 'Loans are liabilities — money the company owes to lenders. Long-term debt (due in 1+ years) is less urgent than short-term, but it still must be repaid or refinanced.',
        },
        {
          setup: 'A factory worth $80M that the company owns',
          left: { label: 'Asset', sublabel: 'has value' },
          right: { label: 'Liability' },
          correct: 'left',
          flash: 'Physical property is a tangible asset. It has value that could theoretically be sold. Though unlike cash, you can\'t spend a factory — assets vary in how "liquid" (easily convertible to cash) they are.',
        },
        {
          setup: '$30M in customer deposits collected but not yet earned',
          left: { label: 'Asset' },
          right: { label: 'Liability', sublabel: 'owed to customers' },
          correct: 'right',
          flash: 'Customer deposits are liabilities — the company has the cash but owes the service. If the company fails to deliver, it must return the money. This is called "deferred revenue."',
        },
        {
          setup: '$15M in accounts receivable — money customers owe the company',
          left: { label: 'Asset', sublabel: 'money coming in' },
          right: { label: 'Liability' },
          correct: 'left',
          flash: 'Receivables are assets — money owed TO the company. It\'s not cash yet, but it\'s a legal claim. The risk: if customers don\'t pay, the asset becomes worthless.',
        },
        {
          setup: '$100M in bonds the company must repay in 10 years',
          left: { label: 'Asset' },
          right: { label: 'Liability', sublabel: 'debt obligation' },
          correct: 'right',
          flash: 'Bonds are loans from investors to the company. The company must pay interest annually and return the principal in 10 years. Long-term debt like this is the biggest liability on most balance sheets.',
        },
      ],
      takeaway: 'Assets are what a company owns (cash, property, receivables). Liabilities are what it owes (loans, bonds, deposits). The difference — assets minus liabilities — is equity: what the owners actually have.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: debt-to-equity ratio
    //
    // Why an estimate: makes the balance sheet concrete by
    // calculating the most important debt metric.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Debt-to-Equity',
      topicIcon: Calculator,
      context:
        'Two companies in the same industry:\n\nCompany A:\n• Total assets: $500M\n• Total liabilities (debt): $150M\n• Equity (assets − liabilities): $350M\n• Debt-to-equity ratio: $150M ÷ $350M = 0.43x\n\nCompany B:\n• Total assets: $500M\n• Total liabilities (debt): $400M\n• Equity (assets − liabilities): $100M\n\nDebt-to-equity = Total debt ÷ Equity.',
      question: 'What is Company B\'s debt-to-equity ratio?',
      answer: 4,
      tolerance: 0.3,
      unit: 'x',
      hint: '$400M ÷ $100M',
      reveal:
        '$400M ÷ $100M = 4.0x debt-to-equity. Company A has $0.43 of debt for every $1 of equity. Company B has $4 of debt for every $1 of equity — nearly 10x more leveraged. If either company\'s assets drop 20% ($100M), Company A still has $250M in equity. Company B has zero — it\'s wiped out. This is why leverage magnifies both returns and risk.',
      takeaway: 'Debt-to-equity shows how leveraged a company is. Under 1x is conservative. Over 2x deserves scrutiny. Over 4x is highly leveraged — a small downturn can wipe out equity entirely.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the debt red flags
    //
    // Why a tap: teaches the user to read a company description
    // and instantly flag dangerous debt situations.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Debt Red Flags',
      topicIcon: Flag,
      intro: 'A company is asking banks for a loan extension. Tap the details that signal dangerous debt.',
      passage: [
        { type: 'text', value: '"GrowthCo Inc. needs to refinance $500M in debt coming due next year. The company ' },
        {
          type: 'chip',
          value: 'has $2B in annual revenue, growing 12%',
          signal: false,
          feedback: 'Revenue growth is healthy. Growing revenue means the company has earning power to potentially service its debt. Not a red flag on its own.',
        },
        { type: 'text', value: '. However, ' },
        {
          type: 'chip',
          value: 'operating income is $80M — and annual interest payments are $75M',
          signal: true,
          feedback: 'Critical red flag. Interest coverage ratio = $80M ÷ $75M = 1.07x. The company barely earns enough to cover interest payments. Any dip in earnings means it can\'t pay its lenders. Healthy companies have 3x+ interest coverage.',
        },
        { type: 'text', value: '. The company ' },
        {
          type: 'chip',
          value: 'has $50M in cash on hand',
          signal: true,
          feedback: 'Red flag in context. $50M in cash vs. $500M in debt coming due. The company has only 10% of what it needs to repay. It\'s entirely dependent on banks agreeing to refinance — if they don\'t, it defaults.',
        },
        { type: 'text', value: '. Management notes that ' },
        {
          type: 'chip',
          value: 'they plan to use new debt to pay off the old debt',
          signal: true,
          feedback: 'Refinancing risk. Using new debt to pay old debt only works if lenders are willing. If credit markets tighten or the company\'s credit rating drops, refinancing becomes expensive or impossible. This is how companies go from "managing debt" to bankruptcy.',
        },
        { type: 'text', value: '. On the positive side, ' },
        {
          type: 'chip',
          value: 'the company owns $1.5B in real estate and equipment',
          signal: false,
          feedback: 'Real assets provide some safety — lenders can recover money by selling these if the company defaults. This is why asset-heavy companies often survive debt crises better than asset-light ones.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Three lethal signals: (1) Interest coverage of barely 1x — the company is one bad quarter from missing payments. (2) Only $50M cash against $500M due — entirely dependent on refinancing. (3) Using new debt to pay old debt — a cycle that breaks the moment lenders lose confidence. The $1.5B in assets helps, but this company is walking a tightrope.',
      takeaway: 'The three debt red flags: interest coverage below 2x (can\'t comfortably pay interest), cash far below short-term debt (dependent on refinancing), and using new debt to repay old debt (a fragile cycle that breaks in downturns).',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: Apple's debt paradox
    //
    // Why a decide: applies everything to a real, counterintuitive
    // example — Apple borrowing despite having massive cash.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Smart Debt in Action',
      topicIcon: Lightbulb,
      context:
        'Apple has ~$60B in cash and ~$100B in debt. Why would a company with $60B in cash borrow $100B?\n\nHere\'s the math:\n• Apple\'s return on invested capital: ~50% (every dollar in the business generates $0.50/year)\n• Apple\'s borrowing cost: ~3% interest\n• Tax benefit: interest payments reduce taxable income\n\nApple earns 50% on capital. Borrowing costs 3%. The spread is 47 percentage points.',
      question: 'Why does Apple borrow despite having $60B in cash?',
      options: [
        'Apple can\'t afford its operations without borrowing — $60B isn\'t enough',
        'Every dollar Apple borrows at 3% can earn 50% in the business — borrowing at 3% to earn 50% creates massive value. Plus, interest payments reduce Apple\'s tax bill',
        'Apple borrows to look more leveraged, which impresses investors',
        'It\'s a mistake — Apple should pay off all debt with its cash',
      ],
      correctIndex: 1,
      punchline:
        'When you earn 50% on capital and can borrow at 3%, debt is a value-creation machine. Every borrowed dollar generates $0.47 in net return. This is why the best companies in the world carry debt — not because they need to, but because the math is overwhelmingly favorable.',
      wrongNudges: [
        'Apple generates ~$100B in operating cash flow per year. It absolutely doesn\'t need to borrow. The debt is strategic, not necessary.',
        '',
        'Leverage for appearance makes no sense. Apple borrows because the math works: 50% return minus 3% cost = 47% value creation on every borrowed dollar.',
        'Paying off 3% debt with cash that earns 50% would destroy value. You\'d be giving up $0.47 of return for every dollar of debt you repay. The financially rational move is to keep the cheap debt.',
      ],
      takeaway: 'Debt is smart when the return on capital far exceeds the borrowing cost. Apple borrows at 3% and earns 50% — that spread creates billions in value. This is why "debt-free" isn\'t always better than "strategically leveraged."',
    },
  ],
  takeaways: [
    'Debt is a tool, not a verdict. It creates value when return on capital exceeds borrowing cost, and destroys value when it doesn\'t.',
    'The balance sheet shows what a company owns (assets) vs. owes (liabilities). Equity = assets minus liabilities — it\'s what owners actually have.',
    'Two ratios matter most: debt-to-equity (how leveraged is the company?) and interest coverage (can it afford its debt payments?). Under 1x D/E is conservative; under 2x interest coverage is dangerous.',
    'Debt red flags: interest coverage barely above 1x, cash far below short-term debt, and using new debt to repay old debt. These signal a company on the edge.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand debt the way CFOs do — as a tool with a specific cost, a measurable return, and clear warning signs when misused.',
    great: 'Strong work. Most investors either fear all debt or ignore it entirely. You can now evaluate whether debt is helping or hurting a specific company.',
    good: 'Good foundation. The debt-to-equity and interest coverage frameworks will come up in every company analysis you do.',
    low: 'Worth revisiting. Debt is one of the most common ways companies get into trouble — and one of the most common ways they create value. Understanding the difference is essential.',
  },
};
