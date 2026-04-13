import { FileText, Search, TrendingUp, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsEarningsLesson: Lesson = {
  id: 'foundations-earnings',
  emoji: '📋',
  title: 'Reading an Earnings Report',
  subtitle: 'How to find the numbers that actually matter — in 10 minutes, not 10 hours',
  description:
    "Companies publish earnings reports every quarter. They\'re 50+ pages of tables, footnotes, and legal language. Most investors skip them — and that\'s a mistake. But you don\'t need to read every page. This lesson teaches you exactly where to look, what matters, and what to ignore.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['margins', 'business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'The three financial statements and what each tells you', icon: FileText },
    { label: 'Where to find earnings data (it\'s free and public)', icon: Search },
    { label: 'The 5 numbers to check first in any earnings report', icon: TrendingUp },
    { label: 'Reading management commentary like a skeptic', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: what are earnings reports?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What You\'re Reading',
      topicIcon: FileText,
      context:
        'Every public company must report its financial results every quarter (every 3 months). These reports are filed with the SEC (Securities and Exchange Commission) and are free for anyone to read.\n\nThe key documents:\n• 10-Q: Quarterly report (3 months of data)\n• 10-K: Annual report (full year, more detailed)\n• Earnings press release: A summary the company writes on earnings day\n• Earnings call transcript: The CEO and CFO answer analyst questions live\n\nAll of these are available free on the SEC\'s website (EDGAR) or the company\'s investor relations page.',
      question: 'Which document should you start with when analyzing a company\'s quarter?',
      options: [
        'The 10-Q — it\'s the most official document filed with regulators',
        'The earnings press release — it\'s a 2-3 page summary with the key numbers, guidance, and management highlights. Start here, then dig deeper into the 10-Q if something needs investigation',
        'The earnings call transcript — hearing the CEO speak tells you everything',
        'News articles about the earnings — journalists summarize the important parts',
      ],
      correctIndex: 1,
      punchline:
        'The earnings press release is your entry point — 2-3 pages with revenue, profit, EPS, guidance, and key metrics. It\'s what moves the stock on earnings day. You can find it on any company\'s investor relations page (usually [company].com/investors) or by searching "[company name] earnings press release" on Google. The 10-Q has the detail for deeper analysis. The earnings call reveals management\'s tone and priorities. News articles are someone else\'s interpretation — always go to the source.',
      wrongNudges: [
        'The 10-Q is important but it\'s 50-100 pages of accounting detail. Starting there is like reading a dictionary to learn a language. Begin with the press release, then use the 10-Q for specific questions.',
        '',
        'Earnings calls are valuable — but they\'re 60-90 minutes of scripted remarks and Q&A. Start with the numbers in the press release, then listen to the call for context on WHY the numbers look the way they do.',
        'News articles add interpretation, bias, and sometimes errors. They\'re useful as a second opinion, but never as your primary source. Always read the actual numbers yourself first.',
      ],
      takeaway: 'Start with the earnings press release (2-3 pages, key numbers). Use the 10-Q for deeper investigation. Listen to the earnings call for management tone and forward-looking commentary. Never rely solely on news coverage.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: the three financial statements
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Three Statements',
      topicIcon: Zap,
      intro: 'Every earnings report contains three financial statements. Each answers a different question. Match each question to the right statement.',
      prompts: [
        {
          setup: '"How much did the company earn this quarter?" (Revenue, costs, profit)',
          left: { label: 'Income Statement', sublabel: 'earnings over a period' },
          right: { label: 'Balance Sheet', sublabel: 'snapshot of what\'s owned/owed' },
          correct: 'left',
          flash: 'The income statement shows revenue minus costs equals profit — over a period of time (quarter or year). This is where you find revenue growth, margins, and EPS.',
        },
        {
          setup: '"How much debt does the company have right now?" (Assets, liabilities, equity)',
          left: { label: 'Income Statement' },
          right: { label: 'Balance Sheet', sublabel: 'what\'s owned vs owed today' },
          correct: 'right',
          flash: 'The balance sheet is a snapshot of a single moment — what the company owns (assets) minus what it owes (liabilities) equals equity. Debt, cash, and receivables live here.',
        },
        {
          setup: '"Did the company actually generate cash, or just paper profit?"',
          left: { label: 'Cash Flow Statement', sublabel: 'actual cash in and out' },
          right: { label: 'Income Statement' },
          correct: 'left',
          flash: 'The cash flow statement tracks actual money moving in and out. It answers the question from the Cash vs. Profit lesson: is the company generating real cash, or just accounting profit?',
        },
        {
          setup: '"What\'s the company\'s gross margin and operating margin?"',
          left: { label: 'Income Statement', sublabel: 'revenue and cost layers' },
          right: { label: 'Cash Flow Statement' },
          correct: 'left',
          flash: 'Margins come from the income statement: gross profit ÷ revenue = gross margin. Operating profit ÷ revenue = operating margin. These are the numbers from the Income Statement lesson.',
        },
        {
          setup: '"How much free cash flow did the business generate?"',
          left: { label: 'Balance Sheet' },
          right: { label: 'Cash Flow Statement', sublabel: 'operating cash minus capex' },
          correct: 'right',
          flash: 'Free cash flow = operating cash flow minus capital expenditures. It\'s on the cash flow statement. This is the number investors trust most — real cash after everything.',
        },
      ],
      takeaway: 'Three statements, three questions: (1) Income statement → how much did they earn? (2) Balance sheet → what do they own and owe? (3) Cash flow statement → did they generate real cash? Together, they tell the full story.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Tap: reading an actual earnings press release
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The 5 Numbers That Matter',
      topicIcon: Flag,
      intro: 'Here\'s a simplified earnings press release. Tap the 5 numbers an investor should check FIRST — before reading anything else.',
      passage: [
        { type: 'text', value: '"TechCorp Reports Q3 2025 Results\n\n' },
        {
          type: 'chip',
          value: 'Revenue: $8.2B (up 18% year-over-year)',
          signal: true,
          feedback: 'Check #1: Revenue and revenue growth. Is the business growing? 18% YoY growth tells you demand is strong. Always compare to the prior year (not prior quarter) to remove seasonality.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'GAAP net income: $1.4B',
          signal: false,
          feedback: 'GAAP net income is the official profit number, but it includes one-time gains/losses, interest payments, and tax changes that can distort the picture. Operating income matters more because it strips all of that out and shows core business performance. A one-time asset sale or tax benefit can inflate net income without the business actually improving.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Operating income: $2.1B, operating margin 25.6% (up from 22.3%)',
          signal: true,
          feedback: 'Check #2: Operating margin and its trend. 25.6% up from 22.3% means the company is becoming more profitable per dollar of revenue. Expanding margins = the business is scaling efficiently. Operating income is more reliable than net income here because it excludes one-time items, interest, and taxes — showing you what the core business actually earned.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'EPS: $2.15 (analysts expected $2.08)',
          signal: true,
          feedback: 'Check #3: EPS vs. analyst expectations. $2.15 vs. $2.08 expected = a beat. This is what moves the stock on earnings day. The size of the beat ($0.07, or 3.4%) tells you if it\'s meaningful or trivial. Where to find the consensus estimate: Yahoo Finance, Google Finance, or Seeking Alpha all show "EPS Estimate" on any stock\'s page — for free.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Free cash flow: $1.8B',
          signal: true,
          feedback: 'Check #4: Free cash flow. $1.8B in FCF vs. $1.4B in net income means the company generates MORE cash than it reports in profit — a healthy sign. When FCF is lower than net income, investigate why.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'The company repurchased 5M shares during the quarter',
          signal: false,
          feedback: 'Share buybacks are worth noting but aren\'t a top-5 first check. They boost EPS mechanically (fewer shares = higher per-share earnings). Good to know, but check the business health first.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Q4 guidance: revenue $8.5-8.7B (analysts expected $8.4B)',
          signal: true,
          feedback: 'Check #5: Forward guidance vs. expectations. Management is guiding ABOVE analyst expectations for next quarter. This is often more important than the current quarter\'s results — it tells you where the business is heading. Analyst estimates are free on Yahoo Finance or Google Finance. Compare guidance to those estimates to see if management is confident or cautious.',
        },
        { type: 'text', value: '. The CEO commented: "We are pleased with our execution across all segments."\n"' },
      ],
      requiredSignals: 4,
      reveal:
        'The 5 first-check numbers: (1) Revenue growth — is the business growing? (2) Operating margin trend — is it becoming more profitable? (3) EPS vs. expectations — beat or miss? (4) Free cash flow — real cash, not just accounting profit? (5) Forward guidance — where is it heading? These 5 numbers take 60 seconds to find and tell you 80% of the story.',
      takeaway: 'You don\'t need to read 50 pages. Five numbers — revenue growth, operating margin, EPS vs. estimates, free cash flow, and forward guidance — tell you 80% of what matters in any earnings report.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Estimate: year-over-year vs. quarter-over-quarter
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Comparing the Right Way',
      topicIcon: Calculator,
      context:
        'A retail company reports Q4 (October-December) revenue of $12B.\n\nQ3 (July-September) revenue was $8B. Quarter-over-quarter growth: ($12B − $8B) ÷ $8B = 50% growth. Sounds amazing.\n\nBut Q4 last year revenue was $11.5B. Year-over-year growth: ($12B − $11.5B) ÷ $11.5B.\n\nQ4 is always the biggest quarter for retail (holiday season). Comparing Q4 to Q3 is misleading because of seasonality.',
      question: 'What\'s the real year-over-year growth rate?',
      answer: 4.3,
      tolerance: 1,
      unit: '%',
      hint: '($12B − $11.5B) ÷ $11.5B × 100',
      reveal:
        '($12B − $11.5B) ÷ $11.5B = 4.3% year-over-year growth. Not 50% — just 4.3%. The "50% growth" from Q3 to Q4 was almost entirely seasonality (holiday shopping), not real business improvement. This is why earnings reports always show year-over-year comparisons: same quarter, prior year. It strips out seasonal effects and shows true underlying growth.',
      takeaway: 'Always compare year-over-year (same quarter, last year) — never quarter-over-quarter. Seasonal businesses look wildly different depending on the quarter. YoY strips out the noise and shows real growth.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: reading management tone
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Management Speak',
      topicIcon: Lightbulb,
      context:
        'On earnings calls, CEOs and CFOs choose their words carefully. Here are two management quotes from different companies:\n\nCompany A: "We see strong demand across all regions. Our pipeline is robust and we\'re investing aggressively to capture the opportunity. We\'re raising full-year guidance."\n\nCompany B: "We\'re navigating a challenging macro environment. We\'re focused on operational efficiency and prudent cost management. We\'re maintaining our guidance despite headwinds."',
      question: 'What\'s the real difference between these two statements?',
      options: [
        'Company A is doing well, Company B is doing poorly — it\'s that simple',
        'Company A is signaling acceleration (raising guidance, investing to grow). Company B is signaling deceleration without saying it directly — "efficiency" and "maintaining despite headwinds" are corporate code for "growth is slowing and we\'re cutting costs"',
        'Both are just PR spin — management always sounds optimistic',
        'Company B is more honest because they acknowledge challenges',
      ],
      correctIndex: 1,
      punchline:
        'Management rarely says "we\'re struggling." Instead they use code words. "Operational efficiency" = cost cutting. "Navigating headwinds" = demand is weakening. "Maintaining guidance" = we almost missed but didn\'t. Meanwhile, "raising guidance" and "investing aggressively" signal genuine confidence. Remember: guidance is directional, not precise. Companies that consistently beat their own guidance are sandbagging (conservative estimates). Companies that consistently miss guidance have lost visibility into their own business. Learn the code.',
      wrongNudges: [
        'It\'s not that simple — but you\'re on the right track. The key is HOW they\'re doing well vs. poorly. Company A is accelerating (raising guidance). Company B is decelerating (maintaining guidance with caveats). The direction matters more than the current state.',
        '',
        'Management optimism varies dramatically in tone. "Raising full-year guidance" is a concrete, verifiable action. "Maintaining despite headwinds" is defensive language. One is backed by numbers, the other is backed by excuses.',
        'Acknowledging challenges can be honest — or it can be pre-emptive blame-shifting for a bad quarter ahead. The test: is the company raising or lowering expectations? Company B isn\'t raising them.',
      ],
      takeaway: 'Management speak has a code: "efficiency" = cost cuts, "headwinds" = demand weakening, "maintaining guidance" = barely hitting targets. "Raising guidance" and "investing to grow" signal real confidence. Always read the tone, not just the words.',
    },
  ],
  takeaways: [
    'Start with the earnings press release (2-3 pages), not the 50-page 10-Q. The press release has the key numbers that move the stock. Dig into the 10-Q for specific questions.',
    'Three financial statements answer three questions: income statement (how much earned?), balance sheet (what\'s owned and owed?), cash flow statement (is the cash real?).',
    'Five numbers first: revenue growth, operating margin trend, EPS vs. expectations, free cash flow, and forward guidance. These take 60 seconds and tell 80% of the story.',
    'Compare year-over-year, never quarter-over-quarter. Seasonal effects make QoQ misleading. Management code words: "efficiency" = cuts, "headwinds" = weakening demand, "raising guidance" = genuine confidence.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now know exactly where to look in an earnings report — and what management is really saying between the lines.',
    great: 'Strong work. Most investors never read primary sources. You now have a framework to read any earnings report in 10 minutes.',
    good: 'Good foundation. Practice on a real earnings report — pick any company and find the 5 key numbers. It gets easier fast.',
    low: 'Worth revisiting. Reading earnings reports is the bridge from classroom knowledge to real investing. This skill matters.',
  },
};
