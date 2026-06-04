import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import styles from "./TopNav.module.css";

export default function TopNav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={IMAGES.logo}
            alt="The Enclave — Townhomes and Detached Homes"
            width={200}
            height={52}
            className={styles.logoImg}
            priority
          />
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
