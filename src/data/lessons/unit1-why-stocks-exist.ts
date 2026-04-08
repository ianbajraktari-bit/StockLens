import { Scale, ArrowLeftRight, Layers, Handshake } from 'lucide-react';
import type { Lesson } from './types';

export const unit1WhyStocksExistLesson: Lesson = {
  id: 'unit1-why-stocks-exist',
  emoji: '🤝',
  title: 'Why Stocks Exist',
  subtitle: 'The other side of the trade, and what it means to be a partner',
  description:
    "Every stock you'll ever buy started with a company that needed money to grow and a founder who decided to raise it by selling ownership. Understanding why companies issue stock — and what that means for the person on the other side of the trade — is the missing piece most beginners skip. In this lesson, you'll see the deal from both sides: the founder's tradeoff, where your money actually goes when you buy shares, and what separates an owner from a lender.",
  estimatedMinutes: 3,
  dataAsOf: '',
  unit: 1,
  unitOrder: 3,
  skills: ['mindset'],
  keyFacts: [],
  topics: [
    { label: 'Why companies sell stock in the first place', icon: Scale },
    { label: 'Where your money actually goes when you buy shares', icon: ArrowLeftRight },
    { label: 'What makes owning different from lending', icon: Layers },
    { label: 'The partnership mindset that changes everything', icon: Handshake },
  ],
  questions: [
    {
      topic: "The Founder's Choice",
      topicIcon: Scale,
      context:
        "Imagine you started a small coffee roastery five years ago. It's profitable, growing, and popular — but you want to open a second location and invest in new equipment. You need $500,000 to do it, and you don't have that kind of cash on hand.\n\nYou have two ways to get the money:\n\nOption A: Borrow it. A bank will lend you $500,000 at 7% interest. You pay about $35,000 per year in interest and have to pay the principal back over 10 years. You keep 100% ownership of your company, but you're now on the hook for that loan whether the new location succeeds or not.\n\nOption B: Sell part of your company. An investor offers you $500,000 in exchange for 25% of the business. You never have to pay them back. But from now on, they own 25% of every dollar of profit your company ever makes — and they have a say in major decisions.",
      gutCheck: {
        prompt: 'Quick gut check — which option feels more natural to you as the founder?',
        nudge: "Both are legitimate. Just commit to your first instinct.",
        options: [
          "Borrow the money — you built it, you should own all of it",
          "Sell a stake — sharing the risk is worth giving up some control",
        ],
        reflections: [
          "Your gut said borrow — and that's the instinct most founders start with. Giving up ownership of something you built feels wrong, and keeping 100% sounds obviously better. But here's the tension: if the new location struggles, the bank doesn't care — you still owe the full loan plus interest. Debt is a fixed obligation that doesn't share your risk. An equity investor, by contrast, loses with you if things go badly. That's exactly what makes the decision hard.",
          "Your gut said sell a stake — and you're already thinking like someone who understands risk-sharing. Giving up 25% sounds painful, but it means that if the new location fails, you don't have a bank breathing down your neck demanding payments you can't make. The investor took on some of your risk. That's what equity is: shared upside, shared downside. The tradeoff is real in both directions.",
        ],
      },
      question: "What is the real tradeoff between borrowing and selling a stake?",
      options: [
        'Borrowing is always cheaper because interest is lower than the share of profits investors would take',
        'Debt keeps your ownership but creates fixed payments regardless of how the business does; equity shares ownership but also shares the risk — investors only win if you do',
        'Selling a stake is better because you never have to pay the money back',
        "Borrowing is better for small companies; selling equity is better for large companies",
      ],
      correctIndex: 1,
      punchline:
        "Debt is a fixed obligation — you owe the money whether you succeed or not. Equity shares ownership but also shares the risk. The bank doesn't care if you fail; an equity partner loses with you.",
      explanation:
        "This is the fundamental tradeoff every business in the world has to make when it needs capital. Debt is simple: you borrow, you owe, you pay it back with interest on a schedule. If the business thrives, you keep all the upside — you just pay the lender what you promised. But if the business struggles, you still owe every dollar, and missing payments can bankrupt you. Equity is the opposite: you sell a piece of the company. The investor gives you cash with no repayment schedule, but they now share in every dollar of profit (and loss) forever. If the business fails, they lose with you. If it thrives, they win with you. Most companies use some mix of both — debt when they're confident they can make the payments, equity when the risk is too high to put fixed obligations on top of it. Stocks exist because equity is how companies raise money without creating debt they might not survive.",
      wrongExplanations: [
        'Not always. Interest on debt is a fixed cost the company pays whether it earns anything or not — and if the business is growing fast, that fixed cost can become crippling. Equity partners only get paid when the business does well. Comparing interest rates to profit shares ignores the bigger difference: debt creates obligations that exist even when the business is failing.',
        '',
        '"You never have to pay it back" sounds like a win, but it\'s misleading. You don\'t repay equity — you pay forever, in the form of a permanent share of every dollar of profit your company ever makes. Over decades, that "no repayment" deal can cost far more than any loan. The right framing isn\'t "free money" — it\'s "expensive money that shares your risk."',
        "Company size doesn't determine which is better — risk does. A small, stable business might borrow comfortably. A large, risky business might need equity even though it could technically get a loan. The question isn't \"how big are you?\" It's \"can you reliably make the fixed payments a lender will demand, even if things go wrong?\"",
      ],
      takeaway: "Stocks exist because companies need a way to raise money that shares risk instead of creating debt. Every share you buy is a slice of that risk-sharing arrangement.",
    },
    {
      topic: 'Where Your Money Actually Goes',
      topicIcon: ArrowLeftRight,
      context:
        "A new company goes public — it holds its first public sale of stock, called an IPO (Initial Public Offering). It sells 10 million shares at $20 each, raising $200 million. That $200 million goes straight into the company's bank account to fund growth.\n\nThree weeks later, you decide to buy 10 shares of this company through your brokerage app. The price is now $23 per share, so you spend $230.\n\nHere's a question most beginners have never thought to ask: where does your $230 actually go?",
      question: "When you buy shares of a public company on a normal trading day, where does your money go?",
      options: [
        "To the company — it uses your $230 to fund operations and growth",
        'To whoever sold you the shares — another investor who wanted out. The company gets nothing from that trade.',
        "To the stock exchange, which pays the company its share after collecting fees",
        "Into a fund managed by the company's board of directors",
      ],
      correctIndex: 1,
      punchline:
        "When you buy shares on a normal day, your money goes to whoever sold you those shares — another investor, not the company. The company only got paid once, back at the IPO.",
      explanation:
        "This is one of the most important mechanics of the stock market, and almost nobody learns it explicitly. Companies only receive money from the initial sale of shares — the IPO — or when they issue new shares later. After that, shares trade hands between investors on what's called the secondary market. When you buy a share of Apple today, your money goes to whoever sold you that share. Apple receives nothing from the transaction. This has a huge implication: the daily ups and downs of a stock price don't directly give the company more or less money. Apple's bank account doesn't swell when its stock hits a new high. What the stock price does affect is the company's ability to raise new money in the future (by issuing more shares at a higher price) and the wealth of the people who already own shares. Understanding this is the difference between thinking \"I'm funding the company\" and thinking \"I'm buying an ownership stake from another owner who wants out.\"",
      wrongExplanations: [
        "This is what most people assume, and it's wrong. The company only gets money from the IPO itself (the first time shares are sold) or from later share issuances. Every trade after that is between investors. If this were true, companies would benefit directly from every stock purchase — but they don't. Apple hasn't received a cent from most of the trillions of dollars worth of Apple stock that has traded hands since its IPO in 1980.",
        '',
        "Stock exchanges charge small fees to facilitate trades, but they don't collect your money and forward it to the company. They're more like a matching service — they connect buyers and sellers and take a tiny cut for running the infrastructure. The vast majority of your money goes to the seller on the other side of the trade.",
        "There's no central fund that receives and redistributes stock purchases. Each trade is a direct transaction between two parties — you and another investor — facilitated by a broker and the exchange. The company's board isn't involved and doesn't see a cent of it.",
      ],
      takeaway: "When you buy shares, you're almost always buying them from another investor — not the company. The company was paid once, at the IPO. Understanding this reframes what a stock purchase actually is: a handoff of ownership, not a donation to the business.",
    },
    {
      topic: 'Owner vs. Lender',
      topicIcon: Layers,
      context:
        "Two friends each put $10,000 into the same small business — a local brewery that's trying to expand.\n\nAlex makes a loan. She gives the brewery $10,000 at 8% interest, to be paid back over 5 years. The brewery owes her about $200/month regardless of how business is going, and at the end of 5 years she gets her $10,000 back.\n\nSam buys equity. He gives the brewery $10,000 in exchange for 5% ownership. No fixed payments, no repayment schedule — he just owns 5% of whatever the business becomes.\n\nFive years later, how does each friend come out in three different scenarios?",
      question: "Which scenario reveals the most important difference between being a lender and being an owner?",
      options: [
        'The brewery thrives and doubles in value — Sam earns far more than Alex, so equity is the better choice',
        'The brewery muddles along — both Alex and Sam are fine, so there\'s no meaningful difference',
        'The brewery fails and closes — Alex gets paid out of whatever assets remain (equipment, inventory, real estate). Sam usually gets nothing. The downside is where the two roles separate.',
        "The brewery stays the same size — both lose to inflation equally",
      ],
      correctIndex: 2,
      punchline:
        "The downside is where owning and lending actually separate. When a business fails, lenders get paid first from whatever's left. Owners are last in line — and usually get nothing. Upside is how owners get rewarded; downside is why lenders exist.",
      explanation:
        "When businesses succeed, equity is the obvious winner — owners capture unlimited upside while lenders just collect their interest. But the interesting question isn't what happens when things go right; it's what happens when they go wrong. If the brewery fails, there's a legal order to who gets paid out of whatever money or assets remain: lenders first, owners last. Alex might recover most or all of her $10,000 from the sale of the brewery's equipment and real estate. Sam, as an equity holder, stands at the back of the line — after lenders, vendors, employees, and the tax authority. Most of the time, he walks away with nothing. This is called the capital structure, and it's the most important invisible rule in investing. Owners get rewarded in the upside; lenders get protected in the downside. When you buy a stock, you're choosing to be last in line if things go wrong — in exchange for unlimited upside if things go right. That's the trade. Knowing you're last in line is what makes stock investing serious business, not a game.",
      wrongExplanations: [
        "Sam does earn more in the good scenario, but \"which one wins in the upside\" isn't the revealing question — everyone already assumes owners benefit when companies grow. What most people haven't thought through is how much worse the downside is for owners. You can't fully understand equity until you understand what happens when the business fails, because that's the risk you're signing up for every time you buy a share.",
        "\"They're both fine\" isn't the whole story. Even in a flat scenario, Alex is collecting a steady income from interest while Sam is waiting for a payoff that may never come. The subtle difference matters, but it doesn't capture the most important distinction, which only shows up when things actually go wrong.",
        '',
        "Inflation affects them both, but roughly equally over 5 years. This framing misses the actual mechanism that separates owning from lending. The real difference is the order of payment when something bad happens — not the slow erosion of value in a calm environment.",
      ],
      takeaway: "Owners get rewarded in the upside; lenders get protected in the downside. When you buy a stock, you're choosing to be last in line if the business fails — in exchange for unlimited upside if it thrives.",
    },
    {
      topic: 'The Partnership Mindset',
      topicIcon: Handshake,
      context:
        "Pull everything together. You now know three things most beginners don't:\n\n1. Companies sell stock to raise money that shares risk instead of creating fixed debt obligations.\n2. When you buy shares on a normal day, your money goes to another investor, not to the company itself.\n3. As an owner, you get unlimited upside if the business thrives — but you're last in line if it fails.\n\nAll three of these point to the same mental shift.",
      question: "Given all of that, what's the most important mindset change for a new investor?",
      options: [
        "Focus on stocks that have recently gone up — momentum is the most reliable signal that a business is healthy",
        "Treat every stock purchase as a partnership you're choosing to enter — evaluate the business as if you're signing up to share its fate for years",
        "Stick to companies whose products you personally use — if you like them, other people probably do too",
        "Look for companies about to IPO — getting in at the earliest stage is where the biggest gains are",
      ],
      correctIndex: 1,
      punchline:
        "Every stock you buy is a partnership you're choosing to enter. You share the upside. You share the downside. You're last in line if it fails. Take the decision that seriously every single time.",
      explanation:
        "This is the mindset that ties all of Unit 1 together. In Lesson 1.1, you learned a stock is real ownership. In Lesson 1.2, you learned that time is the most powerful input in growing that ownership. Now you know why stocks exist in the first place: to let companies raise money by offering partnership, and to let people like you share in that partnership's fate. Once you see every purchase as entering a partnership, the whole activity becomes more serious. You stop asking \"will this go up?\" and start asking \"do I actually want to be a partner in this business for the next 5-10 years, knowing I share its risk?\" That question filters out almost everything that passes for investing advice online — momentum chasing, meme trading, hype cycles. None of those frame a stock as a partnership; they frame it as a bet on price. The partnership framing is what experienced investors use, and it's the foundation of every good decision you'll ever make.",
      wrongExplanations: [
        "Momentum is one of the most popular and most abused signals in investing. A stock that has been going up might keep going up — or might be about to reverse. More importantly, momentum tells you nothing about whether the business is one you'd actually want to partner with. Buying something just because it's been rising is betting on the trend, not the business. It's the opposite of the partnership mindset.",
        '',
        '"I use it, so it must be good" is the Peter Lynch idea taken past its useful point. Personal familiarity can help you understand a business, which is a real advantage. But liking a product doesn\'t mean the company that makes it is profitable, fairly priced, or a good partnership to enter. Plenty of beloved brands have been terrible investments. Personal use is a starting point for research, not a substitute for it.',
        "IPOs get a lot of hype, but academic research shows that the average IPO underperforms the market over the first several years after going public. The \"earliest stage\" framing makes it sound like you're getting in on the ground floor, but most retail IPO buyers actually buy at the top of the initial excitement. Chasing IPOs is usually a way to pay the most for companies with the least track record — the opposite of a thoughtful partnership decision.",
      ],
      takeaway: "Every stock purchase is a partnership. You share the upside, you share the downside, and you're last in line if things fail. Take that decision as seriously as you would any other partnership in your life.",
    },
  ],
  thinkingStep: {
    prompt:
      "Imagine a friend who owns a local restaurant offers you 10% of the business for $50,000. Before you say yes or no, what are the three most important questions you'd want answered? Write them out.",
    placeholder: "e.g. \"1. Is the restaurant profitable right now? 2. ...\"",
    modelAnswer:
      "(1) Is the restaurant actually profitable right now, and if so, how much does it keep per dollar of revenue after costs? (2) How much debt does it already have, and who gets paid before I do if the business struggles? (3) What happens to my 10% if the owner leaves or sells — do I have any protection, and can I get my money back if I need to? These three questions cover the three things that matter most: whether the business is economically viable, where I sit in the capital structure if things go wrong, and whether I can exit if my life changes. A thoughtful investor asks questions like these about every stock they buy, even if they don't say them out loud — they're just asking them by looking at profit margins, debt levels, and how liquid the stock is.",
    strongReasoningIncludes: [
      "Asks about the actual economics of the business: profit, margins, and whether it makes money on its own without needing more investment",
      "Considers the downside: what happens to the money if the business fails, and whether other claimants get paid first",
      "Thinks about exit: can you get your money back, and what gives the investment value to someone else if you need to sell",
    ],
  },
  takeaways: [
    "Stocks exist because companies need a way to raise money that shares risk instead of creating fixed debt they might not survive.",
    "When you buy shares on a normal day, your money goes to another investor — the company itself only got paid once, at the IPO.",
    "Owners get the upside when businesses thrive; lenders get protected when businesses fail. As a stockholder, you're last in line if things go wrong.",
    "Every stock purchase is a partnership. Take it as seriously as you would any other commitment you share risk on.",
  ],
  completionMessages: {
    perfect: "You now understand the mechanics most people never learn: why stocks exist, where your money actually goes, and what being an owner really means. This is the foundation every serious investor works from.",
    great: "Strong grasp of the partnership model. You'll catch yourself using this framing on every stock you ever consider buying — that's the whole point.",
    good: "Solid progress. The partnership mindset sinks in more deeply when you see it applied to real companies in later lessons.",
    low: "Worth revisiting. These mechanics feel technical, but they're what separate investor thinking from gambler thinking — and they're worth getting right early.",
  },
};
