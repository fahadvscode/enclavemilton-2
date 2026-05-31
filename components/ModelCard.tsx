"use client";

import Link from "next/link";
import type { Collection, FloorPlanModel } from "@/lib/types";
import { formatModelType, formatSqft } from "@/lib/floor-plans";
import { useRegistration } from "./RegistrationContext";
import { ModelPlanImage } from "./ModelPlanImage";
import styles from "./ModelCard.module.css";

interface ModelCardProps {
  model: FloorPlanModel;
  collection: Collection;
}

export function ModelCard({ model, collection }: ModelCardProps) {
  const { openRegistration } = useRegistration();
  const typeLabel = formatModelType(model, collection.id);
  const sqftLabel = formatSqft(model);
  const shortName = model.model.replace("The ", "");

  return (
    <article className={styles.card}>
      <Link href={`/floor-plans/${model.slug}`} className={styles.thumbLink}>
        <ModelPlanImage slug={model.slug} modelName={model.model} />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`/floor-plans/${model.slug}`}>{model.model}</Link>
        </h3>
        <p className={styles.type}>{typeLabel}</p>
        <p className={styles.sqft}>{sqftLabel}</p>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => openRegistration(model.model, collection.name)}
        >
          Get {shortName} Floor Plan &amp; Price
        </button>
      </div>
    </article>
  );
}
