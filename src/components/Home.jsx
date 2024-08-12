import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Box from './Box';
import { homeSetup, homeDraw } from './sketches/HomeSketch';
import { mobileSetup, mobileDraw } from './sketches/HomeSketchMobile';
import Sketch from './Sketch';
import styles from '../styles/Home.module.css';

// TODO: - implement router and replace <li> with Link elements; 
// - begin integration of last.fm api for a now playing widget;

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Box sketch={<Sketch setup={isMobile ? mobileSetup : homeSetup} draw={isMobile ? mobileDraw : homeDraw} />}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.name}>Muhammad Usaid</h1>
          <p className={styles.description}>web design, development & programming</p>
          <p className={styles.loremText}>
            In an era of frameworks & repetitive UI libraries, I strive to bring creativity and individuality to what I create.

            <p>I view coding as a creative process, much like painting or composing music — each line of code is a personal expression of creativity.</p>
          </p>
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

