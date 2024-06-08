import React from 'react'
import "./my-ProductCard.scss";



const MyProductCard = (prop) => {
  return (
    <div className="MyProductCard">
      <h2>{prop.title}</h2>
      <p>{prop.description}</p>
      <u>{prop.price}</u>
      <strong>{prop.footer}</strong>

    </div>
  )
}

export default MyProductCard