import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
const backendPoint = 'https://3001-jangalalaxman-mern-eydop85id8y.ws-us110.gitpod.io'

const home = createAsyncThunk('home', async()=>{
    try{
        const res= await axios.get(backendPoint)
        return res
    }catch(err){
        console.log(err)
        return err
    }
})

const login = createAsyncThunk('login', async({username, password})=>{
    const res= await axios.post(backendPoint+'/user/login', {
        username:username,
        password:password
    })
    return res
})

const register = createAsyncThunk('register', async(form)=>{
    const res= await axios.post(backendPoint+'/user/register', {
        username:form.username,
        email:form.email,
        age:form.age,
        phone:form.phone,
        password:form.password
    })
    return res
})

export {home,login, register}