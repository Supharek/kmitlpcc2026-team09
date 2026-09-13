/**
 * AppInTouch Statistics & Metrics Constants
 */

// Baseline historical visitor count before live tracking
export const BASE_VISITOR_COUNT = 1284;

/**
 * Calculates the total visitor count combining base historical count with recorded live visits.
 */
export function calculateTotalVisits(rawDbVisits: number = 0): number {
  return BASE_VISITOR_COUNT + Math.max(0, rawDbVisits);
}
