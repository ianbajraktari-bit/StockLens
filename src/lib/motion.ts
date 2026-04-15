/**
 * Motion primitives — single source of truth for spring configs + ease curves.
 *
 * Design philosophy: adult, premium, data-forward by default.
 * Game/HUD flair is reserved for earned moments (level-up, quest unlock,
 * XP gain) and should never feel arcade-y. If a 35-year-old portfolio
 * manager would cringe at it, it doesn't ship.
 */

// ---------- Ease curves ----------

/**
 * Cinematic ease — the workhorse. Smooth, confident, slightly overshoots
 * the start so things feel like they have mass. Use for most page + card
 * transitions.
 */
export const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Game-in — snappy entrance. Things arrive with intent. Use for HUD
 * elements, reward cards, level-up callouts.
 */
export const EASE_GAME_IN: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Game-out — things exit with a little tension before leaving. Use
 * sparingly; only when something dismisses itself.
 */
export const EASE_GAME_OUT: [number, number, number, number] = [0.7, 0, 0.84, 0];

// ---------- Spring configs ----------

/**
 * Tactile — immediate, no bounce. Use for taps, button presses, toggles.
 * Feels like the UI responded to the finger.
 */
export const SPRING_TACTILE = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
  mass: 0.6,
};

/**
 * Fluid — the default "things moving in space" spring. One subtle
 * overshoot, settles quickly. Use for card hover, layout transitions.
 */
export const SPRING_FLUID = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

/**
 * Celebration — the only bouncy spring. Reserved for rewards: XP gain,
 * level-up digit flip, quest unlock. Do not use for routine UI.
 */
export const SPRING_CELEBRATION = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 18,
  mass: 0.8,
};

// ---------- Duration tokens ----------

/**
 * Base duration tokens in seconds. Prefer springs, but some transitions
 * (opacity fades, tab swaps) are cleaner with a duration curve.
 */
export const DURATION = {
  instant: 0.12,
  quick: 0.2,
  base: 0.32,
  slow: 0.5,
  epic: 0.8,
} as const;
