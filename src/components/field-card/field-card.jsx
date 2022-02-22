import React from 'react'

import "./field-card.sass";

import Icon from "../../images/announce_icon.svg";

export default function FieldCard({ field }) {
  return (
    <div className='fieldcard'>
      <div className="fieldcard__icon">
        <img src={Icon} alt={field.title} />
      </div>
      <div className="fieldcard__content">
        <h5>{field.title}</h5>
        <div className="fieldcard__subtitle">
          {field.subtitle}
        </div>
        <div className="fieldcard__amount">
          <span className="fieldcard__amount__rect">
            42
          </span>
          pamokas
        </div>
      </div>
    </div>
  )
}
