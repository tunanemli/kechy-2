import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

type FinalCtaProps = {
  title?: React.ReactNode;
  body?: string;
  action?: string;
};

export function FinalCta({
  title = (
    <>
      Have a project
      <br />
      in mind?
    </>
  ),
  body = "Tell us what you're building. Let's explore how we can make it happen.",
  action = "Start a conversation",
}: FinalCtaProps) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line">
      {/* The logo's dot, scaled up as the closing brand mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8vw] hidden size-[40vw] max-h-[680px] max-w-[680px] -translate-y-1/2 rounded-full bg-brand lg:block"
      />

      <Container className="relative py-28 lg:py-44">
        <div className="reveal">
          <h2 id="cta-title" className="font-display text-display font-semibold text-foreground">
            {title}
          </h2>
        </div>
        <div className="reveal mt-10 flex max-w-xl flex-col items-start gap-10 lg:mt-14">
          <p className="text-lead text-muted">{body}</p>
          <Button href={routes.contact} size="lg" arrow>
            {action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
