import React from 'react';
import logo from '../../images/logoHeader.png'
import './Header.css';

function Header() {
    return (
      <div className="header">
        <img className="logo header__logo" src={logo} alt='text: terminal fulfilment'/>
        <nav className="header__menu">меню</nav>
      </div>
    );
  }
  
  export default Header;
  