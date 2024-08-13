import React, { useEffect, useState } from 'react'
// import Product from '../Product'

import man from '../../assets/images/man.jpg'
import woman from '../../assets/images/woman.jpg'
import boy from '../../assets/images/boy.jpg'
import girl from '../../assets/images/girl.jpg'
import banner from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'


import './Home.css'
import SubCategory from '../SubCategory/SubCategory'
import { Link } from 'react-router-dom'
const Home = () => {
  let bannerArray = [banner, banner2, banner3, banner4, banner5]
  // const [ban, setBan] = useState(bannerArray[0])
  const [category, setCategory] = useState("")

  const handleClick = (e)=>{
    setCategory(prev=>prev=e.target.alt)
  }

  return (
    <div>
      <h2>Home</h2>
      <div className='main'>
        <section className='banner'>
          {bannerArray.map(item=>(
            <img src={item} alt='banner' className='bannerImg'/>
          ))}
        
        </section>
        <h2>Categories</h2>
        <h4>Shop for </h4>
        <div className='gender'>
          <Link to="/men"><img src={man} alt="Men" loading='lazy' height={300} onClick={(e)=>setCategory(prev=>prev=e.target.alt)}/></Link>
          <Link to="/women"><img src={woman} alt="Women" loading='lazy' height={300} onClick={(e)=>setCategory(prev=>prev=e.target.alt)}/></Link>
          <Link to="/boys"><img src={boy} alt="Boys" loading='lazy' height={300} onClick={handleClick}/></Link>
          <Link to="/girls"><img src={girl} alt="Girls" loading='lazy' height={300} onClick={handleClick}/></Link>
        </div>
      </div>

    </div>
  )
}

export default Home