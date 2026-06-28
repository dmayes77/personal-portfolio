import { absoluteUrl, staticRoutes } from "@/lib/constants";

export default function sitemap() {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
