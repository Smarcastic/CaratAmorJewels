import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import Reveal from '@/components/motion/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { COLLECTIONS, getCollection, piecesByCollection } from '@/lib/products';
import type { CollectionSlug } from '@/content/products';

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: 'Collection' };
  return {
    title: collection.name,
    description: `${collection.name} — ${collection.mood}`,
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const pieces = piecesByCollection(slug as CollectionSlug);

  return (
    <div className="bg-noir pb-32 text-ivory">
      {/* banner */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="vignette" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
          <SectionLabel number="—" label={collection.eyebrow} className="mb-7" />
          <h1 className="font-display text-ivory" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)', lineHeight: 1.05 }}>
            {collection.name}
          </h1>
          <p className="font-accent mt-6 max-w-[50ch] text-lg italic text-mist">{collection.mood}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* collection switcher */}
        <nav className="mb-16 flex flex-wrap gap-x-9 gap-y-3 border-b border-gold-dim/25 pb-6">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              aria-current={c.slug === slug ? 'page' : undefined}
              className={`font-display text-[0.72rem] uppercase tracking-[0.26em] transition-colors ${
                c.slug === slug ? 'text-champagne' : 'text-mist/70 hover:text-ivory'
              }`}
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
          {pieces.map((p) => (
            <Reveal key={p.slug}>
              <ProductCard piece={p} sizes="(max-width: 640px) 100vw, 45vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
