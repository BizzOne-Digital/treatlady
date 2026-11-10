import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section aria-label="Why TreatLady" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 sm:px-8">
        <ul className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-pale">
          {FEATURES.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 0.1} className="flex items-center gap-4 sm:justify-center sm:px-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blush text-copper">
                  <Icon name={f.icon} size={28} />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{f.title}</h3>
                  <p className="text-sm text-muted">{f.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
