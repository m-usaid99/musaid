import React from 'react';
import { motion } from 'framer-motion';

function PageTransition({ children, direction = 'right' }) {
  const variants = {
    initial: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

