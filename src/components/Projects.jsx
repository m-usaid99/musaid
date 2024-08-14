import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Box from './Box';
import styles from '../styles/Projects.module.css';
import Sketch from './Sketch';
import { hilbertDraw, hilbertSetup } from './sketches/HilbertCurve';

function Projects() {
  const rightColumnRef = useRef(null);
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const handleScroll = () => {
      const projectItems = rightColumnRef.current.querySelectorAll(`.${styles.projectItem}`);
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768; // Check if the screen width is mobile

      projectItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distanceFromBottom = windowHeight - rect.bottom;

        // Adjust threshold based on whether it's mobile or desktop
        const threshold = isMobile ? windowHeight * 0.15 : windowHeight * 0.3; // 20% for mobile, 30% for desktop
        const opacity = Math.min(1, Math.max(0.2, distanceFromBottom / threshold));
        item.style.opacity = opacity;
      });
    };

    const rightColumn = rightColumnRef.current;

    // Add event listeners for both scroll and touchmove
    const timeoutId = setTimeout(() => {
      rightColumn.addEventListener('scroll', handleScroll);
      if (isMobile) {
        rightColumn.addEventListener('touchmove', handleScroll, { passive: true });
      }
      handleScroll(); // Call handleScroll initially to set opacity based on initial positions
    }, 600); // Adjust this duration based on your transition time

    return () => {
      clearTimeout(timeoutId);
      rightColumn.removeEventListener('scroll', handleScroll);
      rightColumn.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const handleProjectClick = (project) => {
    if (isMobile) {
      if (activeProject === project) {
        setActiveProject(null); // Close the details if the same project is clicked again
      } else {
        setActiveProject(project); // Open the details for the clicked project
      }
    } else {
      navigate(`/projects/${project}`);
    }
  };

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
          <ul className={styles.projectList}>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('expense-mate')}
              onMouseEnter={() => !isMobile && setActiveProject('expense-mate')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>EXPENSE MATE</h2>
              <p className={styles.overview1}>design • development • july '24</p>
              {(activeProject === 'expense-mate' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p className={styles.projDescription}>a streamlined management tool to track personal finances</p>
                  <p>React, Redux, Material-UI, Express, MongoDB, Jest, Swagger</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/projects/expense-mate')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('realtor-buddy')}
              onMouseEnter={() => !isMobile && setActiveProject('realtor-buddy')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>REALTOR BUDDY</h2>
              <p className={styles.overview1}>design • development • may '24</p>
              {(activeProject === 'realtor-buddy' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p className={styles.projDescription}>landing page for a product for realtors to find cooperating buildings</p>
                  <p>React, JavaScript, CSS, Figma</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/realtor-buddy')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('ping-plotter')}
              onMouseEnter={() => !isMobile && setActiveProject('ping-plotter')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>PING PLOTTER</h2>
              <p className={styles.overview1}>development • testing • june '24</p>
              {(activeProject === 'ping-plotter' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p className={styles.projDescription}>a python program to collect ping data over an interval and generate plots</p>
                  <p>Python (Pandas, Seaborn), Bash, Docker</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/ping-plotter')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('jammming')}
              onMouseEnter={() => !isMobile && setActiveProject('jammming')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>JAMMMING</h2>
              <p className={styles.overview1}>design • development • march '24</p>
              {(activeProject === 'jammming' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p className={styles.projDescription}>music playlist creator that integrates seamlessly with the spotify API</p>
                  <p>React, Emotion, HTML, CSS, Javascript, Figma</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/jammming')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('cryptography-toolkit')}
              onMouseEnter={() => !isMobile && setActiveProject('cryptography-toolkit')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>CRYPTOGRAPHY TOOLKIT</h2>
              <p className={styles.overview1}>development • in progress</p>
              {(activeProject === 'cryptography-toolkit' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p>yet to be implemented</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/cryptography-toolkit')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('generative-art-gallery')}
              onMouseEnter={() => !isMobile && setActiveProject('generative-art-gallery')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>GENERATIVE ART GALLERY</h2>
              <p className={styles.overview1}>design • development • in progress</p>
              {(activeProject === 'generative-art-gallery' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p>yet to be implemented</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/generative-art-gallery')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
            <li
              className={styles.projectItem}
              onClick={() => handleProjectClick('music-visualizer')}
              onMouseEnter={() => !isMobile && setActiveProject('music-visualizer')}
              onMouseLeave={() => !isMobile && setActiveProject(null)}
            >
              <h2>MUSIC VISUALIZER</h2>
              <p className={styles.overview1}>development • in progress</p>
              {(activeProject === 'music-visualizer' || !isMobile) && (
                <div className={styles.descriptionTechStack}>
                  <p>yet to be implemented</p>
                  {isMobile && (
                    <button
                      className={styles.viewProjectButton}
                      onClick={() => navigate('/music-visualizer')}
                    >
                      View Project
                    </button>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default Projects;

