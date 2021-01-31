import React from 'react'
import fakeData from '../../fakeData'
import { useState } from 'react'
import './Shop.css'
import Product from '../Product/Product'

const Shop = () => {
  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className='card-conatiner'>
        <h3>Card</h3>
      </div>
    </div>
  )
}

export default Shop
