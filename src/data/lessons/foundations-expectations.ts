import { Target, TrendingUp, BarChart3, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsExpectationsLesson: Lesson = {
  id: 'foundations-expectations',
  emoji: '🎯',
  title: 'The Expectations Game',
  subtitle: 'Why good news can crash a stock — and bad news can lift one',
  description:
    "A company reports record profit. The stock drops 15%. A struggling company misses estimates. The stock rallies. None of this makes sense — until you understand that stock prices don't reflect reality. They reflect expectations about the future. This lesson teaches you to think in expectations.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation', 'behavioral_biases'],
  keyFacts: [],
  topics: [
    { label: 'Why stock prices reflect expectations, not results', icon: Target },
    { label: 'What "priced in" actually means', icon: BarChart3 },
    { label: 'How beats and misses move stocks', icon: TrendingUp },
    { label: 'Reading earnings reactions like an investor', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: the paradox
    //
    // Why a decide first: the whole lesson hinges on a counterintuitive
    // fact. Starting with the paradox creates the "wait, what?"
    // moment that makes the explanation land.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Paradox',
      topicIcon: Target,
      context:
        'Company X reports its best quarter ever: revenue up 25%, profit up 30%, record customers. The stock drops 12% the next day.\n\nWall Street analysts — professionals whose job is to predict a company\'s future results — had expected revenue up 30% and profit up 40%. The company beat every historical record — but missed what Wall Street expected.',
      question: 'Why did the stock drop on record results?',
      options: [
        'The market is irrational — record results should always push a stock up',
        'The results were record-breaking but below what the stock price already assumed. Investors had already priced in 30% growth — delivering 25% is a disappointment relative to the price',
        'Insider selling caused the drop, not the earnings',
        'Investors are overreacting and the stock will bounce back immediately',
      ],
      correctIndex: 1,
      punchline:
        'Stock prices don\'t react to "good" or "bad" results. They react to whether results beat or miss what was already baked into the price. Record profit that misses expectations is a sell. Mediocre profit that beats expectations is a buy. The market prices the future, not the past.',
      wrongNudges: [
        'The market isn\'t irrational here — it\'s doing exactly what it should. If the stock was priced for 30% growth and only got 25%, the price needs to adjust downward. This is the market correcting an over-optimistic assumption.',
        '',
        'Insider selling is rarely the explanation. Millions of investors react to earnings simultaneously. The simplest explanation: the stock assumed more growth than materialized.',
        'It might bounce back — or it might drop further if analysts lower future estimates. "It\'ll come back" isn\'t an investment thesis.',
      ],
      takeaway: 'Stock prices already contain expectations about the future. Results only move the stock if they\'re different from what was expected. "Good" and "bad" are relative to what the price assumed.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: is it priced in?
    //
    // Why a drill: "priced in" is a concept that requires instant
    // pattern recognition. The user needs to quickly distinguish
    // new information from already-known information.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Already Priced In?',
      topicIcon: Zap,
      intro: 'Each piece of news hits the market. Is it already reflected in the stock price, or is it new information?',
      prompts: [
        {
          setup: 'Apple announces iPhone sales grew 5% — exactly matching analyst estimates.',
          left: { label: 'Already priced in', sublabel: 'expected, no surprise' },
          right: { label: 'New information', sublabel: 'stock should react' },
          correct: 'left',
          flash: 'Analysts expected 5%. They got 5%. No surprise = no stock movement. The price already assumed this would happen.',
        },
        {
          setup: 'NVIDIA unexpectedly announces a major new contract with the US government.',
          left: { label: 'Already priced in' },
          right: { label: 'New information', sublabel: 'unexpected event' },
          correct: 'right',
          flash: 'Nobody expected this specific contract. New revenue that wasn\'t in anyone\'s model. The stock should react — this changes the math.',
        },
        {
          setup: 'The Federal Reserve (America\'s central bank) raises interest rates — after weeks of every economist predicting they would.',
          left: { label: 'Already priced in', sublabel: 'everyone expected it' },
          right: { label: 'New information' },
          correct: 'left',
          flash: 'When 95% of economists predict a rate hike, the market moves BEFORE the announcement. The actual event is confirmation, not news.',
        },
        {
          setup: 'A company that was expected to grow 20% reports only 12% growth.',
          left: { label: 'Already priced in' },
          right: { label: 'New information', sublabel: 'missed expectations' },
          correct: 'right',
          flash: '20% growth was priced in. 12% is a miss — the gap between expected and actual is new information. Stock drops to reflect lower growth.',
        },
        {
          setup: 'Everyone knows a recession is likely in the next year. Economic data confirms it.',
          left: { label: 'Already priced in', sublabel: 'widely expected' },
          right: { label: 'New information' },
          correct: 'left',
          flash: 'If everyone expects a recession, stocks already dropped to reflect it. Confirming what\'s expected doesn\'t move prices — only surprises do.',
        },
        {
          setup: 'A drug company\'s clinical trial unexpectedly fails.',
          left: { label: 'Already priced in' },
          right: { label: 'New information', sublabel: 'unexpected failure' },
          correct: 'right',
          flash: 'The stock price assumed some probability of success. Complete failure is new, negative information. These events can crash a stock 50%+ in a day.',
        },
      ],
      takeaway: 'The market moves on surprises, not information. If everyone already expects something, it\'s in the price. Only the gap between expectation and reality creates movement.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: what growth rate is priced in?
    //
    // Why an estimate: makes "priced in" concrete by calculating
    // the implied growth rate from a P/E ratio. Connects valuation
    // lesson to expectations thinking.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'What the Price Assumes',
      topicIcon: Calculator,
      context:
        'A stock trades at $100 with $4 in EPS — a 25x P/E. The market average is 18x. For this premium to be justified, the company needs to grow earnings until a 25x price looks normal.\n\nAt 18x, $100 stock price would require: $100 ÷ 18 = $5.55 in EPS. Current EPS is $4. The company needs to grow EPS from $4 to $5.55.',
      question: 'What % must earnings grow to justify the current price at an 18x multiple?',
      answer: 39,
      tolerance: 5,
      unit: '%',
      hint: '($5.55 − $4) ÷ $4 × 100',
      reveal:
        '($5.55 − $4) ÷ $4 = 38.8% — roughly 39%. At 25x, the stock price assumes ~39% earnings growth just to look fairly valued at a market multiple. If growth comes in at 20%, the stock drops even though the business grew. If growth comes in at 50%, the stock jumps because it beat what the price assumed. This is why "priced in" matters — the current price IS a prediction.',
      takeaway: 'Every stock price is an implicit prediction about the future. You can reverse-engineer what growth rate the market expects by comparing the P/E to the market average.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: reading an earnings reaction
    //
    // Why a tap: teaches the user to read the details of an earnings
    // report and identify what actually moved the stock — not just
    // the headline numbers.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'What Moved the Stock',
      topicIcon: Flag,
      intro: 'A company reported earnings. The stock dropped 8%. Tap the details that explain why.',
      passage: [
        { type: 'text', value: '"TechCorp reported Q4 results. ' },
        {
          type: 'chip',
          value: 'Revenue was $2.1B, up 18% year-over-year',
          signal: false,
          feedback: 'Analysts expected $2.08B. Revenue slightly beat expectations. This isn\'t what caused the drop.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'EPS was $1.42, beating the estimate of $1.38',
          signal: false,
          feedback: 'An earnings beat — $0.04 above expectations. This should help the stock, not hurt it. The problem is elsewhere.',
        },
        { type: 'text', value: '. However, ' },
        {
          type: 'chip',
          value: 'management guided next quarter revenue to $2.0B — below the $2.2B analysts expected',
          signal: true,
          feedback: 'This is the stock killer. Management is telling the market that next quarter will be weaker than expected. Forward guidance matters more than backward results because stock prices reflect the future.',
        },
        { type: 'text', value: '. The CEO noted that ' },
        {
          type: 'chip',
          value: '"macro headwinds are creating uncertainty in enterprise spending"',
          signal: true,
          feedback: 'Vague language about "headwinds" and "uncertainty" signals that management doesn\'t have visibility into future demand. When the company can\'t predict its own near-term results, investors get nervous.',
        },
        { type: 'text', value: '. The company also reported that ' },
        {
          type: 'chip',
          value: 'customer acquisition costs rose 22% while new customer growth slowed to 8%',
          signal: true,
          feedback: 'Paying more to acquire fewer customers is a dangerous trend. It suggests the easy growth is over. This signals decelerating growth ahead.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The stock beat on revenue and EPS — both backward-looking. It dropped because of forward-looking signals: weak guidance, uncertain language from management, and deteriorating growth efficiency. The market doesn\'t pay for what already happened. It pays for what\'s coming next.',
      takeaway: 'After earnings, ignore the headline "beat" or "miss." Look at forward guidance, management tone, and leading indicators like customer acquisition trends. The past is priced in — the future is what moves the stock.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: the expectations framework
    //
    // Why a decide: the final beat forces the user to apply
    // expectations thinking to a real scenario. Cements the framework.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Thinking in Expectations',
      topicIcon: Lightbulb,
      context:
        'You\'re evaluating two stocks:\n\nStock A: 40x P/E, growing 35%/year, market expects 30% growth next year\nStock B: 12x P/E, growing 3%/year, market expects 0% growth next year\n\nStock A is a "better" company by every measure. Stock B is mediocre. But you\'re not buying business quality — you\'re buying relative to expectations.',
      question: 'Which stock is more likely to deliver positive returns from here?',
      options: [
        'Stock A — it\'s growing 35% and will keep winning',
        'Stock B — the bar is so low (0% expected) that any positive result is an upside surprise',
        'Stock A — high P/E stocks always outperform',
        'Neither — you can\'t predict stock returns',
      ],
      correctIndex: 1,
      punchline:
        'Stock A needs to deliver 30%+ growth to meet expectations. Stock B just needs to not shrink. The bar for a positive surprise is much lower for B. This doesn\'t mean B is a better business — it means the expectations embedded in the price are easier to beat. Great companies with sky-high expectations often disappoint. Mediocre companies with rock-bottom expectations often surprise.',
      wrongNudges: [
        '35% growth is impressive, but the stock at 40x already assumes it continues. If growth dips to 25% — still excellent — the stock drops because it missed the high bar baked into the price.',
        '',
        'High P/E stocks outperform only if they keep beating the elevated expectations. Many don\'t. The P/E level tells you how high the bar is — not whether the company will clear it.',
        'You can\'t predict exact returns, but you can assess whether expectations are high or low relative to likely outcomes. That asymmetry is the edge.',
      ],
      takeaway: 'Investing isn\'t about finding the best company — it\'s about finding the biggest gap between expectations and reality. Low expectations + even modest results = positive surprise. High expectations + anything less than perfection = disappointment.',
    },
  ],
  takeaways: [
    'Stock prices reflect expectations about the future, not current results. "Good" results that miss expectations cause drops. "Bad" results that beat expectations cause rallies.',
    '"Priced in" means the stock already reflects the information. Only the gap between what was expected and what actually happens moves the price.',
    'You can reverse-engineer what growth the market expects by comparing the P/E to the market average. This tells you how high the bar is.',
    'Investing isn\'t finding the best company — it\'s finding the biggest gap between expectations and reality. Low bars are easier to clear.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand the game every stock price is playing — and why "good" and "bad" are always relative.',
    great: 'Strong work. Thinking in expectations is what separates casual observers from real investors.',
    good: 'Good foundation. This framework — expectations vs. reality — will change how you read every earnings report.',
    low: 'Worth revisiting. The expectations framework is the key to understanding why stocks move the way they do.',
  },
};
