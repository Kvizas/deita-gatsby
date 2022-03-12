import React from 'react'

import "./navbar.sass";
import Button from '../button/button';
import SearchbarSmall from '../searchbar-small/searchbar-small';
import Logo from '../logo/logo';

import LoginSVG from "../../images/login.svg";

export default function Navbar() {
  return (
    <>
    <div className="navbar__fill"></div>
    <div className='navbar__wrapper'>
      <div className="navbar">
        <div className="navbar__logo">
          <Logo style={{width: "140px"}}/>
        </div>

        <div className='navbar__item__list'>
            <a href='synopses' className="navbar__item">Konspektai</a>
            <a href='videos' className="navbar__item">Sprendimai</a>
            <a href='pricing' className="navbar__item">Prenumeratos</a>
        </div>

        <div className="navbar__search">
          <SearchbarSmall/>
        </div>

        <div className="navbar__auth">
            <div>Prisijungti</div>
            <Button>Registruotis</Button>
        </div>

        <div className="navbar__auth--mobile">
          <div>Prisijungti</div>
          <img src={LoginSVG} alt="Prisijungimas ir registracija"/>
          <div className="navbar__burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
