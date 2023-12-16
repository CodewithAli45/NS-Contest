const express = require('express');
const mognoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;
const url = process.env.DB_URL;

const app = express();

app.use(express.json());

mognoose.connect(url).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log("error in connecting to db ", err);
});



app.listen(port, () => {
    console.log("server is running");
})