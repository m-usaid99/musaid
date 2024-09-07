import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Box from './Box';
import JuliaFractalSketch from './JuliaFractal';
import SkillsGraph from './SkillsGraph';
import MobileSkillsAccordion from './SkillsGraphMobile';
import styles from '../styles/About.module.css';

function About() {
  const contentRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [fadeClass, setFadeClass] = useState('');
  const [isAtTop, setIsAtTop] = useState(true);

  const handleButtonClick = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      if (isAtTop) {
        skillsSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        contentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsAtTop(!isAtTop); // Toggle the state
      setFadeClass('fade-in');
    }, 300);
  };

  const mobileText = <p className={styles.skillsText}>View the full skills graph on a desktop for a richer experience. On mobile, explore the categories below to see detailed connections.</p>
  const desktopText = <p className={styles.skillsText}>Explore my diverse skill set visualized in this interactive graph. Each category highlights my expertise, with connections showing the relationships between different skills. Click on any node to dive deeper into the tools and technologies I use.</p>

  return (
    <Box altSketch={<JuliaFractalSketch contentRef={contentRef} />} >
      <div className={styles.topBar}>
        <Link to="/" className={styles.homeLink}>HOME</Link>
        <button className={`${styles.scrollButton} ${styles[fadeClass]}`} onClick={handleButtonClick}>
          {isAtTop ? 'JUMP TO SKILLS' : 'GO TO TOP'}
        </button>
      </div>
      <div className={styles.aboutContainer} ref={contentRef}>
        <section className={styles.centerSection}>
          <h1 className={styles.title}>ABOUT ME</h1>
          <p className={styles.introText}>
            I’m a web developer who merges design, creativity, and technical structure.
            My work focuses on blending artistry with precision, always exploring new ways to innovate.
          </p>
        </section>
        <div className={styles.scrollIndicator}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 21l-12-18h24z" />
          </svg>
        </div>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            Grounded in pure mathematics and computer science, I’ve cultivated a deep understanding of theoretical computer science and cryptography. My academic journey sharpened my ability to think abstractly and approach complex problems with precision.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            As a Teaching Assistant for courses like Algorithms and Database Systems, I developed a knack for communicating intricate concepts clearly, laying a solid foundation for my technical career.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            My transition into web development was fueled by a desire to merge technical skill with creative expression. Mastering frontend technologies like JavaScript, HTML/CSS, and React has allowed me to create applications that are both engaging and structurally sound.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            In web development, I’ve found a new way to channel my love for design, using p5.js and WebGL to infuse creativity into my projects. These tools help me push the boundaries of conventional web design, creating websites that are both functional and visually unique.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>I balance frontend and backend development to create applications that are both functional and visually appealing, blending backend logic with intuitive, creative design.
          </p>

        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            I have a variety of projects that explore different areas, from web development and design to generative art and music; reflecting my curiosity and passion for technical innovation & creative expression.
          </p>
        </section>
        <section className={styles.paragraphSection}>
          <p className={styles.additionalText}>
            Creativity drives me, whether through playing instruments, diving into generative art, or curating music mixes. I enjoy merging art with technology, using code to create personalized and innovative audiovisual experiences.
          </p>
        </section>
        <div className={styles.skillsSection}>
          <section className={styles.skillsHeading} ref={skillsSectionRef}>
            <h1>SKILLS</h1>
          </section>
          {isMobile ? mobileText : desktopText}
          <section className={styles.skillsGraph} >
            {isMobile ? <MobileSkillsAccordion /> : <SkillsGraph />}
          </section>
        </div>
      </div>
    </Box>
  );
}

export default About;

