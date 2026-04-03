export interface QuizQuestion {
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  wrongExplanations: string[];
  takeaway: string;
}

export const lessonIntro = {
  title: 'Apple Lesson',
  subtitle: 'Understanding a business before you invest',
  description:
    "In this lesson, you'll analyze Apple like a real investor. You'll start by understanding how the company makes money, then look at what makes it attractive to investors, and finish by identifying the risks that could hurt the stock. These three steps — business, quality, and risk — are the foundation of every good investment decision.",
  topics: [
    'How Apple makes its money',
    'What makes Apple attractive to investors',
    'The key risks every Apple investor should know',
  ],
};

export const lessonTakeaways = [
  'Know the business first — understand where revenue comes from before you look at the stock price.',
  'Look beyond revenue — recurring revenue, high margins, and ecosystem lock-in are what separate good businesses from great ones.',
  'Every investment has risks — identifying bear cases isn\'t pessimism, it\'s preparation.',
];

export const appleQuestions: QuizQuestion[] = [
  {
    topic: 'The Business',
    question: "What is Apple's largest source of revenue?",
    options: [
      'iPhone sales',
      'Mac computer sales',
      'Services (App Store, iCloud, Apple Music)',
      'Wearables (Apple Watch, AirPods)',
    ],
    correctIndex: 0,
    explanation:
      'The iPhone consistently generates about 50% of Apple\'s total revenue, making it by far the largest segment. It\'s the anchor product — people buy an iPhone, then add AirPods, an Apple Watch, iCloud storage, and App Store subscriptions. Everything else in Apple\'s ecosystem flows from the iPhone.',
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
    question: "Why do investors value Apple's Services segment so highly, even though iPhone generates more revenue?",
    options: [
      'Services has more customers than iPhone',
      'Services revenue is recurring and has higher profit margins',
      'Services is growing because iPhone sales are declining',
      'Apple charges more for services than competitors',
    ],
    correctIndex: 1,
    explanation:
      'Services revenue is subscription-based — customers pay monthly for iCloud, Apple Music, Apple TV+, and App Store purchases. This makes revenue predictable and recurring, unlike one-time hardware sales. Services also has ~70% profit margins vs. ~35% for hardware. Wall Street prizes recurring, high-margin revenue because it\'s more stable and more profitable per dollar.',
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
];
