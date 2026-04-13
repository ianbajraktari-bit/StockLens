import { TrendingUp, DollarSign, Building2, Newspaper, BarChart3, Calculator, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMacroLesson: Lesson = {
  id: 'foundations-macro',
  emoji: '🌍',
  title: 'How the Economy Moves Markets',
  subtitle: 'Why interest rates, inflation, and the Fed matter more than any single company',
  description:
    "You can pick the perfect stock and still lose money if the economy shifts beneath you. Interest rates, inflation, and central bank decisions move entire markets — pulling every stock up or down regardless of quality. You'll learn to read these forces and understand why they matter more than any single earnings report.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk'],
  keyFacts: [],
  topics: [
    { label: 'How interest rates pull on stock valuations', icon: TrendingUp },
    { label: 'Why the Fed raises or cuts rates', icon: Building2 },
    { label: 'Separating macro signal from headline noise', icon: Newspaper },
    { label: "Inflation's hidden tax on your returns", icon: DollarSign },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: interest rate intuition
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Interest Rate Intuition',
      topicIcon: TrendingUp,
      intro: 'Interest rates just rose. Tap which way each thing moves. Go fast — build the instinct.',
      prompts: [
        {
          setup: 'Rates rise. Bond prices...',
          left: { label: 'Fall', sublabel: 'old bonds pay less than new ones' },
          right: { label: 'Rise', sublabel: 'bonds get more attractive' },
          correct: 'left',
          flash: 'When new bonds pay 5%, nobody wants your old 3% bond at full price. Bond prices fall when rates rise — always.',
        },
        {
          setup: 'Rates rise. Stock valuations...',
          left: { label: 'Fall', sublabel: 'future earnings worth less today' },
          right: { label: 'Rise', sublabel: 'companies earn more interest' },
          correct: 'left',
          flash: "Higher rates mean future profits are discounted more heavily. A dollar of earnings 5 years from now is worth less today. That's why valuations compress.",
        },
        {
          setup: 'Rates rise. Bank profits...',
          left: { label: 'Fall', sublabel: 'loans become riskier' },
          right: { label: 'Rise', sublabel: 'wider spread on lending' },
          correct: 'right',
          flash: 'Banks borrow short (deposits at low rates) and lend long (mortgages at higher rates). When rates rise, the spread widens and banks earn more per loan.',
        },
        {
          setup: 'Rates rise. Tech stocks vs. utility stocks...',
          left: { label: 'Tech falls harder', sublabel: 'growth priced further out' },
          right: { label: 'Utilities fall harder', sublabel: 'people switch to bonds' },
          correct: 'left',
          flash: "Tech stocks depend on earnings years in the future. Higher rates shrink the present value of those distant earnings more than stable, near-term utility profits. That's why growth stocks are 'long duration.'",
        },
        {
          setup: 'Rates rise. Savings account yields...',
          left: { label: 'Fall', sublabel: 'banks cut rates to protect margins' },
          right: { label: 'Rise', sublabel: 'banks compete for deposits' },
          correct: 'right',
          flash: 'Banks raise deposit rates to attract cash. This is the one place higher rates directly help regular savers.',
        },
        {
          setup: 'Rates rise. Housing market...',
          left: { label: 'Cools down', sublabel: 'mortgages get expensive' },
          right: { label: 'Heats up', sublabel: 'people rush to lock in rates' },
          correct: 'left',
          flash: 'A 7% mortgage costs roughly twice the monthly payment of a 3.5% mortgage on the same house. Higher rates price buyers out and cool demand.',
        },
      ],
      takeaway:
        'Interest rates are the gravity of finance. When rates rise, they pull down bond prices, stock valuations, and housing — while lifting bank profits and savings yields. Every investor needs to feel this force.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the discount rate effect
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Discount Rate',
      topicIcon: Calculator,
      context:
        'A company earns $10/share with steady growth. When rates are 2%, investors pay 25x earnings ($250/share). When rates jump to 5%, they only pay 18x ($180/share). Same company. Same earnings. Same growth.',
      question: 'How much did the stock drop (in percent)?',
      answer: 28,
      tolerance: 3,
      unit: '%',
      hint: '($250 − $180) ÷ $250',
      reveal:
        'The stock dropped 28% — and nothing changed about the business. Interest rates changed what investors were WILLING to pay. This is why rate decisions move entire markets, not just individual stocks.',
      takeaway:
        'When rates rise, the same future earnings become worth less today. Valuations compress even for great companies.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: the Fed's dilemma
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: "The Fed's Dilemma",
      topicIcon: Building2,
      context:
        "Inflation is running at 7% — prices are rising fast. Unemployment is 3.5% — the job market is red hot. The Federal Reserve must decide what to do. Their dual mandate: keep prices stable and maximize employment.",
      question: "What should the Fed do?",
      options: [
        'Raise rates — stocks fall short-term but inflation cools and the economy stabilizes',
        'Cut rates — boost stocks and keep the party going',
        'Do nothing — wait and see if inflation fixes itself',
        'Print more money — stimulate spending to outgrow inflation',
      ],
      correctIndex: 0,
      punchline:
        "The Fed's job isn't to make stocks go up — it's to keep inflation from spiraling. Raising rates slows spending, cools prices, and yes, stocks often fall. But unchecked inflation destroys purchasing power for everyone. Short-term market pain is the lesser evil.",
      wrongNudges: [
        '',
        'Cutting rates when inflation is 7% is like pouring gasoline on a fire. Cheaper money means more spending, which means prices rise even faster.',
        "Inflation rarely fixes itself. The longer it runs, the more it embeds into wages, rents, and expectations — making it harder and more painful to stop later.",
        'Printing money IS inflation. More dollars chasing the same goods means each dollar buys less. This is exactly how inflation spirals.',
      ],
      takeaway:
        'The Fed controls short-term interest rates to manage inflation. Their decisions ripple through every asset class — stocks, bonds, real estate, savings.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: reading macro headlines
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading Macro Headlines',
      topicIcon: Newspaper,
      intro:
        "You open the financial news. Most of it is noise. Tap the headlines that actually contain information an investor can act on.",
      passage: [
        {
          type: 'chip',
          value: 'Fed signals two more rate hikes this year',
          signal: true,
          feedback:
            'Direct policy signal. More rate hikes mean tighter financial conditions ahead — this affects valuations, mortgage rates, and corporate borrowing costs. Actionable.',
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: 'Markets were volatile today',
          signal: false,
          feedback:
            '"Volatile" just means prices moved. It tells you nothing about direction, cause, or what to do. Pure noise.',
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: 'Core inflation rose to 4.2%, above the 3.8% forecast',
          signal: true,
          feedback:
            "Inflation above forecast means the Fed may need to stay aggressive longer. This directly affects when rates might come down — and when stock valuations might recover.",
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: 'Analysts predict a market correction',
          signal: false,
          feedback:
            "Analysts predict corrections constantly. Someone is always predicting a crash. Without a specific mechanism or data point, this is opinion, not information.",
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: '10-year Treasury yield hit 5% for the first time since 2007',
          signal: true,
          feedback:
            "The 10-year yield is the benchmark for mortgage rates, corporate borrowing, and stock valuations. 5% means the 'risk-free' alternative to stocks is now paying real money. This pulls capital out of equities.",
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: 'Gold hit a new all-time high',
          signal: false,
          feedback:
            'Gold moves for many reasons (dollar weakness, geopolitical fear, inflation hedging). Without context on WHY, this headline is noise for a stock investor.',
        },
        { type: 'text', value: ' · ' },
        {
          type: 'chip',
          value: 'Consumer spending fell 3% month-over-month',
          signal: true,
          feedback:
            'Consumer spending is 70% of the US economy. A 3% monthly drop signals weakening demand — bad for corporate earnings but potentially good for inflation (and future rate cuts).',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Four signals, three noise. The signals share a pattern: they contain specific data points (rate decisions, inflation numbers, yield levels, spending data) that change the economic outlook. The noise is vague opinion or context-free facts.',
      takeaway:
        'Actionable macro news contains specific data that changes the outlook for rates, inflation, or economic growth. Everything else is noise.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: sector sensitivity
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Sector Sensitivity',
      topicIcon: BarChart3,
      intro:
        'Rising rates don\'t hit all sectors equally. Tap which sector gets hurt MORE by rate increases.',
      prompts: [
        {
          setup: 'Rates rise sharply.',
          left: { label: 'Tech stocks', sublabel: 'future earnings valued less' },
          right: { label: 'Utility stocks', sublabel: 'stable regulated demand' },
          correct: 'left',
          flash: "Tech earnings are years away. Higher rates shrink their present value dramatically. Utilities earn steady, near-term cash that barely changes with rates.",
        },
        {
          setup: 'Rates rise sharply.',
          left: { label: 'Banks', sublabel: 'lending spread widens' },
          right: { label: 'Real estate', sublabel: 'mortgage costs spike' },
          correct: 'right',
          flash: 'Banks actually BENEFIT from higher rates (wider lending margins). Real estate gets crushed — higher mortgages kill affordability and cool demand.',
        },
        {
          setup: 'Rates rise sharply.',
          left: { label: 'Consumer staples', sublabel: 'toothpaste, food, soap' },
          right: { label: 'Consumer discretionary', sublabel: 'restaurants, vacations, luxury' },
          correct: 'right',
          flash: "People always buy toothpaste. But higher rates mean higher mortgage payments, which means less money for dining out. Discretionary spending gets cut first.",
        },
        {
          setup: 'Rates rise sharply.',
          left: { label: 'Energy', sublabel: 'driven by oil supply/demand' },
          right: { label: 'Growth stocks', sublabel: 'priced on future earnings' },
          correct: 'right',
          flash: 'Energy stocks follow oil prices, not interest rates. Growth stocks are directly hurt because their value depends on distant future earnings that get discounted more heavily.',
        },
        {
          setup: 'Rates rise sharply.',
          left: { label: 'Healthcare', sublabel: 'people always get sick' },
          right: { label: 'Homebuilders', sublabel: 'sell big-ticket items on credit' },
          correct: 'right',
          flash: 'Homes are the largest purchase most people finance. A 2% rate increase can add $500+/month to a mortgage payment. Homebuilders feel the pain immediately.',
        },
        {
          setup: 'Rates rise sharply.',
          left: { label: 'REITs', sublabel: 'real estate investment trusts' },
          right: { label: 'Insurance companies', sublabel: 'invest premiums in bonds' },
          correct: 'left',
          flash: 'REITs use heavy leverage to buy property — higher rates increase their borrowing costs directly. Insurance companies actually benefit because their bond portfolios earn more.',
        },
      ],
      takeaway:
        "Macro forces don't hit all stocks equally. Rate-sensitive sectors (real estate, growth tech, homebuilders) swing hard. Defensive sectors (utilities, staples, healthcare) barely budge. Know your portfolio's rate sensitivity.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Estimate: inflation's hidden tax
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: "Inflation's Hidden Tax",
      topicIcon: DollarSign,
      context:
        'Your portfolio returned 10% this year — congratulations. But inflation ran at 6%. Everything you buy now costs 6% more than a year ago.',
      question: "What's your REAL return — the actual increase in purchasing power?",
      answer: 4,
      tolerance: 1,
      unit: '%',
      hint: 'nominal return − inflation rate',
      reveal:
        "Your portfolio grew 10%, but everything costs 6% more. Your real purchasing power only grew 4%. This is why investors obsess over 'real returns' — a 10% gain with 8% inflation is worse than a 5% gain with 1% inflation.",
      takeaway:
        "Inflation is a silent tax on every investor. Always subtract inflation from your returns to see what you actually gained in purchasing power.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: thinking like a macro-aware investor
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Macro-Aware Investor',
      topicIcon: Target,
      context:
        "The Fed has raised rates 8 times over 18 months. Your growth stock portfolio is down 25%. But inflation is finally cooling — from 7% to 3%. The job market is still strong. Headlines are full of doom.",
      question: "What's the smartest move?",
      options: [
        'Sell everything — rates are destroying stocks',
        'Hold and add — rate hikes are nearly over, and growth stocks rebound when tightening ends',
        'Switch entirely to bonds — they finally pay 5%',
        "Wait for rates to drop before buying anything",
      ],
      correctIndex: 1,
      punchline:
        "Markets are forward-looking. By the time rates actually drop, stocks have already priced in the pivot. The best time to buy is when everyone fears the current cycle — not after it's over. Cooling inflation + strong jobs + peak rates = the setup for a recovery.",
      wrongNudges: [
        'Selling after a 25% drop locks in losses. If the businesses are sound and rates are peaking, you\'re selling at the worst possible time.',
        '',
        'Switching to bonds after rates have already risen means you missed the best entry. And when rates eventually fall, bond yields drop too — while stocks typically surge.',
        "Waiting for certainty means buying after the recovery has started. Markets don't wait for an all-clear signal — they move 6-12 months ahead of the economy.",
      ],
      takeaway:
        "Markets fall before rate hikes start and recover before rate cuts arrive. By the time you hear the good news, it's already in the price.",
    },
  ],
  takeaways: [
    "Interest rates are the gravity of the stock market — when rates rise, valuations fall because future earnings are worth less today.",
    "Inflation is a hidden tax. A 10% portfolio gain with 6% inflation is only 4% in real purchasing power.",
    "The Fed controls short-term rates to manage inflation. Their decisions ripple through every asset class — stocks, bonds, real estate, savings.",
    "Markets are forward-looking: they fall before rate hikes start and recover before rate cuts arrive. By the time you hear the news, it's already in the price.",
  ],
  completionMessages: {
    perfect:
      'You now understand the force that moves entire markets. Most retail investors ignore macro — you won\'t make that mistake.',
    great:
      'Strong grasp of how the economy shapes stock prices. This context will make every company analysis sharper.',
    good:
      'Good start. Interest rates and inflation come up in every market cycle — this foundation will keep building.',
    low:
      'Worth another look. Macro forces affect every stock you\'ll ever own — understanding them is essential.',
  },
};
