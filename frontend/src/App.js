import { Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ProtectedRoute from './Components/Reuse/ProtectedRoute';

const Login = React.lazy(() => import('./Components/Login'))
const Register = React.lazy(() => import('./Components/Register'))
const Home = React.lazy(() => import('./Components/Home'))
const Cart = React.lazy(() => import('./Components/Cart'))
const Orders = React.lazy(() => import('./Components/Orders'))
const WishList = React.lazy(() => import('./Components/WishList'))
const Category = React.lazy(() => import('./Components/Category'))


function App() {
  const [openMenu, setOpenMenu] = useState(true)

  const handleMenu = (e) => {
    e.preventDefault()
    setOpenMenu((prev) => prev = !prev)
  }

  return (
    <div className="App">

      <header>
        <div>
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className='menu' onClick={handleMenu}>
          {openMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
        <div className={openMenu ? 'closeLinkDiv' : 'linkDiv'} >

          <div className='nav'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/category" className='links'>Category</Link>
            <Link to="/orders" className='links'>Orders</Link>
            <Link to="/cart" className='links'>Cart</Link>
            <Link to="/wishlist" className='links'>WishList</Link>
          </div>
          <div className='sign'>
            <Link to="/user/login" className='links'>Login</Link>
            <Link to="/user/register" className='links'>Register</Link>
          </div>
        </div>
      </header>
      <React.Suspense fallback="Loading...">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute/>}>
          </Route>
          <Route path="/category" element={<Category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />

        </Routes>

      </React.Suspense>
    </div>
  );
}

export default App;
