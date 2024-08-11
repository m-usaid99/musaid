import React from 'react';
import styles from '../styles/Box.module.css';

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

