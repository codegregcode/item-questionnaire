import React from 'react';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <>
      <div className="container" data-testid="svg-container">
        <svg viewBox="0 0 500 250" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z"
            style={{ stroke: 'none', fill: '#514F9E' }}
          />
        </svg>
      </div>
      <div className="title">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Header;
