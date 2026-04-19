import Link from "next/link";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects - Polupalli Surya Narayana",
  description: "Web, AI, and machine learning projects by Polupalli Surya Narayana.",
};

const projects = [
  {
    id: 1,
    title: "Surya Airlines",
    description: "Full-stack booking platform with authentication, flight inventory, and booking flow.",
    stack: "React, Node.js, SQL",
    link: null,
  },
  {
    id: 2,
    title: "Student Activity Portal",
    description: "Activity management portal with role-aware dashboard and secure admin capabilities.",
    stack: "React, Express, MySQL",
    link: null,
  },
  {
    id: 3,
    title: "AI-Based Chatbot",
    description: "NLP-driven assistant for college-related support queries and smart recommendations.",
    stack: "Python, NLP, Flask",
    link: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal brand experience designed for clarity, performance, and visual impact.",
    stack: "Next.js, CSS Modules",
    link: null,
  },
];

export default function Projects() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header} data-reveal>
          <p className="sectionBadge">03 / Projects</p>
          <h1>Selected work with practical impact.</h1>
          <p className={styles.lead}>
            A curated set of builds focused on product value, technical quality, and usability.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={`${styles.card} surface`} data-reveal>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className={styles.stack}>{project.stack}</span>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btnGhost">
                  View Project
                </a>
              ) : (
                <span className={styles.pending}>Link coming soon</span>
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

