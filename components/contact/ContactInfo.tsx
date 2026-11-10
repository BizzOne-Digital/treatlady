import { Clock, Gift, Mail, Phone } from "lucide-react";
import { BUSINESS, tel } from "@/lib/constants";

const row = "flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-pale/70";
const iconWrap = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush text-copper";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <h2 className="font-serif text-3xl text-ink">Get in Touch</h2>
      <p className="text-muted">Prefer to talk? Call or email and Leticia will get back to you as soon as possible.</p>

      <div className={row}>
        <span className={iconWrap}>
          <Phone size={20} strokeWidth={1.25} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-ink">Phone</h3>
          <a href={tel(BUSINESS.phones[0])} className="block text-muted hover:text-copper">
            {BUSINESS.phones[0]}
          </a>
          <a href={tel(BUSINESS.phones[1])} className="block text-sm text-muted hover:text-copper">
            Secondary: {BUSINESS.phones[1]}
          </a>
        </div>
      </div>

      <div className={row}>
        <span className={iconWrap}>
          <Mail size={20} strokeWidth={1.25} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-ink">Email</h3>
          <a href={`mailto:${BUSINESS.email}`} className="break-all text-muted hover:text-copper">
            {BUSINESS.email}
          </a>
        </div>
      </div>

      <div className={row}>
        <span className={iconWrap}>
          <Clock size={20} strokeWidth={1.25} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-ink">Hours</h3>
          <p className="text-muted">Mon–Sat, 7 AM–5 PM</p>
          <p className="text-sm text-muted">Closed Sunday</p>
        </div>
      </div>

      <div className="flex gap-4 rounded-2xl bg-ink p-5 text-white">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-rose">
          <Gift size={20} strokeWidth={1.25} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold">Large Order?</h3>
          <p className="text-sm text-white/75">Contact us for large-order discounts.</p>
        </div>
      </div>
    </div>
  );
}
