import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About - Polupalli Surya Narayana",
  description: "About Polupalli Surya Narayana, web developer and AI/ML enthusiast.",
};

const pillars = [
  "Human-centered UI and frontend engineering",
  "AI/ML problem-solving with practical product outcomes",
  "Consistent execution from concept to shipped experience",
];

export default function About() {
  return (
    <section className={styles.page}>
      <div className="container">
        <article className={`${styles.panel} surface`} data-reveal>
          <div className={styles.media}>
            <Image
              src="/images/Surya.jpg"
              alt="Polupalli Surya Narayana"
              width={350}
              height={410}
              className={styles.photo}
            />
          </div>

          <div className={styles.content}>
            <p className={`sectionBadge ${styles.eyebrow}`}>02 / About</p>
            <h1>Building useful products with clear design and strong code.</h1>
            <p>
              I am Polupalli Surya Narayana, a developer focused on web applications and applied AI.
              My approach combines clean architecture, visual clarity, and measurable user outcomes.
            </p>
            <p>
              I enjoy turning ideas into polished digital products using React, Next.js, Python, and
              machine learning workflows.
            </p>

            <ul className={styles.list}>
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link href="/projects" className="btn btnPrimary">
                Explore Projects
              </Link>
              <Link href="/contact" className="btn btnGhost">
                Work Together
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

