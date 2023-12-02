const express = require('express');
const router = require('../routes/index');
const bodyparser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyparser.json());

// user router
app.use('/api/v1/users', router.userRouter);
app.use('/api/v1/comment', router.commentRouter);
app.use('/api/v1/recipe', router.recipeRouter);



module.exports = app;