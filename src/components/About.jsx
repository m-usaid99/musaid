import React from 'react';
import Box from './Box';
import styles from '../styles/About.module.css';

function About() {
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
