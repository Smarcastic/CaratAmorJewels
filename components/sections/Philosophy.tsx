'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import LightSweep from '@/components/motion/LightSweep';
import { HOME } from '@/content/site';
import { fadeOnly, inView, reveal } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

/** Scene 2 — The Maison statement. Pure type and space on noir. */
export default function Philosophy() {
  const reduced = useReducedMotion();
  const { philosophy: p } = HOME;

  return (
    <section className="relative bg-noir py-32 md:py-48">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionLabel number={p.number} label={p.label} className="mb-14" />

        <motion.blockquote
          className="max-w-[24ch] font-display text-ivory"
          style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3.6rem)', lineHeight: 1.25, letterSpacing: '0.01em' }}
          variants={reduced ? fadeOnly : reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {p.quoteBefore}
          <LightSweep trigger="inview" as="span" delay={600} className="font-accent text-gold-grad italic" >
            {p.quoteKeyword}
          </LightSweep>
          {p.quoteAfter}
        </motion.blockquote>
      </div>
    </section>
  );
}
