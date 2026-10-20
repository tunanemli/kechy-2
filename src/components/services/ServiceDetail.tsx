import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProject } from "@/data/projects";
import { getServicePillar, servicePillars } from "@/data/service-pillars";
import { routes } from "@/lib/routes";

export function serviceMetadata(id: string): Metadata {
  const pillar = getServicePillar(id);
  if (!pillar) return {};
  return {
    title: pillar.page.metaTitle,
    description: pillar.page.metaDescription,
    alternates: { canonical: pillar.href },
  };
}

/** Shared layout for the individual service pages. */
export function ServiceDetail({ id }: { id: string }) {
  const pillar = getServicePillar(id);
  if (!pillar) notFound();

  const { page } = pillar;
  const project = getProject(page.relatedProjectSlug);
  const others = servicePillars.filter((other) => other.id !== pillar.id);

  return (
    <>
      <PageHero
        eyebrow={`Service ${pillar.index} · ${pillar.title}`}
        title={page.headline}
        lead={page.lead}
        back={{ label: "All services", href: routes.services }}
      >
        <Button href={routes.contact} size="lg" arrow>
          Talk to us about {pillar.title.toLowerCase()}
        </Button>
      </PageHero>

      <section aria-labelledby="offerings-title" className="py-24 lg:py-32">
        <Container>
          <SectionHeading id="offerings-title" eyebrow="What's included" title="What we can do for you." className="reveal" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:mt-20">
            {page.offerings.map((offering, index) => (
              <li key={offering.title} className="reveal flex flex-col bg-background p-8 lg:min-h-72 lg:p-10">
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
          <div className="reveal lg:col-span-6">
            <h2 id="fit-title" className="font-display text-h2 font-semibold text-foreground">
              A good fit if…
            </h2>
            <p className="mt-8 max-w-md text-lead text-muted">{page.connection}</p>
          </div>
          <ul className="reveal border-t border-line lg:col-span-5 lg:col-start-8">
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
              eyebrow="Related work"
              title="See the approach in practice."
              aside={
                <Button href={routes.work} variant="secondary" arrow>
                  All work
                </Button>
              }
              className="reveal"
            />
            <ProjectCard
              project={project}
              aspectClassName="aspect-[4/3] md:aspect-[21/9]"
              className="reveal mt-14 lg:mt-20"
            />
          </Container>
        </section>
      ) : null}

      <Approach eyebrow="How we work" title="The same clear process on every project." />

      <nav aria-label="Other services" className="border-t border-line">
        <Container className="grid md:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.id}
              href={other.href}
              className="group flex items-center justify-between gap-6 border-b border-line py-10 md:border-b-0 md:not-last:border-r md:not-first:pl-10 md:not-last:pr-10 lg:py-14"
            >
              <span>
                <span className="block text-xs font-medium tracking-[0.22em] text-subtle uppercase">
                  Service {other.index}
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

      <FinalCta />
    </>
  );
}
