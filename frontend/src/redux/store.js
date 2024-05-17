import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product'
import authReducer from './auth'
const store = configureStore({
    reducer: {
        auth : authReducer,
        product: productReducer
      },
})

export default store