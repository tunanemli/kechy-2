import type { Metadata } from "next";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { meta } = getDictionary(locale);
  return pageMetadata(locale, routes.home, {
    title: { absolute: meta.homeTitle },
    description: meta.homeDescription,
  });
}

export default async function Home({ params }: LangParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <Hero locale={locale} />
      <ServicesPreview locale={locale} />
      <SelectedWork locale={locale} />
      <Approach locale={locale} />
      <AboutPreview locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
