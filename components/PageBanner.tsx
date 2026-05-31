import { StockImage } from "./StockImage";
import styles from "./PageBanner.module.css";

interface PageBannerProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  priority?: boolean;
}

export function PageBanner({ src, alt, children, priority }: PageBannerProps) {
  return (
    <header className={styles.banner}>
      <StockImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={styles.bg}
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>{children}</div>
    </header>
  );
}
