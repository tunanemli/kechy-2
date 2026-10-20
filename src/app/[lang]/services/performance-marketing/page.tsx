import type { Metadata } from "next";
import { ServiceDetail, serviceMetadata } from "@/components/services/ServiceDetail";
import { resolveLocale, type LangParams } from "@/i18n/server";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return serviceMetadata(await resolveLocale(params), "growth-performance");
}

export default async function PerformanceMarketingPage({ params }: LangParams) {
  return <ServiceDetail locale={await resolveLocale(params)} id="growth-performance" />;
}
