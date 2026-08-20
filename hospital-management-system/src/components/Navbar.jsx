import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          MEDCARE+
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
          <Link to="/doctors" className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}>DOCTORS</Link>
          <Link to="/booking" className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}>BOOK APPOINTMENT</Link>
        </nav>
        
        <div className="nav-cta-container">
          <Link to="/booking" className="btn-primary nav-cta">
            BOOK APPOINTMENT <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
