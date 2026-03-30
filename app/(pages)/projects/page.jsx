import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './projects.module.css';

export const metadata = {
  title: 'Projects — Polupalli Surya Narayana',
  description: 'Explore my projects showcasing web development, AI, and machine learning projects.',
};

const projects = [
  {
    id: 1,
    title: 'Surya Airlines',
    description: 'A full-stack airline booking website with user authentication, flight listings, and booking management.',
  },
  {
    id: 2,
    title: 'Student Activity Portal',
    description: 'Developed a portal for managing student activities with an admin dashboard and secure backend integration.',
  },
  {
    id: 3,
    title: 'AI-Based Chatbot',
    description: 'Created a conversational chatbot using Python and NLP to answer college-related queries intelligently.',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This personal website showcases my work, skills, and achievements with animations and smooth design.',
  },
];

export default function Projects() {
  return (
    <>
      <section className={styles.section}>
        <h1>My Projects</h1>
        <p className={styles.intro}>A collection of my favorite projects that showcase my skills in web development, AI, and machine learning.</p>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>

        <Link href="/" className={styles.backBtn}>⬅ Back to Home</Link>
      </section>

      <Footer />
    </>
  );
}
