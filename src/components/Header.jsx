import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <>
      <div className="container" data-testid="svg-container">
        <svg viewBox="0 0 500 250" preserveAspectRatio="xMinYMin meet">
          <path d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z" />
        </svg>
      </div>
      <div className="title">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default Header;
