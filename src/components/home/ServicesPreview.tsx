import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServicePillars } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";

export function ServicesPreview({ locale }: { locale: Locale }) {
  const { servicesPreview } = getDictionary(locale);

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-18 py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow={servicesPreview.eyebrow}
          title={
            <>
              {servicesPreview.titleA}
              <br className="hidden sm:block" /> {servicesPreview.titleB}
            </>
          }
          description={servicesPreview.description}
          className="reveal"
        />

        <div className="mt-16 grid border-t border-line lg:mt-24 lg:grid-cols-3">
          {getServicePillars(locale).map((pillar) => (
            <ServiceCard
              key={pillar.id}
              pillar={pillar}
              exploreLabel={servicesPreview.explore(pillar.title)}
              className="reveal border-b border-line lg:border-b-0 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
