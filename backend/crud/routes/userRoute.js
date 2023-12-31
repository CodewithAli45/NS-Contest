const express = require('express');
const authController = require('../controller/userController');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
// Protected route for testing isLoggedIn middleware
router.get('/protected', isLoggedIn, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;