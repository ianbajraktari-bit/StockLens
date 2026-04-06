import { allLessons } from '../data/lessons';
import type { Skill } from '../data/lessons';

const COMPLETED_KEY = 'stocklens-completed';
const SKILLS_KEY = 'stocklens-skills';

// --- Completion ---

export function getCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

export function markCompleted(id: string): void {
  const ids = getCompletedIds();
  ids.add(id);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify([...ids]));

  // Update skills when completing a lesson
  const lesson = allLessons.find((l) => l.id === id);
  if (lesson?.skills) {
    addSkills(lesson.skills);
  }
}

// --- Unlock logic ---

const foundationLessons = allLessons.filter((l) => l.tier === 'foundations-1' || l.tier === 'foundations-2');
const companyLessons = allLessons.filter((l) => l.tier === 'company');

export function isLessonUnlocked(lessonId: string): boolean {
  const completed = getCompletedIds();

  // First lesson is always unlocked
  if (allLessons[0]?.id === lessonId) return true;

  const lesson = allLessons.find((l) => l.id === lessonId);
  if (!lesson) return false;

  // Company lessons require all foundations to be completed
  if (lesson.tier === 'company') {
    const allFoundationsComplete = foundationLessons.every((l) => completed.has(l.id));
    if (!allFoundationsComplete) return false;

    // Within company lessons, unlock sequentially
    const companyIndex = companyLessons.findIndex((l) => l.id === lessonId);
    if (companyIndex === 0) return true;
    return completed.has(companyLessons[companyIndex - 1].id);
  }

  // Foundation lessons unlock sequentially
  const foundationIndex = foundationLessons.findIndex((l) => l.id === lessonId);
  if (foundationIndex <= 0) return true;
  return completed.has(foundationLessons[foundationIndex - 1].id);
}

export function getNextLessonId(currentId: string): string | null {
  const currentIndex = allLessons.findIndex((l) => l.id === currentId);
  if (currentIndex === -1 || currentIndex >= allLessons.length - 1) return null;
  const next = allLessons[currentIndex + 1];
  // Only suggest if it will be unlocked (current lesson being completed would unlock it)
  return next.id;
}

export function getFirstUncompletedId(): string | null {
  const completed = getCompletedIds();
  return allLessons.find((l) => !completed.has(l.id))?.id ?? null;
}

// --- Skills progress ---

export type SkillsMap = Record<Skill, number>;

const ALL_SKILLS: Skill[] = ['margins', 'recurring_revenue', 'business_drivers', 'moats', 'valuation', 'risk'];

const SKILL_LABELS: Record<Skill, string> = {
  margins: 'Margins',
  recurring_revenue: 'Recurring Revenue',
  business_drivers: 'Business Drivers',
  moats: 'Competitive Moats',
  valuation: 'Valuation',
  risk: 'Risk Assessment',
};

export function getSkillLabel(skill: Skill): string {
  return SKILL_LABELS[skill];
}

export function getAllSkills(): Skill[] {
  return ALL_SKILLS;
}

function getSkillsMap(): SkillsMap {
  try {
    const raw = localStorage.getItem(SKILLS_KEY);
    if (!raw) return {} as SkillsMap;
    return JSON.parse(raw);
  } catch {
    return {} as SkillsMap;
  }
}

function addSkills(skills: Skill[]): void {
  const current = getSkillsMap();
  for (const skill of skills) {
    current[skill] = (current[skill] ?? 0) + 1;
  }
  localStorage.setItem(SKILLS_KEY, JSON.stringify(current));
}

export function getSkillsProgress(): { skill: Skill; label: string; exposure: number; maxExposure: number }[] {
  const current = getSkillsMap();

  // Calculate max possible exposure per skill (how many lessons teach it)
  const maxExposures: Record<string, number> = {};
  for (const lesson of allLessons) {
    for (const skill of lesson.skills ?? []) {
      maxExposures[skill] = (maxExposures[skill] ?? 0) + 1;
    }
  }

  return ALL_SKILLS.map((skill) => ({
    skill,
    label: SKILL_LABELS[skill],
    exposure: current[skill] ?? 0,
    maxExposure: maxExposures[skill] ?? 1,
  }));
}
