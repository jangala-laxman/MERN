import React, { useState } from 'react'
import { login } from '../redux/thunk/auth.thunk'
import { useDispatch, useSelector } from 'react-redux'

const Input = React.lazy(()=>import('./Reuse/Input'))
const Login = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ username, password }))       
    }
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input label="username" value={username} onChange={handleUsername} />
                <div>
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type='submit' className='button'>Login</button>
                </div>
            </form>
            <p>Not a user? <a href="/register">Register</a> here</p>
        </div>

    )
}

export default Login