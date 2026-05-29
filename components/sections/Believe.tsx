import Image from "next/image";
import { Reveal, RevealLines } from "@/components/Reveal";
import { MarkerLink, SectionLabel } from "@/components/nitex-ui";

export function Believe() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Image
        src="/images/60a6b81f5082c157493af02f17589f6d6db5c3d4-2731x4096.jpg"
        alt="Motion-blurred figure in motion"
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative px-4 py-28 sm:px-8 sm:py-36">
        <SectionLabel num="3" title="WHAT WE BELIEVE IN NITEX" />
        <div className="mt-10">
          <RevealLines
            className="font-display display-lg text-white"
            lines={["FASHION MOVES", "FAST, SO", "SHOULD YOU"]}
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_28rem] lg:items-end">
          <Reveal className="max-w-xl space-y-5 text-[15px] leading-relaxed text-white/85">
            <p>
              Traditional fashion supply chains can&apos;t keep pace with
              today&apos;s market demands—slowing innovation, inflating costs and
              missing trends.
            </p>
            <p>
              At NITEX, we power brands with a design-led, tech-enabled supply
              chain. Whether you prioritize speed, margin or flexibility, our
              end-to-end platform and expert teams give you the agility and
              control to win—season after season.
            </p>
          </Reveal>
          <Reveal variant="slide-in" className="bg-lime p-7 text-black sm:p-8">
            <p className="font-display text-2xl leading-tight">
              A DESIGN-LED, TECH-ENABLED SUPPLY CHAIN.
            </p>
            <div className="mt-6 border-t border-black/15 pt-5">
              <MarkerLink>MAKING BRANDS SUCCEED</MarkerLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
