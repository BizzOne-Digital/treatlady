import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import Stars from "@/components/shared/Stars";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import FinalCTA from "@/components/home/FinalCTA";
import { IMAGES, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description: "Read what clients say about TreatLady custom cakes, dessert tables and balloon decor for weddings, birthdays and showers.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Sweet Words From <span className="font-script text-[1.2em] text-gradient-rose">Our Clients</span>
          </>
        }
        subtitle="Every review comes from a celebration we were honored to be part of."
        image={IMAGES.party}
        alt="Elegant party decor"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col items-center gap-2 text-center">
            <Stars />
            <p className="text-sm text-muted">Rated 5 stars by our clients</p>
          </div>
          <ul className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {TESTIMONIALS.map((t, i) => (
              <li key={t.name + i} className="mb-6 break-inside-avoid">
                <Reveal delay={(i % 3) * 0.08}>
                  <TestimonialCard {...t} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
