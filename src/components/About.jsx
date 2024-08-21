import React from 'react';
import Box from './Box';
import styles from '../styles/About.module.css';

function About() {
  return (
    <Box>
      <div className={styles.aboutContainer}>
        <div className={styles.blockOne}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.introText}>
            I’m a web developer who merges design, creativity, and technical structure. My work focuses on blending artistry with precision, always exploring new ways to innovate.
          </p>
        </div>

        <div className={styles.blockTwo}>
          <p className={styles.subText}>
            I have a strong background in both frontend and backend development, with a particular interest in creative coding and generative art.
          </p>
        </div>

        <div className={styles.blockThree}>
          <p className={styles.subText}>
            My approach to projects is holistic, considering both the technical and aesthetic aspects to create seamless experiences.
          </p>
        </div>

        <div className={styles.blockFour}>
          <p className={styles.subText}>
            Constantly learning and evolving, I aim to stay at the forefront of technology and design trends.
          </p>
        </div>
      </div>
    </Box>
  );
}

export default About;

