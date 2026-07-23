/* ============================================================
   SITE CONTENT & CONFIG — single source for copy + real-world data.
   Values marked [TODO] are owner-supplied facts that must NOT be
   invented. Replace them in this file only; they flow everywhere.
   ============================================================ */

export const BRAND = {
  name: 'Carat Amor Jewels',
  shortName: 'Carat Amor',
  tagline: 'Diamonds, reimagined with love.',
  city: 'Hyderabad',
  country: 'India',
} as const;

// -- Owner-supplied facts. There is NO physical showroom — Carat Amor is a
//    made-to-order atelier working by conversation (WhatsApp / call). --
export const CONTACT = {
  // WhatsApp number in full international format, digits only (no +, spaces or dashes).
  whatsappNumber: '918008331188',
  whatsappDisplay: '+91 80083 31188',
  email: 'smaranreddyd@gmail.com',
  addressLocality: 'Hyderabad',
  addressRegion: 'Telangana',
  // Confirmed by owner:
  instagram: 'https://www.instagram.com/caratamorjewels/',
  instagramHandle: 'caratamorjewels',
  facebook: '[TODO: Facebook URL — optional]',
  // Certification body used across the maison (IGI / GIA / SGL).
  certificationBody: '[TODO: IGI / GIA / SGL]',
  // Studio credit in footer (optional).
  creditUrl: '',
} as const;

// The house story. Written for the brand (owner asked for it) — rooted in
// Hyderabad's real diamond history, honest about being an atelier, not a store.
export const BRAND_STORY = {
  eyebrow: 'The Maison',
  headline: 'Born in the city of diamonds.',
  body: [
    'Hyderabad has known diamonds for four hundred years — Golconda gave the world the Koh-i-Noor. We grew up on those stories, and wondered why the next chapter had to be written the old way.',
    'So we chose science. Every stone is grown from a single seed of carbon — the same fire, cut and set by hands that have worked gold for generations. No mines. No middlemen.',
    'We work by conversation, one piece at a time, delivered to your door. Carat means weight. Amor means love. We measure both carefully.',
  ],
} as const;

// Homepage copy — kept out of components entirely.
export const HOME = {
  hero: {
    eyebrow: 'Hyderabad · Lab-Grown Atelier',
    headlineLines: ['Diamonds,', 'reimagined', 'with love.'],
    cta: 'Discover the Collection',
  },
  philosophy: {
    number: '01',
    label: 'The Maison',
    // "light" receives the gold LightSweep on reveal.
    quoteBefore: 'Every diamond we grow carries the same fire, the same ',
    quoteKeyword: 'light',
    quoteAfter: ', and a lighter conscience.',
  },
  future: {
    number: '02',
    label: 'The Science',
    panels: [
      { word: 'Carbon.', body: 'A single seed, the same element the earth uses.' },
      { word: 'Pressure.', body: 'Grown atom by atom into a rough crystal.' },
      { word: 'Brilliance.', body: 'Cut and polished — a diamond in every sense.' },
    ],
    kicker: 'Identical to mined, by every measure.',
    cta: 'Understand Lab-Grown',
  },
  signature: {
    number: '03',
    label: 'The Collection',
    headline: 'Signature pieces.',
    intro: 'Solitaires, bridal sets and everyday brilliance — grown and set in-house.',
  },
  craft: {
    number: '04',
    label: 'The Craft',
    headline: 'From seed to setting.',
    steps: [
      {
        n: '01',
        title: 'Grown',
        body: 'Each stone is grown in our partner atelier over several weeks, then graded for cut, colour and clarity.',
      },
      {
        n: '02',
        title: 'Cut',
        body: 'A master cutter shapes the rough by hand, coaxing maximum fire from every facet before it is certified.',
      },
      {
        n: '03',
        title: 'Set',
        body: 'The finished diamond is hand-set into recycled gold or platinum, finished, and readied for its owner.',
      },
    ],
  },
  heldToLight: {
    number: '05',
    label: 'Held to the Light',
    line: 'Some things have to be held to be believed.',
    cta: 'Book a Private Consultation',
  },
  invitation: {
    headline: 'Your piece is waiting.',
    body: 'Made to order, delivered to your door.',
    ctaPrimary: 'Book a Private Consultation',
    ctaSecondary: 'Enquire on WhatsApp',
  },
} as const;

// Global navigation.
export const NAV_LINKS = [
  { label: 'Collections', href: '/collections' },
  { label: 'Lab-Grown', href: '/lab-grown' },
  { label: 'Maison', href: '/maison' },
] as const;

// Default WhatsApp message when no product context is present.
export const WHATSAPP_DEFAULT_TEXT =
  "Hello Carat Amor, I'd love to learn more about your pieces.";
