import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
const backendPoint = 'https://3001-jangalalaxman-mern-eydop85id8y.ws-us114.gitpod.io'

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
    const res = await axios.post(backendPoint + '/user/register', {
        username: form.username,
        email: form.email,
        age: form.age,
        phone: form.phone,
        password: form.password
    })
    return res.data
})

export { home, login, register }