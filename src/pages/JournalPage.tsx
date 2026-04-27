import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  FileText,
  Lightbulb,
  NotebookPen,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react';
import {
  createNote,
  deleteEntry,
  entryTypeLabel,
  getAllEntries,
  getJournalStats,
  type JournalEntry,
  type JournalEntryType,
} from '../lib/journal';

type Filter = 'all' | JournalEntryType;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'analyst_memo', label: 'Memos' },
  { id: 'lesson_reflection', label: 'Reflections' },
  { id: 'note', label: 'Notes' },
];

export default function JournalPage() {
  const navigate = useNavigate();

  // Re-render trigger after writes (avoids reading the whole list reactively).
  const [version, setVersion] = useState(0);
  const bump = () => setVersion((v) => v + 1);

  const entries = useMemo(() => getAllEntries(), [version]);
  const stats = useMemo(() => getJournalStats(), [version]);

  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [composerOpen, setComposerOpen] = useState(false);

  const visible = useMemo(() => {
    let list = entries;
    if (filter !== 'all') list = list.filter((e) => e.type === filter);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.content.toLowerCase().includes(q),
      );
    }
    return list;
  }, [entries, filter, query]);

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px] bg-accent/[0.05]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Back nav */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </button>

        {/* Hero */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent/25 via-accent/10 to-signal/[0.05] border border-accent/30 shadow-[0_0_28px_-4px_rgba(99,102,241,0.25)]">
              <NotebookPen className="w-5 h-5 text-accent-light" />
            </div>
            <div>
              <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                Research Journal
              </h1>
              <p className="text-xs text-text-secondary mt-0.5">
                Every memo, reflection, and note you&apos;ve written — in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <StatCell
            icon={FileText}
            label="Entries"
            value={stats.total.toString()}
          />
          <StatCell
            icon={Building2}
            label="Companies"
            value={stats.companiesCovered.toString()}
          />
          <StatCell
            icon={BookOpen}
            label="Reflections"
            value={stats.byType.lesson_reflection.toString()}
          />
          <StatCell
            icon={Sparkles}
            label="Last entry"
            value={stats.lastEntryAt ? formatRelative(stats.lastEntryAt) : '—'}
          />
        </div>

        {/* Quick note composer */}
        <div className="rounded-2xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm overflow-hidden">
          {!composerOpen ? (
            <button
              onClick={() => setComposerOpen(true)}
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-dark-800/70 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-dark-700/80 border border-white/[0.06] flex items-center justify-center shrink-0">
                <Plus className="w-3.5 h-3.5 text-accent-light" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">Quick note</p>
                <p className="text-[11px] text-text-muted mt-0.5">
                  Capture a thought, observation, or open question.
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted" />
            </button>
          ) : (
            <Composer
              onSubmit={(text) => {
                createNote({ text });
                setComposerOpen(false);
                bump();
              }}
              onCancel={() => setComposerOpen(false)}
            />
          )}
        </div>

        {/* Filters + search */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              const count =
                f.id === 'all'
                  ? stats.total
                  : stats.byType[f.id as JournalEntryType] ?? 0;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-accent/15 border border-accent/40 text-accent-light shadow-[0_0_14px_-4px_rgba(99,102,241,0.4)]'
                      : 'bg-dark-800/50 border border-white/[0.06] text-text-secondary hover:border-white/[0.12]'
                  }`}
                >
                  {f.label}
                  <span
                    className={`text-[10px] data-num ${active ? 'text-accent-light' : 'text-text-muted'}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-text-muted absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search memos, reflections, notes…"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-800/40 border border-white/[0.06] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:bg-dark-800/70 transition-colors"
              style={{ fontSize: '16px' }}
            />
          </div>
        </div>

        {/* Feed */}
        {visible.length === 0 ? (
          <EmptyState filtered={filter !== 'all' || query.trim().length > 0} />
        ) : (
          <div className="space-y-2">
            {visible.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                expanded={expandedId === entry.id}
                onToggle={() =>
                  setExpandedId((cur) => (cur === entry.id ? null : entry.id))
                }
                onDelete={() => {
                  deleteEntry(entry.id);
                  bump();
                  setExpandedId(null);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────

function StatCell({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof FileText;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-dark-800/40 p-3 backdrop-blur-sm">
      <div className="flex items-center gap-1.5">
        <Icon className="w-3 h-3 text-text-muted" />
        <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted font-bold">
          {label}
        </p>
      </div>
      <p className="text-base font-bold text-text-primary mt-1 data-num">{value}</p>
    </div>
  );
}

function Composer({
  onSubmit,
  onCancel,
}: {
  onSubmit: (text: string) => void;
  onCancel: () => void;
}) {
  const [text, setText] = useState('');
  const trimmed = text.trim();
  return (
    <div className="p-4 space-y-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        rows={4}
        placeholder="What's on your mind? (a thought, an observation, an open question)"
        className="w-full rounded-xl bg-dark-900/60 border border-white/[0.06] p-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
        style={{ fontSize: '16px' }}
      />
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] text-text-muted">
          Notes are append-only. Your past selves stay on the record.
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={onCancel}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => trimmed && onSubmit(trimmed)}
            disabled={!trimmed}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              trimmed
                ? 'bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_4px_18px_-6px_rgba(99,102,241,0.6)] hover:shadow-[0_6px_22px_-6px_rgba(99,102,241,0.7)]'
                : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
            }`}
          >
            Save note
          </button>
        </div>
      </div>
    </div>
  );
}

function EntryCard({
  entry,
  expanded,
  onToggle,
  onDelete,
}: {
  entry: JournalEntry;
  expanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const navigate = useNavigate();
  const tone = toneFor(entry.type);
  const Icon = iconFor(entry.type);

  const isAnchored =
    entry.type === 'analyst_memo' || entry.type === 'lesson_reflection';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/[0.06] bg-dark-800/40 backdrop-blur-sm overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-dark-800/70 transition-colors cursor-pointer"
      >
        <div
          className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${tone.iconWrap}`}
        >
          <Icon className={`w-3.5 h-3.5 ${tone.iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span
              className={`text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-md ${tone.chip}`}
            >
              {entryTypeLabel(entry.type)}
            </span>
            <span className="text-[10px] text-text-muted">
              {formatAbsolute(entry.createdAt)}
            </span>
          </div>
          <p className="text-sm font-semibold text-text-primary leading-snug truncate">
            {entry.title}
          </p>
          {!expanded && (
            <p className="text-xs text-text-secondary mt-0.5 line-clamp-2 leading-snug">
              {entry.content}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-text-muted mt-1"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 border-t border-white/[0.04]">
              <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap pt-3">
                {entry.content}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  {entry.companyId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/analyst/${entry.companyId}`);
                      }}
                      className="text-[10px] font-semibold px-2 py-1 rounded-md bg-warm/10 border border-warm/20 text-warm hover:bg-warm/15 transition-colors cursor-pointer"
                    >
                      Open analysis →
                    </button>
                  )}
                  {entry.lessonId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/lesson/${entry.lessonId}`);
                      }}
                      className="text-[10px] font-semibold px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent-light hover:bg-accent/15 transition-colors cursor-pointer"
                    >
                      Open lesson →
                    </button>
                  )}
                </div>
                {!isAnchored && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete();
                    }}
                    className="flex items-center gap-1 text-[10px] font-semibold text-text-muted hover:text-red transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function EmptyState({ filtered }: { filtered: boolean }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/[0.08] bg-dark-800/30 p-8 text-center space-y-2">
      <Lightbulb className="w-6 h-6 text-accent-light mx-auto" />
      <p className="text-sm font-semibold text-text-primary">
        {filtered ? 'No entries match that filter' : 'Your journal is empty'}
      </p>
      <p className="text-xs text-text-muted leading-relaxed max-w-sm mx-auto">
        {filtered
          ? 'Try a different filter or clear the search.'
          : 'Submit an Analyst Mode memo, finish a lesson, or jot down a quick note above. Everything you write lands here.'}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────

function toneFor(type: JournalEntryType): {
  iconWrap: string;
  iconColor: string;
  chip: string;
} {
  switch (type) {
    case 'analyst_memo':
      return {
        iconWrap: 'bg-warm/10 border-warm/25',
        iconColor: 'text-warm',
        chip: 'bg-warm/12 text-warm border border-warm/20',
      };
    case 'lesson_reflection':
      return {
        iconWrap: 'bg-accent/10 border-accent/25',
        iconColor: 'text-accent-light',
        chip: 'bg-accent/12 text-accent-light border border-accent/20',
      };
    case 'note':
      return {
        iconWrap: 'bg-dark-700/80 border-white/[0.06]',
        iconColor: 'text-text-secondary',
        chip: 'bg-dark-700/80 text-text-secondary border border-white/[0.06]',
      };
    case 'trade_rationale':
    case 'thesis':
      return {
        iconWrap: 'bg-signal/10 border-signal/25',
        iconColor: 'text-accent-light',
        chip: 'bg-signal/12 text-accent-light border border-signal/20',
      };
  }
}

function iconFor(type: JournalEntryType) {
  switch (type) {
    case 'analyst_memo':
      return Building2;
    case 'lesson_reflection':
      return BookOpen;
    case 'note':
      return NotebookPen;
    case 'trade_rationale':
    case 'thesis':
      return FileText;
  }
}

function formatAbsolute(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

function formatRelative(iso: string): string {
  try {
    const d = new Date(iso);
    const diffMs = Date.now() - d.getTime();
    const diffH = diffMs / 36e5;
    if (diffH < 1) return 'just now';
    if (diffH < 24) return `${Math.floor(diffH)}h ago`;
    const diffD = diffH / 24;
    if (diffD < 30) return `${Math.floor(diffD)}d ago`;
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  } catch {
    return '';
  }
}
