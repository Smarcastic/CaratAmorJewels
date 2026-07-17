import Link from 'next/link';
import Image from 'next/image';
import LightSweep from '@/components/motion/LightSweep';
import { getProductImage, getCollection } from '@/lib/products';
import { type Piece } from '@/content/products';

/**
 * The shared piece-card anatomy on dark: large image on a burgundy-deep
 * field, hairline rule, collection label, piece name, "Price on request".
 * Hover scales the image inside a fixed mask and sweeps light across it.
 */
export default function ProductCard({
  piece,
  className = '',
  sizes = '(max-width: 768px) 100vw, 45vw',
  priority = false,
}: {
  piece: Piece;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const src = getProductImage(piece.image);
  const collection = getCollection(piece.collection);

  return (
    <Link
      href={`/piece/${piece.slug}`}
      data-cursor="view"
      className={`group block ${className}`}
      aria-label={`${piece.name} — ${collection?.name ?? ''}, view piece`}
    >
      {/* gallery-arch frame — a jewel seen through an arched window, never a box */}
      <LightSweep trigger="hover" as="div" className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-burgundy-deep">
        {/* hairline inner arch that wakes on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-3 z-[3] rounded-t-full border border-champagne/0 transition-colors duration-700 group-hover:border-champagne/40"
        />
        {src ? (
          <Image
            src={src}
            alt={piece.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          // Placeholder for a piece with no photograph (none at present).
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-burgundy-deep to-noir">
            <span className="eyebrow text-champagne/60">Carat Amor</span>
          </div>
        )}
      </LightSweep>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow text-gold-dim">{collection?.name}</p>
          <h3 className="mt-2 font-display text-2xl text-ivory transition-colors group-hover:text-champagne-soft md:text-[1.7rem]">
            {piece.name}
          </h3>
        </div>
        <p className="shrink-0 font-body text-sm font-light text-mist">{piece.priceLabel}</p>
      </div>
    </Link>
  );
}
