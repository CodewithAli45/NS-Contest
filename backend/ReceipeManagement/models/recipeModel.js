const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
 // 'name' field is a required string
  // 'ingredients' field is a required array of strings
  // 'steps' field is a required array of strings
  // 'category' field is a string (optional)
  // 'user' field is a reference to the 'User' model
  // 'comments' field is an array of references to 'Comment' model
  name: {type: String, required: true},
  ingredients: {type: [String], required: true},
  steps: {type: [String], required: true},
  category: {type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }
  ]

});


const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;