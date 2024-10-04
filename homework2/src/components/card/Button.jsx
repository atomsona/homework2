import React from 'react'
import './Card.css';
export default function Button({ text, backgroundColor, width, height }) {
  return (
    <button style={{ backgroundColor, width, height }}>
    {text}
  </button>
  )
}
