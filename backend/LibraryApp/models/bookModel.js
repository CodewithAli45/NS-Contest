const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {type: String, required: true, unique:true},
    description : {type: String, required: true},
    genre : {type: String, required: true},
    author : {type: String, required: true},
    rating : {type: Number, required: true},
    review : {type: String, required: true},
    FavQuotes : {type: String, required: true},
    section : {type: String, default : '0'},
}, {timestamps: true});


const Book = mongoose.model('book', bookSchema);

module.exports = Book;