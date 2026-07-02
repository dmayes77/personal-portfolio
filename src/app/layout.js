import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/typography.css";
import "@/styles/animations.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { absoluteUrl, siteConfig } from "@/lib/constants";

export const metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark h-full scroll-smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
