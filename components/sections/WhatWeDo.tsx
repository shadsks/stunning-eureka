import Image from "next/image";
import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/nitex-ui";
import { SlashMark } from "@/components/icons";

function MediaPanel({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <Reveal className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-5 left-5 flex items-center gap-2.5 font-fragment text-xs text-lime">
        <SlashMark className="h-2.5 w-3.5" />
        {label}
      </div>
    </Reveal>
  );
}

export function WhatWeDo() {
  return (
    <section className="w-full bg-black px-4 py-24 sm:px-8 sm:py-32">
      <SectionLabel num="2" title="WHAT WE DO" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <RevealLines
          className="font-display display-lg text-white"
          lines={["THE NEW", "STANDARD IN", "FASHION", "SUPPLY"]}
        />
        <Reveal>
          <p className="max-w-md text-[15px] leading-relaxed text-white/80">
            As the design-driven engine for today&apos;s agile brands, NITEX
            unites trend forecasting, in-house prototyping, fit validation and
            global delivery into one seamless workflow. We focus on trending
            design, instead of the trendiest design, to help our brand partners
            succeed.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <MediaPanel
          src="/images/mux-2.webp"
          alt="NITEX Design Lab B2B shopping interface"
          label="REAL LIFE B2B SHOPPING"
        />
        <MediaPanel
          src="/images/mux-1.webp"
          alt="On-demand manufacturing — thread spools on a production line"
          label="ON DEMAND MANUFACTURING"
        />
      </div>
    </section>
  );
}
