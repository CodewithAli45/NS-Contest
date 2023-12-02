const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const users = require('../utils/users');
dotenv.config();
const url = process.env.DB_URL;


const dbconnection = async() => {
    try {
        await mongoose.connect(url); 
        console.log("connected to db");
        // await User.insertMany(users);
        // console.log(`${users.length} users addedd in db`);

    } catch (error) {
        console.log("error in connecting to db", error);
    }
}

module.exports = dbconnection;