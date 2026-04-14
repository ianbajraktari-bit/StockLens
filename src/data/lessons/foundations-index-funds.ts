import { PieChart, TrendingUp, Shield, Calculator, Scale, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsIndexFundsLesson: Lesson = {
  id: 'foundations-index-funds',
  emoji: '🧺',
  title: 'The Basket That Beats the Pickers',
  subtitle:
    'Index funds, ETFs, and why the "boring" choice beats 90% of professional investors',
  description:
    "Most investing education teaches you to pick stocks. The most important lesson in investing is when NOT to. Warren Buffett tells retail investors to buy index funds. John Bogle built a $10T empire on that single idea. You'll learn what index funds actually are, why they outperform most active managers, and how to use them as the foundation of any portfolio — even one with individual stocks in it.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation', 'risk', 'business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'What an index fund actually is', icon: PieChart },
    { label: 'Why most pros lose to the index', icon: TrendingUp },
    { label: 'ETF vs. mutual fund — what\'s the difference', icon: Scale },
    { label: 'How to combine indexing with stock picking', icon: Target },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: What is an index fund?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What Is an Index Fund?',
      topicIcon: PieChart,
      context:
        'The S&P 500 is a list — the 500 biggest public companies in the US, ranked and maintained by a committee. An "S&P 500 index fund" lets you own a tiny slice of every one of those 500 companies with a single purchase.\n\nOne share of the fund ≈ one share of the entire US large-cap market.',
      question: 'The single most important thing an index fund does is:',
      options: [
        'Picks the best stocks for you using professional research',
        'Automatically owns every stock in a predefined list, in the exact proportions that list defines — no human decides what\'s in or out',
        'Guarantees a positive return each year',
        'Concentrates your money in the safest companies',
      ],
      correctIndex: 1,
      punchline:
        'An index fund is a rule-follower, not a stock picker. It owns what the list says, in the weights the list specifies, and rebalances when the list changes. No human judgment. No thesis. No "this one is undervalued." That\'s the feature, not a bug — as you\'ll see in a moment.',
      wrongNudges: [
        'Index funds deliberately do NOT pick. An active fund picks; an index fund follows a rulebook. That distinction is the entire point.',
        '',
        'Index funds fall when the index falls. An S&P 500 fund dropped ~37% in 2008. No fund of any kind guarantees a positive return year-to-year.',
        'Index funds own every stock in the index — including the risky ones. They\'re diversified, but not "safe." They swing with the market.',
      ],
      takeaway:
        'An index fund mechanically owns an entire list of stocks. No selection, no judgment, no active management — just the list, held in proportion, at almost no cost.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Cost drag — the fee problem
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cost Drag',
      topicIcon: Calculator,
      context:
        'Active mutual funds typically charge ~1% annually. Index funds typically charge ~0.05%.\n\nThat 0.95% gap doesn\'t sound big — but it compounds. If you invest $10,000 for 40 years and both funds return 7% before fees, the active fund delivers ~$106,000 and the index fund delivers ~$147,000.',
      question:
        'How much more does the index fund produce after 40 years, in thousands of dollars?',
      answer: 41,
      tolerance: 5,
      unit: '$K',
      hint: '$147K − $106K',
      reveal:
        '$41,000 more — from a fee difference of less than 1% per year. Fees compound against you the same way returns compound for you. Over an investing lifetime, a 1% fee is typically the single largest cost you pay — bigger than taxes, bigger than inflation on your cash, bigger than trading costs.',
      takeaway:
        'In a long-run compounding machine, small fees become large outcomes. A 1% fee over 40 years quietly takes roughly 25–30% of your final portfolio.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: Why pros lose to the index
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Active Manager Problem',
      topicIcon: TrendingUp,
      context:
        'Over any 20-year period, roughly 90% of professional actively-managed US stock funds fail to beat the S&P 500 index — after fees.\n\nThese aren\'t amateurs. They have MBAs, Bloomberg terminals, teams of analysts, and access to company management.',
      question: 'What\'s the main reason 9 out of 10 pros lose to the index?',
      options: [
        'They\'re worse stock pickers than the average person',
        'They charge fees that eat into returns, AND their collective trading is what creates the index in the first place — so after fees, the average active manager must lose to the index mathematically',
        'Regulations prevent them from buying the best stocks',
        'They rotate out of good stocks too quickly',
      ],
      correctIndex: 1,
      punchline:
        "This is called the 'arithmetic of active management' (Bill Sharpe, Nobel laureate). Before fees, active managers as a group hold the same stocks as the index — they ARE the market. So their average return must equal the index. Subtract fees, and they must collectively lose to it. The only question is which pro is in the winning 10% — and past winners have little ability to predict future winners.",
      wrongNudges: [
        'Pros often have genuine skill at individual stock analysis. The problem is mathematical, not intellectual: as a group, their average return must equal the market, so fees guarantee underperformance.',
        '',
        'Regulations have little to do with it. Most active managers have full flexibility. The issue is structural math — before fees, the average active dollar earns the market return.',
        'Turnover is a drag on returns, but it\'s a secondary effect. The primary problem is the fee + math argument.',
      ],
      takeaway:
        "The math: before fees, active managers as a group earn the index return. After fees, they must lose to it on average. Picking the rare manager who wins is itself a losing bet over time.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Drill: Index vs. active — which wins the scenario?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Which Wins?',
      topicIcon: Scale,
      intro:
        "Two investors, same 30-year timeframe. Tap the one more likely to come out ahead.",
      prompts: [
        {
          setup: 'Neither has time to research stocks.',
          left: { label: 'Buys an S&P 500 index fund and contributes monthly', sublabel: '0.04% fee' },
          right: { label: 'Picks a highly-rated actively-managed fund', sublabel: '1.1% fee' },
          correct: 'left',
          flash: 'Over 30 years, a 1% fee gap compounds into 25–30% of the final portfolio. Unless the active fund outperforms by >1% after fees every year (rare), the index wins.',
        },
        {
          setup: 'Both are retirement-age, want low volatility.',
          left: { label: 'Mix: 60% total-market index + 40% bond index', sublabel: 'classic diversified mix' },
          right: { label: '100% in a "hot" sector ETF', sublabel: 'whichever is trending' },
          correct: 'left',
          flash: "A diversified index mix rides the whole economy. Concentrated sector bets can lose 50%+ in a downturn and take a decade to recover — catastrophic near retirement.",
        },
        {
          setup: 'Both want long-term growth, 25+ year horizon.',
          left: { label: 'Dollar-cost-averages monthly into a broad index', sublabel: 'automatic, unemotional' },
          right: { label: 'Tries to time entry — waits for "a dip"', sublabel: 'holds cash meanwhile' },
          correct: 'left',
          flash: "Market-timing research is brutal: missing just the 10 best days over 20 years cuts returns roughly in half. The 'boring' automatic investor beats the timer almost every time.",
        },
        {
          setup: 'Both believe tech will outperform long-term.',
          left: { label: 'Owns a total-market index + a small tech tilt', sublabel: 'diversified with a bet' },
          right: { label: 'Owns only 5 tech stocks', sublabel: 'high-conviction concentrated' },
          correct: 'left',
          flash: "Concentrated portfolios can soar, but they can also lose 70% in a single sector crash. A tilt gives you the exposure without the blow-up risk. You don't need to be 100% in the winner — you just need to own some.",
        },
        {
          setup: 'Both are paying 1.2% advisory fee on an actively-managed portfolio.',
          left: { label: 'Switches to a DIY index portfolio at 0.05%', sublabel: 'saves ~1.15% per year' },
          right: { label: 'Stays with the advisor who has "beaten the market" recently', sublabel: 'past 3-year performance' },
          correct: 'left',
          flash: "Past performance predicts future performance poorly. Fees predict future performance reliably — and not in the advisor's favor. The index investor pockets the 1.15% as forever-returns.",
        },
      ],
      takeaway:
        "Low-cost, diversified, automatic, and patient beats almost everything else almost all the time. It's boring by design — and the boringness is what lets it win.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: ETF vs. mutual fund
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'ETF or Mutual Fund?',
      topicIcon: PieChart,
      context:
        'You\'re picking between two S&P 500 index products:\n\n• Vanguard\'s S&P 500 ETF (VOO) — trades like a stock on the exchange all day\n• Vanguard\'s S&P 500 mutual fund (VFIAX) — buys/sells once a day at close\n\nBoth hold the same 500 stocks. Both charge ~0.03–0.04% fees.',
      question: 'The most important real difference for a long-term investor is:',
      options: [
        'ETFs always beat mutual funds',
        'ETFs are generally more tax-efficient in taxable accounts due to how they handle internal trades, which can matter meaningfully over decades',
        'Mutual funds are safer',
        'There\'s no practical difference — pick either',
      ],
      correctIndex: 1,
      punchline:
        "In a tax-advantaged account (401k, IRA), the two are nearly identical. In a regular taxable brokerage account, ETFs typically throw off fewer taxable capital gains distributions because of the 'in-kind' creation/redemption mechanism. Over decades, that tax efficiency is worth real money. That\'s the main reason most long-term investors default to ETFs today.",
      wrongNudges: [
        '"Always better" is too strong. For 401k investing or recurring auto-contributions, mutual funds can be equally good or more convenient.',
        '',
        'Both are equally safe structurally. They\'re regulated the same way and custody the same stocks.',
        'They\'re very similar but not identical — tax efficiency, trading flexibility, and minimum investment differ in practical ways that compound over time.',
      ],
      takeaway:
        "ETFs and mutual funds with the same index are 95% the same product. In taxable accounts, ETFs edge ahead on tax efficiency. In tax-advantaged accounts, pick whichever your brokerage makes easier.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Tap: Red flags in fund marketing
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Fund Marketing Red Flags',
      topicIcon: Shield,
      intro:
        'A financial advisor sends you a fund pitch. Tap the phrases that should make you skeptical — not the legitimate information.',
      passage: [
        { type: 'text', value: '"This fund has ' },
        {
          type: 'chip',
          value: 'beaten the market for 3 straight years',
          signal: true,
          feedback:
            "Three years means almost nothing statistically. Roughly half of all funds beat the market over any random 3-year stretch by chance alone. Long-term records (15–20+ years) matter; 3-year records do not.",
        },
        { type: 'text', value: ' and charges just ' },
        {
          type: 'chip',
          value: '1.25% expense ratio plus a 1% advisory fee',
          signal: true,
          feedback:
            "Total cost: 2.25% per year. That\'s a headwind most managers cannot overcome. An equivalent index fund charges 0.05%. Over 30 years, the fee difference alone is usually 40%+ of the final portfolio.",
        },
        { type: 'text', value: '. The manager ' },
        {
          type: 'chip',
          value: 'has 20 years of industry experience',
          signal: false,
          feedback:
            "Experience matters at the margin but doesn\'t predict future returns. Markets are the ultimate equalizer — famous veterans underperform regularly.",
        },
        { type: 'text', value: '. The fund ' },
        {
          type: 'chip',
          value: 'uses a proprietary quantitative model',
          signal: true,
          feedback:
            '"Proprietary model" is often a marketing wrapper. If the model worked durably, it would either attract so much money it stopped working, or be quietly suppressed while insiders profit from it. Be skeptical.',
        },
        { type: 'text', value: ', and returns are ' },
        {
          type: 'chip',
          value: 'shown net of all fees',
          signal: false,
          feedback:
            "Good — showing returns net of fees is actually the honest way to report. What you want to avoid is gross-of-fee returns that make the fund look better than what you\'d actually receive.",
        },
        { type: 'text', value: '. Plus a ' },
        {
          type: 'chip',
          value: '5.75% upfront sales load',
          signal: true,
          feedback:
            "A load means the fund takes 5.75% of your investment before a dollar is invested. On $10,000, only $9,425 starts compounding. There is no good reason to pay a load in 2024 — load-free alternatives exist for every category.",
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        "This is a textbook high-cost active fund pitch. Short-term track record, 2.25% total fees, a 'magic model,' and a 5.75% load — these are the warning signs of a product engineered to pay everyone except you. The index equivalent delivers the market minus 0.05%, and that simple trade beats this fund 9 times out of 10 over 20+ years.",
      takeaway:
        "The more a fund markets past performance, star managers, and proprietary systems, the more skeptical you should be. The boring index fund next to it usually wins by just charging less and doing less.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: The core + satellite strategy
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Core + Satellite Playbook',
      topicIcon: Target,
      context:
        "If you enjoy researching individual companies (you\'re taking this course, so likely yes), you don\'t have to choose between \"index everything\" and \"pick stocks.\" Most thoughtful investors do both.\n\nThe typical structure: a large core of broad index funds + a smaller allocation to high-conviction individual stocks.",
      question: "What\'s the strongest reason to keep the individual-stock allocation SMALL?",
      options: [
        "Individual stocks are bad investments",
        "Most investors — including the pros — don\'t beat the index. Treating stock picking as the majority of your portfolio is betting your life savings on being in a minority that history says you probably aren\'t in",
        "Stock picking is illegal for retail investors above certain amounts",
        "Individual stocks don\'t pay dividends",
      ],
      correctIndex: 1,
      punchline:
        "The core + satellite structure protects you from your own overconfidence. A 70-90% index core guarantees you capture the market. The 10-30% satellite lets you express conviction, learn through experience, and potentially outperform — without risking your retirement if you\'re wrong about a few picks. Even Buffett tells most people to put 90% in index funds.",
      wrongNudges: [
        "Individual stocks can be excellent investments. The issue isn\'t whether they CAN win — it\'s that most investors, even skilled ones, don\'t beat the index over long periods.",
        '',
        "Stock picking is completely legal for any retail investor at any amount. The reason to keep it small is statistical, not legal.",
        "Many individual stocks pay dividends. This has nothing to do with index vs. pick — it\'s a property of the specific company, and plenty of index funds hold dividend payers.",
      ],
      takeaway:
        "Index the core, pick at the margin. Your safest, simplest, highest-expected-value portfolio is mostly boring — with room for the interesting stuff once you\'ve protected yourself from being wrong.",
    },
  ],
  takeaways: [
    "An index fund mechanically owns a list of stocks — no manager, no picks, almost no fees. That simplicity is its superpower, not a limitation.",
    "~90% of professional active managers underperform their index over 20+ years, mostly because of fees and the basic math of active investing as a group.",
    "Fees compound against you for decades. A 1% fee difference typically costs 25–30% of your final portfolio over an investing lifetime.",
    "The strongest portfolio for most investors is an index core + a small satellite of high-conviction individual stocks — Buffett\'s own public recommendation.",
  ],
  completionMessages: {
    perfect:
      "You understand the single most important practical lesson in investing — the one most retail investors never properly internalize. This alone saves fortunes.",
    great:
      "Strong grasp of why indexing wins. You can now evaluate any fund pitch skeptically and structure a portfolio that protects you from your own mistakes.",
    good:
      "Good start. Keep returning to the math: fees compound, and the average active dollar earns the market return before fees. Once that clicks, indexing becomes obvious.",
    low:
      "Worth revisiting. This is counter-intuitive: the best investors (Buffett, Bogle) tell most people NOT to try to beat the market. Understanding why is foundational.",
  },
};
