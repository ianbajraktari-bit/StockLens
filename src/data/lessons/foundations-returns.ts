import { Banknote, TrendingUp, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsReturnsLesson: Lesson = {
  id: 'foundations-returns',
  emoji: '💰',
  title: 'Where the Profits Go',
  subtitle: 'Dividends, buybacks, and reinvestment — how companies use their cash',
  description:
    "A company earns $10B in profit. What does it do with the money? It has three choices: pay it to shareholders as dividends, buy back its own stock, or reinvest in the business. Each choice tells you what management thinks about the company's future — and each one affects your returns differently.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation', 'business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'The three things a company can do with profit', icon: Banknote },
    { label: 'How dividends work — and when a high yield is a trap', icon: TrendingUp },
    { label: 'Why buybacks can be brilliant or wasteful', icon: Lightbulb },
    { label: 'Reading capital allocation like an investor', icon: Zap },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: the three choices
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Three Choices',
      topicIcon: Banknote,
      context:
        'A company earns $10B in free cash flow. It has three options:\n\n1. Dividends — pay cash directly to shareholders ($3/share quarterly)\n2. Buybacks — use the cash to repurchase its own stock on the open market\n3. Reinvest — spend the money on new products, acquisitions, or expansion\n\nEach choice reveals management\'s view of the company\'s future.',
      question: 'When does reinvesting make more sense than paying dividends?',
      options: [
        'Always — companies should never pay dividends',
        'When the company can earn a higher return on reinvested cash than shareholders could earn on their own. If the business generates 25% returns on new investments, keeping the cash creates more value than paying it out',
        'Never — shareholders deserve to be paid directly',
        'It depends on the stock price — reinvest when the stock is up, pay dividends when it\'s down',
      ],
      correctIndex: 1,
      punchline:
        'The test is simple: can management earn a better return with the cash than you could? Amazon reinvested everything for 20 years and created $2T in value. A slow-growing utility should pay dividends because reinvestment won\'t generate high returns. The right answer depends on the business.',
      wrongNudges: [
        'Companies with limited growth opportunities destroy value by hoarding cash. A slow-growing company earning 5% on reinvested capital should pay dividends so investors can reinvest at higher rates.',
        '',
        'If a company can compound at 20-30% by reinvesting, paying dividends would actually hurt shareholders. Every dollar paid out is a dollar that can\'t compound inside the business.',
        'Stock price shouldn\'t drive capital allocation. A company should reinvest when it has high-return projects and return cash when it doesn\'t — regardless of what the stock is doing.',
      ],
      takeaway: 'Capital allocation is about return on investment: reinvest when the business earns high returns, return cash when it doesn\'t. The best companies allocate capital where it creates the most value.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: dividends vs buybacks
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Dividends vs. Buybacks',
      topicIcon: Zap,
      intro: 'Both dividends and buybacks return cash to shareholders — but they work differently. Classify each statement.',
      prompts: [
        {
          setup: 'A company pays $1/share every quarter to all shareholders regardless of stock price.',
          left: { label: 'Dividend', sublabel: 'cash payment to all holders' },
          right: { label: 'Buyback', sublabel: 'company buys its own stock' },
          correct: 'left',
          flash: 'Dividends are direct cash payments to every shareholder. You receive money in your account. The amount is fixed per share and doesn\'t depend on stock price.',
        },
        {
          setup: 'A company uses $5B to purchase its own shares on the open market, reducing shares outstanding from 1B to 950M.',
          left: { label: 'Dividend' },
          right: { label: 'Buyback', sublabel: 'fewer shares = more per share' },
          correct: 'right',
          flash: 'Buybacks reduce shares outstanding. With fewer shares, each remaining share represents a larger piece of the company. Your ownership percentage increases without you buying more.',
        },
        {
          setup: 'Once started, this is very hard to cut without the stock price crashing.',
          left: { label: 'Dividend', sublabel: 'expected by investors' },
          right: { label: 'Buyback' },
          correct: 'left',
          flash: 'Dividend cuts signal serious trouble and often crash the stock 20-30%. Companies treat dividends as a commitment. This "stickiness" is why management is cautious about starting them.',
        },
        {
          setup: 'This can be done opportunistically — more when the stock is cheap, less when it\'s expensive.',
          left: { label: 'Dividend' },
          right: { label: 'Buyback', sublabel: 'flexible timing' },
          correct: 'right',
          flash: 'Buybacks are flexible. Smart companies buy more when the stock is cheap (good deal) and less when it\'s expensive (bad deal). Unlike dividends, there\'s no expectation of consistency.',
        },
        {
          setup: 'Apple spends ~$80B/year on this, making it the largest user of this tool in history.',
          left: { label: 'Dividend' },
          right: { label: 'Buyback', sublabel: 'Apple is the buyback king' },
          correct: 'right',
          flash: 'Apple buys back ~$80B/year of its own stock — the most aggressive buyback program ever. Since 2012, Apple has reduced shares outstanding by ~40%. Each remaining share now represents 40% more of the company.',
        },
      ],
      takeaway: 'Dividends are predictable cash payments — sticky, expected, hard to cut, and taxed immediately when you receive them. Buybacks are flexible — they reduce share count, can be timed opportunistically, don\'t create an ongoing obligation, and defer your taxes until you sell. This tax difference is a major reason companies increasingly prefer buybacks.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: buyback math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Buyback Effect',
      topicIcon: Calculator,
      context:
        'A company earns $10B in net income with 1 billion shares outstanding.\n\nEPS = $10B ÷ 1B shares = $10/share\n\nThe company buys back 200M shares (20% of shares outstanding). No change in profit.\n\nNew shares outstanding: 800M\nNew EPS = $10B ÷ 800M shares',
      question: 'What\'s the new EPS after the buyback?',
      answer: 12.5,
      tolerance: 0.5,
      unit: '$/share',
      hint: '$10B ÷ 800M shares',
      reveal:
        '$10B ÷ 800M = $12.50/share. EPS grew 25% with zero profit growth — purely from reducing share count. This is how buybacks create value: same profit, fewer shares, higher EPS. Apple\'s profit grew ~60% while EPS grew ~120% partly due to a ~40% share reduction — though margin expansion and other factors also contributed. Important caveat: buybacks only create value if the stock is purchased at or below fair value. A company buying back overpriced shares is destroying capital, not creating it.',
      takeaway: 'Buybacks boost EPS by shrinking the denominator — and they\'re tax-efficient: unlike dividends (taxed immediately when paid), buybacks defer taxes until you sell your shares. But this only creates value if the company buys at reasonable prices. Overpaying for your own stock is just as wasteful as overpaying for an acquisition.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the bad capital allocation
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Capital Allocation Red Flags',
      topicIcon: Flag,
      intro: 'A company describes how it uses its cash. Tap the decisions that destroy shareholder value.',
      passage: [
        { type: 'text', value: '"MegaCorp generated $8B in free cash flow this year. We ' },
        {
          type: 'chip',
          value: 'paid $2B in dividends, maintaining our 20-year streak of increases',
          signal: false,
          feedback: 'A 20-year dividend growth streak shows financial discipline. $2B out of $8B in FCF is a comfortable 25% payout ratio. This is sustainable and shareholder-friendly.',
        },
        { type: 'text', value: '. We also ' },
        {
          type: 'chip',
          value: 'bought back $3B in stock at all-time high prices after missing earnings estimates',
          signal: true,
          feedback: 'Red flag. Buying back stock at all-time highs right after missing earnings is the worst timing. The company is paying top dollar for shares that may be overvalued. Smart buybacks happen when the stock is cheap, not expensive.',
        },
        { type: 'text', value: '. In addition, we ' },
        {
          type: 'chip',
          value: 'acquired a competitor for $4B — 15x their revenue — to "expand our ecosystem"',
          signal: true,
          feedback: 'Paying 15x revenue is wildly expensive — a fair acquisition typically costs 3-5x revenue or 15-25x earnings. At 15x revenue, the target would need enormous profit margins just to break even on the purchase price. Vague justifications like "expand our ecosystem" are strategic hand-waving, not financial discipline. Studies show 70-90% of acquisitions at these multiples destroy shareholder value.',
        },
        { type: 'text', value: '. We ' },
        {
          type: 'chip',
          value: 'invested $1B in R&D to improve our core product',
          signal: false,
          feedback: 'R&D investment in the core business is typically value-creating. $1B to strengthen the main product that generates $8B in FCF is a reasonable, focused investment.',
        },
        { type: 'text', value: '. To fund all of this, we ' },
        {
          type: 'chip',
          value: 'borrowed $2B at 6% interest despite having low-return investment options',
          signal: true,
          feedback: 'Borrowing at 6% to fund buybacks at all-time highs and an overpriced acquisition is value destruction. The company is taking on debt to overpay for things. Debt should fund high-return investments, not aggressive spending.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'MegaCorp took $8B in cash flow, added $2B in debt, and used $10B on: reasonable dividends ($2B), overpriced buybacks ($3B), a wildly expensive acquisition ($4B), and smart R&D ($1B). Three out of four uses were value-destructive. Capital allocation is the CEO\'s most important job — and this CEO is spending recklessly.',
      takeaway: 'Bad capital allocation destroys more value than bad products. Buying back stock at highs, overpaying for acquisitions, and borrowing to fund both are the classic red flags. Watch what management does with cash — it reveals their judgment.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: what signals quality
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Reading Capital Allocation',
      topicIcon: Lightbulb,
      context:
        'Two companies each earn $5B/year:\n\nCompany A: Pays $1B dividends (growing 10%/year for 15 years). Buys back $2B/year when stock is below 20x P/E. Reinvests $2B in R&D with 30% returns.\n\nCompany B: No dividend. Buys back $3B/year regardless of stock price. Spends $2B/year on acquisitions that generate 3% returns.',
      question: 'Which company has better capital allocation?',
      options: [
        'Company B — no dividend means more flexibility, and bigger buybacks are better',
        'They\'re equal — both return the same total amount to shareholders',
        'Company A — disciplined dividend growth, opportunistic buybacks only when cheap, and high-return reinvestment show management that understands value creation at every level',
        'Need more information to judge',
      ],
      correctIndex: 2,
      punchline:
        'The framework is simple: reinvest when the business earns returns above its cost of capital (Company A\'s 30% R&D returns), buy back stock when it trades below intrinsic value (A waits for <20x P/E), and pay dividends when the business is mature and cash exceeds reinvestment opportunities. Company B fails all three tests — buying back at any price and making acquisitions earning 3% (below any cost of capital). Same $5B in earnings, vastly different outcomes.',
      wrongNudges: [
        'Flexibility without discipline is recklessness. Company B buys back stock at any price — overpaying destroys value. The decision framework: buyback when undervalued, dividend when mature, reinvest when returns are high. B does none of these well.',
        'Total dollars returned is irrelevant if half goes to overpriced buybacks or 3% acquisitions. $2B at fair prices creates more value than $3B at inflated prices. Quality of allocation matters more than quantity.',
        '',
        'You have enough. The framework maps directly: A reinvests at 30% (above cost of capital), buys back below 20x (when cheap), and pays growing dividends (mature cash flow). B buys back indiscriminately and acquires at 3% returns (below cost of capital). The quality difference is clear.',
      ],
      takeaway: 'The capital allocation decision framework: reinvest when returns exceed cost of capital, buy back stock when it\'s undervalued, pay dividends when the business is mature and cash exceeds reinvestment needs. Great CEOs match the right tool to the situation.',
    },
  ],
  takeaways: [
    'Companies have three choices with profit: dividends (cash to shareholders), buybacks (reduce shares outstanding), or reinvest. The right choice depends on what earns the highest return.',
    'Dividends are sticky commitments — hard to cut without crashing the stock. Buybacks are flexible and create value by boosting EPS, but only if the company buys when the stock is reasonably priced.',
    'Buyback math: reducing shares by 20% increases EPS by 25% on flat profit. But buybacks only create value at reasonable prices — and they carry a tax advantage over dividends (taxes are deferred until you sell).',
    'The capital allocation framework: reinvest when returns exceed cost of capital, buy back when the stock is undervalued, pay dividends when the business is mature. Watch for red flags: buybacks at all-time highs, acquisitions above 5x revenue without clear profit logic, and borrowing to fund spending.',
    'You know how profits get allocated. Next: how to build a portfolio that survives your worst mistake.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand capital allocation — the skill that separates good companies from great investments.',
    great: 'Strong work. Most investors focus on revenue and profit but ignore how management uses the cash. You won\'t make that mistake.',
    good: 'Good foundation. Capital allocation shows up in every company analysis. Watch how management spends — it reveals their judgment.',
    low: 'Worth revisiting. Capital allocation is how $1 of earnings becomes $2 of value — or $0.50. Understanding it is critical.',
  },
};
