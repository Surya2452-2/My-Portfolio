import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

const modules = [
  { href: "/about", title: "About", text: "Who I am, how I think, and what I care about." },
  { href: "/projects", title: "Projects", text: "Real builds focused on impact and execution quality." },
  { href: "/skills", title: "Skills", text: "Core technical strengths across frontend and AI." },
  { href: "/education", title: "Education", text: "Academic foundation behind my engineering mindset." },
  { href: "/contact", title: "Contact", text: "Let us collaborate on something meaningful." },
];

const trustPoints = [
  { label: "B.Tech CSE (AI & ML)", value: "2026 Graduate" },
  { label: "73% Aggregate", value: "Strong academic performance" },
  { label: "Tata Data Analytics", value: "Job Simulation" },
  { label: "Deloitte Cyber", value: "Job Simulation" },
  { label: "BCG Strategy", value: "Job Simulation" },
  { label: "GitHub Profile", value: "active contributions" },
  { label: "LinkedIn Profile", value: "real-time recruiter updates" },
  { label: "Resume", value: "Download ready" },
];

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.grid}>
          <article className={`${styles.intro} surface`} data-reveal>
            <p className={`sectionBadge ${styles.kicker}`}>01 / Home</p>
            <h1>Polupalli Surya Narayana</h1>
            <p className={styles.role}>Frontend Engineer - AI/ML Builder</p>
            <p className={styles.tagline}>
              I help teams ship faster by building clear, high-performance web products with measurable impact.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btnPrimary">
                Hire Me
              </Link>
              <Link href="/projects" className="btn btnGhost">
                View Projects
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btnSecondary">
                Download Resume
              </a>
            </div>

            <p className={styles.secondaryAction}>
              Open to internships, collaborations, and full-time product roles.
            </p>
            <SocialLinks />
          </article>

          <aside className={`${styles.visual} surface`} data-reveal>
            <div className={styles.photoWrap}>
              <Image
                src="/images/Surya.jpg"
                alt="Portrait of Polupalli Surya Narayana"
                width={360}
                height={430}
                priority
                className={styles.photo}
              />
            </div>
          </aside>
        </div>

        <section className={styles.modules} data-reveal>
          {modules.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.moduleCard} surface`}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </Link>
          ))}
        </section>

        <section className={styles.trustSection} data-reveal>
          <header className={styles.trustHeader}>
            <p className="sectionBadge">Trusted signals</p>
            <h2>Recruiters can recognize credibility immediately.</h2>
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
            <p className="sectionBadge">Proof-Driven Work</p>
            <h2>Case studies with measurable outcomes</h2>
          </header>

          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article key={project.slug} className={`${styles.caseCard} surface`}>
                <h3>{project.title}</h3>
                <p>{project.impactSummary}</p>

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
