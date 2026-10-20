import { routes, type RoutePath } from "@/lib/routes";

export type ServicePillar = {
  id: string;
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
  href: RoutePath;
  glyph: "circle" | "block" | "arc";
  /** Content for the service's own page. */
  page: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lead: string;
    offerings: { title: string; body: string }[];
    connection: string;
    goodFit: string[];
    relatedProjectSlug: string;
  };
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
    page: {
      metaTitle: "Social Media & Creative",
      metaDescription:
        "Social media strategy, content planning, creative campaigns and short-form video concepts from Kechy Creative.",
      headline: "Content people stop scrolling for.",
      lead: "We plan, create and run social media content and campaigns that give your brand a clear, consistent voice, and connect it to the rest of your digital presence.",
      offerings: [
        {
          title: "Social media strategy",
          body: "Choosing the right platforms and defining your audience, tone of voice and content pillars around your goals.",
        },
        {
          title: "Content planning",
          body: "Monthly content calendars that balance brand building, product communication and timely topics.",
        },
        {
          title: "Creative campaigns",
          body: "Campaign ideas developed into key visuals and formats for each channel, from launch to wrap-up.",
        },
        {
          title: "Short-form video concepts",
          body: "Concepts, scripts and storyboards for Reels, TikTok and Shorts, built around the first few seconds.",
        },
      ],
      connection:
        "Development is part of the same team, so campaigns can point to landing pages built for them, with tracking in place from the first post.",
      goodFit: [
        "You post regularly, but without a clear direction",
        "You're launching a product, service or brand",
        "You need a consistent visual language across channels",
        "You want your content and website to tell the same story",
      ],
      relatedProjectSlug: "brand-campaign-concept",
    },
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
    page: {
      metaTitle: "Web Development & Technology",
      metaDescription:
        "Corporate websites, landing pages, e-commerce development and custom software and integrations from Kechy Creative.",
      headline: "Websites and software that work as hard as you do.",
      lead: "From corporate websites to custom integrations, we build fast, accessible and maintainable digital products with modern technology.",
      offerings: [
        {
          title: "Corporate websites",
          body: "Clear structure, strong presentation and content you can manage yourself, built for speed and search visibility.",
        },
        {
          title: "Landing pages",
          body: "Focused pages for campaigns and launches, designed around a single action and easy to measure.",
        },
        {
          title: "E-commerce development",
          body: "Online stores with straightforward product discovery and a checkout with as few steps as possible.",
        },
        {
          title: "Custom software and integrations",
          body: "Web applications, automations and connections between the tools your team already uses.",
        },
      ],
      connection:
        "Marketing is part of the same team, so what we build is ready for campaigns: analytics, conversion tracking and content workflows are planned in, not added later.",
      goodFit: [
        "Your website no longer reflects your business",
        "You need a landing page for a campaign or launch",
        "You want to start selling online, or sell better",
        "Manual work between your tools is slowing your team down",
      ],
      relatedProjectSlug: "e-commerce-experience-concept",
    },
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
    page: {
      metaTitle: "Growth & Performance Marketing",
      metaDescription:
        "Digital advertising, conversion tracking, analytics and reporting, and landing page optimization from Kechy Creative.",
      headline: "Growth you can measure.",
      lead: "We plan and run digital advertising, set up tracking properly and turn the data into clear decisions about what to do next.",
      offerings: [
        {
          title: "Digital advertising",
          body: "Planning and managing paid campaigns on the platforms where your audience spends time, aligned with your creative and budget.",
        },
        {
          title: "Conversion tracking",
          body: "Reliable measurement of the actions that matter, such as form submissions, purchases and sign-ups.",
        },
        {
          title: "Analytics and reporting",
          body: "Clear, regular reports that explain what happened, why it matters and what we'll change next.",
        },
        {
          title: "Landing page optimization",
          body: "Improving the pages your traffic lands on, based on data instead of assumptions.",
        },
      ],
      connection:
        "We build websites too, so tracking fixes and landing page changes don't wait on a third party. We implement and test improvements ourselves.",
      goodFit: [
        "You run ads but aren't sure what they deliver",
        "Your tracking is incomplete or unreliable",
        "Visitors arrive but don't take action",
        "You want reports your team actually reads",
      ],
      relatedProjectSlug: "digital-platform-concept",
    },
  },
];

export function getServicePillar(id: string) {
  return servicePillars.find((pillar) => pillar.id === id);
}
