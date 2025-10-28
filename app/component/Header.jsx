import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-left">
        <svg className="logo" viewBox="0 0 48 48">
          <path
            d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
            fill="currentColor"
          />
        </svg>
        <span className="title">Murat Şahin</span>
      </Link>

      <nav className="nav">
        <Link to="/projects">Portfolio</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="menu-btn">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Header;
