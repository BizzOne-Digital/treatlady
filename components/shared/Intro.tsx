"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "tl_intro_seen";
const ease = [0.22, 1, 0.36, 1] as const;

/** Opening screen - shown once per browser session. */
export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {}
    if (seen) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), reduce ? 600 : 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="tl-intro"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease }}
          aria-hidden="true"
          onClick={() => setShow(false)}
        >
          {/* glowing blush orbs */}
          <motion.span
            className="absolute h-[34rem] w-[34rem] rounded-full bg-rose/25 blur-[120px]"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease }}
          />
          {/* floating sparkles */}
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#E8B9A8]"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 0], y: -30 }}
              transition={{ duration: 2.2, delay: 0.2 + (i % 7) * 0.15, ease: "easeOut" }}
            />
          ))}

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease }}
            >
              <Image
                src="/logo/treatlady-logo.png"
                alt=""
                width={967}
                height={724}
                priority
                sizes="320px"
                className="h-auto w-56 sm:w-72"
              />
            </motion.div>
            <motion.span
              className="mt-6 block h-px w-40 origin-left bg-gradient-to-r from-transparent via-rose to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7, ease }}
            />
            <motion.p
              className="mt-5 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Cakes &middot; Dessert Tables &middot; Balloon Decor
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
