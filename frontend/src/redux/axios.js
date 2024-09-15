import axios from 'axios'
import {useSelector} from 'react-redux'
// import {'https'} from 'https' 
const axiosInstance =  axios.create({
  baseURL:'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us114.gitpod.io',
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false, // Disables SSL verification
  // }),
})

// axiosInstance.interceptors.request.use((config)=>{
//   const state = useSelector(state=>state.auth)
//   const token = state.token;
//   config.headers.authorization = token ? `Bearer ${token}` : ''
//   return config
// })


export default axiosInstance