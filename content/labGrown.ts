/* Content for the /lab-grown education page. Factual, confident, not defensive. */

export const LAB_GROWN = {
  hero: {
    eyebrow: 'The Science',
    headline: ['Real diamonds.', 'Grown, not mined.'],
    intro:
      'Same carbon crystal, same fire, same hardness. The only difference is origin — weeks in a lab, not a billion years underground.',
  },
  timeline: [
    { stage: 'Seed', body: 'A sliver of diamond, placed in a growth chamber.' },
    { stage: 'Plasma', body: 'Carbon gases energised into glowing plasma.' },
    { stage: 'Growth', body: 'Atoms bond to the seed, layer by layer.' },
    { stage: 'Cut', body: 'Cleaved, cut, polished — then certified.' },
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
      a: 'Yes — identical to mined diamonds in every way. Not simulants like cubic zirconia or moissanite.',
    },
    {
      q: 'Will anyone be able to tell the difference?',
      a: 'Not by eye or loupe. Only lab equipment can distinguish origin — and every stone is certified.',
    },
    {
      q: 'Are they graded the same way?',
      a: 'Yes — the same 4Cs, by independent labs, with a certificate for each stone.',
    },
    {
      q: 'Will it last?',
      a: 'A diamond is the hardest material known. It will not cloud, scratch or fade.',
    },
    {
      q: 'Why choose lab-grown?',
      a: 'The same brilliance, a lighter footprint — often a larger stone for the same investment.',
    },
    {
      q: 'How do I care for it?',
      a: 'Warm water, mild soap, a soft brush. And we are always a message away.',
    },
  ],
} as const;
