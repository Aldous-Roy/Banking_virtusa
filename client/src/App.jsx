import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Loan from './pages/Loan';
import Account from './pages/Account';
import About from './pages/About';
import Land from './pages/Land';

const App = () => {
  // Animation settings for page transitions
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div {...pageTransition}>
                <Land />
              </motion.div>
            } 
          />
          <Route 
            path="/home" 
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div {...pageTransition}>
                <Loan />
              </motion.div>
            } 
          />
          <Route 
            path="/services" 
            element={
              <motion.div {...pageTransition}>
                <Account />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div {...pageTransition}>
                <About />
              </motion.div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;