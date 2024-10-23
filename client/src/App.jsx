import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Loan from './pages/Loan';
import Account from './pages/Account';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<div><Home/></div>} />
          <Route path="/about" element={<div><Loan/></div>} />
          <Route path="/services" element={<div><Account/></div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
