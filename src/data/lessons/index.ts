export type { Lesson, Skill, LessonTier } from './types';
export { foundationsBasicsLesson } from './foundations-basics';
export { foundationsMarginsLesson } from './foundations-margins';
export { foundationsIncomeLesson } from './foundations-income';
export { foundationsRecurringLesson } from './foundations-recurring';
export { foundationsDriversLesson } from './foundations-drivers';
export { foundationsBiasesLesson } from './foundations-biases';
export { foundationsMoatsLesson } from './foundations-moats';
export { foundationsValuationLesson } from './foundations-valuation';
export { foundationsCashflowLesson } from './foundations-cashflow';
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';

import { foundationsBasicsLesson } from './foundations-basics';
import { foundationsMarginsLesson } from './foundations-margins';
import { foundationsIncomeLesson } from './foundations-income';
import { foundationsRecurringLesson } from './foundations-recurring';
import { foundationsDriversLesson } from './foundations-drivers';
import { foundationsBiasesLesson } from './foundations-biases';
import { foundationsMoatsLesson } from './foundations-moats';
import { foundationsValuationLesson } from './foundations-valuation';
import { foundationsCashflowLesson } from './foundations-cashflow';
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [
  // Foundations Phase 1: core financial vocabulary
  foundationsBasicsLesson,       // revenue, costs, profit, EPS
  foundationsMarginsLesson,      // profit margins, cost shocks
  foundationsIncomeLesson,       // gross/operating/net profit layers
  foundationsRecurringLesson,    // recurring vs one-time revenue
  foundationsDriversLesson,      // key business drivers, retention
  foundationsBiasesLesson,       // loss aversion, disposition effect

  // Foundations Phase 2: investing concepts
  foundationsMoatsLesson,        // competitive moats (4 types)
  foundationsValuationLesson,    // P/E ratios, multiples
  foundationsCashflowLesson,     // profit vs cash flow

  // Company Deep Dives
  appleLesson,
  nvidiaLesson,
  costcoLesson,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
