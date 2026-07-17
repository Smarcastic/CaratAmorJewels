'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cta from '@/components/ui/Cta';
import { HOME } from '@/content/site';
import { getProductImage } from '@/lib/products';
import { useReducedMotion, useCoarsePointer } from '@/lib/useReducedMotion';
import { inView } from '@/lib/motion';

/**
 * Scene 6 — Held to the Light. A full-bleed macro whose facets seem to catch
 * light as a soft specular highlight follows the pointer (lerped). On touch,
 * the highlight drifts on a slow figure-eight. Reduced-motion → a fixed glow.
 */
export default function HeldToLight() {
  const { heldToLight: h } = HOME;
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const img = getProductImage('emerald-eternity-duo.png');

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    if (reduced) {
      glow.style.setProperty('--gx', '50%');
      glow.style.setProperty('--gy', '42%');
      return;
    }

    const target = { x: 0.5, y: 0.45 };
    const cur = { x: 0.5, y: 0.45 };
    let raf = 0;
    let t = 0;

    const loop = () => {
      if (coarse) {
        // autonomous slow figure-eight
        t += 0.006;
        target.x = 0.5 + Math.sin(t) * 0.28;
        target.y = 0.45 + Math.sin(t * 2) * 0.16;
      }
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      glow.style.setProperty('--gx', `${cur.x * 100}%`);
      glow.style.setProperty('--gy', `${cur.y * 100}%`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = (e.clientY - rect.top) / rect.height;
    };
    if (!coarse) section.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener('mousemove', onMove);
    };
  }, [reduced, coarse]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-end overflow-hidden bg-noir">
      {img && (
        <Image
          src={img}
          alt="Two emerald-cut lab-grown diamond eternity rings, held to the light on black marble."
          fill
          sizes="100vw"
          className="object-cover opacity-90"
        />
      )}
      {/* darkening for legibility */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/60" />
      {/* moving specular highlight */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
        style={{
          background:
            'radial-gradient(22vmax 22vmax at var(--gx,50%) var(--gy,45%), color-mix(in srgb, var(--color-champagne-soft) 45%, transparent) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-6 pb-24 text-center md:px-12">
        <motion.p
          className="font-accent mx-auto max-w-[26ch] text-3xl font-normal italic leading-snug text-ivory md:text-[2.75rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.9 }}
        >
          {h.line}
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Cta href="/consultation" variant="ghost">
            {h.cta}
          </Cta>
        </motion.div>
      </div>
    </section>
  );
}
