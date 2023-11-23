const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// TODO: Implement user registration logic with password hashing
const hashedPassword = async (req, res) => {
  const {username, password} = req.body;
  try {
    // TODO: Hash the password using bcrypt
    // TODO: Create a new user with the hashed password
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(403).json({
            status: "failure",
            msg: "user already exists"
          })
    }


    const salt = await bcrypt.genSalt(10);
    const hashpwd = await bcrypt.hash(password, salt);

    const newUser = new User({
      username, password: hashpwd
    });

    await User.create(newUser);
    return res.status(201).json({
      status: "success",
      data: newUser
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { hashedPassword };