"use client";

import { REGISTRATION_FORM_NAME } from "@/lib/registration-form";
import { siteData } from "@/lib/floor-plans";
import { RegistrationFormFields } from "./RegistrationFormFields";
import styles from "./HomeLeadForm.module.css";

const perks = [
  "Full PDF floor plans for all 15 models",
  "Current model pricing from $599,990",
  "Village & Park collection details",
  "Zero monthly maintenance fees",
];

export function HomeLeadForm() {
  const totalModels = siteData.collections.reduce((n, c) => n + c.models.length, 0);

  return (
    <aside id="register" className={styles.card} aria-labelledby="home-register-heading">
      <p className={styles.formName}>{REGISTRATION_FORM_NAME}</p>
      <div className={styles.badgeRow}>
        <span className={styles.liveBadge}>Now registering</span>
        <span className={styles.meta}>{totalModels} floor plans · Occupancy {siteData.project.occupancy}</span>
      </div>

      <h2 id="home-register-heading" className={styles.title}>
        Get floor plans &amp; pricing in under a minute
      </h2>
      <p className={styles.subtitle}>
        New freehold townhomes in southeast Milton — register for instant access to layouts,
        elevations, and current pricing information.
      </p>

      <ul className={styles.perks} aria-label="What you receive">
        {perks.map((perk) => (
          <li key={perk}>
            <span className={styles.check} aria-hidden="true">
              ✓
            </span>
            {perk}
          </li>
        ))}
      </ul>

      <RegistrationFormFields variant="home" source="homepage-hero" />
    </aside>
  );
}
