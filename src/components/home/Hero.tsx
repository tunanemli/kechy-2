import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/home/HeroVisual";
import { Button } from "@/components/ui/Button";
import { servicePillars } from "@/data/service-pillars";
import { resolveHref, routes } from "@/lib/routes";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid gap-14 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p
            className="animate-rise flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-muted uppercase"
            style={delay(0)}
          >
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Creative <span className="text-brand">×</span> Technology Studio
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-8 font-display text-[clamp(4rem,17vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.045em] sm:text-display text-foreground"
            style={delay(80)}
          >
            We make
            <br />
            brands
            <br />
            <span className="text-brand">grow.</span>
          </h1>

          <p className="animate-rise mt-8 max-w-[34rem] text-lead text-muted" style={delay(160)}>
            We bring creative thinking and technology together to build brands that stand out and businesses that move
            forward.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(240)}>
            <Button href={routes.contact} size="lg" arrow>
              Let&apos;s build something
            </Button>
            <Button href={resolveHref(routes.work) ?? routes.home} size="lg" variant="secondary">
              Explore our work
            </Button>
          </div>
        </div>

        <div className="animate-rise lg:col-span-5" style={delay(200)}>
          <HeroVisual />
        </div>
      </Container>

      <Container>
        <ul className="grid grid-cols-1 border-t border-line text-sm text-muted sm:grid-cols-3">
          {servicePillars.map((pillar) => (
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
