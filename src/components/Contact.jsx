import React from 'react';
import Box from './Box';
import Sketch from './Sketch';
import { polygonDraw, polygonSetup } from './sketches/ContactSketch';
import { Link } from 'react-router-dom';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <Box sketch={<Sketch setup={polygonSetup} draw={polygonDraw} />}>
      <Link to="/" className={styles.homeLink}>HOME</Link>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>CONTACT</h1>
          <hr className={styles.divider} />
        </header>

        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <p className={styles.label}>MAIL</p>
            <a href="mailto:your-email@domain.com">your-email@domain.com</a>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.links}>
              <p className={styles.label}>SOCIAL LINKS</p>
              <ul>
                <li><a href="https://github.com" target="_blank">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Box >


  );
}

export default Contact;
