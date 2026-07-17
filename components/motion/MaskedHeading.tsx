'use client';

import { motion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import { lineChild, stagger, fadeOnly, inView } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

// Pre-created motion components (avoids the deprecated motion() factory at render).
const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  div: motion.div,
  p: motion.p,
} as const;

// Returns `any` deliberately: a union of motion.h1|h2|… collapses its children
// prop to `never` under strict JSX, so we type the tag loosely at the call site.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveMotionTag(as: ElementType): any {
  if (typeof as === 'string' && as in MOTION_TAGS) {
    return MOTION_TAGS[as as keyof typeof MOTION_TAGS];
  }
  return motion.h2;
}

interface MaskedHeadingProps {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  stagperDelay?: number;
}

/**
 * Headlines reveal by masked line (never by letter). Each line sits in an
 * overflow-hidden wrapper; its inner span slides up. Reduced-motion → fade.
 * Renders as real text in the DOM so it's readable if JS never fires.
 */
export default function MaskedHeading({
  lines,
  as = 'h2',
  className = '',
  lineClassName = '',
}: MaskedHeadingProps) {
  const reduced = useReducedMotion();
  const Tag = resolveMotionTag(as);

  if (reduced) {
    return (
      <motion.div
        variants={fadeOnly}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className={className}
      >
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName}`}>
            {line}
          </span>
        ))}
      </motion.div>
    );
  }

  return (
    <Tag
      className={className}
      variants={stagger(0.11)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span variants={lineChild} className={lineClassName}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
