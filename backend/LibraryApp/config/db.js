const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/bookModel');
const { book } = require('./data');
dotenv.config();
const url = process.env.DB_URL;


const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log("connected to database");

        // await Book.insertMany(book);
        // console.log(book.length, "data added");
    } catch (error) {
        console.log("error in connecting database ", error);
    }
}
module.exports = dbConnection;