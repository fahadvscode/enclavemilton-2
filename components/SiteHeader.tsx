import Link from "next/link";
import styles from "./SiteHeader.module.css";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#location", label: "Location" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/floor-plans#village", label: "Village" },
  { href: "/floor-plans#park", label: "Park" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>The Enclave</span>
          <span className={styles.logoSub}>Milton</span>
        </Link>
        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#register" className="btn btn-gold">
          Get pricing
        </Link>
      </div>
    </header>
  );
}
