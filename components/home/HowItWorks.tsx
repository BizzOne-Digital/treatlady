import { CalendarCheck, MessageCircleHeart, PartyPopper, Palette } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

const ICONS = [MessageCircleHeart, Palette, CalendarCheck, PartyPopper];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Idea to Celebration"
          subtitle="A simple, stress-free process so you can focus on enjoying your event."
        />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-rose/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {HOW_IT_WORKS.map((s, i) => {
            const I = ICONS[i];
            return (
              <li key={s.title}>
                <Reveal delay={i * 0.15} className="relative text-center">
                  <span className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-pale bg-ivory text-copper shadow-card transition-transform duration-500 hover:-translate-y-1">
                    <I size={30} strokeWidth={1.25} aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-ink">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
