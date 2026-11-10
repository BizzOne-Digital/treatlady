"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { CalendarHeart, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function HeaderShell({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md" : "bg-ink"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all sm:px-8 ${scrolled ? "py-2.5" : "py-4"}`}>
        {logo}

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative py-2 text-[15px] font-medium transition-colors ${
                      active ? "text-rose" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-rose transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-copper to-rose px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:brightness-110 lg:inline-flex"
        >
          <CalendarHeart size={17} strokeWidth={1.5} aria-hidden="true" />
          Request a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </header>
  );
}
