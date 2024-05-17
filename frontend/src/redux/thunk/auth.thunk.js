import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
const backendPoint = 'https://3001-jangalalaxman-mern-eydop85id8y.ws-us110.gitpod.io'

const home = createAsyncThunk('home', async () => {
    try {
        const res = await axios.get(backendPoint, {
            auth:{
                username:'jangala-laxman',
                password:'kickhass#48'
            },
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "https://3000-jangalalaxman-mern-eydop85id8y.ws-us110.gitpod.io"
            }
        })
            .then((res) => res.data)
            .catch((err) => console.log(err))

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
        },{
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "https://3000-jangalalaxman-mern-eydop85id8y.ws-us110.gitpod.io"
            }
        }
        ).then((res) => console.log(res))
            .catch((err) => console.log(err))
        
        
        return res
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
    }).then((res) => res.data)
        .catch((err) => console.log(err))
    return res
})

export { home, login, register }