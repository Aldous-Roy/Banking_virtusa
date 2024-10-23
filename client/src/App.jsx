import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Loan from './pages/Loan';
import Contact from './Components/Contact';
import Account from './pages/Account';
import About from './pages/About';
import Land from './pages/Land';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<div><Land/></div>} />
          <Route path="/home" element={<div><Home/></div>} />
          <Route path="/about" element={<div><Loan/></div>} />
          <Route path="/services" element={<div><Account/></div>} />
          <Route path="/contact" element={<div><About/></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
