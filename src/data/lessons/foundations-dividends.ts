import { Banknote, TrendingUp, AlertTriangle, Calculator, Percent, Repeat } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsDividendsLesson: Lesson = {
  id: 'foundations-dividends',
  emoji: '💵',
  title: 'The Dividend Check',
  subtitle:
    'How to tell a real dividend from one that\'s about to get cut',
  description:
    "A dividend is a cash payment from a company to its shareholders — your cut of the profits. But a juicy yield can be a trap, and a tiny yield can be a goldmine. You'll learn how to check if a dividend is safe, why a 10% yield usually screams danger, and how reinvested dividends quietly do most of the work in long-term returns.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['valuation', 'risk', 'business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'What a dividend actually is — and isn\'t', icon: Banknote },
    { label: 'Yield vs. payout ratio — the sustainability check', icon: Percent },
    { label: 'Why a 10% yield is a red flag, not a bargain', icon: AlertTriangle },
    { label: 'How reinvested dividends compound returns', icon: Repeat },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: What a dividend actually is
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What Is a Dividend?',
      topicIcon: Banknote,
      context:
        'A company declares a $1.00 quarterly dividend. You own 100 shares. Every three months, $100 in cash shows up in your brokerage account — no selling required.\n\nBut where does that money come from?',
      question: 'A dividend is best described as:',
      options: [
        'A bonus the company prints to reward shareholders',
        'A portion of the company\'s profits paid out in cash, reducing the cash on its balance sheet',
        'A guaranteed payment required by law for public companies',
        'Interest on the stock, similar to a bond coupon',
      ],
      correctIndex: 1,
      punchline:
        'Dividends are real cash leaving the company and landing with you. Every dollar paid out is a dollar the business no longer has to reinvest — which is why dividends are a trade-off, not free money.',
      wrongNudges: [
        'Companies can\'t print money. Every dividend dollar comes from existing cash — earned from operations or, in bad cases, borrowed.',
        '',
        'Dividends are 100% discretionary. Boards can cut or cancel them anytime. There is no legal obligation, and thousands of companies pay nothing at all.',
        'A bond coupon is contractually guaranteed; a dividend is not. Companies facing pressure cut dividends regularly — bondholders would sue if a coupon were skipped.',
      ],
      takeaway:
        'A dividend is a voluntary transfer of company cash to shareholders. It\'s not guaranteed, not free, and not the same as bond interest. It\'s profits being handed back.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: Dividend yield
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Dividend Yield',
      topicIcon: Percent,
      context:
        'A stock trades at $80. It pays a $0.60 quarterly dividend ($2.40 per year).\n\nDividend yield tells you how much cash income you get per dollar invested — it\'s the annual dividend divided by the share price.',
      question: 'What is this stock\'s dividend yield?',
      answer: 3,
      tolerance: 0.3,
      unit: '%',
      hint: '$2.40 ÷ $80',
      reveal:
        'A 3% yield means for every $100 you invest, the company hands back $3 in cash per year. Yield moves inversely with price: if the stock falls to $40 and the dividend stays at $2.40, the yield jumps to 6%. A rising yield often means the stock is falling — not that the dividend is getting more generous.',
      takeaway:
        'Yield = annual dividend ÷ current share price. When yield suddenly spikes, ask why the price dropped — the market may be predicting a cut.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: Payout ratio
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Payout Ratio',
      topicIcon: Calculator,
      context:
        'A company earns $4.00 per share in profit this year. It pays out $3.00 per share in dividends.\n\nThe payout ratio tells you what percentage of profits is being paid to shareholders — and how much cushion is left if profits drop.',
      question: 'What is the payout ratio?',
      answer: 75,
      tolerance: 5,
      unit: '%',
      hint: '$3.00 ÷ $4.00',
      reveal:
        'A 75% payout ratio means only 25 cents of every profit dollar stays in the business. If earnings drop 30% next year, the dividend can no longer be covered. Most safe dividends sit at 30–60% payout ratios; above 80% and investors start pricing in a cut.',
      takeaway:
        'Payout ratio = dividends ÷ earnings. A low ratio means the dividend can survive a bad year. A high ratio means the dividend depends on everything going right.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Drill: Safe dividend vs. risky dividend
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Safe or Risky?',
      topicIcon: AlertTriangle,
      intro:
        'Two companies, each paying the same dividend. Tap the one whose payout is safer.',
      prompts: [
        {
          setup: 'Both pay $2/share annually.',
          left: { label: 'Earns $6/share', sublabel: 'payout ratio ~33%' },
          right: { label: 'Earns $2.10/share', sublabel: 'payout ratio ~95%' },
          correct: 'left',
          flash:
            'At 33% payout, earnings could fall by half and the dividend would still be fully covered. At 95%, a single bad quarter wipes out the cushion.',
        },
        {
          setup: 'Both yield 5%.',
          left: { label: 'Consumer staples', sublabel: 'steady demand in recessions' },
          right: { label: 'Cyclical manufacturer', sublabel: 'profits swing 40% with the economy' },
          correct: 'left',
          flash:
            'Dividend safety depends on earnings stability. Staples (toothpaste, soap) sell through recessions; cyclicals see profits collapse just when investors need the income most.',
        },
        {
          setup: 'Both yield 4%.',
          left: { label: 'Raised dividend 10 years in a row', sublabel: 'track record of discipline' },
          right: { label: 'Started dividend last year', sublabel: 'no history through a downturn' },
          correct: 'left',
          flash:
            'A decade of uninterrupted raises signals management discipline and earnings reliability. A brand-new dividend has never been tested by a recession.',
        },
        {
          setup: 'Both pay $1B in dividends annually.',
          left: { label: 'Generates $3B in free cash flow', sublabel: 'dividends = 33% of FCF' },
          right: { label: 'Generates $900M in free cash flow', sublabel: 'dividends exceed FCF' },
          correct: 'left',
          flash:
            'When dividends exceed free cash flow, the company is borrowing or burning cash to pay shareholders. That can\'t last — a cut is coming.',
        },
        {
          setup: 'Both yield 6%.',
          left: { label: 'Debt is 1x EBITDA', sublabel: 'low leverage' },
          right: { label: 'Debt is 6x EBITDA', sublabel: 'highly leveraged' },
          correct: 'left',
          flash:
            'In a downturn, lenders come first. A heavily indebted company cuts the dividend long before it risks missing an interest payment — that\'s how bankruptcies are avoided.',
        },
      ],
      takeaway:
        'A safe dividend lives inside three cushions: low payout ratio, stable earnings, and manageable debt. Any of these breaking is how "reliable" dividends get cut.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: Spot the dividend trap
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Dividend Trap',
      topicIcon: AlertTriangle,
      intro:
        'A friend sends you this pitch. Tap the phrases that reveal the dividend is likely unsafe — not the signs of health.',
      passage: [
        { type: 'text', value: '"This stock is a no-brainer. It yields ' },
        {
          type: 'chip',
          value: '11% — way above the market\'s 1.5%',
          signal: true,
          feedback:
            'A yield this far above the market is the market\'s way of saying "we don\'t believe it." An 11% yield usually means the price has crashed because investors expect a cut.',
        },
        { type: 'text', value: '. Management ' },
        {
          type: 'chip',
          value: 'hasn\'t cut the dividend in 5 years',
          signal: false,
          feedback:
            'Past stability is comforting but doesn\'t guarantee the future. What matters is whether earnings still cover the payment going forward.',
        },
        { type: 'text', value: '. The ' },
        {
          type: 'chip',
          value: 'payout ratio is 135% of earnings',
          signal: true,
          feedback:
            'Paying out more than 100% of earnings is mathematically unsustainable. Every quarter at this level erodes the balance sheet. A cut is a matter of when, not if.',
        },
        { type: 'text', value: ' and the company has been ' },
        {
          type: 'chip',
          value: 'borrowing money to fund the dividend',
          signal: true,
          feedback:
            'Borrowing to pay shareholders destroys value — you\'re receiving your own future interest payments back as a "dividend." This is a classic pre-cut warning sign.',
        },
        { type: 'text', value: '. Revenue is ' },
        {
          type: 'chip',
          value: 'down 20% over the last two years',
          signal: true,
          feedback:
            'Shrinking revenue means shrinking future profits. A dividend set against yesterday\'s earnings will need to be cut to match tomorrow\'s.',
        },
        { type: 'text', value: '. But they have a ' },
        {
          type: 'chip',
          value: 'strong brand people love',
          signal: false,
          feedback:
            'Brand strength matters for long-term competitive position, but it doesn\'t directly fund dividends. Cash from operations does.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'This is a textbook dividend trap. A yield far above the market, a payout ratio above 100%, debt-funded payments, and declining revenue all point to one thing: the dividend is being held up artificially. When it gets cut, the stock typically drops another 20–40% overnight.',
      takeaway:
        'The market rarely hands out free lunches. When a yield looks too good to be true, the market is usually pricing in a cut that hasn\'t been announced yet.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Estimate: Reinvested dividends compounding
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Compounding Engine',
      topicIcon: Repeat,
      context:
        'You invest $10,000 in a stock that delivers an 8% annual return — but only 3% comes from price appreciation. The other 5% is dividends.\n\nOver 30 years, if you spend every dividend as it arrives, price alone turns your $10,000 into about $24,000.\n\nBut if you reinvest every dividend — buying more shares each time — you earn returns on those new shares too, and the new shares pay their own dividends, which buy more shares.',
      question:
        'Roughly how much does the reinvested portfolio grow to after 30 years?',
      answer: 100,
      tolerance: 15,
      unit: '$K',
      hint: '$10,000 × 1.08^30',
      reveal:
        'About $100,000 — roughly 4× the price-only outcome. Historically, over 40% of the S&P 500\'s long-run total return has come from reinvested dividends, not price gains. The "boring" dividend doing quiet work in the background often beats the exciting growth stock story.',
      takeaway:
        'Price gets the attention; reinvested dividends do the heavy lifting. A modest yield compounded for decades dwarfs the dividend check itself.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: Real-world judgment
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Right Question',
      topicIcon: TrendingUp,
      context:
        'You\'re comparing two dividend stocks for your portfolio.\n\nStock A: 8% yield, 110% payout ratio, revenue down 5%/year, 4x debt/EBITDA.\nStock B: 2% yield, 35% payout ratio, revenue up 8%/year, net cash on balance sheet, raised dividend 15 years straight.',
      question: 'Which is the better long-term dividend investment?',
      options: [
        'Stock A — the 8% yield means 4× the income right now',
        'Stock B — the dividend is safe, growing, and sits on a healthy business',
        'Whichever has the lower P/E ratio',
        'Split the investment 50/50 to capture both the yield and the growth',
      ],
      correctIndex: 1,
      punchline:
        'An 8% yield today means nothing if it becomes a 0% yield next year after a cut. Stock B\'s 2% dividend growing 10% a year for a decade quietly becomes a 5%+ yield on your original cost — with a safer business underneath. Dividend investing is about durability, not the headline number.',
      wrongNudges: [
        'High yields on troubled companies are classic value traps. After a cut, income drops AND the stock price typically crashes — you lose on both sides.',
        '',
        'P/E ratio doesn\'t tell you anything about dividend safety. A low P/E on a broken business often means the market sees a cut coming that hasn\'t happened yet.',
        '50/50 doesn\'t fix a bad investment — it just means half your money sits in a dividend trap. Diversification can\'t save you from knowingly buying something unsustainable.',
      ],
      takeaway:
        'The right question is never "which dividend is biggest?" — it\'s "which dividend will still be here, and growing, in 10 years?"',
    },
  ],
  takeaways: [
    'A dividend is real cash leaving the company. It\'s not guaranteed, not free, and not the same as bond interest — boards cut dividends all the time.',
    'Yield = annual dividend ÷ price. Payout ratio = dividends ÷ earnings. A safe dividend lives in the intersection of modest yield and modest payout ratio.',
    'Huge yields are warnings, not gifts. When a yield is far above the market, it usually means the price has already fallen because investors expect a cut.',
    'Reinvested dividends compound quietly and powerfully. Over decades, they often contribute more to total returns than price appreciation itself.',
  ],
  completionMessages: {
    perfect:
      'You can read a dividend now — yield, payout ratio, sustainability, and the traps in between. That puts you ahead of most investors, who only look at the headline yield.',
    great:
      'Strong dividend instincts. You know a healthy payout from a dangerous one and can see past a juicy yield to the business underneath.',
    good:
      'Good foundation. Keep practicing the sustainability check — yield means nothing without the payout ratio, debt, and earnings picture behind it.',
    low:
      'Worth revisiting. Dividends look simple but have the most subtle traps in investing. Once you can spot a soon-to-be-cut payout, you\'ll avoid a lot of pain.',
  },
};
