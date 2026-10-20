function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

/** Locale-independent site settings. Localized copy lives in i18n/dictionaries.ts. */
export const site = {
  name: "Kechy Creative",
  url: resolveSiteUrl(),
} as const;
