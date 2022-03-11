import React from 'react'

import "./navbar.sass";
import Button from '../button/button';
import SearchbarSmall from '../searchbar-small/searchbar-small';
import Logo from '../logo/logo';

export default function Navbar() {
  return (
    <div className='navbar'>

      <div className="navbar__logo">
        <Logo style={{width: "140px"}}/>
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
