import {
  AlertCircle,
  Cake,
  CalendarDays,
  CheckCircle2,
  Clock,
  CakeSlice,
  Flower2,
  Gem,
  Gift,
  Sparkles,
  Truck,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/constants";

/** Thin custom balloon SVG (not available in Lucide). */
export function BalloonIcon(props: LucideProps) {
  const { size = 24, strokeWidth = 1.25, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5c-3.6 0-6 2.8-6 6.2 0 3.9 3.2 7.3 6 7.3s6-3.4 6-7.3c0-3.4-2.4-6.2-6-6.2Z" />
      <path d="m11 16-.8 1.6h3.6L13 16" />
      <path d="M12 17.6c0 1.6-1.6 2-1.6 3.4 0 .5.2.9.4 1.2" />
      <path d="M9.2 6.4c.6-.9 1.4-1.4 2.3-1.6" />
    </svg>
  );
}

const MAP = {
  cake: Cake,
  cupcake: CakeSlice,
  gem: Gem,
  truck: Truck,
  calendar: CalendarDays,
  clock: Clock,
  alert: AlertCircle,
  gift: Gift,
  sparkles: Sparkles,
  flower: Flower2,
  check: CheckCircle2,
  balloon: BalloonIcon,
} as const;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = MAP[name];
  return <C strokeWidth={1.25} aria-hidden="true" {...props} />;
}
