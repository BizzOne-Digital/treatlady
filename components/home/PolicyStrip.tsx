import Icon from "@/components/shared/Icon";
import { POLICIES } from "@/lib/constants";

export default function PolicyStrip() {
  return (
    <section aria-label="Booking policies" className="border-y border-pale bg-blush/70">
      <ul className="no-scrollbar mx-auto flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-8 sm:px-8 lg:grid lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-rose/30 lg:overflow-visible">
        {POLICIES.map((p) => (
          <li
            key={p.title}
            className="flex min-w-[78%] snap-start gap-4 rounded-2xl bg-white/70 p-5 sm:min-w-[45%] lg:min-w-0 lg:rounded-none lg:bg-transparent lg:px-6 lg:py-1"
          >
            <Icon name={p.icon} size={32} className="shrink-0 text-copper" />
            <div>
              <h3 className="text-sm font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{p.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
