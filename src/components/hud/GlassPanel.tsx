import type { CSSProperties, ReactNode } from 'react';

export type GlassTone = 'default' | 'accent' | 'warm' | 'signal' | 'electric';

/**
 * GlassPanel — the baseline HUD surface. Layered dark gradient with a
 * faint inner highlight, optional scan lines, noise grain, and drifting
 * aurora accent.
 *
 * Use for showcase surfaces — Level/XP card, reward callouts, featured
 * tiles. Do NOT use for every card on the page; this surface is meant
 * to read as "earned" or "primary".
 */
export function GlassPanel({
  children,
  className = '',
  tone = 'default',
  scanlines = true,
  noise = false,
  aurora = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: GlassTone;
  /** Horizontal scan-line ruling overlay. Default on. */
  scanlines?: boolean;
  /** SVG noise grain overlay. Default off. */
  noise?: boolean;
  /** Slow drifting color-wash behind content. Default off. */
  aurora?: boolean;
  style?: CSSProperties;
}) {
  const auroraStyle = aurora ? ({ ...auroraVarsForTone(tone), ...style } as CSSProperties) : style;

  return (
    <div className={`hud-panel ${className}`} style={auroraStyle}>
      {aurora && <div className="aurora" aria-hidden />}
      {scanlines && <div className="hud-scanlines" aria-hidden />}
      {noise && <div className="noise-grain" aria-hidden />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function auroraVarsForTone(tone: GlassTone): CSSProperties {
  switch (tone) {
    case 'accent':
      return {
        ['--aurora-a' as string]: 'rgba(99, 102, 241, 0.28)',
        ['--aurora-b' as string]: 'rgba(129, 140, 248, 0.18)',
        ['--aurora-c' as string]: 'rgba(56, 189, 248, 0.14)',
      } as CSSProperties;
    case 'warm':
      return {
        ['--aurora-a' as string]: 'rgba(245, 158, 11, 0.22)',
        ['--aurora-b' as string]: 'rgba(251, 113, 133, 0.14)',
        ['--aurora-c' as string]: 'rgba(167, 139, 250, 0.12)',
      } as CSSProperties;
    case 'signal':
      return {
        ['--aurora-a' as string]: 'rgba(167, 139, 250, 0.24)',
        ['--aurora-b' as string]: 'rgba(99, 102, 241, 0.18)',
        ['--aurora-c' as string]: 'rgba(56, 189, 248, 0.12)',
      } as CSSProperties;
    case 'electric':
      return {
        ['--aurora-a' as string]: 'rgba(56, 189, 248, 0.24)',
        ['--aurora-b' as string]: 'rgba(99, 102, 241, 0.18)',
        ['--aurora-c' as string]: 'rgba(167, 139, 250, 0.12)',
      } as CSSProperties;
    default:
      return {
        ['--aurora-a' as string]: 'rgba(99, 102, 241, 0.22)',
        ['--aurora-b' as string]: 'rgba(167, 139, 250, 0.18)',
        ['--aurora-c' as string]: 'rgba(56, 189, 248, 0.14)',
      } as CSSProperties;
  }
}

export default GlassPanel;
