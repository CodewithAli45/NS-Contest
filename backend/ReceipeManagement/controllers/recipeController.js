const mongoose = require("mongoose");
const Recipe = require("../models/recipeModel");

const createRecipe = async (req, res) => {
    const {name, ingredients, steps, category} = req.body;
    try {
        const recipe = new Recipe({
            name, ingredients, steps, category
        });
        await Recipe.create(recipe);
        res.status(201).json({
            status: "success",
            recipe
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getRecipe = async (req, res) => {
    const {id} = req.params;
    try {
        // const recipeId = new mongoose.Types.ObjectId(req.params.id);
        // Find the recipe by its ID and populate comments and user details
        // Populate user details for comments
        // Respond with the retrieved recipe
        console.log("recipe id ", id);

        const recipe = await Recipe.findById(id)
        .populate('user', 'username email') // Populate user details with username and email
        .populate({
            path: 'comments',
            populate: { path: 'user', select: 'username email' }, // Populate user details for each comment
        });

        if(!recipe){
            return res.status(200).json({
                status: "failure",
                msg: "no recipe found"
            })
        }

        res.status(200).json(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllRecipe = async (req, res) => {

    try {
        // Retrieve all recipes from the database
        // Respond with the list of recipes
	const recipe = await Recipe.find();
	res.status(200).json(recipe);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    createRecipe,
    getAllRecipe,
    getRecipe
}