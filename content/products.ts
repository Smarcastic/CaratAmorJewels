/* ============================================================
   COLLECTIONS & PIECES — typed catalogue.
   Every piece maps to a real photograph in /public/products via
   `image` (resolved through lib/products.ts -> getProductImage()).
   Carat weights and prices are placeholders where the owner has
   not supplied exact specs — swap in content, never in components.
   ============================================================ */

export type CollectionSlug =
  | 'solitaires'
  | 'bridal'
  | 'signature'
  | 'everyday'
  | 'mens';

export interface Collection {
  slug: CollectionSlug;
  name: string;
  eyebrow: string;
  mood: string; // one-line mood sentence for the collection hero
}

export interface Piece {
  slug: string;
  name: string;
  collection: CollectionSlug;
  metal: string;
  diamond: string; // shape / cut
  carat: string; // [TODO] confirm exact weights with owner
  image: string; // filename in /public/products
  alt: string;
  description: string;
  priceLabel: string;
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'solitaires',
    name: 'Solitaires',
    eyebrow: 'The Solitaires',
    mood: 'One stone. Pure light.',
  },
  {
    slug: 'bridal',
    name: 'Bridal',
    eyebrow: 'The Bridal Suite',
    mood: 'Rings and bands, made for a lifetime.',
  },
  {
    slug: 'signature',
    name: 'Signature',
    eyebrow: 'Signature Pieces',
    mood: 'Sculptural. Unrepeatable.',
  },
  {
    slug: 'everyday',
    name: 'Everyday',
    eyebrow: 'Everyday Brilliance',
    mood: 'Light enough to never take off.',
  },
  {
    slug: 'mens',
    name: 'For Him',
    eyebrow: 'For Him',
    mood: 'Quiet brilliance, no ornament.',
  },
];

export const PIECES: Piece[] = [
  // -- Solitaires --
  {
    slug: 'aurelia-oval-solitaire',
    name: 'Aurelia',
    collection: 'solitaires',
    metal: '18k Rose Gold',
    diamond: 'Oval brilliant, lab-grown',
    carat: '~1.20ct',
    image: 'oval-rose-crossover.png',
    alt: 'Oval lab-grown diamond solitaire ring in 18k rose gold with a crossover pavé band, on black marble beside burgundy silk.',
    description: 'An oval brilliant on a crossed pavé band of rose gold.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'celeste-eastwest-oval',
    name: 'Celeste',
    collection: 'solitaires',
    metal: '18k White Gold',
    diamond: 'Oval brilliant, lab-grown',
    carat: '~1.50ct',
    image: 'oval-bypass-eastwest.png',
    alt: 'East-west set oval lab-grown diamond ring in white gold with a bypass pavé band, on black marble.',
    description: 'An oval set east-west, cradled by a bypass of pavé.',
    priceLabel: 'Price on request',
  },

  // -- Bridal --
  {
    slug: 'seraphine-oval-halo-set',
    name: 'Seraphine',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Oval brilliant with diamond halo',
    carat: '~1.80ct centre',
    image: 'oval-halo-bridal-set.png',
    alt: 'Oval lab-grown diamond halo engagement ring with a matching pavé wedding band in white gold, on black marble with burgundy silk.',
    description: 'An oval halo, paired with its own pavé band.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'lumiere-round-trinity',
    name: 'Lumière',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Round brilliant, lab-grown',
    carat: '~3.00ct centre',
    image: 'round-trinity-solitaire.png',
    alt: 'Round brilliant lab-grown diamond solitaire flanked by three rows of pavé in white gold, reflected on black marble.',
    description: 'A round brilliant on six claws, framed by three rows of pavé.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'maren-emerald-eternity',
    name: 'Maren',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Emerald cut with emerald-cut eternity',
    carat: '~4.00ct centre',
    image: 'emerald-eternity-duo.png',
    alt: 'Emerald-cut lab-grown diamond ring set on a full emerald-cut eternity band in white gold, shown as two views on black marble.',
    description: 'An emerald cut on a full emerald-cut eternity band.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'odette-emerald-trilogy',
    name: 'Odette',
    collection: 'bridal',
    metal: '18k Yellow Gold',
    diamond: 'Emerald cut with tapered baguettes',
    carat: '~1.50ct centre',
    image: 'emerald-baguette-trilogy.png',
    alt: 'Emerald-cut lab-grown diamond three-stone ring with tapered baguette side stones in yellow gold, on dark marble.',
    description: 'An emerald cut flanked by tapered baguettes.',
    priceLabel: 'Price on request',
  },

  // -- Signature --
  {
    slug: 'devi-toi-et-moi',
    name: 'Devi',
    collection: 'signature',
    metal: '18k Yellow Gold',
    diamond: 'Oval brilliant with pink marquise',
    carat: '~1.00ct pair',
    image: 'toi-et-moi-blush.png',
    alt: 'Toi-et-moi ring pairing a white oval and a pink marquise lab-grown diamond in yellow gold, with a curved pavé contour band, on ivory stone.',
    description: 'A white oval and a blush-pink marquise, held toi-et-moi.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'ianthe-pear-cluster',
    name: 'Ianthe',
    collection: 'signature',
    metal: '18k White Gold',
    diamond: 'Pear and marquise cluster',
    carat: '~2.50ct total',
    image: 'pear-marquise-cluster.png',
    alt: 'Two sculptural cluster rings pairing pear and marquise lab-grown diamonds in white gold, on black marble.',
    description: 'Pears and marquises gathered like petals.',
    priceLabel: 'Price on request',
  },

  // -- Everyday --
  {
    slug: 'stella-double-huggie',
    name: 'Stella',
    collection: 'everyday',
    metal: '18k White Gold',
    diamond: 'Round brilliant, lab-grown',
    carat: '~1.00ct pair',
    image: 'round-double-huggie.png',
    alt: 'A pair of double-row round lab-grown diamond huggie earrings in white gold, on a dark tray against brown silk.',
    description: 'Two neat rows of round brilliants that hug the lobe.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'valentine-multi-shape-tennis',
    name: 'Valentine',
    collection: 'everyday',
    metal: '18k Yellow Gold',
    diamond: 'Fancy-shape lab-grown diamonds',
    carat: '~7.00ct total',
    image: 'multi-shape-tennis-bracelet.png',
    alt: 'Yellow gold tennis bracelet alternating pear, oval, emerald and marquise lab-grown diamonds, on black marble with burgundy velvet.',
    description: 'Alternating pear, oval, emerald and marquise, strung in gold.',
    priceLabel: 'Price on request',
  },

  // -- For Him --
  {
    slug: 'atlas-emerald-band',
    name: 'Atlas',
    collection: 'mens',
    metal: '18k Yellow Gold',
    diamond: 'Emerald cut, lab-grown',
    carat: '~1.00ct',
    image: 'emerald-signet-band.png',
    alt: 'A solitaire emerald-cut lab-grown diamond set flush into a broad yellow gold band, on dark marble.',
    description: 'An emerald cut set low into a broad, polished band.',
    priceLabel: 'Price on request',
  },
];

// Client voices (Scene 7). Empty until the owner supplies real testimonials —
// the section hides itself rather than inventing quotes.
export interface Testimonial {
  quote: string;
  author: string;
}
export const TESTIMONIALS: Testimonial[] = [
  // [TODO] Add real client words here, e.g.
  // { quote: '…', author: 'A. & R., Hyderabad' },
];
