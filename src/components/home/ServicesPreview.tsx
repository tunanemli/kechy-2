import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicePillars } from "@/data/service-pillars";

export function ServicesPreview() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-18 py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title={
            <>
              Ideas that get noticed.
              <br className="hidden sm:block" /> Technology that works.
            </>
          }
          description="Social media marketing and software development under one roof, so strategy, content and code move in the same direction."
          className="reveal"
        />

        <div className="mt-16 grid border-t border-line lg:mt-24 lg:grid-cols-3">
          {servicePillars.map((pillar) => (
            <ServiceCard
              key={pillar.id}
              pillar={pillar}
              className="reveal border-b border-line lg:border-b-0 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
