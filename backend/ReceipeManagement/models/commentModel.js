const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  // 'text' field is a string
  // 'user' field is a reference to the 'User' model
  // 'recipe' field is a reference to the 'Recipe' model

  text: {type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
  }
  
});

module.exports = mongoose.model('Comment', commentSchema);