import React from 'react';
import Box from './Box';
import { homeSetup, homeDraw } from './sketches/HomeSketch';
import Sketch from './Sketch';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <Box sketch={<Sketch setup={homeSetup} draw={homeDraw} />} >
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.name}>Muhammad Usaid</h1>
          <p className={styles.description}>web design, development & programming</p>
          <p className={styles.loremText}>Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.rightColumn}>
          <ul className={styles.menu}>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>AUDIO JOURNAL</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default Home;

