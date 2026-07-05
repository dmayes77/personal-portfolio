export const siteConfig = {
  name: "David Mayes",
  title: "David Mayes — Software Developer",
  description:
    "Product-minded software developer focused on workflow-heavy applications, SaaS platforms, and modern web products.",
  url: "https://davidmayes.dev",
  locale: "en-US",
  ogImageTitle: "David Mayes",
  ogImageSubtitle: "Software Developer",
  nav: [
    { href: "/#featured-projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#capabilities", label: "Capabilities" },
  ],
  contactEmail: "dmayes77@gmail.com",
  location: "Chattanooga, TN",
  resume: {
    pageHref: "/resume",
    pdfHref: "/resume/david-mayes-resume.pdf",
  },
  headerActions: [
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

const socialIconByLabel = {
  GitHub: "github",
  LinkedIn: "linkedin",
};

export const socialLinks = [
  {
    label: "Email",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    icon: "mail",
  },
  ...siteConfig.headerActions
    .filter((link) => socialIconByLabel[link.label])
    .map((link) => ({
      label: link.label,
      value: link.href.replace(/^https?:\/\/(www\.)?/, ""),
      href: link.href,
      icon: socialIconByLabel[link.label],
    })),
];

export const staticRoutes = [
  { href: "/", priority: 1, changeFrequency: "monthly" },
  { href: "/resume", priority: 0.8, changeFrequency: "monthly" },
  { href: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
