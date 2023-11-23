const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/studentRoutes');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;

const app = express();

app.use(express.json());

mongoose.connect(url).then(() =>{
    console.log("connected to db");
}).catch((err) => {
    console.log("error in connecting to db", err);
});

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`The server running at http://localhost:${port}`);
})