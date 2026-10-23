import { notFound } from "next/navigation";
import { getServicePillar } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { ogImage, ogSize } from "@/lib/og-image";

export const alt = "Kechy Creative";
export const size = ogSize;
export const contentType = "image/png";

// Pre-render one image per language at build time.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = await resolveLocale(params);
  const pillar = getServicePillar(locale, "growth-performance");
  if (!pillar) notFound();
  const { common } = getDictionary(locale);
  return ogImage({ locale, eyebrow: `${common.servicePrefix} ${pillar.index} · ${pillar.title}`, title: pillar.page.headline });
}
