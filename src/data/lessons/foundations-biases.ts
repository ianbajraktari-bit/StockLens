import { TrendingDown, Scale, Anchor, Compass } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBiasesLesson: Lesson = {
  id: 'foundations-biases',
  emoji: '🧠',
  title: 'Your Brain vs. Your Portfolio',
  subtitle: 'Why your instincts are the biggest risk to your returns',
  description:
    "Markets drop, prices wobble, and your brain was not built to stay calm while it happens. In this lesson, you'll meet loss aversion — the single most studied behavioral trap in investing — and learn how it quietly pushes smart people into bad decisions. Then you'll learn the simple habits that keep your brain from hijacking your portfolio.",
  estimatedMinutes: 2,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['behavioral_biases'],
  keyFacts: [],
  topics: [
    { label: 'Why a 20% drop feels unbearable', icon: TrendingDown },
    { label: 'Why losses hurt more than gains feel good', icon: Scale },
    { label: 'How your purchase price hijacks your thinking', icon: Anchor },
    { label: 'Beating your brain with a process', icon: Compass },
  ],
  questions: [
    {
      topic: 'The 20% Drop',
      topicIcon: TrendingDown,
      context:
        "Six months ago, you put $10,000 into a well-researched company. You liked the business: growing revenue, loyal customers, healthy margins.\n\nToday, the market is down sharply. Your position is now worth $8,000 — a 20% drop.\n\nBut here's the thing: nothing about the underlying business has changed. Revenue is still growing. Customers are still loyal. Management is running it the same way. The only thing that's different is the price.",
      gutCheck: {
        prompt: 'Quick gut check — before you think it through, what does your instinct say?',
        nudge: "No wrong answer here. Just commit to your first reaction.",
        options: [
          "Sell — I can't stand watching it fall further",
          "Hold — nothing about the business has changed",
        ],
        reflections: [
          "Your gut said sell — and you're not alone. The urge to stop the pain is powerful, and it hits almost every investor. That reaction has a name: loss aversion. Your brain is treating the $2,000 drop as a threat that demands immediate action, even though nothing about the business has actually changed. The real question is whether you're reacting to new information — or to the feeling of losing money.",
          "Your gut said hold — but don't pat yourself on the back yet. Saying 'hold' while reading about it is easy. Doing it while your account is down $2,000 and the news feels scary is brutally hard. Even experienced investors panic in moments like this. The point isn't that holding is always right — it's that the feeling of losing money is strong enough to override your reasoning if you're not watching for it.",
        ],
      },
      question: "What's the most disciplined response to a 20% drop on the same underlying business?",
      options: [
        'Sell immediately to stop the bleeding — you can always buy back later',
        'Revisit the reasons you bought. If those reasons still hold, the drop is noise, not new information',
        'Wait until the stock gets back to your purchase price, then decide',
        'Buy more — a 20% drop is always a discount',
      ],
      correctIndex: 1,
      explanation:
        "A price change isn't automatically new information. The business didn't get weaker just because the quote did. Disciplined investors treat a price drop as a question, not a command — they ask: \"Did anything actually change about this business, or just the market's mood?\" If the answer is \"nothing changed,\" the drop is noise. If fundamentals genuinely deteriorated, that's different — and selling might make sense. But in both cases, the decision comes from the facts, not from the panic. This is the single hardest thing about investing: learning that a falling price is not the same as a falling business.",
      wrongExplanations: [
        "Selling to 'stop the bleeding' is exactly the reaction loss aversion creates — and it's usually the worst possible move. You crystallize the loss without asking whether anything changed. Most 'buy it back later' plans fail: you either wait for a lower price that never comes, or you miss the recovery. Selling should be based on a change in the business, not on the pain of watching a quote drop.",
        '',
        "Waiting for the stock to return to your purchase price is one of the most dangerous habits in investing. The stock doesn't know what you paid for it. Your purchase price is not a fair value — it's just a number that mattered to you once. Making decisions based on it means you're managing your feelings, not your money.",
        "A 20% drop sounds like a discount, but that assumes the original price was right. Sometimes the market is correcting a legitimate overvaluation. Buying more just because the price fell — without rechecking the business — is the mirror image of selling just because the price fell. Both decisions are driven by price, not by facts.",
      ],
      takeaway:
        "A falling price is not new information. Before reacting, ask: \"Did anything actually change about the business?\" If the answer is no, the only thing that changed is your feelings — and your feelings shouldn't be running your portfolio.",
    },
    {
      topic: 'The Pain/Pleasure Asymmetry',
      topicIcon: Scale,
      context:
        "You made two trades this year.\n\nTrade 1: Bought a stock for $5,000. It went up. You sold for $6,000 — a $1,000 gain.\nTrade 2: Bought a stock for $5,000. It went down. You sold for $4,000 — a $1,000 loss.\n\nOn paper, you broke even. Net profit: $0.\n\nNow be honest. Which trade do you remember more vividly? Which one replays in your head at night? Most people say the loss bothers them far more than the gain pleases them.",
      question: 'What does this reveal about how humans experience money — and why does it matter for investing?',
      options: [
        "It doesn't matter — feelings about past trades don't affect future decisions",
        'It means you should never take risks that could result in a loss',
        'Losses feel roughly twice as painful as equivalent gains feel pleasant — and this asymmetry quietly pushes people into bad decisions',
        'It just means you had bad luck on the second trade',
      ],
      correctIndex: 2,
      explanation:
        "Psychologists Daniel Kahneman and Amos Tversky discovered that humans feel losses about twice as strongly as equivalent gains. This is called loss aversion, and it's one of the most studied findings in behavioral science. The problem isn't the feeling itself — it's what the feeling makes you do. To avoid the pain of a loss, investors hold losing stocks far too long, hoping they'll \"come back.\" To lock in the pleasure of a gain, they sell winning stocks too early. The result is a portfolio full of small wins and big losses — the exact opposite of what builds wealth. The first step to beating loss aversion is knowing it exists. When you feel the pull of \"I can't sell at a loss\" or \"I need to lock this in before it drops,\" you're not reasoning — you're reacting.",
      wrongExplanations: [
        "Feelings about past trades absolutely affect future decisions. An investor who still feels the sting of a loss from two years ago may hesitate to buy another stock in that sector — or may hold too aggressively to \"prove\" the market wrong. Your emotional memory is one of the biggest influences on your next trade, whether you notice it or not.",
        "Avoiding all risk of loss means avoiding all investing — there's no such thing as a return without risk. The goal isn't to dodge every possible loss. It's to accept that losses are part of the process, and to make sure your decisions are driven by analysis instead of by the pain of a bad outcome.",
        '',
        "Calling it \"bad luck\" skips the real lesson. Both trades were neutral financial outcomes — the point isn't about the trades, it's about how your brain records them. Losses get filed under \"pain to avoid.\" Gains get filed under \"nice, moving on.\" That asymmetry is what you need to watch for.",
      ],
      takeaway:
        "Losses feel about 2x as painful as equivalent gains feel good. Psychologists call this loss aversion — and because your brain is wired this way, the default behavior is to sell winners too early and hold losers too long. Knowing this is step one to not falling for it.",
    },
    {
      topic: 'The Purchase Price Trap',
      topicIcon: Anchor,
      context:
        "An investor owns two stocks and is deciding what to do.\n\nStock A: Bought at $100. Now at $150. The company is firing on all cylinders — revenue growing, margins expanding, competition struggling.\nStock B: Bought at $100. Now at $70. The business has deteriorated — customers are leaving and the CEO just resigned.\n\nHer plan: \"I'll sell A soon to lock in my 50% profit. I'll hold B until it gets back to $100, then sell.\"\n\nShe's treating the two stocks in exactly the wrong way.",
      question: "What's the fundamental mistake in her thinking?",
      options: [
        "She's correctly managing her risk — protect winners, give losers time to recover",
        "She's letting the price she paid drive her decisions, when her purchase price is actually irrelevant to what these stocks are worth today",
        'She should sell both — anything that moves more than 30% in either direction is too volatile to hold',
        "She should buy more of B since it's now \"on sale\"",
      ],
      correctIndex: 1,
      explanation:
        "Her purchase price is not a fair value — it's a historical accident. The stock doesn't know what she paid. The company doesn't care. The market won't negotiate with her memories. The only question that matters for either stock is: \"Based on what I know today, would I buy this at today's price?\" For Stock A, the business is improving — if she wouldn't buy it today, what exactly is she doing still owning it? And for Stock B, the business is deteriorating — \"getting back to $100\" is just her anchor, not a prediction. Holding a broken business in the hope of touching a familiar number is one of the most expensive habits in investing. Professional investors call this the disposition effect: selling winners too early and holding losers too long, driven entirely by the price you originally paid. It's loss aversion in action — cutting flowers and watering weeds.",
      wrongExplanations: [
        "\"Protect winners, give losers time to recover\" sounds prudent, but it has the logic backwards. You don't \"protect\" a winner by selling it — you abandon the exact business that's working. And you don't \"give a loser time\" by holding it — you just delay accepting a decision you already should have made. The right framework is forward-looking: is each business worth owning today based on current facts?",
        '',
        "A blanket rule like \"30% movement means sell\" ignores the business entirely. Stock A moved 50% because the business got much better — selling for that reason is punishing exactly what you wanted to happen. Rules based on price alone substitute a number for thinking. The goal is to react to business changes, not price movements.",
        "A lower price isn't automatically \"on sale.\" Stock B fell because the business actually got worse. Buying more would just be doubling down on a deteriorating situation because the number looks cheaper than before. \"Cheap compared to what I paid\" is not the same as \"cheap compared to what it's worth.\"",
      ],
      takeaway:
        "The price you paid is irrelevant to what a stock is worth today. Ask \"would I buy this at today's price?\" — not \"what did I pay for it?\" Letting your purchase price drive decisions is called the disposition effect, and it causes investors to sell winners too early and hold losers too long.",
    },
    {
      topic: 'Process Beats Instinct',
      topicIcon: Compass,
      context:
        "The market has dropped 25% over six months. Headlines are dire. Every conversation is about the crash. Friends are selling. Expert commentators are predicting more pain.\n\nYour instincts are screaming at you to do something — anything. Selling feels like safety. Holding feels like denial. Buying feels reckless.\n\nThree investors respond differently:\n\n• Investor A sells everything and plans to \"buy back in when things calm down.\"\n• Investor B starts checking prices every hour so she can react quickly.\n• Investor C pulls out a notebook from before the crash. In it, she wrote down exactly why she owned each stock, what would make her sell, and what she planned to do if the market dropped sharply.",
      question: 'Which investor has the best defense against their own brain?',
      options: [
        'Investor A — selling and waiting is the safest response to uncertainty',
        'Investor B — reacting quickly to new information is what good investors do',
        "Investor C — she made her decisions when she was calm, so her plan isn't being written by panic",
        "All three are reasonable — there's no objectively right answer in a crash",
      ],
      correctIndex: 2,
      explanation:
        "Investor C has the single most powerful defense against behavioral bias: decisions made in advance, in writing, when emotions weren't running the show. When the crash hits, she doesn't have to think clearly under pressure — she just has to follow the plan she already made. Investor A is acting on loss aversion: selling to stop the pain, then relying on \"I'll buy back later\" — a plan that fails more often than it succeeds, because you're waiting for an all-clear that never sounds. Investor B thinks she's being responsive, but checking prices every hour is the opposite of discipline — every glance activates loss aversion all over again. The great investors aren't great because they have better instincts in a crisis. They're great because they built a process that doesn't require better instincts. Write down your reasoning when you're calm. Decide your sell criteria in advance. Check prices less often. These aren't tricks — they're how you keep your brain from hijacking your portfolio.",
      wrongExplanations: [
        "Selling and waiting \"for things to calm down\" sounds safe, but it's how most investors lock in their losses and miss the recovery. Markets usually recover before the headlines do — by the time things \"feel calm,\" the best prices are long gone. Studies of investor behavior consistently show that people who trade heavily during downturns end up far worse than people who do nothing.",
        "Checking prices every hour feels like being on top of things, but it's actually the fastest way to let loss aversion run your decisions. Every price glance is a chance for your brain to panic. The investors with the best long-term returns are famously the ones who barely look — because the less you check, the less your brain gets to interfere.",
        '',
        "There is a better answer: the investor with a written plan from before the crisis. \"Do whatever feels right in the moment\" is how people end up selling at the bottom. Having a process in place is measurably better than having no process, because your calm self is a better decision-maker than your panicked self.",
      ],
      takeaway:
        "The best investors aren't the ones with the best instincts during a crash — they're the ones whose decisions were already made before the crash hit. Write down why you own each stock, decide your sell criteria in advance, and check prices less often. Process beats instinct every time.",
    },
  ],
  takeaways: [
    'Humans feel losses about 2x as strongly as equivalent gains — this is loss aversion, and it quietly distorts nearly every investing decision unless you know to watch for it.',
    "A falling price isn't new information. Before reacting, ask whether anything about the underlying business actually changed.",
    'The price you paid is irrelevant to what a stock is worth today. Letting it drive decisions (the disposition effect) makes investors sell winners early and hold losers too long.',
    "Your best defense isn't better instincts — it's a process built in calm moments. Write down your reasoning, set sell criteria in advance, and check prices less often.",
  ],
  completionMessages: {
    perfect:
      "You've nailed it. Knowing that your brain is the problem is the first step to solving it. Most investors never learn this — you now have a head start that will compound for the rest of your investing life.",
    great:
      "Strong instincts about your instincts. You're already ahead of most investors just by knowing loss aversion exists and how it quietly distorts decisions.",
    good:
      "Good foundation. Keep watching for the pull of loss aversion in yourself — the first time you feel it during a real drop, this lesson will click in a new way.",
    low:
      "Worth revisiting. The hardest part of investing isn't the math — it's keeping your brain from sabotaging your decisions. Everything else works better once you master this.",
  },
};
