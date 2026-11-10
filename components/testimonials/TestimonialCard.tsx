import { Quote } from "lucide-react";
import Stars from "@/components/shared/Stars";

type Props = { quote: string; name: string; event?: string; showEvent?: boolean };

export default function TestimonialCard({ quote, name, event, showEvent = true }: Props) {
  return (
    <figure className="group h-full rounded-3xl border border-pale bg-white p-7 shadow-[0_2px_20px_-12px_rgba(185,104,85,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-rose/50 hover:shadow-card">
      <Quote size={30} strokeWidth={1} className="fill-pale text-rose" aria-hidden="true" />
      <blockquote className="mt-4 leading-relaxed text-ink/85">&ldquo;{quote}&rdquo;</blockquote>
      <div className="mt-6">
        <Stars />
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-3 border-t border-pale pt-4">
        <span className="font-serif text-lg text-ink">{name}</span>
        {showEvent && event && (
          <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-copper">{event}</span>
        )}
      </figcaption>
    </figure>
  );
}
