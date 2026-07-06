# BUILD PROMPT — The Enclave Milton, Site C (GEO-Heavy Alternate + Location Supplement)

**Paste this entire file into Cursor.** Use alongside or after your main Site C design prompt.  
**Codebase to fork:** [github.com/fahadvscode/enclavemilton-2](https://github.com/fahadvscode/enclavemilton-2) (Site B — has schools-and-area page, distances, `.ca` SEO, favicon, disclaimers) or [github.com/fahadvscode/enclave1](https://github.com/fahadvscode/enclave1) (Site A — original). **Prefer Site B** as the starting repo.

**Site B live reference:** https://www.theenclavemiltontowns.ca/  
**Site A live reference:** https://www.enclavemilton.com/

---

## 0. Fill this in first (Site C)

| Constant | Value |
|----------|--------|
| `NEW_DOMAIN` | ________________ *(e.g. `enclavemiltontownhomes.ca` — you choose)* |
| Canonical host | `https://www.NEW_DOMAIN` (www, https, no trailing slash) |
| `SITE_C_SOURCE` | `NEW_DOMAIN` (Supabase `source` column) |
| `REGISTRATION_FORM_NAME` | `Site C Registration` (hidden field — not shown in UI) |
| `LEADS_TABLE` | `enclave` (**do not change** — shared with Site A & B) |
| `SITE_NAME` | The Enclave Milton |
| Launch status | **NOW SELLING / NOW OPEN** (occupancy 2027) |

**SERP rule:** Site C must use **genuinely different** layout, typography, and rewritten copy vs Site A and Site B — same facts, different sentences. Not doorway pages.

---

## 1. Environment & deployment (copy from our stack)

### Supabase (same project as Site A & B)

| Variable | Value |
|----------|--------|
| `SUPABASE_URL` | `https://cfzuypbljirmibmxpabi.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://cfzuypbljirmibmxpabi.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Copy from **Vercel → enclave1** (Site A) → Environment Variables → Reveal `SUPABASE_SERVICE_ROLE_KEY` — CLI cannot export sensitive values. Or run Site B script: `bash scripts/sync-supabase-env-from-site-a.sh` after cloning. |
| `REGISTRATION_WEBHOOK_URL` | Optional — same Zapier/CRM as Site A if used |
| `BUILD_DATE` | Auto: `BUILD_DATE=$(date -u +%Y-%m-%d)` in `npm run build` |

**Lead insert payload** (`POST /api/register` → `public.enclave`):

```json
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "model": "",
  "collection": "",
  "source": "NEW_DOMAIN",
  "form_name": "Site C Registration"
}
```

**Do not** expose `SUPABASE_SERVICE_ROLE_KEY` in the browser or `NEXT_PUBLIC_*`.

### Vercel

1. New project (e.g. `enclavemilton-3`) or import new GitHub repo cloned from Site B.
2. Add domain `www.NEW_DOMAIN` (apex → www redirect).
3. Set all Supabase env vars above for **Production** (and Preview if desired).
4. Deploy: `npm run build` / push to `main` / `npx vercel --prod --yes`.
5. **Google Search Console:** property `https://www.NEW_DOMAIN`, sitemap `https://www.NEW_DOMAIN/sitemap.xml`.

### Local dev

```bash
cp .env.example .env.local
# Paste SUPABASE_SERVICE_ROLE_KEY from Site A Vercel or Supabase Dashboard → Settings → API
npm install && npm run dev
```

### Compliance copy (required — from Site B)

- `NON_REPRESENTATION_DISCLAIMER` in footer + beside forms: independent marketing site; not Sundial’s official sales office; prices/availability may change; E.&O.E.
- `FORM_DISCLAIMER` on registration forms.
- **No** agent name, brokerage, phone, or fahadsold.com on Site C.
- School copy: never guarantee catchment; link HDSB/HCDSB locators; include distance disclaimer.

### School board official links (use in UI + FAQs)

- HDSB locator: https://schoollocator.hdsb.ca/
- HDSB find school: https://www.hdsb.ca/schools/find-local-school/
- HCDSB finder: https://hcdsb.ca/schools/school-finder/
- Britannia plan (Town): https://www.letstalkmilton.ca/britannia

### Geo reference for all distances

