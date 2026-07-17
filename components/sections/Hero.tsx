'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Cta from '@/components/ui/Cta';
import { scrollToId } from '@/components/motion/SmoothScroll';
import { HOME } from '@/content/site';
import { getProductImage } from '@/lib/products';
import { EASE_MAISON, lineChild, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

/**
 * Scene 1 — Arrival. Full-bleed photography inside a hairline jewel-box
 * frame; a mixed-face headline (Marcellus caps, one Cormorant italic word
 * poured in gold) rises out of the vignette.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const startDelay = reduced ? 0.1 : 0.5;
  const img = getProductImage('round-trinity-solitaire.png');

  const [l1, l2, l3] = HOME.hero.headlineLines; // 'Diamonds,' / 'reimagined' / 'with love.'

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-noir">
      {/* full-bleed photograph, slow settle */}
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        {img && (
          <Image
            src={img}
            alt="A round brilliant lab-grown diamond solitaire with three rows of pavé, on black marble beside burgundy silk."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>

      {/* cinematic grading — bottom vignette + left shade for type */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--color-noir) 2%, color-mix(in srgb, var(--color-noir) 62%, transparent) 32%, transparent 62%), linear-gradient(100deg, color-mix(in srgb, var(--color-noir) 55%, transparent) 0%, transparent 50%)',
        }}
      />

      {/* jewel-box hairline frame */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-4 z-[2] hidden border border-champagne/20 md:block lg:inset-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: startDelay + 1, ease: EASE_MAISON }}
      />

      {/* content — lower-left, editorial */}
      <div className="relative z-[3] mx-auto w-full max-w-[1440px] px-6 pb-28 md:px-16 md:pb-32">
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: startDelay, ease: EASE_MAISON }}
        >
          <span aria-hidden className="block h-px w-12 bg-champagne/60" />
          <p className="eyebrow text-champagne">{HOME.hero.eyebrow}</p>
        </motion.div>

        <motion.h1
          className="font-display text-ivory"
          style={{ fontSize: 'clamp(2.9rem, 7.5vw, 7rem)', lineHeight: 1.02, letterSpacing: '0.01em' }}
          variants={stagger(0.14, startDelay)}
          initial="hidden"
          animate="show"
        >
          <span className="line-mask">
            <motion.span variants={lineChild} className="block">
              {l1}
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span variants={lineChild} className="block">
              <em className="font-accent text-gold-grad italic" style={{ fontSize: '1.08em' }}>
                {l2}
              </em>
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span variants={lineChild} className="block">
              {l3}
            </motion.span>
          </span>
        </motion.h1>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: startDelay + 0.7, ease: EASE_MAISON }}
        >
          <Cta variant="ghost" onClick={() => scrollToId('#collections')}>
            {HOME.hero.cta}
          </Cta>
        </motion.div>
      </div>

      {/* scroll cue — inside the frame, lower right */}
      <div className="absolute bottom-10 right-10 z-[3] hidden flex-col items-center gap-3 md:flex lg:right-12">
        <span className="relative block h-14 w-px overflow-hidden bg-champagne/15">
          <motion.span
            className="absolute inset-x-0 top-0 block h-1/2 bg-champagne/70"
            animate={reduced ? undefined : { y: ['-100%', '200%'] }}
            transition={reduced ? undefined : { duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
          />
        </span>
      </div>
    </section>
  );
}
