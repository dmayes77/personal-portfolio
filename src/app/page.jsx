import AboutSection from "@/components/home/AboutSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ClosingSection from "@/components/home/ClosingSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HomeHero from "@/components/home/HomeHero";
import styles from "@/components/home/page.module.css";

export const metadata = {
  title: {
    absolute: "David Mayes — Software Developer",
  },
  description:
    "Product-minded software developer building workflow-heavy applications, SaaS platforms, and modern web products.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHero />
      <FeaturedProjects />
      <AboutSection />
      <CapabilitiesSection />
      <ClosingSection />
    </div>
  );
}
