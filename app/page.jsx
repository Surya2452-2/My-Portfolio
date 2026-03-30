import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Hi, I&apos;m Surya</h1>
            <p>A passionate Web Developer and AI/ML Enthusiast creating meaningful digital experiences.</p>
            
            <div className={styles.buttons}>
              <Link href="/about" className={`${styles.btn} ${styles.primary}`}>
                Learn About Me
              </Link>
              <Link href="/contact" className={`${styles.btn} ${styles.secondary}`}>
                Get In Touch
              </Link>
            </div>

            <div className={styles.highlightText}>
              Let&apos;s build something amazing together! 🚀
            </div>

            <div className={styles.navButtons}>
              <Link href="/projects" className={styles.navBtn}>Projects</Link>
              <Link href="/skills" className={styles.navBtn}>Skills</Link>
              <Link href="/education" className={styles.navBtn}>Education</Link>
            </div>

            <div className={styles.contactMe}>
              <p>Feel free to reach out for collaborations or just a friendly chat!</p>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/surya-polupalli-5b794025a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.365c.427-.659 1.189-1.595 2.894-1.595 2.108 0 3.688 1.377 3.688 4.337v5.539zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.956.77-1.708 1.963-1.708 1.193 0 1.915.752 1.94 1.708 0 .949-.747 1.707-1.988 1.707zm1.582 11.019H3.656V9.806h3.263v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="https://github.com/Surya2452-2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 . .405 3.3-1.23 1.005.315 3.3 2.85.42 1.65.24 2.88 1.23 3.225-.765.42-1.305.945-1.605 2.67 2.79.255 5.46 1.305 5.46 5.925 0 4.59-2.79 5.625-5.46 5.925.765.645 1.425 1.905 1.425 3.825 0 2.76-.015 4.98-.015 5.58 0 .315.225.69.825.57A12.007 12.007 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/_one.and.only_surya_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3m-7 1a4 4 0 110 8 4 4 0 010-8m0 2a2 2 0 100 4 2 2 0 000-4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.heroImg}>
            <Image 
              src="/images/Surya.jpg" 
              alt="Polupalli Surya Narayana" 
              width={280}
              height={280}
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
