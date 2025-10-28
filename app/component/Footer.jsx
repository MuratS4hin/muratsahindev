import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <Link to="/projects">Portfolio</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <p className="footer-text">© 2025 Murat Şahin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
