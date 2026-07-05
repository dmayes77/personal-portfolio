import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import styles from "./SiteShell.module.css";

export default function SiteShell({ children }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
