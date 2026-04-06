import { Repeat, CloudRain, TrendingUp, Landmark } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle: 'Why income you can count on is worth more than income you have to chase',
  description:
    "Some businesses have to find new customers every single day just to keep the lights on. Others have customers who pay them again and again, month after month, without being asked. In this lesson, you'll build the intuition for why that difference matters — and why investors care about it so much.",
  estimatedMinutes: 2,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['recurring_revenue'],
  keyFacts: [],
  topics: [
    { label: 'Why predictable income beats one-time income', icon: Repeat },
    { label: 'What happens when new customers stop showing up', icon: CloudRain },
    { label: 'Why some growth is more valuable than other growth', icon: TrendingUp },
    { label: 'How investors use this to value businesses', icon: Landmark },
  ],
  questions: [
    {
      topic: 'Predictable vs. Uncertain',
      topicIcon: Repeat,
      context:
        'Two gyms earn the same amount this month: $50,000 each.\n\nGym A sells day passes. Every dollar it earned came from someone walking in and paying $15 that day. Tomorrow, it starts at zero again and needs new walk-ins to make money.\n\nGym B sells monthly memberships at $50/month. It has 1,000 members who are automatically billed. Most of them have been members for over a year.',
      question: 'If you had to pick one gym to own for the next 12 months, which would you choose?',
      options: [
        'Either one — they both made $50,000 this month, so they\'re equally good',
        'Gym A — day passes mean more flexibility and it\'s not locked into any commitments',
        'Gym B — its 1,000 members will almost certainly keep paying next month, so the income is far more predictable',
        'Gym A — more individual customers means a bigger potential audience',
      ],
      correctIndex: 2,
      explanation:
        'Gym B wakes up on the first of every month knowing that most of its $50,000 is already spoken for. Gym A wakes up at zero and has to earn every dollar from scratch. Over 12 months, Gym B\'s income is predictable and plannable. Gym A\'s income depends entirely on weather, foot traffic, competition, and luck — any bad week hits immediately. Investors call this recurring revenue — income that repeats automatically because customers have an ongoing relationship with the business. It\'s worth more than one-time revenue because you can count on it being there next month.',
      wrongExplanations: [
        'Same revenue today doesn\'t mean same revenue tomorrow. Gym B has 1,000 members who will likely pay again next month. Gym A has zero guaranteed income for tomorrow. Treating them as equal because they had one good month ignores the most important question: which income is reliable?',
        '',
        'Flexibility sounds nice, but in business it usually means uncertainty. Day passes give the gym no ability to plan, hire, or invest with confidence. Memberships create a stable base that makes every business decision easier. What feels like "freedom" to a day-pass gym is actually fragility.',
        'More individual customers doesn\'t mean more reliable income. A thousand members who pay every month are far more valuable than thousands of one-time visitors who may never return. Customer count only matters if those customers come back.',
      ],
      takeaway: 'Income that shows up automatically — month after month, without chasing new customers — is worth more than income you have to re-earn every day. Investors call this recurring revenue.',
    },
    {
      topic: 'The Slow Month Test',
      topicIcon: CloudRain,
      context:
        'It\'s January — the slowest month for new customers in most businesses. Two business owners compare notes:\n\nOwner A runs a wedding photography business. She earns $8,000-$15,000 per wedding, but each booking is a one-time event. In January, she has zero weddings booked. Her income this month: $0.\n\nOwner B runs a dog-walking service with 40 regular clients who each pay $200/month on an ongoing basis. Some months she adds a few clients, some months she loses one. In January, even with no new clients, her income is about $8,000.',
      question: 'What does January reveal about the difference between these two businesses?',
      options: [
        'It doesn\'t reveal much — Owner A will bounce back in wedding season',
        'Owner B\'s business is more resilient because her existing clients keep paying even when no new ones show up',
        'Owner A\'s business is better because she earns more per customer',
        'Owner B should raise her prices since her clients are loyal',
      ],
      correctIndex: 1,
      explanation:
        'January is the stress test. Owner A\'s income goes to zero the moment new bookings stop — every dollar depends on finding the next customer. Owner B still earns $8,000 because her income comes from existing relationships, not new sales. This is the core advantage of recurring revenue: it creates a floor. Even in the worst month, money keeps coming in. Owner A might earn more in peak season, but she can\'t plan around it, can\'t hire with confidence, and one bad quarter could be devastating. A business with repeat income from existing customers is more resilient than one that depends entirely on the next sale.',
      wrongExplanations: [
        'She probably will bounce back — but that\'s exactly the problem. Her income swings from $0 to $15,000 depending on the season. She can\'t plan, she can\'t hire full-time help, and she has to survive the down months on savings. A business that goes to zero in slow months has a structural vulnerability, even if peak months are great.',
        '',
        'Earning more per customer isn\'t the advantage it seems if each customer only pays once. Owner A earns $10,000 per wedding but needs to find a new client every time. Owner B earns $200/month per client but the same 40 clients pay her year after year. Over time, the steady income compounds while the one-time income resets to zero.',
        'Pricing strategy is a separate question. The key insight here isn\'t about pricing — it\'s about the structure of the income. Repeat payments from existing clients create stability that one-time payments simply can\'t match, regardless of the price point.',
      ],
      takeaway: 'The real test of a business is what happens when new customers stop showing up. Businesses with repeat income from existing customers have a floor. Businesses that depend on the next sale start at zero every month.',
    },
    {
      topic: 'Which Growth Is Real?',
      topicIcon: TrendingUp,
      context:
        'Two businesses both grew their revenue over the past year.\n\nBusiness A is a furniture store. Revenue grew 20% — from $1 million to $1.2 million. But almost every sale was to a new customer buying a one-time item. To keep growing, it needs to find even more new buyers next year.\n\nBusiness B is a meal-prep delivery service. Revenue grew 12% — from $500,000 to $560,000. But 90% of last year\'s customers are still subscribed and paying weekly. The growth came from adding just a few dozen new subscribers on top of a loyal base.',
      question: 'Which business had more valuable growth?',
      gutCheck: {
        prompt: 'Quick gut check — just go with your first instinct:',
        nudge: 'No wrong answer. Just commit to your initial reaction.',
        options: [
          'Business A — the one that grew 20%',
          'Business B — the one that grew 12%',
        ],
        reflections: [
          'Your gut said Business A — the one with 20% growth. That\'s the natural instinct: a bigger growth number feels like a better result. But this is where "how much" and "how" start to diverge. Business A\'s 20% came entirely from new one-time buyers — none of last year\'s customers came back. Business B\'s 12% came from adding a few subscribers on top of a base where 90% of customers are still paying. Business A has to rebuild its entire revenue next year. Business B starts next year with most of its revenue already locked in.',
          'Your gut said Business B — sharp instinct. You sensed that 12% growth built on loyal customers might be more valuable than 20% built on one-time buyers. That\'s exactly right. Business B starts next year with ~90% of its revenue already committed. Business A starts at zero and has to re-find every customer. The deeper lesson: growth that compounds on a stable base is worth more than growth that has to be rebuilt from scratch, even when the percentage is lower.',
        ],
      },
      options: [
        'Business A — 20% growth is better than 12% growth, period',
        'Business B — its growth is built on a loyal base that keeps paying, so next year\'s revenue is already mostly locked in',
        'Business A — furniture is a bigger market with more potential',
        'They\'re equal — growth is growth regardless of how you got there',
      ],
      correctIndex: 1,
      explanation:
        'Business A grew faster, but its growth is fragile. It depends entirely on finding new customers — if marketing stops working or competition increases, revenue could stall or shrink overnight. Business B grew slower, but 90% of its revenue is already committed for next year. It only needs a few new subscribers to keep growing. This is the difference between one-time growth and compounding growth. When existing customers keep paying, each new customer you add sits on top of a stable base. When every sale is one-time, you\'re rebuilding from scratch each year. Investors have a term for this: they measure what percentage of revenue is recurring — meaning it\'s expected to repeat without needing to re-sell the customer.',
      wrongExplanations: [
        'A higher growth rate from one-time sales is less reliable than a lower growth rate from repeat customers. If Business A\'s marketing budget gets cut or competition increases, that 20% growth can vanish in a quarter. Business B\'s 12% growth is built on a base of customers who are still paying — it\'s durable. Not all growth percentages are created equal.',
        '',
        'Market size doesn\'t help if you can\'t hold onto customers. A bigger market with one-time buyers means more competition for each sale. A smaller market with loyal subscribers can be far more profitable and predictable. "Big market" is a potential — recurring customers are a reality.',
        'How you grow determines whether growth continues. Growth from new one-time buyers must be entirely re-created next year. Growth from subscribers compounds — last year\'s customers are still there, so you only need to add a little more. This distinction is one of the most important things investors evaluate.',
      ],
      takeaway: 'Not all growth is equal. Growth built on customers who keep paying compounds naturally. Growth built on one-time sales has to be re-earned from scratch every year. Investors always ask: "How much of this revenue is recurring?"',
    },
    {
      topic: 'Thinking Like an Investor',
      topicIcon: Landmark,
      context:
        'You\'re choosing between investing in two businesses at the same price:\n\nBusiness A: A chain of car washes. Earns $3 million per year. Each car wash is a single transaction — the customer pays $25, drives away, and might or might not come back. Revenue depends heavily on weather, location traffic, and marketing.\n\nBusiness B: An accounting software company. Earns $3 million per year. Customers pay $100/month and most stay for 3+ years. Switching to a different software means migrating all their financial data, which is painful. 95% of customers renew each year.',
      question: 'If both cost the same to invest in, which is worth more to an investor?',
      options: [
        'They\'re worth the same — $3 million is $3 million',
        'Business A — car washes are simpler, easier to understand, and deal in cash',
        'Business B — its customers pay every month, almost never leave, and switching is difficult, which makes next year\'s revenue nearly guaranteed',
        'Business A — it has more locations and more individual customers',
      ],
      correctIndex: 2,
      explanation:
        'Both earn $3 million today, but Business B\'s revenue is almost certain to be there next year — and the year after. A 95% renewal rate means only 5% of customers leave annually, and switching costs make it hard for competitors to poach them. Business A starts each day hoping for foot traffic. This is exactly why investors pay premium prices for businesses with recurring revenue and high renewal rates. In the stock market, software companies with subscription models routinely trade at 3-5x the valuation of similar-sized businesses with one-time sales. You now understand the reason: predictable, repeating income is worth more because it reduces uncertainty. And reducing uncertainty is what investors pay for.',
      wrongExplanations: [
        '',
        'Simplicity doesn\'t equal value. A car wash is easy to understand, but its revenue is unpredictable and must be re-earned daily. Accounting software is harder to build, but once customers adopt it, they stay for years. Investors don\'t pay for simplicity — they pay for predictability.',
        '',
        'More locations and customers don\'t matter if each interaction is one-time. One thousand car wash visits from people who may never return is worth less than 100 software subscribers who pay every month for years. What matters isn\'t how many customers pass through — it\'s how many stay.',
      ],
      takeaway: 'Investors pay more for businesses where income repeats automatically and customers are unlikely to leave. This is why subscription businesses are valued so much higher than transaction-based ones — and why "recurring revenue" is one of the most important terms in investing.',
    },
  ],
  takeaways: [
    'Income that shows up automatically every month — without needing to chase new customers — is called recurring revenue, and investors value it more highly.',
    'The real test of a business is what happens when new customers stop showing up. Recurring revenue creates a floor; one-time revenue starts at zero every month.',
    'Not all growth is equal. Growth from repeat customers compounds; growth from one-time sales has to be rebuilt from scratch each year.',
    'You now understand why subscription businesses trade at premium valuations: predictable, repeating income reduces uncertainty, and reducing uncertainty is what investors pay for.',
  ],
  completionMessages: {
    perfect: "You've nailed it. You understand that reliable, repeating income is worth more than income you have to re-earn — that's one of the most important ideas in investing.",
    great: "Strong instincts. You can already tell the difference between fragile revenue and durable revenue — that skill will serve you in every company you analyze.",
    good: "Good start. The core idea — recurring income is worth more — will click more deeply as you see it in real companies like Apple and Costco.",
    low: "Worth another look. This concept shows up everywhere in investing — once it clicks, you'll see it in every business you evaluate.",
  },
};
