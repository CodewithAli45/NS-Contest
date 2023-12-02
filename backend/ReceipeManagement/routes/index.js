const commentRouter = require("./commentRouter");
const recipeRouter = require("./recipeRouter");
const userRouter = require("./userRoute");


const router = {
    userRouter,
    recipeRouter,
    commentRouter
}

module.exports = router;

