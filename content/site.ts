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
    'Hyderabad has known diamonds for four hundred years. The mines of Golconda gave the world the Koh-i-Noor, the Hope, the Regent — stones that crossed oceans and crowned empires. We grew up in that city, hearing those stories, and wondering why their next chapter had to be written the old way.',
    'Carat Amor began, like most love stories, with a search for one ring. What we found instead was an industry that made brilliance feel complicated — opaque pricing, grades nobody explained, and stones whose journeys no one could quite account for. We decided the most romantic thing we could do was make it simple.',
    'So we chose science. Every Carat Amor diamond is grown from a single seed of carbon — the same crystal, the same fire as anything Golconda ever surrendered — then cut, certified and set by hands that have worked gold for generations. No mines. No middlemen. No stories we cannot tell you to your face.',
    'We work by conversation — on WhatsApp, on a call, over coffee if you are in Hyderabad — one piece at a time, made to order and delivered to your door. Carat means weight. Amor means love. We measure both carefully.',
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
      {
        word: 'Carbon.',
        body: 'It begins with a single seed of carbon — the same element, the same lattice that forms deep within the earth.',
      },
      {
        word: 'Pressure.',
        body: 'Under extraordinary heat and pressure, that seed grows atom by atom into a rough crystal, indistinguishable in every measure.',
      },
      {
        word: 'Brilliance.',
        body: 'Cut and polished by master hands, it releases the same fire — a diamond in every sense, grown in weeks, not aeons.',
      },
    ],
    kicker: 'Chemically, optically, physically identical to mined.',
    cta: 'Understand Lab-Grown',
  },
  signature: {
    number: '03',
    label: 'The Collection',
    headline: 'Signature pieces.',
    intro: 'A curated hand of solitaires, bridal sets and everyday brilliance — each grown, cut and set in-house.',
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
    body: 'Every Carat Amor piece is made to order and delivered to your door — begin the conversation from wherever you are.',
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
