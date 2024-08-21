import React, { useState, useEffect, useRef } from 'react';
import Box from './Box';
import styles from '../styles/About.module.css';

function About() {
  const contentRef = useRef(null);

  return (
    <Box>
      <div ref={contentRef} style={{ overflowY: 'scroll', height: '100%' }}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.introText}>
          I’m a web developer who merges design, creativity, and technical structure.
          My work focuses on blending artistry with precision, always exploring new ways to innovate.
        </p>
      </div>
    </Box>
  );
}

export default About;

