import { createSlice } from "@reduxjs/toolkit";
import data from './../data.json'

// data = data.map(i=>{
//     let quantity = 0
//     i={...i, quantity}
//     return i
// })

const initialState ={
    cartSize:0,
    cart:[],
    error:''
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart =  [...state.cart, action.payload]
            state.cartSize = state.cart.length
        },
        removeFromCart:(state,action)=>{
            state.cart.filter(i=>i.ProductId !== action.payload.ProductId  )
            state.cartSize = state.cart.length
        },
        increaseQuantity:(state, action)=>{ 
            state.cart.find(i=>i.ProductId === action.payload.ProductId).quantity = action.payload.quantity
        },
        decreaseQuantity:(state, action)=>{ 
            state.cart.find(i=>i.ProductId === action.payload.ProductId).quantity = action.payload.quantity
        }
    },
   
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer