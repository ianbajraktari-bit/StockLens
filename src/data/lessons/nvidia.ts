import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';
import type { Lesson } from './types';

export const nvidiaLesson: Lesson = {
  id: 'nvidia',
  emoji: '🟢',
  title: 'NVIDIA Lesson',
  subtitle: 'Analyzing a high-growth stock in a hype cycle',
  description:
    "NVIDIA is one of the most talked-about stocks in the market — but hype and good investing are different things. In this lesson, you'll learn how NVIDIA actually makes money, why its competitive moat is different from most hardware companies, what could go wrong even if AI is real, and how to think about valuation when a stock has already gone up 10x.",
  estimatedMinutes: 3,
  dataAsOf: 'Q1 2025',
  keyFacts: [
    { label: 'Market Cap', value: '~$3.2T', detail: 'Grew from ~$300B to $3.2T in under 3 years' },
    { label: 'Annual Revenue', value: '~$130B', detail: 'Up from ~$27B two years ago — a 4.8x increase' },
    { label: 'Gross Margin', value: '73%', detail: 'Unheard of for a hardware company (Intel runs ~40%)' },
    { label: 'Data Center Share', value: '~80%+', detail: 'Dominant share of AI training chip market' },
  ],
  topics: [
    { label: 'How NVIDIA makes money and why it dominates', icon: Target },
    { label: 'What gives NVIDIA its real competitive moat', icon: TrendingUp },
    { label: 'The risks hiding behind the AI hype', icon: ShieldAlert },
    { label: 'Judging a stock that\'s already priced for perfection', icon: BrainCircuit },
  ],
  thinkingStep: {
    prompt:
      'NVIDIA trades at 39x earnings after growing revenue 114% in a single year. Its biggest customers are also building competing chips. AI spending is real — but so is the possibility that this is a cyclical capex boom, not permanent demand. Given everything you\'ve learned, would you buy NVIDIA at today\'s price? Write 1–2 sentences explaining what would have to be true for the investment to work.',
    placeholder:
      'e.g. "I would / wouldn\'t buy NVIDIA here because..."',
    modelAnswer:
      'NVIDIA is a genuinely dominant business with a real moat in CUDA — but at 39x earnings, the stock isn\'t priced for "good." It\'s priced for years of sustained hyper-growth with no margin compression and no meaningful share loss to custom silicon. I\'d need confidence that AI infrastructure spending is structurally permanent — not a cyclical capex wave — and that Google, Amazon, and Meta won\'t meaningfully dent NVIDIA\'s share before I\'d pay this price.',
    strongReasoningIncludes: [
      'Distinguishes between the AI trend being real and the stock being a good investment at the current price — these are separate questions',
      'Addresses what specifically must go right (sustained growth, no margin compression, limited custom silicon adoption) rather than vague optimism or pessimism',
      'Considers whether current AI spending is permanent structural demand or a cyclical capex boom that could slow even if AI itself succeeds',
    ],
  },
  takeaways: [
    'Understand concentration risk — when 83% of revenue comes from one segment, your investment thesis lives or dies with that segment.',
    'A real moat isn\'t just good hardware — it\'s an ecosystem (like CUDA) that creates switching costs. Look for what keeps customers locked in.',
    'Even if the underlying trend is real (AI), the stock can still disappoint if expectations outpace reality.',
    'When a stock is priced for perfection, the risk isn\'t that the business fails — it\'s that growth merely slows.',
  ],
  completionMessages: {
    perfect: "Flawless. You cut through the AI hype and analyzed NVIDIA like an investor, not a fan.",
    great: "Strong work. You understand that a great product doesn't automatically mean a great stock at any price.",
    good: "Solid start. You're learning to separate business quality from stock quality — that's the hardest part.",
    low: "Good effort. NVIDIA is a tricky stock because the hype makes it hard to think clearly — revisit the lesson to sharpen your edge.",
  },
  questions: [
    {
      topic: 'The Business',
      topicIcon: Target,
      question: "What is NVIDIA's largest revenue segment, and roughly what percentage of total revenue does it represent?",
      options: [
        'Gaming GPUs — about 50%',
        'Data Center (AI & Cloud) — about 83%',
        'Automotive & Robotics — about 30%',
        'Revenue is evenly split across four segments',
      ],
      correctIndex: 1,
      explanation:
        'NVIDIA\'s Data Center segment generates about 83% of total revenue — that\'s roughly $108B out of $130B. This is where all the AI demand lives — hyperscalers like AWS, Azure, and Google Cloud buying massive GPU clusters to train and run AI models. Gaming, the original business, is now just ~10%. This extreme concentration is the single most important fact about NVIDIA\'s business: everything rides on continued AI infrastructure spending.',
      wrongExplanations: [
        'Gaming was once NVIDIA\'s core business, but it\'s now only ~10% of revenue. Investors who still think of NVIDIA as a "gaming company" are working with outdated information — and that leads to wrong conclusions about what drives the stock.',
        '',
        'Automotive & Robotics is only ~4% of revenue. It\'s a promising future opportunity but barely contributes today. Overestimating small segments is a common mistake — it makes investors too optimistic about diversification that doesn\'t exist yet.',
        'NVIDIA\'s revenue is heavily concentrated, not diversified. Assuming even distribution hides the fact that this is essentially a one-segment company right now — which is both its strength (massive growth) and its vulnerability.',
      ],
      takeaway: 'Before you invest, know where the money actually comes from. Revenue concentration tells you exactly what your investment depends on — and what single thing could break it.',
    },
    {
      topic: 'Competitive Moat',
      topicIcon: TrendingUp,
      question: 'Why is NVIDIA\'s competitive moat considered stronger than just having the best GPU hardware?',
      options: [
        'NVIDIA has exclusive contracts with all major cloud providers',
        'NVIDIA\'s GPUs are the cheapest option on the market',
        'CUDA, NVIDIA\'s software platform, creates massive switching costs because developers have built years of AI tools on it',
        'NVIDIA is the only company legally allowed to make AI chips',
      ],
      correctIndex: 2,
      explanation:
        'NVIDIA\'s real moat is CUDA — a proprietary software ecosystem that developers have been building on for over 15 years. AI researchers, frameworks (PyTorch, TensorFlow), and enterprise tools are deeply integrated with CUDA. This is why NVIDIA holds 80%+ market share and can charge 73% gross margins — even if a competitor builds a faster chip, customers would need to rewrite and retest their entire software stack to switch. The hardware matters, but the ecosystem lock-in matters more.',
      wrongExplanations: [
        'NVIDIA doesn\'t have exclusive contracts — cloud providers actively develop alternatives (Google TPU, Amazon Trainium). Customers choose NVIDIA because of ecosystem advantages, not contractual lock-in. Confusing preference with exclusivity overestimates the durability of the moat.',
        'NVIDIA\'s GPUs are actually among the most expensive. Their moat is the opposite of being cheap — they charge premium prices because the ecosystem makes switching costly. Assuming cheapness is a moat shows a misunderstanding of how pricing power works in tech.',
        '',
        'There are no legal barriers. AMD, Intel, Google, Amazon, and many startups all make AI-capable chips. NVIDIA dominates through ecosystem advantages, not regulation. This answer reveals a misunderstanding of what "moat" means in investing.',
      ],
      takeaway: 'The strongest moats aren\'t about having the best product today — they\'re about making it painful for customers to leave. Look for switching costs, not just product specs.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      question: 'Even if AI demand is real and growing, what is the most credible bear case for NVIDIA\'s stock?',
      options: [
        'AI is a fad and demand will collapse entirely',
        'NVIDIA\'s biggest customers are actively building their own AI chips, which could erode NVIDIA\'s market share and pricing power over time',
        'NVIDIA can\'t manufacture chips fast enough to meet demand',
        'Gaming revenue is declining too quickly',
      ],
      correctIndex: 1,
      explanation:
        'The smartest bear case for NVIDIA isn\'t that AI is fake — it\'s that NVIDIA\'s best customers are also its biggest competitive threat. Google has TPUs, Amazon has Trainium, Meta is exploring custom silicon. These companies have the engineering talent, the capital, and the incentive to reduce dependence on a single supplier. Even a gradual shift from 90% NVIDIA to 70% NVIDIA would significantly impact growth rates and pricing power — and at current valuations, that matters enormously.',
      wrongExplanations: [
        'Dismissing AI as a fad is lazy bear analysis. Real investor thinking doesn\'t require the trend to be fake — it asks what happens if the trend is real but the stock is already priced for it. The strongest bear cases accept the bull narrative and find the weakness within it.',
        '',
        'Supply constraints are actually a short-term bull signal — they mean demand exceeds supply, which protects pricing power. Bears want to see the opposite: supply catching up and competition giving customers alternatives. Confusing supply shortage with a risk misreads the situation.',
        'Gaming is only ~10% of revenue. Even if it went to zero, the impact would be modest. Focusing on a shrinking minority segment while ignoring the real risk (customer diversification in Data Center) means you\'re watching the wrong thing.',
      ],
      takeaway: 'The best bear cases don\'t deny the trend — they accept it and ask: "Even if this is real, what could still go wrong for the stock?" That\'s where real risk analysis lives.',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'NVIDIA\'s revenue grew 114% last year to $130B. Gross margins are 73% — unheard of for a hardware company. The stock trades at 39x earnings and 27x sales. The S&P 500 average is 20x earnings and 3x sales. NVIDIA has returned over 2,000% in the past 3 years. Every analyst is bullish. The company just announced record pre-orders for its next-gen Blackwell chip.',
      question: 'A friend says "NVIDIA is obviously a great company, so I\'m going all-in." What\'s the most thoughtful response?',
      options: [
        '"You\'re right — the numbers speak for themselves. Buy as much as you can."',
        '"It\'s way too expensive. The P/E is double the average. Stay away."',
        '"The business is exceptional, but at 39x earnings the stock needs everything to go right. Even a great company can be a bad investment if you overpay — make sure you understand what has to happen to justify this price."',
        '"Wait for a crash, then buy the dip."',
      ],
      correctIndex: 2,
      explanation:
        'At 39x earnings and 27x sales, NVIDIA is priced for perfection. That doesn\'t mean it\'s a bad business — it\'s clearly exceptional. But the stock price already reflects exceptional performance continuing for years. The risk isn\'t that NVIDIA fails; it\'s that growth merely slows from "extraordinary" to "very good." At these multiples, even a slight disappointment can cause a significant correction. The right investor response acknowledges quality but demands understanding of what\'s being paid for.',
      wrongExplanations: [
        'This is momentum thinking, not investing. "The numbers speak for themselves" ignores that the stock price already reflects those numbers. When everyone agrees a stock is great, that consensus is usually already in the price. Going all-in without considering valuation is how people buy great companies at terrible prices.',
        '',
        'Rejecting a stock purely because the P/E is above average ignores why it might deserve a premium. NVIDIA is growing 5x faster than the average S&P 500 company. The question isn\'t whether it\'s expensive on simple metrics — it\'s whether the growth justifies the premium. Crude metric screening isn\'t analysis.',
        '"Buy the dip" sounds disciplined but is actually just timing the market without a thesis. What constitutes a "dip"? 10%? 30%? Without understanding what the stock is worth, you\'re just guessing at a lower price. Valuation-based thinking beats price-based thinking.',
      ],
      takeaway: 'When everyone agrees a stock is great, the hardest question isn\'t "Is this a good company?" — it\'s "Is all of that already in the price?" Consensus quality is rarely a bargain.',
    },
  ],
};
