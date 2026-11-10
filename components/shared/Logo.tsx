import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

/**
 * Uses the official logo from /public/logo/treatlady-logo.png when present.
 * Falls back to a typographic wordmark until the file is added.
 */
const LOGO_FILE = "/logo/treatlady-logo.png";
const hasLogo = fs.existsSync(path.join(process.cwd(), "public", LOGO_FILE));

export default function Logo({
  className = "",
  light = true,
  size = "md",
}: {
  className?: string;
  light?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <Link href="/" aria-label="TreatLady home" className={`inline-flex flex-col items-center leading-none ${className}`}>
      {hasLogo ? (
        <Image
          src={LOGO_FILE}
          alt="TreatLady - Let us treat U"
          width={967}
          height={724}
          priority
          sizes="120px"
          className={`w-auto ${size === "lg" ? "h-24" : "h-14 sm:h-16"}`}
        />
      ) : (
        <>
          <span className={`font-script text-4xl sm:text-[2.6rem] ${light ? "text-white" : "text-ink"}`}>
            Treat <span className="text-gradient-rose">Lady</span>
          </span>
          <span
            className={`-mt-1 text-[9px] font-semibold uppercase tracking-[0.45em] ${light ? "text-white/70" : "text-ink/70"}`}
          >
            Let us treat U
          </span>
        </>
      )}
    </Link>
  );
}
