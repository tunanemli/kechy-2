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

/**
 * Small brand shapes taken from the logo's geometry: the dot, the stem, the
 * curve. On hover or focus they trace their outline and fill in (see the
 * glyph keyframes in globals.css); `pathLength={1}` normalizes the dash length.
 */
function ServiceGlyph({ glyph }: { glyph: ServicePillar["glyph"] }) {
  const filled = "glyph-fill fill-brand stroke-brand";
  if (glyph === "circle") {
    return (
      <svg aria-hidden="true" viewBox="0 0 28 28" className="size-7 overflow-visible">
        <circle cx="14" cy="14" r="13" pathLength={1} strokeWidth="2" strokeDasharray="1" className={filled} />
      </svg>
    );
  }
  if (glyph === "block") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 28" className="h-7 w-4 overflow-visible">
        <rect x="1" y="1" width="14" height="26" rx="2.5" pathLength={1} strokeWidth="2" strokeDasharray="1" className={filled} />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="size-7 overflow-visible">
      <path
        d="M0 3.5A24.5 24.5 0 0 1 24.5 28"
        pathLength={1}
        strokeWidth="7"
        strokeDasharray="1"
        className="glyph-trace fill-none stroke-brand"
      />
    </svg>
  );
}
