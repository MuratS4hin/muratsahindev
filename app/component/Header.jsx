import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // import the stylesheet

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <Link to="/" className="header-title">
          Murat Şahin
        </Link>
      </div>

      <div className="header-nav">
        <Link to="/projects">Portfolio</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="header-mobile-menu">
        <button>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
