import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import styles from "./case-study.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Case Study Not Found - Polupalli Surya Narayana",
    };
  }

  return {
    title: `${project.title} Case Study - Polupalli Surya Narayana`,
    description: project.impactSummary,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <div className="container">
        <article className={`${styles.hero} surface`} data-reveal>
          <p className="sectionBadge">Case Study</p>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.impactSummary}</p>

          <div className={styles.heroMeta}>
            <span>Role: {project.role}</span>
            <span>Duration: {project.duration}</span>
          </div>

          <div className={styles.links}>
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btnGhost">
                View Repository
              </a>
            ) : (
              <span className={styles.unavailable}>Private repository</span>
            )}
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary">
                View Live Demo
              </a>
            ) : (
              <span className={styles.unavailable}>Demo unavailable</span>
            )}
          </div>
        </article>

        <div className={styles.layout}>
          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Context</h2>
            <p>{project.outcome}</p>
          </article>

          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>

          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Solution Approach</h2>
            <p>{project.approach}</p>
          </article>

          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Key Decisions and Tradeoffs</h2>
            <ul>
              {project.keyDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </article>

          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Outcomes and Metrics</h2>
            <div className={styles.metrics}>
              {project.metrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.panel} surface`} data-reveal>
            <h2>Tech Stack</h2>
            <div className={styles.stack}>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>

        <section className={styles.gallery} data-reveal aria-label={`${project.title} screenshots`}>
          {project.screenshots.map((shot) => (
            <figure key={shot.src} className={`${styles.shot} surface`}>
              <Image src={shot.src} alt={shot.alt} width={960} height={540} className={styles.shotImage} />
              <figcaption>{shot.alt}</figcaption>
            </figure>
          ))}
        </section>

        <article className={`${styles.cta} surface`} data-reveal>
          <h2>Discuss a Similar Project</h2>
          <p>
            If you are working on a related product challenge, I can help with the same
            end-to-end design and implementation process.
          </p>
          <div className={styles.ctaActions}>
            <Link href={`/contact?topic=${project.slug}`} className="btn btnPrimary">
              Discuss a Similar Project
            </Link>
            <Link href="/projects" className="btn btnGhost">
              Back to Projects
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
