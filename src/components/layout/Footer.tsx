import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { getMainNav } from "@/components/layout/navigation";
import { getServicePillars } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { href, liveHref, routes } from "@/lib/routes";
import { site } from "@/lib/site";

type FooterLink = { label: string; href: string | null };

export function Footer({ locale }: { locale: Locale }) {
  const { common, footer } = getDictionary(locale);

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: footer.studio,
      links: [...getMainNav(locale), { label: common.contact, href: liveHref(locale, routes.contact) }],
    },
    {
      title: footer.services,
      links: getServicePillars(locale).map((pillar) => ({ label: pillar.title, href: pillar.href })),
    },
  ];

  const legal: FooterLink[] = [
    { label: footer.privacy, href: href(locale, routes.privacyPolicy) },
    { label: footer.cookies, href: href(locale, routes.cookiePolicy) },
  ];

  return (
    <footer className="border-t border-line">
      <Container className="grid gap-14 pt-20 pb-12 md:grid-cols-12 md:gap-8 lg:pt-24">
        <div className="md:col-span-6">
          <Link
            href={liveHref(locale, routes.home)}
            className="-m-2 inline-block rounded-md p-2"
            aria-label={common.homeLabel}
          >
            <Logo width={150} alt="" />
          </Link>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted">{footer.statement}</p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="md:col-span-3">
            <h2 className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{column.title}</h2>
            <ul className="mt-6 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} comingSoon={common.comingSoon} />
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-line py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {footer.rights}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((link) => (
            <li key={link.label}>
              <FooterLinkItem link={link} comingSoon={common.comingSoon} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

/** Renders a link, or a muted "coming soon" label for pages that are not published yet. */
function FooterLinkItem({ link, comingSoon }: { link: FooterLink; comingSoon: string }) {
  if (!link.href) {
    return (
      <span className="text-subtle">
        {link.label} <span className="text-xs">({comingSoon})</span>
      </span>
    );
  }
  return (
    <Link href={link.href} className="text-muted transition-colors duration-200 hover:text-foreground">
      {link.label}
    </Link>
  );
}
