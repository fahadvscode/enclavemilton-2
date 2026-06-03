/**
 * Creates the enclave leads table using your database connection string.
 *
 * 1. Supabase Dashboard → Project Settings → Database
 * 2. Copy "URI" under Connection string (Session pooler), replace [YOUR-PASSWORD]
 * 3. Add to .env.local: SUPABASE_DB_URL=postgresql://...
 * 4. Run: node scripts/setup-supabase-table.mjs
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import postgres from "postgres";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadEnvLocal() {
  try {
    const raw = readFileSync(join(root, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const i = trimmed.indexOf("=");
      if (i === -1) continue;
      const key = trimmed.slice(0, i);
      let val = trimmed.slice(i + 1);
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    /* optional */
  }
}

loadEnvLocal();

const dbUrl = process.env.SUPABASE_DB_URL;
if (!dbUrl) {
  console.error(`
Missing SUPABASE_DB_URL in .env.local

Get it from Supabase → Settings → Database → Connection string (URI, Session pooler).
Replace [YOUR-PASSWORD] with your database password.

Or run the SQL manually:
  supabase/RUN_IN_DASHBOARD.sql
  https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new
`);
  process.exit(1);
}

const sql = readFileSync(join(root, "supabase/RUN_IN_DASHBOARD.sql"), "utf8");
const pg = postgres(dbUrl, { ssl: "require", max: 1 });

try {
  await pg.unsafe(sql);
  console.log("Done. Table public.enclave is ready.");
  console.log("Open Table Editor → enclave");
} catch (err) {
  console.error("Migration failed:", err.message);
  process.exit(1);
} finally {
  await pg.end();
}
