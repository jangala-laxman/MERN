import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useToken from '../../hooks/useToken';
const ProtectedRoute = () => {
    
    const {token}= useToken();
    return ( token !== '' ? <Outlet/> : <Navigate to='/user/login' replace/>)
}

export default ProtectedRoute