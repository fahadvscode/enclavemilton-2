import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Enclave Milton",
    description:
      "Freehold townhomes at The Enclave Milton from $599,990 — now selling.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#1e3b41",
    lang: "en-CA",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
