import React from 'react'

import "./button.sass"

export default function Button({ children }) {
  return (
    <div className='btn'>{children}</div>
  )
}
