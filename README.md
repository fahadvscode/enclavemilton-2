# The Enclave Milton — Site B (`theenclavemiltontowns.com`)

High-converting alternate landing site for **The Enclave Milton** by Sundial Homes. Shares lead backend with [enclavemilton.com](https://www.enclavemilton.com) (Site A) but uses a distinct design, copy, and SEO/AEO layer.

**Canonical host:** `https://www.theenclavemiltontowns.com`

## Multi-site SERP strategy

Site A and Site B both target the brand keyword **“The Enclave Milton”** on different domains with genuinely different UX and rewritten content (not doorway duplicates). Each site has its own canonical, Search Console property, sitemap, and analytics. Goal: occupy positions 1 and 2 for the brand SERP while pushing thin aggregator and competitor pages down.

Site B additionally emphasizes keyword clusters: freehold / $0 maintenance, back-to-back Village vs Park traditional, Britannia Road geo, and price-from $599,990.

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Variable | Required | Notes |
|----------|----------|--------|
| `SUPABASE_URL` | Yes (prod) | Same Supabase project as Site A |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (prod) | Server-only; never `NEXT_PUBLIC_` |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Same URL if client ever needs it |
| `REGISTRATION_WEBHOOK_URL` | Optional | CRM/Zapier webhook |
| `BUILD_DATE` | Auto | Set by `npm run build` (`YYYY-MM-DD`) for schema/sitemap freshness |

Copy `.env.example` to `.env.local` for local development.

## Supabase leads

- **Table:** `public.enclave` (shared with Site A)
- **`source`:** `theenclavemiltontowns.com`
- **`form_name`:** `Site B Registration` (hidden field — not shown in UI)

Payload shape on insert:

```json
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "model": "",
  "collection": "",
  "source": "theenclavemiltontowns.com",
  "form_name": "Site B Registration"
}
```

Build succeeds without Supabase env; leads are logged to the server console instead.

## AI crawlers & `llms.txt`

- `app/robots.ts` and `public/robots.txt` (prebuild) **allow** GPTBot, PerplexityBot, ClaudeBot, Google-Extended, and other listed AI user-agents.
- `public/llms.txt` — short factual digest for AI engines.
- `public/llms-full.txt` — extended digest with model list.

**Confirm your host/CDN is not blocking AI bots:** In Vercel, check Firewall / WAF rules. In Cloudflare, review Bot Fight Mode and custom blocks. Test with:

```bash
curl -A "GPTBot" -I https://www.theenclavemiltontowns.com/
curl -A "PerplexityBot" -I https://www.theenclavemiltontowns.com/llms.txt
```

Expect `200` responses, not `403`.

## Deploy (Vercel)

1. Import repo or `vercel link`
2. Set env vars above for Production
3. Add domain `www.theenclavemiltontowns.com` (redirect apex → www)
4. Deploy: `npm run vercel:deploy` or push to main
5. **Search Console:** add property `https://www.theenclavemiltontowns.com`, submit sitemap  
   `https://www.theenclavemiltontowns.com/sitemap.xml`

## Scripts

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build + prebuild SEO files
npm run start
ANALYZE=true npm run build   # bundle analyzer report
```

## Schema validation

Before each production deploy, test URLs in [Google Rich Results Test](https://search.google.com/test/rich-results):

- Homepage (WebSite, RealEstateAgent, Residence, Offer, FAQPage, Place, BreadcrumbList)
- `/floor-plans`
- Sample `/floor-plans/the-brighton`

No `Review` or `AggregateRating` — none are used without verifiable data.

## Lighthouse

```bash
npm run build && npm run start
# Chrome DevTools → Lighthouse → Mobile
```

Targets: Performance ≥ 95, SEO 100, LCP &lt; 2.0s, CLS &lt; 0.05. Hero uses `priority` + `sizes`; client JS limited to registration form and mobile sticky sheet.

## Stack

Next.js 15 App Router, TypeScript, CSS Modules, Supabase server insert, `next/font` (Sora + Source Sans 3).
