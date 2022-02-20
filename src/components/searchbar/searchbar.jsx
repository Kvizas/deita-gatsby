import React from 'react'

import "./searchbar.sass"

import SearchSvg from "../../images/search.svg"

export default function Searchbar() {
  return (
    <div className='searchbar__wrapper'>
        <img className='searchbar__icon' src={SearchSvg} alt="Paieška" />
        <input
            placeholder='Ieškokite informacijos tarp 1 000+ mokslo resursų'
            className='searchbar'
            spellCheck='false'
        />
        <div className="searchbar__btn">
            Ieškoti
        </div>
    </div>
  )
}
