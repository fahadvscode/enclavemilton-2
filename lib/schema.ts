import { siteData, SITE_URL, formatSqft, getAllModels } from "./floor-plans";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "The Enclave Milton",
    url: SITE_URL,
    description:
      "New freehold townhome community in Milton, Ontario by Sundial Homes. Village and Park collections with no monthly maintenance fees.",
    areaServed: {
      "@type": "City",
      name: "Milton",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
  };
}

export function floorPlansItemListSchema() {
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

export function residenceSchema(
  modelName: string,
  slug: string,
  collectionName: string,
  sqftText: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: modelName,
    url: `${SITE_URL}/floor-plans/${slug}`,
    description: `${modelName} at The Enclave Milton — ${collectionName}. ${sqftText}. Register for floor plan and pricing.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: sqftText,
      unitText: "sq ft",
    },
  };
}

export function projectOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${siteData.project.name} — Starting price`,
    price: "599990",
    priceCurrency: "CAD",
    availability: "https://schema.org/preOrder",
    description: `New townhomes in Milton from ${siteData.project.startingFrom}. Per-model pricing available on registration.`,
    seller: {
      "@type": "Organization",
      name: siteData.project.builder,
    },
  };
}

export function homeFaqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema(title: string, description: string, path = "") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "The Enclave Milton",
      url: SITE_URL,
    },
    about: {
      "@type": "Residence",
      name: "The Enclave Milton Townhomes",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milton",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
  };
}
