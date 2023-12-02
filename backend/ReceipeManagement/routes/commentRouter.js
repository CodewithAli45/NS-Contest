const { createComment } = require('../controllers/commentController');
const isLoggedIn = require('../middlewares/isLoggedIn');

const commentRouter = require('express').Router();

commentRouter.post('/add/:recipeId', isLoggedIn, createComment)

 
module.exports = commentRouter; 