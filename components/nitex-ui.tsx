import { cn } from "@/lib/utils";
import { SlashMark } from "@/components/icons";

/** Bordered uppercase mono pill (e.g. INSIDE NITEX, GET STARTED). */
export function Pill({
  children,
  variant = "outline",
  className,
}: {
  children: React.ReactNode;
  variant?: "outline" | "lime" | "dark";
  className?: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "font-fragment text-[11px] sm:text-xs px-4 py-2.5 border transition-colors duration-300 cursor-pointer",
        variant === "outline" &&
          "border-white/30 text-white hover:bg-white hover:text-black",
        variant === "lime" &&
          "border-lime bg-lime text-black hover:bg-black hover:text-lime",
        variant === "dark" &&
          "border-black/20 bg-black text-lime hover:bg-lime hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
}

/** ◢ LABEL link used inside the lime info cards. */
export function MarkerLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={cn(
        "group inline-flex items-center gap-2.5 font-fragment text-xs text-black",
        className
      )}
    >
      <SlashMark className="h-2.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      <span className="border-b border-transparent group-hover:border-black/70 transition-colors">
        {children}
      </span>
    </a>
  );
}

/** [0X] + TITLE eyebrow used at the top of each numbered section. */
export function SectionLabel({
  num,
  title,
  dark = false,
}: {
  num: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-fragment text-[11px] sm:text-xs",
        dark ? "text-black/70" : "text-white/60"
      )}
    >
      <span className={dark ? "text-black" : "text-lime"}>[{num}]</span>
      <span>{title}</span>
    </div>
  );
}
