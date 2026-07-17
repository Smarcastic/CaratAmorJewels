'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';
import { reveal, fadeOnly, inView } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variants?: Variants;
}

const MotionTag = motion.div;

/**
 * Section-entrance reveal (translate-y + fade). Under reduced-motion it
 * collapses to a short fade — designed, not disabled.
 */
export default function Reveal({ children, className = '', delay = 0, variants }: RevealProps) {
  const reduced = useReducedMotion();
  const v = reduced ? fadeOnly : (variants ?? reveal);

  return (
    <MotionTag
      className={className}
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
