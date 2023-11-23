const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username (String, required, unique)
  // password (String, required)
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;