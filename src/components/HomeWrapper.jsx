import React, { useState, useEffect } from 'react';
import Home from './Home';
import Splash from './Splash';
import { motion, AnimatePresence } from 'framer-motion';

const HomeWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Splash />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeWrapper;

