/**
 * Writes static sitemap.xml and robots.txt to public/ for reliable Google Search Console fetching.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE_URL = "https://www.enclavemilton.com";

const data = JSON.parse(readFileSync(join(root, "data/floor-plans.json"), "utf8"));
const models = data.collections.flatMap((c) => c.models);
const lastmod = new Date().toISOString();

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const urls = [
  { loc: SITE_URL, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/floor-plans`, changefreq: "weekly", priority: "0.9" },
  ...models.map((m) => ({
    loc: `${SITE_URL}/floor-plans/${m.slug}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(join(root, "public/robots.txt"), robots, "utf8");

console.log(`Generated public/sitemap.xml (${urls.length} URLs)`);
console.log(`Generated public/robots.txt`);
