'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import ProductCard from '@/components/ui/ProductCard';
import { HOME } from '@/content/site';
import { getPiece } from '@/lib/products';
import { EASE_MAISON, inView } from '@/lib/motion';

/**
 * Scene 6 — Signature pieces. An asymmetric editorial duo: one tall featured
 * piece, one offset companion, one quiet link to the full atelier.
 */
export default function Signature() {
  const { signature: s } = HOME;
  const featured = getPiece('ianthe-pear-cluster');
  const companion = getPiece('celeste-eastwest-oval');

  return (
    <section className="relative bg-noir py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.9, ease: EASE_MAISON }}
        >
          <SectionLabel number={s.number} label={s.label} className="mb-6" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-ivory" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1 }}>
              {s.headline}
            </h2>
            <p className="max-w-[40ch] font-body text-md font-light text-mist">{s.intro}</p>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {featured && (
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 1, ease: EASE_MAISON }}
            >
              <ProductCard piece={featured} sizes="(max-width: 768px) 100vw, 55vw" />
            </motion.div>
          )}
          {companion && (
            <motion.div
              className="md:col-span-4 md:col-start-9 md:mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 1, delay: 0.15, ease: EASE_MAISON }}
            >
              <ProductCard piece={companion} sizes="(max-width: 768px) 100vw, 32vw" />
              <Link
                href="/collections"
                className="group mt-12 inline-flex items-center gap-3 font-display text-[0.72rem] uppercase tracking-[0.3em] text-champagne"
              >
                View all pieces
                <span className="block h-px w-10 bg-champagne/50 transition-all duration-300 group-hover:w-16 group-hover:bg-champagne" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
