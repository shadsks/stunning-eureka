import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Believe } from "@/components/sections/Believe";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { YourNeeds } from "@/components/sections/YourNeeds";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <WhatWeDo />
        <Believe />
        <BrandMarquee />
        <HowWeHelp />
        <YourNeeds />
      </main>
      <Footer />
    </>
  );
}
