const jwt = require('jsonwebtoken')
const express = require('express')


const verifyToken = async(req, res, next)=>{
    const token = req.headers['Authorization'][1]
    if(token.user === req.user){
        jwt.verify()
        next()
    }else{
        next( new Error("invalid token"))
    }
}


module.exports = verifyToken