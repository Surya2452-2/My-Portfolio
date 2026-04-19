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
              You are reaching out about <strong>{referencedProject.title}</strong>. I can help with a
              similar workflow, from product framing to execution.
            </p>
          ) : null}

          <a
            className="btn btnPrimary"
            href="https://www.linkedin.com/in/surya-polupalli-5b794025a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>

          <div className={styles.social}>
            <SocialLinks large />
          </div>
        </article>
      </div>
    </section>
  );
}
