import { createSlice } from "@reduxjs/toolkit";

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
            state.cartSize = state.cart.reduce((acc, i)=>{
                acc = acc+i.quantity
                return acc
            }, 0)
        },
        removeFromCart:(state,action)=>{
            state.cart.filter(i=>i.ProductId !== action.payload.ProductId)
        },
        increaseQuantity:(state, action)=>{ 
            state.cart.find(i=>i.ProductId === action.payload.ProductId).quantity = action.payload.quantity
            state.cartSize = state.cart.reduce((acc, i)=>{
                acc = acc+i.quantity
                return acc
            }, 0)
        },
        decreaseQuantity:(state, action)=>{ 
            state.cart.find(i=>i.ProductId === action.payload.ProductId).quantity = action.payload.quantity
            let cartSize = 0
            state.cart.forEach(i => cartSize += i.quantity)
            state.cartSize = cartSize
        }
    },
   
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer