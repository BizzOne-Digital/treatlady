import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import { IMAGES, PACKAGE_POINTS } from "@/lib/constants";

export default function PackageHighlight() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-rose/20 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Image
              src={IMAGES.servicesHero}
              alt="Full event setup with cake, dessert table and balloon decor"
              fill
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-copper">
              Most Loved
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">Full Event Package</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            One Vision, <span className="font-script text-[1.25em] text-gradient-rose">Perfectly Styled</span>
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-white/75">
            Combine your cake, dessert table and balloon decor into one coordinated look. One point of contact, one
            color story, and a setup that is ready before your guests walk in.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {PACKAGE_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-white/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/20 text-rose">
                  <Check size={14} strokeWidth={2} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Plan My Event <ArrowRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </Button>
            <Button href="/services" variant="light">
              View All Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
