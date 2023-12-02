const express = require('express');
const router = require('../routes/bookRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/books', router)

module.exports = app;