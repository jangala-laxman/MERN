import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";
// import axios from "axios";
const baseUrl = 'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us114.gitpod.io'

const addToCart = createAsyncThunk('checkout', async(cart)=>{
    try{
        const res = await fetch(`${baseUrl}/checkout`, {
            body:JSON.stringify({cart:cart})
        })
        const data = res.json()
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        return err
    }
})

const wishlist = createAsyncThunk('wishlist', async()=>{
    try{
        const res = await axiosInstance.get('/')
        return res
    }catch(err){
        return err
    }
})

const addtoWishList = createAsyncThunk('addtoWishlist',async(product)=>{
    try{
        const res = await axiosInstance.post('/wishlist',{product})
        console.log(res)
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
})

const removeFromWishlist = createAsyncThunk('removeFromWishlist',async(product)=>{
    try{
        const res = await axiosInstance.get('/:ProductId',{
            product :product
        })
        console.log(res)
        return res.data
    }catch(err){
        console.log(err)
        throw err
    }
})

export {addToCart, wishlist, addtoWishList, removeFromWishlist}