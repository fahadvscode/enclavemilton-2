"use client";

import { FormEvent, useState } from "react";
import { getRegistrationModelOptions } from "@/lib/registration-options";
import { siteData } from "@/lib/floor-plans";
import styles from "./RegistrationFormFields.module.css";

export type RegistrationFormVariant = "home" | "modal";

interface RegistrationFormFieldsProps {
  variant?: RegistrationFormVariant;
  defaultModel?: string;
  defaultCollection?: string;
  source?: string;
  onSuccess?: () => void;
  submitLabel?: string;
}

export function RegistrationFormFields({
  variant = "home",
  defaultModel = "",
  defaultCollection = "",
  source = "homepage",
  onSuccess,
  submitLabel,
}: RegistrationFormFieldsProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const modelOptions = getRegistrationModelOptions();

  const resolvedDefault =
    defaultModel || modelOptions[0]?.value || "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          model: data.get("model"),
          collection: data.get("collection"),
          source,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Registration failed. Please try again.");
      }

      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon} aria-hidden="true">
          ✓
        </div>
        <h3>You&apos;re on the list</h3>
        <p>
          Floor plan PDFs and current pricing for The Enclave Milton are on the way.
          Check your inbox and spam folder within a few minutes.
        </p>
      </div>
    );
  }

  const label =
    submitLabel ??
    (variant === "home" ? "Unlock floor plans & pricing" : "Get floor plan & pricing");

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${variant === "home" ? styles.formHome : styles.formModal}`}
      noValidate
    >
      <div className={styles.row}>
        <label>
          <span>First name</span>
          <input name="firstName" type="text" required autoComplete="given-name" placeholder="Alex" />
        </label>
        <label>
          <span>Last name</span>
          <input name="lastName" type="text" required autoComplete="family-name" placeholder="Chen" />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="(416) 555-0100" />
      </label>
      <label>
        <span>Model of interest</span>
        <select
          name="model"
          defaultValue={resolvedDefault}
          required
          onChange={(e) => {
            const opt = modelOptions.find((o) => o.value === e.target.value);
            const collectionInput = e.currentTarget.form?.querySelector<HTMLInputElement>(
              'input[name="collection"]'
            );
            if (collectionInput && opt) collectionInput.value = opt.collection;
          }}
        >
          {modelOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <input
        type="hidden"
        name="collection"
        defaultValue={
          defaultCollection ||
          modelOptions.find((o) => o.value === resolvedDefault)?.collection ||
          "Village & Park"
        }
      />

      {status === "error" && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className={`btn btn-gold btn-block ${styles.submit}`} disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : label}
      </button>

      <p className={styles.privacy}>
        By registering, you agree to receive updates about The Enclave Milton by {siteData.project.builder}.
        Pricing, deposits, and lot details are shared in your personalized follow-up.
      </p>
    </form>
  );
}
