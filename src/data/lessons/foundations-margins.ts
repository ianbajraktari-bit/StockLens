import { Coins, Scale, ShieldCheck, TrendingUp } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMarginsLesson: Lesson = {
  id: 'foundations-margins',
  emoji: '💡',
  title: 'What a Business Keeps',
  subtitle: 'Why earning money and keeping money are different skills',
  description:
    "Before you analyze any stock, you need one fundamental intuition: how much a business earns and how much it actually keeps are two very different things. In this lesson, you'll compare simple businesses side by side to build that instinct from scratch. No jargon — just common sense.",
  estimatedMinutes: 2,
  dataAsOf: '',
  keyFacts: [],
  topics: [
    { label: 'Why keeping more matters', icon: Coins },
    { label: 'Why bigger sales can be misleading', icon: Scale },
    { label: 'Why keepers survive and squeezers don\'t', icon: ShieldCheck },
    { label: 'How investors actually use this', icon: TrendingUp },
  ],
  questions: [
    {
      topic: 'Keeping vs. Earning',
      topicIcon: Coins,
      context:
        'Two bakeries each sell $1,000 worth of bread and pastries every day.\n\nBakery A spends $900 per day on ingredients, rent, and staff — and keeps $100.\nBakery B spends $600 per day on the same things — and keeps $400.\n\nBoth sell the same amount. Both are open the same hours.',
      question: 'Which bakery is the stronger business?',
      options: [
        'They\'re equal — they both sell $1,000 per day',
        'Bakery B — it keeps $400 out of every $1,000, four times more than Bakery A',
        'Bakery A — spending more means it probably has better ingredients and will attract more customers',
        'It depends on which one has more locations',
      ],
      correctIndex: 1,
      explanation:
        'Bakery B keeps 40 cents of every dollar it earns. Bakery A keeps only 10 cents. That means Bakery B has four times more cash left over to save, reinvest, hire, or survive a bad month. Sales tell you the size of a business. What it keeps tells you the strength of a business. Investors have a name for this: profit margin — the share of each dollar of revenue that the business actually gets to keep. Bakery B has a 40% profit margin. Bakery A has a 10% margin. From this point on, whenever you evaluate a business, ask: "How much does it actually keep?"',
      wrongExplanations: [
        'Same sales doesn\'t mean same strength. If one bakery keeps $100 and the other keeps $400, the second has far more room to invest, absorb setbacks, or grow. Revenue tells you scale — but what a business keeps tells you quality. This is the most common mistake beginners make: assuming sales = success.',
        '',
        'Spending more doesn\'t mean better quality — it could mean waste, high rent, or inefficiency. A business that spends less to generate the same revenue is usually better managed, not worse. Assuming "more spending = better product" confuses costs with quality.',
        'Number of locations tells you size, not strength. A bakery that keeps 10 cents on the dollar doesn\'t get stronger by opening more locations — it just multiplies a thin business. What matters first is how much each location keeps.',
      ],
      takeaway: 'Sales tell you how big a business is. What it keeps tells you how strong it is. Investors call this profit margin — the percentage of each dollar that doesn\'t get eaten by costs.',
    },
    {
      topic: 'The Revenue Trap',
      topicIcon: Scale,
      context:
        'You\'re choosing between two businesses to invest your savings in.\n\nBusiness A: A busy restaurant chain. $2 million in annual sales. After paying for food, rent, wages, and everything else, it keeps $40,000 per year. That\'s 2 cents kept per dollar earned.\n\nBusiness B: A small software tool for dentists. $400,000 in annual sales. After costs, it keeps $160,000 per year. That\'s 40 cents kept per dollar earned.',
      gutCheck: {
        prompt: 'Quick gut check — before you analyze, just go with your instinct:',
        nudge: 'There\'s no wrong answer here. Just commit to your first reaction.',
        options: [
          'Business A — the one with $2 million in sales',
          'Business B — the one with $400,000 in sales',
        ],
      },
      question: 'Which business would you rather own a piece of?',
      options: [
        'Business A — $2 million in sales is far more impressive than $400,000',
        'Business B — it keeps $160,000 on $400,000 in sales, which means it turns revenue into real profit far more efficiently',
        'Business A — restaurants are more established and familiar, so they\'re safer',
        'Neither — both are too small to invest in',
      ],
      correctIndex: 1,
      explanation:
        'Business A looks bigger, but it keeps only 2 cents of every dollar — after costs, $2 million in sales produces just $40,000 in profit. Business B keeps 40 cents of every dollar and produces 4x more actual profit on 1/5 the revenue. This is the revenue trap: big sales numbers can hide a weak business. What you actually own when you invest is a share of the profit, not a share of the sales. A business with a high profit margin (like Business B at 40%) turns revenue into real money. A business with a thin margin (like Business A at 2%) works incredibly hard just to break even.',
      wrongExplanations: [
        '',
        '',
        'Familiarity doesn\'t equal safety. Restaurants are actually one of the riskiest business categories — they have very thin profit margins, high failure rates, and heavy competition. A dentist software tool with 40% margins and recurring customers is likely far more stable. "I\'ve heard of it" is not investment analysis.',
        'Business size is relative. A business keeping $160,000 per year with room to grow can be an excellent investment. Many of the best investments start small — the question is how much they keep per dollar, not how big they are today.',
      ],
      takeaway: 'Don\'t be fooled by big revenue numbers. A business earning $400,000 and keeping $160,000 is stronger than one earning $2 million and keeping $40,000. Profit margin tells you how efficiently a business turns sales into real money.',
    },
    {
      topic: 'Who Survives a Bad Month?',
      topicIcon: ShieldCheck,
      context:
        'Two coffee shop owners face the same problem: their supplier raises the price of coffee beans by 20%.\n\nShop A keeps 5 cents of every dollar it earns. The cost increase wipes out almost all of its profit. The owner is now barely breaking even and considering closing.\n\nShop B keeps 35 cents of every dollar it earns. The cost increase hurts — profit drops — but the shop still keeps about 25 cents per dollar and stays comfortably profitable.',
      question: 'What does this tell you about why keeping more per dollar matters?',
      options: [
        'It doesn\'t matter — both shops are hurt by the cost increase, so they\'re equally affected',
        'Shop A should just raise its prices to cover the cost increase',
        'A business that keeps more per dollar has a cushion to absorb cost increases, bad months, and surprises — it\'s more resilient',
        'This only matters for coffee shops, not for large companies',
      ],
      correctIndex: 2,
      explanation:
        'This is why profit margin isn\'t just an accounting number — it\'s a survival metric. Shop A operates on a razor\'s edge: one cost increase, one slow month, one broken espresso machine, and it\'s in trouble. Shop B has a cushion. It can absorb setbacks, invest in improvements, or wait out a bad quarter without panicking. This same logic applies to every business, including the biggest companies in the world. Apple keeps about 25 cents per dollar. A typical grocery chain keeps about 2 cents. When something goes wrong — a recession, a supply chain disruption, a new competitor — the high-margin business has room to adapt. The thin-margin business gets squeezed.',
      wrongExplanations: [
        'They are not equally affected. Shop A loses almost all its profit; Shop B loses some but stays healthy. A 20% cost increase hitting a 5% margin is existential. The same increase hitting a 35% margin is a setback. The difference between "barely surviving" and "absorbing the hit" is exactly the point.',
        'Raising prices sounds simple, but it\'s often not possible. If customers can walk across the street to a cheaper competitor, you lose sales. Businesses with thin margins often can\'t raise prices because their only competitive advantage is being cheap — and raising prices destroys that. High-margin businesses have more pricing flexibility because customers value them for reasons beyond price.',
        '',
        'This applies to every industry. Amazon runs at thin margins (~5%) and is vulnerable to cost squeezes — it compensates with enormous scale. Microsoft keeps ~35 cents per dollar and can absorb almost anything. The principle is the same whether you\'re selling coffee or cloud computing. Scale changes the math, but the logic holds.',
      ],
      takeaway: 'Profit margin is a survival metric. Businesses that keep more per dollar can absorb cost increases, bad months, and competitive pressure. Thin-margin businesses live on the edge — one surprise can tip them into losses.',
    },
    {
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        'You\'re comparing two real types of businesses that you could invest in:\n\nCompany A: A big electronics retailer. It sells $50 billion worth of products per year. After all costs, it keeps about $500 million — roughly 1 cent per dollar. It needs to constantly buy inventory, lease huge stores, and run sales to get people through the door.\n\nCompany B: A software company that sells subscriptions. It earns $5 billion per year. After all costs, it keeps about $1.5 billion — roughly 30 cents per dollar. Customers pay monthly and rarely cancel.',
      question: 'If both stocks cost the same amount, which is the more attractive investment and why?',
      options: [
        'Company A — $50 billion in sales is 10x larger, so it must be worth more',
        'Company B — it keeps 30x more per dollar earned, and its customers pay every month without the company needing to constantly chase new sales',
        'Company A — physical stores are more "real" than software, so the business is more solid',
        'They\'re equal — you can\'t compare different industries',
      ],
      correctIndex: 1,
      explanation:
        'Company B earns 1/10 the revenue but keeps 3x more actual profit — and that profit is more predictable because customers pay recurring subscriptions instead of making one-time purchases. This is exactly how investors evaluate real companies. They don\'t just ask "how much does it sell?" — they ask "how much does it keep, and how reliable is that income?" A business with a 30% profit margin and recurring revenue is worth far more to investors than one with a 1% margin that has to fight for every sale. This is why software companies often trade at much higher valuations than retailers — and now you understand the reason behind that pattern.',
      wrongExplanations: [
        '',
        '',
        '"Real" assets like stores and inventory can actually be liabilities — they\'re expensive to maintain, they lose value, and they tie up cash. Software has almost no physical cost to deliver. "It has a building" is not an investment thesis. What matters is profit quality, not physical presence.',
        'You absolutely can — and must — compare across industries. Every investment competes for the same dollar in your portfolio. If Company B keeps 30 cents per dollar and Company A keeps 1 cent, that comparison matters regardless of industry. The ability to compare unlike businesses on common fundamentals is one of the most important investing skills.',
      ],
      takeaway: 'Investors don\'t just compare sales — they compare how much each business keeps and how predictable that income is. A business with high profit margins and recurring revenue is usually worth more than one with huge sales but paper-thin margins. Now you know the foundation that drives stock valuation.',
    },
  ],
  takeaways: [
    'How much a business sells and how much it keeps are two very different things — what it keeps is what matters.',
    'Profit margin is the share of each dollar a business gets to keep after all costs. Higher margins usually mean a stronger, more resilient business.',
    'Big revenue numbers can be misleading. A smaller business that keeps 30 cents per dollar is often stronger than a huge one keeping 1 cent.',
    'You now have the foundational instinct behind how investors evaluate businesses: it\'s not about size — it\'s about what the business keeps, and whether that income is predictable.',
  ],
  completionMessages: {
    perfect: "You've nailed the most fundamental concept in business analysis. Everything you learn from here builds on this instinct.",
    great: "Strong foundation. You understand that what a business keeps matters more than what it sells — that puts you ahead of most beginners.",
    good: "Good start. The core idea — margins matter more than revenue — will make everything else in investing click faster.",
    low: "Worth revisiting. This concept is the single most important foundation for everything else you'll learn about investing.",
  },
};
