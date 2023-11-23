const express = require('express');
const {hashedPassword} = require('../controller/userController');
const router = express.Router();

// Register a new user
router.post('/register', hashedPassword);

module.exports = router;