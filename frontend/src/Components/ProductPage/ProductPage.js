import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cart'
import {addtoWishList, removeFromWishlist } from '../../redux/thunk/cart.thunk'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../data.json'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import './Productpage.css'
const ProductPage = () => {
    const params = useParams()
    console.log(params)
    const ProductId = Number(params.ProductId)
    let product = data.find(i => i.ProductId === ProductId)
    const dispatch = useDispatch()
    const [like, setLike] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const state = useSelector(state => state.cart)
    const handleClick = () => {
        setLike(prev => !prev)
    }
    const getProduct = (ProductId) => {
        let product = data.find(item => item.ProductId === ProductId)
        return product
    }
    useEffect(()=>{
        const product = getProduct(ProductId)
        if(state.wishlist.find(i=>i.ProductId === product.ProductId)){
            setLike(prev=>prev=true)
        }
    }, [ProductId, state.wishlist])

    const wishlist = (ProductId)=>{
        let product = getProduct(ProductId)
        dispatch(addtoWishList(product))
        console.log(state.wishlist)
    }

    const unWhishlist = (ProductId)=>{
        let product = getProduct(ProductId)
        dispatch(removeFromWishlist(product))
    }
    const addClick = (ProductId) => {
        if (state.cart.find(i => i.ProductId === ProductId) == null) {
            product = { ...product, quantity: 1 }
            setAddedToCart(prev => !prev)
            dispatch(addToCart(product))
        } else if (state.cart.find(i => i.ProductId === ProductId).quantity>=1) {
            let quantity = state.cart.find(i => i.ProductId === ProductId).quantity
            quantity++;
            dispatch(increaseQuantity({ ProductId, quantity: quantity }))
            setAddedToCart(prev => !prev)
        }
    }

    const increament = (ProductId) => {
        let quantity = state.cart.find(i => i.ProductId === ProductId).quantity
        quantity++
        dispatch(increaseQuantity({ ProductId, quantity }))
    }

    const removeClick = (ProductId) => {
        let quantity = state.cart.find(i => i.ProductId === ProductId).quantity
        if (quantity === 1) {
            setAddedToCart(prev => !prev)
            dispatch(removeFromCart(ProductId))
        } else {
            quantity--
            dispatch(decreaseQuantity({ ProductId, quantity }))
        }
    }

    return (
        <div className='productPage' >

            <div className='prod_Image'>
                <img
                    src={product.ImageURL}
                    alt={product.ProductTitle}
                />
            </div>


            <div className='price_Wishlist'>
                <div className='like' onClick={handleClick}>
                {like ? <button onClick={()=>unWhishlist(ProductId)} style={{ backgroundColor: 'blue', color:'white' }} >Added to wishlist</button> : <button onClick={()=>wishlist(ProductId)}>Wishlist</button>}
                </div>
                <span>{product.ProductTitle}</span>
                <p>₹{product.price}</p>
                <div className='buttonDiv'>
                    {addedToCart ?
                        <>
                            <button onClick={() => removeClick(ProductId)}>-</button>
                                {state.cart.find(i => i.ProductId === ProductId).quantity}
                            <button onClick={() => increament(ProductId)}>+</button>
                        </>
                        : 
                        <button onClick={() => addClick(ProductId)}>Add To Cart</button>}</div>
            </div>

        </div>
    )
}

export default ProductPage