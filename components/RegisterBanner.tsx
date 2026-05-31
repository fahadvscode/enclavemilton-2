"use client";

import { siteData } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { StockImage } from "./StockImage";
import { useRegistration } from "./RegistrationContext";
import styles from "./RegisterBanner.module.css";

export function RegisterBanner() {
  const { openRegistration } = useRegistration();
  const totalModels = siteData.collections.reduce((n, c) => n + c.models.length, 0);

  return (
    <section id="register" className={styles.banner}>
      <StockImage
        src={IMAGES.registerCta}
        alt=""
        fill
        className={styles.bg}
        sizes="100vw"
        aria-hidden
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <h2>Get full floor plans &amp; pricing</h2>
        <p>
          Register once for PDF floor plans and current model pricing across all {totalModels}{" "}
          homes at The Enclave Milton — Village and Park collections.
        </p>
        <p className={styles.price}>Homes from {siteData.project.startingFrom}</p>
        <button type="button" className="btn btn-gold" onClick={() => openRegistration()}>
          Register now
        </button>
      </div>
    </section>
  );
}
