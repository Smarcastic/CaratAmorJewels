'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_MAISON } from '@/lib/motion';

/**
 * Piece image column with a focus-trapped lightbox (fade + scale, arrow keys).
 * We currently ship one photograph per piece; the gallery is built to accept
 * more views (macro alternates) as soon as they're added to the piece data.
 */
export default function PieceGallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="space-y-4">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            data-cursor="view"
            className="group relative block aspect-[4/5] w-full overflow-hidden rounded-t-full bg-burgundy-deep"
            aria-label="Open image in fullscreen"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={i === 0}
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Piece image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-noir/95 p-6"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close viewer"
              className="absolute right-6 top-6 z-[2] text-ivory/70 hover:text-ivory"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="5" y1="5" x2="21" y2="21" />
                <line x1="21" y1="5" x2="5" y2="21" />
              </svg>
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE_MAISON }}
              className="relative h-[80vh] w-[90vw] max-w-[900px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[index]} alt={alt} fill sizes="90vw" className="object-contain" />
            </motion.div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-ivory"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M18 6l-9 9 9 9" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next image"
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-ivory"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 6l9 9-9 9" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
