import React from 'react';
import styles from '../styles/Box.module.css';
import JuliaFractalSketch from './JuliaFractal';

function Box({ children, sketch, contentRef }) {
  return (
    <div className={styles.box}>
      {sketch ? sketch : <JuliaFractalSketch />}

      <div className={styles.content} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default Box;
