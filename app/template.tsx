'use client';

import { motion } from 'framer-motion';
import { EASE_MAISON } from '@/lib/motion';

/**
 * Page transition — Next re-mounts this on every route change. Incoming
 * page crossfades with a small upward drift; a thin gold hairline draws
 * across the very top during the change. No full-screen curtain wipes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[300] h-px origin-left bg-champagne"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ scaleX: { duration: 0.5, ease: EASE_MAISON }, opacity: { duration: 0.3, delay: 0.5 } }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE_MAISON }}
      >
        {children}
      </motion.div>
    </>
  );
}
