import axios from 'axios'
import {useSelector} from 'react-redux'
const axiosIns = axios.create('https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us114.gitpod.io',{
  headers: {
          "Content-Type": "application/json",
        } 
})

axiosIns.interceptors.request.use((config)=>{
  const state = useSelector(state=>state.auth)
  const token = state.token;
  config.headers.authorization = token ? `Bearer ${token}` : ''
  return config
})

export default axiosIns

