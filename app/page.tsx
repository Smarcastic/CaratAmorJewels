import Intro from '@/components/sections/Intro';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Philosophy from '@/components/sections/Philosophy';
import CollectionChapters from '@/components/sections/CollectionChapters';
import Future from '@/components/sections/Future';
import HeldToLight from '@/components/sections/HeldToLight';
import Signature from '@/components/sections/Signature';
import Voices from '@/components/sections/Voices';
import Invitation from '@/components/sections/Invitation';

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Marquee />
      <Philosophy />
      <CollectionChapters />
      <Future />
      <HeldToLight />
      <Signature />
      <Voices />
      <Invitation />
    </>
  );
}
