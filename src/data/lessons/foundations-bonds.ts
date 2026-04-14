import { Landmark, Zap, Clock, Calculator, Lightbulb, Flag, TrendingDown } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsBondsLesson: Lesson = {
  id: 'foundations-bonds',
  emoji: '🧾',
  title: 'Bonds & Fixed Income',
  subtitle: 'The other half of markets — what you own when you lend instead of buy',
  description:
    "Stocks get all the attention, but the bond market is twice the size of the stock market and drives most of what stocks do. Bonds are loans: you give a company or government money, they pay you interest, and they return your principal on a set date. That simplicity hides a world of nuance — interest rate risk, credit risk, duration, and yield curves. This lesson teaches you what bonds actually are, why rising rates destroy bond prices, and how bonds fit into a real portfolio.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk'],
  keyFacts: [],
  topics: [
    { label: 'Bonds as loans — coupon, principal, maturity', icon: Landmark },
    { label: 'Why bond prices fall when interest rates rise', icon: TrendingDown },
    { label: 'Duration and credit risk — the two risks that matter', icon: Flag },
    { label: 'The role of bonds in a portfolio', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: what is a bond?
    //
    // Why a decide first: most retail investors think bonds are
    // "safer stocks." They're not — they're lending, which is a
    // fundamentally different position.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Stocks vs. Bonds',
      topicIcon: Landmark,
      context:
        'You have two $10,000 positions in the same company:\n\nStock position:\n• You own a tiny slice of the business.\n• Value moves with the stock price. Can go to $0 or to $100,000.\n• You might receive dividends. You vote at shareholder meetings.\n\nBond position:\n• You lent the company $10,000.\n• They pay you 5% interest ($500/year) for 10 years.\n• At year 10, they return your $10,000 principal.\n• You don\'t participate in the business\'s upside — but you get paid first if things go wrong.',
      question: 'What\'s the fundamental difference between owning stock vs. owning a bond?',
      options: [
        'Bonds are safer — they can\'t lose money',
        'Stocks give you ownership (claim on future profits and growth); bonds make you a lender (fixed payments, first claim in bankruptcy, no upside if the company thrives)',
        'Bonds always pay higher returns than stocks',
        'They\'re basically the same — just different risk profiles',
      ],
      correctIndex: 1,
      punchline:
        'Stock = ownership. Bond = loan. A shareholder wins when the company thrives (unlimited upside) and loses everything first if it fails (last in line in bankruptcy). A bondholder gets fixed payments regardless of how well the company does, but is paid BEFORE shareholders in bankruptcy. This is the core tradeoff: bondholders trade upside for predictability and a higher claim on the assets.',
      wrongNudges: [
        'Bonds can absolutely lose money. Bond prices fall when interest rates rise, and bonds default when companies go bankrupt. "Safer than stocks on average" is very different from "can\'t lose money."',
        '',
        'Over long periods, stocks have historically returned ~10% vs. bonds ~5%. Bonds pay LESS on average — that\'s the price of predictability and the higher claim on assets.',
        'The legal structure is profoundly different. A shareholder and a bondholder in the same company are in very different positions if things go wrong.',
      ],
      takeaway: 'Stocks give you ownership and upside. Bonds make you a lender — you get fixed payments and priority in bankruptcy, but no participation in the company\'s growth.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: bond mechanics
    //
    // Why a drill: forces rapid classification of bond features
    // (coupon, principal, maturity) — foundational vocabulary.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Bond Anatomy',
      topicIcon: Zap,
      intro: 'Every bond has three parts: the coupon (annual interest), the principal (face value), and the maturity (when principal is returned). Match each scenario to the right concept.',
      prompts: [
        {
          setup: 'Apple pays you $40 per year on a bond you bought from them.',
          left: { label: 'Coupon', sublabel: 'annual interest' },
          right: { label: 'Principal' },
          correct: 'left',
          flash: 'The coupon is the interest payment. On a $1,000 bond with a 4% coupon, you receive $40/year until maturity. This is the income bondholders rely on.',
        },
        {
          setup: 'On January 1, 2035, the US Treasury will send you the full $10,000 back on a bond you bought today.',
          left: { label: 'Coupon' },
          right: { label: 'Maturity + Principal', sublabel: 'face value returned' },
          correct: 'right',
          flash: 'The maturity date is when the principal (face value) is returned. Until then, you collect coupons. On maturity, you get back the $10,000 you lent.',
        },
        {
          setup: 'A 10-year Treasury bond vs. a 2-year Treasury bond — same issuer, same $1,000 face value.',
          left: { label: '10-year is riskier', sublabel: 'more interest rate exposure' },
          right: { label: 'Equal risk', sublabel: 'same issuer' },
          correct: 'left',
          flash: 'Longer maturity = more interest rate risk. If rates rise 1%, the 10-year bond drops ~9% in price; the 2-year drops only ~2%. This is "duration" — longer bonds are more sensitive to rate changes.',
        },
        {
          setup: 'A BBB-rated corporate bond pays 6% yield. A US Treasury pays 4%. Same maturity.',
          left: { label: 'Same risk', sublabel: 'same yield' },
          right: { label: 'Corporate has credit risk', sublabel: 'hence higher yield' },
          correct: 'right',
          flash: 'The 2% yield difference is the "credit spread" — extra yield to compensate for the risk that the corporation defaults. US Treasuries are considered risk-free; corporate bonds pay more to reflect default risk.',
        },
        {
          setup: 'Interest rates just rose from 3% to 5%. Your existing 3% bond is worth:',
          left: { label: 'The same', sublabel: 'coupons didn\'t change' },
          right: { label: 'Less', sublabel: 'new bonds are more attractive' },
          correct: 'right',
          flash: 'Bond prices move inversely to rates. When new bonds pay 5%, no one wants your 3% bond at face value — its price drops until the yield matches the market. Rising rates = falling bond prices. This is the #1 thing bond investors get wrong.',
        },
      ],
      takeaway: 'A bond is defined by its coupon (interest), principal (face value), and maturity (when principal returns). Longer maturity = more interest rate risk. Lower credit = higher yield.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: rate sensitivity
    //
    // Why an estimate: makes "rising rates hurt bond prices"
    // concrete with real numbers.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Rate Sensitivity',
      topicIcon: Calculator,
      context:
        'You own a 10-year Treasury bond paying a 3% coupon that you bought for $1,000 (face value). The bond\'s "duration" is roughly 9 years — meaning for every 1% change in rates, the bond price changes about 9% in the opposite direction.\n\nInterest rates just rose from 3% to 5% — a 2 percentage point increase.',
      question: 'Roughly how much has your bond\'s market value dropped?',
      answer: 18,
      tolerance: 3,
      unit: '%',
      hint: 'Duration 9 × 2% rate change',
      reveal:
        '~18% drop. Duration 9 × 2 percentage points = ~18% price decline. Your $1,000 bond is now worth ~$820 in the market. If you hold to maturity, you still get your $1,000 back — but if you sell early, you realize the loss. This is exactly what happened in 2022: rates rose fast, and long-duration bond portfolios lost 15-25%. Many investors who thought bonds were "safe" got a brutal lesson in duration risk.',
      takeaway: 'Bond price sensitivity to rates is measured by duration. A 10-year bond drops ~9% for every 1% rise in rates. A 2-year bond drops only ~2%. Long bonds are not "safe" — they\'re highly exposed to rate surprises.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: credit risk red flags
    //
    // Why a tap: teaches the user to read a corporate bond
    // description and flag default signals.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Credit Risk Signals',
      topicIcon: Flag,
      intro: 'A broker pitches you a corporate bond. Tap the details that signal elevated credit risk.',
      passage: [
        { type: 'text', value: '"A 5-year bond from RiskCorp. ' },
        {
          type: 'chip',
          value: 'Pays an 11% coupon — triple what Treasuries offer',
          signal: true,
          feedback: 'High yield is a warning, not a feature. Treasuries are ~4%; investment-grade corporates ~5-6%. An 11% yield means the market demands a 7%+ spread to compensate for credit risk. This is "high yield" (formerly "junk") territory — real default risk.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Rated B- by S&P',
          signal: true,
          feedback: 'B- is speculative grade. Investment grade is BBB- and above. B-rated bonds have historically defaulted at 5-10% rates over 5-year periods. One in ten of these bonds doesn\'t make it to maturity.',
        },
        { type: 'text', value: '. The company ' },
        {
          type: 'chip',
          value: 'has grown revenue 20% annually for 3 years',
          signal: false,
          feedback: 'Revenue growth is positive but doesn\'t offset credit concerns. Growing companies with bad balance sheets still default — sometimes more often than stable ones, because growth often requires continued borrowing.',
        },
        { type: 'text', value: '. However, ' },
        {
          type: 'chip',
          value: 'free cash flow is slightly negative, funded by continuous new debt issuance',
          signal: true,
          feedback: 'Critical red flag. A company that can\'t fund itself from operations and relies on new debt to survive is completely dependent on credit markets staying open. A credit market tightening = default risk spikes overnight.',
        },
        { type: 'text', value: '. The broker notes ' },
        {
          type: 'chip',
          value: 'the bond is callable by the company in year 3',
          signal: false,
          feedback: 'Callable bonds are a mild negative for buyers (they can be "called" early if rates fall), but not a credit risk per se. It doesn\'t indicate default — just that the company has optionality on refinancing.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Three credit red flags: (1) 11% yield with a 7%+ spread over Treasuries = the market is demanding extreme compensation. (2) B- rating = historical 5-10% default rate. (3) Negative free cash flow funded by new debt = dependent on credit market access. The revenue growth is real but irrelevant if the balance sheet collapses. High-yield bonds belong in portfolios only at position sizes small enough that defaults don\'t matter.',
      takeaway: 'Credit risk signals: yields dramatically above Treasuries, sub-investment-grade ratings (below BBB-), and negative free cash flow funded by continuous new debt. High yield = high expected return AND high default probability — the two travel together.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: role of bonds in a portfolio
    //
    // Why a decide: forces the user to think about WHY bonds
    // exist in a portfolio, not just WHAT they are.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Why Own Bonds',
      topicIcon: Clock,
      context:
        'Over 30 years, stocks have returned ~10% annually; bonds ~5%. If you have a 30-year time horizon and can stomach volatility, you\'d build far more wealth in stocks.\n\nYet every classic portfolio allocation has 20-60% in bonds. Why?\n\nConsider three investors:\n• A 25-year-old with 40 years until retirement\n• A 45-year-old, 20 years from retirement, saving aggressively\n• A 65-year-old retiree living off the portfolio',
      question: 'What\'s the main reason bonds exist in a portfolio?',
      options: [
        'They deliver higher long-term returns than stocks',
        'They\'re guaranteed to never lose money',
        'They dampen portfolio volatility and provide cash flow during drawdowns, so investors aren\'t forced to sell stocks at the bottom. The closer you are to needing the money, the more this matters',
        'They track inflation exactly, preserving purchasing power',
      ],
      correctIndex: 2,
      punchline:
        'Bonds aren\'t for return — they\'re for NOT selling stocks at the bottom. A 65-year-old with 100% stocks during a 40% bear market might be forced to sell at the worst possible time to fund living expenses. Bonds provide the stability and cash flow to ride out the drawdown. A 25-year-old doesn\'t need much in bonds — they have 40 years for stocks to recover. A retiree needs more. The right bond allocation is about when you need to spend the money, not what returns the most.',
      wrongNudges: [
        'Long-term stock returns have consistently exceeded bond returns. If returns were the only goal, bonds wouldn\'t make sense.',
        'Bonds can absolutely lose money — they lost 15-20% in 2022. Low average risk is not the same as no risk.',
        '',
        'Bonds do not track inflation. TIPS (Treasury Inflation-Protected Securities) do, but regular nominal bonds lose real value during high inflation. Many retirees learned this painfully in the 1970s.',
      ],
      takeaway: 'Bonds exist in portfolios to dampen volatility and provide liquidity — so the stock portion can survive downturns without being sold. Allocation should match your time horizon: younger = more stocks, closer to spending = more bonds.',
    },
  ],
  takeaways: [
    'Stocks give you ownership and upside. Bonds make you a lender with fixed payments and priority in bankruptcy. Fundamentally different positions in the same company.',
    'Bond prices move inversely to interest rates. A 10-year bond loses ~9% for every 1% rise in rates. Long bonds are not "safe" — they carry real duration risk.',
    'Credit risk is the other bond risk. High-yield bonds pay more because they default more. The spread over Treasuries tells you how much extra compensation the market demands.',
    'Bonds exist in portfolios for stability, not returns. They let you hold through stock drawdowns without being forced to sell at the bottom. The right allocation depends on when you need the money.',
    'A 30-year-old with 80%+ stocks can outperform a 50/50 portfolio over a career. A 65-year-old cannot afford the same volatility. Age matters more than market forecasts.',
  ],
  completionMessages: {
    perfect: 'Precise. You now understand bonds well enough to judge a portfolio allocation — and to notice when someone\'s bond "safety" claim is missing duration and credit context.',
    great: 'Strong. The key insight: bonds aren\'t for returns, they\'re for not selling stocks at the bottom. Duration + credit = the two risks that matter.',
    good: 'Solid base. Bonds are 50% of global markets — worth understanding even if you never buy an individual bond.',
    low: 'Revisit this. Many investors carrying 30% bonds have no idea what they own or how it behaves in a rate shock.',
  },
};
