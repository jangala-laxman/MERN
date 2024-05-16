const Product = require('../models/product')

const addProduct = async(req,res)=>{
    try{
        const newProduct = new Product({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            rating:req.body.rating,
            productImage:req.body.productImage,
            category:req.body.category
        })
    
        if(req.body.name==null || req.body.price ==null|| req.body.category==null){
            res.status(401).json({"field":"fields cannot be empty"})
        }
        await newProduct.save()
    
        res.status(200).json({"message":`${req.body.name} product added successfully`})
    
    }catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }
}

const getProduct=async(req,res)=>{
    try{
        const product = await Product.findById({_id:req.params.productId})
        res.status(200).json({"message":`${product.name} `})
    }catch(err){
        console.log(err)
        res.json({error:err})
    }
}

const updateProduct = async(req,res)=>{
    try{
        await Product.findByIdAndUpdate({_id:req.params.productId}, {
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            rating:req.body.rating,
            productImage:req.body.productImage,
            category:req.body.category
        }) 
    }catch(err){
        console.log(err)
        res.json({error:err})
    }
}

const deleteProduct  = async(req, res)=>{
    try{
        await Product.findByIdAndDelete({_id:req.params.productId})
    }catch(err){
        console.log(err)
        res.json({error:err})
    }
}

module.exports = {addProduct, getProduct, updateProduct, deleteProduct}