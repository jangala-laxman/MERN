const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:buffer,        
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        eval:['shirts', 'trousers', 'shoes', 'watches', 'innerwear']
    }
})

const product = mongoose.model('product', productSchema)
module.exports = product 