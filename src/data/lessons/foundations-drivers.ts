import { Search, Activity, Anchor, TrendingUp } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsDriversLesson: Lesson = {
  id: 'foundations-drivers',
  emoji: '🔍',
  title: 'What Actually Drives a Business',
  subtitle: 'Learning to look underneath the headline numbers',
  description:
    "Two businesses can both grow 20% — but for completely different reasons. One might be adding new customers. Another might be getting existing customers to spend more. Another might just be raising prices. In this lesson, you'll learn to identify the one thing that really matters in a business, so you stop looking at the surface and start looking at what's underneath.",
  estimatedMinutes: 2,
  dataAsOf: '',
  keyFacts: [],
  topics: [
    { label: 'Why the same growth can mean very different things', icon: Search },
    { label: 'How to find the number that actually matters', icon: Activity },
    { label: 'What keeps a business alive vs. what grows it', icon: Anchor },
    { label: 'How investors use this to evaluate businesses', icon: TrendingUp },
  ],
  questions: [
    {
      topic: 'Same Growth, Different Engine',
      topicIcon: Search,
      context:
        'Two neighborhood restaurants both grew revenue 20% this year — from $500,000 to $600,000.\n\nRestaurant A grew by attracting more customers. It went from serving 200 people per week to 260. But each customer spends the same amount — about $45 per visit.\n\nRestaurant B serves the same 200 people per week it always has. But it revamped its menu, added a wine list, and now each customer spends $58 per visit instead of $45.',
      question: 'Both grew 20%. Which growth is more sustainable?',
      options: [
        'They\'re the same — 20% is 20% regardless of how you got there',
        'Restaurant A — more customers means more potential and a bigger audience',
        'Restaurant B — it\'s getting more value from customers who already chose it, without needing to find new people',
        'Restaurant A — attracting new customers proves the food is getting better',
      ],
      correctIndex: 2,
      explanation:
        'Restaurant A needs to keep finding 60 new customers every week just to maintain its growth. If a competitor opens nearby or foot traffic shifts, that growth evaporates. Restaurant B grew by deepening relationships with customers it already has — people who are choosing to spend more because they see more value. That growth is stickier because it doesn\'t depend on a constant flow of strangers. This distinction matters enormously. Growth from new customers requires constant effort and spending. Growth from existing customers spending more usually signals that the business is getting better at delivering value. Investors often call this revenue per customer — and when it\'s rising, it\'s one of the strongest signs of a healthy business.',
      wrongExplanations: [
        'The growth rate is the same, but the quality is very different. Restaurant A must keep finding new people or revenue falls back. Restaurant B has the same loyal base spending more. If you only look at the headline number — 20% — you miss the most important part of the story. Always ask how a business grew, not just how much.',
        '',
        'More customers sounds exciting, but it\'s the harder way to grow. Every new customer costs money to attract (marketing, promotions, discounts) and might not come back. A bigger audience is only valuable if you can keep them. Restaurant A hasn\'t proven it can keep its new customers — it\'s just proven it can attract them once.',
        'New customers don\'t prove the food improved — they might have come because of a promotion, a new housing development nearby, or a competitor closing. You can\'t tell from customer count alone. Restaurant B\'s existing customers choosing to spend more is actually stronger evidence that the experience improved.',
      ],
      takeaway: 'The same growth rate can come from very different sources. Growth from existing customers spending more is usually more durable than growth from finding new ones. Always ask: "How did this business grow?" — not just "How much?"',
    },
    {
      topic: 'Finding the Number That Matters',
      topicIcon: Activity,
      context:
        'You own a small tutoring business. You track these numbers monthly:\n\n• Total revenue: $24,000 (down from $28,000 last month)\n• Number of students enrolled: 40 (same as last month)\n• Average sessions per student per month: 3 (down from 3.5)\n• Price per session: $200 (same as last month)\n• New student inquiries: 15 (up from 12)\n\nSomething caused revenue to drop. You need to figure out what.',
      question: 'Which number explains the revenue decline?',
      options: [
        'New inquiries dropped — fewer people are interested',
        'Price per session is too high — students are going elsewhere',
        'Students are booking fewer sessions per month — the same 40 students are coming less often',
        'You need more students — 40 isn\'t enough',
      ],
      correctIndex: 2,
      explanation:
        'The math is straightforward: 40 students × 3 sessions × $200 = $24,000. Last month: 40 × 3.5 × $200 = $28,000. Price didn\'t change. Student count didn\'t change. Inquiries actually went up. The only thing that moved was sessions per student — from 3.5 to 3. That\'s your answer. This exercise teaches a critical investor skill: when a number changes, trace it back to what actually moved. Revenue is an output — it\'s the result of other things multiplied together. When revenue drops, beginners panic about the headline. Experienced investors ask which input changed. The input that drives the output is called the key driver. For this tutoring business, sessions per student is the key driver. If you can fix that one number, revenue recovers — no matter what happens to inquiries or pricing.',
      wrongExplanations: [
        'Inquiries went up, not down — from 12 to 15. This is a common mistake: assuming the problem must be about demand when the data shows demand is actually growing. Always check the numbers before guessing the narrative.',
        '',
        'Price stayed at $200 — it didn\'t change at all. Jumping to "the price is too high" without checking whether the price actually moved is a classic error. It feels intuitive because price is the most visible number, but the data says price wasn\'t the issue here.',
        'Student count is exactly 40, the same as last month. Saying "you need more students" might be true as general advice, but it doesn\'t explain this month\'s decline. The decline happened with the same number of students — so the problem is per-student behavior, not headcount.',
      ],
      takeaway: 'Revenue is an output — it\'s the result of other numbers multiplied together. When it changes, don\'t react to the headline. Trace it back to the specific input that moved. That input is called the key driver, and it\'s the number you should actually be watching.',
    },
    {
      topic: 'Staying Alive vs. Growing',
      topicIcon: Anchor,
      context:
        'Two subscription snack box companies each have 5,000 subscribers paying $30/month.\n\nCompany A loses 400 subscribers every month (8% of its base). To stay at 5,000, it spends heavily on ads and promotions to replace them — about $50 to acquire each new subscriber.\n\nCompany B loses 50 subscribers per month (1% of its base). It spends almost nothing on marketing because customers stay and tell their friends.',
      question: 'Both have the same revenue today. What\'s the critical difference?',
      options: [
        'No real difference — they both have 5,000 subscribers and the same revenue',
        'Company A is better because it\'s more experienced at marketing and acquiring customers',
        'Company B is far stronger because its customers actually stay — Company A is running on a treadmill, spending $20,000/month just to stand still',
        'Company A will grow faster because it\'s already good at finding new customers',
      ],
      correctIndex: 2,
      explanation:
        'Company A replaces 400 subscribers per month at $50 each — that\'s $20,000 in monthly acquisition costs just to stay flat. If it ever stops spending, subscriber count drops fast. Company B loses only 50 per month and barely needs to market. Its customers stay because they love the product. This reveals the most important question for any subscription or repeat-purchase business: what percentage of customers stick around? Investors call this the retention rate (or its flip side, the churn rate). Company B retains 99% monthly; Company A retains only 92%. That 7-point gap is the difference between a business that compounds and one that\'s running on a treadmill. The thing keeping Company A alive isn\'t the product — it\'s the marketing budget. The thing keeping Company B alive is that customers genuinely want to stay.',
      wrongExplanations: [
        'Same revenue today hides a massive difference in how that revenue is maintained. Company A spends $20,000/month replacing lost subscribers. Company B spends almost nothing. Same snapshot, completely different health. This is why looking at a single month\'s numbers can be dangerously misleading.',
        '',
        'Being good at acquiring customers is valuable, but it\'s a crutch when you\'re acquiring them to replace the ones who keep leaving. Good marketing can\'t fix a product people don\'t want to keep. A business that needs constant acquisition spending just to stay flat has a retention problem, not a marketing advantage.',
        'Growing through acquisition only works when you can also keep the customers you find. Company A is adding 400/month and losing 400/month — it\'s not growing at all, it\'s treading water. If it spent even more to add 500/month, it would still lose 400. Growth without retention is a leak, not an engine.',
      ],
      takeaway: 'The thing that keeps a business alive and the thing that grows it can be very different. For subscription businesses, the key driver is usually retention — what percentage of customers stay. A high retention rate is an engine. A low one is a treadmill.',
    },
    {
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        'Two business owners pitch you for a $100,000 investment.\n\nOwner A says: "We grew revenue 30% last year! Our product is great, customers love us, and we\'re hiring fast. This is going to be huge."\n\nOwner B says: "We grew revenue 14% last year. Here\'s what drives our business: each customer uses our software an average of 4 times per week, up from 3 last year. When usage goes up, renewals go up — and renewals are 85% of our revenue. As long as weekly usage stays above 3, our revenue is predictable and growing."',
      question: 'Which pitch gives you more confidence as an investor?',
      options: [
        'Owner A — 30% growth speaks for itself, and enthusiasm matters',
        'Owner B — she identified the specific thing that drives her business and showed you why the growth is reliable',
        'Owner A — "customers love us" is the most important thing for any business',
        'Neither — you need to see the financial statements before deciding',
      ],
      correctIndex: 1,
      explanation:
        'Owner A gave you a headline number and enthusiasm. Owner B gave you a thesis: the business is driven by weekly usage, which drives renewals, which drives revenue. She told you the key driver (usage frequency), showed you it\'s improving, and explained the chain of cause and effect. If usage drops below 3 times per week, she knows — and you know — the business is in trouble. Owner A can\'t tell you what would signal trouble because he hasn\'t identified what drives the business. This is exactly what professional investors look for. They don\'t want to hear "we\'re growing fast." They want to understand the mechanism — what specific input drives the output, and whether that input is getting better or worse. A business whose owner understands its key driver is dramatically more likely to succeed than one whose owner just points at the revenue line.',
      wrongExplanations: [
        'A 30% growth rate with no explanation of what\'s driving it could be a one-time spike from a big contract, a marketing blitz, or a seasonal surge. Without understanding the driver, you can\'t tell if that growth will continue. Numbers without a mechanism are just trivia — they look impressive but don\'t tell you anything about the future.',
        '',
        '"Customers love us" is not a metric — it\'s a feeling. Lots of businesses with "loving" customers still fail because they can\'t retain them, can\'t monetize them, or can\'t tell when something is going wrong. Owner B didn\'t say "customers love us" — she showed you the data that proves they do (increasing usage and high renewals). Evidence beats enthusiasm.',
        'Financial statements are important, but they\'re backward-looking — they tell you what happened, not why. Owner B is telling you the forward-looking story: here\'s what drives the business, here\'s how it\'s trending, here\'s what to watch. That\'s more valuable for predicting the future than any spreadsheet of past results.',
      ],
      takeaway: 'The best investors don\'t just ask "how much did the business grow?" — they ask "what drives this business, and is that driver getting stronger or weaker?" A business whose owner can identify and track the key driver is far more trustworthy than one that just points at the headline growth number.',
    },
  ],
  takeaways: [
    'The same growth number can come from very different sources — always ask how a business grew, not just how much.',
    'Revenue is an output. When it changes, trace it back to the specific input that moved. That input is the key driver.',
    'For repeat-purchase businesses, the key driver is usually retention — are customers staying? A business that has to constantly replace lost customers is on a treadmill.',
    'Before investing, identify the one thing that drives the business. If the owner can\'t tell you what it is, that\'s a red flag. If they can, you know exactly what to watch.',
  ],
  completionMessages: {
    perfect: "Excellent. You can already look past headline numbers and find what actually makes a business tick. That's the core skill of fundamental analysis.",
    great: "Strong work. You're learning to ask 'what drives this?' instead of just 'how much?' — that separates real analysis from surface-level number reading.",
    good: "Good foundation. The habit of tracing revenue back to its driver will make every company lesson much easier to understand.",
    low: "Worth revisiting. Every company you'll analyze in later lessons has one or two key drivers — once you can spot them, everything else falls into place.",
  },
};
