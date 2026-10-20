import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

/** `section` is the first internal route segment, used to mark the current page. */
export type NavItem = { label: string; href: string; section: string };

export function getMainNav(locale: Locale): NavItem[] {
  const { nav } = getDictionary(locale);
  return [
    { label: nav.work, href: liveHref(locale, routes.work), section: "work" },
    { label: nav.services, href: liveHref(locale, routes.services), section: "services" },
    { label: nav.about, href: liveHref(locale, routes.about), section: "about" },
  ];
}
