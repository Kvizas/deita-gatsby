import React, { useContext, useState } from 'react'

import "./navbar.sass";
import Button from '../button/button';
import SearchbarSmall from '../searchbar-small/searchbar-small';
import Logo from '../logo/logo';

import { NavContext } from '../../contexts/nav-context/nav-context';

import LoginSVG from "../../images/login.svg";
import NavbarMobileItem from '../navbar-mobile-item/navbar-mobile-item';

export default function Navbar() {
  
  const navigation = useContext(NavContext);

  const [burgerOpened, setBurgerOpened] = useState(false)

  const toggleBurger = () => setBurgerOpened(prev => !prev);
  const exitBurger = () => setBurgerOpened(false);

  return (
    <>
    <div className="navbar__fill"></div>
    <div className='navbar__wrapper'>
      <div className="navbar">
        <div className="navbar__logo">
          <Logo style={{width: "140px"}}/>
        </div>

        <div className='navbar__item__list'>
            {navigation.map((n, i) => <a href={n.url} key={i} className="navbar__item">{n.title}</a>)}
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
          <div role='button' tabIndex={0} aria-label="Navigation" className="navbar__burger" onClick={toggleBurger} onKeyDown={toggleBurger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div className={`navbar__m navbar__m__modal ${burgerOpened ? '' : 'navbar__m__modal--hidden'}`}>
      <SearchbarSmall style={{width: "70vw"}} wrapperStyle={{width: "70vw"}}/>
      <h5 className='navbar__m__modal__h'>Ieškomiausios skiltys</h5>
      <div className="navbar__m__modal__items">
            {navigation.map((n, i) => <NavbarMobileItem key={i} item={n}/>)}
      </div>
    </div>
    <div role='button' tabIndex={0} aria-label="Hide navigation" className={`navbar__m navbar__m__bg ${burgerOpened ? '' : 'navbar__m__bg--hidden'}`} onClick={exitBurger} onKeyDown={exitBurger} />
    </>
  )
}
