import type { Metadata } from "next";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { liveHref, routes } from "@/lib/routes";
import { breadcrumbs } from "@/lib/structured-data";

const disciplineShapes = ["rounded-full", "rounded-[3px]"];

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { aboutPage } = getDictionary(locale);
  return pageMetadata(locale, routes.about, { title: aboutPage.metaTitle, description: aboutPage.metaDescription });
}

export default async function AboutPage({ params }: LangParams) {
  const locale = await resolveLocale(params);
  const { aboutPage, aboutPreview, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd data={breadcrumbs(locale, [{ name: nav.about, path: liveHref(locale, routes.about) }])} />
      <PageHero
        eyebrow={aboutPreview.eyebrow}
        title={
          <>
            {aboutPreview.titleA}
            <br />
            {aboutPreview.titleB}
          </>
        }
        lead={aboutPreview.body}
      />

      <section aria-labelledby="team-title" className="py-24 lg:py-36">
        <Container>
          <SectionHeading
            id="team-title"
            eyebrow={aboutPage.teamEyebrow}
            title={aboutPage.teamTitle}
            description={aboutPage.teamDescription}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2 lg:mt-20">
            {aboutPage.disciplines.map((discipline, index) => (
              <article key={discipline.title} className="flex flex-col bg-background p-8 lg:p-12">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">
                    {aboutPage.disciplineLabel} 0{index + 1}
                  </span>
                  <span aria-hidden="true" className={`size-6 bg-brand ${disciplineShapes[index]}`} />
                </div>
                <h3 className="mt-16 font-display text-h3 font-semibold text-foreground">{discipline.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{discipline.body}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {discipline.areas.map((area) => (
                    <li key={area} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground/90">
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="border-t border-line py-24 lg:py-36">
        <Container>
          <SectionHeading
            id="principles-title"
            eyebrow={aboutPage.principlesEyebrow}
            title={aboutPage.principlesTitle}
          />
          <ol className="mt-14 border-t border-line lg:mt-20">
            {aboutPage.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid gap-4 border-b border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <span className="text-xs font-medium tracking-[0.22em] text-subtle lg:col-span-1 lg:pt-2">
                  0{index + 1}
                </span>
                <h3 className="font-display text-h3 font-semibold text-foreground lg:col-span-5">{principle.title}</h3>
                <p className="max-w-lg text-base leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Approach locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
