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
            Each project reveals the challenge, solution, technology stack, and outcome.
          </p>
          <p className={styles.count}>{projects.length} proof-driven case studies</p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.slug} className={`${styles.card} surface`} data-reveal>
              <div className={styles.cardTop}>
                <div>
                  <h2>{project.title}</h2>
                  <p className={styles.problemLabel}>Problem</p>
                </div>
                <span className={styles.duration}>{project.duration}</span>
              </div>

              <p className={styles.description}>{project.impactSummary}</p>
              <p className={styles.problem}>{project.problem}</p>

              <div className={styles.stack} aria-label={`${project.title} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <Link href={`/projects/${project.slug}`} className="btn btnGhost">
                  View Case Study
                </Link>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btnSecondary">
                    View Live Demo
                  </a>
                ) : (
                  <span className={styles.unavailable} aria-label="Demo unavailable">
                    Live demo unavailable
                  </span>
                )}
              </div>

              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                  View Code
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
