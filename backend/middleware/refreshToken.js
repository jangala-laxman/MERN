require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const handleRefreshToken = async(req, res)=>{
    const refresh_token = req.headers.cookie.split("=")[1]
    if(refresh_token === null) return res.sendStatus(401)
    try{
        const user = await User.findOne({refresh_Token:refresh_token})
        if(user){
            jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET) 
            const access_token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
            res.json({token:access_token})
        }else{
            console.log("invalid token")
            res.sendStatus(403)
        }
    }catch(err){
        console.log(err)
        res.json(err)
    }
   
    

}

module.exports = handleRefreshToken