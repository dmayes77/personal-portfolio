export const siteConfig = {
  name: "Northstar",
  title: "Northstar Site Starter",
  description:
    "A minimal public-site starter for marketing sites, portfolios, studios, blogs, small business sites, editorial sites, and documentation-style projects.",
  url: "https://example.com",
  locale: "en-US",
  ogImageTitle: "Northstar",
  ogImageSubtitle:
    "A minimal public-site starter for a wide range of non-SaaS projects.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  headerCta: {
    href: "/contact",
    label: "Get in touch",
  },
  contactEmail: "hello@example.com",
};

export const staticRoutes = [
  { href: "/", priority: 1, changeFrequency: "monthly" },
  { href: "/about", priority: 0.8, changeFrequency: "monthly" },
  { href: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
