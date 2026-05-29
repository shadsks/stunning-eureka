"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** reveal style hook: applied as the base class, `is-visible` is toggled on enter */
  variant?: "reveal" | "slide-in" | "line-reveal";
  as?: ElementType;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  variant = "reveal",
  as,
  threshold = 0.2,
  once = true,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag ref={ref} className={cn(variant, visible && "is-visible", className)}>
      {children}
    </Tag>
  );
}

/** Splits text into per-line clip-reveal spans. Pass lines as an array. */
export function RevealLines({
  lines,
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
}) {
  return (
    <Reveal variant="line-reveal" className={className} threshold={0.25}>
      {lines.map((line, i) => (
        <span key={i}>
          <span className={lineClassName}>{line}</span>
        </span>
      ))}
    </Reveal>
  );
}
