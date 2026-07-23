import type { Metadata } from 'next';
import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/motion/Reveal';
import MaskedHeading from '@/components/motion/MaskedHeading';
import SectionLabel from '@/components/ui/SectionLabel';
import Cta from '@/components/ui/Cta';
import { LAB_GROWN } from '@/content/labGrown';
import { certBody } from '@/lib/cert';

export const metadata: Metadata = {
  title: 'Lab-Grown Diamonds',
  description:
    'What lab-grown diamonds are, how they are grown, and why they are identical to mined diamonds by every measure. From the Carat Amor Jewels atelier, Hyderabad.',
};

const STAGE_ICONS = [
  // Seed
  <svg key="s" viewBox="0 0 64 64" fill="none" stroke="var(--color-champagne)" strokeWidth="1.2" aria-hidden>
    <path d="M32 14l10 12-10 24-10-24z" />
    <line x1="22" y1="26" x2="42" y2="26" />
  </svg>,
  // Plasma
  <svg key="p" viewBox="0 0 64 64" fill="none" stroke="var(--color-champagne)" strokeWidth="1.2" aria-hidden>
    <circle cx="32" cy="32" r="6" />
    <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
  </svg>,
  // Growth
  <svg key="g" viewBox="0 0 64 64" fill="none" stroke="var(--color-champagne)" strokeWidth="1.2" aria-hidden>
    <path d="M32 12l14 14-14 26-14-26z" />
    <path d="M18 26h28M32 12v40" opacity="0.5" />
  </svg>,
  // Cut
  <svg key="c" viewBox="0 0 64 64" fill="none" stroke="var(--color-champagne)" strokeWidth="1.2" aria-hidden>
    <path d="M20 20h24l8 10-20 24-20-24z" />
    <path d="M12 30h40M28 20l-4 10M36 20l4 10" opacity="0.6" />
  </svg>,
];

function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: LAB_GROWN.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function LabGrownPage() {
  const { hero, timeline, comparison, faqs } = LAB_GROWN;

  return (
    <div className="bg-noir text-ivory">
      <FaqJsonLd />

      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="vignette" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
          <SectionLabel number="—" label={hero.eyebrow} className="mb-8" />
          <MaskedHeading
            lines={[...hero.headline]}
            as="h1"
            className="font-display text-ivory text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.06]"
          />
          <Reveal className="mt-8" delay={0.15}>
            <p className="measure font-body text-lg font-light text-mist">{hero.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* timeline */}
      <section className="border-t border-champagne/10 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.stage} delay={i * 0.08}>
                <div className="flex flex-col">
                  <div className="mb-6 h-14 w-14">{STAGE_ICONS[i]}</div>
                  <span className="eyebrow mb-3 text-champagne">
                    0{i + 1} — {t.stage}
                  </span>
                  <p className="font-body text-md font-light text-mist">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* comparison */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <MaskedHeading
            lines={[comparison.title]}
            as="h2"
            className="mb-14 font-display text-ivory text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.1]"
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gold-dim/40">
                  <th className="py-5 pr-4 font-display text-[0.66rem] uppercase tracking-[0.24em] text-mist">
                    Attribute
                  </th>
                  <th className="py-5 px-4 font-display text-[0.66rem] uppercase tracking-[0.24em] text-mist">
                    Mined
                  </th>
                  <th className="py-5 pl-4 font-display text-[0.66rem] uppercase tracking-[0.24em] text-champagne">
                    Lab-Grown
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r) => (
                  <tr key={r.attr} className="border-b border-gold-dim/20">
                    <td className="py-5 pr-4 font-body text-sm font-normal text-ivory">{r.attr}</td>
                    <td className="py-5 px-4 font-body text-sm font-light text-mist">{r.mined}</td>
                    <td className="py-5 pl-4 font-body text-sm font-light text-ivory">{r.lab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* certification explainer */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-12">
          <Reveal>
            <SectionLabel number="—" label="Certification" className="mb-6" />
            <h2 className="font-display text-3xl font-light text-ivory md:text-4xl">Certified, every one.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure font-body text-md font-light text-mist">
              Each diamond is independently graded
              {certBody() ? (
                <>
                  {' '}by <span className="text-champagne">{certBody()}</span>
                </>
              ) : null}{' '}
              and arrives with its own certificate — cut, colour, clarity and carat, documented. Your
              assurance, in writing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-champagne/10 py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <SectionLabel number="—" label="Questions" className="mb-12" />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-burgundy py-28 text-center text-ivory md:py-36">
        <div className="mx-auto max-w-[800px] px-6 md:px-12">
          <MaskedHeading
            lines={['See it for yourself.']}
            as="h2"
            className="font-display font-light text-ivory text-[clamp(2rem,5vw,4rem)]"
          />
          <Reveal className="mt-10" delay={0.15}>
            <Cta href="/consultation" variant="solid">
              Book a Private Consultation
            </Cta>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
