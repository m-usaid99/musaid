import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Box from './Box';
import styles from '../styles/About.module.css';
import throttle from 'lodash/throttle';

function About() {
  const [showContent, setShowContent] = useState(true);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [isFixed, setIsFixed] = useState(true); // State to handle fixed positioning
  const scrollMultiplier = 0.5; // Adjust this value to control scroll sensitivity
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = throttle(() => {
      const scrollY = contentRef.current.scrollTop * scrollMultiplier;
      console.log('Scroll Y:', scrollY);

      // Adjust the scroll thresholds based on your preference
      if (scrollY > 200) {
        setIsFixed(false);  // Switch to relative positioning
      } else {
        setIsFixed(true);  // Keep the text fixed
      }

      setShowContent(scrollY < 300);
      setShowParagraph2(scrollY > 500 && scrollY < 1200);
      setShowParagraph3(scrollY > 1300 && scrollY < 2000);
    }, 200);

    const scrollableElement = contentRef.current;
    scrollableElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, [scrollMultiplier]);  // Added scrollMultiplier to the dependency array

  return (
    <Box>
      <div ref={contentRef} style={{ overflowY: 'scroll', height: '100%' }}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            padding: '20px',
            color: 'white',
            position: isFixed ? 'fixed' : 'relative', // Toggle between fixed and relative positioning
            top: isFixed ? '25%' : 'auto',
            left: isFixed ? '50%' : 'auto',
            transform: isFixed ? 'translate(-50%, -50%)' : 'none',
            textAlign: 'center',
            maxWidth: '50%',
            margin: '0 auto',
          }}
        >
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.introText}>
            I’m a web developer who merges design, creativity, and technical structure.
            My work focuses on blending artistry with precision, always exploring new ways to innovate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showParagraph2 ? 1 : 0, y: showParagraph2 ? 0 : 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            padding: '20px',
            color: 'white',
            position: isFixed ? 'fixed' : 'relative', // Toggle between fixed and relative positioning
            top: isFixed ? '50%' : 'auto',
            left: isFixed ? '50%' : 'auto',
            transform: isFixed ? 'translate(-50%, -50%)' : 'none',
            textAlign: 'center',
            maxWidth: '50%',
            margin: '0 auto',
          }}
        >
          <p className={styles.introText}>
            I believe in the power of combining technical expertise with creativity to build unique and effective solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showParagraph3 ? 1 : 0, y: showParagraph3 ? 0 : 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            padding: '20px',
            color: 'white',
            position: isFixed ? 'fixed' : 'relative', // Toggle between fixed and relative positioning
            top: isFixed ? '75%' : 'auto',
            left: isFixed ? '50%' : 'auto',
            transform: isFixed ? 'translate(-50%, -50%)' : 'none',
            textAlign: 'center',
            maxWidth: '50%',
            margin: '0 auto',
          }}
        >
          <p className={styles.introText}>
            Constantly learning and evolving, I strive to stay at the forefront of technology and design.
          </p>
        </motion.div>

        <div style={{ height: '300vh', opacity: 0, pointerEvents: 'none' }}>
          Hidden additional content for scroll testing...
        </div>
      </div>
    </Box>
  );
}

export default About;

