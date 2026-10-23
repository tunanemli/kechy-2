import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/routing";

type ApproachProps = {
  locale: Locale;
  /** The service-page variant of the heading. */
  variant?: "default" | "service";
};

export function Approach({ locale, variant = "default" }: ApproachProps) {
  const { approach } = getDictionary(locale);
  const eyebrow = variant === "service" ? approach.serviceEyebrow : approach.eyebrow;
  const title = variant === "service" ? approach.serviceTitle : approach.title;

  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading id="approach-title" eyebrow={eyebrow} title={title} />

        {/* As the section scrolls by, a line draws across the steps and each number lights up when reached. */}
        <div className="progress-track relative mt-16 lg:mt-24">
          <span
            aria-hidden="true"
            className="progress-line pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left rounded-t-[6px] bg-brand"
          />
          <ol className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <li key={step.title} className="flex min-h-64 flex-col bg-background p-8 lg:min-h-80">
                <span
                  className="progress-step font-display text-5xl font-semibold tracking-tight text-subtle lg:text-6xl"
                  style={{ "--step": index } as React.CSSProperties}
                >
                  0{index + 1}
                </span>
                <h3 className="mt-auto pt-12 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
