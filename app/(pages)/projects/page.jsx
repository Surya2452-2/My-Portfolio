import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects - Polupalli Surya Narayana",
  description: "Proof-driven case studies in web, AI, and machine learning.",
};

export default function Projects() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header} data-reveal>
          <p className="sectionBadge">03 / Projects</p>
          <h1>Selected work with practical impact.</h1>
          <p className={styles.lead}>
            Each project focuses on outcomes, constraints, and measurable improvements.
          </p>
          <p className={styles.count}>{projects.length} proof-driven case studies</p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.slug} className={`${styles.card} surface`} data-reveal>
              <h2>{project.title}</h2>
              <p className={styles.impactLabel}>What changed</p>
              <p>{project.impactSummary}</p>

              <div className={styles.chips} aria-label={`${project.title} proof points`}>
                {project.proofChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              <div className={styles.meta}>
                <span>{project.role}</span>
                <span>{project.duration}</span>
              </div>

              <div className={styles.actions}>
                <Link href={`/projects/${project.slug}`} className="btn btnGhost">
                  Read Case Study
                </Link>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btnGhost">
                    Live Demo
                  </a>
                ) : (
                  <span className={styles.unavailable} aria-label="Demo unavailable">
                    Demo unavailable
                  </span>
                )}
              </div>

              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                  Repository
                </a>
              ) : (
                <span className={styles.unavailable}>Private repository</span>
              )}
            </article>
          ))}
        </div>

        <div className={styles.backWrap} data-reveal>
          <Link href="/" className="btn btnGhost">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
