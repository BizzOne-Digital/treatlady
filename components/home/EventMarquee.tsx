import { Heart } from "lucide-react";
import { EVENTS } from "@/lib/constants";

export default function EventMarquee() {
  const items = [...EVENTS, "Gender Reveals", "Quinceañeras", "Graduations"];
  const loop = [...items, ...items];
  return (
    <section aria-label="Events we serve" className="group overflow-hidden bg-ink py-5">
      <ul className="animate-marquee flex w-max items-center gap-10">
        {loop.map((e, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap font-serif text-xl text-white/90 sm:text-2xl" aria-hidden={i >= items.length}>
            <span className="italic">{e}</span>
            <Heart size={14} strokeWidth={1.25} className="fill-rose text-rose" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}
