import { allCompanies, getCompanyById } from '../data/companies';
import { WORKFLOW_STEPS, type AnalystStepKind } from '../data/companies/types';
import { allLessons } from '../data/lessons';

/**
 * The user's research journal — the connective spine of the app.
 *
 * Every meaningful piece of writing the user produces ends up here:
 * Analyst Mode memos, post-lesson reflections, free-form notes, and (future)
 * simulator trade rationales and thesis statements. The journal is the
 * single source of truth for "the work the user has done."
 *
 * Storage is localStorage-only (consistent with the rest of the app).
 * Entries are immutable except for the latest version of each "anchored"
 * entry (analyst memos and lesson reflections, which are 1-per-context).
 * Free-form notes are append-only.
 */

const ENTRIES_KEY = 'stocklens-journal-entries';
const IMPORTED_KEY = 'stocklens-journal-imported';
const RESPONSES_KEY = 'stocklens-analyst-responses';

// =====================================================================
// Types
// =====================================================================

export type JournalEntryType =
  | 'analyst_memo' // a single Analyst Mode step response, anchored to (companyId, stepKind)
  | 'lesson_reflection' // post-lesson takeaway, anchored to lessonId
  | 'note' // free-form, append-only
  | 'trade_rationale' // simulator trade memo (bull/sell case in `content`, opposing case in `bearCaseContent`)
  | 'thesis'; // future: a buy/sell/hold thesis the user is tracking

/**
 * The user's after-the-fact self-assessment of a trade rationale. Set from
 * the Floor track-record dashboard. Deliberately self-judged, not auto-graded
 * from price moves — a position down 20% might still be 'held_up' if the
 * original thesis hasn't actually been falsified.
 */
export type UserVerdict = 'held_up' | 'mixed' | 'off_base';

export interface JournalEntry {
  id: string;
  type: JournalEntryType;
  /** ISO timestamp of original creation. */
  createdAt: string;
  /** ISO timestamp of latest revision. Equal to createdAt if never edited. */
  updatedAt: string;
  /** Short headline. Auto-derived for anchored types. */
  title: string;
  /** The actual writing — markdown or plain text. */
  content: string;
  // Optional links into the app
  lessonId?: string;
  companyId?: string;
  /** For analyst_memo entries: which of the 7 workflow steps. */
  analystStepKind?: AnalystStepKind;
  /** Free-form user tags. */
  tags?: string[];
  /**
   * For trade_rationale entries on directional (buy/sell) trades:
   * the user's steel-manned counter-argument, captured at trade time.
   * Hold trades skip this. Storing it as a separate field (rather than
   * inline markdown in `content`) keeps the dashboard renderer simple.
   */
  bearCaseContent?: string;
  /** User's self-assessment of how the rationale played out. Set later via the track-record surface. */
  userVerdict?: UserVerdict;
}

// =====================================================================
// Storage primitives
// =====================================================================

function readAll(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(ENTRIES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as JournalEntry[];
  } catch {
    return [];
  }
}

function writeAll(entries: JournalEntry[]): void {
  localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
}

