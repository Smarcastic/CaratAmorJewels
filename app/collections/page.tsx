import type { Metadata } from 'next';
import FilterableCollections from '@/components/sections/FilterableCollections';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Explore the Carat Amor Jewels collections — solitaires, bridal sets, signature pieces and everyday brilliance in lab-grown diamonds, Hyderabad.',
};

export default function CollectionsPage() {
  return (
    <div className="bg-noir pb-32 text-ivory">
      {/* banner */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="vignette" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
          <SectionLabel number="—" label="The Collections" className="mb-7" />
          <h1
            className="max-w-[18ch] font-display text-ivory"
            style={{ fontSize: 'clamp(2.25rem,5vw,4.5rem)', lineHeight: 1.08 }}
          >
            Grown, cut and set in-house.
          </h1>
          <p className="font-accent mt-6 max-w-[40ch] text-lg italic text-mist">
            From a seed of carbon to your hands.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FilterableCollections />
      </div>
    </div>
  );
}
