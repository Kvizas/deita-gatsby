import React from 'react'

import "./navbar.sass";
import Logo from "../../images/logo.svg";
import Button from '../button/button';
import SearchbarSmall from '../searchbar-small/searchbar-small';

export default function Navbar() {
  return (
    <div className='navbar'>

      <div className="navbar__logo">
          <img src={Logo} alt="Deita logo" /> Deita
      </div>

      <div>
          <a href='synopses' className="navbar__item">Konspektai</a>
          <a href='videos' className="navbar__item">Sprendimai</a>
          <a href='pricing' className="navbar__item">Prenumeratos</a>
      </div>

      <SearchbarSmall/>

      <div className="navbar__auth">
          <div>Prisijungti</div>
          <Button>Registruotis</Button>
      </div>

    </div>
  )
}
