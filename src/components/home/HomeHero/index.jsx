import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Icon from "@/components/ui/Icon";
import { heroHighlights, heroStats, heroTech } from "@/content/home";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <PageHero
      id="hero"
      containerVariant="hero"
      height="screen"
      innerClassName={styles.heroShell}
      variant="showcase"
    >
      <div className={styles.codeTexture} aria-hidden="true">
        <span>export default function Hero() {"{"}</span>
        <span> return &lt;DigitalSolutions /&gt;;</span>
        <span>{"}"}</span>
        <span>{"const craft = ['strategy', 'design', 'delivery'];"}</span>
        <span>{"const stack = ['Next.js', 'React', 'Supabase'];"}</span>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          David <span>Mayes</span>
        </h1>
        <p className={styles.kicker}>Software Developer</p>
        <p className={styles.heroSubline}>
          {heroHighlights.map((item, index) => (
            <span key={item}>
              {item}
              {index < heroHighlights.length - 1 ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </span>
          ))}
        </p>

        <div className={styles.mobilePortrait} aria-hidden="true">
          <div className={styles.mobilePortraitGlow} />
          <Image
            src="/david-mayes-headshot.png"
            alt=""
            width={880}
            height={910}
            className={styles.mobilePortraitImage}
            priority
          />
        </div>

        <div className={styles.techRow} aria-label="Core technologies">
          {heroTech.map((item) => (
            <div key={item} className={styles.heroTechItem}>
              <span className={styles.heroTechIconWrap}>
                <Icon name={item} tone="brand" />
              </span>
              <span className={styles.heroTechLabel}>{item}</span>
            </div>
          ))}
        </div>

        <ButtonGroup className={styles.heroActions}>
          <Button asChild size="lg" className={styles.heroButton}>
            <Link href="/#featured-projects">View My Projects</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className={styles.heroButton}>
            <Link href="/contact">Let&apos;s Connect</Link>
          </Button>
        </ButtonGroup>
      </div>

      <div className={styles.heroStage}>
        <div className={styles.heroAside}>
          <aside className={styles.statPanel}>
            {heroStats.map((stat) => (
              <div key={stat.value} className={styles.statItem}>
                <span className={styles.statIcon}>
                  <Icon name={stat.icon} />
                </span>
                <div>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </aside>

          <div className={styles.heroQuote}>
            <blockquote>
              I build <span>product software</span> that brings clarity to complex workflows.
            </blockquote>
            <div className={styles.quoteTags}>
              <span>Innovate</span>
              <span>Build</span>
              <span>Deliver</span>
            </div>
          </div>
        </div>
      </div>
    </PageHero>
  );
}
