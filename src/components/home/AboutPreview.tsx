import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { isLive, routes } from "@/lib/routes";

const disciplines = [
  {
    title: "Marketing & creative",
    body: "Social media strategy, content, campaigns and creative production, planned around what your audience responds to.",
  },
  {
    title: "Development & technology",
    body: "Websites, custom software, integrations and automation, built to be fast, maintainable and easy to grow.",
  },
];

export function AboutPreview() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-6">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-muted uppercase">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            About Kechy
          </p>
          <h2 id="about-title" className="mt-6 font-display text-h2 font-semibold text-foreground">
            Two disciplines.
            <br />
            One focused team.
          </h2>
        </div>

        <div className="reveal lg:col-span-5 lg:col-start-8">
          <p className="text-lead text-foreground/90">
            We combine creative thinking and technical execution to build digital experiences that look distinctive and
            work hard for your business.
          </p>

          <div className="mt-12 grid grid-cols-[auto_1fr] gap-x-6">
            {disciplines.map((discipline, index) => (
              <div key={discipline.title} className="contents">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 block size-3 ${index === 0 ? "rounded-full" : "rounded-[2px]"} bg-brand`}
                />
                <div className={index === 0 ? "border-b border-line pb-8" : "pt-8"}>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {discipline.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{discipline.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shown once the About page is published (see lib/routes.ts). */}
          {isLive(routes.about) ? (
            <Button href={routes.about} variant="secondary" arrow className="mt-12">
              More about us
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
