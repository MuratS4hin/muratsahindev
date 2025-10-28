import React from 'react';
import './Footer.css'; // import the stylesheet

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Homepage</a>
        <a href="/projects">Portfolio</a>
        <a href="/about">About Me</a>
      </div>

      {/* Uncomment and style social icons if needed */}
      {/* <div className="footer-icons">
        <a href="#"><span className="material-symbols-outlined">alternate_email</span></a>
        <a href="#"><span className="material-symbols-outlined">code</span></a>
        <a href="#"><span className="material-symbols-outlined">palette</span></a>
      </div> */}

      <p className="footer-text">© 2025 Murat Şahin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
