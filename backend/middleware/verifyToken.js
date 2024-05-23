const jwt = require('jsonwebtoken')
// const express = require('express')
require('dotenv').config()

const verifyToken = async(req, res, next)=>{
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)
    if(token){
        const compare = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded)=>{
            if(err) 
                return res.sendStatus(403)
            console.log(decoded)
            req.user = decoded.username
        } )
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