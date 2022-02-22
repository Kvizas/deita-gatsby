import React from 'react'

import "./recommendation.sass"

import Shadow from "../../images/shadow.svg";
import LeftConfetty from "../../images/left-confetty.svg";
import FieldCard from '../field-card/field-card';

export default function Recommendation() {
  return (
    <section className='recom__wrapper' style={{background: `url(${Shadow}), linear-gradient(.25turn, var(--secondary-color) 50%, var(--primary-color) 50%)`}}>

      <div className='recom'>
        <h2>
          <span className='primary'>Deita</span> mokymosi platforma jums
          <br/>rekomenduoja
        </h2>

        <img className="recom__side recom__side--left" src={LeftConfetty} alt="Dekoracijos" />
        
        <div className="recom__container">
          <div className="recom__content">
            <FieldCard field={{
              title: "Matematika",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 42
            }}></FieldCard>
          </div>
        </div>
      </div>
    </section>
  )
}
