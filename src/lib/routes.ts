import {
  caseStudySlugs,
  localizeCaseStudy,
  localizePath,
  type CaseStudySlug,
  type InternalPath,
  type Locale,
} from "@/i18n/routing";

/**
 * Site routes as internal paths. Use `href(locale, path)` to get the public,
 * localized URL for a link.
 *
 * Pages ship in phases: a route not in `liveRoutes` has no page yet, and
 * `href` returns null for it so callers can render it as "coming soon"
 * instead of a broken link. When a page ships, add it to `liveRoutes`.
 */
export const routes = {
  home: "/",
  work: "/work",
  services: "/services",
  socialMediaMarketing: "/services/social-media-marketing",
  webDevelopment: "/services/web-development",
  performanceMarketing: "/services/performance-marketing",
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  cookiePolicy: "/cookie-policy",
} as const satisfies Record<string, InternalPath>;

export type RoutePath = (typeof routes)[keyof typeof routes];

const liveRoutes = new Set<InternalPath>([
  routes.home,
  routes.work,
  routes.services,
  routes.socialMediaMarketing,
  routes.webDevelopment,
  routes.performanceMarketing,
  routes.about,
  routes.contact,
]);

export function isLive(path: InternalPath) {
  return liveRoutes.has(path);
}

/** Public URL of a live page in the given locale, or null if the page doesn't exist yet. */
export function href(locale: Locale, path: InternalPath): string | null {
  return isLive(path) ? localizePath(locale, path) : null;
}

/** Like `href`, for pages that are always live (navigation, CTAs). */
export function liveHref(locale: Locale, path: RoutePath): string {
  return localizePath(locale, path);
}

export function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return slug in caseStudySlugs;
}

export function caseStudyHref(locale: Locale, slug: CaseStudySlug) {
  return localizeCaseStudy(locale, slug);
}
