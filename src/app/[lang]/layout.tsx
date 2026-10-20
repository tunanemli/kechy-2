import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/routing";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { site } from "@/lib/site";
import "../globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { meta } = getDictionary(await resolveLocale(params));
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${meta.tagline}`,
      template: `%s — ${site.name}`,
    },
    description: meta.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: meta.ogLocale,
      title: `${site.name} — ${meta.tagline}`,
      description: meta.description,
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default async function RootLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const locale = await resolveLocale(params);

  return (
    <html lang={locale} className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
