import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional element aligned to the end of the heading row, e.g. a link. */
  aside?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, aside, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-8">
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-muted uppercase">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-6 font-display text-h2 font-semibold text-balance text-foreground">
          {title}
        </h2>
      </div>
      {description || aside ? (
        <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:pb-2">
          {description ? <p className="max-w-md text-base leading-relaxed text-muted">{description}</p> : null}
          {aside}
        </div>
      ) : null}
    </div>
  );
}
