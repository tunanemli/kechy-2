import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line">
      {/* The logo's dot, scaled up as the closing brand mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8vw] hidden size-[40vw] max-h-[680px] max-w-[680px] -translate-y-1/2 rounded-full bg-brand lg:block"
      />

      <Container className="relative py-28 lg:py-44">
        <div className="reveal max-w-[16ch] sm:max-w-none">
          <h2 id="cta-title" className="font-display text-display font-semibold text-foreground">
            Have a project
            <br />
            in mind?
          </h2>
        </div>
        <div className="reveal mt-10 flex max-w-xl flex-col items-start gap-10 lg:mt-14">
          <p className="text-lead text-muted">Tell us what you&apos;re building. Let&apos;s explore how we can make it happen.</p>
          <Button href={routes.contact} size="lg" arrow>
            Start a conversation
          </Button>
        </div>
      </Container>
    </section>
  );
}
