import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNav } from "@/components/layout/navigation";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/95">
      <a
        href="#main"
        className="sr-only rounded-full bg-brand px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href={routes.home} className="-m-2 shrink-0 rounded-md p-2" aria-label="Kechy Creative — home">
          <Logo width={112} preload alt="" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative py-2 text-sm text-muted transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <LanguageSwitcher />
          <Button href={routes.contact} arrow>
            Contact
          </Button>
        </div>

        <MobileNav items={mainNav} />
      </Container>
    </header>
  );
}
