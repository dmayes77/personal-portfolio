import { clientflow } from "./clientflow";
import { clearpoint } from "./clearpoint";
import { clix } from "./clix";
import { inspectos } from "./inspectos";

export const projects = [clientflow, clearpoint, clix, inspectos];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
