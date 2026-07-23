import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import MaskedHeading from '@/components/motion/MaskedHeading';
import SectionLabel from '@/components/ui/SectionLabel';
import Ornament from '@/components/ui/Ornament';
import Cta from '@/components/ui/Cta';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { BRAND_STORY } from '@/content/site';
import { waLink } from '@/lib/whatsapp';
import { getProductImage } from '@/lib/products';

export const metadata: Metadata = {
  title: 'The Maison',
  description:
    'The story of Carat Amor Jewels — a made-to-order lab-grown diamond atelier born in Hyderabad, the city of Golconda diamonds.',
};

const ATELIER_WAY = [
  {
    n: '01',
    title: 'A conversation',
    body: 'It begins on WhatsApp or a call — your vision, your budget.',
  },
  {
    n: '02',
    title: 'Made for one',
    body: 'Grown, cut, certified and set to order. Never off a shelf.',
  },
  {
    n: '03',
    title: 'Delivered',
    body: 'Insured, to your door, anywhere in India.',
  },
];

export default function MaisonPage() {
  const portrait = getProductImage('toi-et-moi-blush.png');

  return (
    <div className="bg-noir text-ivory">
      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="vignette" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
          <SectionLabel number="—" label={BRAND_STORY.eyebrow} className="mb-8" />
          <MaskedHeading
            lines={[BRAND_STORY.headline]}
            as="h1"
            className="font-display text-ivory text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.06]"
          />
        </div>
      </section>

      {/* story longread */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 md:grid-cols-[1fr_0.8fr] md:gap-20 md:px-12">
          <div className="space-y-8">
            {BRAND_STORY.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-body text-lg font-light leading-[1.85] text-mist first-letter:font-display first-letter:text-ivory">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-burgundy-deep md:sticky md:top-28">
              {portrait && (
                <Image
                  src={portrait}
                  alt="A Carat Amor toi-et-moi ring pairing a white oval and a pink marquise diamond."
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* the atelier way — replaces any notion of a showroom */}
      <section className="relative overflow-hidden border-t border-gold-dim/25 py-24 md:py-32">
        <div className="vignette" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
          <Ornament className="mb-10" />
          <h2 className="text-center font-display text-ivory" style={{ fontSize: 'clamp(1.9rem,4vw,3.25rem)' }}>
            The atelier way.
          </h2>
          <p className="font-accent mx-auto mt-5 max-w-[40ch] text-center text-lg italic text-mist">
            From a conversation to your door.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {ATELIER_WAY.map((step) => (
              <Reveal key={step.n}>
                <div className="border-t border-gold-dim/30 pt-6">
                  <span className="eyebrow text-champagne">{step.n}</span>
                  <h3 className="mt-4 font-display text-xl text-ivory">{step.title}</h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-mist">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Cta href={waLink()} external variant="solid">
              <WhatsappGlyph size={16} stroke="currentColor" /> Start the Conversation
            </Cta>
            <Cta href="/consultation" variant="ghost">
              Book a Consultation
            </Cta>
          </div>
        </div>
      </section>
    </div>
  );
}
