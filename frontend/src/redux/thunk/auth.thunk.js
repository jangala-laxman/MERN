import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
// import store from '../store'
// import axiosIns from "../axios"
const baseUrl = 'https://3001-jangalalaxman-mern-67zza66eqef.ws-us116.gitpod.io'

const home = createAsyncThunk('home', async () => {
    try {
        const res = await axios.get(baseUrl)
        return res.data
    } catch (err) {
        console.log(err.code)
        return err.code
    }
})

const login = createAsyncThunk('login', async ({ email, password }) => {
    try {
        const res = await axios.post(`${baseUrl}/user/login`, {
            email: email,
            password: password
        })
        console.log(res.data)
        localStorage.setItem("token", JSON.stringify(res.data.token));

        
        return res.data
    }
    catch (err) {
        console.log(err)
        return err
    }
})

const register = createAsyncThunk('register', async (form) => {
    try {
        const res = await axios.post(baseUrl + '/user/register', {
            username: form.username,
            email: form.email,
            age: form.age,
            phone: form.phone,
            password: form.password,
            confirmPassword:form.confirmPassword
        })
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
        return err
    }
})

export { home, login, register }