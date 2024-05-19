const User = require('../models/user');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { username, age, email, password, confirmPassword } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res.status(400).json({ 'message': 'user email already exists' });

  const newUser = new User({
    username: username,
    age: age,
    email: email,
    password: password,
  });
  if (password == confirmPassword) {
    await newUser.save();
    res.status(200).json({"username":username});
  } else if (password != confirmPassword) {
    console.log(password)
    console.log(confirmPassword)
    console.log("passwords doesnt match")
    res.json({"message":'passwords doesnt match'});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(401).json({ message: "email doesn't exist" });

  if (password === user.password) {
    const token = jwt.sign(user.username, 'jwt')
    req.username = user.username
    
    res.status(200).json({token:token, user:user.username, message:'user logged in successfully '});
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
