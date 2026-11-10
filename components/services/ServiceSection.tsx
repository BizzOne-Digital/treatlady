import Image from "next/image";
import { ArrowRight, Check, Info } from "lucide-react";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import type { SERVICES } from "@/lib/constants";

type Props = { service: (typeof SERVICES)[number]; reverse?: boolean };

export default function ServiceSection({ service: s, reverse }: Props) {
  return (
    <section id={s.key} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? "md:order-2" : ""}>
          <div className="group relative aspect-[4/3.6] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="(max-width: 768px) 92vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-soft">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-copper">Starting at</p>
              <p className="font-serif text-2xl text-ink">${s.price}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "md:order-1" : ""}>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-copper">
            <Icon name={s.icon} size={28} />
          </span>
          <h2 className="mt-5 font-serif text-3xl text-ink sm:text-4xl">{s.title}</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-copper">Starting at ${s.price}</p>
          <p className="mt-5 leading-relaxed text-muted">{s.description}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {s.includes.map((x) => (
              <li key={x} className="flex items-center gap-2.5 text-[15px] text-ink">
                <Check size={16} strokeWidth={1.75} className="text-rose" aria-hidden="true" /> {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm text-ink">
            <Info size={15} strokeWidth={1.5} className="text-copper" aria-hidden="true" /> {s.notice}
          </p>
          <div className="mt-8">
            <Button href="/contact" size="sm">
              Request a Quote <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
