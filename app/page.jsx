import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

const trustBar = [
  { value: "2026 Graduate", label: "B.Tech CSE (AI & ML)" },
  { value: "73% Aggregate", label: "Academic performance" },
  { value: "3 Virtual Internships", label: "Practical learning in data, cyber, and strategy" },
  { value: "AI & Web product focus", label: "Recruiter-ready execution" },
];

const trustPoints = [
  { label: "Tata Data Analytics", value: "Simulation experience" },
  { label: "Deloitte Cyber", value: "Simulation experience" },
  { label: "BCG Strategy", value: "Simulation experience" },
  { label: "GitHub", value: "Active project history" },
  { label: "LinkedIn", value: "Recruiter-ready profile" },
  { label: "Resume", value: "Download ready" },
];

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.heroGrid}>
          <article className={`${styles.hero} surface`} data-reveal>
            <p className={`sectionBadge ${styles.kicker}`}>01 / Home</p>
            <h1>Surya Narayana Polupalli</h1>
            <p className={styles.role}>AI & ML Engineer | Full Stack Developer</p>
            <p className={styles.tagline}>
              Building scalable web applications, AI-powered solutions, and modern user experiences that help teams ship with confidence.
            </p>

            <div className={styles.primaryActions}>
              <a
                className="btn btnPrimary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <Link href="/projects" className="btn btnSecondary">
                View Projects
              </Link>
            </div>

            <div className={styles.trustBar}>
              {trustBar.map((item) => (
                <div key={item.value} className={styles.trustItem}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.socialStrip}>
              <SocialLinks large />
            </div>
          </article>

          <aside className={`${styles.visual} surface`} data-reveal>
            <div className={styles.photoWrap}>
              <Image
                src="/images/Surya.jpg"
                alt="Portrait of Surya Narayana Polupalli"
                width={440}
                height={520}
                priority
                className={styles.photo}
              />
            </div>
          </aside>
        </div>

        <section className={styles.trustSection} data-reveal>
          <header className={styles.trustHeader}>
            <p className="sectionBadge">Trusted signals</p>
            <h2>Recruiters see credibility before they reach the contact section.</h2>
          </header>
          <div className={styles.trustGrid}>
            {trustPoints.map((point) => (
              <div key={point.label} className={styles.trustCard}>
                <strong>{point.label}</strong>
                <span>{point.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.featured} data-reveal>
          <header className={styles.featuredHeader}>
            <p className="sectionBadge">Proof-driven work</p>
            <h2>Selected case studies that show problem, solution, stack, and result.</h2>
          </header>

          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article key={project.slug} className={`${styles.caseCard} surface`}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.impactSummary}</p>

                <div className={styles.chips}>
                  {project.proofChips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="btn btnGhost">
                  Read Case Study
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
