import React from 'react';
import Box from './Box';
import Sketch from './Sketch';
import { polygonDraw, polygonSetup } from './sketches/ContactSketch';
import { Link } from 'react-router-dom';
import styles from '../styles/Contact.module.css';
import { useMediaQuery } from 'react-responsive';


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
            <div className={styles.emailContainer}>
              <p className={styles.label}>MAIL</p>
              <a href="mailto:rehman.usaid@gmail.com">rehman&#46;usaid&#64;gmail&#46;com</a>
            </div>
            <p className={styles.introText}>
              I am always interested in working on interesting projects that push boundaries in design. If you want to collaborate on
              a project, feel free to connect via email.
            </p>

            <p className={styles.introText}>If you haven't seen my projects already,
              you can browse them <Link className={styles.projectLink}
                to='/projects' > here</Link>!</p>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.socialContainer}>
              <div className={styles.links}>
                <p className={styles.label}>SOCIAL LINKS</p>
                <ul>
                  <li><a href="https://github.com" target="_blank">GitHub</a></li>
                  <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                  <li><a target='_blank'>Mixcloud</a></li>
                </ul>
              </div>
              <p className={styles.musicText}>You can check out my explorations in music
                curation and mixes <Link to='/audio-journal' className={styles.projectLink}>here</Link>. I am open
                to collaborating on music, and especially exploring the audiovisual medium.</p>
            </div>
          </div>
        </div>
      </div>
    </Box >
  );
}

export default Contact;
