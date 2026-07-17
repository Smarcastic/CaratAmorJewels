import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PieceGallery from '@/components/ui/PieceGallery';
import ProductCard from '@/components/ui/ProductCard';
import Cta from '@/components/ui/Cta';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { PIECES, getPiece, getCollection, getProductImage, relatedPieces } from '@/lib/products';
import { waLink, waPieceText } from '@/lib/whatsapp';
import { certSpecValue } from '@/lib/cert';
import { BRAND } from '@/content/site';

export function generateStaticParams() {
  return PIECES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return { title: 'Piece' };
  const img = getProductImage(piece.image);
  return {
    title: piece.name,
    description: `${piece.name} — ${piece.description}`,
    openGraph: {
      title: `${piece.name} · ${BRAND.name}`,
      description: piece.description,
      images: img ? [img] : undefined,
    },
  };
}

export default async function PiecePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const collection = getCollection(piece.collection);
  const img = getProductImage(piece.image);
  const related = relatedPieces(piece, 3);

  const specs = [
    { label: 'Metal', value: piece.metal },
    { label: 'Diamond', value: piece.diamond },
    { label: 'Carat', value: piece.carat },
    { label: 'Certification', value: certSpecValue() },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: piece.name,
    description: piece.description,
    image: img ? `https://caratamorjewels.com${img}` : undefined,
    brand: { '@type': 'Brand', name: BRAND.name },
    category: collection?.name,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/OnlineOnly',
      priceCurrency: 'INR',
      price: '0',
      seller: { '@type': 'Organization', name: BRAND.name },
    },
  };

  return (
    <article className="bg-noir pt-28 pb-28 md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 font-body text-xs font-light text-mist">
            <li>
              <Link href="/collections" className="hover:text-ivory">
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/collections/${piece.collection}`} className="hover:text-ivory">
                {collection?.name}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ivory/80">{piece.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* image column */}
          <div>{img && <PieceGallery images={[img]} alt={piece.alt} />}</div>

          {/* sticky detail column */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow text-gold-dim">{collection?.eyebrow}</p>
            <h1 className="mt-5 font-display text-ivory text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.06]">
              {piece.name}
            </h1>
            <p className="measure mt-6 font-body text-md font-light leading-relaxed text-mist">{piece.description}</p>

            {/* spec table */}
            <dl className="mt-12">
              {specs.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-6 border-t border-gold-dim/25 py-5">
                  <dt className="eyebrow text-mist">{s.label}</dt>
                  <dd className="text-right font-body text-sm font-light text-ivory">{s.value}</dd>
                </div>
              ))}
              <div className="border-t border-gold-dim/25 py-5" />
            </dl>

            <p className="font-display text-2xl font-light text-champagne-soft">{piece.priceLabel}</p>

            {/* two actions only */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Cta
                href={waLink(waPieceText(piece.name, collection?.name ?? ''))}
                external
                variant="solid"
                className="flex-1"
              >
                <WhatsappGlyph size={16} stroke="currentColor" /> Enquire on WhatsApp
              </Cta>
              <Cta href="/consultation" variant="ghost" className="flex-1">
                Book a Consultation
              </Cta>
            </div>
          </div>
        </div>

        {/* related */}
        {related.length > 0 && (
          <section className="mt-32">
            <h2 className="mb-12 font-display text-3xl font-light text-ivory md:text-4xl">You may also admire</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
              {related.map((p) => (
                <ProductCard key={p.slug} piece={p} sizes="(max-width: 768px) 45vw, 30vw" />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
