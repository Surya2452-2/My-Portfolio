import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './education.module.css';

export const metadata = {
  title: 'Education — Polupalli Surya Narayana',
  description: 'My educational background and qualifications.',
};

const educationData = [
  {
    id: 1,
    title: 'Bachelor of Technology — Computer Science',
    year: 'VSM College of Engineering, JNTUK | 2022 - 2026',
    description: 'Focused on software development, AI/ML, and full-stack web development. Built multiple projects and maintained excellent academic performance.',
    side: 'left',
  },
  {
    id: 2,
    title: 'Intermediate Education',
    year: 'VSM Junior College | 2020 - 2022',
    description: 'Studied MPC with distinction, building a strong foundation in mathematics and logical problem-solving.',
    side: 'right',
  },
  {
    id: 3,
    title: 'Secondary School Education',
    year: 'N.M.R.Z.P High School | 2019 - 2020',
    description: 'Completed secondary education with top marks and developed an early interest in technology and innovation.',
    side: 'left',
  },
];

export default function Education() {
  return (
    <>
      <section className={styles.section}>
        <h1>My Education</h1>
        <p className={styles.intro}>A look at my academic journey and the milestones that shaped my knowledge and passion for technology.</p>

        <div className={styles.timeline}>
          {educationData.map((item) => (
            <div key={item.id} className={`${styles.timelineItem} ${styles[item.side]}`}>
              <h3>{item.title}</h3>
              <span>{item.year}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <Link href="/" className={styles.backBtn}>⬅ Back to Home</Link>
      </section>

      <Footer />
    </>
  );
}
