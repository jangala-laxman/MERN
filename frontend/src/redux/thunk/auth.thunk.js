import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
const backendPoint = 'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us110.gitpod.io'

const home = createAsyncThunk('home', async () => {
    try {
        const res = await axios.get(backendPoint)

        return res
    } catch (err) {
        console.log(err.code)
        return err.code
    }
})

const login = createAsyncThunk('login', async ({ username, password }) => {
    try {
        const res = await axios.post(backendPoint + '/user/login', {
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
        const res = await axios.post(backendPoint + '/user/register', {
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