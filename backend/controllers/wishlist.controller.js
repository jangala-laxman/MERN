const User = require('../models/user')

const getWishListItems = async(req,res)=>{
    try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        console.log(user.wishlist)
        res.json({wishlist:user.wishlist})
    }catch(err){
        console.log(err)
        res.json(err)
    }
}

const addToWishlist = async(req,res)=>{
    try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        let wishlist = user.wishlist
        if(user.wishlist.find(i=>i.ProductId===req.body.product.ProductId)){
            return res.json("item already added to wishlist")
        }else{
            wishlist = [...wishlist, req.body.product]
        }
        await user.updateOne({wishlist:wishlist})
        console.log(req.body.product)
        res.json(`${req.body.product} added to wishlist`)
    }catch(err){
        console.log(err)
        res.json(err)
    }
}

const removeFromWishlist = async(req,res)=>{
    try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        let wishlist = user.wishlist
        console.log(req.params)
        if(user.wishlist.find(i=>i.ProductId!==req.params.ProductId)){
            wishlist = wishlist.filter(i=> i.ProductId !== req.params.ProductId )
            await user.updateOne({wishlist:wishlist})
            return res.json(`${req.body.product} removed from wishlist`)
        }
        console.log(user)
        res.json(`${req.body.product.ProductTitle} not added to wishlist`)
    }catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports = {getWishListItems, addToWishlist, removeFromWishlist}