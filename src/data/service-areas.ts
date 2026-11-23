import type { Locale } from "@/i18n/routing";

/**
 * Regions the studio serves. Shown in the footer, on the contact page and in
 * the service FAQs, and published as `areaServed` in structured data.
 * Adding a region here updates all of those; the meta descriptions in
 * i18n/dictionaries.ts name the regions in prose and need a manual update.
 */
const serviceAreas = [
  { label: { tr: "İstanbul", en: "Istanbul" }, schema: [{ type: "City", name: "İstanbul" }] },
  { label: { tr: "Ankara", en: "Ankara" }, schema: [{ type: "City", name: "Ankara" }] },
  {
    label: { tr: "Kocaeli (İzmit)", en: "Kocaeli (İzmit)" },
    schema: [
      { type: "AdministrativeArea", name: "Kocaeli" },
      { type: "City", name: "İzmit" },
    ],
  },
  { label: { tr: "Sakarya", en: "Sakarya" }, schema: [{ type: "AdministrativeArea", name: "Sakarya" }] },
  { label: { tr: "Karabük", en: "Karabük" }, schema: [{ type: "City", name: "Karabük" }] },
] as const;

export function serviceAreaLabels(locale: Locale): string[] {
  return serviceAreas.map((area) => area.label[locale]);
}

/** "İstanbul, Kocaeli (İzmit) ve Sakarya" / "Istanbul, Kocaeli (İzmit) and Sakarya". */
export function formatServiceAreas(locale: Locale): string {
  return new Intl.ListFormat(locale, { type: "conjunction" }).format(serviceAreaLabels(locale));
}

/** schema.org `areaServed` entries. */
export function areaServedSchema() {
  return serviceAreas.flatMap((area) =>
    area.schema.map((place) => ({
      "@type": place.type,
      name: place.name,
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    })),
  );
}
