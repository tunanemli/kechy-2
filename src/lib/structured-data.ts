import type { Project } from "@/data/projects";
import type { ServicePillar } from "@/data/service-pillars";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/routing";
import { site } from "@/lib/site";

/**
 * schema.org structured data (JSON-LD). Only facts that are shown on the site
 * are included; add `sameAs` profile links here once the social accounts are live.
 */

const contactEmail = "kechycreative@gmail.com";

const absolute = (path: string) => new URL(path, site.url).toString();
const organizationId = () => absolute("/#organization");
const websiteId = () => absolute("/#website");

export type JsonLdNode = Record<string, unknown>;

/** The studio and the website; rendered on every page. */
export function siteGraph(locale: Locale): JsonLdNode {
  const { meta } = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId(),
        name: site.name,
        url: absolute(localizePath(locale, "/")),
        logo: absolute("/brand/kechy-logo-orange.png"),
        description: meta.description,
        email: contactEmail,
        address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: contactEmail,
          availableLanguage: ["Turkish", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: absolute("/"),
        name: site.name,
        inLanguage: ["tr", "en"],
        publisher: { "@id": organizationId() },
      },
    ],
  };
}

/** Home › … › current page. `trail` excludes the home page. */
export function breadcrumbs(locale: Locale, trail: { name: string; path: string }[]): JsonLdNode {
  const homeName = locale === "tr" ? "Ana sayfa" : "Home";
  const items = [{ name: homeName, path: localizePath(locale, "/") }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function serviceSchema(locale: Locale, pillar: ServicePillar): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pillar.title,
    serviceType: pillar.page.metaTitle,
    description: pillar.page.metaDescription,
    url: absolute(pillar.href),
    inLanguage: locale,
    provider: { "@id": organizationId() },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: pillar.title,
      itemListElement: pillar.page.offerings.map((offering) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: offering.title, description: offering.body },
      })),
    },
  };
}

export function faqSchema(faq: { question: string; answer: string }[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function caseStudySchema(locale: Locale, project: Project): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absolute(project.href),
    inLanguage: locale,
    genre: project.category,
    creator: { "@id": organizationId() },
    // Concept work is labeled as such on the page; mirror that here.
    ...(project.kind === "concept" ? { creativeWorkStatus: "Concept" } : {}),
  };
}
