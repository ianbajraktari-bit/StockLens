export type { Lesson, Skill, LessonTier } from './types';
export { foundationsBasicsLesson } from './foundations-basics';
export { foundationsMarginsLesson } from './foundations-margins';
export { foundationsRecurringLesson } from './foundations-recurring';
export { foundationsDriversLesson } from './foundations-drivers';
export { foundationsBiasesLesson } from './foundations-biases';
export { foundationsMoatsLesson } from './foundations-moats';
export { foundationsValuationLesson } from './foundations-valuation';
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';

import { foundationsBasicsLesson } from './foundations-basics';
import { foundationsMarginsLesson } from './foundations-margins';
import { foundationsRecurringLesson } from './foundations-recurring';
import { foundationsDriversLesson } from './foundations-drivers';
import { foundationsBiasesLesson } from './foundations-biases';
import { foundationsMoatsLesson } from './foundations-moats';
import { foundationsValuationLesson } from './foundations-valuation';
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [foundationsBasicsLesson, foundationsMarginsLesson, foundationsRecurringLesson, foundationsDriversLesson, foundationsBiasesLesson, foundationsMoatsLesson, foundationsValuationLesson, appleLesson, nvidiaLesson, costcoLesson];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
