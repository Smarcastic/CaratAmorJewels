'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LightSweep from '@/components/motion/LightSweep';
import { EASE_MAISON } from '@/lib/motion';

const SEEN_KEY = 'ca_intro_seen_v1';

/**
 * Scene 1 — Arrival. First visit only: the real logo fades in, a beam of
 * light descends and catches it, then the curtain lifts to the hero.
 * Returning visitors and reduced-motion users skip straight through.
 * Skippable by any click / scroll / key.
 *
 * Uses an explicit phase machine (not AnimatePresence exit) so the overlay is
 * GUARANTEED to unmount and never traps the page behind a stuck curtain.
 */
type Phase = 'idle' | 'playing' | 'closing' | 'done';

export default function Intro() {
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try {
      seen = Boolean(localStorage.getItem(SEEN_KEY));
    } catch {
      seen = false;
    }
    setPhase(!reduced && !seen ? 'playing' : 'done');
  }, []);

  const finish = useCallback(() => {
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
    setPhase((p) => (p === 'playing' ? 'closing' : p));
  }, []);

  // While playing: lock scroll, auto-finish, allow skip. When closing: unmount
  // after the fade completes.
  useEffect(() => {
    if (phase === 'playing') {
      document.documentElement.style.overflow = 'hidden';
      const auto = window.setTimeout(finish, 2600);
      const onSkip = () => finish();
      window.addEventListener('wheel', onSkip, { passive: true });
      window.addEventListener('touchstart', onSkip, { passive: true });
      window.addEventListener('keydown', onSkip);
      window.addEventListener('click', onSkip);
      return () => {
        window.clearTimeout(auto);
        window.removeEventListener('wheel', onSkip);
        window.removeEventListener('touchstart', onSkip);
        window.removeEventListener('keydown', onSkip);
        window.removeEventListener('click', onSkip);
      };
    }
    if (phase === 'closing') {
      document.documentElement.style.overflow = '';
      const t = window.setTimeout(() => setPhase('done'), 850);
      return () => window.clearTimeout(t);
    }
    document.documentElement.style.overflow = '';
  }, [phase, finish]);

  if (phase === 'idle' || phase === 'done') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden bg-noir"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'closing' ? 0 : 1 }}
      transition={{ duration: 0.8, ease: EASE_MAISON }}
      style={{ pointerEvents: phase === 'closing' ? 'none' : 'auto' }}
    >
      {/* descending beam of light */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-[40vw] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 40%, color-mix(in srgb, var(--color-champagne) 18%, transparent) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0, scaleY: 0.2, transformOrigin: 'top' }}
        animate={{ opacity: [0, 1, 0.75], scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.9, ease: EASE_MAISON }}
      />

      {/* the real logo, catching the light */}
      <motion.div
        className="relative z-[1]"
        initial={{ opacity: 0, scale: 0.94, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE_MAISON }}
      >
        <LightSweep trigger="inview" as="div" delay={1300}>
          <Image
            src="/logo.png"
            alt="Carat Amor Jewels"
            width={640}
            height={640}
            priority
            className="w-[clamp(150px,28vw,260px)] h-auto"
          />
        </LightSweep>
      </motion.div>

      <motion.p
        className="eyebrow absolute bottom-10 text-mist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        Tap to enter
      </motion.p>
    </motion.div>
  );
}
