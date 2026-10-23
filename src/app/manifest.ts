import type { MetadataRoute } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/routing";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const { meta } = getDictionary(defaultLocale);
  return {
    name: site.name,
    short_name: "Kechy",
    description: meta.description,
    lang: defaultLocale,
    start_url: "/",
    display: "browser",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
