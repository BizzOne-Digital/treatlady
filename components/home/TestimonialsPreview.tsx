import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsPreview() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-24">
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-pale/60 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pale/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="What Our Clients Say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/testimonials" variant="outline" size="sm">
            Read More Reviews <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
