import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ModelDetailPanel from "@/components/ModelDetailPanel";
import {
  formatSqft,
  getAllModels,
  getModelBySlug,
} from "@/lib/floor-plans";
import { buildMetadata } from "@/lib/seo";
import { modelPageGraph } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllModels().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = getModelBySlug(slug);
  if (!found) return {};

  const { model, collection } = found;
  const sqft = formatSqft(model);
  const storey =
    model.storeys === 2 ? "2-storey" : model.storeys === 3 ? "3-storey" : "back-to-back";

  return buildMetadata({
    path: `/floor-plans/${slug}`,
    pageTitle: `${model.model} — ${sqft}`,
    description: `${model.model} ${storey} freehold townhome at The Enclave Milton (${collection.name}). ${sqft}, from $599,990, $0 monthly maintenance. Register for floor plan PDF and pricing.`,
  });
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const found = getModelBySlug(slug);
  if (!found) notFound();

  const { model, collection } = found;
  const sqftText = formatSqft(model);

  return (
    <>
      <JsonLd data={modelPageGraph(model.model, slug, collection.name, sqftText)} />
      <div className="container">
        <ModelDetailPanel model={model} collection={collection} />
      </div>
    </>
  );
}
