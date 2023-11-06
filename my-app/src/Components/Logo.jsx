// Logo.jsx
import React from 'react';
import logo from '../logo.svg'; // Ispravka putanje ako je logo.svg u src direktorijumu
import '../App.css'; // Ispravka putanje ako je App.css u src direktorijumu

const Logo = () => {
  return (
    <div className="App-logo-container">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Logo;
