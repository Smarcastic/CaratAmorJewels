import type { Variants, Transition } from 'framer-motion';

/* ============================================================
   MOTION SYSTEM — single vocabulary for the whole site.
   Signature moments may define bespoke choreography, but every
   micro-interaction and reveal shares these presets.
   ============================================================ */

// Signature maison easing.
export const EASE_MAISON: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT: [number, number, number, number] = [0.33, 1, 0.68, 1];

export const DUR = {
  micro: 0.2,
  reveal: 0.8,
  revealSlow: 1.1,
  scene: 1.2,
} as const;

// Reveal: translate-y + fade, used for section entrances.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.reveal, ease: EASE_MAISON },
  },
};

// Container that staggers its children (80–120ms).
export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Masked line reveal (headline lines slide up out of an overflow-hidden wrapper).
export const lineChild: Variants = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: DUR.revealSlow, ease: EASE_MAISON },
  },
};

// Fade only — the reduced-motion equivalent of a reveal.
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
};

// Micro transitions for hover/focus.
export const micro: Transition = { duration: DUR.micro, ease: EASE_OUT };

// Standard viewport trigger for whileInView.
export const inView = { once: true, amount: 0.35, margin: '0px 0px -10% 0px' } as const;
