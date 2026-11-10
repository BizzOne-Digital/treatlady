import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  light?: boolean;
};

export default function SectionHeading({ title, subtitle, eyebrow, align = "center", as = "h2", light }: Props) {
  const H = as;
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-copper">{eyebrow}</p>
      )}
      <div className={`flex items-center gap-5 ${center ? "justify-center" : ""}`}>
        {center && <span className="hidden h-px w-16 bg-rose/70 sm:block" aria-hidden="true" />}
        <H className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-ink"}`}>
          {title}
        </H>
        {center && <span className="hidden h-px w-16 bg-rose/70 sm:block" aria-hidden="true" />}
      </div>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{subtitle}</p>
      )}
    </div>
  );
}
