export const siteConfig = {
  name: "David Mayes",
  title: "David Mayes — Software Developer",
  description:
    "Software developer focused on modern web applications, SaaS platforms, and scalable digital solutions.",
  url: "https://davidmayes.dev",
  locale: "en-US",
  ogImageTitle: "David Mayes",
  ogImageSubtitle: "Software Developer",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  headerCta: {
    href: "/contact",
    label: "Get in touch",
  },
  contactEmail: "dmayes77@gmail.com",
  footerLinks: [
    { label: "GitHub", href: "https://github.com/dmayes77", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/davidamayes",
      external: true,
    },
    { label: "Resume", href: "/resume", external: false },
    { label: "Contact", href: "/contact", external: false },
  ],
};

export const staticRoutes = [
  { href: "/", priority: 1, changeFrequency: "monthly" },
  { href: "/about", priority: 0.8, changeFrequency: "monthly" },
  { href: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { href: "/resume", priority: 0.8, changeFrequency: "monthly" },
  { href: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
