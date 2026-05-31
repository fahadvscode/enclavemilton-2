import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "@/components/Providers";
import { SITE_URL } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Enclave Milton | New Townhomes in Milton, ON",
    template: "%s | The Enclave Milton",
  },
  description:
    "The Enclave by Sundial Homes — freehold townhomes in southeast Milton with no monthly maintenance fees. Village back-to-back and Park traditional designs from 953 to 2,843 sq ft. From $599,990.",
  openGraph: {
    siteName: "The Enclave Milton",
    locale: "en_CA",
    type: "website",
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: "The Enclave Milton townhomes" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
