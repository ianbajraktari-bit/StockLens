import { FileText, BarChart3, DollarSign, Layers } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsStatementsLesson: Lesson = {
  id: 'foundations-statements',
  emoji: '📑',
  title: 'Reading Real Numbers',
  subtitle:
    'Walk through a real income statement, balance sheet, and cash flow statement',
  description:
    'You know what financial statements ARE. Now walk through one. This lesson uses a fictional SaaS company called CloudCo to practice reading a real income statement, balance sheet, and cash flow statement — line by line, number by number. By the end, you\'ll know how to connect all three into a single story.',
  estimatedMinutes: 3,
  dataAsOf: '',
  keyFacts: [],
  tier: 'foundations-2',
  skills: ['margins', 'business_drivers'],
  topics: [
    { label: 'Reading an income statement line by line', icon: FileText },
    { label: 'The margin gap: gross vs. operating', icon: BarChart3 },
    { label: 'Balance sheet signals: cash, debt, and deferred revenue', icon: DollarSign },
    { label: 'Connecting all three statements into one story', icon: Layers },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Tap: The Income Statement
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Income Statement',
      topicIcon: FileText,
      intro:
        'Here\'s CloudCo\'s simplified income statement. Tap the line items an investor should check FIRST to understand the business.',
      passage: [
        { type: 'text', value: 'CloudCo Inc. — Income Statement (FY 2025)\n\n' },
        {
          type: 'chip',
          value: 'Revenue: $400M',
          signal: true,
          feedback:
            'Always start here. Revenue is the top line — total money coming in before any costs. It tells you the scale of the business and, compared to prior years, whether it\'s growing.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Cost of Revenue: $80M',
          signal: false,
          feedback:
            'Cost of revenue matters, but on its own it\'s just a raw number. What you really want is the result: gross profit and gross margin. That\'s the line that tells you how efficient the product is.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Gross Profit: $320M (80% margin)',
          signal: true,
          feedback:
            'This is product efficiency. 80% gross margin means for every $1 of revenue, $0.80 survives the cost of delivering the product. For a SaaS company, 80% is excellent — it means the product is cheap to run relative to what customers pay.',
        },
        { type: 'text', value: '\n\nOperating Expenses:\n  R&D: $120M\n  Sales & Marketing: $100M\n  G&A: $40M\n\n' },
        {
          type: 'chip',
          value: 'Operating Income: $60M (15% margin)',
          signal: true,
          feedback:
            'This is what the business keeps after ALL costs of running it — product delivery, R&D, sales, marketing, and overhead. 15% operating margin means CloudCo keeps $0.15 of every revenue dollar. The gap between 80% gross and 15% operating tells a story.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Interest Expense: $10M',
          signal: false,
          feedback:
            'Interest expense tells you the company carries debt, but it\'s not a first check. Focus on gross and operating margins first, then investigate debt on the balance sheet.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Net Income: $45M',
          signal: false,
          feedback:
            'Net income is the bottom line, but it includes interest, taxes, and one-time items that can distort the picture. Operating income is a cleaner measure of core business performance.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Read an income statement top to bottom: Revenue (scale and growth) → Gross margin (product efficiency) → Operating margin (what the business keeps). The gap between gross and operating margin reveals how much the company spends to run itself. Net income matters, but operating income tells you more about the actual business.',
      takeaway:
        'Three lines matter most on an income statement: revenue (top line), gross margin (product efficiency), and operating margin (business efficiency). Read top to bottom — each layer peels back more of the cost structure.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Gross vs Operating
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Margin Gap',
      topicIcon: BarChart3,
      context:
        'CloudCo\'s gross profit is $320M (80% gross margin). But operating income is only $60M (15% operating margin). The difference between gross profit and operating income is operating expenses — the cost of R&D, sales, marketing, and general overhead.',
      question:
        'How much did operating expenses eat from CloudCo\'s gross profit (in $M)?',
      answer: 260,
      tolerance: 15,
      unit: '$M',
      hint: 'Gross Profit − Operating Income',
      reveal:
        '$320M gross profit − $60M operating income = $260M in operating expenses. That\'s 65% of total revenue going to running the company. The 80% gross margin LOOKS amazing, but the real story is the 15% operating margin. The gap tells you where all the money goes.',
      takeaway:
        'Gross margin is the headline. Operating margin is the truth. The gap between them reveals how much it costs to actually run the business — and whether that spending is investment or waste.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: What the Gap Tells You
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Reading the Gap',
      topicIcon: BarChart3,
      context:
        'CloudCo has 80% gross margin but only 15% operating margin. That\'s a 65-point gap. R&D spending is $120M and Sales & Marketing is $100M — together $220M, or 55% of revenue. CloudCo is also growing revenue at 30% year-over-year.',
      question:
        'What does the 65-point gap between gross and operating margin tell you about CloudCo?',
      options: [
        'CloudCo is wasteful — spending too much on overhead',
        'CloudCo is investing heavily in growth — $220M in R&D and sales is a bet on future revenue',
        'CloudCo is a bad business — it can\'t turn revenue into profit',
        'Impossible to tell without years of historical data',
      ],
      correctIndex: 1,
      punchline:
        'A 65-point gap between gross and operating margin isn\'t waste if the company is growing 30%+. It\'s investment. The question is whether that spending produces returns — look at revenue growth rate to judge. If growth sustains, operating margin will expand as revenue outgrows fixed costs.',
      wrongNudges: [
        'It might look wasteful, but $220M in R&D and sales at a company growing 30% isn\'t overhead — it\'s fuel. The real test is whether revenue growth justifies the spend.',
        '',
        'An 80% gross margin is the sign of an excellent product. The low operating margin is a choice to invest in growth, not a defect in the business model.',
        'Historical data helps, but you can already see the story: high-margin product, heavy growth investment, 30% revenue growth. That\'s a recognizable pattern — a growth-stage SaaS company.',
      ],
      takeaway:
        'A wide margin gap isn\'t automatically bad. If a company is growing fast, heavy spending on R&D and sales is investment, not waste. Judge the gap by asking: is the growth spending producing results?',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: The Balance Sheet
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Balance Sheet',
      topicIcon: DollarSign,
      intro:
        'Here\'s CloudCo\'s simplified balance sheet. Tap the items that tell you the most about the company\'s financial health and future.',
      passage: [
        { type: 'text', value: 'CloudCo Inc. — Balance Sheet (FY 2025)\n\nAssets:\n' },
        {
          type: 'chip',
          value: 'Cash & Equivalents: $200M',
          signal: true,
          feedback:
            'Cash is the war chest. $200M in cash means CloudCo has significant reserves to fund operations, invest in growth, or weather a downturn. Always compare cash to debt to understand the net position.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Accounts Receivable: $80M',
          signal: true,
          feedback:
            'Receivables are money customers owe but haven\'t paid yet. $80M is 20% of revenue — if this is growing faster than revenue, it could signal collection problems. Customers are buying but not paying on time.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Property & Equipment: $30M',
          signal: false,
          feedback:
            'For a SaaS company, $30M in physical assets is small — most of the value is in software and people, not buildings. Not a key signal for this type of business.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Goodwill: $50M',
          signal: false,
          feedback:
            'Goodwill means CloudCo acquired another company and paid more than the book value of its assets. Worth noting, but not a first check. It becomes a red flag only when goodwill is a huge portion of total assets.',
        },
        { type: 'text', value: '\n\nLiabilities:\n' },
        {
          type: 'chip',
          value: 'Total Debt: $150M',
          signal: true,
          feedback:
            'With $200M in cash and $150M in debt, CloudCo is net-cash positive ($50M). That\'s a healthy position — the company could pay off all its debt tomorrow and still have $50M left. Always compare debt to cash.',
        },
        { type: 'text', value: '\n' },
        {
          type: 'chip',
          value: 'Deferred Revenue: $120M',
          signal: true,
          feedback:
            'Deferred revenue is money customers have already paid for services CloudCo hasn\'t delivered yet. $120M in prepayments is a bullish signal — it means customers are committed and CloudCo has guaranteed future revenue. For SaaS, this is one of the most important balance sheet items.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'On a balance sheet, focus on: Cash vs. Debt (financial strength and flexibility), Accounts Receivable trends (are customers actually paying?), and Deferred Revenue (are customers prepaying — a sign of sticky demand?). Property and goodwill matter less for asset-light businesses like SaaS.',
      takeaway:
        'The balance sheet shows financial health at a glance: cash vs. debt tells you strength, receivables tell you collection risk, and deferred revenue tells you customer commitment. Compare items to each other, not in isolation.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: The Quick Ratio
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Liquidity Check',
      topicIcon: DollarSign,
      context:
        'The quick ratio measures whether a company can pay its short-term bills with liquid assets (cash + receivables). It\'s a simple survival test.\n\nCloudCo\'s liquid assets: Cash $200M + Accounts Receivable $80M = $280M.\nCloudCo\'s current liabilities: $140M.',
      question: 'What is CloudCo\'s quick ratio?',
      answer: 2,
      tolerance: 0.3,
      unit: 'x',
      hint: 'Liquid assets ÷ Current liabilities',
      reveal:
        'A quick ratio of 2.0 means CloudCo can cover its short-term obligations twice over with liquid assets alone. Above 1.0 is healthy — the company can pay its bills. Below 1.0 means the company might struggle to meet short-term obligations. CloudCo is in a strong position.',
      takeaway:
        'The quick ratio is a fast survival check: liquid assets divided by current liabilities. Above 1.0 = healthy. Below 1.0 = potential trouble. It takes 10 seconds to calculate and tells you if the company can pay its bills.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: Cash Flow vs Profit
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Cash vs. Profit',
      topicIcon: Layers,
      context:
        'CloudCo reports $45M in net income but $90M in free cash flow. The company\'s cash flow statement shows $90M in cash generated — double its reported profit. How is that possible?',
      question:
        'Why does CloudCo generate $90M in free cash flow when net income is only $45M?',
      options: [
        'There\'s an accounting error — cash flow can\'t exceed net income',
        'Depreciation and stock-based comp added back cash that didn\'t leave the building, plus deferred revenue brought in cash before revenue was recognized',
        'CloudCo sold assets to inflate its cash flow number',
        'Free cash flow is always higher than net income for every company',
      ],
      correctIndex: 1,
      punchline:
        'SaaS companies often generate MORE cash than profit because customers pay upfront (deferred revenue) and major "expenses" like stock-based compensation and depreciation don\'t require cash. The cash flow statement reconciles these differences — it starts with net income and adds back non-cash charges.',
      wrongNudges: [
        'It\'s not an error — it\'s very common. Many healthy companies generate more cash than their income statement shows, because some "expenses" don\'t involve actual cash leaving the company.',
        '',
        'Asset sales show up as a separate line item on the cash flow statement (investing activities). Investors spot this immediately. CloudCo\'s cash flow is from operations, not asset sales.',
        'Not true. Some companies generate less cash than profit — especially those with heavy capital expenditures or growing receivables. The relationship depends on the business model.',
      ],
      takeaway:
        'Cash flow and profit diverge because some expenses (depreciation, stock comp) don\'t use cash, and some cash (deferred revenue) arrives before it\'s recognized as revenue. The cash flow statement bridges the gap between accounting profit and real cash.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: The 3-Statement Verdict
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Connecting All Three',
      topicIcon: Layers,
      context:
        'Here\'s CloudCo\'s full picture from all three financial statements:\n\n• Income Statement: 80% gross margin, 15% operating margin, 30% revenue growth\n• Balance Sheet: $200M cash, $150M debt, $120M deferred revenue\n• Cash Flow: $90M free cash flow on $45M net income',
      question:
        'Looking at all three statements together, what\'s the single most important follow-up question?',
      options: [
        'Is 30% growth sustainable — because the entire investment thesis depends on whether $220M in opex is producing compounding returns',
        'Will CloudCo start paying a dividend soon?',
        'Why is goodwill $50M on the balance sheet?',
        'Can CloudCo cut costs to improve operating margins faster?',
      ],
      correctIndex: 0,
      punchline:
        'The statements tell you CloudCo is a high-gross-margin, heavy-investment business generating real cash. The one question that matters: is the growth spending working? If growth sustains, the operating margin will expand naturally as revenue outgrows fixed costs.',
      wrongNudges: [
        '',
        'A company growing 30% with $220M in R&D and sales spend shouldn\'t be paying dividends — that cash is better reinvested in growth. Dividends are for mature, slow-growth businesses.',
        'Goodwill at $50M is a small detail on a balance sheet with $200M in cash. It\'s worth investigating eventually, but it\'s not the question that determines whether CloudCo is a good investment.',
        'Cutting costs would improve margins in the short term but could kill growth. For a company growing 30%, the R&D and sales spend IS the strategy. The question is whether that strategy is working, not whether to abandon it.',
      ],
      takeaway:
        'The three statements tell one story: product quality (gross margin), investment intensity (opex gap), financial health (balance sheet), and cash reality (cash flow). The follow-up question should address the thesis — is the growth strategy working?',
    },
  ],
  takeaways: [
    'Read an income statement top to bottom: revenue → gross margin → operating margin. Each layer reveals more about where the money goes.',
    'The gap between gross and operating margin shows how much it costs to run the business. A wide gap during fast growth is investment, not waste.',
    'On the balance sheet, check cash vs. debt, receivables growth, and deferred revenue. These three items tell you financial health, collection risk, and customer commitment.',
    'Cash flow and profit diverge because of non-cash expenses and timing differences. The cash flow statement bridges accounting profit and real cash — always check both.',
  ],
  completionMessages: {
    perfect:
      'Perfect score. You can now walk through real financial statements and connect them into a single investment story.',
    great:
      'Strong work. You understand how to read the numbers that matter across all three financial statements.',
    good:
      'Good foundation. Try pulling up a real company\'s earnings — the patterns you practiced here will look familiar.',
    low:
      'Financial statements take practice. Review the three-statement framework and try again — the connections will click.',
  },
};
