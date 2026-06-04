import Link from "next/link";
import { BROKERAGE, NON_REPRESENTATION_DISCLAIMER } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>The Enclave Milton</p>
            <nav className={styles.links} aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/floor-plans">All floor plans</Link>
              <a href="#faq">FAQ</a>
              <a href="#register">Register</a>
            </nav>
          </div>
          <div>
            <p className={styles.heading}>Brokerage</p>
            <p>
              {BROKERAGE.agentName}, {BROKERAGE.jobTitle}
              <br />
              {BROKERAGE.organization}
              <br />
              {BROKERAGE.streetAddress}, {BROKERAGE.addressLocality},{" "}
              {BROKERAGE.addressRegion}
            </p>
            <p>
              <a href={`tel:${BROKERAGE.phone}`}>{BROKERAGE.phoneDisplay}</a>
              <br />
              <a href={`mailto:${BROKERAGE.email}`}>{BROKERAGE.email}</a>
              <br />
              <a href={BROKERAGE.url} rel="noopener noreferrer">
                fahadsold.com
              </a>
            </p>
          </div>
        </div>
        <p className={styles.disclaimer}>{NON_REPRESENTATION_DISCLAIMER}</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {BROKERAGE.agentName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
