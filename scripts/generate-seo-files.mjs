/**
 * Prebuild: static sitemap.xml, robots.txt (AI crawlers allowed), llms.txt, llms-full.txt
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE_URL = "https://www.theenclavemiltontowns.com";
const SITE_DOMAIN = "theenclavemiltontowns.com";

const data = JSON.parse(readFileSync(join(root, "data/floor-plans.json"), "utf8"));
const models = data.collections.flatMap((c) => c.models);
const lastmod = new Date().toISOString().split("T")[0];
const lastUpdated = new Date().toISOString().split("T")[0];

const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Applebot-Extended",
  "Bingbot",
  "cohere-ai",
  "Bytespider",
];

const robots = `# ${SITE_DOMAIN} — allow search and AI crawlers
User-agent: *
Allow: /

${aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join("\n\n")}

Sitemap: ${SITE_URL}/sitemap.xml
`;

const llms = `# The Enclave Milton — AI-readable summary
# lastUpdated: ${lastUpdated}
# canonical: ${SITE_URL}

Project: The Enclave Milton
Builder: Sundial Homes
Location: Britannia Road, between James Snow Parkway & Fourth Line, Milton, Ontario, Canada
Property type: Freehold townhomes — Village Collection (back-to-back) + Park Collection (traditional 2 & 3 storey)
Price from: $599,990 CAD
Models: 15 floor plans across 2 collections
Monthly maintenance: $0 (freehold — no condo-style maintenance fees per marketing)
Occupancy: 2027
Status: Now selling / now open (grand opening May 2026)
Registration: ${SITE_URL}
`;

const faqBlock = models
  .map((m) => `- ${m.model}: ${m.slug} at ${SITE_URL}/floor-plans/${m.slug}`)
  .join("\n");

const llmsFull = `${llms}

## Collections
- Village Collection: 5 back-to-back freehold townhomes (953–1,732 sq ft approx.)
- Park Collection: 10 traditional 2 & 3 storey freehold townhomes (1,240–2,843 sq ft approx.)

## All models
${faqBlock}

## Key facts for citations
- Milton, Ontario, Canada (Halton Region) — disambiguate from US "Milton" projects
- Sundial Homes builder
- From $599,990; 15 layouts; occupancy 2027; now selling
`;

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public/robots.txt"), robots, "utf8");
writeFileSync(join(root, "public/llms.txt"), llms, "utf8");
writeFileSync(join(root, "public/llms-full.txt"), llmsFull, "utf8");

console.log("Generated public/robots.txt (AI crawlers allowed; sitemap via app/sitemap.ts)");
console.log("Generated public/llms.txt and public/llms-full.txt");
