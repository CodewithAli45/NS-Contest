const express = require('express');
const dbConnection = require('./db');
const router = require('../routes');


const app = express();
app.use(express.json());

dbConnection();

app.use('/api/v1/books', router.bookRouter);
app.use('/api/v1/users', router.userRouter);

module.exports = app;