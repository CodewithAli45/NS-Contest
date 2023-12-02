const Comment = require('../models/commentModel');
const Recipe = require('../models/recipeModel');
const User = require('../models/userModel');


const createComment = async (req, res) => {
  const { recipeId } = req.params;
    try {
      // TODO: Implement input validation and sanitation for the 'text' field
  
      // Extract relevant data from the request body and parameters
      const { text } = req.body;
      const userId = req.user.id;
      
      // console.log("userid", userId);
      const recipe = await Recipe.findById(recipeId);
      if(!recipe){
        return res.status(404).json({
            status: "failure", 
            msg: "receipe not found"
        })
      }
     
      const comment = new Comment({
        text,
        user: userId,
        recipe: recipeId
      });
      recipe.comments.push(comment._id);
      await comment.save();

      res.status(201).json({
        message: 'Comment created successfully',
        comment,
    });

      // TODO: Implement user authorization and authentication checks here
      // TODO: Create a new Comment instance with the extracted data
      // TODO: Save the new comment to the database
      // TODO: Update the associated recipe's comments with the new comment
      // TODO: Respond with a success message and the newly created comment


    } catch (error) {
      // Handle errors by logging and responding with a 500 Internal Server Error
      console.error('Error creating comment:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createComment
}