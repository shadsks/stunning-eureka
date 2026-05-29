import { Reveal, RevealLines } from "@/components/Reveal";
import { Pill, SectionLabel } from "@/components/nitex-ui";
import { needColumns } from "@/content/nitex";

export function YourNeeds() {
  return (
    <section className="w-full bg-black px-4 py-24 sm:px-8 sm:py-32">
      <SectionLabel num="5" title="YOUR NEEDS" />
      <div className="mt-10">
        <RevealLines
          className="font-display display-lg text-white"
          lines={["LET'S BUILD THE", "FUTURE OF FASHION,", "TOGETHER"]}
        />
      </div>

      <div className="mt-16 grid gap-px border-t border-white/15 md:grid-cols-3">
        {needColumns.map((col) => (
          <Reveal
            key={col.label}
            className="flex flex-col gap-5 border-b border-white/15 py-9 pr-6 sm:pr-10"
          >
            <span className="font-fragment text-xs text-lime">{col.label}</span>
            <p className="flex-1 text-sm leading-relaxed text-white/75">
              {col.body}
            </p>
            <div>
              <Pill variant="outline">{col.cta}</Pill>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
