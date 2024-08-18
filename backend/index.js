const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routers/user.router.js');
const verifyToken = require('./middleware/verifyToken.js')
const cookieParser = require('cookie-parser')
const orderRouter = require('./routers/order.router.js')
const cartRouter = require('./routers/cart.router.js')

mongoose
  .connect('mongodb+srv://srilaxman48:L1u9c9k9y@cluster0.zwtmwnc.mongodb.net/MERN')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const corsOption = {
  origin: ['https://3000-jangalalaxman-mern-jxz5jnkbkmn.ws-us114.gitpod.io'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
  ],
}
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser())
app.use('/user', userRouter);
app.use('/order', orderRouter)
app.use('/cart', cartRouter)

app.get('/', (req, res) => {
  res.send('hi there');
});


app.listen('3001', () => console.log('server is running on port 3001'));
