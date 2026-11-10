import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghostDark";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-copper to-rose text-white shadow-card hover:shadow-lg hover:brightness-105",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
  light: "border border-white/70 text-white hover:bg-white hover:text-ink",
  ghostDark: "bg-white text-ink hover:bg-blush",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "md" | "sm";
};

export default function Button({ href, children, variant = "primary", className = "", size = "md" }: Props) {
  const sizing = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-[15px]";
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `group inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose ${sizing} ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
