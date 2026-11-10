import { Plus } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl bg-white px-6 shadow-[0_2px_20px_-12px_rgba(185,104,85,0.35)] ring-1 ring-pale/70 transition open:ring-rose/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={20}
                    strokeWidth={1.25}
                    className="shrink-0 text-copper transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
