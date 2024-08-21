import React from 'react';
import styles from '../styles/Box.module.css';

function Box({ children, sketch, altSketch }) {
  return (
    <div className={styles.box}>
      {sketch ? sketch : altSketch}

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Box;
