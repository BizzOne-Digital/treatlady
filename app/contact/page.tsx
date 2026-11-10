import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import QuoteForm from "@/components/contact/QuoteForm";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a custom quote from TreatLady for cakes, dessert tables and balloon decor. Call 559-681-9449 or send your event details online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Quotes"
        title={
          <>
            Let&apos;s Create Something <span className="font-script text-[1.2em] text-gradient-rose">Beautiful</span>
          </>
        }
        subtitle="Tell us about your event and we'll help bring your vision to life."
        image={IMAGES.balloons}
        alt="Blush balloon decor"
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <ContactInfo />
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
