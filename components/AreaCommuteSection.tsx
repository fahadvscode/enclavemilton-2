import { DISTANCE_REFERENCE, commuteFacts, communityLocation } from "@/data/location";
import styles from "./AreaGuide.module.css";

export default function AreaCommuteSection() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="commute-heading">
      <div className="container">
        <h2 id="commute-heading">How is the commute from Britannia Road Milton?</h2>
        <p className="lead">
          The Enclave on {communityLocation.address} connects via James Snow Parkway and Britannia
          Road to Milton GO, Highway 401, and Highway 407. Distances from {DISTANCE_REFERENCE}.
        </p>
        <div className={styles.commuteGrid}>
          {commuteFacts.map((c) => (
            <article key={c.name} className={styles.card}>
              <h3>{c.name}</h3>
              {"line" in c && c.line && <p className={styles.meta}>{c.line}</p>}
              <p className={styles.distance}>{c.distanceFromSite}</p>
              <p className={styles.note}>
                <strong>Drive time:</strong> {c.typicalDrive}
              </p>
              {"typicalTrainUnion" in c && c.typicalTrainUnion && (
                <p className={styles.note}>
                  <strong>Train:</strong> {c.typicalTrainUnion}
                </p>
              )}
              <p className={styles.buyerNote}>{c.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
