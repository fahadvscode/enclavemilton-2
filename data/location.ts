export const HDSB_SCHOOL_LOCATOR = "https://schoollocator.hdsb.ca/";
export const HDSB_FIND_SCHOOL = "https://www.hdsb.ca/schools/find-local-school/";
export const HCDSB_SCHOOL_FINDER = "https://hcdsb.ca/schools/school-finder/";
export const HDSB_PLANNING_EMAIL = "planhalton@hdsb.ca";

/** Reference point for estimated distances (not lot-specific). */
export const DISTANCE_REFERENCE =
  "Britannia Road at James Snow Parkway, The Enclave Milton (between James Snow & Fourth Line)";

export const distanceDisclaimer =
  "Distances and drive times are approximate estimates for research only — routes, traffic, and your exact lot address will differ. Confirm on Google Maps before you buy. School assignment is not determined by distance alone.";

export const communityLocation = {
  address: "Britannia Road, between James Snow Parkway & Fourth Line",
  area: "Southeast Milton, Ontario (Halton Region)",
  postalContext: "Milton, Ontario, Canada",
  description:
    "The Enclave sits in Milton's southeast growth corridor on Britannia Road between James Snow Parkway (Neyagawa Boulevard) and Fourth Line — part of the broader Britannia Secondary Plan area the Town of Milton is developing as a complete, walkable community with housing, parks, schools, and services. Sundial Homes' master plan for this site includes freehold townhomes, a planned village square, trail and cycling connections, and a future elementary school site coordinated with the Halton District School Board. Per local reporting, the broader southeast Milton allocation can include on the order of 1,000+ new homes across phases, with the first builder permits targeted from 2026 onward.",
  britanniaPlanUrl: "https://www.letstalkmilton.ca/britannia",
};

export const areaHighlights = [
  "Halton Region, Ontario — not Milton, Georgia (US)",
  "Britannia Road between James Snow Parkway & Fourth Line",
  "Planned village square, trails, and cycling network on-site",
  "Future elementary school site in the master plan (HDSB coordination)",
  "Access to Highway 401, Highway 407, and Milton GO (Kitchener line)",
  "Established Milton schools, retail, recreation, and escarpment greenspace nearby",
];

export const commuteFacts = [
  {
    name: "Milton GO Station",
    line: "Kitchener line (GO Transit)",
    distanceFromSite: "~6–8 km · ~10–18 min drive (est.)",
    typicalDrive: "Roughly 10–18 minutes by car from Britannia & James Snow, traffic-dependent",
    typicalTrainUnion:
      "GO train to Toronto Union often cited in the 45–65 minute range; schedules vary — check GO Transit",
    note: "Park-and-ride commuter access to the GTA core without driving downtown daily.",
  },
  {
    name: "Highway 401",
    distanceFromSite: "~4–7 km to Derry Rd area ramps (est.)",
    typicalDrive: "Often 8–15 minutes via regional roads, traffic-dependent",
    note: "Primary east–west corridor for Mississauga, Toronto, and western GTA connections.",
  },
  {
    name: "Highway 407 ETR",
    distanceFromSite: "~4–6 km via James Snow area (est.)",
    typicalDrive: "Often 8–12 minutes, traffic-dependent",
    note: "Toll highway option for faster cross-regional trips when time matters more than toll cost.",
  },
  {
    name: "James Snow Parkway / Britannia Road",
    distanceFromSite: "At community front door",
    typicalDrive: "Direct local connectors",
    note: "Links the site into Milton's arterial network toward shopping, employment, and highways.",
  },
];

export type NearbySchool = {
  name: string;
  type: string;
  grades: string;
  board: "Halton District School Board" | "Halton Catholic District School Board";
  distanceFromSite: string;
  note: string;
  buyerNote: string;
  website?: string;
};

export const futureOnSiteSchool: NearbySchool = {
  name: "Future on-site elementary school (planned)",
  type: "Elementary (planned)",
  grades: "Elementary (grades TBD by HDSB)",
  board: "Halton District School Board",
  distanceFromSite: "On-site when built (planned)",
  note: "Identified in The Enclave / southeast Milton master plan; timing and boundaries subject to HDSB and Town approval.",
  buyerNote:
    "Pre-construction buyers should not assume this school will be open by your occupancy date. When built, it could change walk-to-school convenience for the neighbourhood — but catchment maps are set by the school board, not the builder.",
};

