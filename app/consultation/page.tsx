import type { Metadata } from 'next';
import ConsultationForm from '@/components/sections/ConsultationForm';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Book a Private Consultation',
  description:
    'Book a private, no-obligation consultation with Carat Amor Jewels — made-to-order lab-grown diamond jewellery from Hyderabad, delivered to your door.',
};

const EXPECT = [
  {
    n: '01',
    title: 'A conversation first',
    body: 'We begin on WhatsApp or a call — what you are dreaming of, your budget, your timeline. No counters, no pressure, no scripts.',
  },
  {
    n: '02',
    title: 'No obligation',
    body: 'Ask everything. Compare stones, metals and certificates at your own pace — there is never an expectation to decide on the day.',
  },
  {
    n: '03',
    title: 'Made and delivered',
    body: 'When you are ready, your piece is grown, cut, certified and set to order — then delivered insured to your door, anywhere in India.',
  },
];

export default function ConsultationPage() {
  return (
    <div className="relative overflow-hidden bg-noir pt-32 pb-32 text-ivory md:pt-44 md:pb-40">
      <div className="vignette" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionLabel number="—" label="Private Consultation" className="mb-8" />
        <h1 className="max-w-[16ch] font-display text-ivory" style={{ fontSize: 'clamp(2.25rem,5vw,4.5rem)', lineHeight: 1.08 }}>
          Begin the conversation.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* the one intentional light object on the site — a letter on a desk */}
          <div className="order-2 bg-porcelain p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-12 lg:order-1">
            <ConsultationForm />
          </div>

          {/* reassurance */}
          <aside className="order-1 lg:order-2">
            <h2 className="eyebrow mb-8 text-gold-dim">What to expect</h2>
            <ul className="space-y-8">
              {EXPECT.map((e) => (
                <li key={e.n} className="border-t border-gold-dim/25 pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow text-champagne">{e.n}</span>
                    <div>
                      <h3 className="font-display text-xl text-ivory">{e.title}</h3>
                      <p className="mt-1.5 font-body text-sm font-light text-mist">{e.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
