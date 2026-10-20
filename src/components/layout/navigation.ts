import { resolveHref, routes, type RoutePath } from "@/lib/routes";

export type NavItem = { label: string; href: string };

function navItem(label: string, path: RoutePath): NavItem {
  // Nav routes always have a fallback, so this never resolves to null.
  return { label, href: resolveHref(path) ?? routes.home };
}

export const mainNav: NavItem[] = [
  navItem("Work", routes.work),
  navItem("Services", routes.services),
  navItem("About", routes.about),
];
