import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import data from '../../data.json'
import './Product.css'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cart'
import { useDispatch, useSelector } from 'react-redux'
const Product = ({ title, image, price, ProductId }) => {
    const [like, setLike] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const state = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState(state.cart)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        setLike(prev => !prev)
    }
    const getProduct = (ProductId) => {
        let product = data.find(item => item.ProductId === ProductId)
        return product
    }
    const addClick = (ProductId) => {
        let product = getProduct(ProductId)
        if (state.cart.find(i => i.ProductId === ProductId) == null ) {
            product = {...product, quantity:1}
            setAddedToCart(prev=>!prev)
            dispatch(addToCart(product))
        }else if(state.cart.find(i => i.ProductId === ProductId).quantity ){
            dispatch(increaseQuantity({ProductId, quantity:1} ))
            setAddedToCart(prev=>!prev)
        }
    }

    const increament = (ProductId)=>{
        let quantity = state.cart.find(i => i.ProductId === ProductId).quantity
        quantity++
        dispatch(increaseQuantity({ProductId, quantity} ))

    }
    const removeClick = (ProductId) => {
        let quantity = state.cart.find(i => i.ProductId === ProductId).quantity
        if(quantity===1){
            setAddedToCart(prev=>!prev)
            dispatch(removeFromCart(ProductId))
        }else{
            quantity--
            dispatch(decreaseQuantity({ProductId, quantity}))
        }
    }

    

    return (
        <div className='product'>

            <div className='prodImage' >
                <img
                    src={image}
                    alt={title}
                />
            </div>

            <div className='priceandWishlist'>
                <div className='like' onClick={handleClick}>
                    {like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                </div>
                <span>{title}</span>
                <p>₹{price}</p>
                <div className='buttonDiv'>
                    {addedToCart ?
                        <><button onClick={() => increament(ProductId)}>+</button>{ state.cart.find(i => i.ProductId === ProductId).quantity }<button onClick={()=>removeClick(ProductId)}>-</button></>
                        : <button onClick={() => addClick(ProductId)}>Add To Cart</button>}</div>
            </div>

        </div>
    )
}

export default Product