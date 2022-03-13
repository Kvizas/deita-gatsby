import React from 'react'

import "./searchbar-small.sass"

import SearchSvg from "../../images/search.svg"

export default function SearchbarSmall({ wrapperStyle, style }) {
  return (
    <div style={wrapperStyle} className='searchbar__wrapper searchbar__wrapper--small'>
        <img className='searchbar__icon searchbar__icon--small' src={SearchSvg} alt="Paieška" />
        <input
            style={style}
            placeholder='Paieška'
            className='searchbar searchbar--small'
            spellCheck='false'
        />
        <div className="searchbar__btn searchbar__btn--small">
            Go
        </div>
    </div>
  )
}
