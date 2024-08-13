import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
// import store from '../store'
// import axiosIns from "../axios"
const baseUrl = 'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us114.gitpod.io'

const home = createAsyncThunk('home', async () => {
    try {
        const res = await axios.get(baseUrl)
        return res.data
    } catch (err) {
        console.log(err.code)
        return err.code
    }
})

const login = createAsyncThunk('login', async ({ username, password }) => {
    try {
        const res = await axios.post(baseUrl + '/user/login', {
            email: username,
            password: password
        })
        console.log(res.data)
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