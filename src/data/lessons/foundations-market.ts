import { Building2, TrendingUp, Users, Lightbulb, Zap, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMarketLesson: Lesson = {
  id: 'foundations-market',
  emoji: '📈',
  title: 'What Is the Stock Market?',
  subtitle: 'What you\'re actually buying — and why most people get it wrong',
  description:
    'Most people think stocks are just numbers on a screen that go up and down. They\'re not. This lesson rewires how you think about the stock market — from what ownership actually means to why a stock can drop 20% on great news.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['valuation'],
  keyFacts: [],
  topics: [
    { label: 'What a stock actually represents', icon: Building2 },
    { label: 'How shares, exchanges, and brokers work', icon: Users },
    { label: 'Why stock prices go up and down', icon: TrendingUp },
    { label: 'The difference between investing and gambling', icon: Lightbulb },
  ],
  steps: [
    // Hook with a real estimation that exposes ignorance
    {
      kind: 'estimate',
      topic: 'Reality Check',
      topicIcon: TrendingUp,
      context:
        'Before we get into theory, let\'s test your instincts. The S&P 500 is an index that tracks the 500 largest US companies — Apple, Google, Amazon, JPMorgan, and hundreds more. It\'s the most common benchmark for "how the stock market is doing."',
      question: 'Over the last 100 years, the S&P 500 has returned roughly what percent per year on average?',
      answer: 10,
      tolerance: 4,
      unit: '%',
      hint: 'Think about what you\'ve heard — is the market more like a savings account or a rocket ship?',
      reveal:
        'About 10% per year, on average. That means $10,000 invested in 1925 would be worth over $85 million today. Not because of luck or timing — because businesses generate real profits, and those profits compound. This is the single most important number in investing, and most people have never heard it.',
      takeaway: 'The stock market has returned ~10%/year for a century — not because of speculation, but because real businesses earn real profits that compound over time.',
    },

    // Reframe what ownership means
    {
      kind: 'decide',
      topic: 'What You\'re Actually Buying',
      topicIcon: Building2,
      context:
        'In January 2023, you could buy one share of Apple for about $130. Apple had roughly 15.8 billion shares outstanding. That means each share represented 1/15,800,000,000th of the company — its cash ($50B+), its brand, its patents, its stores, and its future profits.\n\nSome people saw AAPL going from $130 to $230 and thought "wow, the stock went up." But here\'s what actually happened: Apple earned $97 billion in profit that year. That profit belongs to shareholders — including you, if you owned even one share.',
      question: 'What\'s the most useful way to think about a share of stock?',
      options: [
        'A bet on whether the price will go up or down next week',
        'A tiny ownership stake in a real business — its assets, profits, and future',
        'A contract that guarantees you\'ll make money if you hold long enough',
        'A number on a screen that moves based on what traders are feeling',
      ],
      correctIndex: 1,
      punchline:
        'A share is literally a piece of a business. When Apple earns $6.13 per share in profit, that\'s YOUR $6.13 if you own one share. It\'s not a bet, not a guarantee, not a feeling. It\'s ownership — and ownership is what makes the stock market fundamentally different from a casino.',
      wrongNudges: [
        'This is how day traders think, and 80% of them lose money. Short-term price movements are noise. The signal is what the business actually earns.',
        '',
        'Nothing in investing is guaranteed. Apple could have a terrible year. What ownership gives you is a claim on profits — but only if the business keeps earning them.',
        'Prices do move on emotion short-term. But over years, they track earnings almost perfectly. The "number on a screen" is anchored to a real business underneath.',
      ],
      takeaway: 'Every share represents ownership of a real business. The stock price bounces around daily, but over years it follows earnings. Own the business, not the ticker.',
    },

    // Drill that escalates from easy to genuinely tricky
    {
      kind: 'drill',
      topic: 'Investor vs. Gambler',
      topicIcon: Zap,
      intro: 'Can you tell the difference between an investing decision and a gambling decision? These start easy and get harder.',
      prompts: [
        {
          setup: 'Person A buys an index fund that holds 500 companies and plans to hold for 20 years. Person B puts $5,000 on a single spin of roulette.',
          left: { label: 'A is investing', sublabel: 'diversified, long-term' },
          right: { label: 'B is investing', sublabel: 'risking real money' },
          correct: 'left',
          flash: 'Easy one. A owns 500 real businesses. B is betting on chance. Risk isn\'t what makes something gambling — it\'s whether the expected value is positive or negative.',
        },
        {
          setup: 'Person A reads Apple\'s financial reports, believes the stock is undervalued, and buys shares. Person B buys Apple because their coworker said "it\'s going to the moon."',
          left: { label: 'A is investing', sublabel: 'researched the business' },
          right: { label: 'Both are investing', sublabel: 'both bought the same stock' },
          correct: 'left',
          flash: 'Same stock, totally different decisions. A made an informed judgment about the business. B is gambling on someone else\'s hype. The quality of your reasoning matters, not just the outcome.',
        },
        {
          setup: 'A tech stock drops 30% after a bad earnings report. Person A sells immediately "before it drops more." Person B reads the report, decides the core business is fine, and buys more shares.',
          left: { label: 'A made the better call', sublabel: 'cut losses quickly' },
          right: { label: 'B made the better call', sublabel: 'bought the fear' },
          correct: 'right',
          flash: 'A reacted to price. B analyzed the business. Some of Warren Buffett\'s best investments came from buying great companies during panics. Price drops are information, not commands.',
        },
        {
          setup: 'Person A puts their entire savings into a single biotech stock because the drug in clinical trials "could be worth 100x." Person B puts 5% of their portfolio into the same stock after researching the drug\'s potential.',
          left: { label: 'A is smarter', sublabel: 'will make 100x if it works' },
          right: { label: 'B is smarter', sublabel: 'controlled the risk' },
          correct: 'right',
          flash: 'The drug might work. But "might" is doing a lot of work in A\'s plan. Position sizing is the difference between a calculated bet and a life-changing mistake. B can be right AND survive being wrong.',
        },
        {
          setup: 'Person A buys a stock at $50, it rises to $80, and they sell because "I want to lock in my profit." The company\'s earnings are still growing 25% per year. Person B holds.',
          left: { label: 'A was right to sell', sublabel: 'a 60% gain is great' },
          right: { label: 'B was right to hold', sublabel: 'the business is still growing' },
          correct: 'right',
          flash: 'This is the "disposition effect" — one of the most expensive mistakes in investing. Selling a winning business because the price went up is like leaving a job because you got a raise. The price going up isn\'t a reason to sell if the business is still getting better.',
        },
      ],
      takeaway: 'Investing is owning businesses based on analysis. Gambling is betting on price movements based on hope. The line isn\'t always obvious — but the quality of your reasoning is what separates them.',
    },

    // Tap step: find what actually moves a stock price (NOT "find red flags")
    {
      kind: 'tap',
      topic: 'What Actually Moves Prices',
      topicIcon: Search,
      intro: 'Here\'s a news day for a fictional company called CloudCo. Some of these events will actually move the stock price. Others are noise. Tap the ones that would genuinely change what investors think about the business.',
      passage: [
        { type: 'text', value: 'CloudCo daily news roundup: ' },
        { type: 'chip', value: 'CEO posts vacation photo on Instagram', signal: false, feedback: 'Unless the CEO is doing something scandalous, their personal life is noise. Markets don\'t care about beach selfies.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Largest customer (30% of revenue) announces they\'re switching to a competitor', signal: true, feedback: 'This is a direct threat to 30% of revenue. Losing your biggest customer is one of the most impactful things that can happen to a business.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'A famous investor mentions CloudCo in a podcast', signal: false, feedback: 'Celebrity endorsements create temporary buzz, not lasting value. The business hasn\'t changed — just the amount of attention on it.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Quarterly earnings beat expectations by 15%', signal: true, feedback: 'Earnings beating expectations means the business is doing better than the market thought. This is new information that reprices the stock.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'Stock price dropped 3% on a day when the whole market dropped 3%', signal: false, feedback: 'When everything drops together, it tells you nothing about CloudCo specifically. This is market-wide noise, not company-specific signal.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'CloudCo\'s patent for core technology gets invalidated by a court', signal: true, feedback: 'A patent is part of the moat. Losing it means competitors can copy the technology — this structurally changes the competitive landscape.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'An analyst sets a price target 10% higher', signal: false, feedback: 'Analyst price targets are opinions, not facts. They\'re often wrong and frequently follow the stock price rather than leading it.' },
        { type: 'text', value: ' · ' },
        { type: 'chip', value: 'CFO unexpectedly resigns and company delays its annual report', signal: true, feedback: 'A CFO leaving suddenly + delayed financial reporting is a red flag combination. It suggests something might be wrong with the numbers — this is how accounting scandals often start.' },
      ],
      requiredSignals: 4,
      reveal:
        'The events that actually change a stock\'s value are the ones that change the BUSINESS — losing a major customer, beating earnings, losing a patent, or a CFO suddenly leaving. Celebrity mentions, analyst opinions, and market-wide moves are noise. Train yourself to ask: "Does this change the business, or just the attention on it?"',
      takeaway: 'Stock prices should move on business fundamentals — earnings, competitive position, management integrity. Everything else is noise. The hardest skill in investing is telling the difference.',
    },

    // Thinking step — force synthesis
    {
      kind: 'thinking',
      prompt: 'A friend tells you: "I don\'t invest because the stock market is just gambling for rich people." Based on what you\'ve learned, what would you say to them? Be specific — use at least one fact or concept from this lesson.',
      placeholder: 'Think about what stocks actually represent, the historical returns, and the difference between investing and gambling...',
      modelAnswer:
        'I\'d tell them that buying a stock isn\'t placing a bet — it\'s buying a tiny piece of a real business. When you buy an S&P 500 index fund, you own a sliver of 500 companies that employ millions of people, serve billions of customers, and collectively earn hundreds of billions in profit every year. Over the last century, that ownership has returned about 10% per year on average. That\'s not a casino — casinos are designed so you lose. Businesses are designed to generate profit. The stock market just lets you own a piece of them. The "gambling" criticism usually comes from people who\'ve only seen short-term price swings on TV. But zooming out, the market tracks business earnings almost perfectly. The risk is real — businesses can fail — but the expected value is positive, which is the exact opposite of gambling.',
      strongReasoningIncludes: [
        'Distinguishes between owning a business (positive expected value) and gambling (negative expected value)',
        'References a specific fact — like the 10% historical return or what a share actually represents',
        'Acknowledges risk while explaining why risk doesn\'t equal gambling',
      ],
    },
  ],
  takeaways: [
    'A stock is ownership of a real business — its assets, profits, and future. Not a ticker symbol, not a lottery ticket.',
    'The stock market has returned ~10%/year for 100 years because real businesses earn real profits that compound.',
    'Prices move when new information changes what investors expect the business will earn. Good reasoning separates investing from gambling.',
    'Signal vs noise: only care about events that change the business itself — earnings, customers, competition, management. Ignore celebrity mentions, analyst targets, and market-wide swings.',
  ],
  completionMessages: {
    perfect: 'Perfect. You now understand what stocks actually are — which puts you ahead of most people who own them.',
    great: 'Strong start. You\'ve got the core insight: stocks are businesses, not bets.',
    good: 'Solid foundation. The key concept — stocks are ownership, not gambling — will underpin everything else you learn.',
    low: 'Worth revisiting. Everything in investing builds on this: what a stock is, why prices move, and why it\'s not gambling.',
  },
};
