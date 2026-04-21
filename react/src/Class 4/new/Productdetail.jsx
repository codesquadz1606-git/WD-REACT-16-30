import React from 'react'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductRating from './ProductRating'

const Productdetail = ({name,price,ratings}) => {
  return (
    <div style={{border:"2px solid white"}}>
      <ProductName name={name}/>
      <ProductPrice price={price}/>
      <ProductRating ratings={ratings}/>
    </div>
  )
}

export default Productdetail
