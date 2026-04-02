import React from 'react';
import './Navbar.css';

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-container">
        <div className="brand">TourMate</div>
        <nav className="links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
