import { DoorOpen, ShieldAlert, TrendingUp, Lightbulb, Zap, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsSellingLesson: Lesson = {
  id: 'foundations-selling',
  emoji: '🚪',
  title: 'When to Sell',
  subtitle: 'The hardest decision in investing — and how to make it without emotion',
  description:
    "Everyone talks about what to buy. Almost nobody talks about when to sell. But selling is where most investors destroy their returns — panic-selling winners too early, holding losers too long, or selling for the wrong reasons. This lesson gives you a framework for the hardest decision in investing.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['behavioral_biases', 'risk'],
  keyFacts: [],
  topics: [
    { label: 'The three legitimate reasons to sell a stock', icon: DoorOpen },
    { label: 'Why most selling decisions are emotional, not rational', icon: ShieldAlert },
    { label: 'The "thesis broken" framework for exiting positions', icon: TrendingUp },
    { label: 'Common selling mistakes and how to avoid them', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: when should you sell?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Three Reasons',
      topicIcon: DoorOpen,
      context:
        'You own a stock that\'s down 25% from where you bought it. Your instinct screams "sell before it drops more." But is the business actually worse, or is the market just volatile?\n\nThere are only three legitimate reasons to sell:\n1. Your thesis is broken — the reason you bought no longer holds\n2. The valuation is extreme — the stock is priced far beyond what the business can deliver\n3. You found something better — a higher-return opportunity for the same capital\n\nNotice what\'s NOT on the list: "the stock went down" and "the stock went up."',
      question: 'Your stock drops 25%. Nothing about the business has changed. What should you do?',
      options: [
        'Sell — cut your losses before it drops further',
        'Hold — if the business hasn\'t changed, the drop is volatility, not risk. The stock is actually cheaper now for the same business, which means it\'s a better deal than when you bought it',
        'Sell half — compromise between protecting yourself and staying invested',
        'Buy more — if it was a good deal before, it\'s a better deal now',
      ],
      correctIndex: 1,
      punchline:
        'If the business hasn\'t changed, a 25% price drop means you own the same asset at a 25% discount. Selling because the price dropped is selling because other people are selling — that\'s panic, not analysis. The only question that matters: has your thesis broken?',
      wrongNudges: [
        'Cutting losses sounds disciplined, but you\'re locking in a 25% loss on a business that hasn\'t deteriorated. The price dropped; the value didn\'t. Selling here means you\'re letting the market\'s mood make your decisions.',
        '',
        'Selling half feels like a compromise, but it\'s actually two bad decisions combined: selling a business you believe in AND keeping a position you\'re uncertain about. Either your thesis holds (hold all) or it doesn\'t (sell all).',
        'Buying more (averaging down) CAN be right — but only if you\'ve genuinely re-confirmed your thesis. "It\'s cheaper" isn\'t enough. You need to verify that the reason it dropped isn\'t the beginning of fundamental deterioration.',
      ],
      takeaway: 'Never sell because the price dropped. Sell because the thesis broke, the valuation is extreme, or you found something better. Price movement without business change is noise, not signal.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: sell or hold?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Thesis Check',
      topicIcon: Zap,
      intro: 'For each scenario, decide: is this a legitimate reason to sell, or an emotional reaction?',
      prompts: [
        {
          setup: 'You bought a stock for its 30% revenue growth. Growth has slowed to 8% for three straight quarters.',
          left: { label: 'Sell', sublabel: 'thesis is broken' },
          right: { label: 'Hold', sublabel: 'temporary blip' },
          correct: 'left',
          flash: 'You bought for 30% growth. It\'s delivering 8%. The thesis — high growth — is broken. Three straight quarters of deceleration is a trend, not a blip. Sell and reallocate.',
        },
        {
          setup: 'Your stock is down 15% this week. The company just reported earnings that beat expectations.',
          left: { label: 'Sell', sublabel: 'stock is falling' },
          right: { label: 'Hold', sublabel: 'business is fine' },
          correct: 'right',
          flash: 'The business beat expectations — your thesis is intact. The 15% drop is the market reacting to something else (sector rotation, macro fears, profit-taking). This is volatility, not a broken thesis.',
        },
        {
          setup: 'You bought a stock at 25x earnings. It\'s now at 60x after a 150% rally. No change in fundamentals.',
          left: { label: 'Sell', sublabel: 'valuation is extreme' },
          right: { label: 'Hold', sublabel: 'don\'t sell winners' },
          correct: 'left',
          flash: 'At 60x earnings with unchanged fundamentals, the stock needs growth to more than double just to justify the new price. The business is the same — only the price changed. Selling because valuation is extreme is one of the three legitimate reasons.',
        },
        {
          setup: 'A friend made 50% on a different stock and you\'re up only 5% on yours. You feel like you\'re missing out.',
          left: { label: 'Sell', sublabel: 'find something better' },
          right: { label: 'Hold', sublabel: 'FOMO isn\'t a reason' },
          correct: 'right',
          flash: 'Your friend\'s return is irrelevant to your thesis. FOMO (fear of missing out) causes more bad sells than bad buys. Your stock is up 5% and your thesis is intact. Chasing someone else\'s winner usually means buying after the move.',
        },
        {
          setup: 'You own a retailer. Amazon just entered their exact market with lower prices and faster delivery.',
          left: { label: 'Sell', sublabel: 'competitive moat breached' },
          right: { label: 'Hold', sublabel: 'overreaction' },
          correct: 'left',
          flash: 'Amazon entering your company\'s market with structural advantages (lower cost, faster delivery) is a thesis-breaking event. This isn\'t a temporary headwind — it\'s a permanent competitive threat. The moat just got smaller.',
        },
        {
          setup: 'Your stock doubled in 6 months. You\'re terrified of losing the gains.',
          left: { label: 'Sell', sublabel: 'lock in profits' },
          right: { label: 'Hold', sublabel: 'fear isn\'t a reason' },
          correct: 'right',
          flash: 'This is the disposition effect — selling winners too early because gains feel fragile. If the business is strong and the valuation isn\'t extreme, the stock doubling means your thesis was RIGHT. Why sell a correct thesis? Let winners run.',
        },
      ],
      takeaway: 'Legitimate sells: thesis broken (growth collapsed, moat breached), valuation extreme (60x with no growth change), found something better. Emotional sells: stock went down, FOMO, fear of losing gains. Always ask: has the thesis changed?',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Tap: spot the bad selling reasons
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Selling Mistakes',
      topicIcon: Flag,
      intro: 'An investor describes why they sold 5 stocks last year. Tap the sells that were likely mistakes.',
      passage: [
        { type: 'text', value: '"I sold ' },
        {
          type: 'chip',
          value: 'Stock A because it was down 30% and I couldn\'t take the stress anymore',
          signal: true,
          feedback: 'Emotional sell. "I couldn\'t take the stress" is a feeling, not analysis. If the business was fine, this investor sold a good stock at a 30% discount because the pain of watching it drop overwhelmed their judgment. This is panic selling.',
        },
        { type: 'text', value: '. I sold ' },
        {
          type: 'chip',
          value: 'Stock B after the CEO resigned unexpectedly and the replacement had no relevant experience',
          signal: false,
          feedback: 'Legitimate sell. The CEO — often the thesis — left, and the replacement doesn\'t inspire confidence. Leadership change at the top can fundamentally alter a company\'s trajectory. This is a thesis-breaking event worth exiting over.',
        },
        { type: 'text', value: '. I sold ' },
        {
          type: 'chip',
          value: 'Stock C because it tripled and I wanted to lock in my gains before they disappeared',
          signal: true,
          feedback: 'Disposition effect. Selling solely because a stock tripled ignores the question: is the business still strong and the valuation reasonable? If yes, selling locks in a tax bill and removes you from a winning position. Winners can keep winning.',
        },
        { type: 'text', value: '. I sold ' },
        {
          type: 'chip',
          value: 'Stock D because its main product lost 40% market share to a competitor over two years',
          signal: false,
          feedback: 'Legitimate sell. Losing 40% market share over two years is a structural decline — the moat is eroding. This is a thesis-breaking fundamental change, not a price reaction. Selling here is disciplined, not emotional.',
        },
        { type: 'text', value: '. And I sold ' },
        {
          type: 'chip',
          value: 'Stock E because a famous investor on TV said it was overvalued',
          signal: true,
          feedback: 'Outsourcing your thesis. Selling because someone on TV said to is letting a stranger make your financial decisions. They don\'t know your cost basis, your thesis, your time horizon, or your risk tolerance. Do your own analysis.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Three bad sells (stress, locking in gains, TV opinion) and two good ones (CEO departure, market share loss). The bad sells share a pattern: they\'re all about the investor\'s emotions, not the business\'s fundamentals. The good sells share a pattern: they\'re both about the business deteriorating. Sell the business, not your feelings.',
      takeaway: 'Good sells are about the business changing (leadership, market share, growth trajectory). Bad sells are about your emotions changing (stress, FOMO, fear of loss, someone else\'s opinion). Before selling, always ask: am I selling the business, or selling my feelings?',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: the hardest sell
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Hardest Decision',
      topicIcon: Lightbulb,
      context:
        'You bought a stock at $100 two years ago. It\'s your biggest winner — now at $300. You love the company and have told all your friends about it.\n\nBut: revenue growth decelerated from 35% to 12%. The P/E expanded from 30x to 55x (the price rose faster than earnings). A major competitor just launched a superior product. Two board members resigned last month.\n\nThe stock price is great. The thesis is deteriorating.',
      question: 'What should you do?',
      options: [
        'Hold — you\'re up 200%, the stock has "momentum," and you love the company',
        'Sell — the thesis is breaking (growth deceleration, competitor threat, board departures) even though the price is at all-time highs. Price and value are diverging, and the deterioration signals are stacking up',
        'Hold and set a "stop loss" at $250 — protect some gains but stay invested',
        'Sell half — take some profits but keep exposure to the upside',
      ],
      correctIndex: 1,
      punchline:
        'This is the hardest sell in investing: a stock at all-time highs with a deteriorating thesis. Everything emotional screams "hold" — you\'re winning, you love the company, you\'d feel stupid if it kept going up. But three fundamental signals (growth deceleration, new competitor, board departures) all point the same direction. The price reflects the past. The thesis reflects the future.',
      wrongNudges: [
        'Being up 200% is irrelevant to the future. The stock doesn\'t know your cost basis. The question is: would you buy this stock TODAY at $300 with 12% growth, 55x P/E, a new competitor, and board instability? If not, holding is the same as buying.',
        '',
        'Stop losses are mechanical, not analytical. If the thesis is broken, waiting for a 17% drop from $300 to $250 just means selling later at a lower price. And if the stock dips to $250 on noise then recovers, you sold a fine stock for no reason.',
        'Selling half is the disposition effect in disguise — you\'re "taking profits" on a broken thesis while keeping exposure you don\'t believe in. Either the thesis holds or it doesn\'t. Half-measures reflect uncertainty you should resolve, not avoid.',
      ],
      takeaway: 'The ultimate test: would you buy this stock today at the current price? If your answer is no — because the thesis is weakening — then holding is just a slower way of making a bad investment. Sell your losers AND sell your winners when the thesis breaks.',
    },
  ],
  takeaways: [
    'Three legitimate reasons to sell: (1) the thesis broke (the reason you bought no longer holds), (2) the valuation is extreme (price far exceeds what the business can deliver), (3) you found a higher-return opportunity.',
    'Never sell because the price dropped. If the business hasn\'t changed, a lower price is a better deal, not a reason to exit.',
    'The disposition effect makes you sell winners too early and hold losers too long. Combat it by asking: "Am I selling the business, or selling my feelings?"',
    'The hardest sell: a stock at all-time highs with a deteriorating thesis. The ultimate test — would you buy it today at this price? If no, holding is just delayed buying of a bad investment.',
    'You have the full toolkit. Next: put it all to work — analyzing real companies like Apple, NVIDIA, and Costco with real financial data.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now have a selling framework most professional investors wish they had earlier in their careers.',
    great: 'Strong work. Knowing when to sell is rarer than knowing when to buy. You\'re ahead of most investors.',
    good: 'Good foundation. Selling discipline takes practice — this framework will save you from expensive emotional mistakes.',
    low: 'Worth revisiting. More money is lost from bad sells than bad buys. This framework is critical for protecting your returns.',
  },
};
