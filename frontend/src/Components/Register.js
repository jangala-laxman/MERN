import React, {useState} from 'react'
import { register } from '../redux/thunk/auth.thunk'
import {useDispatch} from 'react-redux' 
const Register = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        username:'',
        age:'',
        email:'',
        password:'',
        phone:'',
        confirmPassword:''
    })

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register(form))
    }
   
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='username' name="username" value={form.username} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='age' name="age" value={form.age} onChange={handleChange} />
                </div>   
                <div>
                    <input type="text" placeholder='phone' name="phone" value={form.phone} onChange={handleChange} />
                </div>   
                <div>
                    <input type="text" placeholder='email' name="email" value={form.email} onChange={handleChange} />
                </div>   
                <div>
                    <input type="text" placeholder='password' name="password" value={form.password} onChange={handleChange} />
                </div>   
                <div>
                    <input type="text" placeholder='confirm password' name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                </div>   
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <p>Already a user? <a href="/user/login">Login</a> here</p>
        </div>
    )
}

export default Register