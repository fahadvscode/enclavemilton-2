import {
  HCDSB_SCHOOL_FINDER,
  HDSB_FIND_SCHOOL,
  HDSB_PLANNING_EMAIL,
  HDSB_SCHOOL_LOCATOR,
} from "./location";

export type FaqItem = {
  question: string;
  answer: string;
};

export const AREA_FAQ: FaqItem[] = [
  {
    question: "Which school will my child attend if I buy at The Enclave Milton?",
    answer: `Assignment depends on your exact home address, not the development name. Use the Halton District School Board school locator (${HDSB_SCHOOL_LOCATOR}) for English public schools and the Halton Catholic school finder for Catholic education. Enter your lot or nearest intersection before you firm — catchments in growing Milton can change.`,
  },
  {
    question: "How do I find my Halton school catchment before I buy?",
    answer: `Start with the HDSB Find Local School page and interactive locator (${HDSB_FIND_SCHOOL}). For Catholic schools, use the HCDSB school finder (${HCDSB_SCHOOL_FINDER}). If you are buying pre-construction, ask for the municipal address or use the closest existing intersection, then re-check when your closing address is assigned. For planning questions, HDSB Planning can be reached at ${HDSB_PLANNING_EMAIL}.`,
  },
  {
    question: "What is the future on-site elementary school at The Enclave?",
    answer:
      "The Enclave master plan and Town of Milton reporting describe a future elementary school site coordinated with the Halton District School Board within the southeast Milton / Britannia Road allocation. Opening date, grades, and catchment boundaries will be set by HDSB — not the builder. Pre-construction buyers should plan using current nearby schools until the board confirms the new school.",
  },
  {
    question: "What is the difference between HDSB and Halton Catholic (HCDSB) for Milton buyers?",
    answer:
      "HDSB operates English public schools; Halton Catholic District School Board operates a separate Catholic system with its own registration rules and catchments. You choose one pathway per child according to board policy — they are not interchangeable. Catholic registration may require documentation such as baptism certificates; confirm on HCDSB.ca before you buy.",
  },
  {
    question: "Are there French immersion options near The Enclave Milton?",
    answer:
      "Halton District School Board offers French immersion programs at designated schools with entry-grade rules and capacity limits — not every nearby English elementary offers immersion. Use HDSB program pages and the school locator to see whether your address qualifies for early French immersion or extended French pathways. Programs can fill or change entry points by year.",
  },
  {
    question: "How do new Milton developments affect school overcrowding and boundaries?",
    answer:
      "Fast-growing areas like southeast Milton and the Britannia Secondary Plan add pupils faster than schools can expand. HDSB runs accommodation planning and periodic boundary reviews that can shift which school serves a street. Buying new construction means monitoring HDSB boundary announcements from purchase through occupancy — especially if you have children entering school within two to three years.",
  },
  {
    question: "Can I register my child for school before occupancy in 2027?",
    answer:
      "School registration generally requires a Milton home address. Pre-construction buyers can research catchments now but typically complete registration after closing when your address exists in board systems. If your child starts school before you take possession, you may need temporary arrangements — speak with HDSB or HCDSB registration staff and your lawyer about timing.",
  },
  {
    question: "What elementary and high schools serve southeast Milton and Britannia Road?",
    answer:
      "There is no single answer for the whole corridor — assignment is lot-specific. Nearby public elementaries families research include Boyne, Viola Desmond, Ethel Gardiner, Hawthorne Village, E. J. James, Sam Sherratt, and Tiger Jeet Singh. Public secondaries include Craig Kielburger and Milton District. Catholic options include Lumen Christi, St. Peter, Guardian Angels, Bishop Reding, St. Benedict, and Jean Vanier. Always confirm with board locators for your address.",
  },
  {
    question: "Is Boyne Public School relevant to The Enclave Milton buyers?",
    answer:
      "Boyne Public School serves the adjacent Boyne / southeast Milton growth area and is frequently researched alongside new Britannia Road communities. Whether it applies to your child depends solely on HDSB catchment for your exact address — use the school locator and watch for boundary reviews as new phases register.",
  },
  {
    question: "What should I know about Viola Desmond Public School and Milton new homes?",
    answer:
      "Viola Desmond is a newer HDSB elementary in Milton that many relocating families compare when evaluating southeast Milton townhomes. It illustrates why address verification matters: two streets in the same marketing community can map to different schools. Confirm assignment in the HDSB locator before you rely on any listing-site school label.",
  },
  {
    question: "How do Craig Kielburger and Milton District High School compare for families?",
    answer:
      "Both are HDSB secondary schools serving Milton students with different locations, course offerings, and extracurricular cultures. Your address determines which is your home school — not preference alone. Families with teenagers should verify secondary catchment early and visit school open houses once your address is confirmed.",
  },
  {
    question: "How far is The Enclave Milton from Milton GO Station?",
    answer:
      "Britannia Road at James Snow Parkway is typically about a 10–20 minute drive to Milton GO Station under normal traffic, though conditions vary. Milton GO on the Kitchener line provides commuter rail toward Toronto Union — check GO Transit schedules for current trip times.",
  },
  {
    question: "How do I commute from Milton to downtown Toronto?",
    answer:
      "Most commuters combine a short drive to Milton GO with the Kitchener line train to Union Station, or drive to Highway 401 for road access. Train trips are often cited in the 45–65 minute range depending on schedule; driving time varies widely with traffic and destination. Many buyers test both modes during rush hour before they purchase.",
  },
  {
    question: "Is The Enclave close to Highway 401 and Highway 407?",
    answer:
      "Yes — Britannia Road and James Snow Parkway connect into Milton's arterial network toward Highway 401 and Highway 407. Typical drives to highway ramps are often in the 10–25 minute range depending on route and traffic. The 407 is a toll route some commuters use to save time on cross-regional trips.",
  },
  {
    question: "What is the Britannia Secondary Plan and why does it matter to buyers?",
    answer:
      "The Britannia Secondary Plan is the Town of Milton's policy framework for developing lands along Britannia Road and James Snow Parkway as a complete community — housing, parks, schools, trails, and services. For buyers, it signals long-term investment in infrastructure and amenities, but exact retail and school timing still follows separate builder and school-board schedules.",
  },
  {
    question: "What parks and trails are near Britannia Road Milton?",
    answer:
      "The Enclave plan includes on-site trails and a cycling network, plus a planned village square. Regionally, Milton offers escarpment valley trails, neighbourhood parks such as Mohawk Park, and broader Halton conservation lands. Active families often visit trailheads on the Niagara Escarpment within a short drive.",
  },
  {
    question: "Where do you shop and dine near The Enclave Milton?",
    answer:
      "Everyday shopping clusters along Derry Road, Highway 401 retail corridors, and power centres serving west Milton — grocery, big-box, and home improvement within a short drive. Downtown Milton on Main Street adds local restaurants and boutiques. Future Britannia plan commercial areas may add walkable services as the corridor matures.",
  },
  {
    question: "Is there healthcare near The Enclave Milton?",
    answer:
      "Milton District Hospital and surrounding medical offices serve Halton residents from within town — typically a short drive from southeast Milton. For specialists, many residents also use Mississauga and other GTA hospitals within highway reach. Confirm current services and wait times independently if healthcare proximity is a priority.",
  },
  {
    question: "What recreation facilities are near The Enclave?",
    answer:
      "Milton Sports Centre offers arenas and fitness programming; the Mattamy National Cycling Centre area supports high-performance and community sport. Local parks, sports fields, and escarpment outdoor recreation add options. The Enclave's own planned trails and village square will supplement regional facilities as phases build out.",
  },
  {
    question: "How does living near Milton GO affect property appeal?",
    answer:
      "Commuter rail access supports demand from buyers working in Toronto, Mississauga, or along the 401 corridor without requiring a downtown condo budget. Even if you drive today, GO optionality is a common resale talking point for Milton townhomes — verify current schedules and parking capacity on GO Transit.",
  },
  {
    question: "Will the planned village square at The Enclave include shops?",
    answer:
      "Master plan materials describe a village square as a community gathering space within the Sundial development. Specific retail tenants and opening timelines depend on later commercial phases and Town approvals. For today's shopping needs, buyers rely on established Milton corridors until on-site services arrive.",
  },
  {
    question: "How do schools affect resale value for Milton townhomes?",
    answer:
      "Family-oriented buyers often filter listings by school reputation and commute together. Accurate school information — verified through HDSB and HCDSB, not rumour — reduces surprises at resale. Planned schools can help future appeal when open, but boundary uncertainty during construction phases means buyers should rely on official board maps.",
  },
  {
    question: "What should investors know about schools near The Enclave Milton?",
    answer:
      "Investors marketing to tenant families should cite only board-verified school names and include a disclaimer that tenants must confirm catchment. Proximity to GO and highways often matters as much as school names for rental demand in Milton. Avoid promising a specific school in rental ads without address confirmation.",
  },
  {
    question: "Are there Catholic schools near Britannia Road Milton?",
    answer:
      "Halton Catholic District School Board operates elementary schools such as Lumen Christi, St. Peter, and Guardian Angels, and secondary schools including Bishop Reding, St. Benedict, and Jean Vanier, serving Milton families. Catholic assignment requires the HCDSB school finder for your address — separate from HDSB results.",
  },
  {
    question: "What should I do on a school research visit before buying?",
    answer:
      "Drive your commute to Milton GO and Highway 401 at rush hour, visit the HDSB and HCDSB locators with your address, read any active HDSB boundary review notices, and walk nearby parks. Ask your lawyer about closing dates relative to the school year if children are transferring mid-year.",
  },
  {
    question: "How far are schools and amenities from The Enclave Milton?",
    answer:
      "From Britannia Road at James Snow Parkway, estimated drives include Boyne Public School (~2–3 km), many elementaries at ~3–5 km, Milton GO (~6–8 km), Derry retail (~4–7 km), and downtown Milton (~3–5 km) — all traffic-dependent. See the full distance list on the schools & area guide page and confirm routes on Google Maps from your exact lot.",
  },
];
