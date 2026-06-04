import {
  DISTANCE_REFERENCE,
  HCDSB_SCHOOL_FINDER,
  HDSB_FIND_SCHOOL,
  HDSB_SCHOOL_LOCATOR,
  distanceDisclaimer,
  locationDisclaimer,
  nearbySchools,
} from "@/data/location";
import styles from "./AreaGuide.module.css";

type AreaSchoolsSectionProps = {
  compact?: boolean;
};

export default function AreaSchoolsSection({ compact = false }: AreaSchoolsSectionProps) {
  const schools = compact ? nearbySchools.slice(0, 6) : nearbySchools;

  return (
    <section className={styles.section} aria-labelledby="schools-heading">
      <div className="container">
        <h2 id="schools-heading">What schools are near The Enclave Milton?</h2>
        <p className="lead">
          Halton assigns schools by home address — use official board tools before you buy. Distances
          below are estimated driving ranges from {DISTANCE_REFERENCE}.
        </p>
        <div className={styles.links}>
          <a href={HDSB_SCHOOL_LOCATOR} rel="noopener noreferrer">
            HDSB school locator
          </a>
          <a href={HDSB_FIND_SCHOOL} rel="noopener noreferrer">
            HDSB find local school
          </a>
          <a href={HCDSB_SCHOOL_FINDER} rel="noopener noreferrer">
            HCDSB school finder
          </a>
        </div>
        <div className={styles.cardGrid}>
          {schools.map((s) => (
            <article key={s.name} className={styles.card}>
              <p className={styles.meta}>
                {s.board} · {s.grades}
              </p>
              <h3>
                {s.website ? (
                  <a href={s.website} rel="noopener noreferrer">
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
              </h3>
              <p className={styles.distance}>{s.distanceFromSite}</p>
              <p className={styles.note}>{s.type} — {s.note}</p>
              {!compact && <p className={styles.buyerNote}>{s.buyerNote}</p>}
            </article>
          ))}
        </div>
        {compact && (
          <p className={styles.note} style={{ marginTop: "1rem" }}>
            Plus additional HDSB and HCDSB schools — see the full schools &amp; area guide.
          </p>
        )}
        <p className={styles.disclaimer}>
          {distanceDisclaimer} {locationDisclaimer}
        </p>
      </div>
    </section>
  );
}
