import Image from "next/image";
import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; subtitle?: string; image: string; alt: string };

export default function PageHero({ eyebrow, title, subtitle, image, alt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rose">{eyebrow}</p>
          <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>}
          <span className="mt-8 block h-px w-24 bg-gradient-to-r from-rose to-transparent" aria-hidden="true" />
        </Reveal>
      </div>
      <svg className="absolute -bottom-px left-0 w-full text-ivory" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 60V30C240 0 480 50 720 35S1200 0 1440 25V60Z" />
      </svg>
    </section>
  );
}
