import { ShieldAlert, Target, TrendingUp, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsRiskLesson: Lesson = {
  id: 'foundations-risk',
  emoji: '🎲',
  title: 'Risk Is Not a Feeling',
  subtitle: 'How to think about what could go wrong — before it does',
  description:
    "Most people think risk means \"the stock might go down.\" But real risk is about permanent loss, concentration, and not getting paid enough for the danger you\'re taking. This lesson teaches you to measure risk, not just feel it — and to demand a higher return when you take more of it.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk', 'behavioral_biases'],
  keyFacts: [],
  topics: [
    { label: 'Why volatility and risk are not the same thing', icon: ShieldAlert },
    { label: 'Concentration risk — when one bet can sink you', icon: Target },
    { label: 'Risk-reward: getting paid for the danger you take', icon: TrendingUp },
    { label: 'Diversification — the only free lunch in investing', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: what is risk?
    //
    // Why a decide first: most beginners equate risk with price
    // drops. The opening reframe is critical.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Defining Risk',
      topicIcon: ShieldAlert,
      context:
        'Stock A dropped 30% in a month during a market panic, then recovered fully within a year. You didn\'t sell.\n\nStock B dropped 30% because the company\'s product became obsolete. It never recovered. The company went bankrupt two years later.\n\nBoth stocks "dropped 30%." But one was a temporary price swing. The other was permanent loss of capital.',
      question: 'Which situation represents real investment risk?',
      options: [
        'Both — any time a stock drops 30%, that\'s risk',
        'Stock B — real risk is permanent loss of capital, not temporary price swings. Stock A\'s drop was volatility, not risk',
        'Stock A — the 30% drop was scarier because it happened faster',
        'Neither — if you\'re a long-term investor, drops don\'t matter',
      ],
      correctIndex: 1,
      punchline:
        'Volatility is your stock going down and coming back. Risk is your stock going down and never coming back. They\'re different because volatility is temporary — healthy businesses recover from panics since their earnings power is intact. Risk is permanent because the earnings power itself is destroyed. Professional investors obsess over permanent loss, not price swings.',
      wrongNudges: [
        'A temporary dip you sit through isn\'t a loss — it\'s noise. The 30% drop in Stock A was unpleasant, but your wealth was fully restored. Stock B destroyed real money permanently.',
        '',
        'Speed of decline doesn\'t determine risk. A fast 30% drop that recovers is less dangerous than a slow 30% decline caused by a dying business. What matters is whether the value comes back.',
        'Drops absolutely matter — but which kind? A stock that drops because of panic and recovers is very different from a stock that drops because the business is dying. Ignoring all drops is as dangerous as fearing all of them.',
      ],
      takeaway: 'Real risk is permanent loss of capital — not temporary price swings. Learning to tell the difference between volatility (temporary) and fundamental decline (permanent) is one of the most important investing skills.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: risky or just volatile?
    //
    // Why a drill: the user needs to instantly classify events as
    // temporary volatility vs. permanent risk.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risky or Volatile?',
      topicIcon: Zap,
      intro: 'Each scenario involves a stock dropping. Is this temporary volatility or genuine risk of permanent loss?',
      prompts: [
        {
          setup: 'Apple drops 20% during a broad market sell-off. No change to the business.',
          left: { label: 'Volatility', sublabel: 'temporary, business is fine' },
          right: { label: 'Real risk', sublabel: 'permanent loss likely' },
          correct: 'left',
          flash: 'Market sell-offs hit everything — even great businesses. If Apple\'s products, margins, and cash flow haven\'t changed, the drop is noise. This is volatility, not risk.',
        },
        {
          setup: 'A retailer\'s main product is banned by regulators. Revenue will drop 60%.',
          left: { label: 'Volatility' },
          right: { label: 'Real risk', sublabel: 'business fundamentally damaged' },
          correct: 'right',
          flash: 'A regulatory ban is permanent damage to the business. Revenue won\'t bounce back from a product ban. This is real risk — potential permanent loss of capital.',
        },
        {
          setup: 'NVIDIA drops 15% after earnings, despite beating expectations. Market rotation.',
          left: { label: 'Volatility', sublabel: 'market sentiment shift' },
          right: { label: 'Real risk' },
          correct: 'left',
          flash: 'The business beat expectations. The drop is driven by money rotating to other sectors — not by anything wrong with NVIDIA. Sentiment-driven drops are volatility.',
        },
        {
          setup: 'A bank loses 40% of its deposits in a week as customers panic and withdraw.',
          left: { label: 'Volatility' },
          right: { label: 'Real risk', sublabel: 'existential threat' },
          correct: 'right',
          flash: 'A bank run is existential. Banks use deposits to fund loans — if deposits vanish, the bank can\'t operate. This isn\'t a price swing. It\'s the business model collapsing.',
        },
        {
          setup: 'Tesla drops 10% after Elon Musk tweets something controversial. Business unchanged.',
          left: { label: 'Volatility', sublabel: 'news-driven noise' },
          right: { label: 'Real risk' },
          correct: 'left',
          flash: 'Tweet-driven drops with no business impact are textbook volatility. The factories still run, deliveries still happen, margins haven\'t changed. Noise.',
        },
        {
          setup: 'A pharma company\'s only drug fails clinical trials. No other drugs in the pipeline.',
          left: { label: 'Volatility' },
          right: { label: 'Real risk', sublabel: 'zero revenue ahead' },
          correct: 'right',
          flash: 'A one-drug company with a failed trial is facing potential bankruptcy. No drug = no revenue = no business. This is the definition of permanent capital loss.',
        },
      ],
      takeaway: 'Ask two questions: (1) Is the business itself damaged, or just the stock price? (2) Can the situation reverse? If the business is fine, it\'s volatility. If the business is broken, it\'s risk.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: concentration risk
    //
    // Why an estimate: makes concentration risk concrete by
    // calculating how a single stock crashing affects a portfolio.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Concentration Risk',
      topicIcon: Calculator,
      context:
        'Two investors each have $100,000:\n\nInvestor A: 50% in one stock, 50% in an index fund\nInvestor B: 10% in five individual stocks, 50% in an index fund\n\nThe single stock that Investor A holds 50% in drops 60% (a real risk event — the business is failing). Everything else stays flat.\n\nInvestor A\'s loss: 50% × 60% = 30% of total portfolio → loses $30,000\nInvestor B holds the same failing stock — but at 10%, not 50%.',
      question: 'How much does Investor B lose from the same stock crashing 60%?',
      answer: 6000,
      tolerance: 500,
      unit: '$',
      hint: '10% × 60% of $100,000',
      reveal:
        '10% × 60% = 6% of portfolio → $6,000 lost. Same stock, same crash — but Investor B loses $6,000 while Investor A loses $30,000. The difference is concentration. One investor bet 50% on a single stock; the other bet 10%. Diversification doesn\'t prevent losses — it prevents one bad bet from destroying your portfolio.',
      takeaway: 'Concentration amplifies both gains and losses. The more you concentrate in one stock, the more that single stock controls your financial outcome. Diversification is damage control.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the hidden risks
    //
    // Why a tap: teaches the user to read a stock pitch and
    // identify risks that aren't being highlighted.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Hidden Risks',
      topicIcon: Flag,
      intro: 'A friend pitches you on a "can\'t miss" investment. Tap the details that represent real risk.',
      passage: [
        { type: 'text', value: '"You need to buy this stock. ' },
        {
          type: 'chip',
          value: 'It\'s up 200% in the last year',
          signal: false,
          feedback: 'Past performance isn\'t a risk — but it\'s not a reason to buy either. A stock up 200% means expectations are extremely high. The risk is in what happens if it doesn\'t keep performing.',
        },
        { type: 'text', value: '. The company is ' },
        {
          type: 'chip',
          value: 'growing revenue 50% a year with a single product',
          signal: true,
          feedback: 'Single-product risk. 100% of revenue depends on one thing succeeding. If demand slows, regulation hits, or a competitor undercuts them, there\'s no backup. Diversified companies survive individual product failures — single-product companies don\'t.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Their CEO is a visionary who promises 10x growth in 5 years',
          signal: true,
          feedback: 'Executive promises are not financial analysis. "Visionary CEO" and "10x growth" are narratives, not evidence. Many promising companies have charismatic leaders and ambitious projections. The question is whether the numbers support the story.',
        },
        { type: 'text', value: '. I\'m putting ' },
        {
          type: 'chip',
          value: '70% of my savings into it',
          signal: true,
          feedback: 'Extreme concentration risk. 70% of savings in a single stock means one bad outcome destroys the majority of their wealth. Even if the thesis is right, the position size is dangerous.',
        },
        { type: 'text', value: '. The company ' },
        {
          type: 'chip',
          value: 'has $2B in revenue and a market cap of $200B — a 100x revenue multiple',
          signal: true,
          feedback: 'A 100x revenue multiple means the market expects this to become a massive company. If growth slows from 50% to 20%, the stock could drop 50%+ as the multiple compresses. The higher the valuation, the more things must go perfectly right.',
        },
        { type: 'text', value: '. What could go wrong?"' },
      ],
      requiredSignals: 3,
      reveal:
        'The pitch hits every red flag: single-product dependency, narrative-driven reasoning, extreme concentration, and a sky-high valuation. Individually, each risk is manageable. Combined, they create a fragile setup where one negative surprise can cause massive losses. Smart investors don\'t avoid risk — they make sure they\'re being compensated for it.',
      takeaway: 'Risk comes in layers: product concentration, position size, valuation, and narrative dependence. The danger isn\'t any single risk — it\'s when multiple risks stack on top of each other.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: risk-reward tradeoff
    //
    // Why a decide: forces the user to weigh risk against potential
    // return — the core judgment in all investing.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Risk-Reward Tradeoff',
      topicIcon: Lightbulb,
      context:
        'You\'re choosing between two investments:\n\nInvestment A: Expected return 8%/year. Blue-chip company, diversified business, 20x P/E, consistent earnings for 20 years. Risk of permanent loss: very low.\n\nInvestment B: Expected return 10%/year. Single-product company, 80x P/E, 3 years of history, CEO makes bold promises. Risk of permanent loss: moderate.\n\nInvestment B offers 2% more per year — but with significantly more risk.',
      question: 'Which is the better risk-adjusted investment?',
      options: [
        'Investment B — 10% beats 8%, higher returns always win',
        'Investment A — 8% return with very low risk of permanent loss is a better deal than 10% with moderate risk. The extra 2% doesn\'t compensate for the additional danger',
        'They\'re equal — 2% extra return exactly compensates for the extra risk',
        'Can\'t evaluate without more data',
      ],
      correctIndex: 1,
      punchline:
        'A 2% premium for going from "very low risk" to "moderate risk of permanent loss" is a bad deal. Professional investors typically demand at least 5-10% extra annual return for taking real risk of permanent loss. If a risky investment doesn\'t offer dramatically higher expected returns, you\'re taking danger without being paid for it.',
      wrongNudges: [
        'Raw return ignores what you could lose. An investment that returns 10% most years but goes to zero 10% of the time has a negative expected outcome. Return without risk context is meaningless.',
        '',
        'Risk pricing is subjective, but going from "very low" to "moderate" risk of permanent loss for just 2% extra return is widely considered inadequate compensation. Most professional frameworks would require at least 5-10% premium.',
        'You have enough data to make a judgment. The risk profile (single product, short history, sky-high valuation) vs. the risk premium (just 2%) is the key comparison.',
      ],
      takeaway: 'Never take extra risk without extra reward. If a risky investment doesn\'t offer significantly higher returns than a safe one, you\'re paying for danger and getting a discount. Demand a premium proportional to the risk.',
    },
  ],
  takeaways: [
    'Risk is permanent loss of capital, not temporary price drops. Volatility (stock goes down and recovers) and risk (stock goes down and never recovers) feel the same but are fundamentally different.',
    'Concentration amplifies everything. Putting 50% in one stock means that one stock controls your financial future. Diversification doesn\'t prevent losses — it prevents catastrophic ones.',
    'Risk comes in layers: product dependency, position size, valuation, and narrative dependence. The danger multiplies when risks stack.',
    'Never take risk without reward. If a risky investment offers only slightly higher returns than a safe one, the risk isn\'t worth taking.',
    'You can separate volatility from real risk. Next: when borrowing money makes a business stronger — and when it kills one.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand risk the way professionals do — not as a feeling, but as something you measure, manage, and demand compensation for.',
    great: 'Strong work. Most investors learn risk management the hard way — by losing money. You\'re learning it the smart way.',
    good: 'Good foundation. Risk assessment is a skill that improves with practice. Apply these principles to every investment you evaluate.',
    low: 'Worth revisiting. Risk management is arguably the single most important investing skill. The best returns mean nothing if one bad bet wipes them out.',
  },
};
