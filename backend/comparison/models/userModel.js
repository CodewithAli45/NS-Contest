// User Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    // Field 1: Define a property for 'username' with a String data type and make it required
    // Field 2: Define a property for 'email' with a String data type
    // Field 3: Define a property for 'age' with a Number data type and make it required

    username :{type: String, required: true},
    email :{type: String},
    age :{type: Number, required: true}
  },

  { timestamps: true }
);


module.exports = mongoose.model('User', userSchema);