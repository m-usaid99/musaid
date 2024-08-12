import React from 'react';
import Box from './Box';
import styles from '../styles/Projects.module.css'; // Assuming you'll use CSS modules

function Projects() {
  return (
    <Box>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>PROJECTS</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.rightColumn}>
          {/* Right column content for the project list will go here */}
        </div>
      </div>
    </Box>
  );
}

export default Projects;

