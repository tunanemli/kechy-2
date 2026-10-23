import { notFound } from "next/navigation";
import { getProject } from "@/data/projects";
import { getDictionary } from "@/i18n/dictionaries";
import { caseStudySlugs, locales } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { ogImage, ogSize } from "@/lib/og-image";

export const alt = "Kechy Creative";
export const size = ogSize;
export const contentType = "image/png";

// Pre-render one image per language and case study at build time.
export function generateStaticParams() {
  return locales.flatMap((lang) => Object.keys(caseStudySlugs).map((slug) => ({ lang, slug })));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const locale = await resolveLocale(params);
  const project = getProject(locale, (await params).slug);
  if (!project) notFound();
  const { common } = getDictionary(locale);
  const eyebrow = project.kind === "concept" ? `${common.concept} · ${project.category}` : project.category;
  return ogImage({ locale, eyebrow, title: project.title });
}
