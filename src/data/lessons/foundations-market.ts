import { Building2, TrendingUp, Users, Lightbulb, Zap, Calculator } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMarketLesson: Lesson = {
  id: 'foundations-market',
  emoji: '📈',
  title: 'What Is the Stock Market?',
  subtitle: 'Stocks, shares, and why prices move — from zero',
  description:
    "Before you learn about revenue or profit, you need to understand what you're actually buying when you buy a stock. This lesson starts at the very beginning: what the stock market is, what a share represents, why prices change, and how the whole system works. No prior knowledge required.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['valuation'],
  keyFacts: [],
  topics: [
    { label: 'What a stock actually represents', icon: Building2 },
    { label: 'How shares, exchanges, and brokers work', icon: Users },
    { label: 'Why stock prices go up and down', icon: TrendingUp },
    { label: 'The difference between investing and gambling', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: What does owning a stock actually mean?
    //
    // Why a decide first: the biggest misconception beginners have is
    // that stocks are abstract ticker symbols on a screen. This
    // reframes a stock as owning a piece of a real business.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What You\'re Actually Buying',
      topicIcon: Building2,
      context:
        'Your neighbor Maria owns a pizza shop. It\'s doing well — making real money, serving real customers. One day she offers to sell you a small piece of the business. If you buy in, you\'d own a fraction of everything: a share of the ovens, the brand, the recipes, and — most importantly — a share of the profits.\n\nNow imagine Maria\'s pizza shop is listed on the stock market. Instead of buying "a piece of Maria\'s shop" directly from her, you buy it through an exchange. That piece is called a share.',
      question: 'When you buy a share of stock, what are you actually buying?',
      options: [
        'A ticket that goes up or down in price — like a lottery ticket with better odds',
        'A small ownership stake in a real business — its assets, earnings, and future',
        'A loan to the company that they\'ll pay back with interest',
        'A membership that lets you use the company\'s products for free',
      ],
      correctIndex: 1,
      punchline:
        'A share of stock is a piece of a real business. When you buy one share of Apple, you literally own a tiny fraction of every Apple Store, every iPhone patent, and every dollar of profit. It\'s not a lottery ticket — it\'s ownership.',
      wrongNudges: [
        'A lottery ticket\'s value is random. A stock\'s value is tied to a real business that earns real money. Prices move, but not randomly — they track what the business is actually worth.',
        '',
        'That\'s a bond, not a stock. Bonds are loans. Stocks are ownership. Bondholders get fixed interest payments; stockholders own a piece of the profits, which can grow — or shrink.',
        'Owning Apple stock doesn\'t get you free iPhones. It gets you something better — a claim on the profits from everyone else buying iPhones.',
      ],
      takeaway: 'A stock is not a ticker symbol or a line on a chart. It\'s a piece of a real business. Every time you buy a share, you become a part-owner of that company.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: Quick classification — how stocks work
    //
    // Why a drill: beginners need to build rapid recognition of the
    // basic mechanics: what shares are, what exchanges do, what
    // brokers do, and when markets are open.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'How the System Works',
      topicIcon: Zap,
      intro: 'Stocks involve a few key players and concepts. Sort each statement: is it true or false?',
      prompts: [
        {
          setup: 'A company splits itself into 1,000,000 equal shares. Each share represents an identical piece of ownership.',
          left: { label: 'True', sublabel: 'that\'s how shares work' },
          right: { label: 'False', sublabel: 'shares don\'t work that way' },
          correct: 'left',
          flash: 'Shares are equal slices of ownership. If a company has 1,000,000 shares and you own 1,000, you own 0.1% of the business — and 0.1% of the profits.',
        },
        {
          setup: 'A stock exchange is a place where buyers and sellers meet to trade shares — like a farmers\' market, but for ownership stakes in companies.',
          left: { label: 'True', sublabel: 'exchanges connect buyers and sellers' },
          right: { label: 'False' },
          correct: 'left',
          flash: 'The NYSE and Nasdaq are stock exchanges. They don\'t own the stocks — they provide the marketplace where millions of buyers and sellers find each other.',
        },
        {
          setup: 'A broker is a company you hire to buy and sell stocks on your behalf. You can\'t walk into the NYSE and buy shares yourself.',
          left: { label: 'True', sublabel: 'brokers handle the transactions' },
          right: { label: 'False' },
          correct: 'left',
          flash: 'Fidelity, Schwab, Robinhood — these are all brokers. They execute your trades on the exchange. Think of them as your middleman to the stock market.',
        },
        {
          setup: 'You can buy and sell stocks 24 hours a day, 7 days a week, any time you want.',
          left: { label: 'True' },
          right: { label: 'False', sublabel: 'markets have hours' },
          correct: 'right',
          flash: 'US stock markets are open Monday–Friday, 9:30 AM to 4:00 PM Eastern. Outside those hours, the market is closed. Some brokers offer limited after-hours trading, but most volume happens during market hours.',
        },
        {
          setup: 'When a company first sells shares to the public, it\'s called an IPO (Initial Public Offering). Before that, the company is "private" — ordinary people can\'t buy shares.',
          left: { label: 'True', sublabel: 'IPO = going public' },
          right: { label: 'False' },
          correct: 'left',
          flash: 'An IPO is when a private company sells shares to the public for the first time. Before the IPO, only founders, employees, and private investors owned shares. After it, anyone with a brokerage account can buy in.',
        },
        {
          setup: 'If you own one share of a company and the company makes a bad decision, you could be personally sued and lose your house.',
          left: { label: 'True' },
          right: { label: 'False', sublabel: 'your risk is limited' },
          correct: 'right',
          flash: 'Stockholders have "limited liability." The most you can lose is what you paid for the shares. You can\'t be sued for the company\'s debts or mistakes. This is one of the key features that makes stock ownership possible.',
        },
      ],
      takeaway: 'Shares are equal pieces of ownership. Exchanges connect buyers and sellers. Brokers execute your trades. Markets have set hours. And your risk is limited to what you invest — nothing more.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: Make ownership concrete with math
    //
    // Why an estimate: abstract "ownership" becomes real when you
    // calculate your actual dollar share of profits. This is the
    // moment the concept clicks.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Your Slice of the Pie',
      topicIcon: Calculator,
      context:
        'Let\'s say Maria\'s pizza shop goes public. The company is split into 10,000 total shares. You buy 100 of them. That means you own 100 ÷ 10,000 = 1% of the business.\n\nThis year, the pizza shop earns $500,000 in profit after paying all expenses — rent, ingredients, employees, taxes, everything.',
      question: 'You own 1% of the company. How much of that $500,000 profit is "yours"?',
      answer: 5000,
      tolerance: 500,
      unit: '$',
      hint: '1% of $500,000',
      reveal:
        '1% × $500,000 = $5,000. That\'s your share of the profit. You own 100 shares, and each one represents $50 of annual profit ($500,000 ÷ 10,000 shares). On Wall Street, this "$50 per share" number is called "earnings per share" or EPS. It\'s one of the most important numbers in investing — and you just calculated it.',
      takeaway: 'Ownership isn\'t abstract. If you own 1% of a company, you own 1% of the profits. Earnings per share (EPS) tells you how much profit each share represents — it\'s the bridge between "business" and "stock."',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: Why do stock prices change?
    //
    // Why a decide: this is the hardest concept for beginners —
    // prices reflect expectations about the future, not just today's
    // reality. This connects directly to the expectations lesson.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Why Prices Move',
      topicIcon: TrendingUp,
      context:
        'Maria\'s pizza shop is earning $500,000/year in profit. The stock trades at $100 per share. Then two things happen:\n\n1. A food blogger with 2 million followers posts a glowing review. Suddenly, the line is out the door.\n2. Maria announces she\'s opening 3 new locations next year.\n\nThe business hasn\'t earned a single extra dollar yet. But the stock price jumps to $140.',
      question: 'Why did the stock price rise before the profits actually increased?',
      options: [
        'The stock market is irrational — prices move randomly and don\'t reflect reality',
        'The blogger\'s review made the company "famous," and famous companies have higher stock prices',
        'Buyers expect future profits to be higher, so they\'re willing to pay more per share today',
        'The number of shares decreased, so each remaining share is worth more automatically',
      ],
      correctIndex: 2,
      punchline:
        'Stock prices reflect what investors expect to happen next — not just what\'s happening now. The pizza shop hasn\'t earned more money yet, but buyers believe it will, so they bid the price up today. Prices are a bet on the future.',
      wrongNudges: [
        'Markets aren\'t perfectly rational, but they\'re not random either. The price rose for a reason: new information (viral review + expansion plans) changed expectations about future profits. That\'s the market working, not failing.',
        '',
        'Fame alone doesn\'t drive stock prices — expected profits do. The review matters because it signals more customers and more revenue ahead. If the review went viral but nobody actually visited, the stock wouldn\'t move.',
        'The number of shares didn\'t change. Share count only changes through specific corporate actions like stock splits or buybacks. What changed here is how much buyers are willing to pay per share — driven by higher expectations.',
      ],
      takeaway: 'Stock prices move based on expectations about the future. When investors believe a company will earn more tomorrow, they pay more for it today. Every stock price is an opinion about what comes next.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: Is the stock market just gambling?
    //
    // Why a decide: this is the most common objection beginners have,
    // and clearing it up is essential before they continue learning.
    // The right answer distinguishes investing from speculation.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Investing vs. Gambling',
      topicIcon: Lightbulb,
      context:
        'A friend says: "The stock market is basically gambling. You put money in, prices go up or down, and you either win or lose. It\'s just a casino with better marketing."\n\nMillions of people believe this. It\'s one of the biggest reasons people avoid investing entirely. But is it accurate?',
      question: 'What\'s the most accurate response?',
      options: [
        'Your friend is right — stock prices are unpredictable, so buying stocks is a form of gambling',
        'It\'s gambling if you buy randomly, but investing if you understand the business. Gambling has negative expected value; owning good businesses has positive expected value over time',
        'The stock market is completely safe if you invest long-term — it always goes up eventually',
        'It\'s only gambling if you lose money. If you make money, it was a good investment',
      ],
      correctIndex: 1,
      punchline:
        'At a casino, the odds are rigged against you — the house always wins over time. In the stock market, you\'re buying real businesses that create real value. The S&P 500 has returned ~10% per year for a century — because the businesses inside it keep earning profits. The market isn\'t a casino. It\'s an ownership marketplace.',
      wrongNudges: [
        'Stock prices are hard to predict in the short term, but stocks represent real businesses with real profits. A casino chip represents nothing. That\'s the fundamental difference — stocks have intrinsic value tied to business performance.',
        '',
        '"Always goes up" is dangerous thinking. Individual stocks can go to zero. Even broad markets can decline for a decade. Investing has positive expected value, but it\'s not safe or guaranteed. Respecting risk is part of investing, not gambling.',
        'Whether you made or lost money doesn\'t determine if something was gambling. A gambler can win; an investor can lose. The difference is whether the odds were in your favor based on analysis — not the outcome.',
      ],
      takeaway: 'Gambling is betting on chance. Investing is buying ownership in businesses that create value. The key difference: casinos are designed so you lose over time; businesses are designed to earn profits over time.',
    },
  ],
  takeaways: [
    'A stock is a piece of a real business. When you buy a share, you become a part-owner — with a claim on real profits, not just a line on a chart.',
    'Shares are equal slices of ownership. Exchanges are marketplaces. Brokers execute your trades. Your risk is limited to what you invest.',
    'Stock prices reflect expectations about the future. When investors believe profits will grow, they bid the price up today — before the growth actually happens.',
    'Investing is not gambling. Gambling has negative expected value; owning real businesses that earn real profits has positive expected value over time.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand what most people never bother to learn — what you\'re actually buying when you buy a stock.',
    great: 'Strong start. You\'ve got the foundation: stocks are ownership, prices reflect expectations, and investing is not a coin flip.',
    good: 'Good foundation. These are the building blocks for everything that follows — understanding what stocks are and why prices move.',
    low: 'Worth revisiting. Everything in investing builds on these basics — what a stock is, how ownership works, and why prices change.',
  },
};
