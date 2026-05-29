import Image from "next/image";
import { Reveal, RevealLines } from "@/components/Reveal";
import { MarkerLink, SectionLabel } from "@/components/nitex-ui";

export function Story() {
  return (
    <section className="relative w-full bg-paper text-black">
      <div className="relative min-h-svh w-full overflow-hidden">
        {/* background editorial image */}
        <Image
          src="/images/ad2ed937b1a767d90cdeb432397a3c2e5257a23a-1792x2140.jpg"
          alt="Model in a field with a leather bag"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-paper/10" />

        {/* eyebrow */}
        <div className="absolute left-4 top-24 sm:left-8">
          <SectionLabel num="1" title="OUR STORY" dark />
        </div>

        {/* giant display heading */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 sm:px-8">
          <RevealLines
            className="font-display display-lg text-black"
            lines={["FROM VISION", "TO GLOBAL", "IMPACT"]}
          />
        </div>

        {/* lime info card */}
        <Reveal
          variant="slide-in"
          className="absolute bottom-6 right-4 sm:right-8 w-[min(92vw,30rem)] bg-lime text-black p-7 sm:p-9"
        >
          <p className="text-sm sm:text-[15px] leading-relaxed">
            Founded with a bold mission to reinvent the fashion supply chain,
            NITEX has rapidly transformed into a multi-continent powerhouse.
          </p>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed">
            Today, our cross-functional teams work seamlessly from Dhaka to
            London, Barcelona and New York, backed by a network of certified
            factories in Bangladesh. Through proprietary tech, we deliver
            creative excellence, speed and transparency—redefining how brands
            design, sample and ship seasonal collections.
          </p>
          <div className="mt-7 flex flex-col gap-3 border-t border-black/15 pt-5">
            <MarkerLink>INSIDE NITEX</MarkerLink>
            <MarkerLink>REAL LIFE B2B SHOPPING</MarkerLink>
            <MarkerLink>ON DEMAND MANUFACTURING</MarkerLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
