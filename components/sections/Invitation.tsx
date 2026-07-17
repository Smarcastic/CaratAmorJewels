'use client';

import Cta from '@/components/ui/Cta';
import Reveal from '@/components/motion/Reveal';
import MaskedHeading from '@/components/motion/MaskedHeading';
import Ornament from '@/components/ui/Ornament';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { HOME } from '@/content/site';
import { waLink } from '@/lib/whatsapp';

/**
 * Scene 8 — The Invitation. The only large burgundy surface on the homepage.
 * Pure typography and two invitations. Nothing else competes.
 */
export default function Invitation() {
  const { invitation: inv } = HOME;

  return (
    <section className="relative overflow-hidden bg-burgundy py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 15%, color-mix(in srgb, var(--color-champagne) 8%, transparent) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-[1000px] px-6 text-center md:px-12">
        <Ornament className="mb-12" />
        <MaskedHeading
          lines={[inv.headline]}
          as="h2"
          className="font-display text-ivory"
          lineClassName="text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.08]"
        />
        <Reveal className="mx-auto mt-8 max-w-[46ch]" delay={0.15}>
          <p className="font-body text-md font-light text-ivory/80">{inv.body}</p>
        </Reveal>
        <Reveal className="mt-14" delay={0.25}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Cta href="/consultation" variant="solid">
              {inv.ctaPrimary}
            </Cta>
            <Cta href={waLink()} external variant="ghost">
              <WhatsappGlyph size={16} stroke="currentColor" />
              {inv.ctaSecondary}
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
