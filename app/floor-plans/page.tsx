import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ModelGrid from "@/components/ModelGrid";
import CtaBand from "@/components/CtaBand";
import { siteData } from "@/lib/floor-plans";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, floorPlansListSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  path: "/floor-plans",
  pageTitle: "All 15 Floor Plans",
  description:
    "Browse all 15 floor plans at The Enclave Milton — Village back-to-back and Park traditional freehold townhomes from $599,990 with $0 monthly maintenance in Milton, Ontario.",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd data={[floorPlansListSchema(), breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Floor plans", path: "/floor-plans" },
      ])]} />
      <div className="section">
        <div className="container">
          <h1>All 15 floor plans — Village &amp; Park Collections at The Enclave Milton</h1>
          <p className="lead">
            Every Sundial Homes layout at Britannia Road — five Village back-to-back models and ten
            Park traditional two- and three-storey towns. Select a model or register for the full
            package.
          </p>
        </div>
      </div>

      {siteData.collections.map((collection) => (
        <section
          key={collection.id}
          id={collection.id}
          className="section section--tight"
          aria-labelledby={`${collection.id}-heading`}
        >
          <div className="container">
            <h2 id={`${collection.id}-heading`}>
              {collection.id === "village"
                ? "Which back-to-back townhomes are in the Village Collection?"
                : "Which traditional townhomes are in the Park Collection?"}
            </h2>
            <p className="lead">{collection.description}</p>
            {collection.footnote && (
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{collection.footnote}</p>
            )}
            <ModelGrid collection={collection} />
          </div>
        </section>
      ))}

      <CtaBand id="register-plans" />
    </>
  );
}
