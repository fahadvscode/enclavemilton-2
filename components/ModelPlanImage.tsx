import { getModelStockImage } from "@/lib/images";
import { StockImage } from "./StockImage";
import styles from "./ModelPlanImage.module.css";

interface ModelPlanImageProps {
  slug: string;
  modelName: string;
  variant?: "card" | "detail";
}

export function ModelPlanImage({ slug, modelName, variant = "card" }: ModelPlanImageProps) {
  const src = getModelStockImage(slug);
  const shortName = modelName.replace("The ", "");

  return (
    <div className={`${styles.wrap} ${variant === "detail" ? styles.detail : ""}`}>
      <StockImage
        src={src}
        alt={`${modelName} at The Enclave Milton — register for full floor plan`}
        fill
        className={styles.image}
        sizes={variant === "detail" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 600px) 100vw, 33vw"}
      />
      <div className={styles.blur} aria-hidden="true" />
      <span className={styles.badge}>{shortName}</span>
      <span className={styles.overlay}>Register for full plan</span>
    </div>
  );
}
