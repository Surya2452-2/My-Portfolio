import SocialLinks from "@/components/SocialLinks";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact - Polupalli Surya Narayana",
  description: "Get in touch for collaboration, frontend work, and AI-focused projects.",
};

export default function Contact() {
  return (
    <section className={styles.page}>
      <div className="container">
        <article className={`${styles.panel} surface`} data-reveal>
          <p className="sectionBadge">06 / Contact</p>
          <h1>Let us build something meaningful together.</h1>
          <p className={styles.copy}>
            Open to internships, freelance opportunities, and collaborative product work.
          </p>

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

