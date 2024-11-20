
import { useState } from "react";
import { useSelector } from "react-redux";

const useToken = ()=>{
    const getToken = ()=>{
        const token = localStorage.getItem('token')
        const userToken = JSON.parse(token);
        return userToken?.token;
    }
    const [token, setToken] = useState(getToken());
    const reduxToken = useSelector(state => state.auth.token);

    const saveToken= ()=>{
        localStorage.setItem("token", JSON.stringify(reduxToken));
        setToken(token)
    }

    return {
        setToken:saveToken,
        token
    }
}

export default useToken