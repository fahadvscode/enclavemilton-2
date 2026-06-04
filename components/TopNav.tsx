import Link from "next/link";
import styles from "./TopNav.module.css";

export default function TopNav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.mark} aria-hidden />
          <span>The Enclave Milton</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/floor-plans">Floor plans</Link>
          <a href="#register" className={styles.cta}>
            Get pricing
          </a>
        </nav>
      </div>
    </header>
  );
}
