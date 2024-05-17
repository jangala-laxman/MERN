import {Routes, Route, Link} from 'react-router-dom'
import React from 'react';
import './App.css';
import logo from './logo.png'

const Login = React.lazy(()=>import('./Components/Login'))
const Register = React.lazy(()=>import('./Components/Register'))
const Home = React.lazy(()=>import('./Components/Home'))
const Cart = React.lazy(()=>import('./Components/Cart'))
const Orders = React.lazy(()=>import('./Components/Orders'))
const WishList = React.lazy(()=>import('./Components/WishList'))
const Category = React.lazy(()=>import('./Components/Category'))


function App() {
  return (
    <div className="App">
      <header>
       <div>
        <img src={logo} alt="logo" className='logo' />
       </div>
       <div className='nav'>
          <Link to="/" className='links'>Home</Link>
         
        </div>
        <div className='sign'>
          <Link to="/user/login" className='links'>Login</Link>
          <Link to="/user/register" className='links'>Register</Link>
        </div>
      </header>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<WishList/>}/>

          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>

        </Routes>

      </React.Suspense>
        </div>
  );
}

export default App;
