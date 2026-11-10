import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { GALLERY } from "@/lib/constants";

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real Events"
          title="From Our Kitchen & Events"
          subtitle="A peek at recent cakes, treats and setups created for our clients."
        />
        <div className="mt-12">
          <GalleryGrid items={GALLERY.slice(0, 8)} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/gallery" variant="outline" size="sm">
            View Full Gallery <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
