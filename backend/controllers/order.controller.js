const User = require('../models/user')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)


module.exports.checkout = async (req, res) => {
  try {
    const user = await User.findOne({ email: 'srilaxman48@gmail.com' })
    const cart = user.cart
    const lineItems = cart.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          images: [item.productImage]
        },
        unit_amount: item.price
      },
      quantity: item.quantity
    }))
    console.log(lineItems)
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us115.gitpod.io/success',
      cancel_url: 'https://3001-jangalalaxman-mern-jxz5jnkbkmn.ws-us115.gitpod.io/cancel'
    })
    if(session.url){
      await user.updateOne({cart:[]})
    }
    console.log(session.url)
    res.redirect(session.url)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
