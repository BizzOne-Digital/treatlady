"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";
import { useState } from "react";
import Button from "@/components/shared/Button";
import { IMAGES } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);
  // wait for the opening screen on first visit
  const [base] = useState(() =>
    typeof document !== "undefined" && !document.documentElement.classList.contains("intro-seen") && !reduce ? 2.4 : 0,
  );

  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: base + d, ease },
  });

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-blush/60 to-pale/70">
      {/* soft decorative shapes */}
      <div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-pale/70 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose/20 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:pb-28 lg:pt-16">
        <div className="relative z-10 text-center lg:text-left">
          <motion.p {...fade(0)} className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/80 sm:text-xs">
            Cakes <span className="text-rose">&bull;</span> Dessert Tables <span className="text-rose">&bull;</span> Balloon Decor
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="mt-5 font-serif text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Custom Treats for Your{" "}
            <span className="relative inline-block font-script text-[1.25em] font-normal leading-none text-gradient-rose">
              Special Events
            </span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            Beautiful cakes, themed dessert tables, and stunning balloon decor designed to make your celebrations truly
            unforgettable.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/services">
              Explore Our Services
              <ArrowRight size={17} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline">
              <CalendarHeart size={17} strokeWidth={1.5} aria-hidden="true" />
              Get a Quote
            </Button>
          </motion.div>
          <motion.div {...fade(0.4)} className="mt-10 flex items-center justify-center gap-4 text-sm text-muted lg:justify-start">
            <span className="h-px w-10 bg-rose" aria-hidden="true" />
            Weddings &middot; Birthdays &middot; Showers &middot; Special Events
          </motion.div>
        </div>

        {/* layered image composition */}
        <motion.div style={{ y }} className="relative mx-auto aspect-[4/4.2] w-full max-w-[560px] sm:aspect-[5/4.6]">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, clipPath: "inset(10% 10% 10% 10% round 200px)" }}
            animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 200px 200px 28px 28px)" }}
            transition={{ duration: 1.1, delay: base, ease }}
            className="absolute inset-y-0 right-0 w-[78%] overflow-hidden rounded-t-[200px] rounded-b-[28px] shadow-soft"
          >
            <Image
              src={IMAGES.heroMain}
              alt="Elegant tiered wedding cake with blush florals"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 440px"
              className="object-cover"
            />
          </motion.div>
          <span
            className="absolute right-[-12px] top-[-12px] h-[calc(100%+24px)] w-[calc(78%+24px)] rounded-t-[210px] rounded-b-[36px] border border-rose/50"
            aria-hidden="true"
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: base + 0.5, ease }}
            className="absolute bottom-[8%] left-0 w-[44%] overflow-hidden rounded-3xl border-[6px] border-white shadow-soft"
          >
            <div className="relative aspect-[4/5]">
              <Image src={IMAGES.heroSide} alt="Pink frosted cupcakes" fill sizes="240px" className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: -20 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: base + 0.7, duration: 0.8 }, y: { delay: base + 1.4, duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute left-[10%] top-[6%] h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-soft sm:h-28 sm:w-28"
          >
            <Image src={IMAGES.heroSmall} alt="Blush balloons" fill sizes="112px" className="object-cover" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.9, duration: 0.7 }}
            className="absolute bottom-[-4%] right-[6%] rounded-2xl bg-white/95 px-5 py-3.5 shadow-soft backdrop-blur"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-copper">Cakes from</p>
            <p className="font-serif text-2xl text-ink">$75</p>
          </motion.div>
        </motion.div>
      </div>

      <svg className="absolute -bottom-px left-0 w-full text-white" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 70V40C300 0 560 70 860 45S1240 5 1440 30V70Z" />
        <path fill="none" stroke="#C9826E" strokeOpacity=".5" d="M0 40C300 0 560 70 860 45S1240 5 1440 30" />
      </svg>
    </section>
  );
}
