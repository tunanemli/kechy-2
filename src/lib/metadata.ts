import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import {
  defaultLocale,
  localizeCaseStudy,
  localizePath,
  locales,
  type CaseStudySlug,
  type InternalPath,
  type Locale,
} from "@/i18n/routing";
import { site } from "@/lib/site";

type PageCopy = { title: string | { absolute: string }; description: string };

/**
 * Metadata for a localized page: canonical URL, hreflang alternates for every
 * locale, and Open Graph data. Page-level `openGraph` replaces the layout's,
 * so the shared fields are repeated here.
 */
function localizedMetadata(locale: Locale, urls: Record<Locale, string>, copy: PageCopy): Metadata {
  const { meta } = getDictionary(locale);
  const ogTitle = typeof copy.title === "string" ? `${copy.title} — ${site.name}` : copy.title.absolute;
  const languages = Object.fromEntries(locales.map((code) => [code, urls[code]]));

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: urls[locale],
      languages: { ...languages, "x-default": urls[defaultLocale] },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: meta.ogLocale,
      url: urls[locale],
      title: ogTitle,
      description: copy.description,
    },
  };
}

export function pageMetadata(locale: Locale, path: InternalPath, copy: PageCopy): Metadata {
  const urls = Object.fromEntries(locales.map((code) => [code, localizePath(code, path)])) as Record<Locale, string>;
  return localizedMetadata(locale, urls, copy);
}

export function caseStudyMetadata(locale: Locale, slug: CaseStudySlug, copy: PageCopy): Metadata {
  const urls = Object.fromEntries(locales.map((code) => [code, localizeCaseStudy(code, slug)])) as Record<
    Locale,
    string
  >;
  return localizedMetadata(locale, urls, copy);
}
