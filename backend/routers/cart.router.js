const express = require('express')
const router =  express.Router()
const User = require('../models/user')
const cartController = require('../controllers/cart.controller')
//add items in cart
router.post('/add', cartController.addToCart)
router.get('/remove/:productId', cartController.removeFromCart)
//get items from cart
router.get('/', cartController.getCart)

module.exports = router