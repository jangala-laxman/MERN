import React, { useState } from 'react'
import { home } from '../redux/thunk/auth.thunk'
import {useDispatch} from 'react-redux'
import payload from '../flipkart_fashion_products_dataset.json'
const Home = () => {
  const dispatch = useDispatch()
 
  const [data, setData] = useState(false)
  const handleSubmit = (e)=>{
    setData(true)
    e.preventDefault()
    dispatch(home())
    
  }
  return (
    <div>
      <h2>Home</h2>
        <button onClick={handleSubmit}>click here</button>
        {data && payload.map((item)=>{
          return (
            <div key={item._id}>
              <img src={item.images[0]} alt={item.description} width={100} height={100} />
            </div>
          )
        })}
      </div>
  )
}

export default Home