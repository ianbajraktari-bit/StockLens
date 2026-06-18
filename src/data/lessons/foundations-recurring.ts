import { Repeat, TrendingUp, Landmark, Zap, Target, Search } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle: 'Why investors pay 10x more for $1 of subscription revenue than $1 of one-time sales',
  description:
    'Netflix collects $33 a month from 280 million subscribers, automatically. A car dealership has to convince every customer to buy from scratch. Investors value Netflix at around 8x revenue and car dealers at about 0.3x. The gap is predictability. This lesson is about why recurring revenue is the most valuable kind of money a company can earn.',
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
        'Two companies, each doing $1 billion in annual revenue.\n\nCompany A is a subscription SaaS business. Customers pay monthly, 95% renew each year, and switching to a competitor takes 6+ months of migration work.\n\nCompany B is a furniture retailer. Every sale is a new customer walking through the door, no contract, no repeat purchase for 5-10 years.\n\nInvestors value those two revenue streams very differently, because one is far more predictable than the other.',
      question: 'Both earn $1B in revenue. If Company A (subscription) is valued at $10B (10x revenue), roughly what multiple do you think investors pay for Company B (furniture)?',
      answer: 1,
      tolerance: 1,
      unit: 'x',
      hint: 'How much would you pay for revenue that might not come back vs revenue that almost certainly will?',
      reveal:
        'About 0.5-1.5x revenue. Investors pay 10x for the subscription business because they can predict next year\'s number with high confidence: at 95% renewal, ~$950M is essentially booked before the company makes a single new sale. The furniture store starts at $0 on January 1st and has to earn every dollar over again. The difference in predictability is worth a 7-10x premium on revenue.',
      takeaway:
        'Investors pay dramatically more for revenue they can forecast. A subscription dollar is typically worth 5-10x what a one-time-sale dollar is worth, because you can see most of next year\'s number in advance.',
    },

    // Decide with nuance about recurring quality
    {
      kind: 'decide',
      topic: 'Not All Subscriptions Are Equal',
      topicIcon: Landmark,
      context:
        'Three real flavors of "recurring" revenue:\n\nNetflix: $15/month, cancel anytime with one click, ~5% monthly churn.\nSalesforce: $25,000/year enterprise contracts, 6-month switching process, ~8% annual churn.\nAWS: embedded directly in the customer\'s code, switching takes 12-18 months of engineering, <1% annual churn.\n\nAll three are called recurring revenue on the income statement. They are nowhere near equally sticky.',
      question: 'Which type of recurring revenue is most valuable to investors?',
      options: [
        'Netflix — largest subscriber base and most well-known brand',
        'Salesforce — high contract values mean more revenue per customer',
        'AWS — near-zero churn because switching is nearly impossible',
        'All recurring revenue is equally valuable since it all renews',
      ],
      correctIndex: 2,
      punchline:
        'AWS revenue is the stickiest of the three because it\'s embedded in the customer\'s codebase. Migrating from AWS to Google Cloud means rewriting thousands of lines of code and burning months of engineering time. The switching cost is high enough that the revenue behaves almost like an annuity. That\'s why cloud infrastructure trades at 10-15x revenue and Netflix trades at 6-8x.',
      wrongNudges: [
        'Netflix has the largest subscriber base of the three and the weakest lock-in. One click to cancel. A 5% monthly churn rate compounds to roughly 45% a year, which Netflix has to refill before counting any net growth. Subscriber count and stickiness aren\'t the same thing.',
        'Bigger contracts are good, but $25K/year contracts still get cancelled. The Salesforce switching cost is meaningful (months of work) but not extreme (years of work). Salesforce sits between Netflix and AWS, closer to the middle than to the top.',
        '',
        'The churn numbers argue against this directly. Netflix runs around 45% annual churn, Salesforce around 8%, AWS under 1%. By that measure a dollar of AWS revenue is roughly 40x as durable as a dollar of Netflix revenue.',
      ],
      takeaway:
        'The quality of recurring revenue tracks the cost of leaving. The harder a customer has to work to walk away, the more durable the revenue line. Netflix is one click. Salesforce is months of work. AWS is a multi-year migration of the codebase that runs the company.',
    },

    // Drill: escalating difficulty
    {
      kind: 'drill',
      topic: 'Recurring or Rebuilding?',
      topicIcon: Zap,
      intro: 'For each pair, identify which business has the more predictable revenue. The pairs get harder; some "recurring" revenue is less sticky than it looks.',
      prompts: [
        {
          setup: 'A gym with monthly memberships vs. a personal trainer who charges per session',
          left: { label: 'Gym', sublabel: 'monthly auto-pay' },
          right: { label: 'Trainer', sublabel: 'pay per session' },
          correct: 'left',
          flash: 'Gym memberships auto-renew, and a meaningful share of members keep paying without showing up. The trainer has to re-sell every session. Monthly auto-pay is the simplest form recurring revenue takes.',
        },
        {
          setup: 'Adobe Creative Suite ($55/month subscription) vs. a video game studio (sells $60 games)',
          left: { label: 'Adobe', sublabel: 'monthly subscription' },
          right: { label: 'Game studio', sublabel: 'one-time purchases' },
          correct: 'left',
          flash: 'Adobe moved from one-time purchases to subscriptions in 2013. The stock went from $35 to over $500 in the years that followed, largely because the revenue became predictable. A game studio has to bet every launch on whether players will buy it. Adobe doesn\'t ask the question.',
        },
        {
          setup: 'A meal-kit delivery service (weekly box, cancel anytime) vs. a grocery chain (customers shop weekly out of habit)',
          left: { label: 'Meal kit', sublabel: 'subscription model' },
          right: { label: 'Grocery', sublabel: 'habitual repeat purchases' },
          correct: 'right',
          flash: 'Counterintuitive answer. Meal kits look more recurring on paper because they\'re subscriptions, but they run roughly 70% annual churn; most people try them and quit. Grocery stores have customers who\'ve shopped the same store for decades out of habit. Habit can be stickier than a subscribe button.',
        },
        {
          setup: 'Spotify (music streaming, $11/month) vs. Apple Music (music streaming, $11/month, deeply integrated into iPhone)',
          left: { label: 'Spotify', sublabel: 'works on any device' },
          right: { label: 'Apple Music', sublabel: 'embedded in iOS ecosystem' },
          correct: 'right',
          flash: 'Both are subscriptions. Apple Music is also wired into the iPhone: Siri defaults to it, it syncs across every Apple device, playlists are tied to your Apple ID. Switching the music app is easy. Re-routing the whole Apple ecosystem around Spotify is enough friction that most people don\'t bother. Ecosystem integration adds a layer of stickiness on top of the subscription.',
        },
        {
          setup: 'An insurance company (annual policies, legally required for cars/homes) vs. a subscription snack box (monthly treats, cancel anytime)',
          left: { label: 'Insurance', sublabel: 'legally required, annual' },
          right: { label: 'Snack box', sublabel: 'monthly subscription' },
          correct: 'left',
          flash: 'Insurance might be the most durable recurring revenue there is, because it\'s legally required. You can\'t drive without car insurance or get a mortgage without home insurance. Snack boxes are novelty subscriptions with 50%+ annual churn. The word "subscription" on a P&L tells you almost nothing about retention.',
        },
      ],
      takeaway: 'Stickiness comes from switching costs, habits, ecosystems, or legal requirements. The presence of a subscribe button is barely correlated with any of them. A subscription business that\'s easy to leave can have worse retention than a non-subscription business whose customers can\'t imagine shopping anywhere else.',
    },

    // Tap: spot fake recurring revenue
    {
      kind: 'tap',
      topic: 'Real vs. Fake Recurring',
      topicIcon: Search,
      intro: 'A startup is pitching investors. They claim "85% recurring revenue." Read their pitch and tap the details that reveal whether this recurring revenue is REAL or FAKE.',
      passage: [
        { type: 'text', value: '"SnackBox delivers curated snacks monthly. We have ' },
        { type: 'chip', value: '85% of revenue is from subscriptions', signal: false, feedback: 'Sounds good on paper. The thing 85% doesn\'t tell you is whether those subscribers are still around in six months. A subscription that gets cancelled after two months isn\'t really recurring in any useful sense.' },
        { type: 'text', value: '. Our customers ' },
        { type: 'chip', value: 'love us — 4.8 stars on the App Store', signal: false, feedback: 'Ratings measure satisfaction at a moment in time, not retention. Plenty of 5-star apps get deleted within a month. What matters here is whether people keep paying.' },
        { type: 'text', value: '. However, ' },
        { type: 'chip', value: 'average subscription length is 3.2 months', signal: true, feedback: 'This is the number that actually decides the business. A 3.2-month average means SnackBox is losing roughly 75% of its subscribers a year. That isn\'t recurring revenue. It\'s a customer-acquisition treadmill that happens to be packaged as a subscription.' },
        { type: 'text', value: '. We acquire customers through Instagram ads at ' },
        { type: 'chip', value: '$42 cost per subscriber acquired', signal: true, feedback: 'At $42 to acquire a customer who stays 3.2 months paying about $30/month, SnackBox brings in roughly $96 per customer against $42 of acquisition cost and around $60 of product cost. The unit economics barely break even, and the marketing budget is mostly refilling a bucket that\'s leaking.' },
        { type: 'text', value: '. We\'re ' },
        { type: 'chip', value: 'growing subscribers 40% year over year', signal: false, feedback: 'Growth doesn\'t mean much if retention is this weak. Adding 40% while losing 75% means the company is running faster, not building anything that lasts. Retention has to come first for the growth to compound.' },
        { type: 'text', value: '. Our ' },
        { type: 'chip', value: 'customer acquisition cost exceeds first-month revenue', signal: true, feedback: 'If acquisition cost is bigger than first-month revenue, the customer has to stick around for months before the company is even square on them. With a 3.2-month average life, most SnackBox customers barely cover their acquisition cost before they leave.' },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'SnackBox\'s "85% recurring revenue" is technically accurate and practically meaningless. A 3.2-month average subscription churns through 75% of the base every year, and acquisition costs eat most of the per-customer profit before churn even begins. Recurring revenue, as investors actually use the term, requires customers who stay for years. A subscription button on the website doesn\'t create stickiness; retention does.',
      takeaway: 'Subscription revenue is worth what the retention is worth. "85% recurring revenue" with a 3-month average customer life is a different business than the same headline with a 3-year average. The question to ask before believing any recurring-revenue claim is how long the average customer actually stays.',
    },

    // Thinking step
    {
      kind: 'thinking',
      prompt: 'Netflix charges $15/month and has ~5% monthly churn (loses 5% of subscribers each month but replaces them). Salesforce charges $25,000/year and has ~8% annual churn. Which business has more valuable revenue, and why? Think about the quality of each dollar, not just the total amount.',
      placeholder: 'Consider how long the average customer stays, how costly each is to replace, and what "predictable" means for each...',
      modelAnswer:
        'Salesforce has more valuable revenue dollar for dollar, even though Netflix is bigger and better-known. With 8% annual churn, the average Salesforce customer stays roughly 12 years, so each $25K contract is really a $300K+ relationship. Netflix loses about 45% of subscribers a year (5% monthly compounds), which puts the average member life around two years; that $15/month subscription is worth about $360 in lifetime revenue. Replaceability matters too. Replacing a lost Salesforce contract takes months of enterprise sales work. Replacing a Netflix subscriber takes a social ad and a $20 promo. Salesforce revenue is durable, high-touch, and built into the customer\'s workflow. Netflix revenue is high-volume but low-friction in both directions: easy to start, easy to end.',
      strongReasoningIncludes: [
        'Compares the actual lifetime value of each customer, not just the monthly/annual price',
        'Considers how easy or hard it is to REPLACE a lost customer',
        'Recognizes that low churn (Salesforce 8%/year) creates dramatically different economics than moderate churn (Netflix ~45%/year)',
      ],
    },
  ],
  takeaways: [
    'Investors pay 5-10x more for recurring revenue than for one-time revenue because most of next year\'s number is already on the books.',
    'Recurring revenue isn\'t homogeneous. AWS at under 1% annual churn (embedded in customer code) is worth more per dollar than Netflix at ~45% (one click to cancel).',
    'What makes revenue recurring is retention, not the word "subscription." A subscription with a 3-month average customer life is a customer-acquisition treadmill in different packaging.',
    'Real stickiness comes from switching costs, habits, ecosystems, or legal requirements. The subscribe button is at most a starting point.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You\'re evaluating revenue by quality, not just by size, which is most of the gap between an experienced investor and a beginner.',
    great:
      'Strong work. Telling actual recurring revenue apart from subscription packaging is a real edge in reading earnings releases.',
    good:
      'Good base. Whenever you see a recurring-revenue claim, the first question worth asking is how long the average customer stays.',
    low:
      'Worth revisiting. Revenue quality is one of the most important things to read for in any company analysis, and the easiest place for management to overstate.',
  },
};
