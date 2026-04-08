import { Hourglass, LineChart, Timer, Rocket } from 'lucide-react';
import type { Lesson } from './types';

export const unit1CompoundingLesson: Lesson = {
  id: 'unit1-compounding',
  emoji: '⏳',
  title: 'The Power of Compounding',
  subtitle: 'Why time matters more than money',
  description:
    "Compounding is the closest thing investing has to a superpower. It means your money earns money, and then that money earns money, and so on — each year's gains get added to the pile that earns the next year's gains. The result is a curve that starts almost flat and then bends sharply upward. In this lesson, you'll build the instinct for why starting early is worth more than starting big, and why the hardest part of investing isn't picking stocks — it's waiting.",
  estimatedMinutes: 3,
  dataAsOf: '',
  unit: 1,
  unitOrder: 2,
  skills: ['mindset'],
  keyFacts: [],
  topics: [
    { label: 'Why time beats money almost every time', icon: Hourglass },
    { label: 'Why the curve bends: the compounding mechanism', icon: LineChart },
    { label: 'The real cost of waiting a few years', icon: Timer },
    { label: 'What this means if you have almost nothing to invest', icon: Rocket },
  ],
  questions: [
    {
      topic: 'Time vs. Money',
      topicIcon: Hourglass,
      context:
        "Two siblings decide to invest for retirement at 65.\n\nAlex is 20 years old. She invests $10,000 in a simple stock index fund, then doesn't add another dollar — she just leaves it alone for 45 years.\n\nMorgan waits 10 years. At age 30, he invests $20,000 — twice as much as Alex — and also leaves it alone for 35 years.\n\nBoth earn roughly 8% per year, the long-run average return of the US stock market.",
      gutCheck: {
        prompt: 'Quick gut check — at age 65, who ends up with more money?',
        nudge: "Don't do the math yet. Just commit to your first reaction.",
        options: [
          'Morgan — he invested twice as much money',
          'Alex — she started earlier, even though she invested less',
        ],
        reflections: [
          "Your gut said Morgan — the one who invested twice as much. That's the natural instinct, and it feels like basic math: more money in, more money out. But this is exactly where compounding breaks intuition. Alex's $10,000 grows to about $319,000 by age 65. Morgan's $20,000 grows to about $296,000. Alex wins — despite investing half as much — because her money had 10 extra years to compound on top of itself. The extra decade was worth more than doubling the contribution.",
          "Your gut said Alex — sharp instinct. You correctly sensed that 10 extra years of growth could matter more than doubling the contribution. And the numbers back you up: Alex's $10,000 grows to about $319,000 by age 65, while Morgan's $20,000 grows to about $296,000. Alex wins by roughly $23,000 despite investing half as much money. The deeper lesson is why — and it's the single most important idea in investing.",
        ],
      },
      question: 'Who ends up with more at age 65, and why?',
      options: [
        'Alex — her $10,000 grows to about $319,000; Morgan\'s $20,000 grows to about $296,000. Starting 10 years earlier beat doubling the contribution.',
        'Morgan — he invested twice as much, so his final amount has to be larger',
        "They're roughly equal — $20,000 for 35 years and $10,000 for 45 years balance out",
        "Morgan — 35 years is plenty of time to make up the late start, especially with double the money",
      ],
      correctIndex: 0,
      punchline:
        "Alex wins with $319,000 vs. Morgan's $296,000 — despite investing half as much money. Ten extra years of compounding beat doubling the contribution.",
      explanation:
        "The math is unforgiving, and it's what makes compounding so different from ordinary intuition. Alex's $10,000 grows for 45 years at 8%, which means it doubles roughly every 9 years. After 45 years, her original $10,000 has become about $319,000 — nearly 32 times what she put in. Morgan's $20,000 grows for 35 years, which is one fewer doubling cycle. After 35 years at 8%, it becomes about $296,000 — about 15 times what he put in. Morgan's higher starting amount couldn't overcome Alex's extra doubling period. The lesson: when you're young, the most valuable thing you have isn't the amount of money you can invest — it's the number of years you have to let it grow. Time is a multiplier, and the multiplier gets more powerful the longer it runs.",
      wrongExplanations: [
        '',
        "This is how normal linear math works, but compounding isn't linear. When you earn 8% in year 2, you earn it on the original amount PLUS year 1's gains. That means the amount growing at 8% is itself growing every year. Doubling your starting amount helps, but it only helps linearly. Doubling your time horizon roughly squares your result — which is a much bigger force over decades.",
        "Intuition says they should balance because the ratios look close — 20/10 and 45/35. But compounding doesn't work on ratios; it works on exponents. The extra 10 years for Alex gives her money one additional doubling period, which is worth more than the extra $10,000 Morgan contributed. You can verify this by plugging in 8% compounded annually — Alex genuinely ends up with more.",
        "35 years is a long time, but not as long as you'd think when you're chasing someone who had a 10-year head start at a compounding rate. Every year you delay, the mountain in front of you gets steeper — not because the return rate changes, but because you lost a year of growth you can never get back. \"I'll catch up later\" is the most expensive sentence in investing.",
      ],
      takeaway: "Time is the most valuable input in compounding — more valuable than the amount you invest. Ten extra years at the front of your life is worth more than double the contribution later.",
    },
    {
      topic: 'Why the Curve Bends',
      topicIcon: LineChart,
      context:
        "Take a single $10,000 investment growing at 8% per year. No new contributions, no withdrawals — just sitting there, compounding.\n\nHere's what it looks like over time:\n\n• After 10 years: $21,589 (roughly doubled)\n• After 20 years: $46,610\n• After 30 years: $100,627\n• After 40 years: $217,245\n• After 50 years: $469,016\n\nNotice something strange: in the first 10 years, the money grew by about $11,589. In the last 10 years — from year 40 to year 50 — it grew by about $251,771. Same money. Same 8% return rate. The gains in the final decade are more than 21 times bigger than the gains in the first decade.",
      question: 'Why does the same investment grow so much more in the later years, even though the return rate never changes?',
      options: [
        "The stock market returns more in later years because it becomes more stable over time",
        "Each year's gains get added to the base, so you're earning the same 8% on a much bigger pile every year. The 8% in year 50 is 8% of ~$434,000; the 8% in year 1 is 8% of $10,000.",
        "You're probably contributing more in the later years as you earn a higher income",
        "8% returns are an average — early years are actually lower and later years are higher",
      ],
      correctIndex: 1,
      punchline:
        "Each year's gains get added to the base that earns next year's gains. The return rate stays the same, but the pile it's acting on keeps growing — so the dollar amount of each year's gain explodes.",
      explanation:
        "This is the mechanism behind compounding, and it's why the curve bends. In year 1, you earn 8% of $10,000 = $800. In year 2, you earn 8% of $10,800 = $864. Tiny difference. But after 40 years, you're earning 8% of about $217,000, which is $17,376 in that single year — more than the original investment generated in its entire first two decades combined. The return rate is identical. What changed is the size of the base earning that return. The most important consequence: compounding is back-loaded. The big gains come at the end, after the snowball has gotten huge. This is also why most beginners give up — for the first 5-10 years, the numbers feel underwhelming. The reward for patience doesn't show up until the curve starts to bend, and the curve starts to bend only after you've waited long enough for the math to matter.",
      wrongExplanations: [
        "The stock market isn't more stable in the later years of anyone's portfolio — it's just as volatile at year 50 as it is at year 1. The 8% figure is a long-run average smoothed across good and bad years. The curve bends because of the base growing, not because the market's behavior changes. Confusing stability with compounding is a common beginner mistake.",
        '',
        "In this example, there are no additional contributions — it's a single $10,000 that just sits there. All the growth comes from compounding alone. People often assume that big gains must come from big contributions, but this example is designed to show that time and a steady return rate are enough to produce enormous growth without adding another dollar.",
        "The 8% in this example is a constant return assumption, not an average of varying yearly returns. Even if we used actual historical year-by-year returns with their ups and downs, the compounding curve would look similar — it would just be bumpier. The shape of the curve (mostly flat early, steep late) is an inherent property of compound growth, not a quirk of averages.",
      ],
      takeaway: "Compounding is back-loaded. The early years feel slow because the base is small. The magic happens at the end, when your 8% is acting on a pile that's 20x or 40x your original investment.",
    },
    {
      topic: 'The Cost of Waiting',
      topicIcon: Timer,
      context:
        "Two friends want to be ready for retirement at 65.\n\nTaylor starts at age 25. She contributes $2,400 per year ($200/month) for 10 years, then stops completely. Life gets busy, she forgets about the account, and it just sits there for the next 30 years.\n\nJordan starts at age 35 — 10 years later — and contributes the same $2,400 per year, but he keeps contributing every year until he's 65. That's 30 straight years of contributions.\n\nBy the time they're 65:\n• Taylor invested a total of $24,000 over 10 years\n• Jordan invested a total of $72,000 over 30 years — three times as much\n\nBoth accounts earned 8% per year.",
      question: 'Who has more money at age 65?',
      options: [
        'Jordan — he contributed 3x as much and contributed for 3x as long',
        "They're about the same — Jordan's larger contributions balance Taylor's head start",
        'Taylor — her $24,000 grows to about $350,000; Jordan\'s $72,000 grows to about $272,000',
        "It depends on stock picks — both strategies can work if you choose well",
      ],
      correctIndex: 2,
      punchline:
        "Taylor ends with about $350,000; Jordan ends with about $272,000. Taylor wins by roughly $78,000 — despite contributing only a third as much and stopping 30 years earlier.",
      reflection: {
        prompt: 'Which lesson from this example is most worth remembering?',
        options: [
          'The early years of investing are disproportionately valuable — more than any later years can replace',
          "How much you invest matters less than how long it has to grow",
          "Compounding rewards patience that most people don't have",
        ],
        responses: [
          "That's the sharpest framing. Taylor's 10 early years did more work than Jordan's 30 later years because her money had more time to double on top of itself. The first decade of compounding isn't just valuable — it's irreplaceable. You can't buy it back later with larger contributions.",
          "True, but be careful with how far you push it. Both inputs matter — amount and time. The subtlety is that time usually matters more than people think and amount usually matters less. A small amount invested early often beats a large amount invested late. It's not that contributions don't matter; it's that they can't substitute for time.",
          "That's the emotional truth underneath the math. The hard part of compounding isn't understanding it — it's living through the boring early years when nothing seems to be happening. Most people quit before the curve bends. The ones who don't quit aren't smarter; they're just more patient.",
        ],
      },
      explanation:
        "This is the most counterintuitive example in all of investing. Taylor stopped contributing at age 35 — before many people even seriously start — and still came out ahead. How? Her $24,000 grew during the most valuable years of her compounding lifetime: the first decade. By the time she stopped contributing at 35, her $24,000 had already grown to about $34,800. And then that $34,800 grew for another 30 years, reaching roughly $350,000 by age 65. Jordan's $72,000 never had enough time to catch up, because each dollar he contributed had fewer years to double. His last contribution at age 64 barely compounded at all. The lesson isn't that you should stop contributing at 35 — obviously keep going if you can. It's that the early years are disproportionately valuable, and you can't buy them back later no matter how much you contribute. If Taylor had simply kept contributing past 35, she would have ended with well over $600,000. The \"stop at 35\" scenario is just the dramatic version of the same principle: start now, even if it's small.",
      wrongExplanations: [
        "Linear math would say Jordan must win — 3x more money, 3x more years. But compounding isn't linear. Each dollar Taylor contributed had 30-40 years to grow. Each dollar Jordan contributed had 30 years or fewer, with his later contributions having almost no time at all. The difference isn't the contribution total; it's how much time each contribution had to double.",
        "They aren't close — Taylor wins by about $78,000. The gap is wider than most people expect, and it comes entirely from the decade of head start. That head start compounds along with everything else, and 10 years of compounding on a young dollar is worth more than 30 years of compounding on an older one.",
        '',
        "Stock picking doesn't solve this problem — it's a math problem, not a selection problem. Even if Jordan picked genuinely better stocks, the time disadvantage would make it very hard to catch up. And the historical evidence is that picking stocks well enough to overcome a decade of compounding is extremely difficult. The easier, more reliable path is to start earlier, not to try harder.",
      ],
      takeaway: "Every year you delay costs you the most valuable years of compounding — the early ones. A small amount invested at 25 often beats a large amount invested at 35. The clock matters more than the budget.",
    },
    {
      topic: 'What This Means for You',
      topicIcon: Rocket,
      context:
        "A 22-year-old friend says: \"I don't have much extra money right now — I'm barely covering rent. I'll start investing when I'm making more, probably in my late twenties.\"\n\nThis sounds reasonable. It's also the exact thinking that costs most people the bulk of their potential wealth.",
      question: "What's the most thoughtful response to this friend?",
      options: [
        "You're right — it's not worth investing until you can put in meaningful amounts. Small contributions don't move the needle.",
        "Invest whatever you can now, even $50/month. The years between 22 and 30 are the most valuable years you'll ever have for compounding — and you can't get them back.",
        "The amount doesn't matter — just pick good stocks when you start and you'll catch up fast.",
        "Wait until you can afford to work with a financial advisor — they'll make the decisions for you.",
      ],
      correctIndex: 1,
      punchline:
        "Your 20s are the most valuable compounding years you'll ever have — and they're the ones people most commonly skip. Invest whatever you can now, even if it's tiny. The amount matters less than the clock.",
      explanation:
        'This is the real-world stakes of everything in this lesson. \"I\'ll start later\" feels rational because current income is tight and future income will (presumably) be higher. But the math is brutal: the years between 22 and 30 are the most valuable compounding years of your life, and waiting until 30 means permanently losing them. Every year of delay forces every future year to work harder. A 22-year-old investing $50/month is doing more real compounding work than a 35-year-old investing $500/month, because the $50/month has 43 years to grow and the $500/month only has 30. The single most important action is to start. Not to time the market, not to pick the perfect stock, not to wait until you "know more." Just start, with whatever you can afford, and keep adding when you can. The rest of this app is going to teach you how to be thoughtful about what you buy — but none of that matters if you never start. This is why "start early, stay in" beats "be smart, start late" almost every time.',
      wrongExplanations: [
        "This is the most common trap, and it's wrong in the most expensive way. Small contributions move the needle enormously when they have decades to grow. $50/month at 8% for 43 years becomes nearly $200,000 — and that's with tiny amounts most people wouldn't miss. Waiting until the contribution feels \"meaningful\" guarantees the contribution will never be as meaningful as it would have been years earlier.",
        '',
        "Stock picking can't substitute for time. Even legendary investors like Warren Buffett built most of their wealth through decades of compounding, not through home-run stock picks. Research shows that trying to \"catch up\" through aggressive selection usually leads to worse results, not better ones — it introduces risk without solving the underlying problem, which is that you started late.",
        "Financial advisors can be helpful once you have enough money for their fees to make sense, but waiting for one is a way to delay getting started. Most brokerages now let you invest small amounts in index funds with no advisor needed. \"I'll wait until I can afford an advisor\" is almost always a way of saying \"I'll wait until later\" — and later is exactly what compounding punishes.",
      ],
      takeaway: "The most important thing you can do for your future self is start investing now, even with tiny amounts. The years you have before 30 are worth more than any later years — and you can't get them back. Start, don't optimize.",
    },
  ],
  thinkingStep: {
    prompt:
      "Why do you think most people don't start investing until their 30s or 40s, even though the math is so clearly in favor of starting earlier? Write 2-3 sentences — try to get at the real reasons, not just \"they didn't know.\"",
    placeholder: "e.g. \"People wait because...\"",
    modelAnswer:
      "Most people wait because the early years feel hopeless — you're contributing tiny amounts into an account that barely grows, while real-life expenses feel huge and immediate. The payoff from compounding is invisible until it isn't, which means the reward for patience shows up 20-30 years after the hardest part is over. There's also a cultural and educational gap: no one walks 22-year-olds through this math the way it needs to be walked through, so by the time people realize what they missed, they've already missed the most valuable years. It's less a failure of intelligence and more a failure of the emotional experience — compounding asks you to act now on something you won't see for decades, which is the hardest ask any financial system can make.",
    strongReasoningIncludes: [
      "Acknowledges the emotional/psychological difficulty: compounding rewards patience and delayed gratification, which is unnatural",
      "Identifies structural barriers: low income, student debt, competing priorities, and a financial literacy gap",
      "Recognizes that the cost of waiting is invisible until much later, which makes it easy to rationalize postponement",
    ],
  },
  takeaways: [
    "Time is a bigger multiplier than money. Starting 10 years earlier can beat doubling your contribution.",
    "Compounding is back-loaded — the big gains come at the end, after the snowball has gotten huge. This is why most people give up too early.",
    "Every year of delay costs you the most valuable years of compounding — the early ones — and you can't buy them back later.",
    "The single most important investing action is to start. Not to optimize, not to wait for perfect knowledge, not to pick the ideal stock. Just start, with whatever you can afford.",
  ],
  completionMessages: {
    perfect: "You've internalized the single most important mathematical force in investing. Everything else is details compared to this.",
    great: "Strong grasp of compounding. The hard part now is the emotional one — staying invested long enough for the math to do its thing.",
    good: "Solid start. Compounding is one of those concepts that deepens every time you see it — it'll click more strongly when you see real portfolios grow over time.",
    low: "Worth revisiting. This is the lesson that makes every other lesson matter — without understanding compounding, it's hard to see why any of the rest is worth doing.",
  },
};
