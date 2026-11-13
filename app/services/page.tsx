import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import ServiceSection from "@/components/services/ServiceSection";
import FinalCTA from "@/components/home/FinalCTA";
import { IMAGES, PLANNING_INFO, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Pricing - Cakes, Dessert Tables, Balloon Decor",
  description:
    "Custom cakes from $100, dessert displays with balloon decor from $700 and balloon decor from $500. View TreatLady services, booking notice and delivery details.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Beautiful Details for <span className="font-script text-[1.2em] text-gradient-rose">Every Celebration</span>
          </>
        }
        subtitle="Custom cakes, styled dessert tables and balloon decor, available individually or as a complete event package."
        image={IMAGES.servicesHero}
        alt="Decorated celebration cake"
      />

      <div className="divide-y divide-pale/70">
        {SERVICES.map((s, i) => (
          <ServiceSection key={s.key} service={s} reverse={i % 2 === 1} />
        ))}
      </div>

      <section className="bg-blush/60 py-20 sm:py-24" aria-labelledby="planning">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            title={<span id="planning">Planning Information</span>}
            subtitle="A few details to help your order go smoothly from booking to pickup or delivery."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANNING_INFO.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.06} className="flex h-full gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-pale/60">
                  <Icon name={p.icon} size={30} className="shrink-0 text-copper" />
                  <div>
                    <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA title="Request a Custom Quote" text="Share your date, theme and guest count and we will put together a tailored quote for your event." />
    </>
  );
}
