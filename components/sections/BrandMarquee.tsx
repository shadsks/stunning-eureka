import Image from "next/image";
import { partnerLogos } from "@/content/nitex";

export function BrandMarquee() {
  const row = [...partnerLogos, ...partnerLogos];
  return (
    <section className="w-full bg-black">
      {/* N / X texture panels */}
      <div className="grid h-[42svh] min-h-[280px] grid-cols-2">
        <div className="relative overflow-hidden">
          <Image
            src="/images/df2fd426207db409441ac898248cca694e624cd6-2016x3024.jpg"
            alt="Indigo-dyed textile texture"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <span className="font-display absolute left-[-0.04em] top-1/2 -translate-y-1/2 text-lime leading-none text-[30vw] sm:text-[20vw]">
            N
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/images/5c2a7e6c45d3a6e30637a51acf6ec34698b11c6f-1958x2937.jpg"
            alt="Model leaning against a chain-link fence"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <span className="font-display absolute right-[-0.04em] top-1/2 -translate-y-1/2 text-lime leading-none text-[30vw] sm:text-[20vw]">
            X
          </span>
        </div>
      </div>

      {/* lime logo marquee */}
      <div className="overflow-hidden bg-lime py-9">
        <div className="flex w-max animate-marquee items-center gap-16 sm:gap-24">
          {row.map((src, i) => (
            <span key={i} className="relative block h-7 w-[120px] shrink-0 sm:h-8 sm:w-[150px]">
              <Image
                src={src}
                alt="Partner brand logo"
                fill
                sizes="150px"
                className="object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
