import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import AudioJournal from './components/AudioJournal';
import About from './components/About';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import HomeWrapper from './components/HomeWrapper';

function AnimateApp() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(null);
  const [direction, setDirection] = useState('up');
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (prevLocation && location.pathname !== prevLocation.pathname) {
      setHasNavigated(true);

      if (location.pathname === '/') {
        setDirection('down');
      } else if (prevLocation.pathname === '/') {
        setDirection('up');
      } else if (location.pathname > prevLocation.pathname) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    }
    setPrevLocation(location);
  }, [location, prevLocation]);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={hasNavigated ? <PageTransition direction={direction}><Home /></PageTransition> : <HomeWrapper />} />
        <Route path="/projects" element={<PageTransition direction={direction}><Projects /></PageTransition>} />
        <Route path="/about" element={<PageTransition direction={direction}><About /></PageTransition>} />
        <Route path="/audio-journal" element={<PageTransition direction={direction}><AudioJournal /></PageTransition>} />
        <Route path="/contact" element={<PageTransition direction={direction}><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimateApp />
    </Router>
  );
}

