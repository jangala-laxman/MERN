const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,    
        required:true    
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
    }
})

const product = mongoose.model('product', productSchema)
module.exports = product 