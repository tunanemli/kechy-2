import type { NextConfig } from "next";
import { localeRedirects, localeRewrites, pathnames } from "./src/i18n/routing";

/** English pages lived at the site root before Turkish became the default locale. */
const legacyEnglishRedirects = Object.keys(pathnames)
  .filter((path) => path !== "/")
  .flatMap((path) => [
    { source: path, destination: `/en${path}`, permanent: true },
    ...(path === "/work" ? [{ source: "/work/:slug", destination: "/en/work/:slug", permanent: true }] : []),
  ]);

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
    // Shared-element transitions between a project card and its case study (React <ViewTransition>).
    viewTransition: true,
    // Inline the (small, Tailwind) CSS into the HTML to remove the render-blocking request.
    inlineCss: true,
  },
  async redirects() {
    return [...localeRedirects(), ...legacyEnglishRedirects];
  },
  async rewrites() {
    // Localized public URLs (e.g. /isler) map onto the app/[lang] routes (/tr/work).
    return { beforeFiles: localeRewrites(), afterFiles: [], fallback: [] };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
