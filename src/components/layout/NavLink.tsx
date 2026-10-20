"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

type NavLinkProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  /** First internal route segment of the section, e.g. "work". */
  section: string;
};

/** A link that marks itself as current while any page in its section is open. */
export function NavLink({ href, section, ...props }: NavLinkProps) {
  // Internal segments rather than the browser pathname: localized URLs are rewrites.
  const [current] = useSelectedLayoutSegments();
  return <Link href={href} aria-current={current === section ? "page" : undefined} {...props} />;
}
