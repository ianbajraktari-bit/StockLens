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
      context:
        'Apple generates ~$391B in annual revenue. The iPhone accounts for roughly half, but Services (~$96B) is the fastest-growing segment. Mac, iPad, and Wearables each contribute 8-12%.',
      question: 'As an investor evaluating Apple, which aspect of this revenue mix should concern you most?',
      options: [
        'Services is only ~24% of revenue — Apple is still too dependent on one hardware product',
        'Mac and iPad are too small to matter, so Apple is really just two businesses',
        'Revenue is spread across five segments, so Apple is well-diversified and low-risk',
        'iPhone is the largest segment, so Apple should focus all resources there',
      ],
      correctIndex: 0,
      explanation:
        'The iPhone generates ~50% of revenue directly — but the dependency is even deeper than that. Services revenue ($96B) exists because 2.2 billion people own Apple devices, mostly iPhones. If iPhone sales slow, the installed base eventually shrinks, and Services growth stalls too. This means Apple\'s real iPhone exposure isn\'t 50% — it\'s closer to 70-75% when you trace the dependencies. Investors who see "five segments" and assume diversification are missing the chain reaction underneath.',
      wrongExplanations: [
        '',
        'Mac and iPad do matter — not for their size, but because they reinforce ecosystem lock-in. A customer with an iPhone, Mac, and iPad is far less likely to switch to Android than someone with just an iPhone. Dismissing smaller segments misses how they strengthen the whole.',
        'Having five segment names doesn\'t mean diversification. Four of the five segments depend on iPhone adoption as the entry point. Real diversification means independent revenue drivers — Apple doesn\'t have that. Counting segments without tracing dependencies is a common analytical mistake.',
        'Focusing all resources on iPhone would actually increase concentration risk. Apple\'s long-term strategy of growing Services and Wearables is exactly how you reduce dependence on a single product cycle. "Double down on what\'s biggest" sounds logical but creates fragility.',
      ],
      takeaway: 'Don\'t just look at what\'s biggest — trace the dependencies. A company can look diversified on the surface while every segment secretly depends on the same product.',
    },
    {
      topic: 'Investor Quality',
      topicIcon: TrendingUp,
      context:
        'Apple\'s Services segment generates ~$96B in annual revenue with ~70% profit margins, growing ~14% per year. iPhone generates ~$200B but with ~35% margins and slower growth. Services includes the App Store, iCloud, Apple Music, Apple TV+, and licensing deals (like Google paying ~$20B/year to be the default search engine).',
      question: 'An analyst argues: "Services is the reason Apple deserves a premium valuation." What\'s the strongest challenge to that argument?',
      options: [
        'Services margins are inflated by the Google search deal, which regulators could force Apple to renegotiate or end',
        'Services doesn\'t matter because iPhone still generates more total revenue',
        'Services growth will slow once everyone already subscribes to iCloud and Apple Music',
        '70% margins are normal for tech companies, so Services isn\'t special',
      ],
      correctIndex: 0,
      explanation:
        'The Google search deal (~$20B/year) is nearly pure profit and accounts for a significant chunk of Services revenue. A court has already ruled Google\'s search monopoly is illegal, and regulators could force changes to default-search payments. If that deal shrinks or disappears, Services margins and growth both take a real hit — and the "premium valuation" thesis weakens. The best investor thinking doesn\'t just accept a bull case — it identifies the hidden assumption inside it and asks what happens if that assumption breaks.',
      wrongExplanations: [
        '',
        'Total revenue isn\'t what drives valuation — profit quality is. A dollar of recurring, high-margin Services revenue is worth more to investors than a dollar of one-time hardware revenue. Dismissing Services because iPhone is "bigger" ignores how Wall Street actually values businesses.',
        'Subscription saturation is a real long-term concern, but Apple keeps adding new services (Apple TV+, Fitness+, Apple One bundles) and the installed base is still growing internationally. Saturation isn\'t imminent — and even if growth slows from 14% to 8%, the margins still justify a premium. This is a reasonable worry stated too strongly.',
        '70% margins are not normal. Most SaaS companies run 60-75% gross margins but spend heavily on sales and marketing, leaving much lower operating margins. Apple\'s Services margins are exceptional because the distribution cost is essentially zero — the customer already owns an iPhone. The installed base is the sales team.',
      ],
      takeaway: 'When someone gives you a bull case, your job isn\'t to agree or disagree — it\'s to find the hidden assumption and stress-test it. Every thesis has a load-bearing assumption that could break.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      context:
        'You\'re building a bear case for Apple. Consider these risks: (1) iPhone upgrades are slowing — consumers hold phones 3-4 years instead of 2. (2) China represents ~19% of revenue and faces geopolitical tension, trade restrictions, and rising local competition from Huawei. (3) Antitrust regulators in the US and EU are targeting the App Store\'s 30% commission and default search deals. (4) The AI race could disrupt Apple if Siri and on-device AI fall behind Google and Samsung.',
      question: 'Which of these risks is most likely to structurally damage Apple\'s business over the next 5 years?',
      options: [
        'Slower iPhone upgrades — if people hold phones longer, Apple\'s core revenue engine stalls',
        'China exposure — geopolitical risk could cut off 19% of revenue in a scenario Apple can\'t control',
        'Antitrust action against the App Store — regulatory changes could directly erode the highest-margin part of the business',
        'Losing the AI race — if Siri falls behind, customers might switch ecosystems',
      ],
      correctIndex: 2,
      explanation:
        'All four risks are real, but antitrust is the most structurally dangerous because it targets the profit engine directly. The App Store\'s 30% commission and the Google search deal together represent a huge portion of Services profit — and Services is the segment that justifies Apple\'s premium valuation. Courts have already ruled against Google\'s search monopoly, the EU\'s Digital Markets Act forces App Store changes, and the DOJ is pursuing further action. Unlike slower upgrades (gradual) or China risk (scenario-dependent), regulatory action is already in motion and attacks the business model itself.',
      wrongExplanations: [
        'Slower upgrades are a real headwind, but Apple has adapted before — longer phone life actually helps Services by keeping users in the ecosystem longer. A phone held for 4 years generates 4 years of App Store, iCloud, and Apple Music revenue. This risk is more gradual and less structurally threatening than it appears.',
        'China is a genuine risk, but it\'s a geopolitical scenario, not a structural trend. Companies can hedge geographic risk, and Apple has been shifting supply chains toward India and Vietnam. A full China cutoff would be severe but is a tail risk, not a base case. Prioritizing tail risks over structural trends leads to poor risk assessment.',
        '',
        'Siri being behind is embarrassing but not an ecosystem killer. People stay with Apple for iMessage, AirDrop, the App Store, and hardware integration — not because Siri is the best assistant. Switching ecosystems is extremely costly (repurchasing apps, losing iMessage, abandoning accessories). AI quality would need to be radically better for years before it erodes the switching-cost moat.',
      ],
      takeaway: 'Not all risks are equal. The most dangerous risks aren\'t the scariest headlines — they\'re the ones that attack the profit model directly. Prioritize structural threats over dramatic-sounding scenarios.',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'You\'ve now analyzed Apple\'s business: a dominant but mature hardware product (iPhone), a high-quality growth engine (Services) with a regulatory vulnerability, and a sticky ecosystem with 2.2 billion devices. Apple trades at a P/E of 30x — meaning investors pay $30 for every $1 of earnings. The S&P 500 average is about 20x. Apple\'s earnings are growing ~8% per year.',
      question: 'Based on everything you\'ve learned, what is the most thoughtful investor reaction?',
      options: [
        'Buy immediately — Apple is a great business with a massive ecosystem, so the stock must be a great investment',
        'Avoid it — the P/E is 50% above average for only 8% earnings growth, so you\'re overpaying',
        'The premium might be justified by Services growth and ecosystem lock-in, but you need to watch whether regulatory risk erodes the profit model that justifies paying 30x',
        'Wait for the P/E to drop to 20x before considering it',
      ],
      correctIndex: 2,
      explanation:
        'This is the core lesson: a great business and a great investment are not the same thing. Apple\'s quality — brand, ecosystem, Services margins — may justify paying a premium. But at 30x earnings with 8% growth, the stock needs Services to keep expanding at 14%+ and the regulatory environment to remain manageable. The right answer isn\'t blind conviction or blind avoidance. It\'s understanding what you\'re paying for, what needs to go right, and what could undermine the thesis. That\'s investor thinking.',
      wrongExplanations: [
        'This is the most common beginner mistake. Business quality and stock quality are different questions. A great company at the wrong price is a bad investment. You\'ve just spent this lesson identifying real risks to Apple\'s profit model — ignoring them at the moment of decision undoes the analysis.',
        'A P/E above average doesn\'t automatically mean "overpaying." Some companies deserve a premium because they have more predictable revenue, higher margins, or stronger competitive moats. Rejecting Apple at 30x while the business compounds at 8%+ with best-in-class margins ignores everything you\'ve learned about quality. The question is whether the premium is too large, not whether any premium exists.',
        '',
        'There\'s no magic number where a stock becomes "safe to buy." A P/E of 20x on a company losing its competitive advantage could be worse than 30x on one strengthening it. Waiting for an arbitrary number isn\'t analysis — it\'s guessing with extra steps. What matters is understanding the relationship between price and the underlying business quality.',
      ],
      takeaway: 'The hardest investing skill isn\'t finding great businesses — it\'s deciding whether the current price already reflects that greatness, and what specific risks could break the thesis you\'re paying for.',
    },
  ],
};
