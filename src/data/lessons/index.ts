export type { Lesson, Skill, LessonTier } from './types';
export { foundationsMarketLesson } from './foundations-market';
export { foundationsBasicsLesson } from './foundations-basics';
export { foundationsMarginsLesson } from './foundations-margins';
export { foundationsIncomeLesson } from './foundations-income';
export { foundationsRecurringLesson } from './foundations-recurring';
export { foundationsDriversLesson } from './foundations-drivers';
export { foundationsBiasesLesson } from './foundations-biases';
export { foundationsMoatsLesson } from './foundations-moats';
export { foundationsValuationLesson } from './foundations-valuation';
export { foundationsExpectationsLesson } from './foundations-expectations';
export { foundationsCashflowLesson } from './foundations-cashflow';
export { foundationsRiskLesson } from './foundations-risk';
export { foundationsDebtLesson } from './foundations-debt';
export { foundationsGrowthValueLesson } from './foundations-growth-value';
export { foundationsReturnsLesson } from './foundations-returns';
export { foundationsPortfolioLesson } from './foundations-portfolio';
export { foundationsEarningsLesson } from './foundations-earnings';
export { foundationsSellingLesson } from './foundations-selling';
export { foundationsMacroLesson } from './foundations-macro';
export { foundationsHistoryLesson } from './foundations-history';
export { foundationsSectorsLesson } from './foundations-sectors';
export { foundationsStatementsLesson } from './foundations-statements';
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';
export { amazonLesson } from './amazon';
export { microsoftLesson } from './microsoft';
export { teslaLesson } from './tesla';
export { googleLesson } from './google';
export { netflixLesson } from './netflix';

import { foundationsMarketLesson } from './foundations-market';
import { foundationsBasicsLesson } from './foundations-basics';
import { foundationsMarginsLesson } from './foundations-margins';
import { foundationsIncomeLesson } from './foundations-income';
import { foundationsRecurringLesson } from './foundations-recurring';
import { foundationsDriversLesson } from './foundations-drivers';
import { foundationsBiasesLesson } from './foundations-biases';
import { foundationsMoatsLesson } from './foundations-moats';
import { foundationsValuationLesson } from './foundations-valuation';
import { foundationsExpectationsLesson } from './foundations-expectations';
import { foundationsCashflowLesson } from './foundations-cashflow';
import { foundationsRiskLesson } from './foundations-risk';
import { foundationsDebtLesson } from './foundations-debt';
import { foundationsGrowthValueLesson } from './foundations-growth-value';
import { foundationsReturnsLesson } from './foundations-returns';
import { foundationsPortfolioLesson } from './foundations-portfolio';
import { foundationsEarningsLesson } from './foundations-earnings';
import { foundationsSellingLesson } from './foundations-selling';
import { foundationsMacroLesson } from './foundations-macro';
import { foundationsHistoryLesson } from './foundations-history';
import { foundationsSectorsLesson } from './foundations-sectors';
import { foundationsStatementsLesson } from './foundations-statements';
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import { amazonLesson } from './amazon';
import { microsoftLesson } from './microsoft';
import { teslaLesson } from './tesla';
import { googleLesson } from './google';
import { netflixLesson } from './netflix';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [
  // Foundations Phase 1: core financial vocabulary
  foundationsMarketLesson,         // stocks, shares, exchanges, why prices move
  foundationsBasicsLesson,         // revenue, costs, profit, EPS
  foundationsMarginsLesson,        // profit margins, cost shocks
  foundationsIncomeLesson,         // gross/operating/net profit layers
  foundationsRecurringLesson,      // recurring vs one-time revenue
  foundationsDriversLesson,        // key business drivers, retention
  foundationsBiasesLesson,         // loss aversion, disposition effect

  // Foundations Phase 2: investing concepts
  foundationsMoatsLesson,          // competitive moats (4 types)
  foundationsValuationLesson,      // P/E ratios, multiples
  foundationsExpectationsLesson,   // priced in, beats/misses, guidance
  foundationsCashflowLesson,       // profit vs cash flow
  foundationsRiskLesson,           // volatility vs risk, diversification
  foundationsDebtLesson,           // balance sheets, leverage, interest coverage
  foundationsGrowthValueLesson,    // growth traps, value traps, both lenses
  foundationsReturnsLesson,        // dividends, buybacks, capital allocation
  foundationsPortfolioLesson,      // position sizing, real diversification, starting point
  foundationsEarningsLesson,       // reading earnings reports, 5 key numbers, management tone
  foundationsSellingLesson,        // when to sell, thesis-broken framework, disposition effect
  foundationsMacroLesson,          // interest rates, inflation, Fed policy, macro forces
  foundationsHistoryLesson,        // bubbles, crashes, recovery patterns, panic selling
  foundationsSectorsLesson,        // industry analysis, cyclical vs defensive, sector drivers
  foundationsStatementsLesson,     // reading real financial statements line by line

  // Company Deep Dives
  appleLesson,
  nvidiaLesson,
  costcoLesson,
  amazonLesson,
  microsoftLesson,
  teslaLesson,
  googleLesson,
  netflixLesson,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
