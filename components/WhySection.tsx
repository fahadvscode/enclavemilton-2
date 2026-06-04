import styles from "./WhySection.module.css";

const POINTS = [
  {
    title: "Freehold with $0 monthly maintenance",
    body: "Unlike many Milton townhome projects with condo fees, The Enclave markets freehold title with no monthly maintenance — a direct answer to buyers searching “no condo fees” in Halton.",
  },
  {
    title: "15 layouts from $599,990",
    body: "With Milton resale townhomes averaging well above $800K in early 2026, entry near $599,990 positions The Enclave as attainable new construction — fifteen models give real choice, not a single template.",
  },
  {
    title: "Back-to-back and traditional towns",
    body: "The Village Collection owns the back-to-back niche (953–1,732 sq ft). The Park Collection adds two- and three-storey traditional designs up to 2,843 sq ft — rare breadth in one Milton address.",
  },
  {
    title: "Britannia Road, Milton Ontario",
    body: "Located between James Snow Parkway and Fourth Line with access toward Highways 401 and 407 and Milton GO — strong commute story with planned trails and a future on-site elementary school per the master plan.",
  },
];

export default function WhySection() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading">Why choose The Enclave Milton?</h2>
        <p className="lead">
          Buyers get Sundial Homes quality, two distinct collections, and freehold ownership without
          monthly maintenance — now selling for 2027 occupancy in southeast Milton, Ontario.
        </p>
        <ul className={styles.list}>
          {POINTS.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
