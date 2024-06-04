import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
const Home = () => {

  const [data, setData] = useState([])

  const fetchData = ()=>{
    const res = fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>console.log(err))
    
    console.log(res)
  }

  useEffect(()=>{
    fetchData()
  })

  return (
    <div>
      <h2>Home</h2>
        
        {data.length > 0 ? data.map((item)=>{
          return (
            <Product key={item.id} 
              title={item.title}
              description={item.description}
              images={item.images}
              price={item.price}
              category={item.category}
            />
          )
        }) : <div>No data</div>}
      </div>
  )
}

export default Home