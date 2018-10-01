import React from 'react';

const NavBar = () => (
  <nav id="nav-bar">
    <img className="logo" src="/build/bird.png" />
    <span className="header">Tweeter</span>
    <button id="compose" className="hidden">
      <img className="composeIcon" src="/build/compose.png" />
      <span>Compose</span>
    </button>
  </nav>
);

export default NavBar;
