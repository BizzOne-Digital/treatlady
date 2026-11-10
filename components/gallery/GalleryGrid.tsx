"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type Item = { src: string; alt: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <ul className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {items.map((it, i) => (
          <li key={it.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
              aria-label={`View ${it.alt}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                width={600}
                height={750}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                <Expand size={24} strokeWidth={1.25} aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={items[index].src} alt={items[index].alt} fill sizes="90vw" className="object-contain" />
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <p className="absolute bottom-5 text-sm text-white/70">
              {index + 1} / {items.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
