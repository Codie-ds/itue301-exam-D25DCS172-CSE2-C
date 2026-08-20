import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>MEDCARE+</h2>
            <p className="footer-tagline">Healthcare, Reimagined.</p>
          </div>
          
          <div className="footer-links">
            <Link to="/" className="footer-link">HOME</Link>
            <Link to="/doctors" className="footer-link">DOCTORS</Link>
            <Link to="/booking" className="footer-link">BOOK APPOINTMENT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
