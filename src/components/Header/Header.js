import React from "react";
import logo from "../../images/logoHeader.png";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <nav className="header__navigation">
        <img
          className="logo header__logo"
          src={logo}
          alt="text: terminal fulfilment"
        />
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <button className="header__navigation-btn">сделать расчёт</button>
          </li>
          <li className="header__navigation-item">
            <button className="header__navigation-btn header__navigation-btn_active">
              оставить заявку
            </button>
          </li>
          <menu className="header__menu">меню</menu>
        </ul>
      </nav>
      <div className="header__content">
        <div className="header__mainImage"></div>
        <h1 className="header__title">
          занимайтесь
          <p className="header__text">
            <span className="header__text_color_yellow">развитием</span>
          </p>
          {/*Rebuild */}
          <div className="arrow"></div> 
          <p className="header__text">
            а не <span className="header__text_type_underline">доставкой</span>
          </p>
        </h1>
        <ul className="header__button-list">
          <li className="header__list-item">
            <button className="header__btn-item header__btn-item_active">
              получить консультацию
            </button>
          </li>
          <li className="header__list-item">
            <button className="header__btn-item">калькулятор</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
