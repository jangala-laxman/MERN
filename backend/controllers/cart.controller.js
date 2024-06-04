const Cart = require('../models/cart')

const addToCart = async(req, res)=>{
   try{
        await Cart.findByIdAndUpdate({id:req.params.cartId},{
            products: [...existingProducts.products, req.body.product],
            count:existingProducts.length + req.body.product.length
        })
        console.log("item add to cart successfully")
        res.status(200).json({"message":"added to cart"})
   }catch(err){
        console.log(err)
        res.status(500).json({"message":"failed to add item"})
   }
}

const removeFromCart = async(req,res)=>{
    try{
        const cart = await Cart.findById({id:req.params.id})
        const products = cart.products
        const newCart = products.filter(item=>item.id !== req.params.productId)
        await cart.updateOne({
            products:newCart
        })
        res.status(200).json({"message":"item deleted from cart successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({"error":"failed to remove the item from cart"})
    }
} 


module.exports = {addToCart, removeFromCart}