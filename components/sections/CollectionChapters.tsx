'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { COLLECTIONS } from '@/content/products';
import { getProductImage } from '@/lib/products';
import { EASE_MAISON, inView } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

/**
 * Scene 3 — the heart of the homepage. Five full-width editorial chapters,
 * one per collection: enormous photograph, chapter number, collection name,
 * mood line, hairline "Explore" link. Photography does the selling.
 */

// Each chapter uses a photograph that belongs to its collection.
const CHAPTER_IMAGES: Record<string, string> = {
  solitaires: 'oval-rose-crossover.png',
  bridal: 'oval-halo-bridal-set.png',
  signature: 'toi-et-moi-blush.png',
  everyday: 'multi-shape-tennis-bracelet.png',
  mens: 'emerald-signet-band.png',
};

const CHAPTER_ALTS: Record<string, string> = {
  solitaires: 'Oval lab-grown diamond solitaire in rose gold with a crossover pavé band.',
  bridal: 'Oval halo engagement ring with its matching pavé wedding band in white gold.',
  signature: 'Toi-et-moi ring pairing a white oval and pink marquise diamond in yellow gold.',
  everyday: 'Yellow gold tennis bracelet of alternating fancy-shape lab-grown diamonds.',
  mens: 'A single emerald-cut diamond set low into a broad polished gold band.',
};

export default function CollectionChapters() {
  const reduced = useReducedMotion();

  return (
    <section id="collections" className="relative bg-noir">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {COLLECTIONS.map((c, i) => {
          const img = getProductImage(CHAPTER_IMAGES[c.slug]);
          const flipped = i % 2 === 1;
          const number = String(i + 1).padStart(2, '0');

          return (
            <article
              key={c.slug}
              className={`grid grid-cols-1 items-center gap-10 border-t border-gold-dim/25 py-20 first:border-t-0 md:grid-cols-12 md:gap-0 md:py-28 ${
                flipped ? '' : ''
              }`}
            >
              {/* image — 7 columns, enormous */}
              <motion.div
                className={`relative md:col-span-7 ${flipped ? 'md:order-2 md:col-start-6' : 'md:order-1 md:col-start-1'}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={inView}
                transition={{ duration: 1.2, ease: EASE_MAISON }}
              >
                <Link
                  href={`/collections/${c.slug}`}
                  data-cursor="view"
                  aria-label={`Explore the ${c.name} collection`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-t-full bg-burgundy-deep md:aspect-[5/6]"
                >
                  {img && (
                    <Image
                      src={img}
                      alt={CHAPTER_ALTS[c.slug]}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  )}
                </Link>
              </motion.div>

              {/* text — 4 columns, quiet, under a huge ghost numeral */}
              <motion.div
                className={`relative md:col-span-4 ${flipped ? 'md:order-1 md:col-start-1 md:pr-4' : 'md:order-2 md:col-start-9 md:pl-4'}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 1, delay: 0.15, ease: EASE_MAISON }}
              >
                <span
                  aria-hidden
                  className="ghost-num pointer-events-none absolute -top-14 left-0 md:-top-24"
                  style={{ fontSize: 'clamp(6rem, 11vw, 10rem)' }}
                >
                  {number}
                </span>
                <h2
                  className="relative mt-14 font-display text-ivory md:mt-20"
                  style={{ fontSize: 'clamp(2rem,3.6vw,3.25rem)', lineHeight: 1.1 }}
                >
                  {c.name}
                </h2>
                <p className="font-accent mt-5 max-w-[34ch] text-lg italic leading-relaxed text-mist">{c.mood}</p>
                <Link
                  href={`/collections/${c.slug}`}
                  className="group mt-9 inline-flex items-center gap-3 font-display text-[0.72rem] uppercase tracking-[0.3em] text-champagne"
                >
                  Explore
                  <span className="block h-px w-10 bg-champagne/50 transition-all duration-300 group-hover:w-16 group-hover:bg-champagne" />
                </Link>
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
