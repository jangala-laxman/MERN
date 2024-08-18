const mongoose = require('mongoose');
const product = {
  ProductId:{
    type:Number,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity:{
    type:Number,
    required:true
  },
  category: {
    type: String,
  }
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
  },
  role: {
    eval: ['user', 'admin'],
  },
  cart: {
    type: [product],
    required: true,
    count: Number,
    _id: false
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order'
  }]
});

const user = mongoose.model('User', userSchema);
module.exports = user;
