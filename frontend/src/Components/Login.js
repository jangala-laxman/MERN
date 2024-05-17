import React, { useState } from 'react'
import { login } from '../redux/thunk/auth.thunk'
import { useDispatch, useSelector } from 'react-redux'
const Login = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.auth)
    const [payload, setPayload] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ username, password }))
        setPayload(state)
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /></div><div>
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <p>Not a user? <a href="/register">Register</a> here</p>
        </div>

    )
}

export default Login