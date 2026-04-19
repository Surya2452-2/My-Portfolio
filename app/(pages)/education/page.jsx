import Link from "next/link";
import styles from "./education.module.css";

export const metadata = {
  title: "Education - Polupalli Surya Narayana",
  description: "Academic timeline and learning background.",
};

const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology - Computer Science",
    period: "VSM College of Engineering, JNTUK | 2022 - 2026",
    description:
      "Focused on software engineering, AI/ML, and full-stack product development through project-led learning.",
  },
  {
    id: 2,
    title: "Intermediate Education",
    period: "VSM Junior College | 2020 - 2022",
    description: "Built strong mathematics and analytical foundations with MPC specialization.",
  },
  {
    id: 3,
    title: "Secondary School Education",
    period: "N.M.R.Z.P High School | 2019 - 2020",
    description: "Graduated with top marks and developed an early interest in technology.",
  },
];

export default function Education() {
  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header} data-reveal>
          <p className="sectionBadge">05 / Education</p>
          <h1>Academic path that shaped my engineering mindset.</h1>
          <p className={styles.lead}>
            A learning journey grounded in software fundamentals, problem solving, and applied AI.
          </p>
        </header>

        <div className={styles.timeline}>
          {educationData.map((item) => (
            <article key={item.id} className={`${styles.item} surface`} data-reveal>
              <h2>{item.title}</h2>
              <span>{item.period}</span>
              <p>{item.description}</p>
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

