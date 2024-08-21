import React from 'react';
import Box from './Box';
import styles from '../styles/About.module.css';

function About() {
  return (
    <Box>
      <div className={styles.aboutContainer}>
        <section className={styles.centerSection}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.introText}>
            I’m a web developer who merges design, creativity, and technical structure.
            My work focuses on blending artistry with precision, always exploring new ways to innovate.
          </p>
        </section>
        <div className={styles.scrollIndicator}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 21l-12-18h24z" />
          </svg>
        </div>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            My background in computer science and mathematics fueled my interest in understanding and solving complex problems. Studying theoretical computer science and cryptography deepened my appreciation for precision and abstraction.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            Transitioning to web development, I’ve merged these interests with a passion for design, focusing on creating visually engaging and structurally sound applications.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            I’m eager to delve deeper into design and generative art, creating innovative visual experiences. My growing interest in cryptography also drives me to explore new frontiers in cybersecurity, merging creativity with technical precision.
          </p>
        </section>
      </div>
    </Box>
  );
}

export default About;

