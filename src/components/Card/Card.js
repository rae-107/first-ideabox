import React from 'react'
import './Card.css'

const Card = ({ title, description }) => {
  return (
    <div className='Card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑</button>
    </div>
  )
}

export default Card