import { Pill } from "@/components/nitex-ui";
import { SlashMark } from "@/components/icons";

const navLinks = ["JOIN US", "MEET NITEX", "CONTACT", "BLOG", "LOGIN"];

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 pb-8 pt-20 sm:px-8">
      <div className="flex flex-col gap-10 border-t border-white/15 pt-12 lg:flex-row lg:items-start lg:justify-between">
        <nav className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="group inline-flex w-fit items-center gap-2.5 font-fragment text-sm text-white transition-colors hover:text-lime"
            >
              <SlashMark className="h-2.5 w-3.5 text-lime opacity-0 transition-opacity group-hover:opacity-100" />
              {l}
            </a>
          ))}
        </nav>
        <Pill variant="lime">GET STARTED</Pill>
      </div>

      {/* giant wordmark */}
      <div className="pointer-events-none mt-16 overflow-hidden">
        <span className="font-display block text-lime leading-[0.8] text-[26vw]">
          NITEX
        </span>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 font-fragment text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2025 NITEX INC. ALL RIGHTS RESERVED.</span>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#" className="hover:text-lime transition-colors">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:text-lime transition-colors">
            TERMS &amp; CONDITIONS
          </a>
          <span className="text-lime">[100%]</span>
        </div>
      </div>
    </footer>
  );
}
