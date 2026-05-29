"use client";

import { useEffect, useState } from "react";
import { NitexLogo } from "@/components/icons";

export function Header() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const section = Math.min(5, Math.max(1, Math.ceil(progress * 5) || 1));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between gap-3 p-3 sm:p-4">
      <a href="#top" className="text-white mix-blend-difference">
        <NitexLogo className="text-base sm:text-lg" />
      </a>

      <div className="flex items-stretch gap-2 sm:gap-3">
        {/* MEET NITEX + scroll progress bar */}
        <div className="relative hidden sm:block w-[260px] md:w-[360px] overflow-hidden border border-white/40 bg-black/30 backdrop-blur-sm">
          <span
            className="absolute inset-y-0 left-0 bg-lime transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
            aria-hidden="true"
          />
          <span className="relative flex items-center justify-between px-4 py-2.5 font-fragment text-[11px] md:text-xs mix-blend-difference text-white">
            <span>MEET NITEX</span>
            <span>[0{section}]</span>
          </span>
        </div>

        <button
          type="button"
          className="font-fragment text-[11px] sm:text-xs border border-white/40 bg-white text-black px-4 py-2.5 transition-colors duration-300 hover:bg-lime"
        >
          GET STARTED
        </button>
      </div>
    </header>
  );
}
