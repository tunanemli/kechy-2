import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

type FinalCtaProps = {
  locale: Locale;
  /** Two-line headline; defaults to the general "project in mind" prompt. */
  title?: [string, string];
  body?: string;
  action?: string;
};

export function FinalCta({ locale, title, body, action }: FinalCtaProps) {
  const { cta } = getDictionary(locale);
  const [lineA, lineB] = title ?? [cta.titleA, cta.titleB];

  return (
    <section aria-labelledby="cta-title" className="relative overflow-clip border-t border-line">
      {/* The logo's dot, growing into the closing brand mark as the section scrolls in.
          Centered with `top` rather than a translate: scroll timelines measure the untransformed box. */}
      <span
        aria-hidden="true"
        className="scroll-grow pointer-events-none absolute top-[calc(50%-min(20vw,340px))] right-[-8vw] hidden size-[40vw] max-h-[680px] max-w-[680px] rounded-full bg-brand lg:block"
      />

      <Container className="relative py-28 lg:py-44">
        <div className="cta-copy">
          <h2 id="cta-title" className="font-display text-display font-semibold text-balance text-foreground">
            {lineA}
            <br />
            {lineB}
          </h2>
        </div>
        <div className="mt-10 flex max-w-xl flex-col items-start gap-10 lg:mt-14">
          <p className="text-lead text-muted">{body ?? cta.body}</p>
          <Button href={liveHref(locale, routes.contact)} size="lg" arrow>
            {action ?? cta.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
