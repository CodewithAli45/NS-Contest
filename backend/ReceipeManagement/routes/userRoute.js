const { getAllRegisteredUser, login, signup } = require('../controllers/userController');

const userRouter = require('express').Router();


userRouter.get('/allUsers', getAllRegisteredUser);
userRouter.post('/login', login)
userRouter.post('/signup', signup);

module.exports = userRouter;
