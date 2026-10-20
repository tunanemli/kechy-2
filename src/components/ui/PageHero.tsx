import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Optional parent page, shown as a back link above the eyebrow. */
  back?: { label: string; href: string };
  children?: React.ReactNode;
  className?: string;
};

/** Opening section for inner pages. */
export function PageHero({ eyebrow, title, lead, back, children, className }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className={cn("border-b border-line", className)}>
      <Container className="pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-24">
        {back ? (
          <Link
            href={back.href}
            className="animate-rise mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span> {back.label}
          </Link>
        ) : null}
        <p className="animate-rise flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-muted uppercase">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1
          id="page-title"
          className="animate-rise mt-8 max-w-[14ch] font-display text-h1 font-semibold text-balance text-foreground"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {lead ? (
          <p
            className="animate-rise mt-8 max-w-2xl text-lead text-muted"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        ) : null}
        {children ? (
          <div className="animate-rise mt-10" style={{ "--delay": "240ms" } as React.CSSProperties}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
