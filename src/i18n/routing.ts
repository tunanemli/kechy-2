/**
 * Locales and localized URLs.
 *
 * Pages live under `app/[lang]` using internal (English) paths such as
 * `/work`. Each locale has its own public URLs: Turkish is the default and
 * has no prefix (`/isler`), English lives under `/en` (`/en/work`).
 * `next.config.ts` turns these tables into rewrites and redirects, so this
 * file must not use the `@/` import alias.
 */

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Internal page paths (folders under app/[lang]) and their public path per locale. */
export const pathnames = {
  "/": { tr: "/", en: "/" },
  "/work": { tr: "/isler", en: "/work" },
  "/services": { tr: "/hizmetler", en: "/services" },
  "/services/social-media-marketing": {
    tr: "/hizmetler/sosyal-medya-pazarlamasi",
    en: "/services/social-media-marketing",
  },
  "/services/web-development": { tr: "/hizmetler/web-gelistirme", en: "/services/web-development" },
  "/services/performance-marketing": {
    tr: "/hizmetler/performans-pazarlamasi",
    en: "/services/performance-marketing",
  },
  "/about": { tr: "/hakkimizda", en: "/about" },
  "/contact": { tr: "/iletisim", en: "/contact" },
  "/privacy-policy": { tr: "/gizlilik-politikasi", en: "/privacy-policy" },
  "/cookie-policy": { tr: "/cerez-politikasi", en: "/cookie-policy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type InternalPath = keyof typeof pathnames;

/** Case study slugs: the key is the internal slug (folder param), values are public slugs. */
export const caseStudySlugs = {
  "brand-campaign-concept": { tr: "marka-kampanyasi-konsepti", en: "brand-campaign-concept" },
  "e-commerce-experience-concept": { tr: "e-ticaret-deneyimi-konsepti", en: "e-commerce-experience-concept" },
  "digital-platform-concept": { tr: "dijital-platform-konsepti", en: "digital-platform-concept" },
} as const satisfies Record<string, Record<Locale, string>>;

export type CaseStudySlug = keyof typeof caseStudySlugs;

function localePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Public URL of a page in a given locale. */
export function localizePath(locale: Locale, path: InternalPath): string {
  const localized = pathnames[path][locale];
  if (localized === "/") return localePrefix(locale) || "/";
  return `${localePrefix(locale)}${localized}`;
}

/** Public URL of a case study in a given locale. */
export function localizeCaseStudy(locale: Locale, slug: CaseStudySlug): string {
  return `${localizePath(locale, "/work")}/${caseStudySlugs[slug][locale]}`;
}

/**
 * Public URL, in the target locale, of the page identified by its internal
 * route segments below `[lang]` (e.g. `["work", "brand-campaign-concept"]`).
 * Falls back to the target locale's home page for unknown routes.
 */
export function localizeSegments(target: Locale, segments: string[]): string {
  const internal = segments.length ? `/${segments.join("/")}` : "/";
  if (internal in pathnames) return localizePath(target, internal as InternalPath);

  const [section, slug] = segments;
  if (section === "work" && slug && slug in caseStudySlugs) {
    return localizeCaseStudy(target, slug as CaseStudySlug);
  }

  return localizePath(target, "/");
}

type Rewrite = { source: string; destination: string };
type Redirect = Rewrite & { permanent: boolean };

/**
 * Rewrites map default-locale public URLs to internal paths.
 * Other locales' public URLs already equal `/{locale}{internal}`.
 */
export function localeRewrites(): Rewrite[] {
  const rewrites: Rewrite[] = [];
  for (const locale of locales) {
    for (const internal of Object.keys(pathnames) as InternalPath[]) {
      const source = localizePath(locale, internal);
      const destination = internal === "/" ? `/${locale}` : `/${locale}${internal}`;
      if (source !== destination) rewrites.push({ source, destination });
    }
    for (const slug of Object.keys(caseStudySlugs) as CaseStudySlug[]) {
      const source = localizeCaseStudy(locale, slug);
      const destination = `/${locale}/work/${slug}`;
      if (source !== destination) rewrites.push({ source, destination });
    }
  }
  return rewrites;
}

/** Redirects internal URLs that have a different public URL, so each page has one address. */
export function localeRedirects(): Redirect[] {
  return localeRewrites().map(({ source, destination }) => ({
    source: destination,
    destination: source,
    permanent: true,
  }));
}
