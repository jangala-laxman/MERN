import React, {useEffect, useState } from 'react'
import data from '../../data.json'
import './Product.css'
import {addtoWishList, removeFromWishlist } from '../../redux/thunk/cart.thunk'
import { useDispatch, useSelector } from 'react-redux'
import {  Link } from 'react-router-dom';
const Product = ({ title, image, price, ProductId }) => {
    const [like, setLike] = useState(false)
    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const getProduct = (ProductId) => {
        console.log(data)
        let product = data.find(item => item.ProductId === ProductId)
        return product
    }
    useEffect(()=>{
    //     const product = getProduct(ProductId)
    //     if(state.wishlist.find(i=>i.ProductId === product.ProductId)){
    //         setLike(prev=>prev=true)
    //     }
    }, [ProductId, state.wishlist])

    const wishlist = (ProductId)=>{
        let product = getProduct(ProductId)
        dispatch(addtoWishList(product))
    }

    const unWhishlist = (ProductId)=>{
        let product = getProduct(ProductId)
        dispatch(removeFromWishlist(product))
    }

    return (
        <div className='product' >
           <Link to={`/${ProductId}`} >
           <div className='prodImage'>
                <img
                    src={image}
                    alt={title}
                />
            </div>
           </Link>

            <div className='priceandWishlist'>
                
                <span>{title}</span>
                <p>₹{price}</p>
                <span>⭐⭐⭐⭐⭐</span>
                <div className='like'>
                    {like ? <button onClick={()=>unWhishlist(ProductId)} style={{ backgroundColor: 'blue', color:'white' }} >Added to wishlist</button> : <button onClick={()=>wishlist(ProductId)}>Wishlist</button>}
                </div>
            </div>

        </div>
    )
}

export default Product