export const nearbySchools: NearbySchool[] = [
  futureOnSiteSchool,
  {
    name: "Boyne Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~2–3 km · ~4–7 min drive (est.)",
    note: "Serves the adjacent Boyne / southeast Milton growth area — confirm your address in the HDSB locator.",
    buyerNote:
      "Often relevant for families comparing new communities along Britannia and James Snow; boundary reviews are common as Milton grows.",
    website: "https://boyne.hdsb.ca/",
  },
  {
    name: "Tiger Jeet Singh Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~2–3 km · ~4–7 min drive (est.)",
    note: "Milton public elementary — confirm catchment before purchase.",
    buyerNote:
      "Among the closer established elementaries by distance — still verify assignment with HDSB.",
    website: "https://tigerjeetsingh.hdsb.ca/",
  },
  {
    name: "St. Peter Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~2–3 km · ~4–7 min drive (est.)",
    note: "Milton Catholic elementary — verify address in HCDSB school finder.",
    buyerNote:
      "Families choosing Catholic education should map both elementary and secondary pathways in HCDSB at the same time.",
    website: "https://stpeter.hcdsb.org/",
  },
  {
    name: "Bishop Reding Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~2–4 km · ~5–8 min drive (est.)",
    note: "Halton Catholic secondary in Milton — use HCDSB finder.",
    buyerNote:
      "Catholic secondary pathway planning should align with your elementary feeder expectations under HCDSB policies.",
    website: "https://bishopreding.hcdsb.org/",
  },
  {
    name: "Jean Vanier Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~2–4 km · ~5–8 min drive (est.)",
    note: "Halton Catholic secondary serving Milton families — confirm address.",
    buyerNote:
      "Included for comprehensive Catholic secondary research; assignment rules differ from the public board.",
    website: "https://jeanvanier.hcdsb.org/",
  },
  {
    name: "E. J. James Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~2–4 km · ~5–8 min drive (est.)",
    note: "Milton elementary option — confirm catchment via HDSB school locator.",
    buyerNote:
      "One of several HDSB elementaries Milton families evaluate when moving for space and relative value versus inner-GTA pricing.",
    website: "https://ejjames.hdsb.ca/",
  },
  {
    name: "Milton District High School",
    type: "Secondary (public)",
    grades: "9–12",
    board: "Halton District School Board",
    distanceFromSite: "~2–4 km · ~5–9 min drive (est.)",
    note: "Long-established Milton secondary school — confirm via HDSB locator.",
    buyerNote:
      "Often compared with Craig Kielburger for course offerings and extracurriculars — only your address determines which applies.",
    website: "https://miltondistrict.hdsb.ca/",
  },
  {
    name: "Guardian Angels Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~2–4 km · ~5–9 min drive (est.)",
    note: "Halton Catholic option in Milton — confirm catchment.",
    buyerNote:
      "Highlights that Milton offers parallel public systems; your home address determines Catholic eligibility, not proximity alone.",
    website: "https://gace.hcdsb.org/",
  },
  {
    name: "Lumen Christi Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~3–4 km · ~6–9 min drive (est.)",
    note: "Separate school system — registration and catchment use HCDSB tools, not HDSB.",
    buyerNote:
      "Catholic elementary requires separate board registration and may require baptism documentation — confirm HCDSB policy before you buy.",
    website: "https://lumen.hcdsb.org/",
  },
  {
    name: "Hawthorne Village Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~3–5 km · ~6–10 min drive (est.)",
    note: "Serves growing Milton neighbourhoods — boundaries may shift with new development.",
    buyerNote:
      "Illustrates why Halton publishes boundary review pages: new housing can redistribute enrolment across nearby elementaries.",
    website: "https://hawthorneyvillage.hdsb.ca/",
  },
  {
    name: "Viola Desmond Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~3–5 km · ~6–10 min drive (est.)",
    note: "Modern Milton elementary — verify catchment for your specific lot before you buy.",
    buyerNote:
      "Families moving from Toronto or Mississauga often research newer Milton schools alongside commute time; assignment is address-based only.",
    website: "https://violadesmond.hdsb.ca/",
  },
  {
    name: "Craig Kielburger Secondary School",
    type: "Secondary (public)",
    grades: "9–12",
    board: "Halton District School Board",
    distanceFromSite: "~3–5 km · ~6–10 min drive (est.)",
    note: "Milton public high school — secondary assignment is address-specific.",
    buyerNote:
      "Buyers with teens should verify secondary catchment early; moving one kilometre can change high school assignment in growing areas.",
    website: "https://craigkielburger.hdsb.ca/",
  },
  {
    name: "Ethel Gardiner Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~4–5 km · ~7–11 min drive (est.)",
    note: "Established Milton elementary — confirm assignment with HDSB.",
    buyerNote:
      "Useful comparison point for buyers who want an established school community versus waiting for the planned on-site school.",
    website: "https://ethelgardiner.hdsb.ca/",
  },
  {
    name: "Sam Sherratt Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    distanceFromSite: "~4–6 km · ~8–12 min drive (est.)",
    note: "Milton public elementary — verify for your address.",
    buyerNote:
      "Included because buyers frequently search by school name when comparing Milton communities; only the locator confirms eligibility.",
    website: "https://samsherratt.hdsb.ca/",
  },
  {
    name: "St. Benedict Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    distanceFromSite: "~5–7 km · ~9–14 min drive (est.)",
    note: "Milton Catholic high school option — verify catchment.",
    buyerNote:
      "Families prioritizing Catholic 9–12 education should confirm both elementary feeder schools and secondary destination before firming a lot.",
    website: "https://stbenedict.hcdsb.org/",
  },
];

