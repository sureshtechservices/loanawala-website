import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Loanawala Consultancy
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-links active' : 'nav-links'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-links active' : 'nav-links'}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={location.pathname === '/services' ? 'nav-links active' : 'nav-links'}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-links active' : 'nav-links'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
