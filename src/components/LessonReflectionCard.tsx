import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, NotebookPen, Pencil } from 'lucide-react';
import {
  getEntryById,
  upsertLessonReflection,
} from '../lib/journal';

interface Props {
  lessonId: string;
}

const REFLECTION_PROMPT =
  'One judgment call from this lesson you want to remember the next time you analyze a real company:';

const PLACEHOLDER =
  'Be specific. Not "margins matter" — something like "I will check what % of costs are fixed before I trust a high-margin business in a downturn."';

const MIN_CHARS = 40;

/**
 * Optional post-lesson reflection prompt. Structured prompt (not a blank
 * textarea), small minimum to filter out one-word fluff. Saves into the
 * journal as a `lesson_reflection` entry, idempotent per lesson.
 */
export default function LessonReflectionCard({ lessonId }: Props) {
  // Look up an existing reflection (if user has done this lesson before).
  const existingId = `reflection:${lessonId}`;
  const initial = useMemo(() => getEntryById(existingId), [existingId]);

  const [text, setText] = useState(initial?.content ?? '');
  const [saved, setSaved] = useState(initial != null);
  const [editing, setEditing] = useState(initial == null);

  const trimmed = text.trim();
  const meetsMin = trimmed.length >= MIN_CHARS;

  function handleSave() {
    if (!meetsMin) return;
    upsertLessonReflection({ lessonId, text: trimmed });
    setSaved(true);
    setEditing(false);
  }

  // Saved + not editing → compact "saved" state
  if (saved && !editing) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-xl border border-green/25 bg-gradient-to-br from-green/[0.08] via-green/[0.02] to-transparent p-4 space-y-2.5"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-green/15 border border-green/30 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-green" strokeWidth={3} />
          </div>
          <p className="text-xs font-bold text-text-primary">
            Saved to your journal
          </p>
          <button
            onClick={() => setEditing(true)}
            className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            <Pencil className="w-3 h-3" />
            Edit
          </button>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed pl-9 italic">
          &ldquo;{trimmed}&rdquo;
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-xl border border-accent/25 bg-gradient-to-br from-accent/[0.08] via-accent/[0.02] to-transparent p-4 space-y-3"
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
          <NotebookPen className="w-3.5 h-3.5 text-accent-light" />
        </div>
        <div>
          <p className="text-xs font-bold text-text-primary">Make this stick</p>
          <p className="text-[10px] text-text-muted mt-0.5">
            Optional — but writing it doubles the retention.
          </p>
        </div>
      </div>

      <p className="text-xs text-text-secondary leading-relaxed">
        {REFLECTION_PROMPT}
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder={PLACEHOLDER}
        className="w-full rounded-lg bg-dark-900/60 border border-white/[0.06] p-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
        style={{ fontSize: '16px' }}
      />

      <div className="flex items-center justify-between gap-2">
        <p
          className={`text-[10px] font-semibold ${
            meetsMin ? 'text-text-muted' : 'text-text-faint'
          }`}
        >
          {meetsMin
            ? 'Looks good — save it.'
            : `${trimmed.length}/${MIN_CHARS} characters`}
        </p>
        <div className="flex items-center gap-2">
          {initial != null && (
            <button
              onClick={() => {
                setText(initial.content);
                setEditing(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
            >
              Cancel
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={!meetsMin}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              meetsMin
                ? 'bg-gradient-to-r from-accent to-accent-light text-white cursor-pointer shadow-[0_4px_18px_-6px_rgba(99,102,241,0.6)]'
                : 'bg-dark-700/60 border border-white/[0.06] text-text-muted cursor-not-allowed opacity-50'
            }`}
          >
            Save reflection
          </button>
        </div>
      </div>
    </motion.div>
  );
}
