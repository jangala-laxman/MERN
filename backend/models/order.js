const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    products : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: product,
        required:true,
        index:{unique:true}
    }],
    value:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required:true,
        index:true
    },
    payment:{
        type:boolean,
        index:{unique:true}
    }
}) 

const order = mongoose.model('Order', orderSchema)

module.exports = order