**Reference point:** Britannia Road at James Snow Parkway, The Enclave Milton (between James Snow & Fourth Line).  
**Schema coordinates (approximate intersection):** `latitude: 43.5085`, `longitude: -79.8628`  
**Disclaimer (always show near distance lists):** *"Distances and drive times are approximate and may vary with traffic conditions. School assignment is address-based — verify with HDSB and HCDSB for your lot."*

---

## 2. Brand assets — logo & images (verified URLs)

Use these exact URLs in `lib/images.ts` (or equivalent). All HTTP 200. **Community/project only — no residential interiors.**

| Key | URL | Use |
|-----|-----|-----|
| **logo** | `https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780533510331_enclave_logo.png` | Header, hero, **favicon** (`app/icon.png` — pad wordmark to square on `#1e3b41`) |
| **hero** | `https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780268468620_Screenshot-2026-05-13-at-16.59.20.png` | Homepage hero, OG default, floor-plans banner |
| **trails** | `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80` | Escarpment / trails sections |
| **recreation** | `https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80` | Sports / recreation |
| **cycling** | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80` | Mattamy Cycling Centre / cycling |
| **nature** | `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80` | Conservation / nature |
| **transit** | `https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80` | GO / commute / connectivity |
| **shopping** | `https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80` | Retail / outlets |

**Site B brand colours (if Site C does not define new palette):**

- Primary: `#1e3b41` (teal)
- Secondary: `#b6afa2` (warm stone)
- Background: `#faf9f7` (off-white)
- Fonts: **Sora** (headings) + **Source Sans 3** (body) — or pick a **third** pairing for Site C differentiation

**Favicon:** Download logo PNG → pad to 1024×1024 on `#1e3b41` → `app/icon.png` + `app/apple-icon.png` (see Site B).

---

## 3. Product facts (all sites — keep consistent)

| Fact | Value |
|------|--------|
| Builder | Sundial Homes |
| Location | Britannia Road, between James Snow Parkway & Fourth Line, Milton, Ontario, Canada |
| Type | Freehold townhomes — **Village Collection** (5 back-to-back) + **Park Collection** (10 traditional 2 & 3 storey) |
| Models | 15 floor plans |
| Price from | $599,990 CAD |
| Maintenance | $0 monthly (freehold — per marketing) |
| Occupancy | 2027 |
| Status | Now selling |

**Data file:** clone `data/floor-plans.json` from Site B (do not invent sq ft or prices).

