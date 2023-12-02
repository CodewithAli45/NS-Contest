const { getAllRecipe, getRecipe, createRecipe } = require('../controllers/recipeController');
const isLoggedIn = require('../middlewares/isLoggedIn');

const recipeRouter = require('express').Router();

recipeRouter.get('/getAllReceipt', isLoggedIn, getAllRecipe);
recipeRouter.get('/getRecipe/:id', isLoggedIn, getRecipe);
recipeRouter.post('/createRecipe', isLoggedIn, createRecipe);



module.exports = recipeRouter; 