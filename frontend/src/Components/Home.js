import React, { useEffect } from 'react'
import { home } from '../redux/thunk/auth.thunk'
import {useDispatch} from 'react-redux'
const Home = () => {
  // const selector = useSelector((state)=>state.authReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(home())
  } , [])
  return (
    <div>
      <h2>Home</h2>
      <button>click here</button>
      </div>
  )
}

export default Home