import { DollarSign, TrendingUp, PieChart, Lightbulb, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBasicsLesson: Lesson = {
  id: 'foundations-basics',
  emoji: '💰',
  title: 'Follow the Money',
  subtitle: 'Revenue, costs, profit — and why investors care',
  description:
    "Before you can evaluate any company, you need to understand the three numbers that define every business: how much money comes in, how much goes out, and what's left. This lesson starts from scratch — no jargon, no assumptions.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'Revenue — the money that flows in', icon: DollarSign },
    { label: 'Costs — the money that flows out', icon: PieChart },
    { label: 'Profit — what the business actually keeps', icon: TrendingUp },
    { label: 'What owning a stock really means', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Revenue vs Cost recognition
    //
    // Why a drill: beginners genuinely confuse these. The tricky
    // prompts (refunds, ad revenue) teach real concepts. Every
    // subsequent lesson assumes instant recognition.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Money In vs. Money Out',
      topicIcon: Zap,
      intro: 'Every business has money flowing in and money flowing out. Sort each item.',
      prompts: [
        {
          setup: 'A coffee shop receives $400 from customers today.',
          left: { label: 'Revenue', sublabel: 'money flowing in' },
          right: { label: 'Cost', sublabel: 'money flowing out' },
          correct: 'left',
          flash: 'Revenue is the money customers pay you. It\'s the starting point — but not the finish line.',
        },
        {
          setup: 'The shop pays $3,200/month for rent.',
          left: { label: 'Revenue' },
          right: { label: 'Cost', sublabel: 'money flowing out' },
          correct: 'right',
          flash: 'Rent is a cost — money leaving the business. Every dollar spent on costs is a dollar that doesn\'t become profit.',
        },
        {
          setup: 'A software company gets $20/month from each of its 5,000 subscribers.',
          left: { label: 'Revenue', sublabel: '$100,000/month flowing in' },
          right: { label: 'Cost' },
          correct: 'left',
          flash: '5,000 × $20 = $100,000/month in revenue. Revenue counts ALL money flowing in from customers.',
        },
        {
          setup: 'That same company pays 12 engineers a total of $60,000/month.',
          left: { label: 'Revenue' },
          right: { label: 'Cost', sublabel: 'money flowing out' },
          correct: 'right',
          flash: 'Salaries are costs. For software companies, people are often the single biggest expense — sometimes 50–70% of revenue.',
        },
        {
          setup: 'A customer returns a $200 product for a full refund.',
          left: { label: 'Revenue', sublabel: 'it was originally a sale' },
          right: { label: 'Cost', sublabel: 'money leaving the business' },
          correct: 'right',
          flash: 'Refunds mean money flowing out. The original sale effectively didn\'t happen. Investors watch return rates closely.',
        },
        {
          setup: 'A website earns $3 every time someone clicks an ad on its page.',
          left: { label: 'Revenue', sublabel: 'money flowing in' },
          right: { label: 'Cost' },
          correct: 'left',
          flash: 'Ad revenue is still revenue. Not all revenue comes from selling products — some businesses earn money from attention.',
        },
      ],
      takeaway:
        'Revenue is money in. Costs are money out. Get this wrong and nothing else in investing makes sense.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Calculate profit
    //
    // Why an estimate: the user must do the actual math. Profit =
    // Revenue − Costs is THE foundational equation.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'What\'s Left Over',
      topicIcon: Calculator,
      context:
        'A food truck sells $12,000 worth of tacos in a month. Here are the costs:\n\n• Ingredients: $3,500\n• Truck payment: $1,200\n• Gas & parking fees: $800\n• One employee: $2,500\n\nTotal costs: $8,000.',
      question: 'What\'s the food truck\'s monthly profit?',
      answer: 4000,
      tolerance: 500,
      unit: '$',
      hint: 'Revenue ($12,000) minus total costs ($8,000)',
      reveal:
        '$12,000 − $8,000 = $4,000. That\'s profit — the money left over after every cost is paid. This is what the owner actually takes home. When investors evaluate a business, this number matters more than revenue — because you can\'t spend revenue, only profit.',
      takeaway: 'Profit = Revenue − Costs. This is the number that actually matters. Revenue is how big the business looks. Profit is how healthy it is.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: Revenue vs profit — which matters?
    //
    // Why a decide: this corrects the #1 beginner mistake (big
    // revenue = good business). Requires actual judgment.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Trap Beginners Fall Into',
      topicIcon: Flag,
      context:
        'Two businesses filed their annual numbers:\n\nBusiness A (local law firm): Revenue $800K, Costs $400K, Profit $400K\nBusiness B (trendy restaurant): Revenue $2.5M, Costs $2.4M, Profit $100K\n\nYou can buy 10% of either business.',
      question: '10% of A gets you $40,000/year. 10% of B gets you $10,000/year. Which do you pick?',
      options: [
        'Business B — $2.5M in revenue means it\'s the bigger, better business',
        'Business A — 10% of $400K profit ($40K/year) beats 10% of $100K profit ($10K/year)',
        'Business B — restaurants have more growth potential than law firms',
        'Can\'t decide without more information',
      ],
      correctIndex: 1,
      punchline:
        'Revenue is vanity, profit is sanity. Business B does 3x the revenue but you\'d take home 4x less. When you own a piece of a business, you own a piece of the profit — not the revenue.',
      wrongNudges: [
        'Revenue measures how much flows through the business — not how much stays. $2.5M in revenue with $100K in profit means 96 cents of every dollar goes right back out the door.',
        '',
        'Growth potential is worth considering, but a restaurant spending $2.4M to earn $2.5M has almost no room for error. One bad month wipes out the entire year\'s profit.',
        'You have enough information. Revenue and profit tell you exactly what each ownership stake is worth per year. When the numbers are this clear, hesitating is just avoiding the decision.',
      ],
      takeaway: 'Beginners look at revenue. Investors look at profit. A business that earns millions but keeps almost nothing is worse than one that earns less but keeps a lot.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Estimate: What one share of stock represents
    //
    // Why an estimate: this is THE bridge between "business" and
    // "stock." Introduces earnings per share without using jargon.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'What Owning a Stock Means',
      topicIcon: Calculator,
      context:
        'A company called FreshJuice Inc. makes $10 million in profit per year. The company is split into 1,000,000 equal shares. Each share represents an identical piece of the business — and an identical piece of the profit.\n\nWhen you buy one share of stock, you\'re buying a claim on your piece of that profit.',
      question: 'How much annual profit does one share represent?',
      answer: 10,
      tolerance: 1,
      unit: '$',
      hint: '$10,000,000 ÷ 1,000,000 shares',
      reveal:
        '$10,000,000 ÷ 1,000,000 = $10 per share. On Wall Street, this is called "earnings per share" (EPS). When someone says a stock "earns $10 per share," they mean the business generates $10 of annual profit for every share that exists. This is the number that connects a business to its stock price.',
      takeaway: 'A stock is a piece of a business\'s profit. Earnings per share (EPS) tells you how much profit each share generates. This connects everything: business → profit → your ownership.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: Reading a business description like an investor
    //
    // Why a tap: teaches the user to filter signal from noise. This
    // is the skill they'll use in every company lesson that follows.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Signal vs. Noise',
      topicIcon: Flag,
      intro: 'Here\'s a pitch for FreshJuice Inc. Tap the details that actually tell you about profitability.',
      passage: [
        { type: 'text', value: '"FreshJuice has ' },
        {
          type: 'chip',
          value: '50 locations across the country',
          signal: false,
          feedback: 'Location count tells you about scale — but 50 unprofitable locations are worse than 10 profitable ones. This doesn\'t tell you about profit.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Revenue grew 25% last year to $30 million',
          signal: true,
          feedback: 'Revenue growth matters — it tells you the business is getting bigger. But remember: revenue alone isn\'t enough. You need to know how much of it becomes profit.',
        },
        { type: 'text', value: '. The CEO was ' },
        {
          type: 'chip',
          value: 'featured on a popular podcast last month',
          signal: false,
          feedback: 'PR is nice but tells you nothing about the financials. Don\'t confuse visibility with profitability.',
        },
        { type: 'text', value: '. Ingredients cost $8M, rent is $6M, and staff costs $9M — ' },
        {
          type: 'chip',
          value: 'total costs are $23 million on $30M revenue',
          signal: true,
          feedback: 'Cost structure is critical. $23M in costs on $30M revenue means only $7M in profit — a 23% profit margin. Understanding where the money goes is essential.',
        },
        { type: 'text', value: '. The company just ' },
        {
          type: 'chip',
          value: 'redesigned its logo with a famous agency',
          signal: false,
          feedback: 'A logo has zero connection to profitability. Don\'t be distracted by surface polish.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Profit was $7 million — up from $5 million the year before',
          signal: true,
          feedback: 'Profit AND profit growth. This is the headline number. $7M this year vs $5M last year = 40% profit growth. The business is keeping more money over time.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'Three things matter to an investor: revenue growth (is the business getting bigger?), cost structure (where does the money go?), and profit trajectory (is more money staying each year?). The podcast, the logo, the location count — noise.',
      takeaway: 'Investors read business descriptions like a filter. Revenue, costs, and profit are signal. Everything else is noise until proven otherwise.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: The foundational investor question
    //
    // Why a decide: this is the synthesis. Cements the one question
    // that every subsequent lesson builds on.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investor\'s First Question',
      topicIcon: Lightbulb,
      context:
        'You now know that revenue is money in, costs are money out, profit is what\'s left, and a stock gives you a piece of that profit. Before you can evaluate any stock — Apple, NVIDIA, a tiny startup — there\'s one question you have to answer first.',
      question: 'What\'s the first question an investor asks about any business?',
      options: [
        'Is the stock price going up or down?',
        'How does this business make money — and how much does it keep?',
        'Is this company well-known and popular?',
        'How fast is revenue growing?',
      ],
      correctIndex: 1,
      punchline:
        'Price charts, brand recognition, and even revenue growth are secondary. If you don\'t understand how the business makes money and how much it keeps as profit, you\'re guessing — not investing.',
      wrongNudges: [
        'Stock prices move every second. Without understanding the business underneath, a rising price could be a bubble and a falling price could be a bargain. Price alone tells you nothing.',
        '',
        'Plenty of famous companies lose money. Plenty of obscure ones are extremely profitable. Fame and profitability are unrelated.',
        'Revenue growth matters — but a company can grow revenue 50% and still lose money. Growth without profit is just burning cash faster. Start with profit, then ask about growth.',
      ],
      takeaway: 'Every lesson that follows builds on this: understand the business first. How does money come in? Where does it go? What\'s left? Start here — always.',
    },
  ],
  takeaways: [
    'Revenue is money flowing in from customers. It\'s the starting point, not the finish line.',
    'Profit = Revenue − Costs. This is the number investors care about most — not revenue.',
    'A stock is a piece of a business\'s profit. Earnings per share (EPS) tells you how much profit each share generates.',
    'When reading about any business, filter for signal: revenue, costs, profit. Everything else is noise until proven otherwise.',
    'You\'ve learned that profit matters more than revenue. Next: why some businesses keep 40\u00A2 per dollar while others keep just 2\u00A2.',
  ],
  completionMessages: {
    perfect: 'Flawless. You\'ve learned the language that every other lesson is built on.',
    great: 'Strong start. Revenue, costs, profit — you\'ve got the foundation.',
    good: 'Good foundation. These three concepts — revenue, costs, profit — will come up in every lesson that follows.',
    low: 'Keep going. Understanding revenue vs. profit is the single most important concept in investing — revisit this one.',
  },
};
