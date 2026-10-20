import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { routes } from "@/lib/routes";

/** Asymmetric placement for up to three projects; extra projects fall back to a half-width slot. */
const layout = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-48",
  "lg:col-span-6 lg:col-start-2",
];

export function SelectedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Concepts that show how we think."
          description="Our first client case studies are in preparation. Until they are published, these clearly labelled concept projects show how we approach campaigns, digital products and platforms."
          className="reveal"
        />

        <div className="mt-16 grid gap-x-10 gap-y-20 lg:mt-24 lg:grid-cols-12 lg:gap-y-28">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
              className={`reveal ${layout[index] ?? "lg:col-span-6"}`}
            />
          ))}

          <div className="reveal flex flex-col items-start justify-end border-t border-line pt-8 lg:col-span-4 lg:col-start-9">
            <p className="font-display text-h3 font-semibold text-foreground">
              Your project could be our first featured case study.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tell us what you&apos;re working on and we&apos;ll show you how we would approach it.
            </p>
            <Button href={routes.contact} variant="secondary" arrow className="mt-8">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
