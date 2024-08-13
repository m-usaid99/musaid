import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import AudioJournal from './components/AudioJournal';
import About from './components/About';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';

function AnimateApp() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<PageTransition direction='up'><Home /></PageTransition>} />
        <Route path='/projects' element={<PageTransition direction='down'><Projects /></PageTransition>} />
        <Route path='/about' element={<About />} />
        <Route path='/audio-journal' element={<AudioJournal />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimateApp />
    </Router>
  )
}

