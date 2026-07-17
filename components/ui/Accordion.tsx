'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_MAISON } from '@/lib/motion';

interface Item {
  q: string;
  a: string;
}

/** FAQ accordion — one open at a time, smooth height animation, full a11y. */
export default function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-champagne/15 border-y border-champagne/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl font-light text-ivory md:text-2xl">{item.q}</span>
                <span
                  aria-hidden
                  className="relative flex h-5 w-5 shrink-0 items-center justify-center text-champagne"
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <motion.span
                    className="absolute h-4 w-px bg-current"
                    animate={{ scaleY: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: EASE_MAISON }}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_MAISON }}
                  className="overflow-hidden"
                >
                  <p className="measure pb-7 font-body text-md font-light text-mist">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
