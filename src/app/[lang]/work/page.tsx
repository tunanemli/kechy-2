import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { getProjects } from "@/data/projects";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { liveHref, routes } from "@/lib/routes";
import { breadcrumbs } from "@/lib/structured-data";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { workPage } = getDictionary(locale);
  return pageMetadata(locale, routes.work, { title: workPage.metaTitle, description: workPage.metaDescription });
}

export default async function WorkPage({ params }: LangParams) {
  const locale = await resolveLocale(params);
  const { workPage, common, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd data={breadcrumbs(locale, [{ name: nav.work, path: liveHref(locale, routes.work) }])} />
      <PageHero eyebrow={workPage.eyebrow} title={workPage.title} lead={workPage.lead} />

      <section aria-labelledby="projects-title" className="py-20 lg:py-28">
        <h2 id="projects-title" className="sr-only">
          {workPage.listHeading}
        </h2>
        <Container className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-y-28">
          {getProjects(locale).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={common}
              featured={index === 0}
              aspectClassName={index === 0 ? "aspect-[4/3] md:aspect-[21/9]" : undefined}
              className={index === 0 ? "reveal md:col-span-2" : "reveal"}
            />
          ))}
        </Container>
      </section>

      <FinalCta
        locale={locale}
        title={[workPage.ctaTitleA, workPage.ctaTitleB]}
        body={workPage.ctaBody}
        action={workPage.ctaAction}
      />
    </>
  );
}
