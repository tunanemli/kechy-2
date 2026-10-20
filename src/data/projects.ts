export type ProjectVisualVariant = "campaign" | "commerce" | "platform";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** Conceptual work is always labeled as such and never presented as client work. */
  kind: "concept" | "client";
  /** Real project imagery (in /public). Concepts without imagery use a CSS visual. */
  image?: { src: string; alt: string };
  visual: { variant: ProjectVisualVariant; label: string };
  /** Case study content. */
  brief: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
  /** Ids of the service pillars involved (see service-pillars.ts). */
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "brand-campaign-concept",
    title: "Brand Campaign Concept",
    category: "Creative & Social",
    summary:
      "A social-first launch campaign: one core idea carried through a key visual system, a content calendar and short-form video concepts.",
    kind: "concept",
    visual: {
      variant: "campaign",
      label: "Illustration of a campaign system: a key visual and a series of social post formats.",
    },
    brief:
      "A brand introducing a new seasonal collection needs a launch that feels like one campaign, not a set of unrelated posts. The campaign has to work across feed posts, stories and short-form video, and lead people to a page where they can act.",
    approach: [
      {
        title: "One idea, many formats",
        body: "Start from a single campaign line and a key visual, then design how it adapts to each format instead of creating each piece from scratch.",
      },
      {
        title: "A calendar with a shape",
        body: "Plan the content in three phases (tease, launch, sustain) so the campaign builds momentum rather than peaking on day one.",
      },
      {
        title: "Video built for the first seconds",
        body: "Write short-form video concepts that show the product and the idea immediately, with captions for viewers watching without sound.",
      },
      {
        title: "A destination that converts",
        body: "Pair the campaign with a focused landing page and tracking, so every channel leads to one measurable action.",
      },
    ],
    deliverables: [
      "Campaign idea and key visual",
      "Format system for feed, stories and video",
      "Three-phase content calendar",
      "Short-form video concepts and scripts",
      "Campaign landing page brief",
    ],
    services: ["creative-social", "growth-performance"],
  },
  {
    slug: "e-commerce-experience-concept",
    title: "E-commerce Experience Concept",
    category: "Web & Technology",
    summary:
      "A storefront designed around fast product discovery, clear product pages and a shorter route to checkout.",
    kind: "concept",
    visual: {
      variant: "commerce",
      label: "Illustration of an online store: a product grid next to a product detail panel.",
    },
    brief:
      "A growing product brand sells mostly through social media messages and wants an online store of its own. Customers should find products quickly on mobile, understand them without asking questions, and check out in as few steps as possible.",
    approach: [
      {
        title: "Mobile first, by default",
        body: "Design the catalogue, filters and product pages for a phone screen first, since that's where social traffic arrives.",
      },
      {
        title: "Product pages that answer questions",
        body: "Structure each product page around the questions customers ask in messages today: sizing, materials, delivery and returns.",
      },
      {
        title: "A shorter checkout",
        body: "Remove steps that don't need to be there, support guest checkout and keep delivery costs visible from the start.",
      },
      {
        title: "Measured from launch",
        body: "Set up e-commerce tracking before launch so marketing and product decisions are based on real behavior.",
      },
    ],
    deliverables: [
      "Store structure and navigation",
      "Product listing and detail page design",
      "Streamlined checkout flow",
      "Storefront development",
      "E-commerce analytics setup",
    ],
    services: ["web-technology", "growth-performance"],
  },
  {
    slug: "digital-platform-concept",
    title: "Digital Platform Concept",
    category: "Web & Technology · Growth",
    summary:
      "A custom web platform connected to existing tools through integrations, with a reporting view built in from day one.",
    kind: "concept",
    visual: {
      variant: "platform",
      label: "Illustration of a web platform dashboard with navigation, a chart and connected tools.",
    },
    brief:
      "A service business manages bookings, customer records and invoices in separate tools, copying data between them by hand. It needs one place to run day-to-day operations and a clear view of how the business is performing.",
    approach: [
      {
        title: "Map the real workflow",
        body: "Document how work actually moves through the team today before deciding what to build, connect or leave alone.",
      },
      {
        title: "Integrate before rebuilding",
        body: "Connect the tools that already work well instead of replacing them, and build only the parts that are missing.",
      },
      {
        title: "Reporting built in",
        body: "Design the reporting view alongside the platform, so the numbers the business cares about are available from day one.",
      },
      {
        title: "Ship in stages",
        body: "Release the most time-consuming workflow first, learn from how the team uses it, then extend.",
      },
    ],
    deliverables: [
      "Workflow mapping and technical scope",
      "Custom web application",
      "Integrations with existing tools",
      "Reporting dashboard",
      "Staged release plan",
    ],
    services: ["web-technology", "growth-performance"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
