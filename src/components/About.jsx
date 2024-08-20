import React, { useEffect } from 'react';
import Box from './Box';
import styles from '../styles/About.module.css';

function About() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const text2 = document.getElementById('text2');
      const text3 = document.getElementById('text3');

      // Adjust scroll thresholds to control when text appears/disappears
      if (scrollY > 200 && scrollY < 600) {
        text2.classList.add('scroll-visible');
      } else {
        text2.classList.remove('scroll-visible');
      }

      if (scrollY > 600 && scrollY < 1000) {
        text3.classList.add('scroll-visible');
      } else {
        text3.classList.remove('scroll-visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box >
      <div className={styles.aboutContainer}>
        <div className={styles.introSection}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.introText}>
            I’m a web developer who merges design, creativity, and technical structure.
            My work focuses on blending artistry with precision, always exploring new ways to innovate.</p>
        </div>
      </div>
    </Box>
  );
}

export default About;
