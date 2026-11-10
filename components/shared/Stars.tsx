import { Star } from "lucide-react";

export default function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} strokeWidth={1} className="fill-[#D9A35B] text-[#D9A35B]" aria-hidden="true" />
      ))}
    </div>
  );
}
