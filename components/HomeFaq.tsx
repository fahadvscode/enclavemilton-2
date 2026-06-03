import styles from "./HomeFaq.module.css";

export const homeFaqItems = [
  {
    question: "What is The Enclave Milton?",
    answer:
      "The Enclave is a new freehold townhome community by Sundial Homes in southeast Milton, Ontario. It includes the Village Collection of back-to-back townhomes and the Park Collection of traditional two- and three-storey designs — 15 floor plans from 953 to 2,843 sq ft, with occupancy targeted for 2027.",
  },
  {
    question: "Are there monthly maintenance fees at The Enclave?",
    answer:
      "No. Both the Village and Park collections at The Enclave are freehold townhomes with no monthly maintenance fees — a major advantage for first-time buyers and growing families comparing new townhomes in Milton.",
  },
  {
    question: "How much do townhomes at The Enclave start from?",
    answer:
      "Homes at The Enclave Milton start from $599,990. Per-model pricing, elevations, deposit schedules, and lot details are provided when you register for floor plans and pricing on this site.",
  },
  {
    question: "Where is The Enclave located in Milton?",
    answer:
      "The Enclave is on Britannia Road between James Snow Parkway and Fourth Line in southeast Milton — near schools, shopping, trails, and major commuter routes including the 401 and GO Transit.",
  },
  {
    question: "How do I get floor plans and pricing?",
    answer:
      "Complete the registration form on this page or on our floor plans page. You will receive PDF floor plans and current model pricing for the Village and Park collections by email, typically within minutes.",
  },
];

export function HomeFaq() {
  return (
    <section className={`section ${styles.faq}`} aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-title">
          Frequently asked questions about The Enclave Milton
        </h2>
        <p className="lead">
          Everything you need to know about new townhomes in Milton — freehold ownership, pricing,
          and how to register for floor plans.
        </p>
        <dl className={styles.list}>
          {homeFaqItems.map((item) => (
            <div key={item.question} className={styles.item}>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
