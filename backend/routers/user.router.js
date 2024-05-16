const express = require('express');
const router = express.Router();
const {
  login,
  register,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller.js');
router.post('/register', register);
router.post('/login', login);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
