const mongoose = require('mongoose')
const product = require('./product')
const user = require('./user')

const cartSchema = new mongoose.Schema({
    products : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: product,
        required:true
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    count:{
        type:Number,
        required:true
    }
})

const cart = mongoose.model('Cart', cartSchema);
module.exports = cart