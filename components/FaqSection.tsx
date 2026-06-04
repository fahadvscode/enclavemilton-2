import { HOME_FAQ } from "@/lib/faq";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading">Frequently asked questions about The Enclave Milton</h2>
        <p className="lead">
          Direct answers for buyers researching freehold townhomes, pricing, and registration in
          Milton, Ontario.
        </p>
        <div className={styles.list}>
          {HOME_FAQ.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
