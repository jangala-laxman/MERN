const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routers/user.router.js');

mongoose
  .connect('mongodb+srv://srilaxman48:L1u9c9k9y@cluster0.zwtmwnc.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
 
app.use(cors({origin:'https://3000-jangalalaxman-mern-eydop85id8y.ws-us110.gitpod.io'}));
app.use(express.json());
app.use('/user', userRouter);
app.get('/', (req, res) => {
  console.log("hi there")
  res.send('hi there');
});

app.listen('3001', () => console.log('server is running on port 3001'));
