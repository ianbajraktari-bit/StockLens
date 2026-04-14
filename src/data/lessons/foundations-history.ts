import { Clock, TrendingDown, AlertTriangle, BookOpen, Calculator, Shield } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsHistoryLesson: Lesson = {
  id: 'foundations-history',
  emoji: '📜',
  title: 'When Markets Go Wrong',
  subtitle: 'Bubbles, crashes, and the patterns that keep repeating',
  description:
    "Every generation of investors thinks they're different — and every generation learns the same lessons the hard way. You'll study the dot-com bubble, the 2008 crisis, and the COVID crash to build pattern recognition that protects you when the next one hits.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['behavioral_biases', 'risk'],
  keyFacts: [],
  topics: [
    { label: 'Telling real booms from bubbles', icon: TrendingDown },
    { label: 'The one pattern every crash shares', icon: AlertTriangle },
    { label: 'How long recoveries actually take', icon: Clock },
    { label: 'What panic selling really costs', icon: Calculator },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: bubble or boom?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Bubble or Boom?',
      topicIcon: AlertTriangle,
      intro: 'Each scenario describes a market moment. Tap whether it was a real boom (creating lasting value) or a bubble (destined to pop).',
      prompts: [
        {
          setup: '1999: Companies with no revenue are valued at billions because they have ".com" in the name.',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'left',
          flash: 'Classic bubble. Valuations detached completely from revenue, profits, or any business fundamentals. Most of these companies went to zero within two years.',
        },
        {
          setup: '2010–2020: Smartphones create $3 trillion in real value at Apple, Google, and Amazon.',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'right',
          flash: 'Real boom. These companies built massive revenue, profit, and user bases. The value creation was backed by actual products used by billions of people.',
        },
        {
          setup: '2021: Unprofitable SPACs trade at 50x revenue on narratives about "disruption."',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'left',
          flash: 'Bubble. Most SPACs had no revenue, no product-market fit, and no path to profitability. "Disruption" was the story; losses were the reality. Most fell 80–90%.',
        },
        {
          setup: '1990s: The internet fundamentally changes commerce. Amazon, Google, and eBay emerge.',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'right',
          flash: 'The internet itself was a real boom — it created trillions in lasting value. The bubble was in the PRICES people paid for unproven companies riding the trend.',
        },
        {
          setup: '2007: Banks package subprime mortgages into complex products rated "AAA safe."',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'left',
          flash: 'Textbook bubble. Risky assets disguised as safe ones, built on the assumption that housing prices never fall. When they did, the entire financial system nearly collapsed.',
        },
        {
          setup: '2023–2025: AI drives real revenue growth at NVIDIA ($130B), Microsoft, and Google.',
          left: { label: 'Bubble' },
          right: { label: 'Boom' },
          correct: 'right',
          flash: 'Boom — so far. Unlike dot-com, AI companies have massive real revenue and profits. The risk is in PRICES (paying 40x+ for growth), not in whether AI creates value.',
        },
      ],
      takeaway:
        'Booms create real value backed by revenue and profits. Bubbles create stories backed by hope. The tricky part: bubbles often start as real booms — the excess comes in the prices people pay, not the technology itself.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the dot-com math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Dot-Com Math',
      topicIcon: Calculator,
      context:
        'Pets.com IPOs in February 2000 at a $300 million valuation. Its annual revenue at the time: $619,000.',
      question: "What's the price-to-revenue ratio?",
      answer: 485,
      tolerance: 50,
      unit: 'x',
      hint: '$300,000,000 ÷ $619,000',
      reveal:
        "485x revenue. For context, even today's most expensive stocks rarely exceed 30x revenue. Pets.com would have needed to grow revenue 100x just to reach 'expensive.' It went bankrupt 9 months later. When valuations detach this far from reality, the math always wins.",
      takeaway:
        'Bubbles produce absurd math that people ignore because the story feels true. Always do the math — it cuts through narratives instantly.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: the 2008 pattern
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The 2008 Pattern',
      topicIcon: BookOpen,
      context:
        "By 2006, banks are packaging risky mortgages into complex financial products rated 'AAA safe.' Housing prices have risen 80% in 5 years. Everyone — bankers, regulators, rating agencies, homeowners — believes housing prices never go down. Trillions of dollars of leverage are built on this assumption.",
      question: "What's the core mistake that caused the crisis?",
      options: [
        'Banks were greedy and deliberately caused the crisis',
        'Everyone assumed the recent past (rising prices) would continue forever — and built massive leverage on that assumption',
        'The government should have banned mortgage-backed securities',
        'Interest rates were too low for too long',
      ],
      correctIndex: 1,
      punchline:
        "The deepest crashes share one pattern: everyone extrapolates the recent past into the future, builds leverage on that assumption, and is shocked when the trend reverses. It happened in 2000 (tech will grow forever), 2008 (housing never falls), and 2021 (free money lasts forever). The pattern always repeats.",
      wrongNudges: [
        "Greed played a role, but the crisis wasn't a conspiracy. Homeowners, banks, regulators, and rating agencies all believed the same thing: housing only goes up. Shared delusion, not villainy, caused the crisis.",
        '',
        'Mortgage-backed securities are a useful financial tool when used responsibly. The problem was the quality of mortgages inside them and the lie that they were safe. Banning the tool misses the root cause.',
        'Low rates contributed, but Japan had near-zero rates for decades without a housing crisis. The core issue was leverage built on the assumption that one trend (rising housing) would never reverse.',
      ],
      takeaway:
        "Every major crash follows the same script: a real trend gets extrapolated too far, leverage amplifies the bet, and when reality arrives, the unwind is catastrophic. Learn to recognize the pattern.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: spot the bubble language
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Spot the Bubble Language',
      topicIcon: AlertTriangle,
      intro:
        "A friend is pitching you on a hot investment. Tap the phrases that should set off alarm bells — language that appears in every bubble.",
      passage: [
        { type: 'text', value: '"You have to get in now. ' },
        {
          type: 'chip',
          value: 'This time is different',
          signal: true,
          feedback:
            "The four most expensive words in investing. Every bubble convinces people the old rules don't apply. They always do.",
        },
        { type: 'text', value: ' — the old rules don\'t apply anymore. ' },
        {
          type: 'chip',
          value: 'Traditional valuation metrics don\'t work here',
          signal: true,
          feedback:
            "When people say metrics 'don't apply,' it means the metrics are screaming danger and they don't want to listen. P/E, price-to-revenue, and cash flow always matter.",
        },
        { type: 'text', value: '. The company grew revenue 40% last year and ' },
        {
          type: 'chip',
          value: 'has 2 million paying customers',
          signal: false,
          feedback:
            "Revenue growth and paying customers are real business metrics. This is actually the kind of evidence you WANT to see — it's not bubble language.",
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: "Revenue doesn't matter — it's about the addressable market",
          signal: true,
          feedback:
            "When current revenue 'doesn't matter,' you're being asked to pay for a fantasy. Addressable market is the maximum possible — most companies capture a tiny fraction of it.",
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: "Everyone I know is making money on this",
          signal: true,
          feedback:
            'When your taxi driver, hairdresser, and neighbor are all in the same trade, you\'re late. Widespread participation is a sign of a crowded trade, not a safe one.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: "You can't lose in this space",
          signal: true,
          feedback:
            "The most dangerous sentence in investing. You can ALWAYS lose. Anyone saying otherwise is either lying or deluded. This phrase has preceded every major crash.",
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'Five bubble signals, one real metric. Every bubble produces the same phrases: "this time is different," "old metrics don\'t apply," "everyone is making money," "you can\'t lose." These words have preceded 100% of major crashes. Memorize them.',
      takeaway:
        "Bubble language is consistent across centuries. When you hear 'this time is different' or 'valuations don't matter,' the alarm should be deafening.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: recovery patterns
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Recovery Patterns',
      topicIcon: Clock,
      intro: 'Crashes feel permanent. They never are. How long did each recovery actually take?',
      prompts: [
        {
          setup: 'After the dot-com crash (2000), how long until the S&P 500 recovered to its peak?',
          left: { label: '~2 years' },
          right: { label: '~7 years' },
          correct: 'right',
          flash: 'The dot-com crash was brutal — it took about 7 years for the S&P 500 to fully recover. The deepest bubbles leave the deepest scars.',
        },
        {
          setup: 'After the 2008 financial crisis, the S&P 500 recovered to its peak in about...',
          left: { label: '~2 years' },
          right: { label: '~5 years' },
          correct: 'right',
          flash: 'Roughly 5.5 years from the bottom in March 2009 to surpassing the 2007 peak. Long, but it DID recover — and then went on to triple.',
        },
        {
          setup: 'After the COVID crash (March 2020), the S&P 500 recovered in...',
          left: { label: '~5 months' },
          right: { label: '~2 years' },
          correct: 'left',
          flash: 'The fastest recovery in history — about 5 months. Massive fiscal stimulus and Fed rate cuts supercharged the rebound. Investors who panic-sold missed one of the best rallies ever.',
        },
        {
          setup: 'During a crash, which typically recovers first?',
          left: { label: 'High-quality companies', sublabel: 'strong balance sheets, real profits' },
          right: { label: 'Speculative companies', sublabel: 'unprofitable, story-driven' },
          correct: 'left',
          flash: 'Quality recovers first because it has earnings, cash flow, and staying power. Speculative stocks often never recover — many go to zero.',
        },
        {
          setup: 'The average bear market (20%+ decline) lasts about...',
          left: { label: '~13 months' },
          right: { label: '~4 years' },
          correct: 'left',
          flash: 'The average bear market lasts about 13 months, with an average decline of ~35%. It FEELS like forever, but most are over within a year. The bull markets that follow last ~5 years on average.',
        },
        {
          setup: 'An investor who stayed fully invested through the 2008–2009 crisis, by 2013 had...',
          left: { label: 'Still lost money' },
          right: { label: 'Fully recovered and then some' },
          correct: 'right',
          flash: 'Full recovery by early 2013, and then the market nearly tripled again by 2020. Every single major crash in US history has been followed by a full recovery for diversified investors who held.',
        },
      ],
      takeaway:
        'Crashes feel permanent but they never are. The average bear market lasts 13 months. Every crash in history has been temporary for diversified, patient investors. The real risk is panicking and selling at the bottom.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Estimate: the cost of panic selling
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cost of Panic',
      topicIcon: TrendingDown,
      context:
        "You invested $100,000 in an S&P 500 index fund in January 2008. By March 2009, it's worth $50,000. You panic and sell. The market recovers fully by 2013 and roughly triples by 2020. If you'd held, your $100,000 would be worth about $300,000 by 2020.",
      question: 'How much did panic selling cost you compared to holding?',
      answer: 250000,
      tolerance: 20000,
      unit: '$',
      hint: 'What you would have had ($300K) minus what you ended up with ($50K)',
      reveal:
        "You locked in a $50,000 loss and missed $250,000 in recovery gains. Total cost of panic: $250,000. This isn't hypothetical — studies show the average investor underperforms the market by 3–4% annually, mostly from buying high and selling low during emotional moments exactly like this one.",
      takeaway:
        'Panic selling is the single most expensive mistake an investor can make. It turns a temporary decline into a permanent loss and locks you out of the recovery.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the history-aware investor
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The History-Aware Investor',
      topicIcon: Shield,
      context:
        "Markets have dropped 30% in three months. Headlines are screaming crisis. Talking heads predict worse to come. Your portfolio is deep in the red. Your friends are selling. Every instinct says: get out.",
      question: "What does a history-aware investor do?",
      options: [
        "Sell now and buy back when things calm down — you'll know when it's safe",
        'Check if your investment theses are intact — hold what\'s sound, sell only what\'s fundamentally broken',
        "Buy as aggressively as possible — crashes are always buying opportunities",
        'Move everything to cash until the crisis passes',
      ],
      correctIndex: 1,
      punchline:
        "History teaches one clear lesson: you can't time the bottom, and waiting for 'safety' means buying after the recovery. The investors who do best in crashes aren't fearless — they're disciplined. They check their theses, not their emotions. They hold quality, cut broken positions, and resist the urge to do something dramatic.",
      wrongNudges: [
        "You'll never 'know when it's safe.' By the time headlines turn positive, the market has already recovered 30–50%. Timing the bottom is a fantasy — even professionals can't do it consistently.",
        '',
        "Blind buying during a crash is gambling, not investing. Some companies in your portfolio may be genuinely broken — a crash reveals which businesses were swimming naked. Check each thesis individually.",
        "Moving to cash feels safe but has a hidden cost: you have to decide when to get back in. Most people wait too long, miss the recovery, and end up worse than if they'd done nothing.",
      ],
      takeaway:
        "In a crash, discipline beats both panic and greed. Check your theses, hold what's sound, sell what's broken, and resist the urge to time the market.",
    },
  ],
  takeaways: [
    "Bubbles and booms often start the same way — the difference is whether prices stay connected to revenue and profits or detach into pure story.",
    "Every major crash follows the same script: a real trend gets extrapolated, leverage amplifies the bet, and the unwind is brutal. The pattern always repeats.",
    "Crashes feel permanent but they never are. The average bear market lasts ~13 months, and every major crash in US history has been followed by a full recovery.",
    "The most expensive mistake in investing is panic selling — it turns a temporary decline into a permanent loss. Discipline, not fearlessness, is what protects you.",
  ],
  completionMessages: {
    perfect:
      "You've internalized the patterns that repeat across every crash. When the next one hits — and it will — you'll recognize it, not react to it.",
    great:
      'Strong understanding of market history. You can already tell the difference between a bubble and a boom, and you know what panic costs.',
    good:
      "Good start. These patterns will click more deeply the first time you live through a real market downturn — and now you'll be prepared.",
    low:
      "Worth revisiting. Market crashes happen roughly once a decade. Understanding the patterns before the next one hits is the difference between surviving and suffering.",
  },
};
