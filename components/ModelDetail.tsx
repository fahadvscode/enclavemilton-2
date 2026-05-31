"use client";

import Link from "next/link";
import type { Collection, FloorPlanModel } from "@/lib/types";
import { siteData } from "@/lib/floor-plans";
import { useRegistration } from "./RegistrationContext";
import { ModelPlanImage } from "./ModelPlanImage";
import styles from "./ModelDetail.module.css";

interface ModelDetailProps {
  model: FloorPlanModel;
  collection: Collection;
  typeLabel: string;
  sqftLabel: string;
}

export function ModelDetail({ model, collection, typeLabel, sqftLabel }: ModelDetailProps) {
  const { openRegistration } = useRegistration();
  const shortName = model.model.replace("The ", "");

  return (
    <article className={styles.article}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visual}>
            <ModelPlanImage slug={model.slug} modelName={model.model} variant="detail" />
          </div>
          <div className={styles.content}>
            <span className="badge">{collection.name}</span>
            <h1>{model.model} Floor Plan</h1>
            <p className={styles.type}>{typeLabel}</p>
            <p className={styles.sqft}>{sqftLabel}</p>
            <p className={styles.copy}>
              View the complete {model.model} floor plan and receive current pricing by email
              after registration. Community homes from {siteData.project.startingFrom}.
            </p>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => openRegistration(model.model, collection.name)}
            >
              Get {shortName} Floor Plan &amp; Price
            </button>
            <p className={styles.note}>
              Full PDF floor plans and per-model pricing are delivered after registration. No
              deposit schedules, lot numbers, or elevation codes are published on this site.
            </p>
            <Link href={`/floor-plans#${collection.id}`} className={styles.back}>
              ← All {collection.name} models
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
