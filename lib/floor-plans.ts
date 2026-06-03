import floorPlansData from "@/data/floor-plans.json";
import type { Collection, FloorPlanModel, FloorPlansData } from "./types";

export const siteData = floorPlansData as FloorPlansData;

export const SITE_URL = "https://www.enclavemilton.com";

export function formatSqft(model: FloorPlanModel): string {
  if (model.sqftMin != null && model.sqftMax != null) {
    return `${model.sqftMin.toLocaleString()} – ${model.sqftMax.toLocaleString()} sq ft`;
  }
  if (model.sqft != null) {
    return `${model.sqft.toLocaleString()} sq ft`;
  }
  return "";
}

export function formatModelType(model: FloorPlanModel, collectionId: string): string {
  if (collectionId === "village") {
    return model.type ?? "Back-to-Back Townhome";
  }
  const storeyLabel =
    model.storeys === 2 ? "2 Storey" : model.storeys === 3 ? "3 Storey" : "";
  if (model.type) {
    return `${storeyLabel} (${model.type})`;
  }
  return storeyLabel;
}

export function getAllModels(): Array<FloorPlanModel & { collection: Collection }> {
  return siteData.collections.flatMap((collection) =>
    collection.models.map((model) => ({ ...model, collection }))
  );
}

export function getModelBySlug(slug: string) {
  for (const collection of siteData.collections) {
    const model = collection.models.find((m) => m.slug === slug);
    if (model) return { model, collection };
  }
  return null;
}

export function getCollectionById(id: string) {
  return siteData.collections.find((c) => c.id === id);
}
