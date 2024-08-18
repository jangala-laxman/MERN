const express = require('express')
const router =  express.Router()
const {checkout} = require('../controllers/order.controller')

router.post('/checkout', checkout)

module.exports = router