function genId(): string {
  // Lightweight unique id — good enough for localStorage, no collisions in practice.
  return `j_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

// =====================================================================
// Anchored-entry helpers (deterministic ids for memos + reflections)
// =====================================================================

function analystMemoId(companyId: string, stepKind: AnalystStepKind): string {
  return `analyst:${companyId}:${stepKind}`;
}

function lessonReflectionId(lessonId: string): string {
  return `reflection:${lessonId}`;
}

// =====================================================================
// Auto-import: backfill journal from existing analyst responses
// =====================================================================

interface LegacyAnalystResponse {
  text: string;
  submittedAt: string;
}

type LegacyResponsesMap = Record<string, Record<string, LegacyAnalystResponse>>;

function readLegacyResponses(): LegacyResponsesMap {
  try {
    const raw = localStorage.getItem(RESPONSES_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as LegacyResponsesMap;
  } catch {
    return {};
  }
}

/**
 * Idempotently imports every existing Analyst Mode response into the journal
 * as `analyst_memo` entries. Runs once per browser; flagged in localStorage.
 *
 * Returns the number of entries imported (0 if already imported or no data).
 */
export function importLegacyAnalystResponses(): number {
  if (localStorage.getItem(IMPORTED_KEY) === 'true') return 0;

  const legacy = readLegacyResponses();
  const existing = readAll();
  const existingIds = new Set(existing.map((e) => e.id));
  const imported: JournalEntry[] = [];

  for (const [companyId, steps] of Object.entries(legacy)) {
    const company = getCompanyById(companyId);
    const companyName = company?.name ?? companyId;
    for (const [stepKindRaw, response] of Object.entries(steps)) {
      const stepKind = stepKindRaw as AnalystStepKind;
      const id = analystMemoId(companyId, stepKind);
      if (existingIds.has(id)) continue;
      const stepLabel = stepLabelFor(stepKind);
      imported.push({
        id,
        type: 'analyst_memo',
        createdAt: response.submittedAt,
        updatedAt: response.submittedAt,
        title: `${companyName} — ${stepLabel}`,
        content: response.text,
        companyId,
        analystStepKind: stepKind,
      });
    }
  }

  if (imported.length > 0) {
    writeAll([...existing, ...imported]);
  }
  localStorage.setItem(IMPORTED_KEY, 'true');
  return imported.length;
}

function stepLabelFor(kind: AnalystStepKind): string {
  const tpl = WORKFLOW_STEPS.find((s) => s.kind === kind);
  return tpl?.shortLabel ?? kind;
}

// =====================================================================
// Public read API — always runs the lazy import first
// =====================================================================

function ensureImported(): void {
  if (localStorage.getItem(IMPORTED_KEY) !== 'true') {
    importLegacyAnalystResponses();
  }
}

/** All entries, newest first by `createdAt`. */
export function getAllEntries(): JournalEntry[] {
  ensureImported();
  return [...readAll()].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0,
  );
}

export function getEntryById(id: string): JournalEntry | null {
  ensureImported();
  return readAll().find((e) => e.id === id) ?? null;
}

export function getEntriesByType(type: JournalEntryType): JournalEntry[] {
  return getAllEntries().filter((e) => e.type === type);
}

export function getEntriesForCompany(companyId: string): JournalEntry[] {
  return getAllEntries().filter((e) => e.companyId === companyId);
}

export function getEntriesForLesson(lessonId: string): JournalEntry[] {
  return getAllEntries().filter((e) => e.lessonId === lessonId);
}

export function searchEntries(query: string): JournalEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllEntries();
  return getAllEntries().filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.content.toLowerCase().includes(q) ||
      (e.tags ?? []).some((t) => t.toLowerCase().includes(q)),
  );
}

/** Lightweight aggregate stats for the Desk + Journal landing. */
export function getJournalStats(): {
  total: number;
  byType: Record<JournalEntryType, number>;
  lastEntryAt: string | null;
  companiesCovered: number;
  lessonsReflected: number;
} {
  const all = getAllEntries();
  const byType: Record<JournalEntryType, number> = {
    analyst_memo: 0,
    lesson_reflection: 0,
    note: 0,
    trade_rationale: 0,
    thesis: 0,
  };
  const companies = new Set<string>();
  const lessons = new Set<string>();
  for (const e of all) {
    byType[e.type]++;
    if (e.companyId) companies.add(e.companyId);
    if (e.lessonId) lessons.add(e.lessonId);
  }
  return {
    total: all.length,
    byType,
    lastEntryAt: all[0]?.createdAt ?? null,
    companiesCovered: companies.size,
    lessonsReflected: lessons.size,
  };
}

// =====================================================================
// Public write API
// =====================================================================

/**
 * Create-or-update an analyst memo entry. Called from the analyst-mode save
 * flow (one entry per company × step). Stable id; latest text wins; first
 * `createdAt` is preserved across edits.
 */
export function upsertAnalystMemo(input: {
  companyId: string;
  stepKind: AnalystStepKind;
  text: string;
  submittedAt?: string;
}): JournalEntry {
  ensureImported();
  const all = readAll();
  const id = analystMemoId(input.companyId, input.stepKind);
  const now = input.submittedAt ?? new Date().toISOString();
  const company = getCompanyById(input.companyId);
  const companyName = company?.name ?? input.companyId;
  const title = `${companyName} — ${stepLabelFor(input.stepKind)}`;

  const existingIdx = all.findIndex((e) => e.id === id);
  let entry: JournalEntry;
  if (existingIdx >= 0) {
    const existing = all[existingIdx];
    entry = {
      ...existing,
      title,
      content: input.text,
      updatedAt: now,
    };
    all[existingIdx] = entry;
  } else {
    entry = {
      id,
      type: 'analyst_memo',
      createdAt: now,
      updatedAt: now,
      title,
      content: input.text,
      companyId: input.companyId,
      analystStepKind: input.stepKind,
    };
    all.push(entry);
  }
  writeAll(all);
  return entry;
}

/**
 * Create-or-update a lesson reflection entry (one per lesson). Called when
 * the user submits the optional post-lesson reflection prompt.
 */
export function upsertLessonReflection(input: {
  lessonId: string;
  text: string;
}): JournalEntry {
  ensureImported();
  const all = readAll();
  const id = lessonReflectionId(input.lessonId);
  const now = new Date().toISOString();
  const lesson = allLessons.find((l) => l.id === input.lessonId);
  const lessonTitle = lesson?.title ?? input.lessonId;
  const title = `Reflection — ${lessonTitle}`;

  const existingIdx = all.findIndex((e) => e.id === id);
  let entry: JournalEntry;
  if (existingIdx >= 0) {
    const existing = all[existingIdx];
    entry = { ...existing, title, content: input.text, updatedAt: now };
    all[existingIdx] = entry;
  } else {
    entry = {
      id,
      type: 'lesson_reflection',
      createdAt: now,
      updatedAt: now,
      title,
      content: input.text,
      lessonId: input.lessonId,
    };
    all.push(entry);
  }
  writeAll(all);
  return entry;
}

/**
 * Append a trade rationale entry. Always creates a new entry — every trade
 * is its own immutable memo, so the user can re-read why they did what
 * they did even after the position has changed N times. The Floor's
 * portfolio holds the trade record; the journal holds the writing.
 */
export function createTradeRationale(input: {
  companyId: string;
  /** Ticker for the title — pre-resolved by the caller. */
  ticker: string;
  /** Buy / sell / hold — drives the title prefix. */
  action: 'buy' | 'sell' | 'hold';
  /** Share count for buy/sell (omit for hold). */
  shares?: number;
  /** Per-share price at the time of the trade. */
  price: number;
  /** Sim week index, 0-based — appears in the title for chronology. */
  week: number;
  /** The user's rationale text — their case for the trade. */
  text: string;
  /**
   * The user's steel-manned counter-argument. Required for buy/sell at the
   * UI layer; persisted alongside the bull/sell case so both sides are
   * re-readable later in the journal and the track-record dashboard.
   */
  bearCase?: string;
  /** Optional id of the originating trade record in the portfolio. */
  tradeId?: string;
}): JournalEntry {
  ensureImported();
  const all = readAll();
  const now = new Date().toISOString();
  const verb =
    input.action === 'buy' ? 'Buy' : input.action === 'sell' ? 'Sell' : 'Hold';
  const sharesPart =
    input.action !== 'hold' && input.shares
      ? ` ${input.shares} sh`
      : '';
  const title = `${verb}${sharesPart} ${input.ticker} @ $${input.price.toFixed(2)} (W${input.week})`;
  const tags = ['floor', input.action];
  if (input.tradeId) tags.push(input.tradeId);
  const entry: JournalEntry = {
    id: genId(),
    type: 'trade_rationale',
    createdAt: now,
    updatedAt: now,
    title,
    content: input.text,
    companyId: input.companyId,
    tags,
    ...(input.bearCase ? { bearCaseContent: input.bearCase } : {}),
  };
  all.push(entry);
  writeAll(all);
  return entry;
}

/**
 * Set (or clear) the user's self-assessment verdict on a journal entry —
 * primarily used on `trade_rationale` entries from the Floor track-record
 * surface. Pass `null` to clear. Returns the updated entry, or `null` if
 * the id was not found.
 */
export function setUserVerdict(
  id: string,
  verdict: UserVerdict | null,
): JournalEntry | null {
  ensureImported();
  const all = readAll();
  const idx = all.findIndex((e) => e.id === id);
  if (idx < 0) return null;
  const next: JournalEntry = { ...all[idx], updatedAt: new Date().toISOString() };
  if (verdict === null) {
    delete next.userVerdict;
  } else {
    next.userVerdict = verdict;
  }
  all[idx] = next;
  writeAll(all);
  return next;
}

/** Human-readable label for a user verdict — used in chips. */
export function userVerdictLabel(v: UserVerdict): string {
  switch (v) {
    case 'held_up':
      return 'Held up';
    case 'mixed':
      return 'Mixed';
    case 'off_base':
      return 'Off-base';
  }
}

/**
 * Append a free-form note. Always creates a new entry with a fresh id —
 * notes are append-only (the user keeps a chronological record).
 */
export function createNote(input: {
  text: string;
  title?: string;
  tags?: string[];
  companyId?: string;
  lessonId?: string;
}): JournalEntry {
  ensureImported();
  const all = readAll();
  const now = new Date().toISOString();
  const fallbackTitle = deriveTitleFromContent(input.text);
  const entry: JournalEntry = {
    id: genId(),
    type: 'note',
    createdAt: now,
    updatedAt: now,
    title: input.title?.trim() || fallbackTitle,
    content: input.text,
    tags: input.tags,
    companyId: input.companyId,
    lessonId: input.lessonId,
  };
  all.push(entry);
  writeAll(all);
  return entry;
}

/** Update an existing entry's content/title/tags. */
export function updateEntry(
  id: string,
  patch: Partial<Pick<JournalEntry, 'title' | 'content' | 'tags'>>,
): JournalEntry | null {
  ensureImported();
  const all = readAll();
  const idx = all.findIndex((e) => e.id === id);
  if (idx < 0) return null;
  const updated: JournalEntry = {
    ...all[idx],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  all[idx] = updated;
  writeAll(all);
  return updated;
}

export function deleteEntry(id: string): boolean {
  ensureImported();
  const all = readAll();
  const next = all.filter((e) => e.id !== id);
  if (next.length === all.length) return false;
  writeAll(next);
  return true;
}

// =====================================================================
// Helpers
// =====================================================================

function deriveTitleFromContent(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return 'Untitled note';
  const firstLine = trimmed.split('\n')[0];
  if (firstLine.length <= 80) return firstLine;
  return firstLine.slice(0, 77) + '…';
}

/** Human-readable label for an entry type — used in chips and filters. */
export function entryTypeLabel(type: JournalEntryType): string {
  switch (type) {
    case 'analyst_memo':
      return 'Memo';
    case 'lesson_reflection':
      return 'Reflection';
    case 'note':
      return 'Note';
    case 'trade_rationale':
      return 'Trade';
    case 'thesis':
      return 'Thesis';
  }
}

/** Sanity check — returns the count of companies in the catalog (used for stats UI). */
export function totalCompaniesInCatalog(): number {
  return allCompanies.length;
}
