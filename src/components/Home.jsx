import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { homeSetup, homeDraw } from './sketches/HomeSketch';
import { mobileSetup, mobileDraw } from './sketches/HomeSketchMobile';
import { Link } from 'react-router-dom';
import Box from './Box';
import Sketch from './Sketch';
import styles from '../styles/Home.module.css';
import NowPlaying from './music/NowPlaying';

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile &&
        <div className={styles.nowPlaying}>
          <NowPlaying />
        </div>}

      <Box sketch={<Sketch setup={isMobile ? mobileSetup : homeSetup} draw={isMobile ? mobileDraw : homeDraw} />}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h1 className={styles.name}>Muhammad Usaid</h1>
            <p className={styles.description}>web design, development & programming</p>
            <div className={styles.loremText}>
              <p>In an era of frameworks & repetitive UI libraries, I strive to bring creativity and individuality to what I create. </p>

              <p>I view coding as a creative process, much like painting or composing music — each line of code is a personal expression of creativity. </p>
            </div>
          </div>
          <div className={styles.rightColumn}>
            {!isMobile &&
              <div className={styles.nowPlaying}>
                <NowPlaying />
              </div>
            }
            <ul className={styles.menu}>
              <li><Link to='/projects'>PROJECTS</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/audio-journal'>AUDIO JOURNAL</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
          </div>
        </div>
        {isMobile && <div className={styles.gradientOverlay}></div>}
      </Box >
    </div>
  );
}

export default Home;

