import type { Metadata } from "next";
import Link from "next/link";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServicePillars } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocale, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { servicesPage } = getDictionary(locale);
  return pageMetadata(locale, routes.services, {
    title: servicesPage.metaTitle,
    description: servicesPage.metaDescription,
  });
}

export default async function ServicesPage({ params }: LangParams) {
  const locale = await resolveLocale(params);
  const { servicesPage, servicesPreview } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={servicesPage.eyebrow} title={servicesPage.title} lead={servicesPage.lead} />

      <section aria-labelledby="pillars-title">
        <h2 id="pillars-title" className="sr-only">
          {servicesPage.listHeading}
        </h2>
        <Container>
          <ul>
            {getServicePillars(locale).map((pillar) => (
              <li
                key={pillar.id}
                className="reveal group relative grid gap-8 border-b border-line py-14 lg:grid-cols-12 lg:gap-10 lg:py-20"
              >
                <span className="text-xs font-medium tracking-[0.22em] text-subtle lg:col-span-1 lg:pt-4">
                  {pillar.index}
                </span>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-h2 font-semibold text-foreground transition-colors duration-300 group-hover:text-brand">
                    {/* The title link covers the whole row so the row is a single click target. */}
                    <Link href={pillar.href} className="after:absolute after:inset-0">
                      {pillar.title}
                    </Link>
                  </h3>
                  <p className="mt-5 max-w-md text-lead text-muted">{pillar.summary}</p>
                </div>
                <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:col-start-8">
                  <ul className="border-t border-line">
                    {pillar.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center gap-3 border-b border-line py-3.5 text-[0.9375rem] text-foreground/90"
                      >
                        <span className="h-px w-3 bg-brand" aria-hidden="true" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <p
                    aria-hidden="true"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-brand"
                  >
                    {servicesPreview.explore(pillar.title)}
                    <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="why-title" className="py-24 lg:py-36">
        <Container>
          <SectionHeading
            id="why-title"
            eyebrow={servicesPage.whyEyebrow}
            title={servicesPage.whyTitle}
            className="reveal"
          />
          <ul className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10 lg:mt-20">
            {servicesPage.reasons.map((reason) => (
              <li key={reason.title} className="reveal">
                <h3 className="font-display text-h3 font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">{reason.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Approach locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
