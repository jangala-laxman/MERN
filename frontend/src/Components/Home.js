import React, { useEffect, useState } from 'react'
import { home } from '../redux/thunk/auth.thunk'

import {useDispatch} from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetchData()
    dispatch(home())    
  }
  const fetchData = ()=>{
    const res = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>console.log(err))
    
    console.log(res)
    return res
  }

  return (
    <div>
      <h2>Home</h2>
        <button onClick={handleSubmit}>click here</button>
        {data.length > 0 ? data.map((item)=>{
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.description} width={100} height={100} />
            </div>
          )
        }) : <div>No data</div>}
      </div>
  )
}

export default Home