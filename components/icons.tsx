import { cn } from "@/lib/utils";

/** The NITEX double-slash mark + wordmark used in the header/footer. */
export function NitexLogo({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 select-none", className)}
      style={{ color }}
    >
      <SlashMark className="h-[0.7em] w-[0.95em]" />
      <span className="font-display text-[1.05em] leading-none tracking-[-0.04em]">
        NITEX
      </span>
    </span>
  );
}

/** Small leaning parallelogram used as the logo glyph and as a bullet before links. */
export function SlashMark({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      fill={color}
      aria-hidden="true"
    >
      <polygon points="6,0 24,0 18,16 0,16" />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
