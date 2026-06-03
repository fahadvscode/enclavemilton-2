import { NextResponse } from "next/server";
import type { RegistrationPayload } from "@/lib/types";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: RegistrationPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, model, collection, source } = body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !model?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const lead = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    model: model.trim(),
    collection: collection?.trim() ?? "",
    submittedAt: new Date().toISOString(),
    source: source?.trim() || "enclavemilton.com",
  };

  // Hook for CRM / email automation (e.g. Zapier webhook, Resend, HubSpot).
  const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      console.error("Webhook delivery failed for lead:", lead.email);
    }
  } else {
    console.info("[registration]", JSON.stringify(lead));
  }

  return NextResponse.json({
    ok: true,
    message:
      "Registration received. Floor plan PDF and pricing will be sent to your email.",
  });
}
