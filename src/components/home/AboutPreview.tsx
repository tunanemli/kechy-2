import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

export function AboutPreview({ locale }: { locale: Locale }) {
  const { aboutPreview } = getDictionary(locale);

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-muted uppercase">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {aboutPreview.eyebrow}
          </p>
          <h2 id="about-title" className="mt-6 font-display text-h2 font-semibold text-foreground">
            {aboutPreview.titleA}
            <br />
            {aboutPreview.titleB}
          </h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lead text-foreground/90">{aboutPreview.body}</p>

          <div className="mt-12 grid grid-cols-[auto_1fr] gap-x-6">
            {aboutPreview.disciplines.map((discipline, index) => (
              <div key={discipline.title} className="contents">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 block size-3 ${index === 0 ? "rounded-full" : "rounded-[2px]"} bg-brand`}
                />
                <div className={index === 0 ? "border-b border-line pb-8" : "pt-8"}>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {discipline.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{discipline.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Button href={liveHref(locale, routes.about)} variant="secondary" arrow className="mt-12">
            {aboutPreview.more}
          </Button>
        </div>
      </Container>
    </section>
  );
}
