import React, { useEffect, useState } from 'react'
import './categories.css'
const Category = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchData = ()=>{
      fetch('https://api.escuelajs.co/api/v1/categories')
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch(err=>console.log(err))
    }
    fetchData()
  })
  return (
    <div className='categories'>
      {data && data?.map((item, index)=>{
        return(
          <div key={item.id} className='category'>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Category