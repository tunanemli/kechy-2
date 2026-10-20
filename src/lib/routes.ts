/**
 * Single source of truth for the site's routes.
 *
 * Pages ship in phases. A route listed in `liveRoutes` has a real page; every
 * other route resolves to a fallback on a page that already exists, so links
 * are never broken. When a page ships, add its path to `liveRoutes` and every
 * link to it updates automatically.
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
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

const liveRoutes = new Set<string>([routes.home, routes.contact]);

/** Where a not-yet-built route points in the meantime. `null` = nowhere sensible yet. */
const fallbacks: Record<RoutePath, string | null> = {
  [routes.home]: null,
  [routes.work]: "/#work",
  [routes.services]: "/#services",
  [routes.socialMediaMarketing]: "/#services",
  [routes.webDevelopment]: "/#services",
  [routes.performanceMarketing]: "/#services",
  [routes.about]: "/#about",
  [routes.contact]: null,
  [routes.privacyPolicy]: null,
  [routes.cookiePolicy]: null,
};

export function isLive(path: string) {
  return liveRoutes.has(path);
}

/** The href to use for a route today: the route itself if live, else its fallback. */
export function resolveHref(path: RoutePath): string | null {
  return isLive(path) ? path : fallbacks[path];
}

export function caseStudyPath(slug: string) {
  return `${routes.work}/${slug}`;
}
