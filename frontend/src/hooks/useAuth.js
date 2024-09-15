import AuthContext from '../context/auth'
import { createContext, useContext, useLayoutEffect, useState} from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({})
    useLayoutEffect(()=>{
        const fetchToken = async()=>{
            await fetch('')
        }
    }, [])
    return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
    )
}

const useAuth = ()=>{
    return useContext(AuthContext)
}

export default useAuth