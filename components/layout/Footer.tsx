import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { BUSINESS, NAV_LINKS, tel } from "@/lib/constants";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr]">
        <div className="space-y-5">
          <Logo className="!items-start" size="lg" />
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            Custom cakes, styled dessert tables and balloon decor for weddings, birthdays and every celebration in between.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-5 font-serif text-lg text-white">Quick Links</h2>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-rose">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 font-serif text-lg text-white">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={tel(p)} className="inline-flex items-center gap-3 transition hover:text-rose">
                  <Phone size={16} strokeWidth={1.25} className="text-rose" aria-hidden="true" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="inline-flex items-center gap-3 break-all transition hover:text-rose">
                <Mail size={16} strokeWidth={1.25} className="shrink-0 text-rose" aria-hidden="true" /> {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} strokeWidth={1.25} className="mt-0.5 text-rose" aria-hidden="true" />
              <span>
                {BUSINESS.hours}
                <br />
                {BUSINESS.closed}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-serif text-lg text-white">Follow Us</h2>
          <div className="flex gap-3">
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TreatLady on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-rose hover:text-rose"
            >
              <FacebookIcon />
            </a>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TreatLady on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-rose hover:text-rose"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">Ask about large-order discounts.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-white/50 sm:px-8">
          &copy; {year} TreatLady. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
