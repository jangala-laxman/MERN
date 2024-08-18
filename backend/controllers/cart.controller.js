const User = require('../models/user')

const addToCart = async(req, res)=>{
   try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        let cart = user.cart
        cart= [...cart, ...req.body.product]
        let count=  cart.length
        await user.updateOne({cart:cart, count:count})

        res.status(200).json({"message":"added to cart"})
   }catch(err){
        console.log(err)
        res.status(500).json({"message":"failed to add item"})
   }
}

const removeFromCart = async(req,res)=>{
    try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        const products = user.cart
        const newCart = products.filter(item=>item.ProductId != req.params.productId)
        console.log("newCart", newCart)
        await User.updateOne({
            cart:newCart
        })
        res.status(200).json({newCart})
    }catch(err){
        console.log(err)
        res.status(500).json({"error":"failed to remove the item from cart"})
    }
} 

const getCart = async(req,res)=>{
    try{
        const user = await User.findOne({email:"srilaxman48@gmail.com"})
        console.log(user.cart)
        res.json(user.cart)
    }catch(err){
        console.log(err)
        res.json({"err":err})
    }
}

module.exports = {addToCart, removeFromCart, getCart}