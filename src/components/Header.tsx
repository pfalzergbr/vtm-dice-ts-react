import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <div>
        <div className='img-container'>
          <img className='logo' src='./resources/img/logo-white.png' />
        </div>
      </div>
    </header>
  );
}

export default Header;
