import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { allLessons, type Lesson, type LessonTier } from '../data/lessons';
import { getCompletedIds } from '../lib/progression';

const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * The lesson shelf inside the Library — a browseable list of every lesson,
 * grouped by tier. Lessons are reference material; this page is how a user
 * pulls a specific concept off the shelf rather than walking the curriculum
 * linearly via the Desk's Continue button.
 */
export default function LessonsLibraryPage() {
  const navigate = useNavigate();
  const completedIds = useMemo(() => getCompletedIds(), []);

  const groups: { tier: LessonTier; label: string; sublabel: string; lessons: Lesson[] }[] = [
    {
      tier: 'foundations-1',
      label: 'Foundations · Phase 1',
      sublabel: 'Core financial vocabulary',
      lessons: allLessons.filter((l) => l.tier === 'foundations-1'),
    },
    {
      tier: 'foundations-2',
      label: 'Foundations · Phase 2',
      sublabel: 'Investing concepts and practical literacy',
      lessons: allLessons.filter((l) => l.tier === 'foundations-2'),
    },
    {
      tier: 'company',
      label: 'Company Deep Dives',
      sublabel: 'Apply the concepts to real public companies',
      lessons: allLessons.filter((l) => l.tier === 'company'),
    },
  ];

  const totalCompleted = [...completedIds].filter((id) =>
    allLessons.some((l) => l.id === id),
  ).length;

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      <div className="scene-mesh" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full blur-[110px] bg-accent/[0.06]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Back nav */}
        <button
          onClick={() => navigate('/library')}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Library
        </button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent/25 via-accent/10 to-signal/[0.05] border border-accent/30 shadow-[0_0_28px_-4px_rgba(99,102,241,0.25)]">
              <BookOpen className="w-5 h-5 text-accent-light" />
            </div>
            <div>
              <h1 className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight">
                Lessons
              </h1>
              <p className="text-xs text-text-secondary mt-0.5">
                {totalCompleted} of {allLessons.length} completed · pull any lesson off the shelf
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groups */}
        <div className="space-y-7">
          {groups.map((group) => (
            <section key={group.tier} className="space-y-3">
              <div className="flex items-center gap-2">
                <GroupIcon tier={group.tier} />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
                    {group.label}
                  </p>
                  <p className="text-[11px] text-text-faint">{group.sublabel}</p>
                </div>
              </div>

              <div className="space-y-2">
                {group.lessons.map((lesson) => (
                  <LessonRow
                    key={lesson.id}
                    lesson={lesson}
                    completed={completedIds.has(lesson.id)}
                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function GroupIcon({ tier }: { tier: LessonTier }) {
  const Icon = tier === 'company' ? Building2 : tier === 'foundations-2' ? Layers : GraduationCap;
  return (
    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-dark-700/60 border border-white/[0.06]">
      <Icon className="w-3.5 h-3.5 text-text-secondary" />
    </div>
  );
}

function LessonRow({
  lesson,
  completed,
  onClick,
}: {
  lesson: Lesson;
  completed: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: EASE_CINEMATIC }}
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={`group w-full text-left rounded-xl border ${
        completed ? 'border-accent/25 bg-accent/[0.04]' : 'border-white/[0.05] bg-dark-800/50'
      } backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-accent/35 hover:bg-dark-800/70 cursor-pointer`}
    >
      <div className="flex items-center gap-3 p-3.5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${
            completed
              ? 'bg-accent/15 border border-accent/30'
              : 'bg-dark-700/80 border border-white/[0.06]'
          }`}
          aria-hidden
        >
          <span>{lesson.emoji}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-sm font-bold text-text-primary leading-tight truncate">
              {lesson.title}
            </p>
            {completed && (
              <span className="flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-[0.16em] px-1.5 py-0.5 rounded-md bg-accent/15 border border-accent/30 text-accent-light shrink-0">
                <Check className="w-2.5 h-2.5" />
                Done
              </span>
            )}
          </div>
          <p className="text-[11px] text-text-secondary leading-snug line-clamp-2">
            {lesson.subtitle}
          </p>
        </div>

        <div className="shrink-0 ml-1 hidden sm:block">
          <p className="text-[10px] text-text-faint uppercase tracking-wider">
            {lesson.estimatedMinutes} min
          </p>
        </div>

        <ArrowRight className="w-4 h-4 text-text-faint group-hover:text-accent-light group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>
    </motion.button>
  );
}
