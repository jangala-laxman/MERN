const User = require('../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const register = async (req, res) => {
  const { username, age, email, password, confirmPassword } = req.body;
  if(!username || !email || !password) return res.status(400).json({"message":"empty username/email/password"})
  const user = await User.findOne({ email: email });

  if (user)
    return res.status(400).json({ 'message': 'user email already exists' });
 
  if (password == confirmPassword) {
    const newUser = new User({
      username: username,
      age: age,
      email: email,
      password: await bcrypt.hash(password, 10),
    });
    await newUser.save();
    res.status(200).json({"username":username});
  } else if (password != confirmPassword) {
    console.log("passwords doesnt match")
    res.json({"message":'passwords doesnt match'});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({"message":"empty username/password"})
  const user = await User.findOne({ email: email });
  if (!user) return res.status(401).json({ message: "email doesn't exist" });
  const compare = await bcrypt.compare(password, user.password)
  if (compare) {
    const access_token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
    const refresh_token = jwt.sign(user.username, process.env.REFRESH_TOKEN_SECRET)
    await user.updateOne({refresh_Token:refresh_token})
    req.user = user
    res.cookie('jwt', refresh_token, {httpOnly:true, maxAge:24*60*60*1000})
    res.status(200).json({token:access_token, user:user.username, message:'user logged successfully '});
  } else if (password != user.password) {
    res.json('email/password doesnt match');
  }
};

const getUser = async (req, res) => {
  const user = await User.findById({ _id: req.params.userId });
  if (!user) {
    res.status(403).json({ error: 'user not exist ' });
  }
  res.status(200).json({ user: user });
};

const updateUser = async(req,res)=>{
 await User.findByIdAndUpdate({_id:req.params.userId}, {
    username:username,
    age:age,
    phone:phone
  })
  res.status(200).json({"message":"user updated successfully"})
}

const deleteUser = async(req,res)=>{
  await User.findByIdAndDelete({_id:req.params.userId})
   res.status(200).json({"message":"user updated successfully"})
 }

module.exports = { login, register, getUser, deleteUser, updateUser };
