import Image from "next/image";
import Link from "next/link";
import {
  areaHighlights,
  commuteFacts,
  communityLocation,
  DISTANCE_REFERENCE,
  featuredSchoolNames,
  locationDisclaimer,
  nearbySchools,
} from "@/data/location";
import { IMAGES } from "@/lib/images";
import styles from "./LocationBlock.module.css";

export default function LocationBlock() {
  return (
    <section className="section" aria-labelledby="location-heading">
      <div className="container">
        <h2 id="location-heading">
          Where are townhomes on Britannia Road in Milton?
        </h2>
        <p className="lead">
          The Enclave sits on {communityLocation.address} in {communityLocation.area} — Milton GO,
          Highways 401 and 407, Halton schools, and everyday amenities within a short drive.
        </p>
        <div className={styles.grid}>
          <div className={styles.map}>
            <Image
              src={IMAGES.transit}
              alt="Milton area connectivity near highways and transit"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
          <div>
            <p>{communityLocation.description}</p>
            <p>
              <strong>Address:</strong> {communityLocation.address}, {communityLocation.postalContext}
            </p>
            <ul className={styles.highlights}>
              {areaHighlights.slice(0, 4).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.teaser}>
          <h3>How far are schools and Milton GO from The Enclave?</h3>
          <p>
            Estimated driving distance from {DISTANCE_REFERENCE}. Assignment is address-based —
            closest school ≠ your assigned school.
          </p>
          <ul className={styles.distanceList}>
            {nearbySchools
              .filter((s) => featuredSchoolNames.includes(s.name))
              .map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong> — {s.distanceFromSite}
                </li>
              ))}
            <li>
              <strong>{commuteFacts[0].name}</strong> — {commuteFacts[0].distanceFromSite}
            </li>
          </ul>
          <Link href="/schools-and-area" className="btn btn--primary">
            Full schools &amp; area guide with all distances
          </Link>
        </div>

        <p className={styles.disclaimer}>{locationDisclaimer}</p>
      </div>
    </section>
  );
}
