import styles from "./CompareTable.module.css";

const ROWS = [
  { label: "Sq ft range", village: "953 – 1,732", park: "1,240 – 2,843" },
  { label: "Storeys", village: "2 (back-to-back)", park: "2 & 3 storey" },
  { label: "Layout type", village: "Back-to-back freehold", park: "Traditional townhome" },
  { label: "Model count", village: "5", park: "10" },
  {
    label: "Ideal buyer",
    village: "First-time, investor, efficient footprint",
    park: "Growing & multigenerational families",
  },
  { label: "Monthly maintenance", village: "$0", park: "$0" },
];

export default function CompareTable() {
  return (
    <section className="section section--tight" aria-labelledby="compare-heading">
      <div className="container">
        <h2 id="compare-heading">Village vs Park — which collection fits you?</h2>
        <p className="lead">
          Both collections are freehold with no monthly maintenance; the difference is layout style
          and square footage.
        </p>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <caption className="sr-only">Comparison of Village and Park collections</caption>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Village Collection</th>
                <th scope="col">Park Collection</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.village}</td>
                  <td>{row.park}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
