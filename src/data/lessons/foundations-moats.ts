import { Swords, Castle, Eye, TrendingUp } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMoatsLesson: Lesson = {
  id: 'foundations-moats',
  emoji: '🏰',
  title: 'What Keeps Winners Winning',
  subtitle: 'Why some great businesses stay great — and others get caught',
  description:
    "Some businesses dominate their markets for decades. Others flame out after a few good years. The difference usually isn't luck — it's whether the business has a structural defense that keeps competitors from taking its customers. In this lesson, you'll meet the concept of a \"moat,\" learn the four most common types, and — most importantly — learn to tell a real moat from a fake one.",
  estimatedMinutes: 2,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['moats'],
  keyFacts: [],
  topics: [
    { label: 'Why winners lose when they have no defense', icon: Swords },
    { label: 'The four most common moats', icon: Castle },
    { label: 'How to tell a real moat from a fake one', icon: Eye },
    { label: 'Why moats translate into valuation premiums', icon: TrendingUp },
  ],
  questions: [
    {
      topic: 'Why Winners Lose',
      topicIcon: Swords,
      context:
        "Two burger stands opened in the same neighborhood five years ago. Both were busy, both profitable.\n\nStand A served generic fast-food burgers. When a cheaper competitor opened across the street last year, most customers switched almost overnight. Revenue dropped 60%. The owner is now considering closing.\n\nStand B serves unusual burgers built around a proprietary sauce recipe that's been featured in food magazines. Customers drive from other neighborhoods specifically to try it. When the same competitor opened nearby, Stand B's revenue was barely affected — its customers kept coming for something only B offers.",
      question: 'Both were profitable five years ago. What explains the different outcomes?',
      options: [
        "Stand A was unlucky — new competition can crush any small business",
        "Stand B has something competitors can't easily copy, so its customers can't easily be poached — that's what investors call a \"moat\"",
        "Stand A should have just lowered prices to match the new competitor",
        "Nothing explains it — restaurants are always unpredictable",
      ],
      correctIndex: 1,
      explanation:
        "Stand A had no structural defense. Its product was identical to anything a competitor could offer, so any cheaper option could steal its customers the day it opened. Stand B had a defense: a recipe and reputation customers specifically came for and competitors couldn't match. When the cheaper rival arrived, A got wiped out and B barely noticed. This is the single most important question in investing: what stops a competitor from taking your customers? If nothing does, profits will disappear the moment competition arrives. If something does — a recipe, a network, a brand, switching costs — the business can defend its profits for years or decades. Investors borrowed a word from medieval castles for this: a \"moat.\" It's what keeps attackers from reaching your profits.",
      wrongExplanations: [
        "Luck is a tempting explanation, but it doesn't survive a five-year comparison. Both stands faced the same competitor at the same time. One collapsed and one barely moved. That's not luck — it's the difference between having a structural advantage and not having one. Treating this as bad luck means you miss the lesson that matters.",
        '',
        "Lowering prices is what businesses without moats do to compete — and it's usually a losing strategy. If A cuts prices, its margins shrink. If the competitor cuts again, A has to match again. This is a price war, and both sides usually end up losing money. Stand B doesn't need to compete on price because customers are coming for something else entirely.",
        "Saying it's unpredictable ignores the very predictable pattern playing out: businesses without defenses lose to cheaper competitors; businesses with defenses don't. You can absolutely predict this — not the exact moment, but the direction. That's what makes the moat concept so valuable.",
      ],
      takeaway:
        "The question that separates durable businesses from fragile ones is simple: what stops a competitor from taking your customers? Whatever does that job is called a \"moat\" — and it's the single most important thing investors look for.",
    },
    {
      topic: 'Four Ways to Build a Moat',
      topicIcon: Castle,
      context:
        "Four businesses each have something that protects them from competitors. Look at each and see if you can spot what's keeping customers around:\n\n1. A project management software that stores years of a company's work, custom workflows, and team history. Switching means retraining everyone and migrating thousands of files.\n\n2. A payment network where millions of merchants accept it because everyone carries it — and everyone carries it because every merchant takes it.\n\n3. A soda brand with a 130-year history. Customers often buy it out of identity and nostalgia, not because it tastes objectively better than generic alternatives.\n\n4. A warehouse retailer that buys products in such massive quantities it gets prices no smaller competitor can match — and passes the savings to customers.",
      question: 'Each of these has a real moat. Which statement correctly identifies what they are?',
      options: [
        "They're all the same thing — customer loyalty",
        "They're the four most common moats: switching costs, network effects, brand, and scale",
        "Only the soda brand has a real moat — the other three are just popular products",
        "They're all temporary — no advantage lasts forever in a free market",
      ],
      correctIndex: 1,
      explanation:
        "These are the four most common moats in real businesses:\n\n• Switching costs (the project software): customers would lose data, training, and time by switching. Examples: Salesforce, enterprise banking software.\n• Network effects (the payment network): the product gets more valuable as more people use it. A competitor needs both sides of the network at once, which almost never works. Examples: Visa, eBay, Facebook.\n• Brand (the soda): decades of trust and identity that customers pay more for. This isn't just good marketing — it's something competitors can't buy overnight. Examples: Coca-Cola, Apple, Hermès.\n• Scale (the warehouse retailer): the business is big enough that its unit costs are lower than any competitor can match. Examples: Costco, Amazon, Walmart.\n\nWhen you analyze a company, one of the first questions to ask is: \"Which of these does this business have — if any?\" A business with zero real moats is competing purely on price and marketing. A business with one or two can defend its profits for a very long time.",
      wrongExplanations: [
        "\"Customer loyalty\" is a symptom, not an explanation. All four businesses have loyal customers — but for completely different reasons. If you lump them together, you miss the real insight: each moat works differently, and each requires different conditions to defend. Understanding the mechanism is what lets you predict whether an advantage will last.",
        '',
        "The warehouse retailer and the payment network absolutely have moats — they're just structural rather than emotional. The retailer wins on cost. The network wins because of its size. Assuming that only \"feelings-based\" advantages count as moats misses half of what actually protects real businesses.",
        "Some moats do erode — but some last for generations. Coca-Cola's brand has dominated for over a century. Costco's scale advantage compounds every year. Network effects get stronger as the network grows. Dismissing all moats as temporary is a common shortcut that misses how durable the best businesses actually are.",
      ],
      takeaway:
        "The four most common moats are switching costs, network effects, brand, and scale. Each protects a business in a different way. When you analyze a company, always ask: \"Which of these does this business have — and how durable is it?\"",
    },
    {
      topic: 'Real vs. Fake Moat',
      topicIcon: Eye,
      context:
        "Two businesses each claim to have a moat. Your job is to figure out which one is real.\n\nBusiness A — A chain of boutique fitness studios that grew rapidly thanks to a celebrity trainer who became a social media star. She appears in every ad, leads the most popular classes, and is the reason most customers sign up. Growth has been explosive.\n\nBusiness B — A payment network used by millions of merchants and billions of customers. Merchants accept it because everyone carries it; customers carry it because every merchant takes it. Competitors have tried to break in for 40 years and mostly failed.",
      gutCheck: {
        prompt: 'Quick gut check — which of these looks more defensible to you?',
        nudge: "No wrong answer here. Just commit to your first reaction.",
        options: [
          "Business A — the one with viral growth and a famous trainer",
          "Business B — the one with the giant payment network",
        ],
        reflections: [
          "Your gut said Business A — and you're in good company. Viral growth and a famous face are the most exciting things to look at in a business, and it's natural to assume that excitement equals durability. But here's the catch: A's entire advantage lives in one person. If she leaves, gets sick, or loses interest, the advantage walks out with her. That's not a moat — it's a dependency. Real moats survive when the founders leave.",
          "Your gut said Business B — sharp instinct. You sensed that B's advantage is structural, not personal. That's exactly right. B's advantage is the network itself: millions of merchants × billions of customers. No competitor can recreate both sides at once — a new network would need merchants AND customers simultaneously, and neither side shows up without the other. That's a moat that gets stronger every year.",
        ],
      },
      question: 'Which business has a real moat — and why?',
      options: [
        "Business A — viral growth this fast is the strongest possible sign of a durable advantage",
        "Business B — its advantage is structural (a network effect), so even if leadership changes or a well-funded competitor attacks, the advantage is hard to break",
        "They both have moats — one is a personal brand moat and one is a network moat",
        "Neither — moats don't really exist in modern markets because new competitors can always copy anything",
      ],
      correctIndex: 1,
      explanation:
        "This is the most important distinction in moat analysis: real moats are structural; fake moats are personal or temporary. Business A's advantage lives entirely in one person. That's \"key-person risk\" — the business is one illness, scandal, or contract renegotiation away from collapse. If the celebrity trainer walks out tomorrow, there's nothing holding customers in. Business B's advantage is the network itself — millions of merchants and billions of customers would have to all agree to switch at the same time for a competitor to win, which is nearly impossible. That's structural, and it gets stronger as the network grows. When evaluating any claimed moat, ask: \"What would happen if the founder left, the trend faded, or a well-funded competitor attacked?\" A real moat still works under those conditions. A fake moat collapses.",
      wrongExplanations: [
        "Viral growth is great for a year or two, but it's not a moat — it's a marketing tailwind that can reverse as fast as it started. Most viral businesses in the last decade peaked and then faded. The question isn't \"how fast is it growing?\" — it's \"what stops a competitor from doing the exact same thing next year?\" For Business A, there's no answer to that question.",
        '',
        "\"Personal brand moat\" is a comfortable label, but it doesn't hold up. A moat has to protect the business even when conditions change. A personal brand protects the business only as long as the person stays healthy, popular, and engaged. That's a dependency, not a defense. Treating personal fame as equivalent to structural advantages is one of the most common analytical mistakes.",
        "This is a popular talking point, but the evidence is against it. Visa, Mastercard, Coca-Cola, and Costco have all defended their positions for decades — in some cases over a century. Some industries are more moat-friendly than others, but saying \"moats don't exist anymore\" is usually a sign of not looking closely enough at the businesses that actually have them.",
      ],
      takeaway:
        "A real moat is structural — it protects the business even when people, trends, or competitors change. A fake moat depends on a person, a fad, or a moment. When you see \"moat,\" always ask: what would happen if the founder left or a well-funded competitor attacked?",
    },
    {
      topic: 'Thinking Like an Investor',
      topicIcon: TrendingUp,
      context:
        "Two companies earn almost identical profits this year:\n\nCompany X earns $100 million selling a trendy consumer gadget. Three new competitors entered the market this quarter with similar products. Next year, Company X expects to spend more on marketing and may have to cut prices to compete.\n\nCompany Y earns $100 million selling specialty software to law firms. Customers have used the software for an average of 8 years, stored thousands of case files in it, and trained their entire staff on it. No firm has switched away in the past 3 years.",
      question: 'Both earn $100 million today. Why would a smart investor pay significantly more for Company Y?',
      options: [
        "Because software companies are always worth more than hardware companies",
        "Because Company Y's moat makes its future profits much more predictable — and investors pay a premium for profits they can count on",
        "Because Company X is probably too small to be worth investing in",
        "They should be worth the same — a dollar of profit is a dollar of profit",
      ],
      correctIndex: 1,
      explanation:
        "Same profit today does not mean same profit next year — and investors don't buy this year's profits, they buy future profits. Company X has no moat. Its $100 million is exposed: new competitors, price pressure, rising marketing costs. Next year could easily be $70 million, or $50 million, or a loss. Company Y has two layers of moat (heavy switching costs and high renewal rates). Its $100 million is almost certain to repeat — and likely grow. This is why moats translate directly into valuation. When investors can predict future profits with confidence, they pay more for each dollar of current profits. A business with a real moat doesn't just earn more — it earns more reliably. Over decades, that reliability is worth an enormous premium. The most successful investors in history — Buffett, Munger, Terry Smith — all built their careers on a single idea: find businesses with durable moats and pay a fair price for them.",
      wrongExplanations: [
        "It's not about the industry. Some hardware businesses (like specialty chip equipment maker ASML) have enormous moats. Many software businesses are commodities with zero moat. The question is always \"what protects the profits?\" — not \"what industry is this in?\" Using industry as a shortcut is a common mistake that hides what's actually going on.",
        '',
        "Size isn't the issue here. A company earning $100 million per year is not small — and even if it were, \"small\" doesn't tell you anything about whether it's a good investment. The question that matters is: how predictable are the profits, and how defensible is the business? Those questions apply at every size.",
        "Profit today is worth less than profit you can count on for the next decade. Investors value businesses based on future cash flows, not today's snapshot. Company X's $100 million might get valued at 5-10x earnings because it's fragile. Company Y's $100 million can trade at 25-40x earnings because it's durable. That's a 3-4x difference in price — for the same current profit. It's the biggest thing moats do for valuation.",
      ],
      takeaway:
        "Moats don't just protect a business — they translate into a valuation premium. When future profits are predictable, investors pay more for each dollar of current profits. That's why the best investors in history all built their careers on finding durable moats and paying fair prices for them.",
    },
  ],
  takeaways: [
    "A moat is whatever stops a competitor from taking your customers. Without one, a profitable business will eventually get squeezed by competition.",
    "The four most common moats are switching costs, network effects, brand, and scale. They all work differently, but all share one trait: they're structural, not personal.",
    "Real moats survive when people, trends, and competitors change. Fake moats depend on a single person, a fad, or a moment — and they collapse the first time conditions shift.",
    "Moats translate directly into valuation. When profits are defensible, investors pay a premium for them — which is why the best investors in history all built careers on finding them.",
  ],
  completionMessages: {
    perfect:
      "You've nailed the single most important concept in long-term investing. Every great investor in history built their career on finding durable moats — and now you know exactly what to look for.",
    great:
      "Strong work. You can already tell the difference between a business that will stay strong and one that's about to be squeezed by competition. That instinct will shape every company lesson ahead.",
    good:
      "Good foundation. Keep asking \"what stops a competitor from copying this?\" on every business you look at — once the habit sticks, you'll see moats everywhere.",
    low:
      "Worth revisiting. The difference between a real moat and a fake one is one of the most important distinctions in investing, and it gets easier with practice.",
  },
};
