import { Brain, TrendingDown, AlertTriangle, Shield, Zap, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBiasesLesson: Lesson = {
  id: 'foundations-biases',
  emoji: '🧠',
  title: 'Your Brain vs. Your Portfolio',
  subtitle: 'The mental traps that cost investors more than bad stock picks',
  description:
    'Your biggest investing risk isn\'t picking the wrong stock — it\'s your own brain. Humans evolved to avoid lions, not to make rational decisions about money. This lesson exposes the specific mental traps that cause even smart people to buy high, sell low, and hold losers.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['behavioral_biases'],
  keyFacts: [],
  topics: [
    { label: 'Loss aversion — why losses hurt 2x more', icon: TrendingDown },
    { label: 'Anchoring — the price you paid doesn\'t matter', icon: Brain },
    { label: 'Confirmation bias — you only see what you believe', icon: AlertTriangle },
    { label: 'Building a system to override your instincts', icon: Shield },
  ],
  steps: [
    {
      kind: 'estimate',
      topic: 'The Pain Asymmetry',
      topicIcon: TrendingDown,
      context:
        'You invest $10,000 in a stock. In the first month, it drops 20%. You now have $8,000. That $2,000 loss feels terrible — you check your phone constantly, lose sleep, consider selling.\n\nLoss aversion is a proven psychological phenomenon: losing money hurts roughly TWICE as much as gaining the same amount feels good.\n\nHere\'s where it gets dangerous:',
      question: 'Your $10,000 dropped 20% to $8,000. What percentage gain do you need from $8,000 to get back to $10,000?',
      answer: 25,
      tolerance: 5,
      unit: '%',
      hint: 'You need to gain $2,000 from a base of $8,000 — not $10,000',
      reveal:
        '25%. Not 20%. You need $2,000 ÷ $8,000 = 25%. This asymmetry is devastating: a 50% loss requires a 100% gain to recover. A 75% loss requires a 300% gain. This is why risk management matters more than finding the next hot stock — the math of recovery is brutally stacked against you.',
      takeaway: 'Losses require disproportionately larger gains to recover. A 20% loss needs 25%. A 50% loss needs 100%. Protecting against big losses matters more than chasing big wins.',
    },

    {
      kind: 'decide',
      topic: 'The Anchoring Trap',
      topicIcon: Brain,
      context:
        'You bought NVIDIA at $120 per share two years ago. It ran up to $950, and you felt like a genius. Then it dropped to $750.\n\nYour brain is anchored to TWO irrelevant numbers:\n- $120 (your purchase price — "I\'m still up 6x!")\n- $950 (the peak — "I\'ve lost $200 per share")\n\nNeither has ANYTHING to do with what NVIDIA is worth today. The business currently earns $20/share and is growing 40%/year.',
      question: 'At $750, NVIDIA trades at about 37x earnings with 40% growth. What should drive your decision?',
      options: [
        'Sell — it dropped $200 from the peak, lock in your 6x gain before it drops more',
        'Hold — you bought at $120, so you\'re still up huge and have nothing to worry about',
        'Evaluate NVIDIA at today\'s price vs today\'s business — is 37x reasonable for 40% growth?',
        'Buy more — it dropped $200 from the high so it\'s "on sale"',
      ],
      correctIndex: 2,
      punchline:
        'Your purchase price is irrelevant. The peak price is irrelevant. The ONLY question is: "At $750 and 37x earnings, does NVIDIA\'s current business justify this price?" If yes, hold or buy. If no, sell. Your cost basis is a psychological anchor, not an investment tool.',
      wrongNudges: [
        'This is the disposition effect — selling winners to "lock in" gains. If NVIDIA is worth $900 based on fundamentals, selling at $750 is selling a bargain because of a psychological anchor.',
        'Being "up huge" doesn\'t protect you from future losses. Enron shareholders were "up huge" too — until they weren\'t. Your gain history doesn\'t change the stock\'s future.',
        '',
        'A stock isn\'t "on sale" just because it dropped. If the earnings report revealed problems, the OLD price was too HIGH. "Cheap" means below intrinsic value, not below yesterday\'s price.',
      ],
      takeaway: 'Your purchase price and the stock\'s peak are irrelevant to future value. Only one question matters: "Is this business worth this price TODAY?"',
    },

    {
      kind: 'drill',
      topic: 'Bias or Rational?',
      topicIcon: Zap,
      intro: 'For each investor action, decide: is this rational analysis, or a bias-driven mistake? These get tricky.',
      prompts: [
        {
          setup: 'Your stock drops 15%. You check the earnings report — revenue up 20%, margins expanding, guidance raised. You hold.',
          left: { label: 'Rational', sublabel: 'business is fine' },
          right: { label: 'Bias', sublabel: 'ignoring the price drop' },
          correct: 'left',
          flash: 'Rational. The business improved on every metric. The price drop is noise — maybe a sector rotation or market-wide selloff. When fundamentals improve but the price drops, the stock just got cheaper.',
        },
        {
          setup: 'Your stock is down 40%. The company lost its biggest customer (30% of revenue), margins are shrinking, the CEO resigned. You hold because "it\'ll come back."',
          left: { label: 'Rational', sublabel: 'patient long-term thinking' },
          right: { label: 'Bias', sublabel: 'refusing to accept loss' },
          correct: 'right',
          flash: 'Loss aversion + sunk cost fallacy. You\'re holding because selling makes the loss feel real. But the business is fundamentally damaged. The price you paid doesn\'t change the future. Selling a broken business isn\'t "giving up" — it\'s reallocating capital.',
        },
        {
          setup: 'You own Tesla. You read 10 analyst reports — 7 bullish, 3 bearish with detailed margin concerns. You dismiss the 3 bearish reports as "not understanding the vision."',
          left: { label: 'Rational', sublabel: 'majority of analysts agree' },
          right: { label: 'Bias', sublabel: 'dismissing opposing evidence' },
          correct: 'right',
          flash: 'Confirmation bias. You seek evidence that confirms what you believe and dismiss what challenges it. The 3 bearish reports might have the BEST analysis — but your brain filters them out. The strongest investors actively seek the bear case for their holdings.',
        },
        {
          setup: 'A stock you\'ve watched for months drops 25% after a bad earnings report. You buy because "it\'s finally cheap enough."',
          left: { label: 'Rational', sublabel: 'bought the dip' },
          right: { label: 'Bias', sublabel: 'anchored to old price' },
          correct: 'right',
          flash: 'Anchoring. It\'s not cheap just because it fell 25%. If earnings revealed real problems, the OLD price was too high. "Cheap" means below intrinsic value, not below yesterday\'s price.',
        },
        {
          setup: 'Your friend tripled his money on a crypto token in 3 months. You invest your emergency fund into a similar token because you don\'t want to "miss out."',
          left: { label: 'Rational', sublabel: 'following proven results' },
          right: { label: 'Bias', sublabel: 'FOMO and recency bias' },
          correct: 'right',
          flash: 'FOMO + recency bias. Your friend\'s past return is an anecdote, not a strategy. Worse, you\'re risking money you can\'t afford to lose. The investors who bought Bitcoin at $69K in 2021 had the same logic.',
        },
      ],
      takeaway: 'The most expensive biases: loss aversion (holding losers), anchoring (using past prices), confirmation bias (ignoring opposing evidence), and FOMO (buying because others profited).',
    },

    {
      kind: 'tap',
      topic: 'Spot the Bias',
      topicIcon: Search,
      intro: 'Read this investor\'s journal. Tap the entries where bias — not analysis — is driving the decision.',
      passage: [
        { type: 'text', value: 'My Q4 journal: ' },
        { type: 'chip', value: 'Sold Stock A at +60% to "lock in my profit" — felt good to bank a win', signal: true, feedback: 'Disposition effect. The decision was based on the FEELING of locking in gains, not on whether the business justified selling. If Stock A was still undervalued at +60%, selling was leaving money on the table because of psychology.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Reviewed Stock B\'s earnings — revenue beat, margins expanded, guidance raised. Holding.', signal: false, feedback: 'Rational. The investor checked fundamentals, found improvement on every metric, and decided to hold based on business performance — not emotion.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Still holding Stock C at -55% because "I can\'t sell at this big a loss — I\'ll wait for it to come back"', signal: true, feedback: 'Loss aversion + sunk cost. The 55% loss already happened whether they sell or not. The question isn\'t "will it come back to my price?" but "would I buy this stock at today\'s price?" If no, holding is just denial in slow motion.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Bought Stock D after 3 weeks of research on the company, competitors, and financials', signal: false, feedback: 'Thorough research before buying is disciplined process — the opposite of impulsive, bias-driven behavior.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Added to Stock E because my coworker said he tripled his money on it', signal: true, feedback: 'Social proof + recency bias. Someone else\'s past return is not an investment thesis. This is gambling with extra steps — using an anecdote instead of analysis.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Read a detailed bear case against my biggest holding — their margin concerns were compelling, reduced position 25%', signal: false, feedback: 'Intellectual honesty — actively seeking opposing views and adjusting accordingly. Reducing (not eliminating) shows nuance. This is rare discipline.' },
      ],
      requiredSignals: 3,
      reveal:
        'Three bias-driven decisions: selling winners for the feeling (disposition effect), holding losers to avoid pain (loss aversion), and buying on someone else\'s results (social proof). Two rational decisions: holding on improving fundamentals, buying after deep research. One rare act of discipline: reducing a position after reading the bear case.',
      takeaway: 'Keep an investing journal and audit it for bias. Ask: "Did I make this decision based on the business or based on how I feel?" The answer is uncomfortably honest most of the time.',
    },

    {
      kind: 'thinking',
      prompt: 'Think about a decision you made — about anything, not just investing — where emotion was driving the choice instead of rational analysis. What bias was at work? How could you have caught it? Apply that same awareness to investing.',
      placeholder: 'Describe the decision, what emotion drove it, which bias was at play, and what a rational approach would have looked like...',
      modelAnswer:
        'Most people can identify a major decision driven by emotion: staying in a bad job because of sunk cost ("I\'ve already invested 3 years"), not returning a bad purchase because of loss aversion ("I already spent the money"), or following a friend\'s recommendation because of social proof ("everyone\'s doing it"). In investing, these same biases are amplified because money triggers survival instincts. Loss aversion makes a $5,000 loss feel like physical danger — your cortisol spikes, your fight-or-flight activates. The antidote is pre-commitment: write down your thesis BEFORE you buy, with specific conditions that would make you sell. When emotion hits, check the checklist, not your gut. Professional investors don\'t have better emotions — they have better systems for overriding them.',
      strongReasoningIncludes: [
        'Identifies a specific decision and names the bias at work',
        'Connects the personal bias to investing behavior',
        'Proposes a system or process for overriding emotional decision-making',
      ],
    },
  ],
  takeaways: [
    'Loss aversion: losing $2,000 hurts as much as gaining $4,000 feels good. A 50% loss needs 100% to recover — the math is brutally asymmetric.',
    'Anchoring: your purchase price and the stock\'s peak are irrelevant. Only today\'s business at today\'s price matters.',
    'Confirmation bias: you naturally seek evidence that confirms your beliefs. The antidote: actively read the bear case for your biggest holdings.',
    'Build systems: write your thesis before buying, with specific sell conditions. When emotion hits, check the checklist.',
  ],
  completionMessages: {
    perfect: 'Perfect. Recognizing your own biases is the single hardest — and most valuable — skill in investing.',
    great: 'Strong work. Most investors never examine their psychology. You\'re already ahead by knowing the traps.',
    good: 'Good awareness. Remember: the goal isn\'t to eliminate emotion — it\'s to build systems that override it.',
    low: 'Worth revisiting. Behavioral biases cost investors more than bad stock picks. Understanding them is essential.',
  },
};
