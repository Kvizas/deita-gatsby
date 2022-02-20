import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Searchbar from '../searchbar/searchbar'

import "./header.sass"

import HeaderSVG from "../../images/header_svg.svg";

export default function Header() {
  return (
    <section className='header'>
        <div className="header__text">
            <h1>Platforma leidžianti surasti mokymosi medžiagą</h1>
            <div className="header__sub">
                278+ vaizdo pamokų, 125+ konspektų, daugiau <br/> nei 200 išspręstų uždavinių... 
            </div>
        </div>
            {/* <StaticImage
                placeholder='tracedSVG'
                src='../../images/header_img.png'
                alt='Deita matematikos, fizikos, informatikos, istorijos, geografijos ir lietuvių kalbos medžiaga.'
            /> */}
        <img className='header__img' src={HeaderSVG} alt='Deita matematikos, fizikos, informatikos, istorijos, geografijos ir lietuvių kalbos medžiaga.'/>

        <div className='header__search'>
            <div className="header__search__text" style={{marginBottom: "2.5vh"}}>
                Galime surasti jus dominančią didaktinę medžiagą, vadovėlių ir uždavinynų sprendimus vos iš jūsų įvesto konteksto ar uždavinio sąlygos.
            </div>
            <Searchbar></Searchbar>
        </div>
    </section>
  )
}
