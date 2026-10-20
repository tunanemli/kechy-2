import type { Metadata } from "next";
import { Approach } from "@/components/home/Approach";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kechy Creative is a small, focused studio combining social media marketing and software development.",
  alternates: { canonical: "/about" },
};

const disciplines = [
  {
    label: "Discipline 01",
    title: "Marketing & creative",
    body: "One of us focuses on social media and digital marketing: understanding audiences, shaping a brand's voice and turning ideas into content and campaigns.",
    areas: ["Social media strategy", "Content and campaigns", "Creative production", "Digital marketing"],
    shape: "rounded-full",
  },
  {
    label: "Discipline 02",
    title: "Development & technology",
    body: "The other focuses on software: building websites and applications, connecting systems and automating the work that slows teams down.",
    areas: ["Web development", "Custom software", "Integrations", "Automation"],
    shape: "rounded-[3px]",
  },
];

const principles = [
  {
    title: "Small on purpose",
    body: "You work directly with the people doing the work. Decisions are quick and nothing gets lost in hand-offs.",
  },
  {
    title: "Ideas and execution together",
    body: "A good idea needs to be built well, and good technology needs an idea worth building. We plan both at the same table.",
  },
  {
    title: "Honest by default",
    body: "We only show work and results we can stand behind. Concepts are labeled as concepts, and estimates are realistic.",
  },
  {
    title: "Built to last",
    body: "Clean code, clear documentation and content systems you can run yourself, so you're never locked in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kechy"
        title={
          <>
            Two disciplines.
            <br />
            One focused team.
          </>
        }
        lead="We combine creative thinking and technical execution to build digital experiences that look distinctive and work hard for your business."
      />

      <section aria-labelledby="team-title" className="py-24 lg:py-36">
        <Container>
          <SectionHeading
            id="team-title"
            eyebrow="Who we are"
            title="A marketer and a developer, working as one."
            description="Kechy is a two-person studio. Most projects need both perspectives, so we built a team where they sit side by side from day one."
            className="reveal"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2 lg:mt-20">
            {disciplines.map((discipline) => (
              <article key={discipline.title} className="reveal flex flex-col bg-background p-8 lg:p-12">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.22em] text-subtle uppercase">{discipline.label}</span>
                  <span aria-hidden="true" className={`size-6 bg-brand ${discipline.shape}`} />
                </div>
                <h3 className="mt-16 font-display text-h3 font-semibold text-foreground">{discipline.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{discipline.body}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {discipline.areas.map((area) => (
                    <li key={area} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground/90">
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="border-t border-line py-24 lg:py-36">
        <Container>
          <SectionHeading id="principles-title" eyebrow="What we believe" title="How we like to work." className="reveal" />
          <ol className="mt-14 border-t border-line lg:mt-20">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="reveal grid gap-4 border-b border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <span className="text-xs font-medium tracking-[0.22em] text-subtle lg:col-span-1 lg:pt-2">
                  0{index + 1}
                </span>
                <h3 className="font-display text-h3 font-semibold text-foreground lg:col-span-5">{principle.title}</h3>
                <p className="max-w-lg text-base leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Approach />
      <FinalCta />
    </>
  );
}
