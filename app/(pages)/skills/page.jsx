import Link from "next/link";
import styles from "./skills.module.css";

export const metadata = {
  title: "Skills - Polupalli Surya Narayana",
  description: "Technical strengths in web development, AI/ML, and product engineering.",
};

const skills = [
  { id: 1, title: "HTML / CSS / JavaScript", progress: 95 },
  { id: 2, title: "Python and AI/ML", progress: 90 },
  { id: 3, title: "React and Node.js", progress: 85 },
  { id: 4, title: "Database Design (MySQL)", progress: 82 },
  { id: 5, title: "Machine Learning Models", progress: 78 },
  { id: 6, title: "Git and Collaboration", progress: 88 },
];

export default function Skills() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header} data-reveal>
          <p className="sectionBadge">04 / Skills</p>
          <h1>Focused capabilities across frontend and AI.</h1>
          <p className={styles.lead}>
            Core strengths I use to ship reliable interfaces and practical intelligent features.
          </p>
        </header>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.id} className={`${styles.card} surface`} data-reveal>
              <div className={styles.row}>
                <h2>{skill.title}</h2>
                <span>{skill.progress}%</span>
              </div>
              <div className={styles.track} role="progressbar" aria-valuenow={skill.progress} aria-valuemin={0} aria-valuemax={100}>
                <div className={styles.fill} style={{ width: `${skill.progress}%` }} />
              </div>
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

