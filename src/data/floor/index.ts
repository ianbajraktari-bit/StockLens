export type { FloorCompany, WeekEvent, EventTag } from './types';

import type { FloorCompany } from './types';
import { adobeFloor } from './adobe';
import { disneyFloor } from './disney';
import { chipotleFloor } from './chipotle';

/**
 * The Floor watchlist. Three companies, hand-designed weekly events.
 * Ordered as the picker should display them.
 */
export const floorWatchlist: FloorCompany[] = [
  adobeFloor,
  disneyFloor,
  chipotleFloor,
];

/** Number of designed weeks (assumes all companies have the same length). */
export const FLOOR_TOTAL_WEEKS: number = adobeFloor.events.length;

export function getFloorCompany(companyId: string): FloorCompany | undefined {
  return floorWatchlist.find((c) => c.companyId === companyId);
}

/** Get the WeekEvent for a (company, week) pair, clamped to last designed week. */
export function getWeekEvent(companyId: string, week: number) {
  const company = getFloorCompany(companyId);
  if (!company) return undefined;
  const lastIdx = company.events.length - 1;
  const clamped = Math.max(0, Math.min(week, lastIdx));
  return company.events[clamped];
}
