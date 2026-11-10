import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import PricingCard from "@/components/services/PricingCard";
import { IMAGES } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr_0.95fr] lg:gap-10">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-blush" aria-hidden="true" />
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.5rem] rounded-tl-[6rem] shadow-soft">
            <Image
              src={IMAGES.owner}
              alt="TreatLady decorating a buttercream cake with fresh roses"
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="text-center lg:text-left">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            About <span className="font-script text-[1.3em] text-gradient-rose">TreatLady</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Hi, I&apos;m Leticia, the face behind TreatLady. I create custom cakes, beautiful dessert tables, and balloon
            decor for all kinds of celebrations &mdash; from birthdays and baby showers to weddings and special events.
          </p>
          <Button href="/about" size="sm" className="mt-8">
            Learn More <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={0.2}>
          <PricingCard />
        </Reveal>
      </div>
    </section>
  );
}
