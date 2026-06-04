"use client";

import { useId, useState } from "react";
import { REGISTRATION_FORM_NAME } from "@/lib/registration-form";
import { getRegistrationModelOptions } from "@/lib/registration-options";
import { ALL_MODELS_VALUE } from "@/lib/registration-options";
import { SITE_B_SOURCE, FORM_DISCLAIMER } from "@/lib/site";
import type { RegistrationPayload } from "@/lib/types";
import styles from "./LeadForm.module.css";

type LeadFormProps = {
  defaultModel?: string;
  compact?: boolean;
  idPrefix?: string;
};

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function LeadForm({
  defaultModel = ALL_MODELS_VALUE,
  compact = false,
  idPrefix = "lead",
}: LeadFormProps) {
  const baseId = useId().replace(/:/g, "");
  const field = (name: string) => `${idPrefix}-${baseId}-${name}`;
  const options = getRegistrationModelOptions();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState(defaultModel);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const selected = options.find((o) => o.value === model);
    const payload: RegistrationPayload = {
      firstName,
      lastName,
      email,
      phone,
      model,
      collection: selected?.collection ?? "",
      source: SITE_B_SOURCE,
      formName: REGISTRATION_FORM_NAME,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(
        "Thank you — check your inbox (and spam folder) for floor plans and pricing. A representative will follow up shortly."
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>You&apos;re registered</p>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className={compact ? styles.formCompact : styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={field("first")}>First name</label>
          <input
            id={field("first")}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={field("last")}>Last name</label>
          <input
            id={field("last")}
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={field("email")}>Email</label>
        <input
          id={field("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor={field("phone")}>Phone</label>
        <input
          id={field("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor={field("model")}>Model interest</label>
        <select
          id={field("model")}
          name="model"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Get floor plans & pricing"}
      </button>
      <p className={styles.disclaimer}>{FORM_DISCLAIMER}</p>
      {status === "error" && (
        <p className={styles.error} role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
