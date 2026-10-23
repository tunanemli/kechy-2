import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProject } from "@/data/projects";
import { getServicePillar, getServicePillars } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { liveHref, routes } from "@/lib/routes";
import { breadcrumbs, faqSchema, serviceSchema } from "@/lib/structured-data";

export function serviceMetadata(locale: Locale, id: string): Metadata {
  const pillar = getServicePillar(locale, id);
  if (!pillar) return {};
  return pageMetadata(locale, pillar.route, {
    title: pillar.page.metaTitle,
    description: pillar.page.metaDescription,
  });
}

/** Shared layout for the individual service pages. */
export function ServiceDetail({ locale, id }: { locale: Locale; id: string }) {
  const pillar = getServicePillar(locale, id);
  if (!pillar) notFound();

  const { common, serviceDetail, nav } = getDictionary(locale);
  const { page } = pillar;
  const project = getProject(locale, pillar.relatedProjectSlug);
  const others = getServicePillars(locale).filter((other) => other.id !== pillar.id);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbs(locale, [
            { name: nav.services, path: liveHref(locale, routes.services) },
            { name: pillar.title, path: pillar.href },
          ]),
          serviceSchema(locale, pillar),
          faqSchema(page.faq),
        ]}
      />
      <PageHero
        eyebrow={`${common.servicePrefix} ${pillar.index} · ${pillar.title}`}
        title={page.headline}
        lead={page.lead}
        back={{ label: common.allServices, href: liveHref(locale, routes.services) }}
      >
        <Button href={liveHref(locale, routes.contact)} size="lg" arrow>
          {serviceDetail.talkAbout(pillar.title)}
        </Button>
      </PageHero>

      <section aria-labelledby="offerings-title" className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            id="offerings-title"
            eyebrow={serviceDetail.offeringsEyebrow}
            title={serviceDetail.offeringsTitle}
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:mt-20">
            {page.offerings.map((offering, index) => (
              <li key={offering.title} className="flex flex-col bg-background p-8 lg:min-h-72 lg:p-10">
                <span className="text-xs font-medium tracking-[0.2em] text-subtle">0{index + 1}</span>
                <h3 className="mt-auto pt-12 font-display text-h3 font-semibold text-foreground">{offering.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{offering.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="fit-title" className="border-t border-line py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2 id="fit-title" className="font-display text-h2 font-semibold text-balance text-foreground">
              {serviceDetail.fitTitle}
            </h2>
            <p className="mt-8 max-w-md text-lead text-muted">{page.connection}</p>
          </div>
          <ul className="border-t border-line lg:col-span-5 lg:col-start-8">
            {page.goodFit.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line py-5 text-lg text-foreground/90">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {project ? (
        <section aria-labelledby="related-title" className="border-t border-line py-24 lg:py-32">
          <Container>
            <SectionHeading
              id="related-title"
              eyebrow={serviceDetail.relatedEyebrow}
              title={serviceDetail.relatedTitle}
              aside={
                <Button href={liveHref(locale, routes.work)} variant="secondary" arrow>
                  {common.allWork}
                </Button>
              }
            />
            <ProjectCard
              project={project}
              labels={common}
              aspectClassName="aspect-[4/3] md:aspect-[21/9]"
              className="reveal mt-14 lg:mt-20"
            />
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="faq-title" className="border-t border-line py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-muted uppercase">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              {serviceDetail.faqEyebrow}
            </p>
            <h2 id="faq-title" className="mt-6 font-display text-h2 font-semibold text-balance text-foreground">
              {serviceDetail.faqTitle}
            </h2>
          </div>
          {/* Native disclosure: works without JavaScript and with the keyboard. */}
          <div className="border-t border-line lg:col-span-7">
            {page.faq.map((item) => (
              <details key={item.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-foreground transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{item.question}</h3>
                  <span aria-hidden="true" className="relative size-4 shrink-0 text-brand">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pr-10 pb-7 text-base leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <Approach locale={locale} variant="service" />

      <nav aria-label={serviceDetail.otherServices} className="border-t border-line">
        <Container className="grid md:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.id}
              href={other.href}
              className="group flex items-center justify-between gap-6 border-b border-line py-10 md:border-b-0 md:not-last:border-r md:not-first:pl-10 md:not-last:pr-10 lg:py-14"
            >
              <span>
                <span className="block text-xs font-medium tracking-[0.22em] text-subtle uppercase">
                  {common.servicePrefix} {other.index}
                </span>
                <span className="mt-3 block font-display text-h3 font-semibold text-foreground transition-colors group-hover:text-brand">
                  {other.title}
                </span>
              </span>
              <ArrowIcon className="size-6 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
            </Link>
          ))}
        </Container>
      </nav>

      <FinalCta locale={locale} />
    </>
  );
}
