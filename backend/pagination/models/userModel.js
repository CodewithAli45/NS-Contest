const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // 'name' field is of type String
  // It is required (cannot be empty)
  // 'age' field is of type Number
  // It is required (cannot be empty)
  // 'course' field is of type String
  // It is required (cannot be empty)
  // 'experience' field is of type Boolean
  // It has a default value of 'true'

  name: {type: String, required: true},
  age: {type: Number, required: true},
  course: {type: String, required: true},
  experience: {type: Boolean, default: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;