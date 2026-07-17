/** A small diamond between two hairlines — the maison's section ornament. */
export default function Ornament({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="block h-px w-14 bg-gold-dim/50" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--color-champagne)" strokeWidth="1">
        <rect x="5" y="0.7" width="6.1" height="6.1" transform="rotate(45 5 0.7)" />
      </svg>
      <span className="block h-px w-14 bg-gold-dim/50" />
    </div>
  );
}
