'use client';

import Cta from '@/components/ui/Cta';

/** Graceful error boundary — on-brand, with a way back. */
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden bg-noir px-6 text-center">
      <div className="vignette" />
      <div className="relative">
        <p className="eyebrow mb-6 text-champagne">Something caught the light wrong</p>
        <h1 className="font-display text-3xl text-ivory md:text-5xl">A momentary flaw in the facet.</h1>
        <p className="mx-auto mt-5 max-w-[40ch] font-body text-md font-light text-mist">
          Please try again — the collection is still here, exactly as you left it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Cta onClick={reset} variant="solid">
            Try Again
          </Cta>
          <Cta href="/" variant="ghost">
            Return Home
          </Cta>
        </div>
      </div>
    </div>
  );
}
