import React, {useState} from 'react'
import axios from '../../redux/axios'
import Product from '../Product/Product'
import { useSelector } from 'react-redux'
const Cart = () => {
  const state = useSelector(state=>state.cart)
  console.log(state)
  return (
    <div className='cart'>
      {
        state.cart.map((item)=>(
          <div key={item.ProductId}>
            <Product title = {item.ProductTitle} image={item.ImageURL} price={item.ProductId/100} ProductId={item.ProductId} />
          </div>
        ))
      }
    </div>

  )
}

export default Cart