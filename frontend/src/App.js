import {Routes, Route, Link} from 'react-router-dom'
import React from 'react';
import './App.css';
const Login = React.lazy(()=>import('./Components/Login'))
const Register = React.lazy(()=>import('./Components/Register'))
const Home = React.lazy(()=>import('./Components/Home'))

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/user/login">Login</Link>
        <Link to="/user/register">Register</Link>
      </header>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>

        </Routes>

      </React.Suspense>
        </div>
  );
}

export default App;
