"use client";

import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";
import styles from "./MobileStickyCta.module.css";

export default function MobileStickyCta() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle("has-sticky-cta", true);
    return () => document.body.classList.remove("has-sticky-cta");
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const sheet = sheetRef.current;
    sheet?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [open]);

  return (
    <>
      <div className={styles.bar} role="region" aria-label="Quick registration">
        <button
          ref={triggerRef}
          type="button"
          className={styles.barBtn}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-register-sheet"
        >
          Get floor plans & pricing
        </button>
      </div>

      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden />
      )}

      <div
        id="mobile-register-sheet"
        ref={sheetRef}
        className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        tabIndex={-1}
      >
        <div className={styles.sheetHeader}>
          <h2 id="sheet-title">Register for pricing</h2>
          <button
            type="button"
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Close registration form"
          >
            ×
          </button>
        </div>
        <LeadForm idPrefix="mobile" compact />
      </div>
    </>
  );
}
