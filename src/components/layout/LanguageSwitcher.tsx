"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { locales, localizeSegments, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const languageNames: Record<Locale, string> = { tr: "Türkçe", en: "English" };

/** Links to the current page in each language. */
export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  // Internal route segments are identical on server and client, unlike the
  // browser pathname, which differs for rewritten (Turkish) URLs.
  const segments = useSelectedLayoutSegments();

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center gap-1.5 text-xs font-medium tracking-[0.14em]", className)}
    >
      {locales.map((target, index) => (
        <span key={target} className="flex items-center gap-1.5">
          {index > 0 ? (
            <span aria-hidden="true" className="text-line">
              /
            </span>
          ) : null}
          {target === locale ? (
            <span aria-current="true" className="text-foreground">
              <span aria-hidden="true">{target.toUpperCase()}</span>
              <span className="sr-only">{languageNames[target]}</span>
            </span>
          ) : (
            <Link
              href={localizeSegments(target, segments)}
              hrefLang={target}
              lang={target}
              className="rounded-sm px-0.5 text-subtle transition-colors hover:text-foreground"
            >
              <span aria-hidden="true">{target.toUpperCase()}</span>
              <span className="sr-only">{languageNames[target]}</span>
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
