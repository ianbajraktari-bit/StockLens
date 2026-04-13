import { DollarSign, Scale, TrendingUp, ShieldAlert, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsValuationLesson: Lesson = {
  id: 'foundations-valuation',
  emoji: '⚖️',
  title: 'What Is a Stock Worth?',
  subtitle: 'P/E ratios, multiples, and why price alone means nothing',
  description:
    "A stock costs $200. Is that expensive or cheap? You literally cannot answer that question without knowing how much profit the business makes. This lesson teaches you the tool investors use to answer it: the price-to-earnings ratio. By the end, you'll know why a $200 stock can be cheaper than a $20 one.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation'],
  keyFacts: [],
  topics: [
    { label: 'Why stock price alone tells you nothing', icon: DollarSign },
    { label: 'The P/E ratio — the investor\'s price tag', icon: Scale },
    { label: 'What "expensive" and "cheap" actually mean', icon: TrendingUp },
    { label: 'When paying a premium makes sense', icon: ShieldAlert },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: The price trap
    //
    // Why a decide first: this lesson's key insight is counterintuitive.
    // Starting with the wrong instinct makes the correction stick.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Price Trap',
      topicIcon: DollarSign,
      context:
        'Two stocks:\n\nStock A costs $300 per share.\nStock B costs $15 per share.\n\nYou have no other information.',
      question: 'Which stock is cheaper?',
      options: [
        'Stock B — $15 is obviously cheaper than $300',
        'You can\'t tell — share price alone doesn\'t tell you if a stock is expensive or cheap',
        'Stock A — expensive stocks are usually better companies',
        'They\'re the same — price doesn\'t matter',
      ],
      correctIndex: 1,
      punchline:
        'A $300 stock that earns $30/share is "cheaper" than a $15 stock that earns $0.50/share. Price without profit is meaningless. You need to know what you\'re getting for your money.',
      wrongNudges: [
        'A pizza slice for $15 seems cheap, but what if it\'s just a crouton? And a $300 meal seems expensive — but what if it feeds 30 people? Price means nothing without knowing what you get.',
        '',
        'Expensive share prices don\'t indicate quality. Amazon at $3,000/share and a penny stock at $0.05 can both be terrible investments. Price is just a number until you compare it to earnings.',
        'Price absolutely matters — but only relative to what the business earns. Two stocks at the same price can be wildly different values.',
      ],
      takeaway: 'Stock price alone is meaningless. A $300 stock can be a bargain. A $15 stock can be a ripoff. You need a way to compare price to what you\'re actually getting.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Calculate a P/E ratio
    //
    // Why an estimate: the user must do the math themselves. P/E is
    // the single most important valuation tool.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Investor\'s Price Tag',
      topicIcon: Calculator,
      context:
        'Company A\'s stock costs $150 per share. The company earns $10 per share in annual profit (earnings per share).\n\nThe Price-to-Earnings ratio (P/E) tells you: for every $1 of annual profit, how many dollars are investors paying?\n\nFormula: P/E = Stock Price ÷ Earnings Per Share',
      question: 'What is Company A\'s P/E ratio?',
      answer: 15,
      tolerance: 1,
      unit: 'x',
      hint: '$150 ÷ $10',
      reveal:
        '$150 ÷ $10 = 15x. Investors are paying $15 for every $1 of annual profit. Another way to read it: if earnings stayed flat, it would take 15 years of profit to "pay back" the stock price. A P/E of 15x is roughly average for the US stock market.',
      takeaway: 'P/E = Price ÷ Earnings. It tells you how many dollars you\'re paying for each dollar of profit. The average US stock trades at roughly 15–20x.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Drill: Which stock is actually cheaper?
    //
    // Why a drill: after learning the formula, the user needs to
    // build instant intuition for comparing P/E ratios. This IS
    // pattern recognition — the core use case for drills.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Cheap vs. Expensive',
      topicIcon: Zap,
      intro: 'Two stocks each round. Tap the one that\'s actually cheaper (lower P/E).',
      prompts: [
        {
          setup: 'Which is cheaper?',
          left: { label: 'Stock A', sublabel: '$100 price, $5 EPS → 20x P/E' },
          right: { label: 'Stock B', sublabel: '$400 price, $40 EPS → 10x P/E' },
          correct: 'right',
          flash: 'Stock B costs 4x more per share but is half the price relative to earnings. $400 at 10x beats $100 at 20x.',
        },
        {
          setup: 'Which is cheaper?',
          left: { label: 'Stock C', sublabel: '$50 price, $2 EPS → 25x P/E' },
          right: { label: 'Stock D', sublabel: '$200 price, $13 EPS → ~15x P/E' },
          correct: 'right',
          flash: '15x vs 25x. The $200 stock gives you more profit per dollar invested. Don\'t be fooled by the share price.',
        },
        {
          setup: 'Which is more expensive?',
          left: { label: 'A retailer', sublabel: '22x P/E, growing 5%/year' },
          right: { label: 'A tech company', sublabel: '40x P/E, growing 30%/year' },
          correct: 'right',
          flash: '40x is higher than 22x — but the tech company grows 6x faster. Expensive might be justified. That\'s the next question.',
        },
        {
          setup: 'The S&P 500 average P/E is ~20x. Which is trading at a discount?',
          left: { label: 'Company E at 12x' },
          right: { label: 'Company F at 28x' },
          correct: 'left',
          flash: '12x is below the market average. Either investors see problems — or they\'re missing something. Both deserve investigation.',
        },
      ],
      takeaway:
        'Share price tells you nothing. P/E tells you everything. A $400 stock at 10x is cheaper than a $50 stock at 25x.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Estimate: What a high P/E actually demands
    //
    // Why an estimate: forces the user to do the math on what growth
    // assumptions are embedded in a P/E ratio. This connects valuation
    // to expectations — the concept company lessons depend on.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'What Expectations Look Like',
      topicIcon: Calculator,
      context:
        'Two companies both earn $5/share right now:\n\nSteady Corp trades at 15x ($75/share) — investors expect modest growth.\nRocket Inc trades at 40x ($200/share) — investors expect rapid growth.\n\nFor Rocket\'s stock price to "make sense," its earnings need to grow until its current P/E comes down to market average. If Rocket needs to grow into a 15x P/E from 40x, its earnings must increase from $5 to some higher number.',
      question: 'Rocket trades at $200. At 15x, what EPS does it need to justify that price? ($200 ÷ 15)',
      answer: 13,
      tolerance: 1,
      unit: '$',
      hint: '$200 ÷ 15x',
      reveal:
        '$200 ÷ 15 = ~$13.30. Rocket needs to nearly triple its earnings from $5 to $13+ just to justify today\'s price at a normal multiple. If that growth doesn\'t happen, the stock crashes — not because the business failed, but because it didn\'t live up to what the price assumed. This is what investors mean by "priced for perfection."',
      takeaway: 'A high P/E is a bet on the future. The higher the multiple, the more growth must happen just to justify the current price. If growth disappoints, the stock falls even if the business is fine.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: Why a stock might deserve a premium
    //
    // Why a tap: the user needs to learn that "expensive" isn't
    // automatically bad. Some reasons for high P/E are valid, some
    // are noise. Tapping builds this filter.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Earned vs. Unearned Premiums',
      topicIcon: Flag,
      intro: 'A stock trades at 35x earnings — nearly double the market average. Tap the reasons that actually justify paying a premium.',
      passage: [
        { type: 'text', value: '"This company deserves 35x because it has ' },
        {
          type: 'chip',
          value: 'a well-known brand name',
          signal: false,
          feedback: 'Brand recognition alone doesn\'t justify a premium. Plenty of famous brands trade at average multiples. The question is whether the brand creates pricing power and recurring revenue.',
        },
        { type: 'text', value: ', ' },
        {
          type: 'chip',
          value: '90% recurring revenue with 95% renewal rates',
          signal: true,
          feedback: 'Highly predictable profit. When you can forecast next year\'s earnings with near-certainty, investors pay more — they\'re buying predictability.',
        },
        { type: 'text', value: ', and ' },
        {
          type: 'chip',
          value: 'the stock has gone up 200% in two years',
          signal: false,
          feedback: 'Past returns don\'t justify future premiums. A stock up 200% could still be cheap — or it could be a bubble. Past price movement is not a business quality.',
        },
        { type: 'text', value: '. The business has ' },
        {
          type: 'chip',
          value: 'profit margins double the industry average',
          signal: true,
          feedback: 'Superior margins usually signal a competitive advantage — the business keeps more of every dollar. That\'s a real reason to pay more.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: 'revenue growing 25% while competitors grow 5%',
          signal: true,
          feedback: 'Growing 5x faster than competitors suggests a structural advantage — not a one-time spike. Faster growth means earnings compound faster, making today\'s price look cheaper over time.',
        },
        { type: 'text', value: '. The CEO has ' },
        {
          type: 'chip',
          value: 'a large social media following',
          signal: false,
          feedback: 'CEO celebrity has zero correlation with business quality. Some of the best-run companies have CEOs nobody has heard of.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Three things can justify a premium: predictable revenue (recurring, high renewal), superior economics (margins above peers), and faster growth (compounding advantage). Brand fame, past returns, and CEO celebrity are distractions — they feel important but don\'t drive the math.',
      takeaway: 'A premium is justified by predictability, superior margins, or faster growth — not fame, hype, or past returns. When you see a high P/E, ask which of the three real reasons apply.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: Synthesis — cheap vs. expensive
    //
    // Why a decide: the final beat ties everything together. The user
    // must apply P/E thinking to a realistic scenario.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Putting It Together',
      topicIcon: Scale,
      context:
        'Two companies in the same industry:\n\nCompany X: P/E of 12x. Profit flat for 3 years. Losing market share to competitors. No competitive moat.\n\nCompany Y: P/E of 30x. Profit growing 20%/year. Dominant market position with high switching costs. 90% recurring revenue.',
      question: 'Which is the better value for a long-term investor?',
      options: [
        'Company X — 12x is half the price of 30x, so it\'s the better deal',
        'Company Y — the premium is justified by growth, dominance, and predictability, which will compound over time',
        'Neither — you should always buy the cheapest stock available',
        'Can\'t tell — you need to see the stock charts first',
      ],
      correctIndex: 1,
      punchline:
        'Cheap can be expensive and expensive can be cheap. At 12x with no growth and no moat, Company X\'s earnings may shrink — making 12x look generous in hindsight. At 30x with 20% growth, Company Y\'s earnings could double in under 4 years — making 30x look cheap in hindsight.',
      wrongNudges: [
        'A low P/E on a declining business isn\'t a bargain — it\'s a warning. If profits drop by half, that 12x suddenly becomes 24x on the new earnings. "Cheap" only stays cheap if the business holds up.',
        '',
        'Always buying the cheapest stock is like always buying the cheapest car. A $2,000 car that breaks down every month costs more than a $20,000 car that lasts 10 years. Value isn\'t just about price.',
        'Stock charts show what happened. They don\'t tell you what a business is worth. Every decision in this lesson was made with business fundamentals — not price history.',
      ],
      takeaway: '"Expensive" and "cheap" are relative to what you get. A high P/E on a compounding business can be the better deal. A low P/E on a declining business can be a trap. Always ask: what am I getting for the price?',
    },
  ],
  takeaways: [
    'Stock price alone is meaningless. Always compare price to earnings (profit per share).',
    'P/E = Price ÷ Earnings Per Share. It tells you how many dollars you pay for $1 of profit. The US average is roughly 15–20x.',
    'A high P/E is a bet on the future — the higher the multiple, the more growth must happen to justify the price.',
    'Premiums are justified by predictability, superior margins, or faster growth — not hype, fame, or past returns.',
    'You can calculate P/E ratios. Next: why a company can report record profits and still see its stock drop.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now have the tool that separates investors from speculators: comparing price to what you actually get.',
    great: 'Strong work. You understand that "expensive" and "cheap" have nothing to do with the share price.',
    good: 'Good foundation. P/E thinking will come up in every company lesson — this is the lens investors use.',
    low: 'Worth revisiting. P/E ratios are the most used tool in investing — this lesson is worth nailing before the company deep dives.',
  },
};
