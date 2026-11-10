"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { BUSINESS, NAV_LINKS, tel } from "@/lib/constants";

type Props = { open: boolean; onClose: () => void; isActive: (href: string) => boolean };

export default function MobileMenu({ open, onClose, isActive }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-ivory px-7 pb-8 pt-6 shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Image src="/logo/treatlady-logo.png" alt="TreatLady" width={967} height={724} sizes="100px" className="h-14 w-auto" />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15"
                aria-label="Close menu"
                autoFocus
              >
                <X size={20} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-10">
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={onClose}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-pale py-4 font-serif text-2xl ${
                        isActive(l.href) ? "text-copper" : "text-ink"
                      }`}
                    >
                      {l.label}
                      <ArrowRight size={18} strokeWidth={1.25} className="text-rose" aria-hidden="true" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto space-y-3 pt-8">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-copper to-rose font-semibold text-white"
              >
                Request a Quote
              </Link>
              <a
                href={tel(BUSINESS.phones[0])}
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/80 font-semibold"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> {BUSINESS.phones[0]}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
