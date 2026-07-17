'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WhatsappGlyph from './WhatsappGlyph';
import { waLink } from '@/lib/whatsapp';

/**
 * Floating WhatsApp presence — a quiet gold-on-noir pill that appears after
 * the hero. Context text can be passed by product pages; defaults to the
 * maison enquiry.
 */
export default function FloatingWhatsapp({ text }: { text?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[120] flex items-center gap-2 rounded-full border border-champagne/40 bg-noir/90 px-5 py-3 text-champagne shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm hover:border-champagne hover:bg-noir"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <WhatsappGlyph size={22} stroke="var(--color-champagne)" />
      <span className="eyebrow hidden sm:inline" style={{ fontSize: '0.62rem' }}>
        WhatsApp
      </span>
    </motion.a>
  );
}
