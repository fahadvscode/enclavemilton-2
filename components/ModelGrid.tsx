import type { Collection } from "@/lib/types";
import ModelCard from "./ModelCard";
import styles from "./ModelGrid.module.css";

type ModelGridProps = {
  collection: Collection;
};

export default function ModelGrid({ collection }: ModelGridProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.scroll} role="list">
        {collection.models.map((model) => (
          <div key={model.slug} role="listitem">
            <ModelCard model={model} collection={collection} />
          </div>
        ))}
      </div>
      <div className={styles.grid}>
        {collection.models.map((model) => (
          <ModelCard key={model.slug} model={model} collection={collection} />
        ))}
      </div>
    </div>
  );
}
