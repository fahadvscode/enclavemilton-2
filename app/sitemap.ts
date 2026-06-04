import type { MetadataRoute } from "next";
import { getAllModels } from "@/lib/floor-plans";
import { BUILD_DATE, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(BUILD_DATE);

  const models = getAllModels().map((m) => ({
    url: `${SITE_URL}/floor-plans/${m.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/floor-plans`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...models,
  ];
}
