require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const handleRefreshToken = async()=>{
    const cookie = req.cookies
    if(cookie?.jwt) return res.sendStatus(401)
    console.log(cookie.jwt)
    const refresh_token = cookie.jwt

    const user = await User.findOne({refresh_Token:refresh_token})
    if(user){
        console.log(user)
    }
    
    jwt.verify(user.username, process.env.REFRESH_TOKEN_SECRET, (err, decoded)=>{
        if(err) 
            return res.sendStatus(403)
        
        const access_token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
        res.json({token:access_token})
    })

}

module.exports = handleRefreshToken