const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.DB_URL;


const dbConnection = async() => {
    try {
        await mongoose.connect(url);
        console.log("connected to database");
    } catch (error) {
        console.log("error in connecting to database ", error);
    }
}

module.exports = dbConnection;
