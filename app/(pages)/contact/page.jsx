import SocialLinks from "@/components/SocialLinks";
import { getProjectBySlug } from "@/data/projects";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact - Polupalli Surya Narayana",
  description: "Get in touch for collaboration, frontend work, and AI-focused projects.",
};

export default async function Contact({ searchParams }) {
  const params = await searchParams;
  const topic = typeof params?.topic === "string" ? params.topic : "";
  const referencedProject = topic ? getProjectBySlug(topic) : null;

  return (
    <section className={styles.page}>
      <div className="container">
        <article className={`${styles.panel} surface`} data-reveal>
          <p className="sectionBadge">06 / Contact</p>
          <h1>Let us build something meaningful together.</h1>
          <p className={styles.copy}>
            Open to internships, freelance opportunities, and collaborative product work.
          </p>

          {referencedProject ? (
            <p className={styles.context}>
              You are reaching out about <strong>{referencedProject.title}</strong>. I can help with a similar
              workflow, from product framing to execution.
            </p>
          ) : null}

          <div className={styles.actions}>
            <a className="btn btnPrimary" href="mailto:polupallisuryanarayana@gmail.com" aria-label="Email Surya">
              Email Me
            </a>
            <a className="btn btnSecondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <a
              className="btn btnGhost"
              href="https://github.com/Surya2452-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btnGhost"
              href="https://www.linkedin.com/in/surya-polupalli-5b794025a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className={styles.contactCards}>
            <article className={styles.contactCard}>
              <h2>Email</h2>
              <p>
                <a href="mailto:polupallisuryanarayana@gmail.com">polupallisuryanarayana@gmail.com</a>
              </p>
            </article>
            <article className={styles.contactCard}>
              <h2>Resume</h2>
              <p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download a concise, recruiter-ready resume
                </a>
              </p>
            </article>
            <article className={styles.contactCard}>
              <h2>Social</h2>
              <p>Find me on GitHub and LinkedIn for work samples and professional context.</p>
            </article>
          </div>

          <div className={styles.social}>
            <SocialLinks large />
          </div>
        </article>
      </div>
    </section>
  );
}
