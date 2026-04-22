import { useRef, type MouseEvent, type ReactNode, type CSSProperties } from 'react';

type SpotlightTone = 'default' | 'accent' | 'warm' | 'electric';

/**
 * SpotlightCard — wraps any interactive surface with a cursor-reactive
 * radial highlight. Uses pointer events to drive CSS variables `--mx`
 * and `--my`, which the `.spotlight` utility consumes.
 *
 * Pure CSS spotlight; no re-render on mousemove.
 */
export function SpotlightCard({
  children,
  className = '',
  tone = 'default',
  as: Tag = 'div',
  onClick,
  role,
  tabIndex,
  ariaLabel,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: SpotlightTone;
  as?: 'div' | 'button' | 'article' | 'a';
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  }

  const toneClass =
    tone === 'accent'    ? 'spotlight-accent' :
    tone === 'warm'      ? 'spotlight-warm'   :
    tone === 'electric'  ? 'spotlight-electric' :
    '';

  const Component = Tag as unknown as 'div';
  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      onMouseMove={handleMove}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      style={style}
      className={`spotlight ${toneClass} ${className}`}
    >
      {children}
    </Component>
  );
}

export default SpotlightCard;
