import { Repeat, TrendingUp, Landmark, Zap, Target, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle: 'Why investors pay 10x more for $1 of subscription revenue than $1 of one-time sales',
  description:
    'Netflix collects $33/month from 280 million subscribers — automatically. A car dealership has to convince every customer to buy from scratch. Investors value Netflix at 8x revenue and car dealers at 0.3x. The difference? Predictability. This lesson teaches you why recurring revenue is the most valuable kind of money.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['recurring_revenue'],
  keyFacts: [],
  topics: [
    { label: 'Recurring vs one-time revenue', icon: Repeat },
    { label: 'Why predictability commands a premium', icon: TrendingUp },
    { label: 'Not all "recurring" is equally sticky', icon: Landmark },
    { label: 'How to spot fake recurring revenue', icon: Target },
  ],
  steps: [
    // Hook: surprising estimation
    {
      kind: 'estimate',
      topic: 'The Predictability Premium',
      topicIcon: TrendingUp,
      context:
        'Two companies each generate $1 billion in annual revenue.\n\nCompany A is a subscription SaaS company — customers pay monthly, 95% renew each year, and switching to a competitor takes 6+ months of migration work.\n\nCompany B is a furniture retailer — every sale is a new customer walking through the door. No subscriptions, no contracts, no repeat purchases for 5-10 years.\n\nInvestors value revenue differently based on how PREDICTABLE it is.',
      question: 'Both earn $1B in revenue. If Company A (subscription) is valued at $10B (10x revenue), roughly what multiple do you think investors pay for Company B (furniture)?',
      answer: 1,
      tolerance: 1,
      unit: 'x',
      hint: 'How much would you pay for revenue that might not come back vs revenue that almost certainly will?',
      reveal:
        'About 0.5-1.5x revenue. Investors pay 10x for subscription revenue because they can predict next year\'s number with high confidence (95% will renew = ~$950M guaranteed before making a single new sale). The furniture store starts at $0 on January 1st and has to earn every dollar from scratch. Predictability is worth a 7-10x premium.',
      takeaway: 'Investors pay dramatically more for predictable revenue. A subscription dollar is worth 5-10x more than a one-time-sale dollar — because you can see the future.',
    },

    // Decide with nuance about recurring quality
    {
      kind: 'decide',
      topic: 'Not All Subscriptions Are Equal',
      topicIcon: Landmark,
      context:
        'Three real types of "recurring" revenue:\n\nNetflix: $15/month, cancel anytime with one click, ~5% monthly churn\nSalesforce: $25,000/year enterprise contracts, 6-month switching process, ~8% annual churn\nAWS: deeply embedded in the customer\'s code, switching takes 12-18 months of engineering, <1% annual churn\n\nAll three are called "recurring revenue." But they\'re not equally sticky.',
      question: 'Which type of recurring revenue is most valuable to investors?',
      options: [
        'Netflix — largest subscriber base and most well-known brand',
        'Salesforce — high contract values mean more revenue per customer',
        'AWS — near-zero churn because switching is nearly impossible',
        'All recurring revenue is equally valuable since it all renews',
      ],
      correctIndex: 2,
      punchline:
        'AWS revenue is the stickiest because it\'s embedded in customers\' code. Switching from AWS to Google Cloud requires rewriting thousands of lines of code and months of engineering work. This "switching cost" makes revenue almost permanent — which is why cloud infrastructure companies are valued at 10-15x revenue while Netflix trades at 6-8x.',
      wrongNudges: [
        'Netflix has the most subscribers but the weakest lock-in. One click to cancel. That 5% monthly churn means Netflix loses and must replace ~45% of its subscribers every year. Size doesn\'t equal stickiness.',
        'Higher contract values are good, but $25K/year contracts still get cancelled. The switching cost is moderate (months, not years). Salesforce is stickier than Netflix but far less sticky than AWS.',
        '',
        'Churn rates prove they\'re not equal. Netflix: ~45% annual churn. Salesforce: ~8%. AWS: <1%. A dollar of AWS revenue is 40x more durable than a dollar of Netflix revenue.',
      ],
      takeaway: 'Recurring revenue quality depends on SWITCHING COSTS. The harder it is to leave, the more valuable the revenue. Netflix (one click to cancel) < Salesforce (months to switch) < AWS (rewrite your entire codebase).',
    },

    // Drill: escalating difficulty
    {
      kind: 'drill',
      topic: 'Recurring or Rebuilding?',
      topicIcon: Zap,
      intro: 'For each pair, identify which business has more predictable revenue. These get harder — some "recurring" revenue is less sticky than it looks.',
      prompts: [
        {
          setup: 'A gym with monthly memberships vs. a personal trainer who charges per session',
          left: { label: 'Gym', sublabel: 'monthly auto-pay' },
          right: { label: 'Trainer', sublabel: 'pay per session' },
          correct: 'left',
          flash: 'Gym memberships auto-renew. Many people pay for months without going. The trainer has to convince each client to book each session. Monthly auto-pay is the simplest form of recurring revenue.',
        },
        {
          setup: 'Adobe Creative Suite ($55/month subscription) vs. a video game studio (sells $60 games)',
          left: { label: 'Adobe', sublabel: 'monthly subscription' },
          right: { label: 'Game studio', sublabel: 'one-time purchases' },
          correct: 'left',
          flash: 'Adobe converted from one-time purchases to subscriptions in 2013. The stock went from $35 to $500+ because revenue became predictable. Each game launch is a gamble — will players buy it? Adobe doesn\'t have to ask.',
        },
        {
          setup: 'A meal-kit delivery service (weekly box, cancel anytime) vs. a grocery chain (customers shop weekly out of habit)',
          left: { label: 'Meal kit', sublabel: 'subscription model' },
          right: { label: 'Grocery', sublabel: 'habitual repeat purchases' },
          correct: 'right',
          flash: 'Surprising — meal kits LOOK more recurring (subscriptions!) but have ~70% annual churn. People try them and quit. Grocery stores have deeply habitual customers who\'ve shopped at the same store for decades. Habit-based revenue can be stickier than subscription revenue.',
        },
        {
          setup: 'Spotify (music streaming, $11/month) vs. Apple Music (music streaming, $11/month, deeply integrated into iPhone)',
          left: { label: 'Spotify', sublabel: 'works on any device' },
          right: { label: 'Apple Music', sublabel: 'embedded in iOS ecosystem' },
          correct: 'right',
          flash: 'Both are subscriptions, but Apple Music is embedded in the iPhone ecosystem — Siri defaults to it, it syncs across all Apple devices, playlists are tied to your Apple ID. Switching from Apple Music to Spotify is easy; switching your ENTIRE Apple ecosystem to use Spotify everywhere is annoying. Ecosystem lock-in adds a layer of stickiness.',
        },
        {
          setup: 'An insurance company (annual policies, legally required for cars/homes) vs. a subscription snack box (monthly treats, cancel anytime)',
          left: { label: 'Insurance', sublabel: 'legally required, annual' },
          right: { label: 'Snack box', sublabel: 'monthly subscription' },
          correct: 'left',
          flash: 'Insurance is the ultimate recurring revenue — it\'s legally REQUIRED. You can\'t drive without car insurance or get a mortgage without home insurance. Snack boxes are novelty subscriptions with 50%+ annual churn. "Subscription" doesn\'t automatically mean "sticky."',
        },
      ],
      takeaway: 'True stickiness comes from switching costs, habits, ecosystems, or legal requirements — not just having a subscription model. A "subscribe and cancel anytime" business can have worse retention than a non-subscription business with deeply habitual customers.',
    },

    // Tap: spot fake recurring revenue
    {
      kind: 'tap',
      topic: 'Real vs. Fake Recurring',
      topicIcon: Search,
      intro: 'A startup is pitching investors. They claim "85% recurring revenue." Read their pitch and tap the details that reveal whether this recurring revenue is REAL or FAKE.',
      passage: [
        { type: 'text', value: '"SnackBox delivers curated snacks monthly. We have ' },
        { type: 'chip', value: '85% of revenue is from subscriptions', signal: false, feedback: 'This sounds great on paper — but what matters is whether those subscribers STAY. A subscription that gets cancelled after 2 months isn\'t really "recurring" in any meaningful sense.' },
        { type: 'text', value: '. Our customers ' },
        { type: 'chip', value: 'love us — 4.8 stars on the App Store', signal: false, feedback: 'Ratings measure satisfaction at a moment in time, not retention. Plenty of 5-star apps get deleted after a month. What matters is whether people keep paying.' },
        { type: 'text', value: '. However, ' },
        { type: 'chip', value: 'average subscription length is 3.2 months', signal: true, feedback: 'THIS is the critical number. If average subscription is only 3.2 months, SnackBox loses ~75% of subscribers every year. That\'s not "recurring revenue" — it\'s a subscription-shaped customer acquisition treadmill.' },
        { type: 'text', value: '. We acquire customers through Instagram ads at ' },
        { type: 'chip', value: '$42 cost per subscriber acquired', signal: true, feedback: 'At $42 to acquire a customer who stays 3.2 months paying ~$30/month, SnackBox earns about $96 per customer but spent $42 to get them plus ~$60 in product costs. The unit economics barely work — and they\'re burning marketing spend to fill a leaky bucket.' },
        { type: 'text', value: '. We\'re ' },
        { type: 'chip', value: 'growing subscribers 40% year over year', signal: false, feedback: 'Growth is meaningless if retention is poor. If you add 40% but lose 75%, you\'re just running faster on a treadmill. Sustainable growth requires retention first.' },
        { type: 'text', value: '. Our ' },
        { type: 'chip', value: 'customer acquisition cost exceeds first-month revenue', signal: true, feedback: 'If it costs more to GET a customer than you earn in their first month, you need them to stay for months just to break even. With 3.2-month average life, most customers barely repay their acquisition cost before churning. This business is a treadmill.' },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'SnackBox\'s "85% recurring revenue" is technically true but practically fake. With 3.2-month average subscriptions, they churn through 75% of their base yearly. High acquisition costs make each customer barely profitable before they leave. Real recurring revenue means customers stay for YEARS, not months. The label "subscription" doesn\'t make revenue recurring — retention does.',
      takeaway: 'Subscription revenue is only as valuable as its retention. "85% recurring revenue" with 3-month average subscriptions is a treadmill, not a moat. Always ask: how long does the average customer stay?',
    },

    // Thinking step
    {
      kind: 'thinking',
      prompt: 'Netflix charges $15/month and has ~5% monthly churn (loses 5% of subscribers each month but replaces them). Salesforce charges $25,000/year and has ~8% annual churn. Which business has more valuable revenue, and why? Think about the quality of each dollar, not just the total amount.',
      placeholder: 'Consider how long the average customer stays, how costly each is to replace, and what "predictable" means for each...',
      modelAnswer:
        'Salesforce has more valuable revenue, dollar for dollar. With 8% annual churn, the average Salesforce customer stays 12+ years — meaning each $25K contract is really a $300K+ relationship. Netflix loses ~45% of subscribers annually (5% monthly compounds), so the average Netflix member stays roughly 2 years before cancelling — each $15/month subscription is worth about $360 total. But the real difference is replaceability: when Salesforce loses a customer, replacing that $25K contract requires months of enterprise sales effort. When Netflix loses a subscriber, a social media ad might bring them back for $20. This makes Salesforce\'s revenue far more strategically valuable — it\'s durable, high-touch, and deeply embedded in customers\' workflows. Netflix\'s revenue is high-volume but low-friction in both directions: easy to join, easy to leave.',
      strongReasoningIncludes: [
        'Compares the actual lifetime value of each customer, not just the monthly/annual price',
        'Considers how easy or hard it is to REPLACE a lost customer',
        'Recognizes that low churn (Salesforce 8%/year) creates dramatically different economics than moderate churn (Netflix ~45%/year)',
      ],
    },
  ],
  takeaways: [
    'Investors pay 5-10x more for recurring revenue than one-time revenue because predictability lets you see the future.',
    'Not all recurring revenue is equal. AWS (<1% churn, embedded in code) is worth far more per dollar than Netflix (~45% annual churn, one click to cancel).',
    'The label "subscription" doesn\'t make revenue recurring. Retention does. A 3-month average subscription is a treadmill, not a moat.',
    'True stickiness comes from switching costs, habits, ecosystems, or legal requirements — not just a "subscribe" button.',
  ],
  completionMessages: {
    perfect: 'Perfect. You can now evaluate revenue quality — not just quantity. This puts you ahead of most investors.',
    great: 'Strong work. Understanding the difference between real recurring revenue and subscription theater is a genuine edge.',
    good: 'Good foundation. Remember: always ask "how long does the average customer stay?" before trusting a "recurring revenue" claim.',
    low: 'Worth revisiting. Recurring revenue quality is one of the most important concepts in company analysis.',
  },
};
