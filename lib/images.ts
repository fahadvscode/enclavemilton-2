/** Central image URLs — hero (project) + Unsplash stock (license: Unsplash License) */

export const IMAGES = {
  hero:
    "https://cfzuypbljirmibmxpabi.supabase.co/storage/v1/object/public/rental-documents/1780268468620_Screenshot-2026-05-13-at-16.59.20.png",

  floorPlansBanner:
    "https://images.unsplash.com/photo-1600585154340-be6162a9a0c9?auto=format&fit=crop&w=1920&q=80",

  villageCollection:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd32?auto=format&fit=crop&w=1200&q=80",

  parkCollection:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",

  lifestyle:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1920&q=80",

  community:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80",

  registerCta:
    "https://images.unsplash.com/photo-1600566753086-5f67b1274228?auto=format&fit=crop&w=1920&q=80",

  /** Interiors & homes — rotated per model slug */
  modelStock: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631889993959-41b763e68f8f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b3e468fb5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600047509358-9dc75540d565?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605276374101-dee22abb2bb7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=80",
  ],
} as const;

export function getModelStockImage(slug: string): string {
  const urls = IMAGES.modelStock;
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i)) % urls.length;
  }
  return urls[hash]!;
}
