import React , {useState} from 'react'
import { login } from '../redux/thunk/auth.thunk'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={login({ username, password })}>
                <div>
                    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /></div><div>
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>   <div><button type='submit'>Login</button></div>
            </form>
            <p>Not a user? <a href="/register">Register</a> here</p>
        </div>

    )
}

export default Login