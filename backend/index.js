const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routers/user.router.js');

mongoose
  .connect('mongodb+srv://srilaxman48:L1u9c9k9y@cluster0.zwtmwnc.mongodb.net/MERN')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const corsOption = {
  origin: ['https://3000-jangalalaxman-mern-jxz5jnkbkmn.ws-us110.gitpod.io'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

app.use(express.json());
app.use('/user', userRouter);
app.get('/', (req, res) => {
  res.send('hi there');
});



app.listen('3001', () => console.log('server is running on port 3001'));
