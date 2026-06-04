import Link from "next/link";
import { formatModelType, formatSqft } from "@/lib/floor-plans";
import type { Collection, FloorPlanModel } from "@/lib/types";
import styles from "./ModelCard.module.css";

type ModelCardProps = {
  model: FloorPlanModel;
  collection: Collection;
};

export default function ModelCard({ model, collection }: ModelCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.placeholder} aria-hidden>
        <span>{model.model.replace("The ", "")}</span>
      </div>
      <div className={styles.body}>
        <h3>
          <Link href={`/floor-plans/${model.slug}`}>{model.model}</Link>
        </h3>
        <p className={styles.meta}>{formatModelType(model, collection.id)}</p>
        <p className={styles.sqft}>{formatSqft(model)}</p>
        <p className={styles.price}>From {collection.id === "village" ? "$599,990" : "registration"}</p>
        <div className={styles.actions}>
          <Link href={`/floor-plans/${model.slug}`} className="btn btn--outline">
            View layout
          </Link>
          <a href={`#register-${model.slug}`} className="btn btn--primary">
            Get pricing
          </a>
        </div>
      </div>
    </article>
  );
}
