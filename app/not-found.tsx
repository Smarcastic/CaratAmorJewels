import Image from 'next/image';
import Cta from '@/components/ui/Cta';
import { BRAND } from '@/content/site';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden bg-noir px-6 text-center">
      <div className="vignette" />
      <div className="relative">
        <Image
          src="/logo.png"
          alt={`${BRAND.name} logo`}
          width={640}
          height={640}
          className="mx-auto mb-10 h-auto w-[120px] opacity-90"
        />
        <p className="eyebrow mb-6 text-champagne">Page not found</p>
        <h1 className="font-display text-3xl text-ivory md:text-5xl">This path holds no light.</h1>
        <p className="mx-auto mt-5 max-w-[40ch] font-body text-md font-light text-mist">
          The page you were looking for isn’t here — but the collection is only a step away.
        </p>
        <div className="mt-10">
          <Cta href="/" variant="ghost">
            Return Home
          </Cta>
        </div>
      </div>
    </div>
  );
}
