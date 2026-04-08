export type { QuizQuestion, ThinkingStep, Lesson, Skill, LessonTier } from './types';
export { unit1WhatInvestingIsLesson } from './unit1-what-investing-is';
export { unit1CompoundingLesson } from './unit1-compounding';
export { unit1WhyStocksExistLesson } from './unit1-why-stocks-exist';
export { foundationsMarginsLesson } from './foundations-margins';
export { foundationsRecurringLesson } from './foundations-recurring';
export { foundationsDriversLesson } from './foundations-drivers';
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';

import { unit1WhatInvestingIsLesson } from './unit1-what-investing-is';
import { unit1CompoundingLesson } from './unit1-compounding';
import { unit1WhyStocksExistLesson } from './unit1-why-stocks-exist';
import { foundationsMarginsLesson } from './foundations-margins';
import { foundationsRecurringLesson } from './foundations-recurring';
import { foundationsDriversLesson } from './foundations-drivers';
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [unit1WhatInvestingIsLesson, unit1CompoundingLesson, unit1WhyStocksExistLesson, foundationsMarginsLesson, foundationsRecurringLesson, foundationsDriversLesson, appleLesson, nvidiaLesson, costcoLesson];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
