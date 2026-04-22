/**
 * LivePulse — a breathing dot for "live", "active", or "streak" states.
 * Pure CSS via `.live-pulse` utility; no JS animation frames.
 */
export type LivePulseTone = 'green' | 'warm' | 'accent';

export function LivePulse({
  tone = 'green',
  className = '',
  label,
}: {
  tone?: LivePulseTone;
  className?: string;
  label?: string;
}) {
  const toneClass =
    tone === 'warm'    ? 'live-pulse-warm'   :
    tone === 'accent'  ? 'live-pulse-accent' :
    '';

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      role={label ? 'status' : undefined}
      aria-label={label}
    >
      <span className={`live-pulse ${toneClass}`} aria-hidden />
      {label && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
          {label}
        </span>
      )}
    </span>
  );
}

export default LivePulse;
