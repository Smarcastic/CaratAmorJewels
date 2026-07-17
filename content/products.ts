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
    mood: 'One stone, held to the light — the purest expression of a promise.',
  },
  {
    slug: 'bridal',
    name: 'Bridal',
    eyebrow: 'The Bridal Suite',
    mood: 'Engagement rings and wedding bands, composed to be worn together for a lifetime.',
  },
  {
    slug: 'signature',
    name: 'Signature',
    eyebrow: 'Signature Pieces',
    mood: 'Sculptural, unrepeatable compositions for those who wear their own story.',
  },
  {
    slug: 'everyday',
    name: 'Everyday',
    eyebrow: 'Everyday Brilliance',
    mood: 'Diamonds light enough for daylight, made to never leave your side.',
  },
  {
    slug: 'mens',
    name: 'For Him',
    eyebrow: 'For Him',
    mood: 'Quiet, architectural brilliance — presence without ornament.',
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
    carat: '[TODO] ~1.20ct',
    image: 'oval-rose-crossover.png',
    alt: 'Oval lab-grown diamond solitaire ring in 18k rose gold with a crossover pavé band, on black marble beside burgundy silk.',
    description:
      'A single oval brilliant floats above a crossed, diamond-set band of warm rose gold — a solitaire that reads as movement as much as light.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'celeste-eastwest-oval',
    name: 'Celeste',
    collection: 'solitaires',
    metal: '18k White Gold',
    diamond: 'Oval brilliant, lab-grown',
    carat: '[TODO] ~1.50ct',
    image: 'oval-bypass-eastwest.png',
    alt: 'East-west set oval lab-grown diamond ring in white gold with a bypass pavé band, on black marble.',
    description:
      'Set east-to-west and cradled by a bypass of pavé, Celeste turns a classic oval on its axis for a silhouette that feels effortlessly modern.',
    priceLabel: 'Price on request',
  },

  // -- Bridal --
  {
    slug: 'seraphine-oval-halo-set',
    name: 'Seraphine',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Oval brilliant with diamond halo',
    carat: '[TODO] ~1.80ct centre',
    image: 'oval-halo-bridal-set.png',
    alt: 'Oval lab-grown diamond halo engagement ring with a matching pavé wedding band in white gold, on black marble with burgundy silk.',
    description:
      'An oval centre wrapped in a delicate halo, paired with its own pavé band — a bridal set composed to be worn as one.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'lumiere-round-trinity',
    name: 'Lumière',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Round brilliant, lab-grown',
    carat: '[TODO] ~3.00ct centre',
    image: 'round-trinity-solitaire.png',
    alt: 'Round brilliant lab-grown diamond solitaire flanked by three rows of pavé in white gold, reflected on black marble.',
    description:
      'A commanding round brilliant lifted on six claws, framed by three rows of pavé — a statement of light for the moment that matters most.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'maren-emerald-eternity',
    name: 'Maren',
    collection: 'bridal',
    metal: '18k White Gold',
    diamond: 'Emerald cut with emerald-cut eternity',
    carat: '[TODO] ~4.00ct centre',
    image: 'emerald-eternity-duo.png',
    alt: 'Emerald-cut lab-grown diamond ring set on a full emerald-cut eternity band in white gold, shown as two views on black marble.',
    description:
      'An architectural emerald cut carried on a full eternity of emerald-cut diamonds — hall-of-mirrors brilliance from every angle.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'odette-emerald-trilogy',
    name: 'Odette',
    collection: 'bridal',
    metal: '18k Yellow Gold',
    diamond: 'Emerald cut with tapered baguettes',
    carat: '[TODO] ~1.50ct centre',
    image: 'emerald-baguette-trilogy.png',
    alt: 'Emerald-cut lab-grown diamond three-stone ring with tapered baguette side stones in yellow gold, on dark marble.',
    description:
      'A serene emerald cut flanked by tapered baguettes in warm yellow gold — the quiet confidence of a true three-stone.',
    priceLabel: 'Price on request',
  },

  // -- Signature --
  {
    slug: 'devi-toi-et-moi',
    name: 'Devi',
    collection: 'signature',
    metal: '18k Yellow Gold',
    diamond: 'Oval brilliant with pink marquise',
    carat: '[TODO] ~1.00ct pair',
    image: 'toi-et-moi-blush.png',
    alt: 'Toi-et-moi ring pairing a white oval and a pink marquise lab-grown diamond in yellow gold, with a curved pavé contour band, on ivory stone.',
    description:
      'Two souls, two stones — a white oval and a blush-pink marquise held toi-et-moi, completed by a curved contour of pavé.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'ianthe-pear-cluster',
    name: 'Ianthe',
    collection: 'signature',
    metal: '18k White Gold',
    diamond: 'Pear and marquise cluster',
    carat: '[TODO] ~2.50ct total',
    image: 'pear-marquise-cluster.png',
    alt: 'Two sculptural cluster rings pairing pear and marquise lab-grown diamonds in white gold, on black marble.',
    description:
      'Pears and marquises gathered like petals — a sculptural cluster that catches light from impossible directions.',
    priceLabel: 'Price on request',
  },

  // -- Everyday --
  {
    slug: 'stella-double-huggie',
    name: 'Stella',
    collection: 'everyday',
    metal: '18k White Gold',
    diamond: 'Round brilliant, lab-grown',
    carat: '[TODO] ~1.00ct pair',
    image: 'round-double-huggie.png',
    alt: 'A pair of double-row round lab-grown diamond huggie earrings in white gold, on a dark tray against brown silk.',
    description:
      'Two neat rows of round brilliants that hug the lobe — the diamond you reach for every single day.',
    priceLabel: 'Price on request',
  },
  {
    slug: 'valentine-multi-shape-tennis',
    name: 'Valentine',
    collection: 'everyday',
    metal: '18k Yellow Gold',
    diamond: 'Fancy-shape lab-grown diamonds',
    carat: '[TODO] ~7.00ct total',
    image: 'multi-shape-tennis-bracelet.png',
    alt: 'Yellow gold tennis bracelet alternating pear, oval, emerald and marquise lab-grown diamonds, on black marble with burgundy velvet.',
    description:
      'A line of alternating fancy shapes — pear, oval, emerald, marquise — strung in warm gold. A tennis bracelet that refuses to be ordinary.',
    priceLabel: 'Price on request',
  },

  // -- For Him --
  {
    slug: 'atlas-emerald-band',
    name: 'Atlas',
    collection: 'mens',
    metal: '18k Yellow Gold',
    diamond: 'Emerald cut, lab-grown',
    carat: '[TODO] ~1.00ct',
    image: 'emerald-signet-band.png',
    alt: 'A solitaire emerald-cut lab-grown diamond set flush into a broad yellow gold band, on dark marble.',
    description:
      'A single emerald cut set low into a broad, polished band — architectural brilliance with nothing to prove.',
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
