import { routes, type RoutePath } from "@/lib/routes";

export type ServicePillar = {
  id: string;
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
  href: RoutePath;
  glyph: "circle" | "block" | "arc";
};

export const servicePillars: ServicePillar[] = [
  {
    id: "creative-social",
    index: "01",
    title: "Creative & Social",
    summary: "Content and campaigns that give your brand a recognizable voice on the platforms your audience uses.",
    capabilities: [
      "Social media strategy",
      "Content planning",
      "Creative campaigns",
      "Short-form video concepts",
    ],
    href: routes.socialMediaMarketing,
    glyph: "circle",
  },
  {
    id: "web-technology",
    index: "02",
    title: "Web & Technology",
    summary: "Fast, well-built websites and software that fit how your business actually works.",
    capabilities: [
      "Corporate websites",
      "Landing pages",
      "E-commerce development",
      "Custom software and integrations",
    ],
    href: routes.webDevelopment,
    glyph: "block",
  },
  {
    id: "growth-performance",
    index: "03",
    title: "Growth & Performance",
    summary: "Advertising and measurement set up properly, so every decision is based on real data.",
    capabilities: [
      "Digital advertising",
      "Conversion tracking",
      "Analytics and reporting",
      "Landing page optimization",
    ],
    href: routes.performanceMarketing,
    glyph: "arc",
  },
];
