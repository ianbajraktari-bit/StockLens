import { PieChart, ShieldAlert, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsPortfolioLesson: Lesson = {
  id: 'foundations-portfolio',
  emoji: '🧩',
  title: 'Building a Portfolio',
  subtitle: 'How many stocks, how much in each, and the traps hiding in "diversified"',
  description:
    "You know how to analyze a single stock. But investing isn't about one stock — it's about how you combine them. This lesson teaches position sizing, real diversification vs. fake diversification, and how to build a portfolio that survives your worst pick going to zero.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk'],
  keyFacts: [],
  topics: [
    { label: 'Why your portfolio matters more than any single pick', icon: PieChart },
    { label: 'Position sizing — how much to put in each stock', icon: Calculator },
    { label: 'Real vs. fake diversification', icon: ShieldAlert },
    { label: 'The practical starting point for beginners', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: why portfolios matter
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Why Portfolios Matter',
      topicIcon: PieChart,
      context:
        'Two investors each have $10,000 and both pick the same 5 stocks. One of the five stocks crashes 80% (the company was a fraud).\n\nInvestor A put $2,000 in each stock (20% each).\nLoss from the crash: 20% × 80% = 16% of total portfolio. They still have $8,400.\n\nInvestor B put $6,000 in the "best" stock and $1,000 in each of the others.\nThe crashed stock was their "best" pick — the $6,000 one.\nLoss: 60% × 80% = 48% of total portfolio. They have $5,200.',
      question: 'What\'s the key lesson from this comparison?',
      options: [
        'Don\'t invest in fraudulent companies — that\'s the real problem',
        'How you size your positions matters as much as which stocks you pick. Investor A survived the same fraud because no single bet was big enough to sink them',
        'Put equal amounts in everything — always do 20% per stock',
        'Only invest in one or two stocks you know really well',
      ],
      correctIndex: 1,
      punchline:
        'Both investors picked the same stocks — including the same fraud. The difference was position sizing. Investor A lost 16% and can recover. Investor B lost 48% and needs the remaining stocks to nearly double just to break even. Your portfolio structure is your defense against being wrong.',
      wrongNudges: [
        'You can\'t always detect fraud in advance — Enron, Wirecard, and FTX fooled professional investors. You need a portfolio structure that survives the things you can\'t predict.',
        '',
        'Equal weighting is one approach, but it\'s not always optimal. The principle is deeper: no single position should be large enough to cripple your portfolio if it goes to zero.',
        'Concentrated portfolios amplify both gains and losses. If your one stock is a winner, great. If it\'s a fraud, you lose everything. That\'s not investing — it\'s gambling on your ability to never be wrong.',
      ],
      takeaway: 'Position sizing is your most important risk management tool. It determines how much damage your worst mistake can do. The goal: survive being wrong about any single stock.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: real vs. fake diversification
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Real vs. Fake Diversification',
      topicIcon: Zap,
      intro: 'Diversification means your stocks don\'t all move together. Classify each portfolio as truly diversified or only diversified on the surface.',
      prompts: [
        {
          setup: 'Portfolio: Apple, Microsoft, NVIDIA, Google, Meta — five stocks across "big tech."',
          left: { label: 'Truly diversified', sublabel: '5 different companies' },
          right: { label: 'Fake diversification', sublabel: 'all move together' },
          correct: 'right',
          flash: 'Five tech stocks = one bet on the tech sector with high correlation — how closely two investments move together. When tech sells off (2022: all five dropped 25-65%), your "diversified" portfolio drops with it. High correlation means they rise and fall in sync, providing less protection.',
        },
        {
          setup: 'Portfolio: Apple (tech), JPMorgan (banking), Johnson & Johnson (healthcare), Costco (retail), NextEra (energy).',
          left: { label: 'Truly diversified', sublabel: 'different sectors' },
          right: { label: 'Fake diversification' },
          correct: 'left',
          flash: 'Five different sectors means five different risk drivers. A tech sell-off doesn\'t crash your healthcare or energy stocks. When one sector is down, another is often up. This is real diversification.',
        },
        {
          setup: 'Portfolio: S&P 500 index fund (holds 500 stocks) — just one fund.',
          left: { label: 'Truly diversified', sublabel: '500 stocks inside' },
          right: { label: 'Fake diversification', sublabel: 'just one holding' },
          correct: 'left',
          flash: 'An S&P 500 index fund holds 500 companies across every sector. One fund, but 500 underlying bets. You\'re diversified across tech, healthcare, finance, energy, consumer goods — the whole economy.',
        },
        {
          setup: 'Portfolio: S&P 500 index fund + individual positions in Apple, Microsoft, and NVIDIA.',
          left: { label: 'Truly diversified' },
          right: { label: 'Hidden overlap', sublabel: 'double-counting exposure' },
          correct: 'right',
          flash: 'Apple, Microsoft, and NVIDIA are already the three largest holdings in the S&P 500 (~20% combined). Buying them individually on top of the index means you\'re double-exposed — a tech crash hits you twice.',
        },
        {
          setup: 'Portfolio: 3 oil companies (Exxon, Chevron, Shell) — "diversified across countries."',
          left: { label: 'Truly diversified' },
          right: { label: 'Fake diversification', sublabel: 'one commodity drives all three' },
          correct: 'right',
          flash: 'All three companies rise and fall with the price of oil. When oil drops, all three drop — regardless of which country they\'re headquartered in. Same industry = same risk, no matter how many companies you own.',
        },
      ],
      takeaway: 'Real diversification means owning stocks that don\'t all move together. Five tech stocks isn\'t diversified. One index fund holding 500 companies across all sectors is. Diversification is about different risk drivers, not different company names.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: position sizing math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Position Sizing',
      topicIcon: Calculator,
      context:
        'Rule of thumb: no single stock should be more than 5-10% of your portfolio. This limits the damage from any one stock failing.\n\nYou have $20,000 to invest. Your highest-conviction pick is a stock you\'ve researched thoroughly — you size it at 10% ($2,000). That stock unexpectedly drops 50% (bad earnings, management scandal, etc.).\n\nLoss on that position: $2,000 × 50% = $1,000\nLoss as % of total portfolio: $1,000 ÷ $20,000',
      question: 'What percentage of your total portfolio did you lose?',
      answer: 5,
      tolerance: 1,
      unit: '%',
      hint: '$1,000 ÷ $20,000 × 100',
      reveal:
        '$1,000 ÷ $20,000 = 5% portfolio loss. Your best idea dropped 50% — a devastating single-stock move — and your portfolio only lost 5%. That\'s survivable. Now imagine the same stock at 40% of your portfolio: $8,000 × 50% = $4,000 loss = 20% of everything. Position sizing is the difference between a setback and a disaster.',
      takeaway: 'At 10% position size, even a 50% stock crash only costs you 5% of your portfolio. At 40% position size, the same crash costs 20%. Position sizing turns catastrophic single-stock events into manageable portfolio dents.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the portfolio red flags
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Hidden Concentration',
      topicIcon: Flag,
      intro: 'A friend describes their portfolio. Tap the details that represent hidden risk.',
      passage: [
        { type: 'text', value: '"I\'ve built a really diversified portfolio. I own ' },
        {
          type: 'chip',
          value: 'an S&P 500 index fund as my core holding — about 60% of my portfolio',
          signal: false,
          feedback: 'Great foundation. An S&P 500 fund gives you 500 companies across all sectors. 60% in a broad index is a solid, diversified core position.',
        },
        { type: 'text', value: '. Then I have ' },
        {
          type: 'chip',
          value: '15% in a tech-focused ETF that holds NVIDIA, AMD, Microsoft, and Meta',
          signal: true,
          feedback: 'Hidden overlap. The S&P 500 is already ~30% tech stocks. Adding a 15% tech ETF on top means your true tech exposure is closer to 33% (18% from S&P + 15% direct). You\'re more concentrated in tech than you realize.',
        },
        { type: 'text', value: '. I also put ' },
        {
          type: 'chip',
          value: '10% in Tesla because I love the company',
          signal: true,
          feedback: 'Emotional position sizing. "I love the company" isn\'t an investment thesis — it\'s a feeling. Tesla is also already in the S&P 500 fund, so you have double exposure. And 10% in a single volatile stock is a large bet.',
        },
        { type: 'text', value: '. And ' },
        {
          type: 'chip',
          value: '10% in an international developed markets fund',
          signal: false,
          feedback: 'Smart addition. International stocks don\'t always move with US stocks, adding genuine diversification. Geographic diversification is one of the most reliable risk reducers.',
        },
        { type: 'text', value: '. The last ' },
        {
          type: 'chip',
          value: '5% is in a cryptocurrency because it\'s uncorrelated with stocks',
          signal: true,
          feedback: 'Crypto has actually been highly correlated with tech stocks since 2020 — they tend to drop together during sell-offs. "Uncorrelated" is what crypto was supposed to be, not what it actually is. This adds more tech-adjacent risk, not diversification.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'This "diversified" portfolio has hidden concentration everywhere: the S&P 500 is already tech-heavy, the tech ETF doubles down, Tesla triples down on a single name, and crypto correlates with tech. True tech exposure is probably 40%+ of the portfolio. The friend thinks they\'re diversified across 5 holdings — but one tech sell-off would hit 4 of the 5.',
      takeaway: 'Always look through your holdings to see true exposure. An index fund + a sector ETF + individual stocks in the same sector = hidden concentration. Real diversification requires different risk drivers, not just different funds.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: where to actually start
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Starting Point',
      topicIcon: Lightbulb,
      context:
        'You\'ve completed all the foundations lessons. You understand revenue, margins, moats, valuation, and risk. Now you want to actually invest. You have $5,000.\n\nOption A: Put it all in individual stocks you\'ve analyzed\nOption B: Put it all in a broad index fund (S&P 500)\nOption C: 80% in a broad index fund, 20% ($1,000) in 2-3 individual stocks you\'ve analyzed',
      question: 'What\'s the best starting approach?',
      options: [
        'Option A — you\'ve learned the skills, put them to work on individual stocks',
        'Option B — index funds beat most professionals, so just index everything',
        'Option C — index fund as your foundation (you participate in the whole market\'s growth), small individual positions as your education (you practice real analysis with real stakes, but limited downside)',
        'Wait until you have more money — $5,000 isn\'t enough to invest',
      ],
      correctIndex: 2,
      punchline:
        'The 80/20 approach gives you the best of both worlds: the index fund ensures your wealth grows with the market even if your stock picks are wrong. The individual positions (2-3 stocks at $300-500 each) are where you apply everything you\'ve learned — with real money, which focuses the mind, but limited risk if you\'re wrong.',
      wrongNudges: [
        'Going 100% individual stocks as a beginner means your entire portfolio depends on your unproven stock-picking skill. Even experienced professionals underperform the market most years. Start with a foundation of guaranteed market participation.',
        'Pure indexing works — but you never develop the analysis skills to go beyond average returns. The individual positions aren\'t about beating the market immediately — they\'re about learning with real stakes.',
        '',
        '$5,000 is plenty. With zero-commission brokers and fractional shares, you can buy $100 worth of any stock. Waiting for "enough money" is a form of inaction bias — the best time to start learning is now, with whatever you have.',
      ],
      takeaway: 'Start with a broad index fund as your foundation — it ensures you participate in market growth. Add 2-3 individual stocks as small positions to practice real analysis. The index protects you while you learn.',
    },
  ],
  takeaways: [
    'Position sizing is your most important risk tool. No single stock should be more than 5-10% of your portfolio. This ensures your worst pick can\'t destroy your wealth.',
    'Real diversification means owning stocks that don\'t all move together. Five tech stocks isn\'t diversified — five stocks across different sectors is. Different risk drivers, not different names.',
    'Watch for hidden concentration: index funds already hold the biggest tech stocks. Adding tech ETFs and individual tech stocks on top creates far more exposure than you realize.',
    'The best starting portfolio: 80% broad index fund (guaranteed market participation) + 20% in 2-3 individual stocks (practice analysis with real but limited stakes).',
    'You can build a portfolio. Next: how to read an earnings report in 10 minutes — the 5 numbers that tell 80% of the story.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand the architecture of a real portfolio — not just which stocks to pick, but how to combine them safely.',
    great: 'Strong work. Portfolio construction is what separates hobbyist stock-pickers from real investors. You\'re thinking like an investor now.',
    good: 'Good foundation. Position sizing and real diversification will protect you from the inevitable mistakes every investor makes.',
    low: 'Worth revisiting. The best stock analysis in the world can\'t save you from a badly constructed portfolio. This lesson is critical.',
  },
};
