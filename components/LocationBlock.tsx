import Image from "next/image";
import {
  communityLocation,
  locationDisclaimer,
  nearbyAmenities,
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
          The Enclave sits on {communityLocation.address} in {communityLocation.area} — minutes to
          Highways 401 and 407 and Milton GO for GTA commuters.
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
              <strong>Address:</strong> {communityLocation.address}, Milton, ON, Canada
            </p>
          </div>
        </div>

        <div className={styles.columns}>
          <div>
            <h3>What schools are nearby?</h3>
            <ul className={styles.list}>
              {nearbySchools.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong> — {s.type}
                  <br />
                  <span className={styles.note}>{s.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>What amenities and commute options are close?</h3>
            <ul className={styles.list}>
              {nearbyAmenities.map((a) => (
                <li key={a.name}>
                  <strong>{a.name}</strong> ({a.category})
                  <br />
                  {a.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.disclaimer}>{locationDisclaimer}</p>
      </div>
    </section>
  );
}
