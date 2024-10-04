import React from 'react'
import './Card.css';
export default function Productcard( { name, price, quantity, desc, color } ) {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
      <p>Price: 15{price}</p>
      <p>Quantity: 2 {quantity}</p>
      <p>{desc}</p>
    </div>
  )
}
