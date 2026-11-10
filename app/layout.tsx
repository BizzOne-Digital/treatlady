import type { Metadata } from "next";
import { Great_Vibes, Manrope, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/shared/Intro";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://treatladyevents.com"),
  title: {
    default: "TreatLady | Custom Cakes, Dessert Tables & Balloon Decor",
    template: "%s | TreatLady",
  },
  description:
    "TreatLady creates custom cakes, elegant dessert tables and balloon decor for weddings, birthdays and special events.",
  openGraph: { siteName: "TreatLady", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${manrope.variable} ${vibes.variable}`}>
      <head>
        {/* hide intro instantly on repeat visits (before paint) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('tl_intro_seen')==='1')document.documentElement.classList.add('intro-seen')}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Intro />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
