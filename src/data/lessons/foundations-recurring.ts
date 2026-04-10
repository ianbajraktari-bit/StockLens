import { Repeat, CloudRain, TrendingUp, Landmark, Calculator, Zap, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle: 'Why income you can count on is worth more than income you have to chase',
  description:
    "Some businesses start every morning at zero — hunting for the next sale. Others wake up knowing most of today's money is already committed. You'll feel the difference through quick drills, live math, and a pitch you'll learn to see right through.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['recurring_revenue'],
  keyFacts: [],
  topics: [
    { label: 'Spotting predictable vs. fragile income', icon: Zap },
    { label: 'Calculating what stays when growth stops', icon: Calculator },
    { label: 'Spotting revenue-quality red flags', icon: CloudRain },
    { label: 'Why investors pay premium prices for recurring revenue', icon: Landmark },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: which income is more predictable?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Income Type Intuition',
      topicIcon: Zap,
      intro: 'Tap which business has more predictable income. Go fast — use your gut.',
      prompts: [
        {
          left: { label: 'Gym memberships', sublabel: '$50/month, auto-billed' },
          right: { label: 'Day passes', sublabel: '$15 per walk-in' },
          correct: 'left',
          flash: 'Memberships arrive automatically. Day passes depend on who walks through the door.',
        },
        {
          left: { label: 'Wedding photographer', sublabel: 'one-time bookings' },
          right: { label: 'Dog-walking service', sublabel: '40 clients, $200/month each' },
          correct: 'right',
          flash: 'The photographer starts at $0 every slow month. The dog walker has $8,000 already spoken for.',
        },
        {
          left: { label: 'Streaming service', sublabel: '$12/month × millions' },
          right: { label: 'Movie theater', sublabel: 'tickets per showing' },
          correct: 'left',
          flash: 'Streaming subscribers pay whether they watch or not. Theaters need butts in seats tonight.',
        },
        {
          left: { label: 'Consulting firm', sublabel: 'project-by-project' },
          right: { label: 'Cloud software', sublabel: 'annual subscriptions' },
          correct: 'right',
          flash: 'Consulting revenue resets between projects. SaaS revenue renews on autopilot.',
        },
        {
          left: { label: 'Insurance premiums', sublabel: 'monthly, year-long policies' },
          right: { label: 'Used car dealer', sublabel: 'one car, one sale' },
          correct: 'left',
          flash: 'Insurance collects every month for a year. The car dealer needs a new buyer every time.',
        },
        {
          left: { label: 'Food truck', sublabel: 'cash per customer' },
          right: { label: 'Meal-prep delivery', sublabel: 'weekly subscription' },
          correct: 'right',
          flash: 'Subscriptions compound. Walk-up sales evaporate overnight.',
        },
      ],
      takeaway:
        'You can already feel it: businesses where money shows up automatically are structurally different from businesses that hunt for every dollar.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Gym B's floor
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Membership Floor',
      topicIcon: Calculator,
      context:
        'Gym B has 1,000 members paying $50/month. Roughly 5% cancel each month. Imagine next month ZERO new members join.',
      question: "What's Gym B's revenue next month?",
      answer: 47500,
      tolerance: 1000,
      unit: '$',
      hint: '950 members × $50',
      reveal:
        '950 members × $50 = $47,500. Even with no new sign-ups, Gym B keeps 95% of its revenue. That built-in floor is what makes recurring income so powerful.',
      takeaway: 'Recurring revenue creates a floor — money that shows up even when growth stops.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: Gym A under stress
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Day-Pass Cliff',
      topicIcon: Calculator,
      context:
        "Gym A made $50,000 from day passes last month. It's January — the slowest month. Walk-ins drop 40%.",
      question: "What's Gym A's January revenue?",
      answer: 30000,
      tolerance: 2000,
      unit: '$',
      reveal:
        '$50,000 × 0.60 = $30,000. One bad month and Gym A loses $20,000. Meanwhile Gym B barely budged. That gap is the entire argument for recurring revenue.',
      takeaway: 'One-time revenue has no floor. When traffic drops, revenue drops dollar for dollar.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: the floor test
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Floor Test',
      topicIcon: Repeat,
      context:
        'Gym A (day passes): $50K → $30K in one slow month.\nGym B (memberships): $50K → $47.5K in the same month.',
      question: "A recession hits and new customers dry up for six months. Which gym survives?",
      options: [
        'Either — same starting revenue',
        'Gym B — its floor holds while A craters',
        'Gym A — it can cut prices to attract walk-ins',
        'Need to know their costs first',
      ],
      correctIndex: 1,
      punchline:
        "Gym B's revenue barely moves in a drought. Gym A's collapses. The floor isn't a luxury — it's a survival mechanism.",
      wrongNudges: [
        'Same starting revenue means nothing when the structure of that revenue is completely different.',
        '',
        'Cutting prices on one-time sales just shrinks revenue per customer without fixing the fundamental problem: no recurring base.',
        "Costs matter, but Gym A's revenue drops 40% while B's drops 5%. No cost structure survives a 40% revenue cliff gracefully.",
      ],
      takeaway: "In bad times, the business with a recurring base survives. The one that hunts for every dollar doesn't.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: red flags in a "growth" pitch
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Revenue Quality Check',
      topicIcon: CloudRain,
      intro:
        "A furniture store owner is pitching you on investing. Tap the phrases that reveal fragile, non-recurring revenue.",
      passage: [
        { type: 'text', value: '"We did ' },
        {
          type: 'chip',
          value: '$1.2 million in sales',
          signal: false,
          feedback: 'Revenue size alone isn\'t a red flag — what matters is how repeatable it is.',
        },
        { type: 'text', value: ' last year! ' },
        {
          type: 'chip',
          value: 'Every sale is a new customer',
          signal: true,
          feedback:
            'Zero repeat business. Every dollar of next year\'s revenue has to be re-earned from scratch. This is the definition of non-recurring.',
        },
        { type: 'text', value: ' walking in the door. We grew ' },
        {
          type: 'chip',
          value: 'revenue 25%',
          signal: true,
          feedback:
            '25% growth sounds great — but if every sale is one-time, this growth must be entirely rebuilt next year. Fragile.',
        },
        { type: 'text', value: ' by running ' },
        {
          type: 'chip',
          value: 'aggressive promotions',
          signal: true,
          feedback:
            'Promotions attract deal-seekers, not loyal customers. This revenue disappears the moment the ad budget gets cut.',
        },
        { type: 'text', value: '. We have ' },
        {
          type: 'chip',
          value: 'great online reviews',
          signal: false,
          feedback: 'Good reviews are positive — not a red flag on their own.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'No customer has ever bought twice',
          signal: true,
          feedback:
            'Zero repeat purchases means zero revenue floor. The business has no compounding base — every year starts from zero.',
        },
        { type: 'text', value: ', but our average order is $800 so we don\'t need them to."' },
      ],
      requiredSignals: 3,
      reveal:
        'High revenue, strong growth, big average orders — and every single dollar is one-time. This business has no floor, no compounding, and no protection against a slow quarter.',
      takeaway:
        'Revenue that sounds impressive can still be structurally fragile. Always ask: "How much of this would still be here next year if growth stopped?"',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Drill: compounding vs. rebuilding
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Compounding vs. Rebuilding',
      topicIcon: Target,
      intro:
        "Each pair shows two businesses with the same revenue. Tap the one whose growth compounds instead of resetting.",
      prompts: [
        {
          setup: 'Both earn $500K/year.',
          left: { label: 'Meal-prep subscriptions', sublabel: '90% of customers stay' },
          right: { label: 'Catering company', sublabel: 'each event is one-time' },
          correct: 'left',
          flash: 'Subscriptions stack. Catering starts each month from zero.',
        },
        {
          setup: 'Both grew 15% last year.',
          left: { label: 'Furniture store', sublabel: 'growth from new one-time buyers' },
          right: { label: 'SaaS platform', sublabel: 'growth from new subscribers on top of 95% renewal' },
          correct: 'right',
          flash: 'SaaS adds new revenue on top of retained revenue. Furniture rebuilds from scratch.',
        },
        {
          setup: 'Both serve 1,000 customers.',
          left: { label: 'Property management', sublabel: 'monthly fees, multi-year contracts' },
          right: { label: 'Real estate agent', sublabel: 'commission per sale' },
          correct: 'left',
          flash: 'Management collects every month. Agents need a new deal to get paid.',
        },
        {
          setup: 'Both earn $10M/year.',
          left: { label: 'Concert promoter', sublabel: 'ticket sales per event' },
          right: { label: 'Music streaming', sublabel: '8M subscribers at $10/month' },
          correct: 'right',
          flash: 'Streaming revenue renews automatically. Concert revenue evaporates after curtain call.',
        },
        {
          setup: 'Both grew 20% last year.',
          left: { label: 'Accounting software', sublabel: 'annual licenses, 92% renew' },
          right: { label: 'Tax prep service', sublabel: 'seasonal, one filing per client' },
          correct: 'left',
          flash: 'Software keeps 92% and adds more. Tax prep restarts the sales cycle every spring.',
        },
        {
          setup: 'Both earn $3M/year.',
          left: { label: 'Car wash chain', sublabel: '$25 per visit' },
          right: { label: 'Cloud storage', sublabel: '$8/month per user, 96% retention' },
          correct: 'right',
          flash: 'Cloud storage compounds. Car washes depend on traffic and weather.',
        },
      ],
      takeaway:
        "Recurring businesses build on top of what they've already earned. One-time businesses rebuild from zero every period. That's the difference between compounding and treading water.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: thinking like an investor
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        "Two businesses, same price to invest in.\n\nBusiness A: Car wash chain. $3M/year. Each wash is a single transaction — pay $25, drive away. Revenue depends on weather, location, and marketing.\n\nBusiness B: Accounting software. $3M/year. Customers pay $100/month and stay 3+ years. Switching means migrating all financial data. 95% renew annually.",
      question: 'Which is worth more to an investor?',
      options: [
        'Equal — $3M is $3M',
        "Business B — its revenue is nearly guaranteed to repeat, and switching costs lock customers in",
        'Business A — simpler business, easier to understand',
        'Business A — more locations means more growth potential',
      ],
      correctIndex: 1,
      punchline:
        "Business B's revenue is almost certain to be there next year — and the year after. That certainty is exactly why subscription companies trade at 3-5x the valuation of similar-sized one-time businesses.",
      wrongNudges: [
        'Same revenue today hides completely different revenue quality. One is nearly guaranteed; the other resets to zero every day.',
        '',
        'Simplicity doesn\'t equal value. Easy to understand, hard to hold onto — that\'s the car wash problem.',
        'More locations multiplied by fragile revenue is still fragile. Scale doesn\'t fix the structural weakness.',
      ],
      takeaway:
        "Investors don't just buy revenue — they buy revenue quality. Predictable, repeating income with high switching costs commands a premium price.",
    },
  ],
  takeaways: [
    'Income that shows up automatically — without chasing new customers — is called recurring revenue, and investors value it more highly.',
    "The real test is what happens when new customers stop showing up. Recurring revenue creates a floor; one-time revenue craters.",
    'Growth from repeat customers compounds naturally. Growth from one-time sales has to be rebuilt from scratch every year.',
    'Subscription businesses trade at premium valuations because predictable, repeating income reduces uncertainty — and reducing uncertainty is what investors pay for.',
  ],
  completionMessages: {
    perfect:
      "You've nailed it. You understand that reliable, repeating income is worth more than income you have to re-earn — that's one of the most important ideas in investing.",
    great:
      'Strong instincts. You can already tell the difference between fragile revenue and durable revenue — that skill will serve you in every company you analyze.',
    good:
      "Good start. The core idea — recurring income is worth more — will click more deeply as you see it in real companies like Apple and Costco.",
    low:
      "Worth another look. This concept shows up everywhere in investing — once it clicks, you'll see it in every business you evaluate.",
  },
};
