"use client";

import { useEffect, useRef } from "react";
import { REGISTRATION_FORM_NAME } from "@/lib/registration-form";
import { siteData } from "@/lib/floor-plans";
import { RegistrationFormFields } from "./RegistrationFormFields";
import styles from "./RegistrationModal.module.css";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
  defaultModel?: string;
  defaultCollection?: string;
}

export function RegistrationModal({
  open,
  onClose,
  defaultModel = "",
  defaultCollection = "",
}: RegistrationModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      aria-labelledby="register-title"
    >
      <div className={styles.panel}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className={styles.formName}>{REGISTRATION_FORM_NAME}</p>
        <h2 id="register-title">Register for floor plans &amp; pricing</h2>
        <p className={styles.intro}>
          Get the complete floor plan PDF and current model pricing for The Enclave Milton.
          Starting from {siteData.project.startingFrom}.
        </p>

        <RegistrationFormFields
          variant="modal"
          defaultModel={defaultModel}
          defaultCollection={defaultCollection}
          source="modal"
          onSuccess={() => {
            /* keep modal open to show success state inside form */
          }}
        />
      </div>
    </dialog>
  );
}
