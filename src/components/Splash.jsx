import React from "react";
import styles from '../styles/Splash.module.css';
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <div className={styles.splashContainer}>
      <motion.p
        className={styles.name}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        MUHAMMAD USAID
      </motion.p>
      <span className={styles.divider}>|</span>
      <motion.p
        className={styles.port}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        portfolio
      </motion.p>
    </div>
  );
};

export default Splash;

