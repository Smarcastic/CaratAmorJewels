'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, useCoarsePointer } from '@/lib/useReducedMotion';

/**
 * A 6px gold dot with a 28px trailing ring (lerped). The ring expands and
 * shows a label ("View" / "Drag") over elements carrying data-cursor.
 * Native cursor stays for text/inputs. Fully off on touch + reduced-motion.
 */
export default function CustomCursor() {
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  const enabled = !reduced && !coarse;

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('cursor-ready');
      return;
    }
    document.documentElement.classList.add('cursor-ready');

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const el = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (el) {
        setActive(true);
        setLabel(el.dataset.cursor === 'view' ? 'View' : '');
      } else {
        setActive(false);
        setLabel('');
      }
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('cursor-ready');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 z-[200] ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full"
        style={{ background: 'var(--color-champagne)' }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height] duration-300"
        style={{
          width: active ? 64 : 28,
          height: active ? 64 : 28,
          marginLeft: active ? -32 : -14,
          marginTop: active ? -32 : -14,
          borderColor: 'color-mix(in srgb, var(--color-champagne) 60%, transparent)',
        }}
      >
        {label && (
          <span
            className="eyebrow select-none"
            style={{ color: 'var(--color-champagne)', fontSize: '0.6rem', letterSpacing: '0.2em' }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
