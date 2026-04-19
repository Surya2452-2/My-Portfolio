import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import styles from "./page.module.css";

const modules = [
  { href: "/about", title: "About", text: "Who I am, how I think, and what I care about." },
  { href: "/projects", title: "Projects", text: "Real builds focused on impact and execution quality." },
  { href: "/skills", title: "Skills", text: "Core technical strengths across frontend and AI." },
  { href: "/education", title: "Education", text: "Academic foundation behind my engineering mindset." },
  { href: "/contact", title: "Contact", text: "Let us collaborate on something meaningful." },
];

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
              I build modern, high-clarity digital products with thoughtful UX and strong implementation.
            </p>

            <div className={styles.actions}>
              <Link href="/projects" className="btn btnPrimary">
                View Projects
              </Link>
              <Link href="/contact" className="btn btnGhost">
                Contact
              </Link>
            </div>

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
      </div>
    </section>
  );
}
