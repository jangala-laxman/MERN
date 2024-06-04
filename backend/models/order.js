const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    id:{
        type:Number,
        eval:Math.floor(Math.random(0, 1)),
    },
    value:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    payment:{
        type:boolean,
    }
}) 

const order = mongoose.model('Order', orderSchema)

module.exports = order