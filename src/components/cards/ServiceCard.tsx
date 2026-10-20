import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import type { ServicePillar } from "@/data/service-pillars";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  pillar: ServicePillar;
  exploreLabel: string;
  className?: string;
};

export function ServiceCard({ pillar, exploreLabel, className }: ServiceCardProps) {
  const headingId = `service-${pillar.id}`;

  return (
    <article aria-labelledby={headingId} className={cn("group flex flex-col py-10 lg:px-10 lg:py-12", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-[0.22em] text-subtle">{pillar.index}</span>
        <ServiceGlyph glyph={pillar.glyph} />
      </div>

      <h3 id={headingId} className="mt-12 font-display text-h3 font-semibold text-foreground lg:mt-16">
        {pillar.title}
      </h3>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">{pillar.summary}</p>

      <ul className="mt-8 space-y-0 border-t border-line">
        {pillar.capabilities.map((capability) => (
          <li key={capability} className="flex items-center gap-3 border-b border-line py-3.5 text-[0.9375rem] text-foreground/90">
            <span className="h-px w-3 bg-brand" aria-hidden="true" />
            {capability}
          </li>
        ))}
      </ul>

      <Link
        href={pillar.href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
      >
        {exploreLabel}
        <ArrowIcon className="size-4" />
      </Link>
    </article>
  );
}

/** Small brand shapes taken from the logo's geometry: the dot, the stem, the curve. */
function ServiceGlyph({ glyph }: { glyph: ServicePillar["glyph"] }) {
  const base = "transition-transform duration-500 ease-out-soft motion-safe:group-hover:-translate-y-1";
  if (glyph === "circle") return <span aria-hidden="true" className={cn(base, "size-7 rounded-full bg-brand")} />;
  if (glyph === "block") return <span aria-hidden="true" className={cn(base, "h-7 w-4 rounded-[3px] bg-brand")} />;
  return (
    <span
      aria-hidden="true"
      className={cn(base, "size-7 rounded-tr-full border-t-[7px] border-r-[7px] border-brand")}
    />
  );
}
