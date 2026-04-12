export type { Lesson, Skill, LessonTier } from './types';
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
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';
export { amazonLesson } from './amazon';
export { microsoftLesson } from './microsoft';
export { teslaLesson } from './tesla';

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
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import { amazonLesson } from './amazon';
import { microsoftLesson } from './microsoft';
import { teslaLesson } from './tesla';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [
  // Foundations Phase 1: core financial vocabulary
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

  // Company Deep Dives
  appleLesson,
  nvidiaLesson,
  costcoLesson,
  amazonLesson,
  microsoftLesson,
  teslaLesson,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
