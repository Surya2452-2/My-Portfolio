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

            <div className={styles.actions}>
              <Link href="/projects" className="btn btnPrimary">
                Explore Case Studies
              </Link>
            </div>
            <p className={styles.secondaryAction}>
              Open to internships and collaboration.
              <Link href="/contact"> Start a conversation</Link>
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
