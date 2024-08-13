import React from "react";
import styles from '../styles/Splash.module.css';

const Splash = () => {
  return (
    <div className={styles.splashContainer}>
      <p className={styles.name}>
        MUHAMMAD USAID <span className={styles.divider}>|</span> <span className={styles.port}>portfolio</span>
      </p>
    </div>
  );
};

export default Splash;

