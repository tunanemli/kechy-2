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
        <SectionHeading id="approach-title" eyebrow={eyebrow} title={title} className="reveal" />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {approach.steps.map((step, index) => (
            <li key={step.title} className="reveal group flex min-h-64 flex-col bg-background p-8 lg:min-h-80">
              <span className="font-display text-5xl font-semibold tracking-tight text-subtle transition-colors duration-500 group-hover:text-brand lg:text-6xl">
                0{index + 1}
              </span>
              <h3 className="mt-auto pt-12 font-display text-2xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
