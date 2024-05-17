import React, { useState } from 'react'
import { home } from '../redux/thunk/auth.thunk'
import {useDispatch} from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
 
  const [data, setData] = useState('')
  const handleSubmit = (e)=>{

    e.preventDefault()
    dispatch(home()).then((data)=>setData(data.payload))
    
  }
  return (
    <div>
      <h2>Home</h2>
        <button onClick={handleSubmit}>click here</button>
        <h2>{data}</h2>
      </div>
  )
}

export default Home