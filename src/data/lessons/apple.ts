import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';
import type { Lesson } from './types';

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
