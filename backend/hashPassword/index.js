const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;
const mongoose = require('mongoose');
const router = require('./routes/userRoutes');


const app = express();

mongoose.connect(url).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log('something went wrong in connecting to db', err);
})

app.use(express.json());
app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});