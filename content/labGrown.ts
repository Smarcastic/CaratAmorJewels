/* Content for the /lab-grown education page. Factual, confident, not defensive. */

export const LAB_GROWN = {
  hero: {
    eyebrow: 'The Science',
    headline: ['Real diamonds.', 'Grown, not mined.'],
    intro:
      'A lab-grown diamond is a diamond — the same carbon crystal, the same fire, the same hardness. The only difference is its origin: weeks in a laboratory, rather than a billion years underground.',
  },
  timeline: [
    {
      stage: 'Seed',
      body: 'It starts with a thin sliver of diamond — a seed crystal — placed inside a growth chamber.',
    },
    {
      stage: 'Plasma',
      body: 'Carbon-rich gases are energised into a glowing plasma, releasing pure carbon atoms.',
    },
    {
      stage: 'Growth',
      body: 'Layer by layer, those atoms bond to the seed in the same cubic lattice as a mined diamond.',
    },
    {
      stage: 'Cut',
      body: 'The rough crystal is cleaved, cut and polished by hand — then graded and certified.',
    },
  ],
  comparison: {
    title: 'Identical by every measure.',
    rows: [
      { attr: 'Composition', mined: 'Crystalline carbon', lab: 'Crystalline carbon' },
      { attr: 'Hardness (Mohs)', mined: '10', lab: '10' },
      { attr: 'Brilliance & fire', mined: 'Full', lab: 'Full' },
      { attr: 'Certification', mined: 'Independently graded', lab: 'Independently graded' },
      { attr: 'Origin', mined: 'Mined over aeons', lab: 'Grown in weeks' },
      { attr: 'Footprint', mined: 'Land & earth disturbed', lab: 'Dramatically lighter' },
    ],
  },
  faqs: [
    {
      q: 'Are lab-grown diamonds real diamonds?',
      a: 'Yes. They are chemically, physically and optically identical to mined diamonds — pure crystallised carbon. They are not simulants like cubic zirconia or moissanite.',
    },
    {
      q: 'Will anyone be able to tell the difference?',
      a: 'Not by eye, and not with a jeweller’s loupe. Only specialised laboratory equipment can distinguish origin, and every stone is certified accordingly.',
    },
    {
      q: 'Are they graded the same way?',
      a: 'Yes — on the same 4Cs (cut, colour, clarity, carat) by independent laboratories, and each of our stones ships with its own certificate.',
    },
    {
      q: 'Do lab-grown diamonds hold their beauty over time?',
      a: 'A diamond is the hardest natural material known. A lab-grown diamond shares that hardness and will not cloud, scratch or fade with wear.',
    },
    {
      q: 'Why choose lab-grown?',
      a: 'The same brilliance and permanence, with a lighter conscience and a lighter footprint — and often a larger, finer stone for the same investment.',
    },
    {
      q: 'How do I care for my piece?',
      a: 'Warm water, a little mild soap and a soft brush keep it brilliant. And we are always one message away if your piece ever needs professional care.',
    },
  ],
} as const;
