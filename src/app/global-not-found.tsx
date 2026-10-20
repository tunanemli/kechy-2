import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { NotFoundContent } from "@/components/layout/NotFoundContent";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin", "latin-ext"], weight: ["400", "500"] });
const heading = Space_Grotesk({ variable: "--font-heading", subsets: ["latin", "latin-ext"], weight: ["600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${getDictionary("tr").notFound.title} — Kechy Creative`,
};

/** 404 for URLs that match no route at all. */
export default function GlobalNotFound() {
  return (
    <html lang="tr" className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full items-center">
        <main className="w-full">
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}
