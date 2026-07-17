'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface LightSweepProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** 'inview' sweeps once on entering the viewport; 'hover' sweeps on pointer-enter. */
  trigger?: 'inview' | 'hover';
  delay?: number; // ms, inview only
}

/**
 * A soft specular band that sweeps across its content once — the maison's
 * signature "light as material" primitive. Used on the logo, key headline
 * words and product images. Pure CSS animation (see .light-sweep in globals).
 */
export default function LightSweep({
  children,
  as,
  className = '',
  trigger = 'inview',
  delay = 0,
}: LightSweepProps) {
  // Polymorphic tag — typed loosely so JSX children/ref don't collapse to
  // `never` across the intrinsic-element union under strict TS.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = as ?? 'span';
  const ref = useRef<HTMLElement | null>(null);
  const [sweeping, setSweeping] = useState(false);

  useEffect(() => {
    if (trigger !== 'inview') return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => setSweeping(true), delay);
            io.disconnect();
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger, delay]);

  const hoverHandlers =
    trigger === 'hover'
      ? {
          onMouseEnter: () => {
            setSweeping(false);
            // restart the animation on each enter
            requestAnimationFrame(() => requestAnimationFrame(() => setSweeping(true)));
          },
          onAnimationEnd: () => setSweeping(false),
        }
      : {};

  return (
    <Tag
      ref={ref}
      className={`light-sweep ${sweeping ? 'is-sweeping' : ''} ${className}`}
      {...hoverHandlers}
    >
      {children}
    </Tag>
  );
}
