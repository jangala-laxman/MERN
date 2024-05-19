import React, { useState } from 'react'
import { home } from '../redux/thunk/auth.thunk'
import {useDispatch} from 'react-redux'
import payload from '../flipkart_fashion_products_dataset.json'
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
        {payload.map((item)=>{
          return (
            <div key={item.uniq_id}>
              <p>{item.product_name}</p>
            </div>
          )
        })}
      </div>
  )
}

export default Home