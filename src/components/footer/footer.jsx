import React from 'react'
import Logo from '../logo/logo'

import "./footer.sass"
import FacebookSVG from "../../images/facebook.svg"
import InstagramSVG from "../../images/instagram.svg"
import DiscordSVG from "../../images/discord.svg"
import TiktokSVG from "../../images/tiktok.svg"

export default function Footer() {
  return (
    <section className='footer'>
        <div className='footer__credentials'>
            <Logo style={{width: "110px", display: "block"}}/>
            <p>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='footer__social'>
                <img src={FacebookSVG} alt="Sekite Deita socialiniuose tinkluose - Facebook." />
                <img src={InstagramSVG} alt="Sekite Deita socialiniuose tinkluose - Instagram." />
                <img src={DiscordSVG} alt="Sekite Deita socialiniuose tinkluose - Discord." />
                <img src={TiktokSVG} alt="Sekite Deita socialiniuose tinkluose - Tiktok." />
            </div>
        </div>
        <div className='footer__nav'>
            <div className='footer__nav__col'>
                <div className='footer__nav__h'>Navigacija</div>
                <a href='/'>Konspektai</a>
                <a href='/'>Sprendimai</a>
                <a href='/'>Prenumeratos</a>
            </div>
            <div className='footer__nav__col'>
                <div className='footer__nav__h'>Teisinė informacija</div>
                <a href='/'>Privatumo politika</a>
                <a href='/'>Naudojimosi sąlygos</a>
                <a href='/'>Šaltiniai</a>
                <a href='/'>Slapukai</a>
            </div>
            <div className='footer__nav__col'>
                <div className='footer__nav__h'>Kontaktai</div>
                <div className='footer__text'>Pramonės pr. 20, LT-50468 Panevėžys</div>
                <div className='footer__text'>+370 616 55555</div>
                <div className='footer__text'>info@deita.lt</div>
            </div>
        </div>
    </section>
  )
}
