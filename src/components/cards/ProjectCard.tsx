import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ProjectVisual } from "@/components/cards/ProjectVisual";
import { ArrowIcon } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  labels: { concept: string; viewCaseStudy: string };
  /** Larger visual for the lead project in a layout. */
  featured?: boolean;
  /** Overrides the visual's aspect ratio classes. */
  aspectClassName?: string;
  className?: string;
};

export function ProjectCard({ project, labels, featured = false, aspectClassName, className }: ProjectCardProps) {
  const headingId = `project-${project.slug}`;

  return (
    <article aria-labelledby={headingId} className={cn("group relative flex flex-col", className)}>
      {/* Morphs into the case study's hero visual on navigation (same name there). */}
      <ViewTransition name={`project-${project.slug}`} share="project-morph">
        <div
          className={cn(
            "relative overflow-hidden rounded-[6px] border border-line bg-surface",
            aspectClassName ?? (featured ? "aspect-[4/3] lg:aspect-[16/12]" : "aspect-[4/3]"),
          )}
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-out-soft motion-safe:group-hover:scale-[1.03]">
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 38vw, 100vw"}
                className="object-cover"
              />
            ) : (
              <ProjectVisual variant={project.visual} label={project.visualLabel} text={project.visualText} />
            )}
          </div>
        </div>
      </ViewTransition>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.16em] uppercase">
        {project.kind === "concept" ? (
          <span className="rounded-full border border-brand/60 px-2.5 py-1 font-medium text-brand">{labels.concept}</span>
        ) : null}
        <span className="text-subtle">{project.category}</span>
      </div>

      <h3 id={headingId} className="mt-4 font-display text-h3 font-semibold text-foreground">
        {/* The heading link covers the whole card so the card is a single click target. */}
        <Link href={project.href} className="after:absolute after:inset-0 after:rounded-[6px]">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{project.summary}</p>

      <p
        aria-hidden="true"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-brand"
      >
        {labels.viewCaseStudy} <ArrowIcon className="size-4" />
      </p>
    </article>
  );
}
