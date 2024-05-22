const jwt = require('jsonwebtoken')
// const express = require('express')


const verifyToken = async(req, res, next)=>{
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)
    if(token){
        const compare = jwt.verify(token, 'jwt')
        if(compare){
            console.log(true)
        }
        console.log("token verified")
        next()
    }else{
        next( new Error("invalid token"))
    }
}


module.exports = verifyToken