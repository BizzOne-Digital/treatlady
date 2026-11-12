import type { Metadata } from "next";
import Image from "next/image";
import { Heart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import FinalCTA from "@/components/home/FinalCTA";
import { DIFFERENTIATORS, EVENTS, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Leticia & TreatLady",
  description:
    "Meet Leticia, the creator behind TreatLady. Custom cakes, dessert styling and balloon decor made personal for every celebration.",
  alternates: { canonical: "/about" },
};

const STORY_POINTS = ["Custom cakes", "Dessert styling", "Balloon decor", "Personalized events"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TreatLady"
        title={
          <>
            Creating Sweet Moments for <span className="font-script text-[1.2em] text-gradient-rose">Every Celebration</span>
          </>
        }
        subtitle="Handmade treats and styled event details, designed around the people and moments that matter to you."
        image={IMAGES.aboutHero}
        alt="Elegant celebration cake on a dessert table"
      />

      {/* Meet Leticia */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2.5rem] border border-rose/50" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] shadow-soft">
              <Image src={IMAGES.meetLeticia} alt="Leticia finishing a rose-gold drip buttercream cake" fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">The face behind the treats</p>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Meet <span className="font-script text-[1.3em] text-gradient-rose">Leticia</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Hi, I&apos;m Leticia. TreatLady started in my kitchen with a simple goal: to make celebrations feel
                personal. Every cake, dessert table and balloon installation I create is designed one-on-one with the
                family or couple I&apos;m working with.
              </p>
              <p>
                I handle each order personally, from the first message to the final setup, so you always know who is
                looking after your event and that nothing is left to chance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="order-2 md:order-1">
            <SectionHeading align="left" eyebrow="Our Story" title="A passion for beautiful details" />
            <p className="mt-6 leading-relaxed text-muted">
              What began as birthday cakes for friends grew into full event styling. Today TreatLady brings together
              everything that makes a celebration feel complete: a cake that tastes as good as it looks, a dessert table
              your guests photograph before they taste, and balloon decor that sets the mood the moment people walk in.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {STORY_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-full bg-blush px-4 py-2.5 text-sm font-semibold text-ink">
                  <Heart size={14} strokeWidth={1.5} className="fill-rose text-rose" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-soft">
              <Image src={IMAGES.story} alt="Wedding cake with floral details" fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading title="What Makes TreatLady Different" subtitle="The care behind every order, big or small." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <li key={d.title}>
                <Reveal delay={i * 0.08} className="h-full rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-pale/60 transition hover:-translate-y-1">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush text-copper">
                    <Icon name={d.icon} size={28} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section className="bg-blush/60 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionHeading title="Events We Serve" subtitle="If you are celebrating, we would love to help make it sweet." />
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {EVENTS.map((e) => (
              <li key={e} className="rounded-full border border-rose/40 bg-white px-6 py-3 font-serif text-lg text-ink shadow-sm transition hover:border-copper hover:text-copper">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
