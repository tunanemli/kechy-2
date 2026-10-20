import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { number: "01", title: "Discover", body: "Understand the business, audience, and problem." },
  { number: "02", title: "Strategize", body: "Define the creative direction, technical scope, and success criteria." },
  { number: "03", title: "Build", body: "Design, develop, produce, and implement." },
  { number: "04", title: "Improve", body: "Measure performance, learn, and optimize." },
];

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-18 border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="approach-title"
          eyebrow="Our approach"
          title="A clear process, from first conversation to results."
          className="reveal"
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="reveal group flex min-h-64 flex-col bg-background p-8 lg:min-h-80">
              <span className="font-display text-5xl font-semibold tracking-tight text-subtle transition-colors duration-500 group-hover:text-brand lg:text-6xl">
                {step.number}
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
