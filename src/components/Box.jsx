import React from 'react';
import styles from '../styles/Box.module.css';
import JuliaFractal from './SimpleShaderSketch';

function Box({ children, sketch }) {
  return (
    <div className={styles.box}>
      {sketch}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Box;

