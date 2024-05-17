import {createSlice} from '@reduxjs/toolkit'
import {home, login, register} from './thunk/auth.thunk'
const initialState={
    user : null,
    loading:false,
    error:{},
    data:'',
    token:''
}
const slice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
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
            console.log(action)
            state.loading = false
            state.error = null           
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
    }
})
export const authActions = slice.actions
export default slice.reducer