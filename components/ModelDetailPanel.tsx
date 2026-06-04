import Link from "next/link";
import { formatModelType, formatSqft, siteData } from "@/lib/floor-plans";
import type { Collection, FloorPlanModel } from "@/lib/types";
import LeadForm from "./LeadForm";
import styles from "./ModelDetailPanel.module.css";

type ModelDetailPanelProps = {
  model: FloorPlanModel;
  collection: Collection;
};

export default function ModelDetailPanel({ model, collection }: ModelDetailPanelProps) {
  const storey =
    model.storeys === 2 ? "2-storey" : model.storeys === 3 ? "3-storey" : "back-to-back";

  return (
    <article className={styles.panel}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden> / </span>
        <Link href="/floor-plans">Floor plans</Link>
        <span aria-hidden> / </span>
        <span>{model.model}</span>
      </nav>

      <header>
        <p className={styles.collection}>{collection.name}</p>
        <h1>
          {model.model} — {formatSqft(model)} {storey} townhome at The Enclave Milton
        </h1>
        <p className={styles.lead}>
          {model.model} is a {formatModelType(model, collection.id)} in the{" "}
          {collection.name} at The Enclave Milton on Britannia Road — freehold ownership with $0
          monthly maintenance, built by {siteData.project.builder}, occupancy {siteData.project.occupancy}.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.specs}>
          <dl>
            <div>
              <dt>Size</dt>
              <dd>{formatSqft(model)}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{formatModelType(model, collection.id)}</dd>
            </div>
            <div>
              <dt>Collection</dt>
              <dd>{collection.name}</dd>
            </div>
            <div>
              <dt>Starting from</dt>
              <dd>{siteData.project.startingFrom}</dd>
            </div>
            <div>
              <dt>Occupancy</dt>
              <dd>{siteData.project.occupancy}</dd>
            </div>
          </dl>
          <p>
            <Link href="/floor-plans">← All 15 floor plans at The Enclave Milton</Link>
          </p>
        </div>
        <div id={`register-${model.slug}`} className={styles.form}>
          <h2>Get {model.model} floor plan &amp; pricing</h2>
          <LeadForm defaultModel={model.model} idPrefix={model.slug} />
        </div>
      </div>
    </article>
  );
}
