import React from 'react';
import './Footer.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-primary section-padding">
      <div className="container footer-content">
        <div className="footer-section about-us">
          <h3>loanAwala </h3>
          <p>Your partner in achieving your abroad education dreams with comprehensive financial assistance.</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@loanawala.com</p>
          <p>Phone: +91 9999999999</p>
          <p>Address: # 309, Everest Block, Ameerpet, Hyderabad, Telangana, India</p>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2025 Loanawala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

