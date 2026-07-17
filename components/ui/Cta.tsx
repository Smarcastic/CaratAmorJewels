import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'ghost' | 'ghost-light';

const base =
  'inline-flex items-center justify-center gap-2 font-display uppercase text-[0.72rem] tracking-[0.28em] px-8 py-4 transition-all duration-200 ease-out select-none';

const styles: Record<Variant, string> = {
  // solid champagne — the primary invitation
  solid:
    'bg-champagne text-noir hover:bg-champagne-soft rounded-[2px]',
  // ghost gold on dark — pours full gold on hover (see .cta-fill)
  ghost:
    'cta-fill border border-champagne/50 text-champagne rounded-[2px]',
  // ghost for light surfaces
  'ghost-light':
    'border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04] rounded-[2px]',
};

interface CtaProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  external?: boolean;
  cursor?: 'view' | 'drag';
  ariaLabel?: string;
  type?: 'button' | 'submit';
}

export default function Cta({
  children,
  href,
  onClick,
  variant = 'ghost',
  className = '',
  external = false,
  ariaLabel,
  type = 'button',
}: CtaProps) {
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
