import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import styles from '../styles/Projects.module.css';
import Sketch from './Sketch';
import { hilbertDraw, hilbertSetup } from './sketches/HilbertCurve';

function Projects() {
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectItems = rightColumnRef.current.querySelectorAll(`.${styles.projectItem}`);

      projectItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromBottom = windowHeight - rect.bottom;

        // Determine opacity based on distance from the bottom
        const opacity = Math.min(1, Math.max(0.2, distanceFromBottom / 200));
        item.style.opacity = opacity;
      });
    };

    const rightColumn = rightColumnRef.current;
    rightColumn.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to set opacity based on initial positions
    handleScroll();

    return () => rightColumn.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sketch={<Sketch setup={hilbertSetup} draw={hilbertDraw} />}>
      <Link to="/" className={styles.homeLink}>HOME</Link>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>PROJECTS</h1>
          <div className={styles.description}>
            <p>
              This is a showcase of my best work in the areas of ui/ux design, web design & development, and general programming.
            </p>
            <p>Hover over a project to view a brief description and the tech stack of the project. Feel free to click on a project to view more detail.</p>
          </div>
        </div>
        <div className={styles.rightColumn} ref={rightColumnRef}>
          <ul className={styles.projectList} >
            <li className={styles.projectItem} >
              <h2>EXPENSE MATE</h2>
              <p className={styles.overview1}>design • development • july '24</p>
              <div className={styles.descriptionTechStack}>
                <p className={styles.projDescription}>a streamlined management tool to track personal finances</p>
                <p>React, Redux, Material-UI, Express, MongoDB, Jest, Swagger</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>REALTOR BUDDY</h2>
              <p className={styles.overview1}>design • development • may '24</p>
              <div className={styles.descriptionTechStack}>
                <p className={styles.projDescription}>landing page for a product for realtors to find cooperating buildings</p>
                <p>React, JavaScript, CSS, Figma</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>PING PLOTTER</h2>
              <p className={styles.overview1}>development • testing • june '24</p>
              <div className={styles.descriptionTechStack}>
                <p className={styles.projDescription}>a python program to collect ping data over an interval and generate plots</p>
                <p>Python (Pandas, Seaborn), Bash, Docker</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>JAMMMING</h2>
              <p className={styles.overview1}>design • development • march '24</p>
              <div className={styles.descriptionTechStack}>
                <p className={styles.projDescription}>music playlist creator that integrates seamlessly with the spotify API</p>
                <p>React, Emotion, HTML, CSS, Javascript, Figma</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>CRYPTOGRAPHY TOOLKIT</h2>
              <p className={styles.overview1}>development • in progress</p>
              <div className={styles.descriptionTechStack}>
                <p>yet to be implemented</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>GENERATIVE ART GALLERY</h2>
              <p className={styles.overview1}>design • development • in progress</p>
              <div className={styles.descriptionTechStack}>
                <p>yet to be implemented</p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h2>MUSIC VISUALIZER</h2>
              <p>development . in progress</p>
              <div className={styles.descriptionTechStack}>
                <p>yet to be implemented</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default Projects;

