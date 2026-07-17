import { PIECES, COLLECTIONS, type Piece, type Collection, type CollectionSlug } from '@/content/products';

/* ============================================================
   Product data access — the ONE place image paths are resolved.
   Swap or re-map photography here without touching components.
   ============================================================ */

const PRODUCT_DIR = '/products';

/**
 * Resolve a piece's photograph. Every image reference in the app flows
 * through this helper so re-mapping or swapping photos is a one-line change.
 * Returns null for a missing file so callers can render an art-directed
 * placeholder instead (no piece currently lacks an image).
 */
export function getProductImage(image: string | undefined | null): string | null {
  if (!image) return null;
  return `${PRODUCT_DIR}/${image}`;
}

export function getPiece(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function piecesByCollection(slug: CollectionSlug): Piece[] {
  return PIECES.filter((p) => p.collection === slug);
}

/** Up to `count` other pieces from the same collection (fallback: any collection). */
export function relatedPieces(piece: Piece, count = 3): Piece[] {
  const sameCollection = PIECES.filter(
    (p) => p.collection === piece.collection && p.slug !== piece.slug,
  );
  const pool =
    sameCollection.length >= count
      ? sameCollection
      : [...sameCollection, ...PIECES.filter((p) => p.slug !== piece.slug && p.collection !== piece.collection)];
  return pool.slice(0, count);
}

/** Curated order for the homepage signature film-strip. */
export function signaturePieces(): Piece[] {
  const order = [
    'seraphine-oval-halo-set',
    'aurelia-oval-solitaire',
    'devi-toi-et-moi',
    'lumiere-round-trinity',
    'ianthe-pear-cluster',
    'maren-emerald-eternity',
    'celeste-eastwest-oval',
    'valentine-multi-shape-tennis',
  ];
  const map = new Map(PIECES.map((p) => [p.slug, p]));
  return order.map((s) => map.get(s)).filter((p): p is Piece => Boolean(p));
}

export { PIECES, COLLECTIONS };
export type { Piece, Collection, CollectionSlug };