export const schoolBuyerGuide = {
  title: "How schools affect your purchase at The Enclave Milton",
  sections: [
    {
      heading: "Catchments are address-based, not marketing promises",
      body: "Halton school assignment is determined by the Halton District School Board and Halton Catholic District School Board using your home address — not sales centre materials. Before you firm a purchase, enter your exact lot or nearest intersection into the official HDSB school locator and HCDSB school finder. Boundaries change as Milton grows.",
    },
    {
      heading: "Distance does not guarantee assignment",
      body: "The closest school by driving distance may not be your home school. The estimates on this page are from Britannia Road at James Snow Parkway for orientation only — they are not catchment promises.",
    },
    {
      heading: "Growing Milton means boundary reviews",
      body: "The Britannia Secondary Plan and southeast Milton developments add housing quickly. HDSB publishes accommodation planning and boundary review updates that can shift which elementary or secondary school serves a street. Pre-construction buyers should budget time to monitor HDSB planning announcements through occupancy.",
    },
    {
      heading: "The planned on-site elementary school",
      body: "Town and media reporting describe coordination between Sundial Homes, the Town of Milton, and HDSB on a future elementary school within the southeast Milton allocation. That can improve neighbourhood convenience when it opens — but opening dates, grades offered, and catchment maps are board decisions. Do not buy assuming your child will attend it on day one.",
    },
    {
      heading: "Public English vs Catholic vs French immersion",
      body: "Most listings reference HDSB English schools. Catholic education is a separate system (HCDSB) with its own registration requirements. French immersion pathways exist within HDSB but use dedicated entry rules and capacity limits — confirm program availability on the board website, not third-party listing sites.",
    },
    {
      heading: "Registering before 2027 occupancy",
      body: "You generally need a Milton address to register for school. Pre-construction buyers can research pathways now but final registration happens closer to move-in. If you have school-age children, align your closing timeline with the academic year and contact boards early when your address is assigned.",
    },
    {
      heading: "Resale and family appeal",
      body: "Even without school-age children, school proximity and reputation influence resale interest in family-oriented Milton townhome communities. Verify facts with official board tools rather than social media rankings, which are often outdated or incorrect for new addresses.",
    },
  ],
};

export type NearbyAmenity = {
  category: string;
  name: string;
  description: string;
  distanceFromSite: string;
  typicalAccess?: string;
};

