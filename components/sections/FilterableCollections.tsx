'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import { COLLECTIONS, PIECES } from '@/content/products';
import { reveal, fadeOnly, inView } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

/** Quiet Marcellus text-tabs over the full catalogue — no dropdown chrome. */
export default function FilterableCollections() {
  const [active, setActive] = useState<string>('all');
  const reduced = useReducedMotion();

  const pieces = active === 'all' ? PIECES : PIECES.filter((p) => p.collection === active);
  const tabs = [{ slug: 'all', name: 'All' }, ...COLLECTIONS.map((c) => ({ slug: c.slug, name: c.name }))];

  return (
    <div>
      {/* text-tabs */}
      <div className="mb-16 flex flex-wrap gap-x-9 gap-y-4 border-b border-gold-dim/25 pb-6">
        {tabs.map((t) => (
          <button
            key={t.slug}
            onClick={() => setActive(t.slug)}
            aria-pressed={active === t.slug}
            className={`font-display text-[0.72rem] uppercase tracking-[0.26em] transition-colors ${
              active === t.slug ? 'text-champagne' : 'text-mist/70 hover:text-ivory'
            }`}
          >
            {t.name}
            {active === t.slug && <span className="mt-1 block h-px w-full bg-champagne" />}
          </button>
        ))}
      </div>

      {/* large cards — 2-up max so the photography stays enormous */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
        {pieces.map((p, i) => (
          <motion.div
            key={p.slug}
            variants={reduced ? fadeOnly : reveal}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            transition={{ delay: (i % 2) * 0.08 }}
          >
            <ProductCard piece={p} sizes="(max-width: 640px) 100vw, 45vw" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
