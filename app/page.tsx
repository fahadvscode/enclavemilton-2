import Link from "next/link";
import { StockImage } from "@/components/StockImage";
import { siteData } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { projectOfferSchema } from "@/lib/schema";
import styles from "./page.module.css";

const collectionImages: Record<string, string> = {
  village: IMAGES.villageCollection,
  park: IMAGES.parkCollection,
};

const highlights = [
  {
    title: "Freehold ownership",
    text: "No monthly maintenance fees on Village and Park collections.",
  },
  {
    title: "15 home designs",
    text: "From 953 sq ft back-to-back townhomes to 2,843 sq ft corner residences.",
  },
  {
    title: "Southeast Milton",
    text: "Sundial Homes' newest community with occupancy in 2027.",
  },
];

export default function HomePage() {
  const { project, collections } = siteData;
  const totalModels = collections.reduce((n, c) => n + c.models.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectOfferSchema()) }}
      />

      <section className={styles.hero}>
        <StockImage
          src={IMAGES.hero}
          alt="The Enclave Milton — new freehold townhomes by Sundial Homes"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            {project.city} · By {project.builder}
          </p>
          <h1>The Enclave</h1>
          <p className={styles.tagline}>
            Freehold townhomes in southeast Milton — no monthly maintenance fees
          </p>
          <p className={styles.from}>From {project.startingFrom}</p>
          <div className={styles.ctas}>
            <Link href="/floor-plans" className="btn btn-gold">
              View {totalModels} floor plans
            </Link>
            <Link href="/floor-plans#register" className="btn btn-outline">
              Register for pricing
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Community highlights">
        <div className="container">
          <ul className={styles.statsList}>
            <li>
              <strong>{totalModels}</strong>
              <span>Floor plans</span>
            </li>
            <li>
              <strong>{project.startingFrom}</strong>
              <span>Starting from</span>
            </li>
            <li>
              <strong>{project.occupancy}</strong>
              <span>Occupancy</span>
            </li>
            <li>
              <strong>$0</strong>
              <span>Maintenance fees</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Two collections. Fifteen models.</h2>
          <p className="lead">
            Explore every layout at The Enclave — from compact back-to-back townhomes to
            Milton&apos;s largest traditional townhome at 2,843 sq ft.
          </p>
          <div className={styles.collections}>
            {collections.map((c) => (
              <Link key={c.id} href={`/floor-plans#${c.id}`} className={styles.collectionCard}>
                <div className={styles.collectionImage}>
                  <StockImage
                    src={collectionImages[c.id]!}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.collectionImg}
                  />
                </div>
                <div className={styles.collectionBody}>
                  <span className="badge">{c.tagline}</span>
                  <h3>{c.name}</h3>
                  <p>{c.type}</p>
                  <span className={styles.collectionCta}>{c.models.length} models →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.lifestyle}>
        <StockImage
          src={IMAGES.lifestyle}
          alt="Modern townhome interior at The Enclave Milton"
          fill
          className={styles.lifestyleBg}
          sizes="100vw"
        />
        <div className={styles.lifestyleOverlay} aria-hidden="true" />
        <div className={`container ${styles.lifestyleContent}`}>
          <h2>Space for how you live</h2>
          <p>
            Thoughtful layouts, freehold ownership, and room to grow — whether you&apos;re buying
            your first home or upgrading for a growing family.
          </p>
          <Link href="/floor-plans" className="btn btn-gold">
            Explore floor plans
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <StockImage
                src={IMAGES.community}
                alt="New home community in Milton, Ontario"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.whyImg}
              />
            </div>
            <div>
              <h2 className="section-title">Why The Enclave</h2>
              <ul className={styles.highlights}>
                {highlights.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/floor-plans#register" className="btn btn-primary">
                Register for pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
