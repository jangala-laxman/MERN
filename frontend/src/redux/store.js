import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product'
import cartReducer from './cart'
import authReducer from './auth'
const store = configureStore({
    reducer: {
        auth : authReducer,
        product: productReducer,
        cart: cartReducer,
      },
})

export default store