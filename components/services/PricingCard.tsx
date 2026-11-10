import Icon from "@/components/shared/Icon";
import { SERVICES } from "@/lib/constants";

function BrushStroke() {
  return (
    <svg viewBox="0 0 320 70" className="absolute -left-6 -top-3 -z-10 h-[150%] w-[115%] text-pale" preserveAspectRatio="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 38c20-18 70-26 130-28 60-1 120 2 170 8 8 1 10 8 2 10-30 6-24 10-4 14 8 2 6 9-3 10-60 6-150 8-230 4-40-2-70-6-66-12 2-4 20-4 22-6-8-2-26-0-21 0Z"
      />
    </svg>
  );
}

export default function PricingCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-3xl bg-white p-7 shadow-card ring-1 ring-pale/70 sm:p-9 ${className}`}>
      <div className="relative isolate mb-6 inline-block">
        <BrushStroke />
        <h3 className="font-serif text-2xl text-ink sm:text-[1.7rem]">Our Starting Prices</h3>
      </div>
      <ul className="divide-y divide-pale">
        {SERVICES.map((s) => (
          <li key={s.key} className="flex items-center gap-4 py-4">
            <Icon name={s.icon} size={28} className="shrink-0 text-copper" />
            <span className="flex-1 font-semibold text-ink">{s.short}</span>
            <span className="font-serif text-lg text-copper">
              <span className="text-sm text-muted">from </span>${s.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">Contact us for large-order discounts.</p>
    </div>
  );
}
