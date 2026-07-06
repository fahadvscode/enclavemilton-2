import { communityLocation } from "@/data/location";
import { HOME_FAQ } from "./faq";
import { formatSqft, getAllModels, siteData } from "./floor-plans";
import { BUILD_DATE, DEVELOPMENT_GEO, SITE_NAME, SITE_URL } from "./site";

const IDS = {
  website: `${SITE_URL}/#website`,
  builder: `${SITE_URL}/#builder`,
  residence: `${SITE_URL}/#residence`,
  offer: `${SITE_URL}/#offer`,
  place: `${SITE_URL}/#place`,
  faq: `${SITE_URL}/#faq`,
  saleEvent: `${SITE_URL}/#sale-event`,
};

const residenceDescription =
  "The Enclave Milton is a master-planned freehold townhome community by Sundial Homes on Britannia Road in Milton, Ontario, Canada — not to be confused with similarly named projects in the United States. The development delivers two distinct product lines for Halton Region buyers: the Village Collection of back-to-back freehold townhomes without monthly maintenance fees, and the Park Collection of traditional two- and three-storey townhomes scaled for growing families. Fifteen floor plans span roughly 953 to 2,843 square feet, with pricing from $599,990 and occupancy communicated for 2027. The location sits between James Snow Parkway and Fourth Line with planned trails, a village square, and a future elementary school in the master plan. Buyers access Highway 401, Highway 407, and Milton GO for commuting across the GTA.";

export function homepageGraph() {
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": IDS.website,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-CA",
        publisher: { "@id": IDS.builder },
        dateModified: BUILD_DATE,
        datePublished: BUILD_DATE,
      },
      {
        "@type": "Organization",
        "@id": IDS.builder,
        name: siteData.project.builder,
        url: "https://www.sundialhomes.com",
      },
      {
        "@type": "SingleFamilyResidence",
        "@id": IDS.residence,
        name: SITE_NAME,
        description: residenceDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: communityLocation.address,
          addressLocality: "Milton",
          addressRegion: "ON",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: DEVELOPMENT_GEO.latitude,
          longitude: DEVELOPMENT_GEO.longitude,
        },
        image: {
          "@type": "ImageObject",
          url: "https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780268468620_Screenshot-2026-05-13-at-16.59.20.png",
          caption: "The Enclave Milton community rendering by Sundial Homes",
        },
        numberOfRooms: { "@type": "QuantitativeValue", minValue: 2, maxValue: 4 },
      },
      {
        "@type": "Offer",
        "@id": IDS.offer,
        priceCurrency: "CAD",
        lowPrice: 599990,
        price: 599990,
        priceValidUntil,
        availability: "https://schema.org/InStock",
        itemOffered: { "@id": IDS.residence },
        seller: { "@id": IDS.builder },
      },
      {
        "@type": "FAQPage",
        "@id": IDS.faq,
        mainEntity: HOME_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "Place",
        "@id": IDS.place,
        name: "The Enclave — Britannia Road, Milton, Ontario",
        description: communityLocation.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: communityLocation.address,
          addressLocality: "Milton",
          addressRegion: "ON",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: DEVELOPMENT_GEO.latitude,
          longitude: DEVELOPMENT_GEO.longitude,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
      {
        "@type": "SaleEvent",
        "@id": IDS.saleEvent,
        name: "The Enclave Milton — Now Selling",
        description: "Freehold townhomes now selling at The Enclave Milton by Sundial Homes.",
        startDate: "2026-05-01",
        eventStatus: "https://schema.org/EventScheduled",
        location: { "@id": IDS.place },
        organizer: { "@id": IDS.builder },
      },
    ],
  };
}

function breadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbList(items),
  };
}

export function floorPlansListSchema() {
  const items = getAllModels().map((entry, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: entry.model,
    url: `${SITE_URL}/floor-plans/${entry.slug}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Enclave Milton Floor Plans",
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export function modelPageGraph(
  modelName: string,
  slug: string,
  collectionName: string,
  sqftText: string
) {
  const url = `${SITE_URL}/floor-plans/${slug}`;
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: `${modelName} — The Enclave Milton`,
        description: `${modelName} freehold townhome at The Enclave Milton (${collectionName}). ${sqftText}. Register for floor plan PDF and pricing.`,
        url,
        category: "New Home",
        brand: { "@type": "Organization", name: siteData.project.builder },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          price: 599990,
          availability: "https://schema.org/InStock",
          priceValidUntil,
          seller: { "@type": "Organization", name: siteData.project.builder },
        },
        isRelatedTo: { "@id": `${SITE_URL}/#residence` },
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Floor plans", path: "/floor-plans" },
        { name: modelName, path: `/floor-plans/${slug}` },
      ]),
      {
        "@type": "WebPage",
        name: `${modelName} — The Enclave Milton`,
        url,
        dateModified: BUILD_DATE,
        inLanguage: "en-CA",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ],
  };
}

export function modelSqftForSchema(model: ReturnType<typeof getAllModels>[number]) {
  return formatSqft(model);
}

export function areaPageGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Schools, commute, and amenities near The Enclave Milton",
    url: `${SITE_URL}/schools-and-area`,
    description:
      "Guide to Halton schools, Milton GO, highways, shopping, and recreation near The Enclave Milton on Britannia Road, Milton, Ontario.",
    dateModified: BUILD_DATE,
    inLanguage: "en-CA",
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.place },
  };
}
