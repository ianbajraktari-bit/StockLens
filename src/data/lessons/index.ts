export type { QuizQuestion, ThinkingStep, Lesson } from './types';
export { foundationsMarginsLesson } from './foundations-margins';
export { appleLesson } from './apple';
export { nvidiaLesson } from './nvidia';
export { costcoLesson } from './costco';

import { foundationsMarginsLesson } from './foundations-margins';
import { appleLesson } from './apple';
import { nvidiaLesson } from './nvidia';
import { costcoLesson } from './costco';
import type { Lesson } from './types';

export const allLessons: Lesson[] = [foundationsMarginsLesson, appleLesson, nvidiaLesson, costcoLesson];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
