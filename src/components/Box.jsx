import React from 'react';
import styles from '../styles/Box.module.css';
import JuliaFractalSketch from './JuliaFractal';

function Box({ children, sketch }) {
  return (
    <div className={styles.box}>
      {/* {sketch} */}
      {sketch ? sketch : <JuliaFractalSketch />}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Box;
