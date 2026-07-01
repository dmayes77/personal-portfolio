import { absoluteUrl, staticRoutes } from "@/lib/constants";
import { projects } from "@/content/projects";

export default function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
