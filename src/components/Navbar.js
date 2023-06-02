import '../styles/Navbar.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLinks = () => {
    if (isMobile) {
      return (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Toggle button for mobile */}
          <div className="mobile-toggle-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile menu links */}
          <ul className="nav-links">
            <li>
              <Link to="/pages/Dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>
            </li>
            <li>
              <Link to="/pages/Statistics" className="nav-link" onClick={toggleMenu}>Statistics</Link>
            </li>
            <li>
              <Link to="/pages/Settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
            </li>
          </ul>
        </div>
      );
    }

    // Default desktop menu
    return (
      <ul className="nav-links">
        <li>
          <Link to="/Dashboard" className={`nav-link ${isActiveLink('/pages/Dashboard')}`}>Dashboard</Link>
        </li>
        <li>
          <Link to="/Statistics" className={`nav-link ${isActiveLink('/pages/Statistics')}`}>Statistics</Link>
        </li>
        <li>
          <Link to="/Settings" className={`nav-link ${isActiveLink('/pages/Settings')}`}>Settings</Link>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <div className="logo">
        <span>Logo</span>
      </div>
      {renderNavLinks()}
    </nav>
  );
};

export default Navbar;