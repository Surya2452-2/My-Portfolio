import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './skills.module.css';

export const metadata = {
  title: 'Skills — Polupalli Surya Narayana',
  description: 'My technical skills in web development, Python, AI/ML, React, Node.js, and more.',
};

const skills = [
  {
    id: 1,
    title: 'HTML / CSS / JavaScript',
    progress: 95,
  },
  {
    id: 2,
    title: 'Python & AI/ML',
    progress: 90,
  },
  {
    id: 3,
    title: 'React & Node.js',
    progress: 85,
  },
  {
    id: 4,
    title: 'Database Management (MySQL)',
    progress: 80,
  },
  {
    id: 5,
    title: 'Machine Learning Models',
    progress: 75,
  },
  {
    id: 6,
    title: 'Version Control (Git / GitHub)',
    progress: 85,
  },
];

export default function Skills() {
  return (
    <>
      <section className={styles.section}>
        <h1>My Skills</h1>
        <p className={styles.intro}>Here are some of the key technologies and tools I work with across web development, AI, and machine learning.</p>

        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skillCard} style={{ '--animation-delay': `${skill.id * 0.2}s` }}>
              <h3>{skill.title}</h3>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ '--progress': `${skill.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className={styles.backBtn}>⬅ Back to Home</Link>
      </section>

      <Footer />
    </>
  );
}
