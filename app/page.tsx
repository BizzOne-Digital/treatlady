import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import EventMarquee from "@/components/home/EventMarquee";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import AboutPreview from "@/components/home/AboutPreview";
import PackageHighlight from "@/components/home/PackageHighlight";
import PolicyStrip from "@/components/home/PolicyStrip";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: "TreatLady | Custom Cakes, Dessert Tables & Balloon Decor" },
  description:
    "TreatLady creates custom cakes, elegant dessert tables and balloon decor for weddings, birthdays and special events.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <EventMarquee />
      <ServicesPreview />
      <HowItWorks />
      <AboutPreview />
      <PackageHighlight />
      <PolicyStrip />
      <GalleryPreview />
      <TestimonialsPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
