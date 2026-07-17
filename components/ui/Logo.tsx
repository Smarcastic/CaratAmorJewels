import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/content/site';

/**
 * The real Carat Amor Jewels logo file (/public/logo.png — transparent PNG,
 * gold wordmark with the faceted-diamond "O"). Used everywhere via next/image
 * at variant-specific sizes; the transparent background lets it sit cleanly
 * on both the noir nav and the burgundy footer.
 *  - variant "wordmark": compact, for the nav bar
 *  - variant "lockup": larger, for the footer farewell
 */
export default function Logo({
  variant = 'wordmark',
  className = '',
  onClick,
}: {
  variant?: 'wordmark' | 'lockup';
  className?: string;
  onClick?: () => void;
}) {
  const isLockup = variant === 'lockup';

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${BRAND.name} — home`}
      className={`inline-block leading-none ${className}`}
    >
      <Image
        src="/logo.png"
        alt={`${BRAND.name} logo`}
        width={640}
        height={640}
        priority={isLockup}
        className={isLockup ? 'block h-auto w-[clamp(110px,15vw,180px)]' : 'block h-[42px] w-auto'}
      />
    </Link>
  );
}
