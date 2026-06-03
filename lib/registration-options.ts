import { siteData } from "./floor-plans";

export const ALL_MODELS_VALUE = "All models — send me everything";

export function getRegistrationModelOptions() {
  const fromCollections = siteData.collections.flatMap((c) =>
    c.models.map((m) => ({
      value: m.model,
      label: `${m.model} — ${c.name}`,
      collection: c.name,
    }))
  );

  return [
    { value: ALL_MODELS_VALUE, label: "All models — send me everything", collection: "Village & Park" },
    ...fromCollections,
  ];
}
