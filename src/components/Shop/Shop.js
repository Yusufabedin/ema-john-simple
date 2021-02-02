import React from 'react'
import fakeData from '../../fakeData'
import { useState } from 'react'
import './Shop.css'
import Product from '../Product/Product'

const Shop = () => {
  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  const [cart, setCart] = useState([])

  const handleAddproduct = (product) => {
    console.log('product added', product)
    const newCart = [...cart, product]
    setCart(newCart)
  }
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            handleAddproduct={handleAddproduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className='card-conatiner'>
        <h3>Card</h3>
        <h4>Order Summary: {cart.length}</h4>
      </div>
    </div>
  )
}

export default Shop
