"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

/** A link that marks itself as the current page (also for nested pages, e.g. /work/[slug]). */
export function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = !href.includes("#") && href !== "/" && (pathname === href || pathname.startsWith(`${href}/`));
  return <Link href={href} aria-current={isCurrent ? "page" : undefined} {...props} />;
}
