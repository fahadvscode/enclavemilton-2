import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

const ANSWER_SUMMARY =
  "The Enclave Milton is a new freehold townhome community by Sundial Homes on Britannia Road in Milton, Ontario — fifteen layouts across Village back-to-back and Park traditional collections from $599,990, with $0 monthly maintenance and occupancy in 2027. Homes are now selling; register for floor plans and current pricing.";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton community rendering by Sundial Homes"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <Image
            src={IMAGES.logo}
            alt="The Enclave — Townhomes and Detached Homes"
            width={280}
            height={72}
            className={styles.logo}
            priority
          />
          <p className={styles.badge}>Now selling · Milton, Ontario</p>
          <h1 id="hero-heading">
            The Enclave Milton — Freehold Townhomes from $599,990 · $0 Monthly Maintenance ·
            Now Selling
          </h1>
          <p className={styles.answer}>{ANSWER_SUMMARY}</p>
          <div className={styles.actions}>
            <a href="#register" className="btn btn--primary">
              Get floor plans &amp; pricing
            </a>
            <Link href="/floor-plans" className="btn btn--ghost">
              See all 15 layouts
            </Link>
          </div>
        </div>
        <aside id="register" className={styles.card} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.cardTitle}>
            Register for floor plans &amp; pricing
          </h2>
          <LeadForm idPrefix="hero" />
        </aside>
      </div>
    </section>
  );
}
