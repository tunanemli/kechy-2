import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/home/HeroVisual";
import { Button } from "@/components/ui/Button";
import { getServicePillars } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid gap-14 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p
            className="animate-rise flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-muted uppercase"
            style={delay(0)}
          >
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {hero.eyebrowA} <span className="text-brand">×</span> {hero.eyebrowB}
          </p>

          <h1
            id="hero-title"
            className="mt-8 font-display text-[clamp(4rem,17vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-foreground sm:text-display"
          >
            {/* Each line rises from behind its own mask; the padding keeps descenders and diacritics visible. */}
            {[...hero.lines, hero.highlight].map((line, index, all) => (
              <span key={line} className="-my-[0.18em] block overflow-hidden py-[0.18em]">
                <span
                  className={`animate-line block ${index === all.length - 1 ? "text-brand" : ""}`}
                  style={delay(index * 100)}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="animate-rise mt-8 max-w-[34rem] text-lead text-muted" style={delay(380)}>
            {hero.lead}
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(480)}>
            <Button href={liveHref(locale, routes.contact)} size="lg" arrow>
              {hero.primary}
            </Button>
            <Button href={liveHref(locale, routes.work)} size="lg" variant="secondary">
              {hero.secondary}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual locale={locale} />
        </div>
      </Container>

      <Container>
        <ul className="grid grid-cols-1 border-t border-line text-sm text-muted sm:grid-cols-3">
          {getServicePillars(locale).map((pillar) => (
            <li
              key={pillar.id}
              className="flex items-baseline gap-3 border-b border-line py-4 sm:border-b-0 sm:py-6 sm:not-first:pl-6 sm:not-last:border-r sm:not-last:pr-6"
            >
              <span className="text-xs tracking-[0.2em] text-subtle">{pillar.index}</span>
              {pillar.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
