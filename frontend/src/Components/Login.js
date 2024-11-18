import React, { useState } from 'react'
import { login } from '../redux/thunk/auth.thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import Button from './Reuse/Button'
// import Input from './Reuse/Input'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state)=>state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
        navigate("/")
    }
    console.log(state)
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* <Input label="username" value={username} onChange={handleUsername} /> */}
                <div>
                    <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type='submit' name="submit" >login</button>
                </div>
            </form>
            <p>Not a user? <a href="/user/register">Register</a> here</p>
        </div>

    )
}

export default Login