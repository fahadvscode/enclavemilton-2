import type { Collection } from "@/lib/types";
import { IMAGES } from "@/lib/images";
import { StockImage } from "./StockImage";
import { ModelCard } from "./ModelCard";
import styles from "./CollectionSection.module.css";

const collectionBanner: Record<string, string> = {
  village: IMAGES.villageCollection,
  park: IMAGES.parkCollection,
};

interface CollectionSectionProps {
  collection: Collection;
}

export function CollectionSection({ collection }: CollectionSectionProps) {
  return (
    <section
      id={collection.id}
      className={`section ${collection.id === "park" ? "section-alt" : ""}`}
    >
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerImage}>
            <StockImage
              src={collectionBanner[collection.id]!}
              alt={collection.name}
              fill
              sizes="(max-width: 900px) 100vw, 320px"
              className={styles.headerImg}
            />
          </div>
          <div className={styles.headerText}>
            <span className="badge">{collection.tagline}</span>
            <h2 className="section-title">{collection.name}</h2>
            <p className={styles.subtitle}>{collection.type}</p>
            <blockquote className={styles.copy}>{collection.description}</blockquote>
            {collection.footnote && (
              <p className={styles.footnote}>
                <em>{collection.footnote}</em>
              </p>
            )}
          </div>
        </div>
        <div className={styles.grid}>
          {collection.models.map((model) => (
            <ModelCard key={model.slug} model={model} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
