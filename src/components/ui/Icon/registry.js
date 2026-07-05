import { brandIcons } from "./brand-icons";
import { uiIcons } from "./ui-icons";

export const iconRegistry = {
  ...uiIcons,
  ...brandIcons,
};

export function getIconDefinition(name) {
  return iconRegistry[name] || null;
}
