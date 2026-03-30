import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export const metadata = {
  title: 'About — Polupalli Surya Narayana',
  description: 'About Polupalli Surya Narayana, a passionate Web Developer and AI/ML Enthusiast. Learn about his skills, journey, and projects.',
};

export default function About() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.aboutImg}>
          <Image 
            src="/images/Surya.jpg" 
            alt="Polupalli Surya Narayana" 
            width={280}
            height={280}
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.aboutText}>
          <h1>About Me</h1>
          <p>Hello! I&apos;m <span className={styles.highlight}>Polupalli Surya Narayana</span> — a passionate <span className={styles.highlight}>Web Developer</span> and <span className={styles.highlight}>AI/ML Enthusiast</span> who loves turning ideas into meaningful digital experiences.</p>

          <p>My journey started with curiosity about how technology connects people and simplifies lives. Over time, I&apos;ve gained experience in <span className={styles.highlight}>HTML, CSS, JavaScript, React, Python</span>, and I&apos;m exploring modern frameworks like <span className={styles.highlight}>TensorFlow</span> and <span className={styles.highlight}>Flask</span> to build full-stack applications.</p>

          <Link href="/" className={styles.btn}>Back to Home</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
