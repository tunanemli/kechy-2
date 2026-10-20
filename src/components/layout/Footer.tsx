import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNav, type NavItem } from "@/components/layout/navigation";
import { servicePillars } from "@/data/service-pillars";
import { resolveHref, routes } from "@/lib/routes";
import { site } from "@/lib/site";

type FooterLink = { label: string; href: string | null };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Studio",
    links: [...mainNav, { label: "Contact", href: routes.contact } satisfies NavItem],
  },
  {
    title: "Services",
    links: servicePillars.map((pillar) => ({ label: pillar.title, href: resolveHref(pillar.href) })),
  },
];

const legal: FooterLink[] = [
  { label: "Privacy policy", href: resolveHref(routes.privacyPolicy) },
  { label: "Cookie policy", href: resolveHref(routes.cookiePolicy) },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-14 pt-20 pb-12 md:grid-cols-12 md:gap-8 lg:pt-24">
        <div className="md:col-span-6">
          <Link href={routes.home} className="-m-2 inline-block rounded-md p-2" aria-label="Kechy Creative — home">
            <Logo width={150} alt="" />
          </Link>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted">
            A creative and technology studio. We combine social media marketing and software development to help
            brands stand out and businesses move forward.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="md:col-span-3">
            <h2 className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{column.title}</h2>
            <ul className="mt-6 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-line py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((link) => (
            <li key={link.label}>
              <FooterLinkItem link={link} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

/** Renders a link, or a muted "coming soon" label for pages that are not published yet. */
function FooterLinkItem({ link }: { link: FooterLink }) {
  if (!link.href) {
    return (
      <span className="text-subtle">
        {link.label} <span className="text-xs">(coming soon)</span>
      </span>
    );
  }
  return (
    <Link href={link.href} className="text-muted transition-colors duration-200 hover:text-foreground">
      {link.label}
    </Link>
  );
}
