import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cart: 0,
    item:[],
    error:''
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.item = [...state.item, action.payload]
            state.cart = state.item.length;
        },
        removeFromCart:(state,action)=>{
            state.item.filter(i=>i.name !== action.payload.name  )
            state.cart = state.item.length;
        },
    },
   
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer