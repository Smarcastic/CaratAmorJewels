import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import LightSweep from '@/components/motion/LightSweep';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { BRAND, CONTACT, NAV_LINKS } from '@/content/site';
import { waLink } from '@/lib/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold-dim/20 bg-noir pt-28 pb-10">
      <div className="vignette" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Farewell — full lockup with one last light sweep */}
        <div className="flex flex-col items-center text-center">
          <LightSweep trigger="inview" as="div">
            <Logo variant="lockup" />
          </LightSweep>
          <p className="font-accent mt-6 max-w-md text-xl italic text-mist">
            Grown by science. Chosen by love.
          </p>
        </div>

        <hr className="rule-gold my-16" />

        {/* Four quiet columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <div>
            <h3 className="eyebrow mb-5 text-champagne">Explore</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm font-light text-mist transition-colors hover:text-ivory">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/consultation" className="font-body text-sm font-light text-mist transition-colors hover:text-ivory">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-champagne">The Maison</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/maison" className="font-body text-sm font-light text-mist transition-colors hover:text-ivory">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/lab-grown" className="font-body text-sm font-light text-mist transition-colors hover:text-ivory">
                  Lab-Grown Diamonds
                </Link>
              </li>
              <li>
                <Link href="/collections" className="font-body text-sm font-light text-mist transition-colors hover:text-ivory">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-champagne">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-light text-mist transition-colors hover:text-ivory"
                >
                  <WhatsappGlyph size={16} stroke="currentColor" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-light text-mist transition-colors hover:text-ivory"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-body text-sm font-light text-mist transition-colors hover:text-ivory"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule-gold mt-16 mb-6" />

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="font-body text-xs font-light text-mist/70">
            © {year} {BRAND.name} · {BRAND.city} · Made to order, delivered across India
          </p>
          <p className="font-body text-xs font-light text-mist/50">
            {CONTACT.creditUrl ? (
              <a href={CONTACT.creditUrl} target="_blank" rel="noopener noreferrer" className="hover:text-mist">
                Crafted by Lumora
              </a>
            ) : (
              'Crafted by Lumora'
            )}
          </p>
        </div>
      </div>

      {/* watermark — the house name engraved into the page's edge */}
      <div aria-hidden className="pointer-events-none relative mt-14 select-none overflow-hidden">
        <p
          className="ghost-num whitespace-nowrap text-center uppercase"
          style={{ fontSize: 'clamp(4rem, 13vw, 12rem)', letterSpacing: '0.14em', marginBottom: '-0.32em', opacity: 0.5 }}
        >
          Carat Amor
        </p>
      </div>
    </footer>
  );
}
