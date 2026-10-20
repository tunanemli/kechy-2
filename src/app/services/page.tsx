import type { Metadata } from "next";
import Link from "next/link";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicePillars } from "@/data/service-pillars";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media and creative, web development and technology, and growth and performance marketing from one focused team.",
  alternates: { canonical: "/services" },
};

const reasons = [
  {
    title: "One brief, one team",
    body: "Campaigns, websites and tracking are planned together, so nothing gets lost between agencies.",
  },
  {
    title: "Direct communication",
    body: "You talk to the people doing the work. No account layers, no messages passed along.",
  },
  {
    title: "Built to be measured",
    body: "Every project starts with clear success criteria and the tracking to see whether we're meeting them.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Creative ideas, solid engineering."
        lead="Social media marketing and software development under one roof. Choose one discipline or combine them. Either way, strategy, content and code move in the same direction."
      />

      <section aria-labelledby="pillars-title">
        <h2 id="pillars-title" className="sr-only">
          Our services
        </h2>
        <Container>
          <ul>
            {servicePillars.map((pillar) => (
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
                    Explore {pillar.title}
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
          <SectionHeading id="why-title" eyebrow="Why one team" title="Two disciplines that work better together." className="reveal" />
          <ul className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10 lg:mt-20">
            {reasons.map((reason) => (
              <li key={reason.title} className="reveal">
                <h3 className="font-display text-h3 font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">{reason.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Approach />
      <FinalCta />
    </>
  );
}
