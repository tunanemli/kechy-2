import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Concept projects from Kechy Creative showing how we approach brand campaigns, e-commerce experiences and digital platforms.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work"
        lead="Our first client case studies are in preparation. Until they are published, these concept projects show how we approach campaigns, digital products and platforms. Each one is clearly marked as a concept."
      />

      <section aria-labelledby="projects-title" className="py-20 lg:py-28">
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <Container className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-y-28">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
              aspectClassName={index === 0 ? "aspect-[4/3] md:aspect-[21/9]" : undefined}
              className={index === 0 ? "reveal md:col-span-2" : "reveal"}
            />
          ))}
        </Container>
      </section>

      <FinalCta
        title={
          <>
            Your project
            <br />
            could be next.
          </>
        }
        body="We're taking on our first featured projects. Tell us what you're working on and we'll show you how we would approach it."
        action="Start a project"
      />
    </>
  );
}
