import styles from "./FactsStrip.module.css";

const FACTS = [
  { value: "15", label: "floor plans" },
  { value: "From $599,990", label: "starting price" },
  { value: "$0", label: "monthly maintenance" },
  { value: "Freehold", label: "ownership" },
  { value: "2027", label: "occupancy" },
];

export default function FactsStrip() {
  return (
    <section className={styles.strip} aria-label="Key facts">
      <div className={`container ${styles.inner}`}>
        <ul>
          {FACTS.map((f) => (
            <li key={f.label}>
              <span className={styles.value}>{f.value}</span>
              <span className={styles.label}>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
