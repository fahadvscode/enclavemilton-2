export const SITE_DOMAIN = "theenclavemiltontowns.com";
export const SITE_URL = `https://www.${SITE_DOMAIN}`;
export const SITE_B_SOURCE = SITE_DOMAIN;
export const SITE_NAME = "The Enclave Milton";
export const BUILD_DATE = process.env.BUILD_DATE ?? new Date().toISOString().split("T")[0];

export const BROKERAGE = {
  agentName: "Fahad Javed",
  jobTitle: "Sales Representative",
  organization: "Century 21 Property Zone Realty Inc.",
  streetAddress: "600 Matheson Blvd W, Unit 5",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5R 4B8",
  addressCountry: "CA",
  email: "fahad@fahadsold.com",
  phone: "+1-647-898-1739",
  phoneDisplay: "647-898-1739",
  url: "https://www.fahadsold.com",
} as const;

export const DEVELOPMENT_GEO = {
  latitude: 43.5085,
  longitude: -79.8628,
} as const;

export const NON_REPRESENTATION_DISCLAIMER =
  "This is an independent marketing website operated by a licensed real estate brokerage. It is not the builder's official sales office and is not affiliated with or endorsed by Sundial Homes. Prices, sizes, features, incentives, and availability are set by the builder and may change without notice. E.&O.E.";

export const FORM_DISCLAIMER =
  "By registering you consent to contact from Fahad Javed, Sales Representative, Century 21 Property Zone Realty Inc., regarding The Enclave Milton. This site is not Sundial Homes' official sales office.";
