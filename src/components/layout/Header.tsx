import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { getMainNav } from "@/components/layout/navigation";
import { NavLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

export function Header({ locale }: { locale: Locale }) {
  const { common } = getDictionary(locale);
  const nav = getMainNav(locale);
  const contactHref = liveHref(locale, routes.contact);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/95">
      <a
        href="#main"
        className="sr-only rounded-full bg-brand px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[60]"
      >
        {common.skipToContent}
      </a>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href={liveHref(locale, routes.home)} className="-m-2 shrink-0 rounded-md p-2" aria-label={common.homeLabel}>
          <Logo width={112} preload alt="" />
        </Link>

        <nav aria-label={common.mainNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.section}>
                <NavLink
                  href={item.href}
                  section={item.section}
                  className="relative py-2 text-sm text-muted transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <LanguageSwitcher locale={locale} label={common.languageLabel} />
          <Button href={contactHref} arrow>
            {common.contact}
          </Button>
        </div>

        <MobileNav
          locale={locale}
          items={nav}
          contactHref={contactHref}
          labels={{
            nav: common.mobileNavLabel,
            open: common.openMenu,
            close: common.closeMenu,
            contact: common.contactUs,
            language: common.languageLabel,
          }}
        />
      </Container>
    </header>
  );
}
