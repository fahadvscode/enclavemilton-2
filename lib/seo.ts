import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_URL } from "./site";

const TITLE_SUFFIX = "Freehold Townhomes from $599,990";

type PageMeta = {
  path?: string;
  pageTitle: string;
  description: string;
  ogImage?: string;
};

export function buildMetadata({
  path = "",
  pageTitle,
  description,
  ogImage = IMAGES.hero,
}: PageMeta): Metadata {
  const fullTitle = `${SITE_NAME} — ${pageTitle} | ${TITLE_SUFFIX}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultDescription =
  "The Enclave Milton — new freehold townhomes on Britannia Road by Sundial Homes. 15 layouts from $599,990, $0 monthly maintenance, occupancy 2027. Now selling in Milton, Ontario.";
