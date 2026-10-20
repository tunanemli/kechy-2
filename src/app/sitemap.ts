import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { caseStudyPath, isLive, routes } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(routes), ...projects.map((project) => caseStudyPath(project.slug))];
  return paths.filter(isLive).map((path) => ({ url: new URL(path, site.url).toString() }));
}
