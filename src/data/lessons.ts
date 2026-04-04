import type { LucideIcon } from 'lucide-react';
import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';

export interface QuizQuestion {
  topic: string;
  topicIcon: LucideIcon;
  context?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  wrongExplanations: string[];
  takeaway: string;
}

export interface ThinkingStep {
  prompt: string;
  placeholder: string;
  modelAnswer: string;
  strongReasoningIncludes: string[];
}

export interface Lesson {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  dataAsOf: string;
  keyFacts: { label: string; value: string; detail: string }[];
  topics: { label: string; icon: LucideIcon }[];
  questions: QuizQuestion[];
  thinkingStep?: ThinkingStep;
  takeaways: string[];
  completionMessages: {
    perfect: string;
    great: string;
    good: string;
    low: string;
  };
}

export const appleLesson: Lesson = {
  id: 'apple',
  emoji: '🍎',
  title: 'Apple Lesson',
  subtitle: 'Understanding a business before you invest',
  description:
    "In this lesson, you'll analyze Apple like a real investor. You'll start by understanding how the company makes money, then look at what makes it attractive to investors, and finish by identifying the risks that could hurt the stock. These three steps — business, quality, and risk — are the foundation of every good investment decision.",
  estimatedMinutes: 3,
  dataAsOf: 'Q1 2025',
  keyFacts: [
    { label: 'Market Cap', value: '~$3.4T', detail: 'One of the most valuable companies in the world' },
    { label: 'Annual Revenue', value: '~$391B', detail: 'iPhone accounts for roughly half of this' },
    { label: 'Services Revenue', value: '~$96B', detail: 'Recurring, high-margin, and growing ~14% year-over-year' },
    { label: 'Active Devices', value: '2.2 billion', detail: 'The installed base that powers the entire ecosystem' },
  ],
  topics: [
    { label: 'How Apple makes its money', icon: Target },
    { label: 'What makes Apple attractive to investors', icon: TrendingUp },
    { label: 'The key risks every Apple investor should know', icon: ShieldAlert },
    { label: 'Making an investor judgment call', icon: BrainCircuit },
  ],
  thinkingStep: {
    prompt:
      'Based on everything you\'ve learned — Apple\'s revenue mix, Services growth, ecosystem strength, iPhone dependence, and its current valuation premium — does Apple look attractive as an investment right now? Write 1–2 sentences explaining your view.',
    placeholder:
      'e.g. "I think Apple is / isn\'t attractive because..."',
    modelAnswer:
      'Apple is a high-quality business with a sticky ecosystem and a fast-growing, high-margin Services segment — but at 30x earnings, a lot of that quality is already priced in. I\'d want to see Services growth accelerate or iPhone risk diminish before paying this premium, because even a small disappointment could hurt the stock at this valuation.',
    strongReasoningIncludes: [
      'Weighs both strengths (ecosystem, Services margins) and risks (iPhone dependence, saturating market) rather than picking one side',
      'Considers whether the current stock price already reflects the positives — not just whether the business is good',
      'Connects the valuation (30x P/E) to what needs to go right for the investment to work',
    ],
  },
  takeaways: [
    'Know the business first — understand where revenue comes from before you look at the stock price.',
    'Look beyond revenue — recurring revenue, high margins, and ecosystem lock-in are what separate good businesses from great ones.',
    'Every investment has risks — identifying bear cases isn\'t pessimism, it\'s preparation.',
    'A great business is not automatically a great investment — price and expectations matter as much as quality.',
  ],
  completionMessages: {
    perfect: "Flawless. You analyzed the business, understood what makes it attractive, identified the risks, and made a real judgment call.",
    great: "Strong work. You're learning to think like an investor, not just a test-taker.",
    good: "Solid start. You're picking up the fundamentals — the judgment calls will get sharper with practice.",
    low: "Good effort. The most important thing is learning to ask the right questions — revisit the lesson to sharpen your instincts.",
  },
  questions: [
    {
      topic: 'The Business',
      topicIcon: Target,
      question: "What is Apple's largest source of revenue?",
      options: [
        'iPhone sales',
        'Mac computer sales',
        'Services (App Store, iCloud, Apple Music)',
        'Wearables (Apple Watch, AirPods)',
      ],
      correctIndex: 0,
      explanation:
        'The iPhone consistently generates about 50% of Apple\'s ~$391B in annual revenue, making it by far the largest segment. It\'s the anchor product — people buy an iPhone, then add AirPods, an Apple Watch, iCloud storage, and App Store subscriptions. With 2.2 billion active Apple devices worldwide, everything else in the ecosystem flows from the iPhone.',
      wrongExplanations: [
        '',
        'Mac is a strong business (~10% of revenue), but it\'s a fraction of iPhone. Investors who assume Mac is the core product misunderstand where Apple\'s real scale lives.',
        'Services is the fastest-growing segment (~22%) with the best margins, but it still depends on the iPhone\'s massive installed base to drive subscriptions. It trails iPhone in total revenue.',
        'Wearables (~10%) are a growing accessory line, but they\'re complementary products — not the revenue engine. Confusing accessories for core business is a common beginner mistake.',
      ],
      takeaway: 'Always identify a company\'s primary revenue driver. It tells you what the business actually depends on — and what could hurt it most.',
    },
    {
      topic: 'Investor Quality',
      topicIcon: TrendingUp,
      question: "Why do investors value Apple's Services segment so highly, even though iPhone generates more revenue?",
      options: [
        'Services has more customers than iPhone',
        'Services revenue is recurring and has higher profit margins',
        'Services is growing because iPhone sales are declining',
        'Apple charges more for services than competitors',
      ],
      correctIndex: 1,
      explanation:
        'Services revenue — now ~$96B annually and growing ~14% per year — is subscription-based. Customers pay monthly for iCloud, Apple Music, Apple TV+, and App Store purchases. This makes revenue predictable and recurring, unlike one-time hardware sales. Services also has ~70% profit margins vs. ~35% for hardware. Wall Street prizes recurring, high-margin revenue because it\'s more stable and more profitable per dollar.',
      wrongExplanations: [
        'Services doesn\'t have "more customers" — it monetizes the same iPhone user base. The value comes from how that revenue behaves (recurring, sticky), not from reaching new people.',
        '',
        'iPhone sales aren\'t declining — they\'re still growing, just more slowly. Services is valued highly on its own merits (margins, predictability), not because something else is failing.',
        'Apple\'s services pricing is competitive, not premium. The value to investors isn\'t about charging more — it\'s about the recurring nature and high margins of subscription revenue vs. one-time hardware sales.',
      ],
      takeaway: 'Not all revenue is equal. Recurring revenue with high margins is worth more to investors than one-time sales — it\'s more predictable and more profitable.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      question: 'Which of these is the strongest "bear case" risk for Apple?',
      options: [
        'Strong brand loyalty and ecosystem lock-in',
        'Growing Services revenue with high margins',
        'Heavy dependence on iPhone in a saturating smartphone market',
        'Large cash reserves for share buybacks',
      ],
      correctIndex: 2,
      explanation:
        'Apple\'s biggest vulnerability is concentration risk. The iPhone drives ~50% of revenue directly and underpins the entire Services ecosystem indirectly. If global smartphone growth stalls — and it is slowing — or if consumers hold phones longer due to incremental upgrades, Apple\'s core growth engine faces real headwinds. Good investors always ask: "What could go wrong?"',
      wrongExplanations: [
        'Brand loyalty is a strength (bull case), not a risk. Mixing up strengths and weaknesses is a common mistake — a bear case asks specifically what could go wrong, not what\'s going right.',
        'Growing Services revenue is a positive that actually mitigates risk by diversifying away from hardware. Listing a strength as a risk shows you haven\'t separated bull case from bear case thinking.',
        '',
        'Large cash reserves are a financial cushion, not a threat. They give Apple flexibility for buybacks, dividends, and acquisitions. Confusing financial strength with risk means you\'re not thinking about what could actually damage the business.',
      ],
      takeaway: 'Thinking like an investor means stress-testing your thesis. Identifying what could go wrong isn\'t pessimism — it\'s how you avoid surprises.',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'You\'ve now learned that Apple has a dominant product (iPhone), a high-quality growing segment (Services), and a real risk (iPhone dependence in a slowing smartphone market). Imagine Apple is currently trading at a P/E of 30x — meaning investors are paying $30 for every $1 of earnings. The average S&P 500 stock trades at about 20x.',
      question: 'Based on everything you\'ve learned, what is the most thoughtful investor reaction?',
      options: [
        'Buy immediately — Apple is a great business, so the stock must be a great investment',
        'Avoid completely — the P/E is above average, so the stock is overpriced',
        'The premium might be justified by Services growth and ecosystem strength, but iPhone risk means you need to watch whether that growth actually materializes',
        'Wait for the P/E to drop to 20x before considering it',
      ],
      correctIndex: 2,
      explanation:
        'This is the core lesson: a great business and a great investment are not the same thing. Apple\'s quality (brand, ecosystem, Services margins) may justify paying a premium — but only if the growth investors are betting on actually happens. The right answer isn\'t blind conviction or blind avoidance. It\'s understanding what you\'re paying for, what needs to go right, and what could go wrong. That\'s investor thinking.',
      wrongExplanations: [
        'This is the most common beginner mistake. Business quality and stock quality are different questions. A great company at the wrong price is a bad investment. You need to consider what\'s already priced in before buying.',
        'A P/E above average doesn\'t automatically mean "overpriced." Some companies deserve a premium because they grow faster, have better margins, or more predictable revenue. Rejecting a stock purely on one metric ignores everything else you\'ve learned about the business.',
        '',
        'There\'s no magic number where a stock becomes "safe to buy." A P/E of 20x on a declining business could be worse than 30x on a growing one. Waiting for an arbitrary number isn\'t analysis — it\'s guessing with extra steps.',
      ],
      takeaway: 'The hardest investing skill isn\'t finding great businesses — it\'s deciding whether the current price already reflects that greatness. Price is what you pay, value is what you get.',
    },
  ],
};

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

export const allLessons: Lesson[] = [appleLesson, nvidiaLesson];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
