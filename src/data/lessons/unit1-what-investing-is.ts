import { Compass, Store, GitCompare, Eye } from 'lucide-react';
import type { Lesson } from './types';

export const unit1WhatInvestingIsLesson: Lesson = {
  id: 'unit1-what-investing-is',
  emoji: '🧭',
  title: 'What Investing Actually Is',
  subtitle: "Stocks aren't numbers — they're ownership",
  description:
    "Before you learn anything else, you need to know what you're actually buying when you buy a stock. Most people picture a chart that goes up and down. But underneath every stock is a real business with employees, customers, and profits. In this lesson, you'll build the single most important instinct in investing: thinking like an owner, not a spectator.",
  estimatedMinutes: 3,
  dataAsOf: '',
  unit: 1,
  unitOrder: 1,
  skills: ['mindset'],
  keyFacts: [],
  topics: [
    { label: 'What you actually own when you buy a stock', icon: Compass },
    { label: "What an owner cares about (and what they don't)", icon: Store },
    { label: 'Investing vs. trading vs. gambling', icon: GitCompare },
    { label: 'The owner mindset that powers everything else', icon: Eye },
  ],
  questions: [
    {
      topic: 'What You Actually Own',
      topicIcon: Compass,
      context:
        "When most people open their first brokerage app, a stock looks like a number on a screen. The number goes up, you make money. The number goes down, you lose money. It feels a lot like a casino game where the only question is whether your number will be higher tomorrow.\n\nBut something very different is actually happening underneath that number.",
      gutCheck: {
        prompt: 'Quick gut check — buying a stock is more like:',
        nudge: "There's no wrong answer. Just commit to your first reaction.",
        options: [
          'Placing a bet on whether a number will go up',
          'Buying a small piece of a real business',
        ],
        reflections: [
          "Your gut said it's like placing a bet — and honestly, that's how it feels when you stare at the price chart. The price moves, the dollar amount in your account changes, and there's no obvious connection to anything in the real world. But here's the shift this lesson is going to make: that price is moving because real people are deciding what a real business is worth. The bet framing is what most beginners start with. The owner framing is what separates them from investors.",
          'Your gut said it\'s like buying a piece of a business — sharp instinct. Even if it doesn\'t feel that way when you\'re tapping "Buy" on an app, that\'s literally what\'s happening. The share you just bought is a legal slice of ownership in a real company with employees, products, and profits. Most beginners take years to make this mental shift. You started with it.',
        ],
      },
      question: "Which is the more accurate description of what happens when you click 'Buy' on a stock?",
      options: [
        'You become a part-owner of a real company — entitled to a tiny share of its profits, assets, and future',
        "You're betting that someone else will pay more for the same share later",
        "You're paying for the right to track a number that moves up and down",
        "You're placing a wager — like a casino game with better odds",
      ],
      correctIndex: 0,
      punchline:
        'When you buy a stock, you become a part-owner of a real company. You own a tiny slice of their profits, their buildings, their future — and that ownership stake is what gives the share its value.',
      explanation:
        "A stock — also called a share — is exactly what it sounds like: a share of a company. Buy one share of Apple and you legally own about 1 / 15,000,000,000th of Apple. That's a tiny slice, but it's a real slice. You're entitled to a proportional share of every dollar of profit Apple makes, every building it owns, every patent it holds. The price of the share moves up and down because other people are constantly re-evaluating what that ownership stake is worth. The price isn't the thing — the underlying business is. The price is just the market's current opinion about how valuable owning a piece of that business is. Once you internalize this, every other concept in investing becomes a question about your business: Is it growing? Is it making more money each year? Is it worth more than you're paying for it?",
      wrongExplanations: [
        '',
        'This is called the "greater fool theory" — buying something you don\'t value yourself, hoping someone else will pay more. It\'s a real strategy some people use, but it isn\'t investing — it\'s pure speculation. Investing means you actually want to own the underlying thing, even if no one ever offered to buy it from you. The greater-fool mindset is how people get stuck holding stocks that crash, because they never had a reason to own them in the first place.',
        'The number is real, but it isn\'t the thing you\'re paying for. The number reflects what people think one share of ownership is worth. If you buy a share thinking the number itself is the asset, you\'re ignoring the actual business underneath. That\'s like buying a thermometer instead of caring about the temperature.',
        'Casino games have a built-in mathematical edge for the house — over time, the house always wins. Stocks are different: when you own a share of a profitable, growing business, your money grows because the business creates real value. The risk is real, but the source of the return is real too. A casino never builds anything; a business does.',
      ],
      takeaway: "A stock is fractional ownership in a real company. The price on the screen is just the market's current opinion about what that ownership is worth.",
    },
    {
      topic: 'The Restaurant Test',
      topicIcon: Store,
      context:
        "Imagine you own 0.001% of your favorite neighborhood restaurant — a real, legal slice of the business. You don't pick the menu. You don't run the kitchen. You don't decide the hours. But every dollar of profit the restaurant makes, you get a tiny share of it. Every year, you receive a small check based on how the restaurant did.\n\nYou've never set foot in the kitchen, and you never will. But it's now partly your business.",
      question: 'As a part-owner who gets paid based on profit, what would actually matter to you?',
      options: [
        "The restaurant's daily reputation on the local food blog — your share's price could swing based on reviews",
        'Whether the restaurant is profitable, growing, and well-managed — those are the things that determine how much money it sends you',
        'Whether the chef is in a good mood that week — happy chefs make better food',
        'How nice the sign out front looks — curb appeal brings in customers',
      ],
      correctIndex: 1,
      punchline:
        "If you got paid from the profits, you'd care about the things that actually drive profit — not the things that drive headlines or vibes. That's the entire shift between watching stocks and owning them.",
      reflection: {
        prompt: 'If you actually owned 0.001% of your favorite restaurant, which would you check first each month?',
        options: [
          'How much profit it made and what its costs looked like',
          'Whether it was busy on the weekends',
          'What new dishes the chef added to the menu',
        ],
        responses: [
          "Owner thinking. Profit and costs are the things that determine your check at the end of the year. Everything else — busy nights, new dishes, online buzz — only matters because it affects those two numbers. You're already cutting straight to what an investor would look at.",
          "Reasonable instinct — busyness is a leading indicator of profit. But be careful: a packed restaurant with thin margins can still lose money, and a quiet restaurant with strong economics can be very profitable. Busyness is a clue, not the answer. The actual numbers tell you whether the busyness is paying off.",
          "Natural curiosity, but new dishes don't matter unless they sell at a profit. Plenty of restaurants kill themselves trying to be creative when their existing menu was already working. As an owner, you'd care about new dishes only as much as they show up in the profit number at the end of the year.",
        ],
      },
      explanation:
        "The restaurant test is the entire job of an investor compressed into one image. When your money is tied to a business's profits, you start asking different questions. You stop caring about gossip, vibes, and surface-level signals — and start caring about things that actually move profit. Is the business making more money than last year? Are costs under control? Are customers coming back? These are the questions every later lesson in this app is going to teach you to answer. The restaurant example feels small, but the logic is identical for Apple, Costco, or any company you'll ever look at. The only difference is the number of zeros.",
      wrongExplanations: [
        "Reviews and online buzz can move a stock price short-term, but they don't pay you. Your check at year-end depends on actual profit, not how the restaurant is being talked about. Beginners often fixate on news and headlines because those are the most visible inputs — but headlines only matter if they connect to real business performance. An owner reads past the headline to ask: \"Did this actually change anything about the money?\"",
        '',
        "The chef's mood is a perfect example of a non-input — something that feels relevant but doesn't show up in the numbers. Lots of beginners pay attention to things like a CEO's tweets, a product launch event, or a new ad campaign without asking whether those things actually moved profit. Owner thinking means filtering everything through one question: does this affect the money?",
        'Sign quality and curb appeal can matter for a restaurant, but only if they translate to more customers and more profit. Plenty of restaurants have beautiful signs and lose money. The sign is one variable among hundreds — and as an owner, you only care about variables that meaningfully affect your share of the profit. Surface details get attention precisely because they\'re visible, not because they\'re important.',
      ],
      takeaway: "Owners care about the things that drive profit. Spectators care about the things that drive headlines. The whole game is learning to tell the difference.",
    },
    {
      topic: 'Three Things That Look Alike',
      topicIcon: GitCompare,
      context:
        "Investing, trading, and gambling all involve putting money into something with an uncertain outcome. They all happen in apps that look surprisingly similar. They all have charts, prices, and a button that says 'Buy.' But they're three completely different activities, and confusing them is one of the most expensive mistakes a beginner can make.",
      question: 'Which of these is investing?',
      options: [
        "Buying shares in a company because you've looked at the business, you believe its profits will grow over years, and you're patient enough to wait and find out",
        "Buying a stock because it's been going up for three weeks and you think the trend will continue",
        "Buying a meme stock because everyone in your group chat is buying it and you don't want to miss out",
        'Buying a lottery ticket because the jackpot is $500 million and you only need to win once',
      ],
      correctIndex: 0,
      punchline:
        "Investing means you bought a piece of a business you actually want to own. Everything else — momentum, hype, lottery tickets — is betting on price movement, not business performance.",
      explanation:
        "All four involve money and uncertainty, but the source of your potential return is completely different in each one. Investing pays you because a real business creates real value — it makes a profit, the profit grows, and your share of that profit is worth more over time. Trading pays you because someone else is willing to buy what you bought at a higher price, regardless of whether the underlying business changed. Speculation pays you because a crowd creates temporary demand that pushes the price up. Gambling pays you because of pure chance built into a game with fixed odds. The first one rewards patience and analysis. The other three reward timing and luck — and the math eventually catches up to most people who confuse them. None of these are inherently 'wrong' — adults are allowed to do whatever they want with their money. But you should know which one you're doing, because the strategies, risks, and required skills are completely different.",
      wrongExplanations: [
        '',
        'This is trading, specifically momentum trading. You\'re not betting on the business — you\'re betting that the price trend will continue. Sometimes it does, sometimes it doesn\'t, and the academic evidence is that most amateurs who try this lose money over time. It\'s a real strategy used by professionals with rigorous systems, but it\'s not investing. The tell: you can do this without knowing anything about what the company actually does.',
        "This is speculation driven by social proof. You're not betting on the business or even the price trend — you're betting that more people will keep piling in. When the crowd moves on, the price collapses, and the people who bought last lose the most. The 2021 meme stock cycle is the textbook example. Speculation can make money short-term, but it has nothing to do with owning a productive business.",
        'This is gambling — and crucially, the math is against you. Lottery odds are designed so the house wins on average. The expected value of a lottery ticket is always less than the price. That\'s not "high risk, high reward" — it\'s a rigged game with a built-in negative return. A stock can lose money too, but the difference is that profitable businesses create real value over time. Lottery tickets create nothing. The payout is funded by other ticket buyers losing.',
      ],
      takeaway: 'Investing means owning a piece of a real business that creates real value. Trading bets on price. Speculation bets on crowds. Gambling bets on rigged math. They look similar, but the source of returns is completely different.',
    },
    {
      topic: 'Thinking Like an Owner',
      topicIcon: Eye,
      context:
        "Once you start seeing every stock as 'a small business I'd be co-owning,' the entire app you're about to go through changes shape. Every question you'll learn to ask — about margins, growth, recurring revenue, valuation — is really one bigger question in disguise.\n\nThat bigger question is the thing every great investor has in common.",
      question: "If you treat every stock as 'a small business I'd be co-owning,' which question becomes the most important?",
      options: [
        "Has the price gone up recently? — momentum is a strong predictor of future returns",
        "Is this a business I'd actually want to own a piece of, and is the price reasonable for what I'd get?",
        "Is everyone else buying it? — popular stocks tend to keep rising",
        "Is the company famous? — well-known brands are safer investments",
      ],
      correctIndex: 1,
      punchline:
        "Once you see stocks as ownership, the right question is no longer 'will the price go up?' It's 'do I want to own this business, and is the price reasonable?' Everything else in investing is a tool for answering those two halves.",
      explanation:
        "This is the question every legendary investor — Warren Buffett, Peter Lynch, Charlie Munger — has built an entire career around. Notice that it has two parts. The first part is about the business: is this something I'd actually want to own, given how it makes money, who its customers are, and how durable it looks? The second part is about the price: even if I'd love to own it, am I being asked to overpay? A great business at the wrong price is a bad investment. A mediocre business at the right price can be a great one. The rest of this app is going to teach you the tools to answer both halves of that question. Lessons on margins and recurring revenue teach you to evaluate the business. Lessons on valuation and P/E ratios teach you to evaluate the price. But the underlying question — would I want to own this, and is the cost reasonable — is the one you'll be asking forever, long after you've forgotten any specific formula.",
      wrongExplanations: [
        "Recent price movement is one of the most overrated signals in investing. Stocks that have been going up sometimes keep going up — and sometimes crash hard. Buying purely because something has risen ignores why it rose, what the business is worth, and whether you'd want to own it at the new price. \"It went up, so it'll keep going up\" is the same logic that gets people stuck at the top of every bubble.",
        '',
        "Crowds can be right or wrong, and the bigger and louder the crowd, the more often they're wrong. By the time everyone is buying something, the price usually already reflects the enthusiasm. Some of the worst investments in history were the most popular ones at the peak — dot-com stocks in 2000, real estate in 2007, crypto in 2021. The crowd is a signal to check your reasoning, not to skip it.",
        "Famous brands can be great businesses or terrible ones. Sears was famous. Kodak was famous. Blockbuster was famous. Fame tells you the company has visibility — it tells you nothing about whether the business is healthy, growing, or reasonably priced. \"I've heard of it\" is the weakest possible reason to invest. The whole point of learning to analyze a business is so you don't have to rely on name recognition.",
      ],
      takeaway: "The owner's question — 'Do I want to own this business, and is the price reasonable?' — is the one question every other concept in this app is built to help you answer.",
    },
  ],
  thinkingStep: {
    prompt: "In your own words, what's the actual difference between investing and gambling? Try to go beyond 'investing is safer' — what's structurally different about where the returns come from?",
    placeholder: 'e.g. "Investing is... while gambling is..."',
    modelAnswer:
      "Investing is buying a piece of a real business and being paid over time as that business earns profit and grows. Gambling is paying for a chance at a payout that has nothing to do with whether anything productive happens — the game is rigged so the house wins on average. The difference isn't really risk (both have it) — it's the source of the return. Investing returns come from value being created in the world. Gambling returns come from other players losing. One can compound for everyone over time; the other is zero-sum by design.",
    strongReasoningIncludes: [
      'Frames investing as ownership of a productive asset, not a prediction about price',
      'Acknowledges that both involve risk, but distinguishes where the return actually comes from',
      "Avoids moralizing — both are valid choices, they're just structurally different things",
    ],
  },
  takeaways: [
    "A stock is a real ownership stake in a real business. The price on the screen is just the market's current opinion about what that ownership is worth.",
    "Owners care about the things that drive profit. Spectators care about the things that drive headlines. Learning to tell the difference is the entire job.",
    "Investing, trading, speculation, and gambling all look similar in an app — but they're four different activities with four different sources of return. Know which one you're doing.",
    "The owner's question — 'Do I want to own this business, and is the price reasonable?' — is the question every other lesson in this app is built to help you answer.",
  ],
  completionMessages: {
    perfect: "You've already made the mental shift most beginners take years to make. Every other lesson in this app builds on what you just learned.",
    great: "Strong start. Thinking of stocks as ownership instead of numbers is the foundation everything else is built on.",
    good: "Good first step. The owner mindset takes a while to fully click — it'll deepen as you see it applied to real businesses in later lessons.",
    low: "Worth revisiting. This is the most important mental shift in the entire app — without it, every later lesson is harder than it needs to be.",
  },
};
