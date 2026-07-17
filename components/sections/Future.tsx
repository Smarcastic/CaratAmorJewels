'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Cta from '@/components/ui/Cta';
import { HOME } from '@/content/site';
import { certPhrase } from '@/lib/cert';
import { EASE_MAISON, inView } from '@/lib/motion';

/**
 * Scene 4 — The Science. A quiet burgundy-deep band: three columns
 * (Carbon / Pressure / Brilliance), the certification kicker, one link.
 * No pinning, no scroll-jacking — confidence over spectacle.
 */
export default function Future() {
  const { future } = HOME;

  return (
    <section className="relative overflow-hidden bg-burgundy-deep py-28 md:py-36">
      <div className="vignette" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionLabel number={future.number} label={future.label} className="mb-16" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {future.panels.map((p, i) => (
            <motion.div
              key={p.word}
              className="border-t border-gold-dim/30 pt-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE_MAISON }}
            >
              <h3 className="font-display text-ivory" style={{ fontSize: 'clamp(1.75rem,2.8vw,2.5rem)' }}>
                {p.word}
              </h3>
              <p className="mt-4 max-w-[38ch] font-body text-md font-light leading-relaxed text-mist">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-gold-dim/30 pt-10 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="max-w-[52ch] font-body text-sm font-light text-champagne/90">
            {future.kicker} Every stone {certPhrase()}.
          </p>
          <Cta href="/lab-grown" variant="ghost">
            {future.cta}
          </Cta>
        </motion.div>
      </div>
    </section>
  );
}
