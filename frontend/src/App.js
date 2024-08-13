import { Routes, Route, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProtectedRoute from './Components/Reuse/ProtectedRoute';
import { useSelector } from 'react-redux';
import SubCategory from './Components/SubCategory/SubCategory';

const Login = React.lazy(() => import('./Components/Login'))
const Register = React.lazy(() => import('./Components/Register'))
const Home = React.lazy(() => import('./Components/Home/Home'))
const Cart = React.lazy(() => import('./Components/Cart'))
const Orders = React.lazy(() => import('./Components/Orders'))
const WishList = React.lazy(() => import('./Components/WishList'))

function App() {
  const [openMenu, setOpenMenu] = useState(true)
  const [isLogged, setisLogged] = useState(false)
  const state = useSelector(state => state.auth)

  const handleMenu = (e) => {
    e.preventDefault()
    setOpenMenu((prev) => prev = !prev)
  }

  useEffect(() => {
    if (state.token !== "") {
      setisLogged(true)
    }
  }, [state.token])
  return (
    <div className="App">

      <header>
        <div>
          <Link to="/" className='links'><img src={logo} alt="logo" className='logo' /></Link>
        </div>
        <div className='menu' onClick={handleMenu}>
          {openMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
        <div className={openMenu ? 'closeLinkDiv' : 'linkDiv'} >

          <div className='nav'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/orders" className='links'>Orders</Link>
          </div>
          {!isLogged ? <div className='sign'>
            <Link to="/user/login" className='links'>Login</Link>
            <Link to="/user/register" className='links'>Register</Link>
          </div> :
            <div className='sign'>
              <Link to="/wishlist" className='links'><FavoriteBorderIcon /></Link>
              <Link to="/cart" className='links'><ShoppingCartIcon /></Link>
              <Link to="/user/logout" className='links'>Logout</Link>
            </div>}
        </div>
      </header>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/men" element={<SubCategory gender="Men" />} />
          <Route path="/women" element={<SubCategory gender="Women" />} />
          <Route path="/boys" element={<SubCategory gender="Boys" />} />
          <Route path="/girls" element={<SubCategory gender="Girls" />} />


        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
