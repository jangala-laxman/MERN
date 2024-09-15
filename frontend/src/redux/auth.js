import {createSlice} from '@reduxjs/toolkit'
import {home, login, register} from './thunk/auth.thunk'
import { addtoWishList, removeFromWishlist, wishlist } from './thunk/cart.thunk'
const initialState={
    user : null,
    loading:false,
    wishlist:[],
    error:{},
    data:'',
    token:''
}
const auth = createSlice({
    name:'auth',
    initialState,
    // reducers:{
    //     addToWishlist:(state,action)=>{
    //         state.wishlist =  [...state.wishlist, action.payload]
    //     },
    //     removeFromWishlist:(state,action)=>{
    //         state.wishlist.filter(i=>i.ProductId !== action.payload.ProductId  )
    //     },
    // },
    extraReducers:(builder)=>{
        builder
        .addCase(home.fulfilled, (state, action)=>{
            state.loading = false
            state.error = {}
            state.data = action.payload
        })      
        .addCase(home.pending, (state)=>{
            state.loading = true
        })    
        .addCase(home.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload.error
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.loading = false
            state.error = null    
            state.user = action.payload?.username      
            state.token = action.payload?.token      

        })      
        .addCase(login.pending, (state)=>{
            state.loading = true
        })    
        .addCase(login.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        }) 
        .addCase(register.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
            state.error = {}
        })      
        .addCase(register.pending, (state)=>{
            state.loading = true
        })    
        .addCase(register.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })   
        .addCase(wishlist.fulfilled , (state, action)=>{
            state.loading = false
            state.wishlist = action.payload
        })
        .addCase(wishlist.pending , (state)=>{
            state.loading = true
        })  
        .addCase(wishlist.rejected , (state, action)=>{
            state.loading = false
            state.error = action.payload
        })  
        .addCase(addtoWishList.fulfilled , (state, action)=>{
            console.log(action.payload)
            state.loading = false
            state.wishlist = action.payload.product
        })
        .addCase(addtoWishList.pending , (state)=>{
            state.loading = true
        })  
        .addCase(addtoWishList.rejected , (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(removeFromWishlist.fulfilled , (state, action)=>{
            state.loading = false
            state.wishlist = action.payload
        })
        .addCase(removeFromWishlist.pending , (state)=>{
            state.loading = true
        })  
        .addCase(removeFromWishlist.rejected , (state, action)=>{
            state.loading = false
            state.error = action.payload
        })  
    }
})



// export const {addToWishlist, removeFromWishlist} = auth.actions
export default auth.reducer