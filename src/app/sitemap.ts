import type { MetadataRoute } from "next";
import {
  caseStudySlugs,
  locales,
  localizeCaseStudy,
  localizePath,
  type CaseStudySlug,
  type Locale,
} from "@/i18n/routing";
import { isLive, routes } from "@/lib/routes";
import { site } from "@/lib/site";

type Localized = (locale: Locale) => string;

/** One entry per page and locale, each listing its translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Localized[] = [
    ...Object.values(routes)
      .filter(isLive)
      .map((path) => (locale: Locale) => localizePath(locale, path)),
    ...(Object.keys(caseStudySlugs) as CaseStudySlug[]).map(
      (slug) => (locale: Locale) => localizeCaseStudy(locale, slug),
    ),
  ];

  const absolute = (path: string) => new URL(path, site.url).toString();

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: absolute(page(locale)),
      alternates: { languages: Object.fromEntries(locales.map((code) => [code, absolute(page(code))])) },
    })),
  );
}
