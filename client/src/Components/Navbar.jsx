import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My Bank
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              Loan
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-400">
              Account
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-white hover:text-gray-400">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-400">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
