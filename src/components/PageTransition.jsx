import React from 'react';
import { motion } from 'framer-motion';

function PageTransition({ children, direction = 'up', type = 'slide' }) {
  const variants = {
    slide: {
      up: { initial: { y: '100%' }, animate: { y: 0 } },
      down: { initial: { y: '-100%' }, animate: { y: 0 } },
      left: { initial: { x: '100%' }, animate: { x: 0 } },
      right: { initial: { x: '-100%' }, animate: { x: 0 } },
      none: { initial: { y: 0 }, animate: { y: 0 } },  // No movement on first load
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const chosenVariant = type === 'fade' ? variants.fade : variants.slide[direction];

  return (
    <motion.div
      initial={chosenVariant.initial}
      animate={chosenVariant.animate}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
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

