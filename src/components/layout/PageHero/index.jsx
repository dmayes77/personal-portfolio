import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import styles from "./PageHero.module.css";

export default function PageHero({ id, kicker, title, lede, children }) {
  return (
    <Section id={id} variant="hero" className={styles.section}>
      <Container variant="large">
        <div className={styles.inner}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{title}</h1>
          {lede ? <p className={styles.lede}>{lede}</p> : null}
          {children}
        </div>
      </Container>
    </Section>
  );
}
