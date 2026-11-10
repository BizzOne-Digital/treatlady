import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import FinalCTA from "@/components/home/FinalCTA";
import { GALLERY, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery - Cakes, Treats & Event Setups",
  description: "Browse real TreatLady custom cakes, dessert tables, treats and balloon decor from recent celebrations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Our Work, <span className="font-script text-[1.2em] text-gradient-rose">Our Joy</span>
          </>
        }
        subtitle="Real cakes, treats and setups made for real celebrations."
        image={IMAGES.desserts}
        alt="Dessert table"
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid items={GALLERY} />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