export const nearbyAmenities: NearbyAmenity[] = [
  {
    category: "Transit",
    name: "Milton GO Station",
    description: "Kitchener line service toward Toronto Union — core option for commuters.",
    distanceFromSite: "~6–8 km · ~10–18 min drive (est.)",
    typicalAccess: "Via Main Street / regional roads from Britannia & James Snow",
  },
  {
    category: "Highways",
    name: "Highway 401 & Highway 407",
    description: "Regional highway access via James Snow Parkway, Britannia Road, and Derry Road corridors.",
    distanceFromSite: "401 ramps ~4–7 km · 407 ~4–6 km (est.)",
    typicalAccess: "~8–15 minutes to ramps, traffic-dependent",
  },
  {
    category: "Shopping",
    name: "Derry Road & Hwy 401 retail corridor",
    description: "Big-box, grocery, home improvement, and everyday retail clusters along Milton's main commercial arteries.",
    distanceFromSite: "~4–7 km · ~8–15 min drive (est.)",
    typicalAccess: "Grocery, home improvement, and everyday retail",
  },
  {
    category: "Shopping",
    name: "Costco / major retail (Milton)",
    description: "Warehouse and power-centre shopping serving Milton and west GTA families.",
    distanceFromSite: "~6–9 km · ~10–18 min drive (est.)",
    typicalAccess: "Heritage Road / Derry Road corridors",
  },
  {
    category: "Shopping",
    name: "Downtown Milton (Main Street)",
    description: "Local shops, restaurants, farmers' market culture, and community events.",
    distanceFromSite: "~3–5 km · ~7–12 min drive (est.)",
    typicalAccess: "Main Street East area",
  },
  {
    category: "Healthcare",
    name: "Milton District Hospital area",
    description: "Hospital and medical services cluster serving Milton and Halton Hills residents.",
    distanceFromSite: "~3–5 km · ~7–12 min drive (est.)",
    typicalAccess: "Brant Street / hospital campus",
  },
  {
    category: "Recreation",
    name: "Milton Sports Centre",
    description: "Arena, fitness, and registered community programs.",
    distanceFromSite: "~4–6 km · ~8–14 min drive (est.)",
    typicalAccess: "Santa Maria Blvd area",
  },
  {
    category: "Recreation",
    name: "Mattamy National Cycling Centre / Milton sports precinct",
    description: "Major recreation and event facilities associated with Milton's sports tourism profile.",
    distanceFromSite: "~5–8 km · ~10–15 min drive (est.)",
    typicalAccess: "Derry Road / Ontario Street area",
  },
  {
    category: "Parks & trails",
    name: "Niagara Escarpment & valley trails",
    description: "Hiking, cycling, and outdoor recreation along Halton's escarpment landscape.",
    distanceFromSite: "~8–15+ km · ~15–25+ min drive (est.)",
    typicalAccess: "Multiple trailheads across Milton and Halton Region",
  },
  {
    category: "Parks",
    name: "Mohawk Park & neighbourhood parks",
    description: "Local park space for playgrounds, sports fields, and everyday outdoor time.",
    distanceFromSite: "~3–4 km · ~6–9 min drive (est.)",
    typicalAccess: "Neighbourhood parks across Milton",
  },
  {
    category: "Community",
    name: "Planned village square (The Enclave)",
    description: "On-site gathering space envisioned in the Sundial master plan for the Britannia Road community.",
    distanceFromSite: "On-site as phases build",
    typicalAccess: "Within the development",
  },
  {
    category: "Connectivity",
    name: "Trail & cycling network (planned)",
    description: "Pedestrian and cycling connections described in southeast Milton planning documents.",
    distanceFromSite: "On-site / adjacent",
    typicalAccess: "Linking to broader Milton routes over time",
  },
  {
    category: "Future retail",
    name: "Britannia Secondary Plan commercial areas",
    description: "The Town's Britannia plan envisions mixed uses and services as the corridor builds out — timing varies by phase.",
    distanceFromSite: "On-site / walkable as corridor matures (est.)",
    typicalAccess: "Future walkable services per Town plan",
  },
];

export const locationDisclaimer =
  "School catchments, program availability (including French immersion), travel times, and amenities change. Distances shown are approximate from Britannia Road at James Snow Parkway — confirm on Google Maps from your exact lot. This page is for general research only — confirm schools with HDSB and HCDSB before you buy.";

/** Featured on homepage teaser (subset) */
export const featuredSchoolNames = [
  "Future on-site elementary (planned)",
  "Boyne Public School",
  "Viola Desmond Public School",
  "Craig Kielburger Secondary School",
  "Bishop Reding Catholic Secondary School",
];
