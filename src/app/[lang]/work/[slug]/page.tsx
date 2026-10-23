import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { ProjectVisual } from "@/components/cards/ProjectVisual";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { getProject, getProjects } from "@/data/projects";
import { getServicePillar } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import { caseStudySlugs } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { caseStudyMetadata } from "@/lib/metadata";
import { isCaseStudySlug, liveHref, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(caseStudySlugs).map((slug) => ({ slug }));
}

async function resolveProject(params: Props["params"]) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const project = getProject(locale, slug);
  if (!project || !isCaseStudySlug(slug)) notFound();
  return { locale, project, slug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, project, slug } = await resolveProject(params);
  const { caseStudy } = getDictionary(locale);
  return caseStudyMetadata(locale, slug, {
    title: project.kind === "concept" ? `${project.title} ${caseStudy.conceptSuffix}` : project.title,
    description: project.summary,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, project } = await resolveProject(params);
  const { caseStudy, common } = getDictionary(locale);

  const projects = getProjects(locale);
  const next = projects[(projects.findIndex((candidate) => candidate.slug === project.slug) + 1) % projects.length];
  const services = project.services
    .map((id) => getServicePillar(locale, id))
    .filter((pillar) => pillar !== undefined);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        lead={project.summary}
        back={{ label: common.allWork, href: liveHref(locale, routes.work) }}
      >
        {project.kind === "concept" ? (
          <p className="inline-flex max-w-2xl items-start gap-3 rounded-[6px] border border-brand/40 px-4 py-3 text-sm leading-relaxed text-muted">
            <span className="mt-0.5 shrink-0 rounded-full border border-brand/60 px-2 py-0.5 text-[0.6875rem] font-medium tracking-[0.16em] text-brand uppercase">
              {common.concept}
            </span>
            {caseStudy.conceptNote}
          </p>
        ) : null}
      </PageHero>

      <Container className="pt-12 lg:pt-16">
        {/* Same name as the project card's visual, so the card morphs into this on navigation. */}
        <ViewTransition name={`project-${project.slug}`} share="project-morph">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-line bg-surface md:aspect-[21/9]">
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                preload
                sizes="(min-width: 1320px) 1224px, 100vw"
                className="object-cover"
              />
            ) : (
              <ProjectVisual variant={project.visual} label={project.visualLabel} text={project.visualText} />
            )}
          </div>
        </ViewTransition>
      </Container>

      <CaseSection id="brief" label={caseStudy.brief}>
        <p className="text-lead text-foreground/90">{project.brief}</p>
      </CaseSection>

      <CaseSection id="approach" label={caseStudy.approach}>
        <ol className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2">
          {project.approach.map((step, stepIndex) => (
            <li key={step.title} className="bg-background p-7 lg:p-8">
              <span className="text-xs font-medium tracking-[0.2em] text-subtle">0{stepIndex + 1}</span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection id="deliverables" label={caseStudy.deliverables}>
        <div className="grid gap-12 sm:grid-cols-2">
          <ul className="border-t border-line">
            {project.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-line py-4 text-foreground/90">
                <span className="h-px w-3 shrink-0 bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{caseStudy.servicesInvolved}</h3>
            <ul className="mt-5 space-y-3">
              {services.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-brand"
                  >
                    {pillar.title}
                    <ArrowIcon className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseSection>

      {next.slug !== project.slug ? (
        <nav aria-label={caseStudy.nextProject} className="border-t border-line">
          <Container>
            <Link href={next.href} className="group flex flex-col gap-3 py-16 lg:py-24">
              <span className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{caseStudy.nextProject}</span>
              <span className="flex items-center justify-between gap-6 font-display text-h2 font-semibold text-foreground transition-colors group-hover:text-brand">
                {next.title}
                <ArrowIcon className="size-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1 lg:size-12" />
              </span>
            </Link>
          </Container>
        </nav>
      ) : null}

      <FinalCta locale={locale} title={[caseStudy.ctaTitleA, caseStudy.ctaTitleB]} />
    </>
  );
}

function CaseSection({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${id}-title`} className="py-16 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h2
          id={`${id}-title`}
          className="text-xs font-medium tracking-[0.22em] text-muted uppercase lg:col-span-3 lg:pt-2"
        >
          {label}
        </h2>
        <div className="lg:col-span-8 lg:col-start-5">{children}</div>
      </Container>
    </section>
  );
}
