const Cart = require('../models/cart')
const Product = require('../models/product')
const addToCart = async(req, res)=>{
    const cart = new Cart({
        products: [req.body.product],
        
    })

    await cart.save()
    res.status(200).json({"message":"added to cart"})
}

const removeFromCart = async(req,res)=>{
    
} 