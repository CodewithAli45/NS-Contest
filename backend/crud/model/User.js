const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: {type: Number, validate: {
    validator: function (age){
      return parseFloat(age) > 18
    },
    message: "not eligible to enter"
  }},
  password: { type: String, required: true },

});

const User = mongoose.model('User', userSchema);

module.exports = User;