export type ProjectVisualVariant = "campaign" | "commerce" | "platform";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** Conceptual work is always labelled as such and never presented as client work. */
  kind: "concept" | "client";
  /** Real project imagery (in /public). Concepts without imagery use a CSS visual. */
  image?: { src: string; alt: string };
  visual: { variant: ProjectVisualVariant; label: string };
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
  },
];
