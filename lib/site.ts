export const SITE_DOMAIN = "theenclavemiltontowns.ca";
export const SITE_URL = `https://www.${SITE_DOMAIN}`;
export const SITE_B_SOURCE = SITE_DOMAIN;
export const SITE_NAME = "The Enclave Milton";
export const BUILD_DATE = process.env.BUILD_DATE ?? new Date().toISOString().split("T")[0];

export const DEVELOPMENT_GEO = {
  latitude: 43.5085,
  longitude: -79.8628,
} as const;

/** Shown in footer and beside registration forms — no agent/brokerage identity. */
export const NON_REPRESENTATION_DISCLAIMER =
  "This is an independent marketing website. It is not the builder's official sales office and is not affiliated with or endorsed by Sundial Homes. Prices, sizes, features, incentives, and availability are set by the builder and may change without notice. E.&O.E.";

export const FORM_DISCLAIMER =
  "By registering, you consent to be contacted about The Enclave Milton. This site is not Sundial Homes' official sales office.";
