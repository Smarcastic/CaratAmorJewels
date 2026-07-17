'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Globally honour the OS reduced-motion setting for every Framer animation:
 * transform/layout animations are suppressed (opacity still animates), which
 * complements our explicit `useReducedMotion` gates for a genuine, designed
 * reduced-motion experience.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
