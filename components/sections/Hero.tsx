import Image from "next/image";
import { Pill } from "@/components/nitex-ui";

export function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      {/* split image panels */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <Image
            src="/images/0265bf6430889d8accd740f80281e60a55ff1db9-1920x2400.jpg"
            alt="Model in a white bucket hat against a blue sky"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/0a5607f6281ac82775774b4d87b61332ee5b0832-2143x2679.jpg"
            alt="Indigo-dyed fabric drying"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* giant N / X */}
      <span className="font-display pointer-events-none absolute left-[-0.06em] top-1/2 -translate-y-1/2 text-lime leading-none text-[34vw] sm:text-[26vw]">
        N
      </span>
      <span className="font-display pointer-events-none absolute right-[-0.06em] top-1/2 -translate-y-1/2 text-lime leading-none text-[34vw] sm:text-[26vw]">
        X
      </span>

      {/* center copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="max-w-xl text-balance text-lime text-base sm:text-lg md:text-xl">
          We power real-time fashion with exclusive, ready-to-buy designs—helping
          brands move faster, stay on trend, and grow without compromise.
        </p>
        <div className="mt-6">
          <Pill variant="lime">INSIDE NITEX</Pill>
        </div>
      </div>
    </section>
  );
}
