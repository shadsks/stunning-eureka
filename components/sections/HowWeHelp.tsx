import { Reveal, RevealLines } from "@/components/Reveal";
import { MarkerLink, SectionLabel } from "@/components/nitex-ui";
import { helpSteps } from "@/content/nitex";

export function HowWeHelp() {
  return (
    <section className="w-full bg-black px-4 py-24 sm:px-8 sm:py-32">
      <SectionLabel num="4" title="HOW WE HELP" />
      <div className="mt-10">
        <RevealLines
          className="font-display display-lg text-lime"
          lines={["LAUNCH FASTER.", "OPERATE LEANER.", "SELL SMARTER."]}
        />
      </div>

      <div className="mt-16 grid gap-px border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
        {helpSteps.map((step) => (
          <Reveal
            key={step.n}
            className="group flex flex-col gap-4 border-b border-white/15 bg-black py-9 pr-6 transition-colors hover:bg-lime hover:text-black sm:pr-10"
          >
            <span className="font-display text-5xl text-lime transition-colors group-hover:text-black">
              {step.n}
            </span>
            <h3 className="font-fragment text-sm text-white transition-colors group-hover:text-black">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/65 transition-colors group-hover:text-black/75">
              {step.body}
            </p>
          </Reveal>
        ))}
        <Reveal className="flex flex-col justify-center gap-5 border-b border-white/15 py-9 pr-6 sm:pr-10">
          <p className="text-sm leading-relaxed text-white/80">
            See how leading brands launch faster with flexible MOQs, full-service
            support and a seamless end-to-end process—from trend forecasting to
            final delivery.
          </p>
          <div className="inline-block w-fit bg-lime px-4 py-3">
            <MarkerLink>MAKING BRANDS SUCCEED</MarkerLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
