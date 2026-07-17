'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Ornament from '@/components/ui/Ornament';
import { TESTIMONIALS } from '@/content/products';
import { CONTACT } from '@/content/site';

/**
 * Scene 7 — Voices & assurance, on noir. If no real testimonials exist, the
 * quote block hides itself; only the quiet certification band remains.
 */
export default function Voices() {
  const [i, setI] = useState(0);
  const has = TESTIMONIALS.length > 0;

  useEffect(() => {
    if (!has || TESTIMONIALS.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, [has]);

  return (
    <section className="relative bg-noir py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        {has ? (
          <>
            <SectionLabel number="—" label="Voices" className="mb-14 flex justify-center" />
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.7 }}
                >
                  <span aria-hidden className="mx-auto mb-6 block h-8 w-px bg-champagne/50" />
                  <blockquote className="font-accent text-2xl italic leading-snug text-ivory md:text-4xl">
                    “{TESTIMONIALS[i].quote}”
                  </blockquote>
                  <figcaption className="eyebrow mt-8 text-mist">{TESTIMONIALS[i].author}</figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            <Ornament className="mb-10" />
            <p className="font-accent mx-auto max-w-[34ch] text-2xl italic leading-relaxed text-mist md:text-3xl">
              Every piece leaves our atelier with its own certificate — and its own story.
            </p>
          </>
        )}

        {/* assurance band — restrained line-art, never badge clip-art */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 border-t border-gold-dim/25 pt-14">
          <CertMark label={`${CONTACT.certificationBody} Certified`} />
          <CertMark label="Hallmarked Gold" />
          <CertMark label="Conflict-Free" />
        </div>
      </div>
    </section>
  );
}

function CertMark({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-gold-dim)" strokeWidth="1.2" aria-hidden>
        <circle cx="20" cy="20" r="15" />
        <path d="M13 20l4.5 4.5L27 15" />
      </svg>
      <span className="eyebrow text-mist">{label}</span>
    </div>
  );
}