**Pages (minimum):** `/`, `/floor-plans`, `/floor-plans/[slug]` (15 SSG), `/schools-and-area` (GEO hub), `/api/register`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`.

---

## 4. Location, Schools, Amenities & GEO FAQ Block

**Supplement to Site B + Site C build prompts.**  
**All data verified from official sources (Town of Milton, HDSB, HCDSB, Conservation Halton, GO Transit, Wikipedia). Distances are approximate from Britannia Rd & James Snow Pkwy.**

> **Why this matters for GEO:** AI engines cite pages with specific, verifiable, locally-grounded facts. "Near great schools" gets ignored. "Served by Craig Kielburger Secondary School (IB program, 2,000+ students, Halton District School Board) — approximately 8 minutes by car" gets quoted. Pack every section with real names, real distances, real facts.

---

### 4.1 SCHOOLS (Location section + dedicated FAQ answers)

Build a "Schools & Education" subsection. Name every school, its board, its grade range, and approximate distance/drive time. Group by board.

#### Halton District School Board (HDSB — Public)

**Elementary (JK–8):**

| School | Approx. distance | Notes |
|---|---|---|
| Sam Sherratt Public School | ~5 min drive | Established community school in southeast Milton |
| Hawthorne Village Public School | ~5–8 min | Newer school serving growing neighbourhoods |
| Tiger Jeet Singh Public School | ~8 min | Named after Canadian wrestling icon |
| Viola Desmond Public School | ~8 min | Newer school, named after Canadian civil rights pioneer |
| Irma Coulson Public School | ~8 min | |
| P.L. Robertson Public School | ~10 min | |
| Chris Hadfield Public School | ~10 min | Named after the Canadian astronaut |
| Rattlesnake Point Public School | ~10 min | |
| Milton SE #13 PS | Planned | Future school planned for southeast Milton growth area — directly relevant to The Enclave |

**Secondary (9–12):**

| School | Approx. distance | Notes |
|---|---|---|
| **Craig Kielburger Secondary School** | ~8 min drive | **Nearest secondary.** Southeast Milton. 2,000+ students. Offers **International Baccalaureate (IB) Diploma**, French Immersion, SHSM, Cooperative Education, full arts & athletics. Opened 2012 in modern facility (triple gym, studio/theatre, food school, tech ed). |
| Milton District High School | ~12 min | Milton's established public secondary. |
| Elsie MacGill Secondary School | ~10 min | Newer secondary serving east Milton. |

#### Halton Catholic District School Board (HCDSB — Catholic)

**Elementary (JK–8):**

| School | Approx. distance | Notes |
|---|---|---|
| St. Peter Catholic Elementary | ~5–8 min | |
| St. Benedict Catholic Elementary | ~8 min | |
| St. Scholastica Catholic Elementary | ~8 min | |
| St. Anthony of Padua Catholic Elementary | ~10 min | |
| Holy Rosary Catholic Elementary | ~12 min | Highest EQAO scores in Milton (avg 7.2/10, recent 7.9). Extended French Immersion from Grade 5. |

**Secondary (9–12):**

| School | Approx. distance | Notes |
|---|---|---|
| **Bishop P.F. Reding Catholic Secondary** | ~10 min | **Highest-scoring secondary school in Milton.** Catholic board. |
| St. Francis Xavier Catholic Secondary | ~12 min | |

#### Content guidance

- Always name **both school boards** — Halton District School Board (public) and Halton Catholic District School Board (Catholic).
- Lead with Craig Kielburger SS (nearest, IB program) and Bishop P.F. Reding CSS (highest scores).
- Mention **planned Milton SE #13 PS** for southeast growth / Britannia Secondary Plan.
- Use question-first heading: **"What schools are near The Enclave Milton?"**
- Link to HDSB/HCDSB locators; never promise assignment by proximity.

---

### 4.2 TRANSIT & CONNECTIVITY

#### Highway access

| Route | From The Enclave | Access via |
|---|---|---|
| **Highway 401** | ~3–5 min drive | James Snow Parkway interchange (immediately south) or Britannia Road |
| **Highway 407 ETR** | ~8–10 min drive | Connects east to Mississauga/Toronto, west to Hamilton |
| **Britannia Road** | Direct frontage | East–west arterial connecting to Trafalgar Rd, Regional Rd 25 |
| **James Snow Parkway** | Direct access | North–south arterial connecting to Hwy 401 |
| **Fourth Line** | Adjacent | Connects north to Derry Road and Milton's east side |

#### Public transit

| Service | Details |
|---|---|
| **Milton GO Station** | ~8–10 min drive (780 Main Street East). Western terminus of the GO Transit Milton line. **Direct train to Toronto Union Station** — peak-hour service. GO bus service throughout the day. |
| **Milton Transit** | Local bus network connecting to GO Station, schools, shopping, and recreation. Route 21 connects GO Station to Steeles/Trafalgar area. |

#### Commute times (approximate, by car, non-peak)

| Destination | Drive time | Distance |
|---|---|---|
| **Downtown Toronto (Union Station)** | ~45–55 min | ~55 km |
| **Mississauga City Centre** | ~25–30 min | ~30 km |
| **Pearson International Airport (YYZ)** | ~25–30 min | ~35 km |
| **Oakville (downtown)** | ~20–25 min | ~25 km |
| **Hamilton (McMaster University)** | ~30–35 min | ~40 km |
| **University of Toronto Mississauga (UTM)** | ~20–25 min | ~25 km |
| **Brampton** | ~20–25 min | ~25 km |
| **Square One Shopping Centre** | ~20–25 min | ~28 km |

#### Content guidance

- Lead with Highway 401 ~3–5 min via James Snow Parkway.
- Milton GO → Union Station is the #2 transit fact.
- Headings: **"How far is The Enclave Milton from Highway 401?"** / **"What's the commute from Milton to Toronto?"**

---

### 4.3 SHOPPING & DAILY ESSENTIALS

| Amenity | Approx. distance | Details |
|---|---|---|
| **Toronto Premium Outlets** | ~10 min drive / 9.3 km | 100+ outlet stores. Steeles Ave at Trafalgar Rd. |
| **Milton Crossroads** | ~10 min drive | Walmart, Canadian Tire, Staples, Indigo, Marks, restaurants. |
| **Milton Marketplace** | ~10–12 min | Additional retail and grocery. |
| **Downtown Milton (Main Street)** | ~10 min drive | Historic Main Street, cafés, seasonal farmers' market. |
| **Grocery (multiple)** | ~5–10 min | FreshCo, Food Basics, Metro, Sobeys, Walmart Supercentre. |
| **Costco** | ~12–15 min | Milton-area Costco. |

---

### 4.4 RECREATION, PARKS & NATURE

| Amenity | Approx. distance | Details |
|---|---|---|
| **Mattamy National Cycling Centre** | ~5–8 min drive | Canada's **only UCI-regulated Class 1 indoor velodrome** (2015 Pan Am Games, ~$63M). Community rec: 3 gymnasiums, indoor track, fitness studio. Tremaine Rd near Britannia. |
| **Milton Education Village (MEV)** | Adjacent / ~5 min | **162 hectares (400 acres)** planned mixed-use centred on Cycling Centre; Britannia Rd south boundary. 2051 long-term vision — education, healthcare, recreation, transit. |
| **Milton Leisure Centre** | ~10 min | Lap pool, play pool, waterslide, fitness. |
| **Milton Sports Centre** | ~10 min | Fitness studio, pools, programs. |
| **John Tonelli Sports Centre** | ~12 min | Ice rink, meeting rooms. |
| **Rattlesnake Point Conservation Area** | ~15 min | Escarpment lookouts, hiking, rock climbing. Conservation Halton. |
| **Crawford Lake Conservation Area** | ~15 min | Meromictic lake, 19 km trails, Iroquoian longhouse village. |
| **Kelso Conservation Area** | ~12 min | 22+ km trails, beach, ski/snowboard hill (winter). |
| **Hilton Falls Conservation Area** | ~10 min | 33.5 km trails, waterfall, Escarpment forest. |
| **Area 8 (Conservation Halton)** | ~12 min | 3 trails, 4 lookouts, fire pit, boat rentals. |
| **Bruce Trail** | Nearby access points | Canada's oldest marked footpath — 900+ km along the Escarpment. |
| **Niagara Escarpment UNESCO World Biosphere Reserve** | Nearby | Use full UNESCO phrase — citable authority signal. |
| **Town of Milton parks & trails** | Throughout | Trail network, parks, playgrounds, sports fields, dog parks. |

**Hooks:** Mattamy velodrome (5 min); MEV 162 ha (future value); UNESCO Escarpment; name Conservation Halton parks with trail km.

---

### 4.5 HEALTHCARE

| Facility | Approx. distance | Details |
|---|---|---|
| **Milton District Hospital** | ~10 min drive | 129-bed acute care, **Halton Healthcare**. Emergency, imaging, mental health. Derry Road. Expanded 2017. |
| **Halton Healthcare network** | Regional | Oakville Trafalgar Memorial, Georgetown Hospital. |
| **Walk-in clinics & family practices** | ~5–10 min | Multiple clinics throughout Milton. |

---

### 4.6 GEO-OPTIMIZED FAQ — LOCATION, SCHOOLS & AMENITIES (18 items)

Add to existing product FAQs (pricing, fees, collections, deposits, Tarion, etc.) for **30+ total**. Every answer: direct fact first, then expand. **Rewrite wording for Site C — same facts, different sentences.**

#### Schools

**Q: What schools are near The Enclave Milton?**  
A: The Enclave is served by both the Halton District School Board (public) and the Halton Catholic District School Board. The nearest secondary school is Craig Kielburger Secondary School, approximately 8 minutes by car, offering an International Baccalaureate (IB) Diploma program to 2,000+ students. Bishop P.F. Reding Catholic Secondary School, Milton's highest-scoring high school, is roughly 10 minutes away. Multiple elementary schools from both boards are within 5–10 minutes.

**Q: Does The Enclave Milton have access to French Immersion programs?**  
A: Yes. Craig Kielburger Secondary School offers French Immersion. Holy Rosary Catholic Elementary School offers Extended French Immersion starting in Grade 5. Both are within the catchment area served by schools near The Enclave.

**Q: Are there plans for new schools near The Enclave Milton?**  
A: The Halton District School Board's long-term plan includes future schools for southeast Milton's growth areas, including the Britannia Secondary Plan zone where The Enclave is located. Milton's school-age population increased by approximately 185% between 2011 and 2021, driving ongoing school construction.

#### Transit & commute

**Q: How far is The Enclave Milton from Highway 401?**  
A: Highway 401 is approximately 3–5 minutes by car via the James Snow Parkway interchange, which is immediately south of the community.

**Q: Can I take the GO Train from The Enclave Milton to Toronto?**  
A: Milton GO Station is approximately 8–10 minutes by car from The Enclave. The Milton GO line provides direct train service to Toronto's Union Station during peak hours, with GO bus service running throughout the day.

**Q: What's the commute from The Enclave Milton to downtown Toronto?**  
A: By car, downtown Toronto is approximately 45–55 minutes (about 55 km) via Highway 401, depending on traffic. By GO Transit from Milton GO Station, the trip to Union Station takes approximately 55–65 minutes by train.

**Q: How far is Pearson Airport from The Enclave Milton?**  
A: Toronto Pearson International Airport (YYZ) is approximately 25–30 minutes by car (about 35 km) via Highway 401.

**Q: Is there local public transit near The Enclave Milton?**  
A: Milton Transit operates local bus routes connecting the community to Milton GO Station, schools, shopping centres, and recreation facilities throughout the town.

#### Shopping & daily life

**Q: What shopping is near The Enclave Milton?**  
A: Toronto Premium Outlets (100+ outlet stores) is approximately 10 minutes by car. Milton Crossroads (Walmart, Canadian Tire, Staples, Indigo) is about 10 minutes away. Downtown Milton's historic Main Street offers local shops, cafés, and a seasonal farmers' market. Multiple grocery stores (Metro, Sobeys, FreshCo, Food Basics) are within 5–10 minutes.

**Q: Is Toronto Premium Outlets near The Enclave Milton?**  
A: Yes. Toronto Premium Outlets, one of Ontario's largest outlet shopping destinations, is approximately 10 minutes by car (about 9 km) from The Enclave.

#### Recreation & nature

**Q: What parks and trails are near The Enclave Milton?**  
A: Milton is surrounded by Conservation Halton parks along the Niagara Escarpment, a UNESCO World Biosphere Reserve. Hilton Falls (33.5 km of trails, waterfall) is about 10 minutes away. Rattlesnake Point (Escarpment lookouts, rock climbing) and Crawford Lake (meromictic lake, 19 km of forest trails, reconstructed Iroquoian village) are each about 15 minutes. Kelso (22+ km of trails, beach, ski hill) is roughly 12 minutes. The Bruce Trail, Canada's oldest and longest marked footpath, has multiple Milton access points.

**Q: What is the Mattamy National Cycling Centre?**  
A: The Mattamy National Cycling Centre, approximately 5 minutes from The Enclave, is Canada's only UCI-regulated Class 1 indoor velodrome — the second of its kind in North America. Built for the 2015 Pan American Games, the $63-million facility also serves as a community recreation centre with three gymnasiums, an indoor walking/running track, and fitness studios.

**Q: What is the Milton Education Village?**  
A: The Milton Education Village (MEV) is a planned 162-hectare (400-acre) mixed-use development centred on the Mattamy National Cycling Centre, bounded by Britannia Road to the south — adjacent to The Enclave's neighbourhood. Approved in 2024, the MEV will integrate education, healthcare, recreation, and transit, and is a core part of the Town of Milton's 2051 long-term growth vision.

**Q: Is The Enclave Milton near the Niagara Escarpment?**  
A: Yes. Milton sits at the base of the Niagara Escarpment, which is a UNESCO World Biosphere Reserve. Escarpment conservation areas including Rattlesnake Point, Crawford Lake, Kelso, and Hilton Falls are all within 10–15 minutes of The Enclave.

#### Healthcare

**Q: Is there a hospital near The Enclave Milton?**  
A: Milton District Hospital, operated by Halton Healthcare, is approximately 10 minutes by car. It is a 129-bed acute care hospital with a full emergency department, diagnostic imaging, and specialized services. It was significantly expanded in 2017.

#### Community & growth

**Q: Why is Milton a good place to buy a home?**  
A: Milton is one of Ontario's fastest-growing towns. Its population grew 57.6% between 2011 and 2021 (from 84,362 to 132,979). The town offers top-rated schools (both public and Catholic boards), world-class recreation (Mattamy National Cycling Centre, Conservation Halton parks), direct Highway 401 access, GO Transit service to Toronto, and a historic downtown Main Street — at price points below neighbouring Oakville and Mississauga.

**Q: How does The Enclave Milton compare to other Milton townhome developments?**  
A: The Enclave is one of the only current freehold townhome developments in Milton with $0 monthly maintenance fees. At starting prices from $599,990, it sits well below the February 2026 Milton townhome resale average of approximately $826,848. With 15 floor plans across two collections (Village back-to-back and Park traditional) and a 2027 occupancy, it offers more model variety than most competing projects in the area.

**Q: Is Milton close to universities?**  
A: University of Toronto Mississauga (UTM) is approximately 20–25 minutes by car. McMaster University in Hamilton is roughly 30–35 minutes. The planned Milton Education Village, adjacent to The Enclave's neighbourhood, is expected to include post-secondary education facilities as part of its long-term vision.

---

## 5. Implementation instructions (Site C)

### Homepage Location section — 5 sub-sections (question-first H2s)

1. **Schools & Education** — both boards; Craig Kielburger (IB); Bishop Reding; planned Milton SE #13 PS.  
2. **Getting Around** — Hwy 401 (3–5 min), Milton GO (8–10 min), commute table.  
3. **Shopping & Daily Life** — Toronto Premium Outlets, Milton Crossroads, Main Street, groceries.  
4. **Recreation & Nature** — Mattamy Cycling Centre, MEV, Conservation Halton parks (name + trail km), Bruce Trail, UNESCO Escarpment.  
5. **Healthcare** — Milton District Hospital.

### Dedicated page

`/schools-and-area` — full expansion of sections 4.1–4.5 + buyer guide + all distance tables. Link from homepage teaser.

### FAQ + schema

- Merge **18 GEO FAQs** (§4.6) with **~12–15 product FAQs** → **30+** items in `FAQPage` JSON-LD.  
- Rewrite every answer for Site C (no copy-paste from Site A/B).

### Answer-first block (under H1)

Include at least: *"Britannia Road between James Snow Parkway and Fourth Line,"* *"minutes from Highway 401,"* *"served by Halton's top-rated schools."*

### `llms.txt` / `llms-full.txt`

Add location summary:

> Located on Britannia Road between James Snow Parkway and Fourth Line, Milton, Ontario. Highway 401 approximately 3–5 minutes via James Snow Parkway. Milton GO Station approximately 8–10 minutes. Served by Halton District School Board and Halton Catholic District School Board. Adjacent to the planned 162-hectare Milton Education Village. Near Niagara Escarpment UNESCO World Biosphere Reserve conservation areas (Rattlesnake Point, Crawford Lake, Kelso, Hilton Falls).

Use `canonical: https://www.NEW_DOMAIN` and list all 15 model URLs with Site C domain.

