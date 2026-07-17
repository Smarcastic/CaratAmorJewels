'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { NAV_LINKS, CONTACT } from '@/content/site';
import { waLink } from '@/lib/whatsapp';
import { EASE_MAISON } from '@/lib/motion';

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while the overlay is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          condensed
            ? 'bg-noir/85 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        {/* hairline gold bottom rule fades in when condensed */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-champagne/25 transition-opacity duration-500"
          style={{ opacity: condensed ? 1 : 0 }}
        />
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          {/* Left — wordmark */}
          <Logo variant="wordmark" />

          {/* Center — links (desktop) */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative font-body text-[0.82rem] font-light uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:text-ivory"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — CTAs (desktop) */}
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/consultation"
              className="inline-flex items-center rounded-[2px] border border-champagne/50 px-5 py-2.5 font-display text-[0.66rem] uppercase tracking-[0.24em] text-champagne transition-all hover:border-champagne hover:bg-champagne/10"
            >
              Book a Consultation
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="text-champagne/80 transition-colors hover:text-champagne"
            >
              <WhatsappGlyph size={22} stroke="currentColor" />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-ivory" />
            <span className="h-px w-5 bg-ivory" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_MAISON }}
            className="fixed inset-0 z-[110] flex flex-col bg-burgundy-deep px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo variant="wordmark" onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center text-ivory"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col justify-center gap-3">
              {[...NAV_LINKS, { label: 'Book a Consultation', href: '/consultation' }].map((link, i) => (
                <span key={link.href} className="line-mask">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: EASE_MAISON }}
                    className="block"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl font-light text-ivory"
                    >
                      {link.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>

            <div className="mt-auto border-t border-champagne/20 pt-6">
              <p className="eyebrow mb-2 text-champagne">The Atelier</p>
              <p className="font-body text-sm font-light text-mist">
                Made to order · Delivered across India
              </p>
              <div className="mt-4 flex items-center gap-6">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-[0.66rem] uppercase tracking-[0.24em] text-champagne"
                >
                  <WhatsappGlyph size={18} stroke="currentColor" /> WhatsApp
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-champagne"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
