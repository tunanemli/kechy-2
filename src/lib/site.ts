function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Kechy Creative",
  shortName: "Kechy",
  tagline: "Creative × Technology Studio",
  description:
    "Kechy Creative is a creative and technology studio. We bring social media marketing and software development together to build brands that stand out and businesses that move forward.",
  url: resolveSiteUrl(),
  locale: "en_US",
} as const;
