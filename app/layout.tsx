import type { Metadata } from 'next';
import './globals.css';
import { marcellus, cormorant, hanken } from '@/lib/fonts';
import { BRAND, CONTACT } from '@/content/site';
import MotionProvider from '@/components/motion/MotionProvider';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CustomCursor from '@/components/motion/CustomCursor';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import FloatingWhatsapp from '@/components/ui/FloatingWhatsapp';
import Grain from '@/components/ui/Grain';

const SITE_URL = 'https://caratamorjewels.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Lab-Grown Diamond Jewellery, Hyderabad`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    'Carat Amor Jewels — a lab-grown diamond atelier born in Hyderabad, the city of Golconda diamonds. Made-to-order solitaires, bridal sets and everyday brilliance, delivered to your door. Enquire on WhatsApp or book a private consultation.',
  keywords: [
    'lab grown diamond jewellery Hyderabad',
    'lab grown engagement rings Hyderabad',
    'lab grown diamonds made to order',
    'Carat Amor Jewels',
  ],
  openGraph: {
    type: 'website',
    title: `${BRAND.name} — Lab-Grown Diamond Jewellery`,
    description: 'A lab-grown diamond atelier from Hyderabad. Diamonds, reimagined with love.',
    siteName: BRAND.name,
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    description:
      'Made-to-order lab-grown diamond jewellery atelier from Hyderabad, India. Private consultations over WhatsApp, insured delivery across India.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/products/oval-halo-bridal-set.png`,
    areaServed: 'IN',
    sameAs: [CONTACT.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${cormorant.variable} ${hanken.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-[2px] focus:bg-champagne focus:px-4 focus:py-2 focus:font-display focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-noir"
        >
          Skip to content
        </a>
        <JsonLd />
        <MotionProvider>
          <SmoothScroll />
          <CustomCursor />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <FloatingWhatsapp />
          <Grain />
        </MotionProvider>
      </body>
    </html>
  );
}