### Structured data

- `Place` / `Residence`: `geo` → `43.5085, -79.8628`; `amenityFeature` for Hwy 401, Milton GO, Mattamy Cycling Centre, Toronto Premium Outlets, Conservation Halton parks.  
- Schools in **FAQ schema only** — do not fabricate separate `School` entities.  
- `Organization` for Sundial (not agent/brokerage).

### AI crawlers

Allow GPTBot, PerplexityBot, ClaudeBot, Google-Extended, etc. in `robots.ts` + `public/robots.txt` (see Site B `scripts/generate-seo-files.mjs`).

### Distance disclaimer (required)

*"Distances and drive times are approximate and may vary with traffic conditions."*

---

## 6. Operating instructions (before you code)

1. Confirm `NEW_DOMAIN` and produce a **5-bullet design summary** (visual identity, GEO angle, schema plan, performance, conversion) — **different from Site A and Site B**.  
2. Clone Site B repo; replace `lib/site.ts` constants; set `REGISTRATION_FORM_NAME = "Site C Registration"`.  
3. Implement §4 data in `data/location.ts`, `data/area-faq.ts`, merge in `lib/faq.ts`.  
4. Wire images from §2; favicon from logo URL.  
5. Set Vercel env (§1); deploy; submit sitemap to Search Console.  
6. Run `npm run build`; verify `/api/register` inserts row with `source = NEW_DOMAIN`.

**Do not start coding until the 5-bullet design summary is approved.**
