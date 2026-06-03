import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type RegistrationRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  model: string;
  collection: string;
  source: string;
  form_name: string;
  created_at: string;
};

export type RegistrationInsert = Omit<RegistrationRow, "id" | "created_at">;

function getSupabaseUrl() {
  return process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseUrl() && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function createSupabaseAdmin(): SupabaseClient | null {
  const url = getSupabaseUrl();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function insertRegistration(
  row: RegistrationInsert
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return { ok: false, error: "Supabase is not configured." };
  }

  const { data, error } = await supabase
    .from("registrations")
    .insert(row)
    .select("id")
    .single();

  if (error) {
    console.error("[supabase] insert registration failed:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true, id: data.id };
}
