import React from 'react';
import { motion } from 'framer-motion';

function PageTransition({ children, direction = 'up' }) {
  const variants = {
    up: { initial: { y: '100%' }, animate: { y: 0 } },
    down: { initial: { y: '-100%' }, animate: { y: 0 } },
    left: { initial: { x: '100%' }, animate: { x: 0 } },
    right: { initial: { x: '-100%' }, animate: { x: 0 } },
  };

  return (
    <motion.div
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      style={{
        position: 'absolute',
        top: 0, // Ensure it's positioned at the top
        left: 0, // Ensure it's positioned on the left
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

