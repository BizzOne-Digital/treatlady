import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need to make your celebration sweet, beautiful and memorable."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.12}>
              <Link
                href={`/services#${s.key}`}
                className="group block overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-pale/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3.3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex items-center gap-4 px-6 py-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pale text-copper">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                    <p className="text-sm text-muted">
                      Starting at <span className="text-lg font-bold text-copper">${s.price}</span>
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.25}
                    className="text-rose transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
