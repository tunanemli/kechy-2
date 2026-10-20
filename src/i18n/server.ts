import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/routing";

export type LangParams = { params: Promise<{ lang: string }> };

/** The page's locale from its `[lang]` param; unknown locales are a 404. */
export async function resolveLocale(params: LangParams["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
