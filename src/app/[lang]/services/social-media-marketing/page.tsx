import type { Metadata } from "next";
import { ServiceDetail, serviceMetadata } from "@/components/services/ServiceDetail";
import { resolveLocale, type LangParams } from "@/i18n/server";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return serviceMetadata(await resolveLocale(params), "creative-social");
}

export default async function SocialMediaMarketingPage({ params }: LangParams) {
  return <ServiceDetail locale={await resolveLocale(params)} id="creative-social" />;
}
