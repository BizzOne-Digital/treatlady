import Image from "next/image";
import { CalendarHeart, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import { BUSINESS, IMAGES, tel } from "@/lib/constants";

type Props = { title?: string; text?: string };

export default function FinalCTA({
  title = "Let’s Make Your Next Event Sweet & Memorable!",
  text = "Contact us today for a custom quote and let TreatLady bring your vision to life.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={IMAGES.cta} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/90" aria-hidden="true" />
      <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <span className="mx-auto mb-6 block h-px w-16 bg-rose" aria-hidden="true" />
        <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/75">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact">
            <CalendarHeart size={17} strokeWidth={1.5} aria-hidden="true" /> Request a Quote
          </Button>
          <Button href={tel(BUSINESS.phones[0])} variant="light">
            <Phone size={17} strokeWidth={1.5} aria-hidden="true" /> Call Us: {BUSINESS.phones[0]}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
