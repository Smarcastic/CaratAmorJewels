/**
 * A slow editorial ticker between the hero and the maison statement —
 * Marcellus caps with diamond separators, drifting like engraving on a band.
 * Pure CSS animation; freezes gracefully under reduced-motion.
 */
const ITEMS = [
  'Lab-Grown Diamonds',
  'Hyderabad Atelier',
  'Certified Brilliance',
  'Grown by Science',
  'Chosen by Love',
];

function Run() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display whitespace-nowrap px-8 text-[0.78rem] uppercase tracking-[0.34em] text-gold-dim">
            {item}
          </span>
          <svg
            aria-hidden
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            stroke="var(--color-gold-dim)"
            strokeWidth="1"
            className="shrink-0"
          >
            <rect x="5" y="0.7" width="6.1" height="6.1" transform="rotate(45 5 0.7)" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Carat Amor — lab-grown diamonds, Hyderabad atelier" className="overflow-hidden border-y border-gold-dim/25 bg-noir py-5">
      <div className="marquee-track" aria-hidden>
        <Run />
        <Run />
      </div>
    </section>
  );
}
