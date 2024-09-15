const router = require('express').Router()
const { addToWishlist, removeFromWishlist, getWishListItems } = require('../controllers/wishlist.controller')

router.get('/', getWishListItems)
router.post('/', addToWishlist)
router.get('/:ProductId', removeFromWishlist)

module.exports = router