import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjects } from "@/data/projects";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";
import { liveHref, routes } from "@/lib/routes";

/** Asymmetric placement for up to three projects; extra projects fall back to a half-width slot. */
const layout = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-48",
  "lg:col-span-6 lg:col-start-2",
];

export function SelectedWork({ locale }: { locale: Locale }) {
  const { selectedWork, common } = getDictionary(locale);
  const featured = getProjects(locale).slice(0, 3);

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow={selectedWork.eyebrow}
          title={selectedWork.title}
          description={selectedWork.description}
          aside={
            <Button href={liveHref(locale, routes.work)} variant="secondary" arrow>
              {selectedWork.viewAll}
            </Button>
          }
          className="reveal"
        />

        <div className="mt-16 grid gap-x-10 gap-y-20 lg:mt-24 lg:grid-cols-12 lg:gap-y-28">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={common}
              featured={index === 0}
              className={`reveal ${layout[index] ?? "lg:col-span-6"}`}
            />
          ))}

          <div className="reveal flex flex-col items-start justify-end border-t border-line pt-8 lg:col-span-4 lg:col-start-9">
            <p className="font-display text-h3 font-semibold text-foreground">{selectedWork.pitchTitle}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{selectedWork.pitchBody}</p>
            <Button href={liveHref(locale, routes.contact)} variant="secondary" arrow className="mt-8">
              {selectedWork.pitchAction}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
